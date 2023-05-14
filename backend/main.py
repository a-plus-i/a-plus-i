import os
from typing import Union

from fastapi import FastAPI
import openai

app = FastAPI()
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.get("/")
def read_root():
    return {"Hello": openai.Model.list()}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.get("/chat/{topic}")
def get_question(topic: str):
    # questions = []
    completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": f"hello. give me an intro about {topic}"}
        ]
    )
    print(completion)
    return completion["choices"][0]["message"]["content"]