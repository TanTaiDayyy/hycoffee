$(document).ready(function() {
    $("#dangnhap").click(function(e) {
        e.preventDefault();
        var user = $("#user").val();
        var pass = $("#pass").val();
        if (user == "") {
            alert("Chưa nhập Username!");
           
        } else if (pass =="") alert("Chưa nhập Password!");
        else{
        
            if (user == "admin" && pass =="hoangha") {
            alert("Đăng nhập thành công!");
            window.location = "index.html";
          }
            else {
            alert("Sai Username hoặc Password! Đăng nhập thất bại...");
            location.reload();
        }
    }
    });

});