from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_session
from .. import tables

router = APIRouter(prefix='/stages',tags=['Stages'])

@router.get('/')
def get_all():
    pass

@router.get('/{id}')
def get_one():
    pass

@router.post('/')
def create_stage():
    pass

@router.put('/')
def update_stage_info():
    pass

@router.delete('/{id}')
def delete_stage():
    pass