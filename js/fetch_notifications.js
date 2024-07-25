function loadDoc() {
    // Note: This will send request each Second!, There is a better way

    setInterval(function() {
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                number_of_new_notifications = JSON.parse(this.responseText).number_of_new_notifications;

                console.log(number_of_new_notifications);

                document.getElementById(
                    "notification_number"
                ).innerHTML = number_of_new_notifications;

                if (number_of_new_notifications > 0) {
                    document
                        .getElementById("notification_button")
                        .classList.add("notification_button_alert");
                } else {
                    document
                        .getElementById("notification_button")
                        .classList.remove("notification_button_alert");
                }
            }
        };

        xhttp.open("GET", "./js/data.json", true);

        xhttp.send();
    }, 1000);
}

loadDoc();