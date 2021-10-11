from flask import Flask, request, json,jsonify
app = Flask(__name__)


@app.route("/products", methods=["GET"])
def read():
  with open('./src/api/products/products.json') as products_file:
    data = json.load(products_file)
    data = jsonify(data)
    data.headers.add('Access-Control-Allow-Origin', '*')
  return data


if __name__ == "__main__":
  app.run()
