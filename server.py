from flask import Flask, request,jsonify

app = Flask(__name__)


@app.route("/calculator/greeting", methods=['GET'])
def greeting():
    
    return 'Hello world!',200

@app.route("/calculator/add", methods=['POST'])
def add():
    res = request.get_json(force=True)
    fst = res["first"]
    scd = res["second"]
    ans = fst+scd
    return jsonify({"result" : ans}),200

@app.route("/calculator/subtract", methods=['POST'])
def subtract():
    res = request.get_json()
    fst = res["first"]
    scd = res["second"]
    ans = fst-scd
    return jsonify({"result" : ans}),200

if __name__ == '__main__':
    app.run(port=8080,host='0.0.0.0')
