
document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const harga = document.getElementById('harga').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const foto = document.getElementById('foto').value;

    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>Produk Disimpan:</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Harga:</strong> Rp${harga}</p>
        <p><strong>Deskripsi:</strong> ${deskripsi}</p>
        <img src="${foto}" alt="Foto Produk" width="200"/>
    `;
});
