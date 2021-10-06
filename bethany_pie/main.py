from flask import Flask,request,json

app = Flask(__name__)

@app.route("/post", methods=["POST","GET"])

def readDate():
    data = request.form
    return json.dumps(data)

if __name__ == "__main__" :
    app.run()

