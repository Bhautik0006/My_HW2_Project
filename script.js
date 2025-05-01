      
        // Event type selection
        document.querySelectorAll('.event-type').forEach(type => {
            type.addEventListener('click', function() {
                const eventType = this.dataset.event;
                document.getElementById('event-type').value = eventType;
                document.getElementById('invitation-form').scrollIntoView({ behavior: 'smooth' });
            });
        });
        
        // Image source toggle
        document.getElementById('image-type').addEventListener('change', function() {
            const uploadContainer = document.getElementById('image-upload-container');
            if (this.value === 'upload') {
                uploadContainer.style.display = 'block';
            } else {
                uploadContainer.style.display = 'none';
            }
        });
        
        // Form submission and preview generation
       document.getElementById('invitation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const eventType = document.getElementById('event-type').value;
    const eventName = document.getElementById('event-name').value;
    const hostedBy = document.getElementById('hosted-by').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;
    const imageType = document.getElementById('image-type').value;

    const data = {
        eventType,
        eventName,
        hostedBy,
        location,
        date,
        time,
        message,
        imageSrc: '' // default placeholder
    };

    const proceedToRedirect = () => {
        sessionStorage.setItem("invitationData", JSON.stringify(data));
        window.location.href = "invitation.html";
    };

    if (imageType === 'upload') {
        const fileInput = document.getElementById('image-upload');
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                data.imageSrc = e.target.result;
                proceedToRedirect();
            };
            reader.readAsDataURL(fileInput.files[0]);
        } else {
            alert("Please upload an image.");
        }
    } else {
        const eventImages = {
            birthday: "https://cdn.alittledelightful.com/wp-content/uploads/2024/09/word-image-85383-1.png",
            wedding: "https://www.weddingplz.com/blog/wp-content/uploads/ftwopy-685x400.jpg",
            dinner: "https://inspirationcontent.cricut.com/wp-content/uploads/2021/05/candle-lit-dinner-scene.jpg",
            trip: "https://media1.thrillophilia.com/filestore/pxvd8kmstejmsbzuew57if4ean0j_shutterstock_2433437.jpg?w=400&dpr=2",
        };
        data.imageSrc = eventImages[eventType] || "/api/placeholder/600/200?text=Event";
        proceedToRedirect();
    }
});        
                       
        // Download button (simulated)
        document.getElementById('download-btn').addEventListener('click', function() {
            alert('Your invitation has been prepared for download! In a real application, this would generate a downloadable image or PDF file of your invitation.');
        });
        
        // Initialize page - show home section by default
        document.querySelectorAll('.home-section, .about-section, .contact-section').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelector('.home-section').style.display = 'block';
