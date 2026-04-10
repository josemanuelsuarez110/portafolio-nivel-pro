import os
from typing import List
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from datetime import datetime
from pydantic import BaseModel
from dotenv import load_dotenv

import logging

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

# Database Configuration
DATABASE_URL = os.environ.get("DATABASE_URL", "postgresql://user_pro:password_pro@localhost:5432/level_pro_db")

# Optimized engine for Cloud Databases (Supabase/Railway)
engine = create_engine(
    DATABASE_URL, 
    pool_pre_ping=True,  # Verifies connection before use
    pool_recycle=3600    # Recycles connections every hour
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# SQLAlchemy Model
class Sale(Base):
    __tablename__ = "sales"
    id = Column(Integer, primary_key=True, index=True)
    month = Column(String(10), nullable=False)
    amount = Column(Integer, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

# Pydantic Schema
class SaleSchema(BaseModel):
    month: str
    amount: int

    class Config:
        from_attributes = True

app = FastAPI(title="Portafolio Nivel Pro API")

# Secured CORS
origin = os.environ.get("FRONTEND_URL", "*")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/sales", response_model=List[SaleSchema])
def get_sales(db: Session = Depends(get_db)):
    try:
        sales = db.query(Sale).order_by(Sale.id).all()
        # Transform for chart matching the frontend expected key 'sales'
        return [{"month": s.month, "sales": s.amount} for s in sales]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
def health_check():
    return {"status": "online", "timestamp": datetime.utcnow()}

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
