const nameSurname = document.querySelector('.nameSurname');
const mail = document.querySelector('.mail');
const phoneNumber = document.querySelector('.phoneNumber');
const city = document.querySelector('.city');
const zipCode = document.querySelector('.zipCode');
const submitButton = document.querySelector('.contact-box-button');
const messageBox = document.querySelector('.content-shadow-box-message');
const closeBoxButton = document.querySelector('.content-box-button');
const shadowContent = document.querySelector('.content-shadow');
const shadowBox = document.querySelector('.content-shadow-box');


submitButton.addEventListener('click', function(){
    if (nameSurname.value == '' && phoneNumber.value ==''){
        shadowContent.style.display = "inline";
        shadowBox.style.display = "inline";
        messageBox.innerHTML = "Uzupełnij proszę swoje dane kontaktowe"

    } else {
        shadowContent.style.display = "inline";
        shadowBox.style.display = "inline";
        messageBox.innerHTML = "Cześć " + nameSurname.value + ". Serdecznie dziękujemy za zainteresowanie Naszą ofertą. Skontaktujemy się z Tobą na podany numer telefonu " + phoneNumber.value + " w ciągu 24 godzin";    
    }
    
})


closeBoxButton.addEventListener('click', function() {
    shadowContent.style.display = "none";
    shadowBox.style.display = "none";
    nameSurname.value = '';
    mail.value = '';
    phoneNumber.value = '';
    city.value = '';
    zipCode.value = '';
})