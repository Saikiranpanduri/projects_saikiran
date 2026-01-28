const express = require("express");
const bodyParser = require("body-parser");
const { spawn } = require("child_process");

const app = express();
app.use(bodyParser.json());

// Helper function to call Python logic
function processPayment(paymentId, amount, callback) {
  const python = spawn("python", [
    "-c",
    `
from payment_engine import PaymentEngine
engine = PaymentEngine()
print(engine.process_payment("${paymentId}", ${amount}))
`
  ]);

  let result = "";
  python.stdout.on("data", data => {
    result += data.toString();
  });

  python.on("close", () => {
    callback(result.trim());
  });
}

app.post("/pay", (req, res) => {
  const { payment_id, amount } = req.body;

  if (!payment_id || amount === undefined) {
    return res.status(400).json({ error: "Invalid request" });
  }

  processPayment(payment_id, amount, status => {
    res.json({
      payment_id,
      status,
      message: "Idempotent payment processed"
    });
  });
});

app.listen(3000, () => {
  console.log("Payment API running on port 3000");
});
