function validateForm(event) {
    event.preventDefault();
  
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const instituteEmail = document.getElementById('instituteEmail').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    
  
    const invalidFields = [];
  
    if (!/^[A-Za-z]+\s[A-Za-z]+$/i.test(fullName)) {
      invalidFields.push('Full Name');
    }
  
    if (!/@(gmail|hotmail|outlook)\.com$/i.test(email)) {
      invalidFields.push('Email');
    }
  
    if (!/^(\d{3})([a-z]{2})(\d{4})@nitrkl\.ac\.in$/i.test(instituteEmail)) {
      invalidFields.push('Institute Email');
    }
  
    if (!/^(\d{3})([A-Z]{2})(\d{4})$/i.test(rollNumber)) {
      invalidFields.push('Roll Number');
    }
  
    if (!/^(\+91|0)?[6789]\d{9}$/.test(phoneNumber)) {
      invalidFields.push('Phone Number');
    }
    const techCheckbox = document.getElementById("tech");
    const designCheckbox = document.getElementById("design");

    if (!techCheckbox.checked && !designCheckbox.checked) {
        invalidFields.push("Please select at least one field of interest.");
      }
  
    if (invalidFields.length > 0) {
      const errorMessage = `Invalid input.Please check the following fields:\n\n- ${invalidFields.join('\n- ')}`;
      alert(errorMessage);
      return;
    }
  
    alert("Great job! You've officially taken the first step.");
  }
  