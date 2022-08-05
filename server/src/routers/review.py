from matplotlib.pyplot import table
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_session
from .. import tables

router = APIRouter(prefix='/review',tags=['Reviews'])




@router.get('/{id}')
def get_review():
    pass

@router.post('/')
def create_review():
    pass

@router.delete('/{id}')
def delete_review():
    pass