let data = localStorage.getItem("data")
$(".event").append(`${data}`)



$("#buyTicketButton").click(function () {
    window.location.href = "ticket.html";

})