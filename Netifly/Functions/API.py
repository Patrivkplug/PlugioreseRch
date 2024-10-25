from fastapi import FastAPI
from mangum import Mangum

app = FastAPI()

@app.get("/api")
async def root():
    return {"message": "Hello World"}

handler = Mangum(app)
