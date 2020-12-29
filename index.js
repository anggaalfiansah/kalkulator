document.getElementById('kalkulator').addEventListener('submit', kalkulatorSederhana);

function kalkulatorSederhana(e) {
    const angka1           = document.getElementById('angka1');
    const angka2           = document.getElementById('angka2');
    const operator         = document.getElementById('operator');
    const hasil            = document.getElementById('hasil');

    const penjumlahan = angka1 + angka2;
    const pengurangan = angka1 - angka2;
    
    e.preventDefault();
}