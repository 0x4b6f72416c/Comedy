from sqlalchemy.orm import Session
from fastapi import HTTPException, status, Depends
from .. import tables, schemas

def create_stage(request:schemas.Stage,db:Session):
    new_stage = tables.Stage(name=request.name,
                            location=request.location,
                            rating=request.rating,
                            description=request.description,
                            user_owner=request.user_id)
    db.add(new_stage)
    db.commit()
    db.refresh(new_stage)

def show_all(db:Session,limit):
    stage_list = db.query(tables.Stage).limit(limit).all()
    return stage_list
    
def update_stage_info(stage_id:int, request:schemas.Stage, db:Session):
    stage = db.query(tables.Stage).filter(tables.Stage.id == stage_id)
    if not stage.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=f'Faild to update infromation for stage with id:{stage_id}')