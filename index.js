// destructuring
const listProduk = {
    nama_Produk: "Kasur busa",
    jenis:{
        type_A: ["Panjang", 1500000],
        type_B: ["Pendek", 1000000]
    },
    lokasi:["jakarta", "bandung", "cilacap"],
    nama_toko: "Kasur pipit"
};
function destructuring({nama_Produk: nama_barang, stok = "ready", ...detailnya}){
    console.log(nama_barang, stok, detailnya);
}
// nama_produk : nama_barang = Alias,
// stok = "ready" = default value
destructuring(listProduk);