from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from .. import tables, schemas



def create_user(request: schemas.User, db:Session):

    new_user = tables.Customer(name = request.name, phone = request.phone)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

def show_user(id:int , db:Session):

    user = db.query(tables.Customer).filter(tables.Customer.id == id).first()
    if user:
        return user
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)
    