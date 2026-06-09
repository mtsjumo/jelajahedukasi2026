/* ============================================
   JES APP – Main JavaScript
   MTs Ma'arif Jumo | 2026
   v2.0 – PWA Install + Kamera + PDF per Kunjungan
   ============================================ */

// ==================== DATA DESTINASI ====================
const DESTINASI = [
  {
    id: 'ziarah-pekalongan',
    nama: 'Ziarah Pekalongan',
    lokasi: 'Pekalongan, Jawa Tengah',
    emoji: '🕌',
    warna: 'linear-gradient(135deg, #1a4a1a 0%, #2d7a2d 100%)',
    deskripsi: 'Ziarah ke makam para ulama dan wali di Pekalongan — menapak jejak penyebaran Islam di tanah Jawa.',
    pertanyaan: [
      { id: 'q1', ikon: '🕌', label: 'Siapa ulama/wali yang kamu ziarahi? Ceritakan kisah hidup dan jasa beliau dalam menyebarkan Islam di Pekalongan!', min: 80, placeholder: 'Tuliskan nama ulama/wali tersebut, lalu ceritakan kisah hidupnya, perjuangannya dalam berdakwah, dan warisan yang ditinggalkan...' },
      { id: 'q2', ikon: '💭', label: 'Apa yang kamu rasakan saat berdoa di makam tersebut? Pelajaran apa yang bisa diambil dari kehidupan beliau?', min: 80, placeholder: 'Ungkapkan perasaanmu, refleksi spiritual yang kamu dapatkan, dan nilai-nilai teladan yang ingin kamu terapkan dalam kehidupan sehari-hari...' },
      { id: 'q3', ikon: '🌊', label: 'Bagaimana sejarah penyebaran Islam di Pekalongan? Apa ciri khas budaya Islam di kota ini yang kamu temukan?', min: 60, placeholder: 'Ceritakan apa yang kamu pelajari tentang sejarah Islam di Pekalongan, tradisi, dan keunikan budayanya...' },
    ]
  },
  {
    id: 'gelanggang-samudra',
    nama: 'Gelanggang Samudra',
    lokasi: 'Ancol, Jakarta Utara',
    emoji: '🐬',
    warna: 'linear-gradient(135deg, #003366 0%, #0066cc 100%)',
    deskripsi: 'Wahana wisata bahari terlengkap — berkenalan dengan makhluk-makhluk laut yang menakjubkan ciptaan Allah.',
    pertanyaan: [
      { id: 'q1', ikon: '🐬', label: 'Hewan laut apa yang paling menarik perhatianmu? Deskripsikan ciri-cirinya dan apa yang membuatmu kagum!', min: 80, placeholder: 'Sebutkan jenis hewannya, ceritakan penampilan fisiknya, keunikan perilakunya, dan bagaimana ia bertahan hidup di laut...' },
      { id: 'q2', ikon: '🌊', label: 'Apa saja fakta ilmiah tentang laut yang kamu pelajari di sini? Bagaimana ini menambah rasa syukurmu sebagai pelajar muslim?', min: 80, placeholder: 'Tuliskan fakta-fakta menarik yang kamu temukan, lalu refleksikan sebagai tanda kebesaran Allah SWT dalam ciptaan-Nya...' },
      { id: 'q3', ikon: '⚠️', label: 'Apa ancaman terbesar bagi ekosistem laut saat ini? Apa yang bisa kamu lakukan sebagai pelajar untuk menjaga kelestarian laut?', min: 60, placeholder: 'Diskusikan masalah lingkungan laut dan aksi nyata yang bisa dilakukan oleh pelajar sepertimu...' },
    ]
  },
  {
    id: 'dufan',
    nama: 'Dunia Fantasi (DUFAN)',
    lokasi: 'Ancol, Jakarta Utara',
    emoji: '🎢',
    warna: 'linear-gradient(135deg, #8b0000 0%, #cc3300 100%)',
    deskripsi: 'Taman hiburan ikonik Indonesia — belajar fisika, teknik, dan kreativitas melalui wahana yang mendebarkan!',
    pertanyaan: [
      { id: 'q1', ikon: '🎢', label: 'Wahana apa yang paling berkesan untukmu? Ceritakan pengalaman dan sensasinya secara detail!', min: 80, placeholder: 'Gambarkan wahana tersebut, bagaimana rasanya naik, apa yang kamu lihat dan rasakan, serta kenapa itu menjadi momen yang tak terlupakan...' },
      { id: 'q2', ikon: '⚙️', label: 'Pilihlah satu wahana dan jelaskan konsep fisika atau teknik di balik cara kerjanya! (gravitasi, kecepatan, inersia, dll.)', min: 80, placeholder: 'Pilih wahana favoritmu, lalu analisis secara ilmiah bagaimana wahana itu bekerja. Kaitkan dengan pelajaran IPA yang kamu pelajari di sekolah...' },
      { id: 'q3', ikon: '🇮🇩', label: 'DUFAN adalah taman hiburan kebanggaan Indonesia. Apa pendapatmu tentang industri pariwisata dan hiburan Indonesia?', min: 60, placeholder: 'Berikan pandanganmu tentang perkembangan pariwisata Indonesia, potensinya, dan harapanmu untuk masa depan...' },
    ]
  },
  {
    id: 'lubang-buaya',
    nama: 'Lubang Buaya',
    lokasi: 'Jakarta Timur',
    emoji: '🏛️',
    warna: 'linear-gradient(135deg, #4a3000 0%, #8b6914 100%)',
    deskripsi: 'Monumen bersejarah G30S/PKI — mengenang perjuangan dan pengorbanan para pahlawan bangsa Indonesia.',
    pertanyaan: [
      { id: 'q1', ikon: '📜', label: 'Ceritakan sejarah peristiwa G30S/PKI secara kronologis! Apa yang terjadi di tempat ini dan mengapa penting untuk diingat?', min: 100, placeholder: 'Tuliskan kronologi peristiwa, siapa saja tokoh yang terlibat, apa yang terjadi di Lubang Buaya, dan mengapa peristiwa ini menjadi bagian penting sejarah Indonesia...' },
      { id: 'q2', ikon: '🕯️', label: 'Bagaimana perasaanmu setelah mengunjungi tempat bersejarah ini? Apa pelajaran yang bisa diambil oleh generasi muda sepertimu?', min: 80, placeholder: 'Ungkapkan emosimu, refleksimu sebagai generasi muda, dan komitmenmu untuk menghargai jasa para pahlawan...' },
      { id: 'q3', ikon: '🇮🇩', label: 'Bagaimana cara kita sebagai pelajar menghargai pengorbanan para pahlawan dalam kehidupan sehari-hari di era modern ini?', min: 60, placeholder: 'Berikan ide-ide konkret dan nyata yang bisa dilakukan pelajar untuk menunjukkan rasa patriotisme dan menghargai jasa para pahlawan...' },
    ]
  },
  {
    id: 'pp-iptek',
    nama: 'PP IPTEK',
    lokasi: 'TMII, Jakarta Timur',
    emoji: '🔬',
    warna: 'linear-gradient(135deg, #00264d 0%, #004080 100%)',
    deskripsi: 'Pusat Peragaan Ilmu Pengetahuan dan Teknologi — eksplorasi sains interaktif yang menyenangkan dan edukatif.',
    pertanyaan: [
      { id: 'q1', ikon: '🔬', label: 'Exhibit sains apa yang paling menarik yang kamu temukan? Jelaskan konsep ilmiahnya dan bagaimana ia bekerja!', min: 80, placeholder: 'Ceritakan alat peraga atau pameran yang paling menarik perhatianmu. Jelaskan konsep sains di baliknya dengan bahasa yang mudah dipahami...' },
      { id: 'q2', ikon: '💡', label: 'Teknologi apa yang kamu harap dapat berkembang di Indonesia? Bagaimana teknologi tersebut bisa membantu masyarakat?', min: 80, placeholder: 'Tuliskan teknologi impianmu untuk Indonesia, jelaskan manfaatnya, dan bagaimana teknologi itu bisa menjawab tantangan yang dihadapi bangsa kita...' },
      { id: 'q3', ikon: '🧬', label: 'Bagaimana kunjungan ke PP IPTEK mempengaruhi minat dan cita-citamu di bidang sains dan teknologi?', min: 60, placeholder: 'Refleksikan pengalaman ini, apakah ada profesi atau bidang ilmu yang kini semakin menarik minatmu? Mengapa?' },
    ]
  },
  {
    id: 'tmii',
    nama: 'TMII',
    lokasi: 'Jakarta Timur',
    emoji: '🏯',
    warna: 'linear-gradient(135deg, #5c2200 0%, #a03a00 100%)',
    deskripsi: 'Taman Mini Indonesia Indah — menjelajahi kekayaan budaya Nusantara dari Sabang sampai Merauke dalam satu tempat.',
    pertanyaan: [
      { id: 'q1', ikon: '🏯', label: 'Pavilion atau anjungan daerah mana yang paling menarik perhatianmu? Ceritakan keunikan budaya daerah tersebut!', min: 80, placeholder: 'Pilih satu daerah yang paling berkesan, lalu ceritakan rumah adatnya, pakaian tradisionalnya, kesenian, dan keunikan budayanya...' },
      { id: 'q2', ikon: '🌺', label: 'Indonesia memiliki ratusan suku dan budaya. Mengapa keberagaman ini adalah kekuatan, bukan kelemahan bangsa?', min: 80, placeholder: 'Berikan argumenmu tentang keindahan keberagaman Indonesia, nilai-nilai Bhinneka Tunggal Ika, dan bagaimana kita harus menyikapi perbedaan...' },
      { id: 'q3', ikon: '🎭', label: 'Sebagai pelajar muslim, bagaimana kamu bisa menghargai keberagaman budaya sekaligus menjaga identitas keislamanmu?', min: 60, placeholder: 'Refleksikan bagaimana Islam mengajarkan kita untuk menghargai perbedaan, dan bagaimana menjadi muslim yang berakhlak baik di tengah keberagaman...' },
    ]
  },
  {
    id: 'monas',
    nama: 'Monas Keliling',
    lokasi: 'Jakarta Pusat',
    emoji: '🗼',
    warna: 'linear-gradient(135deg, #1a1a00 0%, #4d4d00 100%)',
    deskripsi: 'Monumen Nasional — simbol kemerdekaan dan kebanggaan bangsa Indonesia yang megah di jantung ibu kota.',
    pertanyaan: [
      { id: 'q1', ikon: '🗼', label: 'Ceritakan sejarah pembangunan Monas! Siapa pencetusnya, kapan dibangun, dan apa makna simbolis dari desainnya?', min: 80, placeholder: 'Tuliskan sejarah Monas dari awal pencetusannya, proses pembangunan, makna api emas di puncaknya, dan diorama yang ada di dalamnya...' },
      { id: 'q2', ikon: '🏙️', label: 'Dari atas Monas, kamu bisa melihat Jakarta. Apa yang kamu rasakan melihat ibu kota Indonesia? Bagaimana kondisi Jakarta menurutmu?', min: 80, placeholder: 'Gambarkan pemandangan yang kamu lihat, kesan tentang Jakarta sebagai ibu kota, tantangan yang dihadapi kota ini, dan harapanmu untuk Jakarta...' },
      { id: 'q3', ikon: '💛', label: 'Sebagai generasi penerus bangsa, apa kontribusi nyata yang ingin kamu berikan untuk kemajuan Indonesia?', min: 60, placeholder: 'Tuliskan cita-citamu, bidang apa yang ingin kamu tekuni, dan bagaimana kamu berencana untuk memberikan manfaat bagi Indonesia...' },
    ]
  },
  {
    id: 'saung-mang-udjo',
    nama: 'Saung Mang Udjo',
    lokasi: 'Bandung, Jawa Barat',
    emoji: '🎵',
    warna: 'linear-gradient(135deg, #1a3300 0%, #336600 100%)',
    deskripsi: 'Pusat budaya dan kesenian Sunda — menikmati keindahan angklung dan warisan budaya Jawa Barat yang mendunia.',
    pertanyaan: [
      { id: 'q1', ikon: '🎵', label: 'Ceritakan pengalamanmu menyaksikan pertunjukan angklung! Apa yang membuatmu kagum dari musik tradisional ini?', min: 80, placeholder: 'Gambarkan suasana pertunjukan, instrumen yang dimainkan, lagu-lagu yang dibawakan, dan apa yang membuatmu terkesan dari penampilan tersebut...' },
      { id: 'q2', ikon: '🎋', label: 'Angklung sudah diakui UNESCO sebagai warisan budaya dunia. Apa peran kita sebagai generasi muda dalam melestarikan budaya ini?', min: 80, placeholder: 'Jelaskan sejarah angklung, mengapa penting untuk dilestarikan, dan tindakan konkret yang bisa kamu lakukan untuk menjaga warisan budaya bangsa...' },
      { id: 'q3', ikon: '🏔️', label: 'Bandung dikenal sebagai kota budaya dan kreativitas. Apa kesan dan hal menarik tentang kota Bandung yang kamu temukan?', min: 60, placeholder: 'Ceritakan kesan pertamamu tentang Bandung, keunikan budaya Sunda, makanan khas, atau hal-hal menarik yang kamu temukan...' },
    ]
  },
  {
    id: 'museum-geologi',
    nama: 'Museum Geologi',
    lokasi: 'Bandung, Jawa Barat',
    emoji: '⛏️',
    warna: 'linear-gradient(135deg, #3d1f00 0%, #7a3d00 100%)',
    deskripsi: 'Menjelajahi sejarah bumi, batuan, mineral, dan fosil jutaan tahun — membaca kitab alam yang tertulis dalam bebatuan.',
    pertanyaan: [
      { id: 'q1', ikon: '💎', label: 'Koleksi batuan, mineral, atau fosil apa yang paling menarik yang kamu lihat? Ceritakan fakta ilmiahnya secara detail!', min: 80, placeholder: 'Pilih satu koleksi yang paling berkesan, lalu ceritakan nama, umur, asal, dan fakta ilmiah menarik tentang benda tersebut...' },
      { id: 'q2', ikon: '🌋', label: 'Indonesia adalah negara yang rawan bencana geologi. Apa yang kamu pelajari tentang gempa bumi, gunung berapi, dan cara menghadapinya?', min: 80, placeholder: 'Jelaskan fenomena geologi yang kamu pelajari, mengapa Indonesia rawan bencana, dan bagaimana kita bisa mempersiapkan diri menghadapi bencana alam...' },
      { id: 'q3', ikon: '🔭', label: 'Geologi mempelajari bumi yang berumur miliaran tahun. Bagaimana ilmu ini menambah rasa kagummu terhadap kebesaran Allah SWT?', min: 60, placeholder: 'Refleksikan bagaimana mempelajari bumi yang luar biasa ini memperkuat imanmu dan rasa syukurmu kepada Allah sebagai pencipta alam semesta...' },
    ]
  },
  {
    id: 'cibaduyut',
    nama: 'Cibaduyut Bandung',
    lokasi: 'Bandung, Jawa Barat',
    emoji: '👟',
    warna: 'linear-gradient(135deg, #2d0033 0%, #660066 100%)',
    deskripsi: 'Sentra industri sepatu legendaris Indonesia — belajar tentang wirausaha, industri kreatif, dan kemandirian ekonomi.',
    pertanyaan: [
      { id: 'q1', ikon: '👟', label: 'Ceritakan pengalamanmu mengunjungi Cibaduyut! Apa yang menarik dari sentra industri sepatu ini dan bagaimana proses pembuatannya?', min: 80, placeholder: 'Gambarkan suasana Cibaduyut, jenis produk yang kamu temukan, proses pembuatan sepatu jika kamu menyaksikannya, dan hal-hal unik yang kamu temukan...' },
      { id: 'q2', ikon: '💼', label: 'Cibaduyut adalah contoh sukses UMKM dan industri kreatif lokal. Apa yang bisa kamu pelajari tentang semangat wirausaha dari tempat ini?', min: 80, placeholder: 'Diskusikan pelajaran wirausaha yang kamu ambil, tantangan yang dihadapi pengrajin lokal, dan bagaimana mendukung produk dalam negeri...' },
      { id: 'q3', ikon: '🌟', label: 'Jika kamu ingin membuat usaha sendiri di masa depan, terinspirasi dari Cibaduyut, usaha apa yang ingin kamu jalankan dan mengapa?', min: 60, placeholder: 'Tuangkan ide bisnis atau usahamu, produk atau jasa apa yang ingin kamu tawarkan, bagaimana cara menjualnya, dan apa yang membuat usahamu unik...' },
    ]
  }
];

