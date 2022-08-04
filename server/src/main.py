from database import engine
from tables import Base
from fastapi import FastAPI
from routers import stage, user


Base.metadata.create_all(engine)

app = FastAPI()

app.include_router(stage.router)