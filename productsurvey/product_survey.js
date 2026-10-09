function submitFeedback() {
    const username = document.getElementById('name').value;
        document.getElementById('userName').innerHTML = username;

    const age = document.getElementById('age').value;
        document.getElementById('userAge').innerHTML = age;

    const email = document.getElementById('email').value;
        document.getElementById('userEmail').innerHTML = email;

    const job = document.getElementById('job').value;
        document.getElementById('userJob').innerHTML = job;

    const designation = document.getElementById('designation').value;
            document.getElementById('userDesignation').innerHTML = designation;

    const productType = document.getElementById('productType').value;
        document.getElementById('userFeedback').innerHTML = feedback;


    const feedback = document.getElementById('feedbackText').value;
        alert('Thank you for your valuable feedback')
    
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userInfo').style.display = 'block';

    const submitButton=document.getElementById('submitBtn');
    submitButton.onclick = submitFeedback;
    document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });



}





