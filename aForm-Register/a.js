Validator({
    form: '#form-2',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    // rules: [
    //   Validator.isEmail('#email'),
    //   Validator.minLength('#password', 6),
    // ],
    onSubmit: function (data) {
      // Call API
      console.log(data);
    }
  });
  function Validator (a){
    console.log(a);
  }
 