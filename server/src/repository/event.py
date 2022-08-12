from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from .. import tables, schemas

def get_events(db:Session):
    return db.query(tables.Event).all()
    
def create_event(stage_id:int,request:schemas.Event,db:Session):
    new_event = tables.Event(time=request.time, duration = request.duration,price=request.price,stage_id=stage_id)
    db.add(new_event)
    db.commit()
    db.refresh(new_event)
    
def delete_event():
        pass
