function kiemTra() {
    var arr = document.getElementsByTagName("input");
    var ho = arr[0].value;
    var ten = arr[1].value;
    var ngaysinh = arr[2].value;
    var ckgt1 = arr[3].checked;
    var ckgt2 = arr[4].checked;
    var sdt = arr[5].value;
    var vitri1 = arr[6].checked;
    var vitri2 = arr[7].checked;
    var vitri3 = arr[8].checked;
    var vitri4 = arr[9].checked;
    var vitri5 = arr[10].checked;
    var vitri6 = arr[11].checked;
  
    if (ho == "") {
        alert("Bạn Chưa Nhập Họ");
        return false;
    } else if (ten == "") {
        alert("Bạn Chưa Nhập tên");
        return false;
    } else if (ngaysinh == "") {
        alert("Chưa chọn ngày sinh");
        return false;
    } 
    if (ckgt1 || ckgt2) {

    } else {
        alert("chưa chọn giới tính");
        return false;
    }
    if (sdt == ""){
        alert("Chưa nhập sdt");
        return false;
    }
    else if (isNaN(sdt)) {
        alert("Bạn nhập không phải là số");
        return false;
    }
    else if(sdt.length < 10){
        alert("Số Điện Thoại Từ 10 đến 11 số");
        return false;
    }
    if (vitri1 || vitri2 || vitri3 || vitri4 || vitri5 || vitri6) {

    } else {
        alert("Bạn chưa chọn vị trí");
        return false;
    }

    alert("Đăng ký thành công! Hoàng Hà sẽ sớm liên hệ lại cho bạn!");
    

   

}
function hienThi(visible) {
    var stk = document.getElementById("stk");
    stk.style.display = visible ? "" : "none";
}