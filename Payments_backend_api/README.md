# Idempotent Payment Transaction API (Python + Node.js)

A backend mini-project that simulates real-world payment transaction workflows
using a clean separation between business logic and API orchestration.

## 🧠 Architecture
- Node.js handles HTTP requests, validation, and routing
- Python handles core payment business logic and state transitions

This separation mirrors real-world backend systems used in large-scale payments.

## 🚀 Features
- State-driven payment lifecycle (PROCESSING → SUCCESS / FAILED)
- Idempotent transaction handling to safely support retries
- Clean separation of concerns between API and business logic
- Failure-safe backend design

## 🛠 Tech Stack
- Python (Business Logic)
- Node.js (Express)
- REST APIs

## 📌 API Endpoint

### Process Payment
POST `/pay`
```json
{
  "payment_id": "txn_101",
  "amount": 500
}
