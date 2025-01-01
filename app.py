from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route('/api/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message', '')
    response = {"bot_message": "This is your backend bot responding!"}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)