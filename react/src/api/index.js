export default {
  getOperands() {
    return this.get("rpn/op");
  },
  applyOperand(operand, stackId) {
    return this.post(`rpn/op/${operand}/stack/${stackId}`);
  },
  getStacks() {
    return this.get("rpn/stack");
  },
  createStack() {
    return this.post("rpn/stack");
  },
  getStack(stackId) {
    return this.get(`rpn/stack/${stackId}`);
  },
  deleteStack(stackId) {
    this.delete(`rpn/stack/${stackId}`);
  },
  pushValue(stackId, value) {
    return this.post(`rpn/stack/${stackId}`, {
      value,
    });
  },

  get(route) {
    return this.fetchAPI(route, {
      method: "GET",
    });
  },
  post(route, body = null) {
    return this.fetchAPI(route, {
      method: "POST",
      body: JSON.stringify(body),
    });
  },
  delete(route) {
    return this.fetchAPI(route, {
      method: "DELETE",
    });
  },
  fetchAPI(route, options) {
    console.log(route, options);
    return fetch(`http://127.0.0.1:5000/${route}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((payload) => payload)
      .catch((err) => console.log(err));
  },
};
