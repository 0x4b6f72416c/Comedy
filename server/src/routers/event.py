from fastapi import APIRouter, Depends,status
from sqlalchemy.orm import Session
from ..repository import event
from ..database import get_session
from .. import schemas

router = APIRouter(prefix='/event',tags=['Events'])

@router.get('/')
def get_events(db:Session=Depends(get_session)):
    return event.get_events(db)

@router.post('/',status_code=status.HTTP_201_CREATED)
def create_event(stage_id:int, request:schemas.Event,db:Session=Depends(get_session)):
    event.create_event(stage_id,request,db)

@router.delete('/{id}',status_code=status.HTTP_204_NO_CONTENT)
def delete_event(id:int,db:Session=Depends(get_session)):
    event.delete_event(id,db)