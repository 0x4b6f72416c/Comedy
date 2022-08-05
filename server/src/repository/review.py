from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from .. import tables, schemas


def get_review(id:int,db:Session):
    review = db.query(tables.Review).filter(tables.Review.id == id).first()
    if review:
        return review
    else:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)

def create_review(c_id,s_id,request:schemas.StageReview,db:Session):
    new_review = tables.Review(customer_id=c_id,stage_id=s_id, text = request.text, rating = request.rating)
    db.add(new_review)
    db.commit()
    db.refresh(new_review)
    
def get_all_for_stage(stage_id,db:Session):
    reviews = db.query(tables.Review).filter(tables.Review.stage_id == stage_id).all()
    return reviews

def delete_review():
    pass