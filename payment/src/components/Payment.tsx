import React, { act, useState } from 'react';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

import { useParams, useLocation } from 'react-router-dom';
import UseSnap from './UseSnap';  

const Payment = () => {
  const { activityName } = useParams();
  const location = useLocation();
  const price = location.state?.price; 
  const [isProcessing, setIsProcessing] = useState(false);
  const { snapEmbed } = UseSnap();

  // Function to get CSRF token from cookies
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  const initiatePayment = async () => {
    const csrftoken = getCookie('csrftoken');
    setIsProcessing(true);

    try {
      const response = await fetch('create-transaction/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken, 
        },
        body: JSON.stringify({
          activity_name: activityName,
          amount: price, 
        }),
      });

      const data = await response.json();

      if (data.token) {
        // Embed Snap payment popup using the snapEmbed function from UseSnap
        snapEmbed(data.token, 'snap-payment-container', {
          onSuccess: function(result) {
            alert('Payment successful!');
            console.log(result);
          },
          onPending: function(result) {
            alert('Payment pending...');
            console.log(result);
          },
          onError: function(result) {
            alert('Payment failed!');
            console.log(result);
          },
          onClose: function() {
            alert('Payment popup closed.');
          }
        });
      } else {
        alert('Failed to initiate payment');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <h1>Confirm Payment for {activityName}</h1>
      <p>You are about to make a payment for {activityName}. Please confirm your payment to proceed.</p>
      <Button onClick={initiatePayment} disabled={isProcessing}>
        {isProcessing ? 'Processing...' : 'Confirm Payment'}
      </Button>

      {/* Container for Snap Embed */}
      <div id="snap-payment-container"></div>
    </div>
  );
};

export default Payment;

// Helper function to get the CSRF token from cookies