// ==================== STATE ====================
let state = {
  identity: null,
  selectedKelas: null,
  currentDest: null,
  formData: {},
  photos: {}
};

// ==================== PWA INSTALL ====================
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  // Tampilkan banner setelah 4 detik — beri waktu user melihat app
  setTimeout(() => showInstallBanner(), 4000);
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  hideInstallBanner();
  showToast('🎉 Aplikasi JES berhasil dipasang di HP kamu!', 4000);
});

function showInstallBanner() {
  // Jangan tampilkan jika sudah berjalan sebagai app (standalone)
  if (window.matchMedia('(display-mode: standalone)').matches) return;
  if (navigator.standalone) return; // iOS Safari
  if (!deferredInstallPrompt) return;
  // Jangan tampilkan lagi jika user sudah pernah dismiss
  if (localStorage.getItem('jes_install_dismissed')) return;

  const banner = document.getElementById('installBanner');
  if (banner) {
    banner.classList.remove('hidden');
    document.getElementById('app').classList.add('has-install-banner');
  }
}

function hideInstallBanner() {
  const banner = document.getElementById('installBanner');
  if (banner) banner.classList.add('hidden');
  document.getElementById('app').classList.remove('has-install-banner');
  // Simpan preferensi — tidak muncul lagi hari ini
  localStorage.setItem('jes_install_dismissed', Date.now());
}

