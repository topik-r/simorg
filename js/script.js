/* =====================================================
   SIMORG — script.js
   Bonus fitur:
   1) Filter katalog (4 poin)
   2) Validasi formulir tambahan (3 poin)
   Catatan: menu hamburger tidak dipakai karena nav
   sudah vertikal di HP sesuai spesifikasi CSS.
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- BONUS 3: FILTER KATALOG ---------- */
  const filterSelect = document.getElementById('filterKategori');
  const catalogGrid = document.getElementById('catalogGrid');

  if (filterSelect && catalogGrid) {
    filterSelect.addEventListener('change', function () {
      const kategori = this.value;
      const cards = catalogGrid.querySelectorAll('.catalog-card');

      cards.forEach(function (card) {
        const cardKategori = card.getAttribute('data-kategori');
        if (kategori === 'semua' || cardKategori === kategori) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  /* ---------- BONUS 2: VALIDASI FORMULIR ---------- */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    const nama = document.getElementById('nama');
    const email = document.getElementById('email');
    const telepon = document.getElementById('telepon');
    const topik = document.getElementById('topik');
    const pesan = document.getElementById('pesan');
    const successMsg = document.getElementById('successMsg');

    function setError(input, errorId, message) {
      const errorEl = document.getElementById(errorId);
      if (errorEl) errorEl.textContent = message;
      if (message) {
        input.classList.add('input-error');
      } else {
        input.classList.remove('input-error');
      }
    }

    function validateNama() {
      if (nama.value.trim().length < 3) {
        setError(nama, 'errorNama', 'Nama minimal 3 karakter.');
        return false;
      }
      setError(nama, 'errorNama', '');
      return true;
    }

    function validateEmail() {
      const pola = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pola.test(email.value.trim())) {
        setError(email, 'errorEmail', 'Format email tidak valid.');
        return false;
      }
      setError(email, 'errorEmail', '');
      return true;
    }

    function validateTelepon() {
      const pola = /^[0-9]{10,13}$/;
      if (!pola.test(telepon.value.trim())) {
        setError(telepon, 'errorTelepon', 'Nomor HP harus 10-13 digit angka.');
        return false;
      }
      setError(telepon, 'errorTelepon', '');
      return true;
    }

    function validateTopik() {
      if (topik.value === '') {
        setError(topik, 'errorTopik', 'Silakan pilih topik.');
        return false;
      }
      setError(topik, 'errorTopik', '');
      return true;
    }

    function validatePesan() {
      const panjang = pesan.value.trim().length;
      if (panjang < 10 || panjang > 500) {
        setError(pesan, 'errorPesan', 'Pesan harus 10-500 karakter.');
        return false;
      }
      setError(pesan, 'errorPesan', '');
      return true;
    }

    nama.addEventListener('blur', validateNama);
    email.addEventListener('blur', validateEmail);
    telepon.addEventListener('blur', validateTelepon);
    topik.addEventListener('change', validateTopik);
    pesan.addEventListener('blur', validatePesan);

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      successMsg.textContent = '';

      const valid =
        validateNama() &&
        validateEmail() &&
        validateTelepon() &&
        validateTopik() &&
        validatePesan();

      if (valid) {
        successMsg.textContent = 'Terima kasih! Pesan Anda berhasil dikirim.';
        contactForm.reset();
      } else {
        successMsg.textContent = '';
      }
    });
  }
});