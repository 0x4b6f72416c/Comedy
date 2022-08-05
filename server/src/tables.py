from calendar import c
from sqlalchemy import Column,ForeignKey,Integer,String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class Customer(Base):
    __tablename__ = "customer"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    phone = Column(Integer)

    reviews = relationship('Review',backref='owner')


class Stage(Base):
    __tablename__ = "stage"

    id = Column(Integer, primary_key=True)   
    name = Column(String,nullable=False)
    user_onwer = Column(Integer,ForeignKey('customer.id'),nullable=False)
    location = Column(String,nullable=False)
    description = Column(String)
    rating = Column(String)

class Review(Base):
    __tablename__ = 'review'

    id = Column(Integer,primary_key=True)
    text = Column(String(3333),nullable=False)
    rating = Column(Integer)
    customer_id = Column(Integer,ForeignKey('customer.id'),nullable=False)
    stage_id = Column(Integer,ForeignKey('stage.id'),nullable=False)
