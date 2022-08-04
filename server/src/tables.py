from sqlalchemy import Column,ForeignKey,Integer,String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()

class Customer(Base):
    __tablename__ = "customer"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    phone = Column(Integer)

class Stage(Base):
    __tablename__ = "stage"

    id = Column(Integer, primary_key=True)   
    name = Column(String)
    location = Column(String)
    description = Column(String,)

class StageReview(Base):
    __tablename__ = "stagereview"

    id = Column(Integer, primary_key=True)
    stage_id = Column(Integer,ForeignKey('stage.id'))
    customer_id = Column(Integer, ForeignKey('customer.id'))
    review = Column(String)

    customer = relationship('Customer')
    stage = relationship('Stage')