const readlineSync = require('readline-sync');

const book = {
    judul : 'Mencari uang di dunia teknologi',
    penulis : 'Adnanfadhil Yaser',
    penerbit : 'Adnanfadhil Yaser',
    harga :1000000,
};

function book_purchasing(buku,discount,tax) {
    PPN = 0.16; // potongan ppn 16%
    statusDiskon = true;

    if(buku.harga >=400000){
        statusDiskon = true;
        discount = parseInt(readlineSync.question("Masukkan diskon yang diinginkan(%): "));
        buku.harga =buku.harga*(100-discount)/100;
    }
    final_price = buku.harga+(buku.harga*0.16);

    console.log(`Judul : ${buku.judul} \nPengarang : ${buku.penulis} \nPenerbit : ${buku.penerbit} \nharga : ${final_price}`
    
    );
    
}

book_purchasing(book,0,10);