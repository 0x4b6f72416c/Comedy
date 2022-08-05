from fastapi import APIRouter, Depends,status
from sqlalchemy.orm import Session
from ..repository import review
from ..database import get_session
from .. import schemas

router = APIRouter(prefix='/review',tags=['Reviews'])

@router.get('/{id}')
def get_review(id:int,db:Session = Depends(get_session)):
    pass

@router.post('/',status_code=status.HTTP_201_CREATED)
def create_review(autor_id:int,stage_id:int,request:schemas.StageReview,db:Session=Depends(get_session)):
    review.create_review(autor_id,stage_id,request,db)

@router.delete('/{id}',status_code=status.HTTP_204_NO_CONTENT)
def delete_review():
    pass