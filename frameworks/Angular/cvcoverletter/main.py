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



if __name__ == "__main__":
  app.run()
