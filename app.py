from flask import Flask, render_template, request
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy import create_engine

app = Flask(__name__)


engine = create_engine(
    'postgres://bbjojtjoonmcfr:942641be1f45e3490f9cb763380079ec5b0016cf5b83aca4bf4fff542166b4bb@ec2-54-217-213-79.eu-west-1.compute.amazonaws.com:5432/d261rchjoi7vop')
db = scoped_session(sessionmaker(bind=engine))

app = Flask(__name__)


@app.route("/", methods=["POST", "GET"])
def email_register():
    if (request.method == "POST"):
        emailRegister = request.form.get('email')

        redundant = db.execute("SELECT * FROM emails WHERE email=:emailRegister",
                               {"emailRegister": emailRegister})

        if(redundant.rowcount == 0):
            db.execute("INSERT INTO emails (email) VALUES (:email)",
                       {"email": emailRegister})
            db.commit()

    emailAll = db.execute("SELECT * FROM emails").fetchall()
    return render_template("index.html", emailAll=emailAll)


if __name__ == "__main__":
    email_register()