async function triggerInstall() {
  if (!deferredInstallPrompt) return;
  hideInstallBanner();
  deferredInstallPrompt.prompt();
  const { outcome } = await deferredInstallPrompt.userChoice;
  if (outcome === 'dismissed') {
    // Reset sehingga bisa muncul lagi nanti
    localStorage.removeItem('jes_install_dismissed');
  }
  deferredInstallPrompt = null;
}

// ==================== SW UPDATE DETECTION ====================
let newSWWaiting = null;

if ('serviceWorker' in navigator) {
  // Daftarkan SW saat halaman siap
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('./sw.js');
      console.log('[App] SW registered, scope:', reg.scope);

      // Cek update setiap 5 menit
      setInterval(() => reg.update(), 5 * 60 * 1000);

      // SW baru ditemukan sedang menunggu
      reg.addEventListener('updatefound', () => {
        const newSW = reg.installing;
        if (!newSW) return;
        console.log('[App] New SW installing...');

        newSW.addEventListener('statechange', () => {
          if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
            // Ada versi baru yang siap — tampilkan notif update
            console.log('[App] New SW ready, showing update banner');
            newSWWaiting = newSW;
            showUpdateBanner();
          }
        });
      });

      // Reload halaman saat SW baru sudah aktif
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('[App] Controller changed — reloading');
        window.location.reload();
      });

    } catch(err) {
      console.warn('[App] SW registration failed:', err);
    }
  });
}

function showUpdateBanner() {
  const banner = document.getElementById('updateBanner');
  if (banner) banner.classList.remove('hidden');
}

function applyUpdate() {
  const banner = document.getElementById('updateBanner');
  if (banner) banner.classList.add('hidden');
  if (newSWWaiting) {
    // Kirim pesan ke SW baru untuk langsung aktif
    newSWWaiting.postMessage('SKIP_WAITING');
    newSWWaiting = null;
  }
}

// ==================== LOAD/SAVE STATE ====================
function loadState() {
  try {
    const saved = localStorage.getItem('jes_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      state.identity = parsed.identity || null;
      state.formData = parsed.formData || {};
      // Load photos from localStorage (compressed)
      const savedPhotos = localStorage.getItem('jes_photos');
      if (savedPhotos) {
        state.photos = JSON.parse(savedPhotos);
      }
    }
  } catch(e) { console.log('Load state error:', e); }
}

function saveState() {
  try {
    localStorage.setItem('jes_state', JSON.stringify({
      identity: state.identity,
      formData: state.formData
    }));
    // Save photos separately (can be large)
    try {
      localStorage.setItem('jes_photos', JSON.stringify(state.photos));
    } catch(quota) {
      // If photos too large, skip silently
      console.log('Photo storage quota exceeded, photos not persisted');
    }
  } catch(e) { console.log('Save state error:', e); }
}

// ==================== PDF TEXT HELPER ====================
// jsPDF (Helvetica) tidak mendukung emoji — bersihkan agar tidak overlap/rusak
function pdfSafeText(str) {
  if (!str) return '';
  return String(str)
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{1F1E6}-\u{1F1FF}]/gu, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

