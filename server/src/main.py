from fastapi import FastAPI
from .routers import stage, user, review
from .database import engine
from .tables import Base

app = FastAPI()

Base.metadata.create_all(engine)


app.include_router(stage.router)
app.include_router(user.router)
app.include_router(review.router)
