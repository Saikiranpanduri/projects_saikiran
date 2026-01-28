# payment_engine.py
import random

class PaymentEngine:
    def __init__(self):
        self.payments = {}

    def process_payment(self, payment_id, amount):
        # Idempotency check
        if payment_id in self.payments:
            return self.payments[payment_id]

        # Initial state
        self.payments[payment_id] = "PROCESSING"

        # Business rules
        if amount <= 0:
            self.payments[payment_id] = "FAILED"
        else:
            # Simulate real-world uncertainty
            if random.choice([True, False]):
                self.payments[payment_id] = "SUCCESS"
            else:
                self.payments[payment_id] = "FAILED"

        return self.payments[payment_id]

    def get_status(self, payment_id):
        return self.payments.get(payment_id, None)
