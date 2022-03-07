// Script for appending current date and time on website //
var currentDate = moment().format("dddd LL");
$("#currentDate").append(currentDate);
var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// Variable set to compare current time vs time on calendar
var current = new Date().getHours();

// Adding class ID to certain time blocks based on current time of day //
function timeBlocks() {
    if (current > 8) {
        $("#1stComment").addClass("past");
    } else if (current >= 8 && current < 9) {
        $("#1stComment").addClass("present");
    } else {
     $("#1stComment").addClass("future");
    }

    if (current > 9) {
        $("#2ndComment").addClass("past");
    } else if (current >= 9 && current < 10) {
        $("#2ndComment").addClass("present");
    } else {
        $("#2ndComment").addClass("future");
    }

    if (current > 10) {
        $("#3rdComment").addClass("past");
    } else if (current >= 10 && current < 11) {
        $("#3rdComment").addClass("present");
    } else {
        $("#3rdComment").addClass("future");
    }

    if (current > 11) {
        $("#4thComment").addClass("past");
    } else if (current >= 11 && current < 12) {
        $("#4thComment").addClass("present");
    } else {
        $("#4thComment").addClass("future");
    }

    if (current > 12) {
        $("#5thComment").addClass("past");
    } else if (current >= 12 && current < 13) {
        $("#5thComment").addClass("present");
    } else {
        $("#5thComment").addClass("future");
    }

    if (current > 13) {
        $("#6thComment").addClass("past");
    } else if (current >= 13 && current < 14) {
        $("#6thComment").addClass("present");
    } else {
        $("#6thComment").addClass("future");
    }

    if (current > 14) {
        $("#7thComment").addClass("past");
    } else if (current >= 14 && current < 15) {
        $("#7thComment").addClass("present");
    } else {
        $("#7thComment").addClass("future");
    }

    if (current > 15) {
        $("#8thComment").addClass("past");
    } else if (current >= 15 && current < 16) {
        $("#8thComment").addClass("present");
    } else {
        $("#8thComment").addClass("future");
    }

    if (current > 16) {
        $("#9thComment").addClass("past");
    } else if (current >= 16 && current < 17) {
        $("#9thComment").addClass("present");
    } else {
        $("#9thComment").addClass("future");
    }

    if (current > 17) {
        $("#10thComment").addClass("past");
    } else if (current >= 17 && current < 18) {
        $("#10thComment").addClass("present");
    } else {
        $("#10thComment").addClass("future");
    }

    if (current > 18) {
        $("#11thComment").addClass("past");
    } else if (current >= 18 && current < 19) {
        $("#11thComment").addClass("present");
    } else {
        $("#11thComment").addClass("future");
    }

    if (current > 19) {
        $("#12thComment").addClass("past");
    } else if (current >= 19 && current < 20) {
        $("#12thComment").addClass("present");
    } else {
        $("#12thComment").addClass("future");
    }

    if (current > 20) {
        $("#13thComment").addClass("past");
    } else if (current >= 20 && current < 21) {
        $("#13thComment").addClass("present");
    } else {
        $("#13thComment").addClass("future");
    }

    if (current > 21) {
        $("#14thComment").addClass("past");
    } else if (current >= 21 && current < 22) {
        $("#14thComment").addClass("present");
    } else {
        $("#14thComment").addClass("future");
    }
}

//Adding function to "save button"//
$(document).ready(function () {
    $(".btn").on("click", function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
})

// establishing way to save description regardless of page refresh //
$("#1stHour .description").val(localStorage.getItem("1stHour"));
$("#2ndHour .description").val(localStorage.getItem("2ndHour"));
$("#3rdHour .description").val(localStorage.getItem("3rdHour"));
$("#4thHour .description").val(localStorage.getItem("4thHour"));
$("#5thHour .description").val(localStorage.getItem("5thHour"));
$("#6thHour .description").val(localStorage.getItem("6thHour"));
$("#7thHour .description").val(localStorage.getItem("7thHour"));
$("#8thHour .description").val(localStorage.getItem("8thHour"));
$("#9thHour .description").val(localStorage.getItem("9thHour"));
$("#10thHour .description").val(localStorage.getItem("10thHour"));
$("#11thHour .description").val(localStorage.getItem("11thHour"));
$("#12thHour .description").val(localStorage.getItem("12thHour"));
$("#13thHour .description").val(localStorage.getItem("13thHour"));
 $("#14thHour .description").val(localStorage.getItem("14thHour"));

//clear local storage and edits
$(document).ready(function(){
    $(".clear").on("click", function() {    
        window.localStorage.clear("");
        document.getElementById("1stComment").value = "";
        document.getElementById("2ndComment").value = "";
        document.getElementById("3rdComment").value = "";
        document.getElementById("4thComment").value = "";
        document.getElementById("5thComment").value = "";
        document.getElementById("6thComment").value = "";
        document.getElementById("7thComment").value = "";
        document.getElementById("8thComment").value = "";
        document.getElementById("9thComment").value = "";
        document.getElementById("10thComment").value = "";
        document.getElementById("11thComment").value = "";
        document.getElementById("12thComment").value = "";
        document.getElementById("13thComment").value = "";
        document.getElementById("14thComment").value = "";
    })
})

timeBlocks();