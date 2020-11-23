function hewan(){
    let kotak = document.getElementById('gambar');
    let animal = document.getElementById('animal');
    if (images == "anjing"){
        gambar.src="anjing.jpg";
        alert(`Ini adalah foto Anjing ${images}`);
    }else if (images == "kucing"){
        gambar.src="kucing.jpg";
        alert(`Ini adalah foto Kucing ${images}`);
    }else if (images == "elang"){
        gambar.src="elang.jpg";
        alert(`Ini adalah foto Elang ${images}`);
    }else if (images == "kelinci"){
        gambar.src="kelinci.jpg";
        alert(`Ini adalah foto Kelinci ${images}`);
    }else if (images == "hiu"){
        gambar.src="hiu.jpg";
        alert(`Ini adalah foto hiu ${images}`);
    }
    return false;
}