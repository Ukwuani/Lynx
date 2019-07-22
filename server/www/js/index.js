function send () {
    let d = document.getElementById("formsd")
    console.log(document.getElementById("formsd"));
    axios.post('/signup', {
        first_name:`${d.first_name.value}`,
        last_name:`${d.last_name.value}`,
        email:`${d.email.value}`,
       matric_no :`${d.matric_no.value}`,
       phone_no:`${d.phone_no.value}`
      })
      .then(function (response) {
        d.reset()
      })
      .catch(function (error) {
        console.log(error);
      });
    // alert("hey");
} 