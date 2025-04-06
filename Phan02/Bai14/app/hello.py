from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "✅ Xin chào từ Python server (trong mạng riêng)!"
