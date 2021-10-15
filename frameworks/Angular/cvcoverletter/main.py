from flask import Flask, request, json, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/form/*": {"origins": "*"}})


@app.route("/form", methods=["GET" , "POST"])
def read():
  if request.method == 'POST':
    data = request.values
    data = json.dumps(data)
    print(data)
    return data

@app.route('test',methods=["GET"])
def test():
  if request.method == 'GET':
    pass


if __name__ == "__main__":
  app.run(port=3000)
