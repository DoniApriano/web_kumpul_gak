
    // Function to show first modal (I LOVE YOU)
    function showModal() {
    var modalILoveYou = new bootstrap.Modal(document.getElementById('modalILoveYou'));
    modalILoveYou.show();
    }

    // Function to show second modal (Tanggal Hari Ini)
    function showDateModal() {
    // Get current date
    var today = new Date();
    var dateStr = today.toLocaleDateString('id-ID', {
        weekday: 'long', // Monday
        year: 'numeric', // 2025
        month: 'long', // Januari
        day: 'numeric' // 10
    });

    // Set the date in the modal
    document.getElementById('tanggal').innerText = dateStr;

    // Show the second modal
    var modalTanggal = new bootstrap.Modal(document.getElementById('pesan'));
    modalTanggal.show();
    }

    // Function to show third modal (Tanggal Hari Ini - 3)
    function showThirdModal() {
    // Get current date
    var today = new Date();
    var dateStr = today.toLocaleDateString('id-ID', {
        weekday: 'long', // Monday
        year: 'numeric', // 2025
        month: 'long', // Januari
        day: 'numeric' // 10
    });

    // Set the date in the modal
    document.getElementById('tanggal').innerText = dateStr;

    // Show the third modal
    var modalTanggal = new bootstrap.Modal(document.getElementById('modalTanggal'));
    modalTanggal.show();
    }

    // Function to show final message and hide card
    function showFinalMessage() {
    // Hide the main card
    document.getElementById('mainCard').classList.add('card-hidden');
    
    // Show the final message
    document.getElementById('finalMessage').style.display = 'block';
    }

    // Function for Gamau button movement
    function gamau(id) {
    // Get the button and the card element
    var card = document.querySelector('.card');
    
    // Calculate new position for Gamau button (randomize within the card container)
    var randomX = Math.floor(Math.random() * (card.clientWidth - id.clientWidth));
    var randomY = Math.floor(Math.random() * (card.clientHeight - id.clientHeight));

    // Move the "Gamau" button to a new random position
    id.style.position = 'absolute'; // Set position absolute
    id.style.left = randomX + 'px';
    id.style.top = randomY + 'px';
    }