from datetime import datetime
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

class Event(BaseModel):
    time:datetime
    duration:int
    price:int
    class Config():
        orm_mode = True

class EventReview(BaseReview):
    pass

class Stage(BaseModel):
    name: str
    location:str
    rating:int
    description:str
    user_owner:int

class ShowStage(Stage):
    id:int
    stage_reviews: List[StageReview] = []
    stage_events:List[Event] = []
    class Config():
        orm_mode = True
