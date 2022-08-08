from urllib import response
from fastapi import APIRouter, Depends,HTTPException,status
from sqlalchemy.orm import Session
from .. import schemas
from ..database import get_session
from ..repository import stage
from typing import List

router = APIRouter(prefix='/stages',tags=['Stages'])

@router.get('/', response_model=List[schemas.ShowStage])
def get_all(db:Session = Depends(get_session)):
    return stage.show_all(db,limit=100)

@router.post('/',status_code=status.HTTP_201_CREATED)
def create_stage(request:schemas.Stage,db:Session = Depends(get_session)):
    return stage.create_stage(request,db)

@router.put('/{id}',status_code=status.HTTP_202_ACCEPTED)
def update_stage_info(id:int,request:schemas.Stage,db:Session = Depends(get_session)):
    stage.update_stage_info(id,request,db)