// ==================== PDF FOTO HELPER ====================
function resolveImageSize(photo) {
  const src = typeof photo === 'string' ? photo : photo.src;
  if (photo?.w && photo?.h) return Promise.resolve({ w: photo.w, h: photo.h });
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = () => resolve({ w: 4, h: 3 });
    img.src = src;
  });
}

function fitImageInBox(natW, natH, maxW, maxH) {
  const scale = Math.min(maxW / natW, maxH / natH);
  return { w: natW * scale, h: natH * scale };
}

// Skala tampilan foto di PDF (~25% lebih kecil, proporsi tetap)
const PHOTO_DISPLAY_SCALE = 0.75;

function getPhotoLimits(size, colW, fullW) {
  let limits;
  if (size === 'wide') limits = { maxW: fullW, maxH: fullW * 0.72 };
  else if (size === 'half') limits = { maxW: colW * 0.62, maxH: colW * 1.35 };
  else limits = { maxW: colW, maxH: colW * 1.5 };
  return {
    maxW: limits.maxW * PHOTO_DISPLAY_SCALE,
    maxH: limits.maxH * PHOTO_DISPLAY_SCALE,
  };
}

function pdfImageFormat(src) {
  if (src.startsWith('data:image/png')) return 'PNG';
  if (src.startsWith('data:image/webp')) return 'WEBP';
  return 'JPEG';
}

// ==================== INIT ====================
window.addEventListener('DOMContentLoaded', () => {
  loadState();

  const btnPDF = document.getElementById('btnGeneratePDF');
  const btnGDrive = document.getElementById('btnKirimGDrive');
  if (btnPDF) btnPDF.addEventListener('click', () => generatePDF(null));
  if (btnGDrive) btnGDrive.addEventListener('click', bukaGdriveModal);

  setTimeout(() => {
    document.getElementById('splash').classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('splash').style.display = 'none';
      if (state.identity) {
        showApp();
      } else {
        showIdentityModal();
      }
    }, 600);
  }, 2200);
});

// ==================== IDENTITY ====================
function showIdentityModal() {
  document.getElementById('identityModal').classList.remove('hidden');
  document.getElementById('app').classList.add('hidden');

  document.querySelectorAll('.kelas-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.kelas-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedKelas = btn.dataset.kelas;
    });
  });

  document.getElementById('btnSimpanIdentitas').addEventListener('click', simpanIdentitas);
}

function simpanIdentitas() {
  const nama = document.getElementById('inputNama').value.trim();
  const absen = document.getElementById('inputAbsen').value.trim();
  const kelas = state.selectedKelas;

  if (!nama) { showToast('⚠️ Isi nama lengkapmu dulu ya!'); return; }
  if (!kelas) { showToast('⚠️ Pilih kelasmu dulu!'); return; }

  state.identity = { nama, kelas, absen: absen || '-' };
  saveState();
  document.getElementById('identityModal').classList.add('hidden');
  showApp();
}

function editIdentitas() {
  state.identity = null;
  state.selectedKelas = null;
  document.getElementById('inputNama').value = '';
  document.getElementById('inputAbsen').value = '';
  document.querySelectorAll('.kelas-btn').forEach(b => b.classList.remove('active'));
  showIdentityModal();
}

// ==================== APP MAIN ====================
function showApp() {
  document.getElementById('app').classList.remove('hidden');
  if (state.identity) {
    document.getElementById('badgeNama').textContent = state.identity.nama.split(' ')[0];
    document.getElementById('badgeKelas').textContent = state.identity.kelas;
  }
  renderCards();
  updateStats();
}

function renderCards() {
  const grid = document.getElementById('cardsGrid');
  grid.innerHTML = '';
  DESTINASI.forEach((dest, i) => {
    const isDone = !!(state.formData[dest.id] && Object.keys(state.formData[dest.id]).some(k => state.formData[dest.id][k]));
    const card = document.createElement('div');
    card.className = `dest-card ${isDone ? 'done' : ''}`;
    card.style.animationDelay = `${i * 0.07}s`;
    card.innerHTML = `
      <div class="card-thumb" style="background:${dest.warna}">
        <span>${dest.emoji}</span>
        <div class="card-done-badge">✓</div>
      </div>
      <div class="card-body">
        <div class="card-num">Destinasi ${i + 1}</div>
        <div class="card-name">${dest.nama}</div>
        <div class="card-location">📍 ${dest.lokasi}</div>
        <span class="card-status ${isDone ? 'status-done' : 'status-empty'}">
          ${isDone ? '✅ Sudah diisi' : '○ Belum diisi'}
        </span>
      </div>
    `;
    card.addEventListener('click', () => openForm(dest.id));
    grid.appendChild(card);
  });
}

function updateStats() {
  const filled = DESTINASI.filter(d =>
    state.formData[d.id] && Object.keys(state.formData[d.id]).some(k => state.formData[d.id][k])
  ).length;
  const pct = Math.round((filled / 10) * 100);

  document.getElementById('statTerisi').textContent = filled;
  document.getElementById('statPersen').textContent = pct + '%';
  document.getElementById('progressBar').style.width = pct + '%';

  const btnPDF = document.getElementById('btnGeneratePDF');
  const btnGDrive = document.getElementById('btnKirimGDrive');
  const pdfInfo = document.getElementById('pdfInfo');

  if (btnPDF) btnPDF.disabled = filled === 0;
  if (btnGDrive) btnGDrive.disabled = filled === 0;
  if (pdfInfo) {
    pdfInfo.textContent = filled > 0
      ? `${filled} dari 10 destinasi sudah diisi — siap dibuat laporan!`
      : 'Isi minimal 1 destinasi untuk membuat laporan';
  }
}

