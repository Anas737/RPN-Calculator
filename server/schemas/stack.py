from flask_marshmallow import Marshmallow

# Marshmallow
ma = Marshmallow()


class StackSchema(ma.Schema):
    values = ma.Nested('StackValueSchema', many=True)

    class Meta:
        fields = ('id', 'values')


class StackValueSchema(ma.Schema):
    class Meta:
        fields = ('id', 'value')
