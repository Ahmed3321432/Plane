
function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;
    if (name == "" || email == "" || message == "") {
        alert("يرجى ملء جميع الحقول.");
        return false;
    }
    alert("تم إرسال رسالتك بنجاح!");
    return true;
}
