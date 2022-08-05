from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from ..database import get_session
from ..repository import user
from .. import schemas

router = APIRouter(prefix='/user',tags=['Users'])

@router.get('/{id}')
def get_user(id:int,db:Session = Depends(get_session)):
    return user.show_user(id,db)

@router.post('/',status_code=status.HTTP_201_CREATED)
def create_user(request:schemas.User,db:Session = Depends(get_session)):
    user.create_user(request,db)
