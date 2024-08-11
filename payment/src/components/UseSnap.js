import { useState, useEffect } from 'react';
const UseSnap = () => {
    const [snap, setSnap] = useState(null);

    useEffect(() => {
        const myMidTransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;
        const script = document.createElement('script');
        script.src = 'https://app.sandbox.midtrans.com/snap/snap.js'; // Use the correct URL
        script.setAttribute('data-client-key', myMidTransClientKey);
        console.log(myMidTransClientKey)
        script.onload = () => {
            setSnap(window.snap);
        };
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const snapEmbed = (snap_token, embedId, action) => {
        if (snap) {
            snap.embed(snap_token, {
                embedId,
                onSuccess: function (result) {
                    action.onSuccess(result);
                },
                onPending: function (result) {
                    action.onPending(result);
                },
                onError: function (result) {
                    action.onError(result);
                },
                onClose: function () {
                    action.onClose();
                }
            });
        }
    };

    return { snapEmbed, snap };
};

export default UseSnap;