from flask import Blueprint, jsonify, request

from models.stack import *
from schemas.stack import *

# API Blueprint
rpn_api = Blueprint('rpn_api', __name__)

# Schemas
stack_schema = StackSchema()
stacks_schema = StackSchema(many=True)
values_schema = StackValueSchema(many=True)

# Routes #


# List all the operand
@rpn_api.route('/rpn/op', methods=["GET"])
def operand_list():
    return jsonify([
        "add",
        "sub",
        "mul",
        "div",
        "neg",
        "del",
        "swap"
    ]
    )


# Apply an operand to a stack
@rpn_api.route('/rpn/op/<op>/stack/<stack_id>', methods=["POST"])
def apply_operand(op, stack_id):
    stack = Stack.query.get(stack_id)

    values = stack.values
    n = len(values)

    if stack:
        # New value
        if op in ["add", "sub", "mul", "div"] and n > 1:
            first = values.pop()
            second = values.pop()

            new_value = {
                "add": second.value + first.value,
                "sub": second.value - first.value,
                "mul": second.value * first.value,
                "div": second.value / first.value
            }[op]

            values.append(StackValue(stack.id, new_value))

        elif op == "swap" and n > 1:
            values[n - 1].value, values[n - 2].value = values[n -
                                                              2].value, values[n - 1].value
        elif op == "neg":
            values[n - 1].value *= -1
        elif op == "del":
            del values[n - 1]

        db.session.commit()

    return stack_schema.jsonify(stack)


# Create a new stack
@ rpn_api.route('/rpn/stack', methods=["POST"])
def create_stack():
    new_stack = Stack()

    db.session.add(new_stack)
    db.session.commit()

    return stack_schema.jsonify(new_stack)


# List the available stacks
@ rpn_api.route('/rpn/stack', methods=["GET"])
def stack_list():
    stacks = Stack.query.all()

    return stacks_schema.jsonify(stacks)


# Delete a stack
@ rpn_api.route('/rpn/stack/<stack_id>', methods=["DELETE"])
def delete_stack(stack_id):

    stack = Stack.query.get(stack_id)
    db.session.remove(stack)
    db.session.commit()

    return stack_schema.jsonify(stack)


# Push a value to a stack
@ rpn_api.route('/rpn/stack/<stack_id>', methods=["POST"])
def push_value(stack_id):
    value = request.json['value']

    stack = Stack.query.get(stack_id)

    if(stack):
        new_value = StackValue(stack_id, value)

        db.session.add(new_value)
        db.session.commit()

    return stack_schema.jsonify(stack)


# Get a stack
@ rpn_api.route('/rpn/stack/<stack_id>', methods=["GET"])
def get_stack(stack_id):
    stack = Stack.query.get(stack_id)

    return stack_schema.jsonify(stack)
