from pydantic import BaseModel

class User(BaseModel):
    name: str
    phone:str

class UserIn(BaseModel):
    name:str

class BaseReview(BaseModel):
    text:str
    rating:str
    class Config():
        orm_mode = True

class StageReview(BaseReview):
    creator: UserIn


class EventReview(BaseReview):
    pass

class Stage(BaseModel):
    name: str
    location:str
    rating:int
    description:str
    user_id:int