// ==================== FORM ====================
function openForm(destId) {
  const dest = DESTINASI.find(d => d.id === destId);
  if (!dest) return;
  state.currentDest = dest;

  const data = state.formData[destId] || {};
  const isDone = Object.keys(data).some(k => data[k]);

  document.getElementById('formIcon').textContent = dest.emoji;
  document.getElementById('formTitle').textContent = dest.nama;
  document.getElementById('formSub').textContent = dest.lokasi;

  if (isDone) {
    document.getElementById('formSavedBadge').classList.remove('hidden');
  } else {
    document.getElementById('formSavedBadge').classList.add('hidden');
  }

  const body = document.getElementById('formBody');
  body.innerHTML = '';

  // Info card
  const infoCard = document.createElement('div');
  infoCard.className = 'form-section';
  infoCard.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;">
      <span style="font-size:32px">${dest.emoji}</span>
      <div>
        <div style="font-weight:800;font-size:15px;color:var(--text)">${dest.nama}</div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:3px">${dest.deskripsi}</div>
      </div>
    </div>
  `;
  body.appendChild(infoCard);

  // Questions
  dest.pertanyaan.forEach((q, qi) => {
    const section = document.createElement('div');
    section.className = 'form-section';
    const currentVal = data[q.id] || '';
    section.innerHTML = `
      <div class="form-section-title"><span>${q.ikon}</span> Pertanyaan ${qi + 1}</div>
      <div class="form-section-desc">${q.label}</div>
      <div class="form-field">
        <textarea
          id="field_${q.id}"
          rows="5"
          placeholder="${q.placeholder}"
          oninput="updateCharCount(this, '${q.id}', ${q.min})"
        >${currentVal}</textarea>
        <div class="char-counter" id="counter_${q.id}">
          ${currentVal.length} karakter (min. ${q.min})
        </div>
      </div>
    `;
    body.appendChild(section);
    setTimeout(() => {
      const ta = document.getElementById(`field_${q.id}`);
      if (ta) updateCharCount(ta, q.id, q.min);
    }, 50);
  });

  // ── FOTO SECTION dengan Galeri + Kamera ──
  const fotoSection = document.createElement('div');
  fotoSection.className = 'form-section';
  fotoSection.id = 'fotoSection';
  fotoSection.innerHTML = `
    <div class="form-section-title">📸 Foto Dokumentasi</div>
    <div class="form-section-desc">Tambahkan foto kunjunganmu. Foto akan tampil di laporan PDF. (Maks. 6 foto)</div>

    <!-- Hidden file inputs -->
    <input type="file" id="fotoGaleri_${destId}" accept="image/*" multiple style="display:none"
      onchange="handleFotoUpload(this, '${destId}')" />
    <input type="file" id="fotoKamera_${destId}" accept="image/*" capture="environment" style="display:none"
      onchange="handleFotoUpload(this, '${destId}')" />

    <!-- Buttons -->
    <div class="foto-btn-row">
      <button class="btn-foto-src btn-galeri" onclick="document.getElementById('fotoGaleri_${destId}').click()">
        <span class="foto-btn-icon">🖼️</span>
        <span>Dari Galeri</span>
      </button>
      <button class="btn-foto-src btn-kamera" onclick="document.getElementById('fotoKamera_${destId}').click()">
        <span class="foto-btn-icon">📷</span>
        <span>Buka Kamera</span>
      </button>
    </div>

    <div class="foto-preview-grid" id="fotoPreview_${destId}"></div>
    <div class="foto-count" id="fotoCount_${destId}">0 / 6 foto</div>
  `;
  body.appendChild(fotoSection);

  if (state.photos[destId]) renderFotoPreview(destId);

  // ── TOMBOL PDF PER KUNJUNGAN ──
  const pdfKunjunganSection = document.createElement('div');
  pdfKunjunganSection.className = 'form-section pdf-kunjungan-section';
  pdfKunjunganSection.innerHTML = `
    <div class="form-section-title">📄 Laporan Kunjungan Ini</div>
    <div class="form-section-desc">Unduh laporan PDF hanya untuk kunjungan <strong>${dest.nama}</strong> saja sebagai salinan pribadi.</div>
    <button class="btn-pdf-kunjungan ${isDone ? '' : 'disabled-look'}" id="btnPDFkunjungan_${destId}"
      onclick="generatePDF('${destId}')" ${isDone ? '' : 'disabled'}>
      <span>📄 Unduh PDF – ${dest.nama}</span>
    </button>
    ${isDone ? '' : '<div style="font-size:11px;color:var(--text-light);text-align:center;margin-top:6px;">Simpan laporan terlebih dahulu untuk mengaktifkan tombol ini</div>'}
  `;
  body.appendChild(pdfKunjunganSection);

  document.getElementById('formModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeForm() {
  document.getElementById('formModal').classList.add('hidden');
  document.body.style.overflow = '';
  state.currentDest = null;
}

function updateCharCount(ta, qId, min) {
  const len = ta.value.length;
  const counter = document.getElementById(`counter_${qId}`);
  if (!counter) return;
  counter.textContent = `${len} karakter (min. ${min})`;
  counter.className = len >= min ? 'char-counter good'
    : len >= min * 0.6 ? 'char-counter warning'
    : 'char-counter';
}

function simpanForm() {
  if (!state.currentDest) return;
  const dest = state.currentDest;
  const data = {};
  let kurang = [];

  dest.pertanyaan.forEach((q, qi) => {
    const ta = document.getElementById(`field_${q.id}`);
    const val = ta ? ta.value.trim() : '';
    data[q.id] = val;
    if (val.length < q.min) kurang.push(`Pertanyaan ${qi + 1} (min. ${q.min} karakter)`);
  });

  if (kurang.length > 0) {
    showToast(`✍️ Jawaban terlalu singkat: ${kurang[0]}`);
    return;
  }

  state.formData[dest.id] = data;
  saveState();
  document.getElementById('formSavedBadge').classList.remove('hidden');

  // Aktifkan tombol PDF kunjungan
  const btnPDFkunj = document.getElementById(`btnPDFkunjungan_${dest.id}`);
  if (btnPDFkunj) {
    btnPDFkunj.disabled = false;
    btnPDFkunj.classList.remove('disabled-look');
    // Remove hint text
    const hint = btnPDFkunj.nextElementSibling;
    if (hint && hint.tagName === 'DIV') hint.remove();
  }

  renderCards();
  updateStats();
  showToast('✅ Laporan tersimpan! PDF kunjungan siap diunduh.');
}

// ==================== FOTO ====================
function handleFotoUpload(input, destId) {
  const files = Array.from(input.files);
  if (!state.photos[destId]) state.photos[destId] = [];

  const remaining = 6 - state.photos[destId].length;
  if (remaining <= 0) { showToast('⚠️ Sudah maksimal 6 foto!'); input.value = ''; return; }

  const toAdd = files.slice(0, remaining);
  if (files.length > remaining) showToast(`⚠️ Hanya ${remaining} foto lagi yang bisa ditambahkan`);

  let loaded = 0;
  toAdd.forEach(file => {
    // Compress before storing
    compressImage(file, (compressed) => {
      state.photos[destId].push({ src: compressed, name: file.name, w, h });
      loaded++;
      if (loaded === toAdd.length) {
        renderFotoPreview(destId);
        saveState();
      }
    });
  });
  input.value = '';
}

function compressImage(file, callback) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const MAX = 1200;
      let w = img.width, h = img.height;
      if (w > MAX || h > MAX) {
        if (w > h) { h = Math.round(h * MAX / w); w = MAX; }
        else { w = Math.round(w * MAX / h); h = MAX; }
      }
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      callback(canvas.toDataURL('image/jpeg', 0.75));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function renderFotoPreview(destId) {
  const grid = document.getElementById(`fotoPreview_${destId}`);
  const countEl = document.getElementById(`fotoCount_${destId}`);
  if (!grid) return;
  const photos = state.photos[destId] || [];
  grid.innerHTML = photos.map((p, i) => `
    <div class="foto-preview-item">
      <img src="${p.src}" alt="Foto ${i+1}" loading="lazy" />
      <button class="foto-remove" onclick="hapusFoto('${destId}', ${i})" title="Hapus foto">×</button>
    </div>
  `).join('');
  if (countEl) countEl.textContent = `${photos.length} / 6 foto`;
}

function hapusFoto(destId, idx) {
  if (state.photos[destId]) {
    state.photos[destId].splice(idx, 1);
    renderFotoPreview(destId);
    saveState();
  }
}

// ==================== PDF GENERATION ====================
// destId = null → laporan semua destinasi
// destId = 'xxx' → laporan satu kunjungan saja
// ╔══════════════════════════════════════════════════════════════════╗
// ║   PDF ENGINE v5 – MAJALAH DUA KOLOM                            ║
// ║   Teks mengalir 2 kolom, foto paralel tanpa sisipan di tengah  ║
// ╚══════════════════════════════════════════════════════════════════╝

async function generatePDF(destId) {
  const isSingle = !!destId;
  const dest = isSingle ? DESTINASI.find(d => d.id === destId) : null;

  const btnEl = isSingle
    ? document.getElementById(`btnPDFkunjungan_${destId}`)
    : document.getElementById('btnGeneratePDF');
  if (btnEl) { btnEl.disabled = true; btnEl.innerHTML = '<span>⏳ Membuat PDF...</span>'; }

  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    // ── KONSTANTA LAYOUT ──
    const PW = 210, PH = 297;
    const MARGIN = 12;           // margin luar
    const GUTTER = 5;            // jarak antar kolom
    const COL_W = (PW - MARGIN * 2 - GUTTER) / 2;  // lebar satu kolom ≈ 86.5mm
    const COL_L = MARGIN;                            // x kolom kiri
    const COL_R = MARGIN + COL_W + GUTTER;           // x kolom kanan
    const HEADER_H = 22;         // tinggi header destinasi per halaman
    const BODY_TOP = 24;         // y mulai konten (setelah header halaman)
    const BODY_BOT = PH - 16;    // y batas bawah (sebelum footer)
    const LINE_H_SM = 4.8;       // tinggi baris teks kecil
    const LINE_H_MD = 5.8;       // tinggi baris teks normal (10pt)
    const FULL_W = PW - MARGIN * 2;

    // ── STATE KOLOM ──
    let colY = [BODY_TOP, BODY_TOP];
    let activePage = doc.internal.getCurrentPageInfo().pageNumber;
    let pageDest = null; // destinasi aktif (header halaman lanjutan)

    const syncCols = () => {
      const y = Math.max(colY[0], colY[1]);
      colY[0] = y;
      colY[1] = y;
      return y;
    };

    const newPage = (withHeader) => {
      doc.addPage();
      activePage = doc.internal.getCurrentPageInfo().pageNumber;
      colY = [BODY_TOP, BODY_TOP];
      const dest = withHeader || pageDest;
      if (dest) drawDestHeader(dest);
      drawColumnRule();
      drawPageFooter();
    };

    // Gambar garis pembatas kolom (tipis, dekoratif)
    const drawColumnRule = () => {
      const midX = MARGIN + COL_W + GUTTER / 2;
      const topY = BODY_TOP;
      const botY = BODY_BOT;
      doc.setDrawColor(210, 230, 210);
      doc.setLineWidth(0.2);
      doc.line(midX, topY, midX, botY);
    };

    // Footer setiap halaman
    const drawPageFooter = () => {
      const pg = doc.internal.getCurrentPageInfo().pageNumber;
      doc.setFillColor(15, 69, 38);
      doc.rect(0, PH - 10, PW, 10, 'F');
      doc.setFontSize(7.5);
      doc.setTextColor(160, 210, 160);
      doc.setFont('helvetica', 'normal');
      doc.text(`${pdfSafeText(state.identity.nama)} · Kelas ${state.identity.kelas} · Absen ${state.identity.absen}`, MARGIN, PH - 3.5);
      doc.text(`JES 2026 · MTs Ma'arif Jumo · Hal. ${pg}`, PW - MARGIN, PH - 3.5, { align: 'right' });
    };

    // Pilih kolom dengan posisi lebih rendah (lebih pendek = prioritas)
    const shortCol = () => colY[0] <= colY[1] ? 0 : 1;
    const colX = (c) => c === 0 ? COL_L : COL_R;

    const ensureSpace = (needed, col) => {
      if (colY[col] + needed > BODY_BOT) {
        const other = 1 - col;
        if (colY[other] + needed <= BODY_BOT) return other;
        newPage();
        return 0;
      }
      return col;
    };

    const writeText = (text, col, fontSize, color, fontStyle, maxW) => {
      if (!text) return col;
      doc.setFontSize(fontSize);
      doc.setTextColor(...color);
      doc.setFont('helvetica', fontStyle || 'normal');
      const w = maxW || COL_W;
      const lines = doc.splitTextToSize(text, w - 2);
      const lineH = fontSize < 9 ? LINE_H_SM : LINE_H_MD;
      let c = col;
      for (const line of lines) {
        c = ensureSpace(lineH + 1, c);
        doc.text(line, colX(c) + 1, colY[c]);
        colY[c] += lineH;
      }
      return c;
    };

    // ── SISIPKAN FOTO ke kolom (rasio asli dipertahankan) ──
    const insertPhoto = async (photo, col, caption, size) => {
      const src = typeof photo === 'string' ? photo : photo.src;
      const limits = getPhotoLimits(size, COL_W, FULL_W);
      const { w: natW, h: natH } = await resolveImageSize(photo);
      let { w: imgW, h: imgH } = fitImageInBox(natW, natH, limits.maxW, limits.maxH);

      if (size === 'wide') {
        const maxY = Math.max(colY[0], colY[1]);
        colY[0] = maxY;
        colY[1] = maxY;
        col = 0;
      }

      const needed = imgH + (caption ? 5 : 2) + 3;
      col = ensureSpace(needed, col);

      const x = size === 'wide'
        ? MARGIN + (limits.maxW - imgW) / 2
        : colX(col) + (limits.maxW - imgW) / 2;
      const y = colY[col];

      doc.setFillColor(200, 215, 200);
      doc.rect(x + 0.8, y + 0.8, imgW, imgH, 'F');

      try {
        doc.addImage(src, pdfImageFormat(src), x, y, imgW, imgH, undefined, 'MEDIUM');
      } catch(e) {
        doc.setFillColor(220, 235, 220);
        doc.rect(x, y, imgW, imgH, 'F');
        doc.setFontSize(8); doc.setTextColor(150,150,150);
        doc.text('[ foto ]', x + imgW/2, y + imgH/2, { align: 'center' });
      }

      doc.setDrawColor(180, 210, 180);
      doc.setLineWidth(0.3);
      doc.rect(x, y, imgW, imgH);

      colY[col] += imgH + 1.5;

      // Caption foto
      if (caption) {
        doc.setFontSize(7.5);
        doc.setTextColor(100, 140, 100);
        doc.setFont('helvetica', 'italic');
        const capLines = doc.splitTextToSize(caption, imgW - 2);
        capLines.forEach(cl => {
          doc.text(cl, x + 1, colY[col]);
          colY[col] += 3.8;
        });
        doc.setFont('helvetica', 'normal');
      }

      colY[col] += 3;
      if (size === 'wide') colY[1] = colY[0]; // sync kedua kolom
      return col;
    };

    // Label pertanyaan dalam satu kolom (wrap, tanpa emoji)
    const drawSectionLabel = (text, col, qi) => {
      const labelText = pdfSafeText(text).toUpperCase();
      const prefix = `PERTANYAAN ${qi + 1}`;
      doc.setFontSize(7);
      doc.setFont('helvetica', 'bold');
      const lines = doc.splitTextToSize(labelText, COL_W - 8);
      const boxH = 7 + lines.length * 4.5;
      col = ensureSpace(boxH + 3, col);
      const x = colX(col);
      const y = colY[col];
      doc.setFillColor(15, 69, 38);
      doc.roundedRect(x, y, COL_W, boxH, 1.5, 1.5, 'F');
      doc.setTextColor(240, 208, 96);
      doc.text(prefix, x + 3, y + 4.8);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.8);
      doc.text(lines, x + 3, y + 9);
      colY[col] = y + boxH + 2.5;
      return col;
    };

    const estimatePhotoHeight = async (photo, size) => {
      const limits = getPhotoLimits(size, COL_W, FULL_W);
      const { w: natW, h: natH } = await resolveImageSize(photo);
      return fitImageInBox(natW, natH, limits.maxW, limits.maxH).h;
    };

    const insertParallelPhoto = async (photo, textCol, size) => {
      const other = 1 - textCol;
      const imgH = await estimatePhotoHeight(photo, size);
      if (colY[other] + imgH + 5 > BODY_BOT) return;
      if (colY[other] < colY[textCol]) colY[other] = colY[textCol];
      await insertPhoto(photo, other, null, size);
    };

    const drawDestHeader = (d) => {
      doc.setFillColor(15, 69, 38);
      doc.rect(0, 0, PW, HEADER_H, 'F');
      doc.setFillColor(201, 162, 39);
      doc.rect(0, HEADER_H, PW, 2, 'F');

      const destIdx = DESTINASI.findIndex(x => x.id === d.id) + 1;
      let hy = 5;
      doc.setFontSize(7.5);
      doc.setTextColor(150, 200, 150);
      doc.setFont('helvetica', 'normal');
      doc.text(`DESTINASI ${destIdx}`, MARGIN, hy);
      hy += 4.5;

      doc.setFontSize(12);
      doc.setTextColor(240, 208, 96);
      doc.setFont('helvetica', 'bold');
      const nameLines = doc.splitTextToSize(pdfSafeText(d.nama).toUpperCase(), PW - MARGIN * 2 - 16);
      nameLines.forEach(line => {
        doc.text(line, MARGIN, hy);
        hy += 5;
      });

      doc.setFontSize(8);
      doc.setTextColor(180, 220, 180);
      doc.setFont('helvetica', 'normal');
      doc.text(pdfSafeText(d.lokasi), MARGIN, Math.min(hy + 1, HEADER_H - 2));

      doc.setFillColor(201, 162, 39);
      doc.circle(PW - MARGIN - 7, 9, 5.5, 'F');
      doc.setFontSize(9);
      doc.setTextColor(15, 69, 38);
      doc.setFont('helvetica', 'bold');
      doc.text(String(destIdx), PW - MARGIN - 7, 10.2, { align: 'center' });
    };

    // ══════════════════════════════════════════════
    //   COVER PAGE – Majalah Style
    // ══════════════════════════════════════════════
    const drawCover = (singleDest) => {
      // Background gelap
      doc.setFillColor(10, 30, 15);
      doc.rect(0, 0, PW, PH, 'F');

      // Dekorasi: strip hijau diagonal
      doc.setFillColor(26, 107, 60);
      doc.rect(0, 0, PW, 4, 'F');
      doc.rect(0, PH - 4, PW, 4, 'F');

      // Accent bar emas
      doc.setFillColor(201, 162, 39);
      doc.rect(MARGIN, 18, 3, 48, 'F');

      // Judul besar
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(52);
      doc.setTextColor(240, 208, 96);
      doc.text('JES', MARGIN + 8, 48);

      doc.setFontSize(13);
      doc.setTextColor(200, 230, 200);
      doc.text('JELAJAH EDUKASI & SPIRITUAL', MARGIN + 8, 57);

      doc.setFontSize(10);
      doc.setTextColor(130, 170, 130);
      doc.text("MTs Ma'arif Jumo · 2026", MARGIN + 8, 65);

      // Garis pemisah emas
      doc.setDrawColor(201, 162, 39);
      doc.setLineWidth(0.5);
      doc.line(MARGIN, 70, PW - MARGIN, 70);

      if (singleDest) {
        // Cover single: tampilkan nama destinasi besar
        doc.setFontSize(26);
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        const dLines = doc.splitTextToSize(pdfSafeText(singleDest.nama), PW - MARGIN * 2 - 10);
        doc.text(dLines, MARGIN + 8, 88);
        doc.setFontSize(11);
        doc.setTextColor(150, 200, 150);
        doc.setFont('helvetica', 'normal');
        doc.text(pdfSafeText(singleDest.lokasi), MARGIN + 8, 88 + dLines.length * 10 + 4);
      } else {
        // Cover full: grid mini nama destinasi
        doc.setFontSize(11);
        doc.setTextColor(200, 230, 200);
        doc.setFont('helvetica', 'bold');
        doc.text('EDISI LENGKAP', MARGIN + 8, 82);

        doc.setFontSize(9);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(150, 190, 150);
        let dy = 92;
        DESTINASI.forEach((d, i) => {
          const done = !!(state.formData[d.id] && Object.keys(state.formData[d.id]).some(k => state.formData[d.id][k]));
          doc.setTextColor(done ? 200 : 90, done ? 230 : 110, done ? 200 : 90);
          doc.text(`${String(i+1).padStart(2,'0')}  ${pdfSafeText(d.nama)}`, MARGIN + 8, dy);
          if (done) {
            doc.setFillColor(26, 107, 60);
            doc.roundedRect(PW - MARGIN - 14, dy - 4, 14, 5.5, 1, 1, 'F');
            doc.setFontSize(7); doc.setTextColor(200, 240, 200);
            doc.text('SELESAI', PW - MARGIN - 11, dy);
            doc.setFontSize(9); doc.setTextColor(150, 190, 150);
          }
          dy += 7;
        });
      }

      // Box info siswa di bawah
      doc.setFillColor(26, 50, 30);
      doc.rect(0, PH - 52, PW, 48, 'F');
      doc.setDrawColor(201, 162, 39);
      doc.setLineWidth(0.4);
      doc.line(MARGIN, PH - 50, PW - MARGIN, PH - 50);

      doc.setFontSize(8.5);
      doc.setTextColor(180, 210, 180);
      doc.setFont('helvetica', 'normal');
      doc.text('LAPORAN KUNJUNGAN', MARGIN + 2, PH - 43);

      doc.setFontSize(17);
      doc.setTextColor(240, 208, 96);
      doc.setFont('helvetica', 'bold');
      doc.text(pdfSafeText(state.identity.nama), MARGIN + 2, PH - 33);

      doc.setFontSize(10);
      doc.setTextColor(160, 200, 160);
      doc.setFont('helvetica', 'normal');
      doc.text(`Kelas ${state.identity.kelas}  ·  No. Absen: ${state.identity.absen}`, MARGIN + 2, PH - 24);

      const now = new Date();
      doc.setFontSize(8.5);
      doc.setTextColor(120, 160, 120);
      doc.text(now.toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' }), MARGIN + 2, PH - 16);
    };

    // ══════════════════════════════════════════════
    //   RENDER SATU DESTINASI – Majalah 2 Kolom
    // ══════════════════════════════════════════════
    const renderDestMagazine = async (d) => {
      const data = state.formData[d.id];
      if (!data || !Object.keys(data).some(k => data[k])) return;
      const photos = state.photos[d.id] || [];

      pageDest = d;
      doc.addPage();
      colY = [BODY_TOP, BODY_TOP];
      drawDestHeader(d);
      drawColumnRule();

      // Pembuka majalah: narasi kiri, foto kanan — paralel dari atas
      colY[0] = BODY_TOP;
      colY[1] = BODY_TOP;
      writeText(pdfSafeText(d.deskripsi), 0, 9, [70, 100, 70], 'italic');
      colY[0] += 2;

      if (photos.length > 0) {
        colY[1] = BODY_TOP;
        await insertPhoto(photos[0], 1, `Foto kunjungan ${pdfSafeText(d.nama)}`, 'full');
      }

      // Pertanyaan & jawaban — alur 2 kolom, foto paralel (bukan di tengah paragraf)
      for (let qi = 0; qi < d.pertanyaan.length; qi++) {
        const q = d.pertanyaan[qi];
        const answer = data[q.id];
        if (!answer) continue;

        let col = shortCol();
        col = drawSectionLabel(q.label, col, qi);

        const photoIdx = qi + 1;
        if (photoIdx < photos.length && qi < 2) {
          await insertParallelPhoto(photos[photoIdx], col, qi === 0 ? 'full' : 'half');
        }

        col = writeText(pdfSafeText(answer), col, 10, [25, 40, 25], 'normal');
        colY[col] += 4;
      }

      // Foto melintang 2 kolom — samakan dulu ketinggian kolom
      if (photos.length >= 3) {
        syncCols();
        const wideH = await estimatePhotoHeight(photos[2], 'wide');
        if (syncCols() + wideH + 8 <= BODY_BOT) {
          await insertPhoto(photos[2], 0, `Dokumentasi ${pdfSafeText(d.nama)} — JES 2026`, 'wide');
        }
      }

      // Sisa foto — grid 2 kolom bergantian
      for (const p of photos.slice(3)) {
        const col = shortCol();
        const halfH = await estimatePhotoHeight(p, 'half');
        if (colY[col] + halfH <= BODY_BOT) {
          await insertPhoto(p, col, null, 'half');
        }
      }

      drawPageFooter();
    };

    // ══════════════════════════════════════════════
    //   MAIN: Render PDF
    // ══════════════════════════════════════════════
    if (isSingle) {
      drawCover(dest);
      drawPageFooter();
      await renderDestMagazine(dest);

      const filename = `JES2026_${dest.id}_${state.identity.nama.replace(/\s+/g,'_')}.pdf`;
      doc.save(filename);
      showToast(`📄 PDF ${dest.nama} diunduh!`);

    } else {
      drawCover(null);
      drawPageFooter();

      for (const d of DESTINASI) {
        await renderDestMagazine(d);
      }

      const filename = `JES2026_MAJALAH_${state.identity.nama.replace(/\s+/g,'_')}_${state.identity.kelas.replace(/\s+/g,'')}.pdf`;
      doc.save(filename);
      showToast('🎉 PDF Majalah berhasil diunduh!');
    }

  } catch(e) {
    console.error('PDF error:', e);
    showToast('❌ Gagal membuat PDF. Coba lagi ya!');
  }

  if (btnEl) {
    btnEl.disabled = false;
    btnEl.innerHTML = isSingle
      ? `<span>📄 Unduh PDF – ${dest ? dest.nama : ''}</span>`
      : '<span>📄 Unduh PDF Semua Kunjungan</span>';
  }
}

