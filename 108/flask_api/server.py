from flask import Flask, render_template

app = Flask(__name__)

me = {
    "name": "Yadiel",
    "last": "Diaz-Reyes",
    "email": "test@mail.com",
    "age": 27,
    "hobbies": [],
    "address": {
        "street": "main",
        "number": "42"
    }
}

@app.route("/")
@app.route("/home")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return f"{me['name']} {me['last']}"

@app.route("/about/email")
def get_email():
    return me["email"]

@app.route("/about/address")
def get_address():
    addresss = me["address"]
    return f"{addresss['number']} {addresss['street']}"


app.run(debug=True)