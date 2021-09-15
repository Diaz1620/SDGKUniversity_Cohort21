import json
from flask import Flask, render_template

app = Flask(__name__)
from mock_data import mock_data

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

# API Methods
@app.route("/api/catalog")
def get_catalog():
    return json.dumps(mock_data)

@app.route("/api/categories")
def get_categories():
    categories = []
    for cat in mock_data:
        if cat['category'] not in categories:
            categories.append(cat['category'])
    return json.dumps(categories)


app.run(debug=True)