// ==================== GOOGLE DRIVE PENGIRIMAN ====================

// ── GANTI URL INI dengan link Google Form pengumpulan tugas milik madrasah ──
// Cara membuat: buka forms.google.com → buat form baru dengan field:
//   Nama Siswa, Kelas, No. Absen, Upload PDF
// Lalu copy link form-nya ke sini:
const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-id-here';
// ─────────────────────────────────────────────────────────────────────────────

function bukaGdriveModal() {
  const filled = DESTINASI.filter(d =>
    state.formData[d.id] && Object.keys(state.formData[d.id]).some(k => state.formData[d.id][k])
  );

  // Isi ringkasan
  const summaryEl = document.getElementById('gdriveSummary');
  if (summaryEl) {
    const destList = filled.map(d => `• ${d.nama}`).join('<br>');
    summaryEl.innerHTML = `
      <strong>Siswa:</strong> ${state.identity.nama}<br>
      <strong>Kelas:</strong> ${state.identity.kelas} &nbsp;|&nbsp; <strong>Absen:</strong> ${state.identity.absen}<br>
      <strong>Destinasi terisi:</strong> ${filled.length} dari 10<br>
      <div style="margin-top:8px;font-size:12px;color:var(--text-muted)">${destList}</div>
    `;
  }

  // Set link form
  const btnBuka = document.getElementById('btnBukaForm');
  if (btnBuka) {
    // Prefill URL Google Form dengan data siswa jika form mendukung prefill
    // Format: ?entry.XXXXXXX=nilai (ganti ID entry sesuai form Anda)
    const prefilled = buildPrefilledFormURL();
    btnBuka.onclick = () => window.open(prefilled, '_blank');
  }

  document.getElementById('gdriveModal').classList.remove('hidden');
}

