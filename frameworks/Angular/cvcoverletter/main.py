from flask import Flask, request, json, jsonify
from flask_cors import CORS
from flask_cors import cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


@app.route("/form", methods=['GET',"OPTIONS" , "POST"])
@cross_origin()
def read():
  print('it is working')
  if request.method == 'OPTIONS':
    return "it's options"
  elif request.method == 'POST':
    data = request.form
    data = json.dumps(data)
    print(data)
    return data
   


if __name__ == "__main__":
  app.run()
