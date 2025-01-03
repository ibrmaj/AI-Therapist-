from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

chatbot = pipeline("text-generation", model="microsoft/DialoGPT-medium")

app = Flask(__name__)
CORS(app)  

@app.route('/api/chat', methods=['POST'])
def chat():
  user_input = request.json.get('message', '')
  response = chatbot(user_input, max_length=100) 
  return jsonify({"bot_message": response[0]['generated_text']})

if __name__ == '__main__':
    app.run(debug=True)