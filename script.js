$(function() {
    //show popup modal
    var myModal = new bootstrap.Modal(document.getElementById('modalPopUp'));
    myModal.show();
    // jika klik ok maka : 
    $('#btnOk').click(function() {
        var audio = new Audio("lagu.mp3");
        audio.play();
        //sembunyikan popup
        myModal.hide();
    });
    // jika klik close maka :
    $('#btnClose').click(function() {
        alert("Yahh masa gak mau :(")
            //kembali di redirect ke halaman yang sama
        window.location.href = "https://tegarwj.github.io/kartuUcapan";
    });
    $('#closeX').click(function() {
        alert("Yahh masa gak mau :(")
            //kembali di redirect ke halaman yang sama
        window.location.href = "https://tegarwj.github.io/kartuUcapan";
    });


});