function kirim(){
    // membuat variabel dengan elemen pragarf or <p>
    var para = document.createElement("P");

    // membuat variabel dengan isi dari nilai inputan
    var newChat = document.getElementById("input-masukan-chat").value;

    // menampilakan isi inputan didalam console
    console.log(newChat);

    // memasukan isi inputan kedalam element p or <p>
    para.append(newChat);

    // memasukan variabel p yang sudah didalamnya mengandung isi dari inputan kedalam div dengan id container-chat
    document.getElementById("container-chat").append(para);
}