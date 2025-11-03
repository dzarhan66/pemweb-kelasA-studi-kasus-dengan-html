/**
 * Fungsi untuk menghitung rata-rata nilai dan menentukan status kelulusan.
 * Dipanggil saat tombol "Tentukan Status" diklik.
 */
function hitungStatus() {
    // 1. Ambil nilai dari kedua input
    const nilaiTeoriInput = document.getElementById('nilai-teori');
    const nilaiPraktikInput = document.getElementById('nilai-praktik');
    const hasilFeedbackDiv = document.getElementById('hasil-feedback');
    
    // Konversi nilai input (string) menjadi angka (float)
    const nilaiTeori = parseFloat(nilaiTeoriInput.value);
    const nilaiPraktik = parseFloat(nilaiPraktikInput.value);

    // Validasi input
    if (isNaN(nilaiTeori) || isNaN(nilaiPraktik) || nilaiTeori < 0 || nilaiTeori > 100 || nilaiPraktik < 0 || nilaiPraktik > 100) {
        hasilFeedbackDiv.innerHTML = '<p class="tidak-lulus">⚠️ **ERROR:** Masukkan nilai yang valid (angka 0-100) untuk kedua bidang.</p>';
        return; // Hentikan eksekusi jika input tidak valid
    }

    // 2. Hitung Rata-Rata
    const rataRata = (nilaiTeori + nilaiPraktik) / 2;
    // Bulatkan rata-rata untuk tampilan yang lebih rapi
    const rataRataTampil = rataRata.toFixed(2); 

    // Variabel untuk menampung status dan pesan
    let statusKelulusan = "";
    let pesanFeedback = "";
    let classStyle = ""; // Untuk styling dinamis (CSS)

    // 3. Tentukan Status
    if (rataRata >= 75) {
        // Jika Rata-Rata ≥ 75, Status = "LULUS!"
        statusKelulusan = "**LULUS!** 🥳";
        pesanFeedback = "Selamat! Anda telah mencapai batas kelulusan.";
        classStyle = "lulus";
    } else {
        // Jika Rata-Rata < 75, Status = "TIDAK LULUS. Perlu Remedial."
        statusKelulusan = "**TIDAK LULUS.** 😥";
        pesanFeedback = "Perlu Remedial. Tingkatkan nilai di sesi selanjutnya.";
        classStyle = "tidak-lulus";
    }

    // 4. Tampilkan hasil status dan nilai rata-rata
    hasilFeedbackDiv.className = ''; // Hapus class sebelumnya
    hasilFeedbackDiv.classList.add(classStyle);

    // Gunakan innerHTML untuk menampilkan hasil dan format yang dinamis
    hasilFeedbackDiv.innerHTML = `
        <p><strong>Nilai Rata-Rata:</strong> ${rataRataTampil}</p>
        <p><strong>Status:</strong> <span class="${classStyle}">${statusKelulusan}</span></p>
        <p><strong>Feedback:</strong> ${pesanFeedback}</p>
    `;
}