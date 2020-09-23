from flask_sqlalchemy import SQLAlchemy

# Database
db = SQLAlchemy()


class Stack(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    values = db.relationship("StackValue", backref='stack', lazy=True)


class StackValue(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    stack_id = db.Column(db.Integer, db.ForeignKey("stack.id"))
    value = db.Column(db.Float)

    def __init__(self, stack_id, value):
        self.stack_id = stack_id
        self.value = value
