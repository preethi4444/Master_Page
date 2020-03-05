function funValid() {
    var name = $.trim($("#username").val());
    if (!name) {
        $("#Label1").text("*Please enter your first name")
        return false;
    }
    var lname = $.trim($("#password").val());
    if (!lname) {
        $("#Label2").text("*Please enter your last name")
        return false;
    }
    return true;
}