
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


 document.querySelectorAll('.btn-link').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('data-target');
                console.log(`Navigating to: ${targetId} page/section`);

                // For a real website, you'd navigate to different pages or scroll to sections.
                // Uncomment and adjust if you have sections on the same page with corresponding IDs
                // const targetElement = document.getElementById(targetId);
                // if (targetElement) {
                //     targetElement.scrollIntoView({ behavior: 'smooth' });
                // } else {
                //     window.scrollTo({
                //         top: 0,
                //         behavior: 'smooth'
                //     });
                // }
            });
        });