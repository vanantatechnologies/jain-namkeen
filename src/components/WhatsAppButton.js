import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = '919723535365'; // Use the phone number without the '+' sign in the URL
    const iconUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'; // WhatsApp logo URL

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            className="whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            /*style={{
                backgroundColor: '#25d366',
                color: 'white',
                padding: '5px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',  // Ensures it remains circular
                textDecoration: 'none',
                display: 'flex',
                justifyContent: 'center',  // Horizontally centers the content
                alignItems: 'center',      // Vertically centers the content
            }}*/
        >
            <img src={iconUrl} alt="WhatsApp Icon" />
        </a>
    );
};

export default WhatsAppButton;