function closeGdriveModal() {
  document.getElementById('gdriveModal').classList.add('hidden');
}

// Bangun URL Google Form dengan data siswa ter-prefill
// Ganti entry.XXXXXXXXX sesuai ID field di Google Form Anda
function buildPrefilledFormURL() {
  if (!state.identity) return GOOGLE_FORM_URL;

  const filled = DESTINASI.filter(d =>
    state.formData[d.id] && Object.keys(state.formData[d.id]).some(k => state.formData[d.id][k])
  );

  // Contoh prefill — sesuaikan entry ID dengan form Anda:
  // entry.111111111 = Nama Siswa
  // entry.222222222 = Kelas
  // entry.333333333 = No. Absen
  // entry.444444444 = Jumlah destinasi
  const params = new URLSearchParams({
    'entry.111111111': state.identity.nama,
    'entry.222222222': state.identity.kelas,
    'entry.333333333': state.identity.absen,
    'entry.444444444': `${filled.length} dari 10 destinasi`,
  });

  // Jika GOOGLE_FORM_URL belum diganti, buka form tanpa prefill
  if (GOOGLE_FORM_URL.includes('your-form-id-here')) {
    return GOOGLE_FORM_URL;
  }

  return `${GOOGLE_FORM_URL}?${params.toString()}`;
}

// ==================== TOAST ====================
function showToast(msg, duration = 3000) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.add('hidden'), duration);
}
