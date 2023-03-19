function validateForm() {
    let uname = document.forms["myForm"]["un"].value;
    let pass = document.forms["myForm"]["ps"].value;
    if (uname == "") {
      alert("Name must be filled out");
      return false;
    }
    else if(pass=""){
        alert("Password Must be filled");
    }
  }