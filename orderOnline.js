 // JavaScript to toggle visibility of the text box based on radio button selection
 const otherRadio = document.getElementById('otherRadio');
 const otherInput = document.getElementById('otherInput');

 otherRadio.addEventListener('change', function() {
   if (this.checked) {
     otherInput.style.display = 'block'; // Show the input when "Other" is selected
   } else {
     otherInput.style.display = 'none'; // Hide the input if not selected
   }
 });

 document.getElementById('termsLink').addEventListener('click', function() {
    document.getElementById('termsModal').style.display = 'block';
});

// Close modal when "Close" button is clicked
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('termsModal').style.display = 'none';
});