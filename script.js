$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    var typed1 = new Typed(".typing", {
        strings: ["Fresher Graduate", "Software Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-1", {
        strings: ["JAVA DEVELOPER", "WEB Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // Handle form submission
    $("#submitBtn").on("click", function () {
        var email = $("#email").val();
        var subject = $("#sub").val();
        var message = $("#msg").val();

        // Validate form fields (add more validation if needed)
        if (email.trim() === '' || subject.trim() === '' || message.trim() === '') {
            alert("Please fill in all fields.");
            return;
        }

        // Send data to server-side script (e.g., sendmail.php)
        $.ajax({
            type: "POST",
            url: $("#contactForm").attr("action"),
            data: {
                email: email,
                subject: subject,
                message: message
            },
            success: function (response) {
                // Handle success (optional)
                alert("Email sent successfully!");
            },
            error: function (error) {
                // Handle error (optional)
                alert("Error sending email. Please try again later.");
            }
        });
    });
});
