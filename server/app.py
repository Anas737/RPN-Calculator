from flask import Flask
from flask_cors import CORS

from models.stack import db
from schemas.stack import ma

from api import rpn_api


# Create App
def create_app():
    # Init app
    app = Flask(__name__)
    cors = CORS(app)

    # Config
    app.config.from_pyfile('config.py')

    # Init App -> database
    db.init_app(app)

    # Init App -> marshmallow
    ma.init_app(app)

    # RPN API Blueprint
    app.register_blueprint(rpn_api)

    return app


if __name__ == '__main__':
    app = create_app()

    app.run()
