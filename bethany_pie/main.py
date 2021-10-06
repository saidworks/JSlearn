from flask import Flask,request

app = Flask(__name__)

@app.route("/post", methods=["POST","GET"])

def readDate():
    data = request.form
    return data

if __name__ == "__main__" :
    app.run()

