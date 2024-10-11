from flask import Flask, request, jsonify, render_template
import sympy as sp

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
    app.run(debug=True)
