from matplotlib.pyplot import table
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_session
from .. import tables


router = APIRouter()

@router.get('/stage')
def get_all(db:Session = Depends(get_session)):
    stages = db.query(tables.Stage).all()