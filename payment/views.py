from django.shortcuts import render
import midtransclient
import time
from django.http import JsonResponse
import os
import json
import base64
import requests
# Create your views here.
def payment(request):
    if request.method == 'POST':
        try:
            # Parse JSON payload from request body
            data = json.loads(request.body)
            amount = data.get('amount')
            activity_name = data.get('activity_name')

            # Generate a unique order_id for this transaction
            order_id = f'order-{int(time.time())}'

            # Prepare the transaction data
            param = {
                "transaction_details": {
                    "order_id": order_id,
                    "gross_amount": amount
                },
                "credit_card": {
                    "secure": True
                },
                "customer_details": {
                    "first_name": "budi",
                    "last_name": "pratama",
                    "email": "budi.pra@example.com",
                    "phone": "08111222333"
                }
            }

            # Get the server key from environment variables
            server_key = os.environ.get('MIDTRANS_SERVER_KEY')
            encoded_server_key = base64.b64encode(server_key.encode('utf-8')).decode('utf-8')
            print(encoded_server_key)  # Optional: For debugging
            # Define headers
            headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': f'Basic U0ItTWlkLXNlcnZlci1KRGthTzBidmY4RGRtZXBPY1dCaFhQSFo6'
            }

            # Make the HTTP POST request to Midtrans Snap API
            response = requests.post(
                'https://app.sandbox.midtrans.com/snap/v1/transactions',
                headers=headers,
                json=param
            )

            # Check for errors in the response
            if response.status_code != 201:
                return JsonResponse({"error": response.json()}, status=response.status_code)
            

            # Return the transaction token to the client
            return JsonResponse({"token": response.json().get('token')})

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)
    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)