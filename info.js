var Number = ["1", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "1.10.", "2", "2.1", "2.2", "2.3", "2.4", "3", "3.1", "3.2", "3.3", "3.4", "3.5", "3.6", "3.7", "3.8", "3.9", "3.10.", "4", "4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "5", "5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7", "6", "6.1", "6.2", "6.3", "6.4", "6.5", "6.6", "6.7", "6.8", "6.9", "6.10.", "6.11", "6.12", "6.13", "6.14", "6.15", "6.16", "7", "7.1", "7.2", "7.3", "7.4", "7.5", "7.6", "8", "8.1", "8.2", "8.3", "8.4", "8.5", "9", "9.1", "9.2", "9.3", "9.4"];
var option_number = "";

function show() {
    var x = document.getElementById("detail");
    console.log(Number)
    var i = 0;
    var output = "";
    while (Number[i] != null) {
        output = output + Number[i] + "<br>";
        option_number = option_number + '<option value="' + Number[i] + '">' + Number[i] + '</option>'
        i++;
    }
    x.innerHTML = '<select class="custom-select">' + option_number + "</select>";
}