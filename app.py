from flask import Flask, request, jsonify, render_template
import sympy as sp
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    expression = request.json.get('expression')
    try:
        result = sp.sympify(expression).evalf()
        formatted_result = f"{result:.2f}"
    except Exception as e:
        result = 'Error'
    return jsonify(result=str(formatted_result))


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000)) 
    app.run(host='0.0.0.0', port=port)
