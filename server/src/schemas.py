from pydantic import BaseModel
from typing import List

class User(BaseModel):
    name: str
    phone:str

class UserIn(BaseModel):
    name:str
    class Config:
        orm_mode = True

class BaseReview(BaseModel):
    text:str
    rating:int
    class Config:
        orm_mode = True

class StageReview(BaseReview):
    creator: UserIn

class EventReview(BaseReview):
    pass

class Stage(BaseModel):
    id:int
    name: str
    location:str
    rating:int
    description:str
    user_owner:int

class ShowStage(Stage):
    stage_reviews: List[StageReview] = []
    class Config():
        orm_mode = True