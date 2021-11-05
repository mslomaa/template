const nameSurname = document.querySelector('.nameSurname');
const mail = document.querySelector('mail');
const phoneNumber = document.querySelector('phoneNumber');
const city = document.querySelector('city');
const zipCode = document.querySelector('zipCode');

submitButton.addEventListener('click', function(){
    console.log(nameSurname.value);
    console.log(mail.value);
    console.log(phoneNumber.value);
    console.log(city.value);
    console.log(zipCode.value);
})
