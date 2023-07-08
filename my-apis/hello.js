module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Hello from Jeevan's Lambda Fuction from serverless!",
    }),
  };
};
