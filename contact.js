document.getElementById('contact-submit').addEventListener('click', function(e) {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            
            if (name && email) {
                alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon at ${email}.`);
                document.getElementById('contact-name').value = '';
                document.getElementById('contact-email').value = '';
                document.getElementById('contact-subject').value = '';
                document.getElementById('contact-message').value = '';
            } else {
                alert('Please fill in your name and email address.');
            }
        });
