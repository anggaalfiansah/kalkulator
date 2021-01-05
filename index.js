document.getElementById('kalkulator').addEventListener('submit', kalkulatorSederhana);

function kalkulatorSederhana(e) {
    const angka1           = parseInt(document.getElementById('angka1').value);
    const angka2           = parseInt(document.getElementById('angka2').value);
    const operator         = document.getElementById('operator').value;

    const penjumlahan = angka1 + angka2;
    const pengurangan = angka1 - angka2;
    const perkalian   = angka1 * angka2;
    const pembagian   = angka1 / angka2;

    hasil = document.getElementById('hasil');
    if(operator == '+') {
        hasil.value = penjumlahan;
    }
    else if(operator == '-') {
        hasil.value = pengurangan;
    }
    else if(operator == '*') {
        hasil.value = perkalian;
    }
    else if(operator == '/') {
        hasil.value = pembagian;
    }

    alert('test');
    
    e.preventDefault();
}