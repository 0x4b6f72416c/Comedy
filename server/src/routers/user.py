from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_session
from .. import tables

router = APIRouter(prefix='/user',tags=['Users'])


@router.get('/{id}')
def get_user():
    pass

@router.post('/')
def create_user():
    pass
