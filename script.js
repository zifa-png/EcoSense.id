// ===== FIREBASE CONFIG =====
var firebaseConfig = {
  apiKey: "AIzaSyBGs2g_eObrrrDd0zK9tc3ZwEvp8QgQf0A",
  authDomain: "ecosense-4d5c4.firebaseapp.com",
  projectId: "ecosense-4d5c4"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// ===== GROQ API KEY =====
var GROQ_KEY = "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";

// ===== EMAILJS CONFIG =====
var EMAILJS_PUBLIC_KEY  = 'bOrJ-hbWJJVE2q-Xy';
var EMAILJS_SERVICE_ID  = 'service_9qsw0c9';
var EMAILJS_TEMPLATE_ID = 'template_7gztwqr';
var EMAIL_TUJUAN        = 'ecosense.id28@gmail.com';

// Init EmailJS segera setelah script dimuat
function initEmailJS() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    console.log('✅ EmailJS siap');
  } else {
    setTimeout(initEmailJS, 300);
  }
}
setTimeout(initEmailJS, 100);

// ===== SYSTEM PROMPT AI =====
var AI_SYSTEM = 'Kamu adalah AI Konsultan Lingkungan untuk EcoSense Indonesia — platform komunitas pemantau lingkungan hidup nasional yang mencakup 38 provinsi. Jawab pertanyaan soal lingkungan hidup, karhutla, pencemaran sungai (Citarum, Siak, Musi), sampah plastik laut, deforestasi Kalimantan & Papua, cara melapor, dan isu lingkungan di seluruh Indonesia. Gunakan Bahasa Indonesia yang ramah, hangat, dan mudah dipahami semua kalangan dari anak-anak hingga lansia. Berikan jawaban yang praktis dan actionable. Maksimal 180 kata.';

// ===== DATA LOKASI =====
// ===== DATA LOKASI LENGKAP 38 PROVINSI =====
var LOKASI = {
  'Aceh': {
    lat: 4.695, lng: 96.749, kota: {
      'Kota Banda Aceh': ['Baiturrahman', 'Kuta Alam', 'Meuraxa', 'Syiah Kuala', 'Ulee Kareng', 'Kuta Raja', 'Lueng Bata', 'Jaya Baru', 'Banda Raya'],
      'Kota Sabang': ['Sukajaya', 'Sukakarya', 'Sukajadi'],
      'Kota Lhokseumawe': ['Banda Sakti', 'Muara Dua', 'Blang Mangat', 'Muara Satu'],
      'Kota Langsa': ['Langsa Barat', 'Langsa Kota', 'Langsa Timur', 'Langsa Lama', 'Langsa Baro'],
      'Kota Subulussalam': ['Simpang Kiri', 'Penanggalan', 'Sultan Daulat', 'Rundeng', 'Longkib'],
      'Kab. Aceh Besar': ['Baitussalam', 'Darul Imarah', 'Darul Kamal', 'Darussalam', 'Indrapuri', 'Ingin Jaya', 'Kota Jantho', 'Krueng Barona Jaya', 'Kuta Cot Glie', 'Kuta Malaka', 'Leupung', 'Lhoong', 'Mesjid Raya', 'Montasik', 'Peukan Bada', 'Pulo Aceh', 'Seulimeum', 'Simpang Tiga', 'Sukamakmur', 'Lembah Seulawah', 'Lhoknga', 'Darul Ihsan', 'Blang Bintang'],
      'Kab. Pidie': ['Batee', 'Delima', 'Geumpang', 'Glumpang Tiga', 'Glumpang Baro', 'Indrajaya', 'Kembang Tanjong', 'Keumala', 'Kota Sigli', 'Mane', 'Mila', 'Muara Tiga', 'Mutiara', 'Mutiara Timur', 'Padang Tiji', 'Peukan Baro', 'Pidie', 'Sakti', 'Simpang Tiga', 'Tangse', 'Tiro (Truseb)', 'Titeue', 'Grong-Grong'],
      'Kab. Pidie Jaya': ['Meureudu', 'Ulim', 'Jangka Buya', 'Bandar Dua', 'Meurah Dua', 'Bandar Baru', 'Panteraja', 'Trienggadeng'],
      'Kab. Bireuen': ['Baktiya', 'Gandapura', 'Jangka', 'Jeunieb', 'Peudada', 'Samalanga', 'Pandrah', 'Jeumpa', 'Kota Juang', 'Kuala', 'Peusangan', 'Peusangan Selatan', 'Peusangan Siblah Krueng', 'Makmur', 'Kutablang', 'Simpang Mamplam', 'Peulimbang'],
      'Kab. Aceh Utara': ['Baktiya', 'Baktiya Barat', 'Banda Baro', 'Cot Girek', 'Dewantara', 'Geuredong Pase', 'Kuta Makmur', 'Langkahan', 'Lapang', 'Lhoksukon', 'Matangkuli', 'Meurah Mulia', 'Muara Batu', 'Nibong', 'Nisam', 'Nisam Antara', 'Paya Bakong', 'Pirak Timur', 'Samudera', 'Sawang', 'Seunuddon', 'Simpang Keuramat', 'Syamtalira Aron', 'Syamtalira Bayu', 'Tanah Luas', 'Tanah Jambo Aye', 'Tanah Pasir'],
      'Kab. Aceh Timur': ['Banda Alam', 'Birem Bayeun', 'Darul Aman', 'Darul Ihsan', 'Idi Rayeuk', 'Idi Tunong', 'Idi Timur', 'Indra Makmu', 'Julok', 'Madat', 'Nurussalam', 'Pante Beudari', 'Peudawa', 'Peureulak', 'Peureulak Barat', 'Peureulak Timur', 'Ranto Peureulak', 'Serba Jadi', 'Simpang Jernih', 'Simpang Ulim', 'Sungai Raya', 'Darul Falah', 'Peunarun'],
      'Kab. Aceh Tamiang': ['Bandar Pusaka', 'Banda Mulia', 'Karang Baru', 'Kejuruan Muda', 'Kota Kuala Simpang', 'Manyak Payed', 'Rantau', 'Sekerak', 'Seruway', 'Tamiang Hulu', 'Tenggulun', 'Bendahara'],
      'Kab. Aceh Tengah': ['Atu Lintang', 'Bebesen', 'Bies', 'Bintang', 'Celala', 'Jagong Jeget', 'Kebayakan', 'Ketol', 'Kute Panang', 'Laut Tawar', 'Linge', 'Pegasing', 'Rusip Antara', 'Silih Nara'],
      'Kab. Bener Meriah': ['Bandar', 'Bukit', 'Permata', 'Pintu Rime Gayo', 'Syiah Utama', 'Timang Gajah', 'Wih Pesam', 'Mesidah', 'Gajah Putih', 'Bener Kelipah'],
      'Kab. Gayo Lues': ['Blangkejeren', 'Kutapanjang', 'Pining', 'Rikit Gaib', 'Terangun', 'Putri Betung', 'Blang Jerango', 'Blang Pegayon', 'Debun Gelang', 'Pantan Cuaca', 'Tripe Jaya'],
      'Kab. Aceh Tenggara': ['Babussalam', 'Badar', 'Bambel', 'Lawe Alas', 'Lawe Sigala-Gala', 'Semadam', 'Tanoh Alas', 'Lawe Bulan', 'Bukit Tusam', 'Darul Hasanah', 'Lawe Sumur', 'Ketambe', 'Deleng Pokhkisen', 'Babul Rahmah', 'Babul Makmur', 'Leuser'],
      'Kab. Aceh Jaya': ['Krueng Sabee', 'Panga', 'Teunom', 'Pasie Raya', 'Sampoiniet', 'Setia Bakti', 'Darul Hikmah', 'Jaya', 'Indra Jaya'],
      'Kab. Aceh Barat': ['Arongan Lambalek', 'Bubon', 'Johan Pahlawan', 'Kaway XVI', 'Meureubo', 'Samatiga', 'Sungai Mas', 'Woyla', 'Woyla Barat', 'Woyla Timur', 'Pante Ceureumen', 'Panton Reu'],
      'Kab. Nagan Raya': ['Beutong', 'Beutong Ateuh Banggalang', 'Darul Makmur', 'Kuala', 'Kuala Pesisir', 'Seunagan', 'Seunagan Timur', 'Suka Makmue', 'Tadu Raya', 'Tripa Makmur'],
      'Kab. Aceh Barat Daya': ['Babah Rot', 'Blangpidie', 'Jeumpa', 'Kuala Batee', 'Lembah Sabil', 'Manggeng', 'Setia', 'Susoh', 'Tangan-Tangan'],
      'Kab. Aceh Selatan': ['Bakongan', 'Bakongan Timur', 'Kluet Selatan', 'Kluet Tengah', 'Kluet Timur', 'Kluet Utara', 'Labuhanhaji', 'Labuhanhaji Barat', 'Labuhanhaji Timur', 'Meukek', 'Pasie Raja', 'Sama Dua', 'Sawang', 'Tapaktuan', 'Trumon', 'Trumon Tengah', 'Trumon Timur', 'Kota Bahagia'],
      'Kab. Aceh Singkil': ['Danau Paris', 'Gunung Meriah', 'Kota Baharu', 'Kuala Baru', 'Pulau Banyak', 'Pulau Banyak Barat', 'Singkil', 'Singkil Utara', 'Singkohor', 'Suro Makmur', 'Simpang Kanan'],
      'Kab. Simeulue': ['Alafan', 'Salang', 'Simeulue Barat', 'Simeulue Cut', 'Simeulue Tengah', 'Simeulue Timur', 'Teluk Dalam', 'Teupah Barat', 'Teupah Selatan', 'Teupah Tengah'],
    }
  },
  'Bali': {
    lat: -8.340, lng: 115.091, kota: {
      'Kota Denpasar': ['Denpasar Barat', 'Denpasar Selatan', 'Denpasar Timur', 'Denpasar Utara'],
      'Kab. Badung': ['Abiansemal', 'Kuta', 'Kuta Selatan', 'Kuta Utara', 'Mengwi', 'Petang'],
      'Kab. Bangli': ['Bangli', 'Kintamani', 'Susut', 'Tembuku'],
      'Kab. Buleleng': ['Banjar', 'Buleleng', 'Busung Biu', 'Gerokgak', 'Kubutambahan', 'Sawan', 'Seririt', 'Sukasada', 'Tejakula'],
      'Kab. Gianyar': ['Blahbatuh', 'Gianyar', 'Payangan', 'Sukawati', 'Tampaksiring', 'Tegallalang', 'Ubud'],
      'Kab. Jembrana': ['Jembrana', 'Melaya', 'Mendoyo', 'Negara', 'Pekutatan'],
      'Kab. Karangasem': ['Abang', 'Bebandem', 'Karangasem', 'Kubu', 'Manggis', 'Rendang', 'Sidemen', 'Selat'],
      'Kab. Klungkung': ['Banjarangkan', 'Dawan', 'Klungkung', 'Nusa Penida'],
      'Kab. Tabanan': ['Baturiti', 'Kediri', 'Kerambitan', 'Marga', 'Penebel', 'Pupuan', 'Selemadeg', 'Selemadeg Barat', 'Selemadeg Timur', 'Tabanan'],
    }
  },
  'Bangka Belitung': {
    lat: -2.741, lng: 106.440, kota: {
      'Kota Pangkalpinang': ['Bukit Intan', 'Gabek', 'Gerunggang', 'Girimaya', 'Pangkal Balam', 'Rangkui', 'Taman Sari'],
      'Kab. Bangka': ['Bakam', 'Belinyu', 'Mendo Barat', 'Merawang', 'Puding Besar', 'Riau Silip', 'Sungai Liat', 'Pemali'],
      'Kab. Bangka Barat': ['Jebus', 'Kelapa', 'Mentok', 'Parittiga', 'Simpang Teritip', 'Tempilang'],
      'Kab. Bangka Selatan': ['Air Gegas', 'Kepulauan Pongok', 'Lepar Pongok', 'Payung', 'Pulau Besar', 'Simpang Rimba', 'Toboali', 'Tukak Sadai'],
      'Kab. Bangka Tengah': ['Koba', 'Lubuk Besar', 'Namang', 'Pangkalan Baru', 'Simpang Katis', 'Sungaiselan'],
      'Kab. Belitung': ['Badau', 'Membalong', 'Selat Nasik', 'Sijuk', 'Tanjung Pandan'],
      'Kab. Belitung Timur': ['Damar', 'Gantung', 'Kelapa Kampit', 'Manggar', 'Simpang Pesak', 'Simpang Renggiang', 'Dendang'],
    }
  },
  'Banten': {
    lat: -6.406, lng: 106.064, kota: {
      'Kota Serang': ['Cipocok Jaya', 'Curug', 'Kasemen', 'Serang', 'Taktakan', 'Walantaka'],
      'Kota Tangerang': ['Batuceper', 'Benda', 'Cibodas', 'Ciledug', 'Cipondoh', 'Jatiuwung', 'Karangtengah', 'Karawaci', 'Larangan', 'Neglasari', 'Periuk', 'Pinang', 'Tangerang'],
      'Kota Cilegon': ['Cibeber', 'Cilegon', 'Citangkil', 'Ciwandan', 'Grogol', 'Jombang', 'Pulomerak', 'Purwakarta'],
      'Kota Tangerang Selatan': ['Ciputat', 'Ciputat Timur', 'Pamulang', 'Pondok Aren', 'Serpong', 'Serpong Utara', 'Setu'],
      'Kab. Serang': ['Anyar', 'Baros', 'Binuang', 'Bojonegara', 'Carenang', 'Cikande', 'Cikeusal', 'Cinangka', 'Ciomas', 'Ciruas', 'Gunungsari', 'Jawilan', 'Kibin', 'Kopo', 'Kragilan', 'Kramatwatu', 'Lebak Wangi', 'Mancak', 'Pabuaran', 'Padarincang', 'Pamarayan', 'Petir', 'Pontang', 'Pulo Ampel', 'Tanara', 'Tirtayasa', 'Tunjung Teja', 'Waringinkurung', 'Bandung'],
      'Kab. Tangerang': ['Balaraja', 'Cikupa', 'Cisauk', 'Cisoka', 'Curug', 'Gunungkaler', 'Jambe', 'Jayanti', 'Kelapa Dua', 'Kemiri', 'Kosambi', 'Kresek', 'Kronjo', 'Legok', 'Mauk', 'Mekarbaru', 'Pagedangan', 'Pakuhaji', 'Panongan', 'Pasar Kemis', 'Rajeg', 'Sepatan', 'Sepatan Timur', 'Sindang Jaya', 'Solear', 'Sukadiri', 'Sukamulya', 'Teluknaga', 'Tigaraksa'],
      'Kab. Pandeglang': ['Angsana', 'Banjar', 'Bojong', 'Cadasari', 'Carita', 'Cibaliung', 'Cibitung', 'Cigeulis', 'Cikedal', 'Cikeusik', 'Cimanuk', 'Cipeucang', 'Cisata', 'Jiput', 'Kaduhejo', 'Karang Tanjung', 'Koroncong', 'Labuan', 'Majasari', 'Mandalawangi', 'Mekarjaya', 'Menes', 'Munjul', 'Pagelaran', 'Pandeglang', 'Panimbang', 'Patia', 'Pulosari', 'Saketi', 'Sindangresmi', 'Sobang', 'Sukaresmi', 'Sumur'],
      'Kab. Lebak': ['Banjarsari', 'Bayah', 'Bojongmanik', 'Cibadak', 'Cibeber', 'Cigemblong', 'Cihara', 'Cijaku', 'Cikulur', 'Cileles', 'Cilograng', 'Cimarga', 'Cipanas', 'Cirinten', 'Curugbitung', 'Gunungkencana', 'Kalanganyar', 'Lebak Gedong', 'Leuwidamar', 'Maja', 'Malingping', 'Muncang', 'Panggarangan', 'Rangkasbitung', 'Sajira', 'Sobang', 'Wanasalam', 'Warunggunung'],
    }
  },
  'Bengkulu': {
    lat: -3.793, lng: 102.261, kota: {
      'Kota Bengkulu': ['Gading Cempaka', 'Kampung Melayu', 'Muara Bangka Hulu', 'Ratu Agung', 'Ratu Samban', 'Selebar', 'Singaran Pati', 'Sungai Serut', 'Teluk Segara'],
      'Kab. Bengkulu Selatan': ['Air Nipis', 'Bunga Mas', 'Kedurang', 'Kedurang Ilir', 'Kota Manna', 'Manna', 'Pino', 'Pino Raya', 'Ulu Manna', 'Pasar Manna'],
      'Kab. Bengkulu Tengah': ['Bang Haji', 'Karang Tinggi', 'Pematang Tiga', 'Pondok Kelapa', 'Pondok Kubang', 'Pagar Jati', 'Merigi Kelindang', 'Merigi Sakti', 'Taba Penanjung', 'Talang Empat'],
      'Kab. Bengkulu Utara': ['Air Besi', 'Air Napal', 'Air Padang', 'Arga Makmur', 'Batik Nau', 'Giri Mulya', 'Hulu Palik', 'Kerkap', 'Ketahun', 'Marga Sakti Sebelat', 'Napal Putih', 'Padang Jaya', 'Pinang Raya', 'Putri Hijau', 'Tanjung Agung Palik', 'Ulok Kupai', 'Enggano'],
      'Kab. Kaur': ['Kaur Selatan', 'Kaur Tengah', 'Kaur Utara', 'Kelam Tengah', 'Luas', 'Lungkang Kule', 'Maje', 'Muara Sahung', 'Nasal', 'Padang Guci Hilir', 'Padang Guci Hulu', 'Pagulir', 'Semidang Gumay', 'Tanjung Kemuning', 'Tetap'],
      'Kab. Kepahiang': ['Bermani Ilir', 'Kabawetan', 'Kepahiang', 'Merigi', 'Muara Kemumu', 'Seberang Musi', 'Tebat Karai', 'Ujan Mas'],
      'Kab. Lebong': ['Bingin Kuning', 'Lebong Atas', 'Lebong Bawah', 'Lebong Sakti', 'Lebong Selatan', 'Lebong Tengah', 'Lebong Utara', 'Pinang Belapis', 'Rimbo Pengadang', 'Topos', 'Urau'],
      'Kab. Mukomuko': ['Air Dikit', 'Air Majunto', 'Air Rami', 'Ipuh', 'Kota Mukomuko', 'Lubuk Pinang', 'Malin Deman', 'Penarik', 'Pondok Suguh', 'Selagan Raya', 'Teramang Jaya', 'Teras Terunjam', 'V Koto', 'XIV Koto', 'Sungai Seluang'],
      'Kab. Rejang Lebong': ['Bermani Ulu', 'Bermani Ulu Raya', 'Binduriang', 'Curup', 'Curup Selatan', 'Curup Tengah', 'Curup Timur', 'Curup Utara', 'Padang Ulak Tanding', 'Selupu Rejang', 'Sindang Beliti Ilir', 'Sindang Beliti Ulu', 'Sindang Dataran', 'Sindang Kelingi', 'Kota Padang'],
      'Kab. Seluma': ['Air Periukan', 'Lubuk Sandi', 'Seluma', 'Seluma Barat', 'Seluma Selatan', 'Seluma Timur', 'Seluma Utara', 'Semidang Alas', 'Semidang Alas Maras', 'Talo', 'Talo Kecil', 'Ulu Talo', 'Ilir Talo', 'Sukaraja'],
    }
  },
  'DI Yogyakarta': {
    lat: -7.797, lng: 110.370, kota: {
      'Kota Yogyakarta': ['Danurejan', 'Gedongtengen', 'Gondokusuman', 'Gondomanan', 'Jetis', 'Kotagede', 'Mantrijeron', 'Mergangsan', 'Ngampilan', 'Pakualaman', 'Tegalrejo', 'Umbulharjo', 'Wirobrajan'],
      'Kab. Sleman': ['Berbah', 'Cangkringan', 'Depok', 'Gamping', 'Godean', 'Kalasan', 'Minggir', 'Mlati', 'Moyudan', 'Ngaglik', 'Ngemplak', 'Pakem', 'Prambanan', 'Seyegan', 'Sleman', 'Tempel', 'Turi'],
      'Kab. Bantul': ['Bambanglipuro', 'Banguntapan', 'Bantul', 'Dlingo', 'Imogiri', 'Jetis', 'Kasihan', 'Kretek', 'Pajangan', 'Pandak', 'Piyungan', 'Pleret', 'Pundong', 'Sanden', 'Sedayu', 'Sewon', 'Srandakan'],
      'Kab. Gunung Kidul': ['Bakung', 'Gedangsari', 'Girisubo', 'Karangmojo', 'Ngawen', 'Nglipar', 'Paliyan', 'Panggang', 'Patuk', 'Playen', 'Ponjong', 'Purwosari', 'Rongkop', 'Saptosari', 'Semanu', 'Semin', 'Tanjungsari', 'Tepus', 'Wonosari'],
      'Kab. Kulon Progo': ['Galur', 'Girimulyo', 'Kalibawang', 'Kokap', 'Lendah', 'Nanggulan', 'Panjatan', 'Pengasih', 'Samigaluh', 'Sentolo', 'Temon', 'Wates'],
    }
  },
  'DKI Jakarta': {
    lat: -6.211, lng: 106.845, kota: {
      'Jakarta Pusat': ['Cempaka Putih', 'Gambir', 'Johar Baru', 'Kemayoran', 'Menteng', 'Sawah Besar', 'Senen', 'Tanah Abang'],
      'Jakarta Utara': ['Cilincing', 'Kelapa Gading', 'Koja', 'Pademangan', 'Penjaringan', 'Tanjung Priok'],
      'Jakarta Barat': ['Cengkareng', 'Grogol Petamburan', 'Taman Sari', 'Tambora', 'Kebon Jeruk', 'Kalideres', 'Palmerah', 'Kembangan'],
      'Jakarta Selatan': ['Cilandak', 'Jagakarsa', 'Kebayoran Baru', 'Kebayoran Lama', 'Mampang Prapatan', 'Pancoran', 'Pasar Minggu', 'Pesanggrahan', 'Setiabudi', 'Tebet'],
      'Jakarta Timur': ['Cakung', 'Cipayung', 'Ciracas', 'Duren Sawit', 'Jatinegara', 'Kramat Jati', 'Makasar', 'Matraman', 'Pasar Rebo', 'Pulo Gadung'],
      'Kep. Seribu': ['Kepulauan Seribu Utara', 'Kepulauan Seribu Selatan'],
    }
  },
  'Gorontalo': {
    lat: 0.690, lng: 122.446, kota: {
      'Kota Gorontalo': ['Kota Barat', 'Kota Selatan', 'Kota Utara', 'Kota Timur', 'Kota Tengah', 'Dungingi', 'Batudaa Kota', 'Hulonthalangi', 'Sipatana'],
      'Kab. Gorontalo': ['Asparaga', 'Batudaa', 'Batudaa Pantai', 'Bilato', 'Biluhu', 'Boliyohuto', 'Bongomeme', 'Limboto', 'Limboto Barat', 'Mooat', 'Mootilango', 'Pulubala', 'Tabongo', 'Telaga', 'Telaga Biru', 'Telaga Jaya', 'Tilango', 'Tolangohula', 'Tibawa'],
      'Kab. Gorontalo Utara': ['Anggrek', 'Atinggola', 'Biau', 'Gentuma Raya', 'Monano', 'Ponelo Kepulauan', 'Sumalata', 'Sumalata Timur', 'Tolinggula', 'Tomilito', 'Kwandang'],
      'Kab. Boalemo': ['Botumoito', 'Dulupi', 'Mananggu', 'Paguyaman', 'Paguyaman Pantai', 'Tilamuta', 'Wonosari'],
      'Kab. Bone Bolango': ['Bone', 'Bone Raya', 'Bonepantai', 'Botupingge', 'Bulango Selatan', 'Bulango Timur', 'Bulango Ulu', 'Bulango Utara', 'Bulawa', 'Kabila', 'Kabila Bone', 'Suwawa', 'Suwawa Selatan', 'Suwawa Tengah', 'Suwawa Timur', 'Tilongkabila', 'Pinogu'],
      'Kab. Pohuwato': ['Buntulia', 'Dengilo', 'Duhiadaa', 'Lemito', 'Marisa', 'Paguat', 'Patilanggio', 'Popayato', 'Popayato Barat', 'Popayato Timur', 'Randangan', 'Taluditi', 'Wanggarasi'],
    }
  },
  'Jambi': {
    lat: -1.612, lng: 103.616, kota: {
      'Kota Jambi': ['Alam Barajo', 'Danau Sipin', 'Danau Teluk', 'Jambi Selatan', 'Jambi Timur', 'Jelutung', 'Kota Baru', 'Paal Merah', 'Pasar Jambi', 'Pelayangan', 'Telanaipura'],
      'Kota Sungai Penuh': ['Hamparan Rawang', 'Koto Baru', 'Kumun Debai', 'Pesisir Bukit', 'Pondok Tinggi', 'Sungai Bungkal', 'Sungai Penuh', 'Tanah Kampung'],
      'Kab. Batanghari': ['Bajubang', 'Batin XXIV', 'Maro Sebo Ilir', 'Maro Sebo Ulu', 'Mersam', 'Muara Bulian', 'Muara Tembesi', 'Pemayung'],
      'Kab. Bungo': ['Bathin II Babeko', 'Bathin III', 'Bathin III Ulu', 'Bungo Dani', 'Jujuhan', 'Jujuhan Ilir', 'Limbur Lubuk Mengkuang', 'Muko-Muko Bathin VII', 'Pasar Muara Bungo', 'Pelepat', 'Pelepat Ilir', 'Rantau Pandan', 'Rimbo Tengah', 'Tanah Sepenggal', 'Tanah Sepenggal Lintas', 'Tanah Tumbuh'],
      'Kab. Kerinci': ['Air Hangat', 'Air Hangat Barat', 'Air Hangat Timur', 'Batang Merangin', 'Bukit Kerman', 'Danau Kerinci', 'Danau Kerinci Barat', 'Gunung Kerinci', 'Gunung Raya', 'Gunung Tujuh', 'Kayu Aro', 'Kayu Aro Barat', 'Keliling Danau', 'Sitinjau Laut', 'Siulak', 'Siulak Mukai', 'Tanah Cogok'],
      'Kab. Merangin': ['Bangko', 'Bangko Barat', 'Batang Masumai', 'Jangkat', 'Jangkat Timur', 'Lembah Masurai', 'Margo Tabir', 'Muara Siau', 'Nalo Tantan', 'Pamenang', 'Pamenang Barat', 'Pamenang Selatan', 'Pangkalan Jambu', 'Renah Pembarap', 'Renah Pamenang', 'Tabir', 'Tabir Barat', 'Tabir Ilir', 'Tabir Lintas', 'Tabir Selatan', 'Tabir Timur', 'Tabir Ulu', 'Tiang Pumpung'],
      'Kab. Muaro Jambi': ['Bahar Selatan', 'Bahar Utara', 'Jambi Luar Kota', 'Kumpeh', 'Kumpeh Ulu', 'Maro Sebo', 'Mestong', 'Sekernan', 'Sungai Bahar', 'Sungai Gelam', 'Taman Rajo'],
      'Kab. Sarolangun': ['Air Hitam', 'Batang Asai', 'Cermin Nan Gedang', 'Limun', 'Mandiangin', 'Pauh', 'Pelawan', 'Sarolangun', 'Singkut'],
      'Kab. Tanjung Jabung Barat': ['Batang Asam', 'Bram Itam', 'Betara', 'Kuala Betara', 'Merlung', 'Muara Papalik', 'Pengabuan', 'Renah Mendaluh', 'Seberang Kota', 'Senyerang', 'Tebing Tinggi', 'Tungkal Ilir', 'Tungkal Ulu'],
      'Kab. Tanjung Jabung Timur': ['Berbak', 'Dendang', 'Geragai', 'Kuala Jambi', 'Mendahara', 'Mendahara Ulu', 'Muara Sabak Barat', 'Muara Sabak Timur', 'Nipah Panjang', 'Rantau Rasau', 'Sadu'],
      'Kab. Tebo': ['Muara Tabir', 'Rimbo Bujang', 'Rimbo Ilir', 'Rimbo Ulu', 'Serai Serumpun', 'Sumay', 'Tebo Ilir', 'Tebo Tengah', 'Tebo Ulu', 'Tengah Ilir', 'VII Koto', 'VII Koto Ilir'],
    }
  },
  'Jawa Barat': {
    lat: -6.889, lng: 107.640, kota: {
      'Kota Bandung': ['Andir', 'Antapani', 'Arcamanik', 'Astanaanyar', 'Babakanciparay', 'Bandung Kidul', 'Bandung Kulon', 'Bandung Wetan', 'Batununggal', 'Bojongloa Kaler', 'Bojongloa Kidul', 'Buahbatu', 'Cibeunying Kaler', 'Cibeunying Kidul', 'Cibiru', 'Cicendo', 'Cidadap', 'Cinambo', 'Coblong', 'Gedebage', 'Kiaracondong', 'Lengkong', 'Mandalajati', 'Panyileukan', 'Rancasari', 'Regol', 'Sukajadi', 'Sukasari', 'Sumurbandung', 'Ujungberung'],
      'Kota Bogor': ['Bogor Barat', 'Bogor Selatan', 'Bogor Tengah', 'Bogor Timur', 'Bogor Utara', 'Tanah Sareal'],
      'Kota Depok': ['Beji', 'Bojongsari', 'Cilodong', 'Cimanggis', 'Cinere', 'Cipayung', 'Limo', 'Pancoran Mas', 'Sawangan', 'Sukmajaya', 'Tapos'],
      'Kota Bekasi': ['Bantar Gebang', 'Bekasi Barat', 'Bekasi Selatan', 'Bekasi Timur', 'Bekasi Utara', 'Jatiasih', 'Jatisampurna', 'Medan Satria', 'Mustika Jaya', 'Pondok Gede', 'Pondok Melati', 'Rawalumbu'],
      'Kota Cirebon': ['Harjamukti', 'Kejaksan', 'Kesambi', 'Lemahwungkuk', 'Pekalipan'],
      'Kota Sukabumi': ['Baros', 'Cibeureum', 'Cikole', 'Citamiang', 'Gunungpuyuh', 'Lembursitu', 'Warudoyong'],
      'Kota Tasikmalaya': ['Bungursari', 'Cibeureum', 'Cihideung', 'Cipedes', 'Indihiang', 'Jamanis', 'Kawalu', 'Mangkubumi', 'Purbaratu', 'Tamansari', 'Tawang'],
      'Kota Cimahi': ['Cimahi Selatan', 'Cimahi Tengah', 'Cimahi Utara'],
      'Kota Banjar': ['Banjar', 'Langensari', 'Pataruman', 'Purwaharja'],
      'Kab. Bogor': ['Babakan Madang', 'Bojonggede', 'Caringin', 'Cariu', 'Ciampea', 'Ciawi', 'Cibinong', 'Cibungbulang', 'Cigombong', 'Cigudeg', 'Cijeruk', 'Cileungsi', 'Ciomas', 'Cisarua', 'Ciseeng', 'Citeureup', 'Dramaga', 'Gunung Putri', 'Gunung Sindur', 'Jasinga', 'Jonggol', 'Kemang', 'Klapanunggal', 'Leuwiliang', 'Leuwisadeng', 'Megamendung', 'Nanggung', 'Pamijahan', 'Parung', 'Parung Panjang', 'Ranca Bungur', 'Rumpin', 'Sukajaya', 'Sukamakmur', 'Sukaraja', 'Tajur Halang', 'Tamansari', 'Tanjungsari', 'Tenjo', 'Tenjolaya'],
      'Kab. Bandung': ['Arjasari', 'Baleendah', 'Banjaran', 'Bojongsoang', 'Cangkuang', 'Cicalengka', 'Cikancung', 'Cilengkrang', 'Cileunyi', 'Cimaung', 'Cimenyan', 'Ciparay', 'Ciwidey', 'Dayeuhkolot', 'Ibun', 'Katapang', 'Kertasari', 'Kutawaringin', 'Majalaya', 'Margaasih', 'Margahayu', 'Nagreg', 'Pacet', 'Pameungpeuk', 'Pangalengan', 'Paseh', 'Pasirjambu', 'Rancabali', 'Solokanjeruk', 'Soreang'],
      'Kab. Bandung Barat': ['Batujajar', 'Cikalongwetan', 'Cihampelas', 'Cililin', 'Cipatat', 'Cipeundeuy', 'Cipongkor', 'Cisarua', 'Gununghalu', 'Lembang', 'Ngamprah', 'Padalarang', 'Parongpong', 'Rongga', 'Saguling', 'Sindangkerta'],
      'Kab. Bekasi': ['Babelan', 'Bojongmangu', 'Cabangbungin', 'Cibarusah', 'Cibitung', 'Cikarang Barat', 'Cikarang Pusat', 'Cikarang Selatan', 'Cikarang Timur', 'Cikarang Utara', 'Karangbahagia', 'Kedungwaringin', 'Muara Gembong', 'Pebayuran', 'Serang Baru', 'Setu', 'Sukakarya', 'Sukawangi', 'Tambelang', 'Tambun Selatan', 'Tambun Utara', 'Tarumajaya'],
      'Kab. Karawang': ['Banyusari', 'Batujaya', 'Ciampel', 'Cibuaya', 'Cikampek', 'Cilamaya Kulon', 'Cilamaya Wetan', 'Cilebar', 'Jatisari', 'Jayakerta', 'Karawang Barat', 'Karawang Timur', 'Klari', 'Kotabaru', 'Kutawaluya', 'Lemahabang', 'Majalaya', 'Pakisjaya', 'Pangkalan', 'Pedes', 'Purwasari', 'Rawamerta', 'Rengasdengklok', 'Tegalwaru', 'Telagasari', 'Telukjambe Barat', 'Telukjambe Timur', 'Tempuran', 'Tirta Jaya', 'Tirtamulya'],
      'Kab. Sukabumi': ['Bantargadung', 'Bojonggenteng', 'Caringin', 'Ciambar', 'Cibadak', 'Cibitung', 'Cicantayan', 'Cicurug', 'Cidadap', 'Cidahu', 'Cidolog', 'Ciemas', 'Cikakak', 'Cikembar', 'Cikidang', 'Cimanggu', 'Ciracap', 'Cireunghas', 'Cisaat', 'Cisolok', 'Curugkembar', 'Gegerbitung', 'Gunung Guruh', 'Jampang Kulon', 'Jampang Tengah', 'Kabandungan', 'Kadudampit', 'Kalapanunggal', 'Kalibunder', 'Kebonpedes', 'Lengkong', 'Nagrak', 'Nyalindung', 'Pabuaran', 'Parakansalak', 'Parung Kuda', 'Pelabuhanratu', 'Purabaya', 'Sagaranten', 'Simpenan', 'Sukabumi', 'Sukalarang', 'Sukaraja', 'Surade', 'Tegal Buleud', 'Waluran', 'Warung Kiara'],
      'Kab. Cianjur': ['Agrabinta', 'Bojongpicung', 'Campaka', 'Campaka Mulya', 'Cianjur', 'Cibeber', 'Cibinong', 'Cidaun', 'Cijati', 'Cikadu', 'Cikalongkulon', 'Cilaku', 'Cipanas', 'Ciranjang', 'Cugenang', 'Gekbrong', 'Kadupandak', 'Karangtengah', 'Leles', 'Mande', 'Naringgul', 'Pacet', 'Pagelaran', 'Pasirkuda', 'Sindangbarang', 'Sukaluyu', 'Sukanagara', 'Sukaresmi', 'Takokak', 'Tanggeung', 'Warungkondang'],
      'Kab. Garut': ['Banjarwangi', 'Banyuresmi', 'Bayongbong', 'Balubur Limbangan', 'Bungbulang', 'Cibalong', 'Cibatu', 'Cibiuk', 'Cigedug', 'Cikajang', 'Cikelet', 'Cilawu', 'Cisewu', 'Cisompet', 'Cisurupan', 'Garut Kota', 'Kadungora', 'Karangpawitan', 'Karangtengah', 'Kersamanah', 'Leles', 'Leuwigoong', 'Malangbong', 'Mekarmukti', 'Pakenjeng', 'Pameungpeuk', 'Pamulihan', 'Pangatikan', 'Pasirwangi', 'Peundeuy', 'Samarang', 'Selaawi', 'Singajaya', 'Sucinaraja', 'Sukaresmi', 'Sukawening', 'Talegong', 'Tarogong Kaler', 'Tarogong Kidul', 'Wanaraja'],
      'Kab. Tasikmalaya': ['Bantarkalong', 'Bojongasih', 'Bojonggambir', 'Ciawi', 'Cibalong', 'Cigalontang', 'Cikalong', 'Cikatomas', 'Cineam', 'Cipatujah', 'Cisayong', 'Culamega', 'Gunung Tanjung', 'Jamanis', 'Jatiwaras', 'Kadipaten', 'Karang Jaya', 'Karangnunggal', 'Leuwisari', 'Mangunreja', 'Manonjaya', 'Padakembang', 'Pagerageung', 'Pancatengah', 'Parungponteng', 'Puspahiang', 'Rajapolah', 'Salawu', 'Salopa', 'Sariwangi', 'Singaparna', 'Sodonghilir', 'Sukaraja', 'Sukarame', 'Sukaratu', 'Sukaresik', 'Tanjungjaya', 'Taraju'],
      'Kab. Ciamis': ['Banjarsari', 'Baregbeg', 'Ciamis', 'Cidolog', 'Cihaurbeuti', 'Cijeungjing', 'Cikoneng', 'Cimaragas', 'Cipaku', 'Cisaga', 'Jatinagara', 'Kawali', 'Lakbok', 'Lumbung', 'Pamarican', 'Panumbangan', 'Panjalu', 'Panawangan', 'Purwadadi', 'Rajadesa', 'Rancah', 'Sadananya', 'Sindangkasih', 'Sukadana', 'Tambaksari'],
      'Kab. Kuningan': ['Ciawigebang', 'Cibeureum', 'Cibingbin', 'Cidahu', 'Cigandamekar', 'Cigugur', 'Cilebak', 'Cilimus', 'Cimahi', 'Ciniru', 'Cipicung', 'Ciwaru', 'Darma', 'Garawangi', 'Hantara', 'Jalaksana', 'Japara', 'Kadugede', 'Kalimanggis', 'Karangkancana', 'Kramatmulya', 'Kuningan', 'Lebakwangi', 'Luragung', 'Maleber', 'Mandirancan', 'Nusaherang', 'Pancalang', 'Pasawahan', 'Selajambe', 'Subang', 'Sindangagung'],
      'Kab. Cirebon': ['Arjawinangun', 'Astanajapura', 'Babakan', 'Beber', 'Ciledug', 'Ciwaringin', 'Depok', 'Dukupuntang', 'Gebang', 'Gegesik', 'Gempol', 'Greged', 'Gunung Jati', 'Jamblang', 'Karangwareng', 'Karangsembung', 'Lemahabang', 'Losari', 'Mundu', 'Pabedilan', 'Pabuaran', 'Palimanan', 'Pangenan', 'Panguragan', 'Pasaleman', 'Plered', 'Plumbon', 'Sedong', 'Sumber', 'Suranenggala', 'Susukan', 'Susukan Lebak', 'Talun', 'Tengahtani', 'Waled', 'Weru'],
      'Kab. Majalengka': ['Argapura', 'Banjaran', 'Bantarujeg', 'Cigasong', 'Cikijing', 'Cingambul', 'Dawuan', 'Jatitujuh', 'Jatiwangi', 'Kasokandel', 'Kertajati', 'Lemahsugih', 'Ligung', 'Maja', 'Majalengka', 'Malausma', 'Panyingkiran', 'Palasah', 'Rajagaluh', 'Sindang', 'Sindangwangi', 'Sukahaji', 'Sumberjaya', 'Talaga'],
      'Kab. Sumedang': ['Buahdua', 'Cibugel', 'Cimalaka', 'Cimanggung', 'Cisarua', 'Cisitu', 'Conggeang', 'Darmaraja', 'Ganeas', 'Jatigede', 'Jatinangor', 'Jatinunggal', 'Pamulihan', 'Rancakalong', 'Situraja', 'Sukasari', 'Sumedang Selatan', 'Sumedang Utara', 'Surian', 'Tanjungkerta', 'Tanjungmedar', 'Tanjungsari', 'Tomo', 'Ujung Jaya', 'Wado'],
      'Kab. Indramayu': ['Anjatan', 'Arahan', 'Balongan', 'Bangodua', 'Bongas', 'Cantigi', 'Cikedung', 'Gabuswetan', 'Gantar', 'Indramayu', 'Jatibarang', 'Juntinyuat', 'Kandanghaur', 'Karangampel', 'Kedokan Bunder', 'Kertasemaya', 'Krangkeng', 'Kroya', 'Lelea', 'Lohbener', 'Losarang', 'Pasekan', 'Patrol', 'Sindang', 'Sliyeg', 'Sukagumiwang', 'Sukra', 'Tukdana', 'Terisi', 'Widasari'],
      'Kab. Subang': ['Binong', 'Blanakan', 'Ciasem', 'Ciater', 'Cibogo', 'Cijambe', 'Cikaum', 'Cipeundeuy', 'Cipunagara', 'Cisalak', 'Compreng', 'Dawuan', 'Jalan Cagak', 'Kalijati', 'Kasomalang', 'Legonkulon', 'Pabuaran', 'Pagaden', 'Pagaden Barat', 'Pamanukan', 'Patokbeusi', 'Purwadadi', 'Pusakajaya', 'Pusakanagara', 'Sagalaherang', 'Serangpanjang', 'Subang', 'Sukasari', 'Tambakdahan', 'Tanjungsiang'],
      'Kab. Purwakarta': ['Babakancikao', 'Bojong', 'Bungursari', 'Campaka', 'Cibatu', 'Darangdan', 'Jatiluhur', 'Kiarapedes', 'Maniis', 'Pasawahan', 'Plered', 'Pondoksalam', 'Purwakarta', 'Sukasari', 'Sukatani', 'Tegalwaru', 'Wanayasa'],
      'Kab. Pangandaran': ['Cigugur', 'Cijulang', 'Cimerak', 'Kalipucung', 'Langkaplancar', 'Mangunjaya', 'Padaherang', 'Pangandaran', 'Parigi', 'Sidamulih'],
    }
  },
  'Jawa Tengah': {
    lat: -7.150, lng: 110.140, kota: {
      'Kota Semarang': ['Banyumanik', 'Candisari', 'Gajahmungkur', 'Gayamsari', 'Genuk', 'Gunungpati', 'Mijen', 'Ngaliyan', 'Pedurungan', 'Semarang Barat', 'Semarang Selatan', 'Semarang Tengah', 'Semarang Timur', 'Semarang Utara', 'Tembalang', 'Tugu'],
      'Kota Solo': ['Banjarsari', 'Jebres', 'Laweyan', 'Pasar Kliwon', 'Serengan'],
      'Kota Magelang': ['Magelang Selatan', 'Magelang Tengah', 'Magelang Utara'],
      'Kota Pekalongan': ['Pekalongan Barat', 'Pekalongan Selatan', 'Pekalongan Timur', 'Pekalongan Utara'],
      'Kota Salatiga': ['Argomulyo', 'Sidomukti', 'Sidorejo', 'Tingkir'],
      'Kota Tegal': ['Margadana', 'Tegal Barat', 'Tegal Selatan', 'Tegal Timur'],
      'Kab. Semarang': ['Ambarawa', 'Bancak', 'Bandungan', 'Banyubiru', 'Bawen', 'Bergas', 'Bringin', 'Getasan', 'Jambu', 'Kaliwungu', 'Pabelan', 'Pringapus', 'Suruh', 'Susukan', 'Sumowono', 'Tengaran', 'Tuntang', 'Ungaran Barat', 'Ungaran Timur'],
      'Kab. Demak': ['Bonang', 'Demak', 'Dempet', 'Gajah', 'Guntur', 'Karanganyar', 'Karangawen', 'Karangtengah', 'Kebonagung', 'Mijen', 'Mranggen', 'Sayung', 'Wedung', 'Wonosalam'],
      'Kab. Kudus': ['Bae', 'Dawe', 'Jati', 'Jekulo', 'Kaliwungu', 'Kudus', 'Mejobo', 'Undaan', 'Gebog'],
      'Kab. Jepara': ['Bangsri', 'Batealit', 'Donorojo', 'Jepara', 'Kalinyamatan', 'Karimunjawa', 'Kedung', 'Keling', 'Kembang', 'Mayong', 'Mlonggo', 'Nalumsari', 'Pakis Aji', 'Pecangaan', 'Tahunan', 'Welahan'],
      'Kab. Pati': ['Batangan', 'Cluwak', 'Dukuhseti', 'Gabus', 'Gembong', 'Gunungwungkal', 'Jaken', 'Jakenan', 'Juwana', 'Kayen', 'Margorejo', 'Margoyoso', 'Pati', 'Pucakwangi', 'Sukolilo', 'Tambakromo', 'Tayu', 'Tlogowungu', 'Trangkil', 'Wedarijaksa', 'Winong'],
      'Kab. Rembang': ['Bulu', 'Gunem', 'Kaliori', 'Kragan', 'Lasem', 'Pamotan', 'Pancur', 'Rembang', 'Sale', 'Sarang', 'Sedan', 'Sluke', 'Sulang', 'Sumber'],
      'Kab. Blora': ['Banjarejo', 'Blora', 'Bogorejo', 'Cepu', 'Japah', 'Jati', 'Jepon', 'Jiken', 'Kedungtuban', 'Kradenan', 'Kunduran', 'Ngawen', 'Sambong', 'Todanan', 'Tunjungan', 'Randublatung'],
      'Kab. Grobogan': ['Brati', 'Gabus', 'Geyer', 'Godong', 'Grobogan', 'Gubug', 'Karangrayung', 'Kedungjati', 'Klambu', 'Kradenan', 'Ngaringan', 'Penawangan', 'Pulokulon', 'Purwodadi', 'Tanggungharjo', 'Tawangharjo', 'Tegowanu', 'Toroh', 'Wirosari'],
      'Kab. Sragen': ['Gemolong', 'Gesi', 'Gondang', 'Jenar', 'Kalijambe', 'Karangmalang', 'Kedawung', 'Masaran', 'Miri', 'Mondokan', 'Ngrampal', 'Plupuh', 'Sambirejo', 'Sambungmacan', 'Sidoharjo', 'Sragen', 'Sukodono', 'Sumberlawang', 'Tangen', 'Tanon'],
      'Kab. Karanganyar': ['Colomadu', 'Gondangrejo', 'Jaten', 'Jatipuro', 'Jatiyoso', 'Jenawi', 'Karanganyar', 'Karangpandan', 'Kebakkramat', 'Kerjo', 'Matesih', 'Ngargoyoso', 'Mojogedang', 'Tasikmadu', 'Tawangmangu', 'Jumantono', 'Jumapolo'],
      'Kab. Wonogiri': ['Baturetno', 'Batuwarno', 'Bulukerto', 'Eromoko', 'Girimarto', 'Giritontro', 'Giriwoyo', 'Jatipurno', 'Jatisrono', 'Karangtengah', 'Kismantoro', 'Manyaran', 'Ngadirojo', 'Nguntoronadi', 'Paranggupito', 'Pracimantoro', 'Puhpelem', 'Purwantoro', 'Selogiri', 'Sidoharjo', 'Slogohimo', 'Tirtomoyo', 'Wonogiri', 'Wuryantoro'],
      'Kab. Sukoharjo': ['Baki', 'Bendosari', 'Bulu', 'Gatak', 'Grogol', 'Kartasura', 'Mojolaban', 'Nguter', 'Polokarto', 'Sukoharjo', 'Tawangsari', 'Weru'],
      'Kab. Klaten': ['Bayat', 'Cawas', 'Ceper', 'Delanggu', 'Gantiwarno', 'Jatinom', 'Jogonalan', 'Juwiring', 'Kalikotes', 'Karanganom', 'Karangdowo', 'Karangnongko', 'Kebonarum', 'Kemalang', 'Klaten Selatan', 'Klaten Tengah', 'Klaten Utara', 'Manisrenggo', 'Ngawen', 'Pedan', 'Polanharjo', 'Prambanan', 'Trucuk', 'Tulung', 'Wedi', 'Wonosari'],
      'Kab. Boyolali': ['Ampel', 'Banyudono', 'Boyolali', 'Cepogo', 'Gladagsari', 'Juwangi', 'Karanggede', 'Kemusu', 'Klego', 'Mojosongo', 'Musuk', 'Ngemplak', 'Nogosari', 'Sambi', 'Sawit', 'Selo', 'Simo', 'Tamansari', 'Teras', 'Wonosegoro', 'Wonosamodro'],
      'Kab. Magelang': ['Bandongan', 'Borobudur', 'Candimulyo', 'Dukun', 'Grabag', 'Kajoran', 'Kaliangkrik', 'Mertoyudan', 'Mungkid', 'Muntilan', 'Ngablak', 'Ngluwar', 'Pakis', 'Pasuruhan', 'Salaman', 'Sawangan', 'Secang', 'Srumbung', 'Tegalrejo', 'Tempuran', 'Windusari'],
      'Kab. Temanggung': ['Bansari', 'Bejen', 'Bulu', 'Candiroto', 'Jumo', 'Kaloran', 'Kandangan', 'Kedu', 'Kledung', 'Kranggan', 'Ngadirejo', 'Parakan', 'Pringsurat', 'Selopampang', 'Temanggung', 'Tembarak', 'Tlogomulyo', 'Tretep', 'Wonoboyo'],
      'Kab. Wonosobo': ['Garung', 'Kalibawang', 'Kalikajar', 'Kaliwiro', 'Kejajar', 'Kepil', 'Kertek', 'Leksono', 'Mojotengah', 'Sapuran', 'Selomerto', 'Sukoharjo', 'Wadaslintang', 'Watumalang', 'Wonosobo'],
      'Kab. Purworejo': ['Bagelen', 'Banyuurip', 'Bayan', 'Bener', 'Bruno', 'Butuh', 'Gebang', 'Grabag', 'Kaligesing', 'Kemiri', 'Kutoarjo', 'Loano', 'Pituruh', 'Purwodadi', 'Purworejo', 'Ngombol'],
      'Kab. Kebumen': ['Adimulyo', 'Alian', 'Ambal', 'Ayah', 'Bonorowo', 'Buayan', 'Buluspesantren', 'Gombong', 'Karanganyar', 'Karanggayam', 'Karangsambung', 'Kebumen', 'Klirong', 'Kutowinangun', 'Kuwarasan', 'Mirit', 'Padureso', 'Pejagoan', 'Petanahan', 'Puring', 'Prembun', 'Rowokele', 'Sadang', 'Sempor', 'Sruweng'],
      'Kab. Banjarnegara': ['Banjarnegara', 'Batur', 'Bawang', 'Kalibening', 'Karangkobar', 'Madukara', 'Mandiraja', 'Pagedongan', 'Pagentan', 'Pandanarum', 'Pejawaran', 'Punggelan', 'Purwanegara', 'Purwareja Klampok', 'Rakit', 'Sigaluh', 'Susukan', 'Wanadadi', 'Wanayasa'],
      'Kab. Purbalingga': ['Bobotsari', 'Bojongsari', 'Bukateja', 'Kaligondang', 'Kalimanah', 'Karanganyar', 'Karangjambu', 'Karangmoncol', 'Karangreja', 'Kejobong', 'Kemangkon', 'Kertanegara', 'Kutasari', 'Mrebet', 'Padamara', 'Pengadegan', 'Purbalingga', 'Rembang'],
      'Kab. Banyumas': ['Ajibarang', 'Banyumas', 'Baturraden', 'Cilongok', 'Gumelar', 'Jatilawang', 'Kalibagor', 'Karanglewas', 'Kebasen', 'Kedungbanteng', 'Kembaran', 'Kemranjen', 'Lumbir', 'Patikraja', 'Pekuncen', 'Purwojati', 'Purwokerto Barat', 'Purwokerto Selatan', 'Purwokerto Timur', 'Purwokerto Utara', 'Rawalo', 'Sokaraja', 'Somagede', 'Sumpiuh', 'Tambak', 'Wangon'],
      'Kab. Cilacap': ['Adipala', 'Bantarsari', 'Binangun', 'Cilacap Selatan', 'Cilacap Tengah', 'Cilacap Utara', 'Cimanggu', 'Cipari', 'Dayeuhluhur', 'Gandrungmangu', 'Jeruklegi', 'Kampung Laut', 'Karangpucung', 'Kesugihan', 'Kroya', 'Majenang', 'Maos', 'Nusawungu', 'Patimuan', 'Sampang', 'Sidareja', 'Wanareja'],
      'Kab. Brebes': ['Banjarharjo', 'Bantarkawung', 'Brebes', 'Bulakamba', 'Bumiayu', 'Jatibarang', 'Kersana', 'Ketanggungan', 'Larangan', 'Losari', 'Paguyangan', 'Salem', 'Sirampog', 'Songgom', 'Tanjung', 'Tonjong', 'Wanasari'],
      'Kab. Tegal': ['Adiwerna', 'Balapulang', 'Bojong', 'Bumijawa', 'Dukuhturi', 'Dukuhwaru', 'Jatinegara', 'Kedungbanteng', 'Kramat', 'Lebaksiu', 'Margasari', 'Pagerbarang', 'Pangkah', 'Slawi', 'Suradadi', 'Talang', 'Tarub', 'Warureja'],
      'Kab. Pemalang': ['Ampelgading', 'Belik', 'Bodeh', 'Comal', 'Moga', 'Pulosari', 'Pemalang', 'Petarukan', 'Randudongkal', 'Taman', 'Ulujami', 'Warungpring', 'Watukumpul'],
      'Kab. Pekalongan': ['Bojong', 'Buaran', 'Doro', 'Kajen', 'Kandangserang', 'Karanganyar', 'Karangdadap', 'Kedungwuni', 'Kesesi', 'Lebakbarang', 'Paninggaran', 'Petungkriyono', 'Siwalan', 'Sragi', 'Talun', 'Tirto', 'Wiradesa', 'Wonokerto', 'Wonopringgo'],
      'Kab. Batang': ['Bandar', 'Banyuputih', 'Batang', 'Blado', 'Gringsing', 'Kandeman', 'Limpung', 'Pecalungan', 'Reban', 'Subah', 'Tersono', 'Tulis', 'Warungasem', 'Wonotunggal'],
    }
  },
  'Jawa Timur': {
    lat: -7.536, lng: 112.239, kota: {
      'Kota Surabaya': ['Asemrowo', 'Benowo', 'Bubutan', 'Bulak', 'Dukuh Pakis', 'Gayungan', 'Genteng', 'Gubeng', 'Gunung Anyar', 'Jambangan', 'Karang Pilang', 'Kenjeran', 'Krembangan', 'Lakar Santri', 'Mulyorejo', 'Pabean Cantian', 'Pakal', 'Rungkut', 'Sambikerep', 'Sawahan', 'Semampir', 'Simokerto', 'Sukolilo', 'Sukomanunggal', 'Tambaksari', 'Tandes', 'Tegalsari', 'Tenggilis Mejoyo', 'Wiyung', 'Wonocolo', 'Wonokromo'],
      'Kota Malang': ['Blimbing', 'Kedungkandang', 'Klojen', 'Lowokwaru', 'Sukun'],
      'Kota Batu': ['Batu', 'Bumiaji', 'Junrejo'],
      'Kota Kediri': ['Kediri Kota', 'Mojoroto', 'Pesantren'],
      'Kota Blitar': ['Kepanjenkidul', 'Sananwetan', 'Sukorejo'],
      'Kota Madiun': ['Kartoharjo', 'Madiun', 'Mangunharjo', 'Taman'],
      'Kota Mojokerto': ['Magersari', 'Kranggan', 'Prajurit Kulon'],
      'Kota Pasuruan': ['Bugul Kidul', 'Gadingrejo', 'Purworejo', 'Panggungrejo'],
      'Kota Probolinggo': ['Kademangan', 'Kanigaran', 'Mayangan', 'Wonoasih', 'Kedopok'],
      'Kab. Gresik': ['Balongpanggang', 'Benjeng', 'Bungah', 'Cerme', 'Driyorejo', 'Duduk Sampeyan', 'Dukun', 'Gresik', 'Kebomas', 'Kedamean', 'Manyar', 'Menganti', 'Panceng', 'Sangkapura', 'Sidayu', 'Tambak', 'Ujung Pangkah', 'Wringinanom'],
      'Kab. Sidoarjo': ['Balongbendo', 'Buduran', 'Candi', 'Gedangan', 'Jabon', 'Krembung', 'Krian', 'Porong', 'Prambon', 'Sedati', 'Sidoarjo', 'Sukodono', 'Taman', 'Tanggulangin', 'Tarik', 'Tulangan', 'Waru', 'Wonoayu'],
      'Kab. Mojokerto': ['Bangsal', 'Dawarblandong', 'Dlanggu', 'Gedeg', 'Gondang', 'Jatirejo', 'Jetis', 'Kemlagi', 'Kutorejo', 'Mojoanyar', 'Mojosari', 'Ngoro', 'Pacet', 'Pungging', 'Puri', 'Trawas', 'Trowulan', 'Sooko'],
      'Kab. Jombang': ['Bandar Kedungmulyo', 'Bareng', 'Diwek', 'Gudo', 'Jogoroto', 'Jombang', 'Kabuh', 'Kesamben', 'Kudu', 'Ngoro', 'Ngusikan', 'Perak', 'Peterongan', 'Plandaan', 'Ploso', 'Mojoagung', 'Mojowarno', 'Sumobito', 'Tembelang', 'Wonosalam'],
      'Kab. Lamongan': ['Babat', 'Bluluk', 'Brondong', 'Deket', 'Glagah', 'Kalitengah', 'Karangbinangun', 'Karanggeneng', 'Kedungpring', 'Kembangbahu', 'Lamongan', 'Laren', 'Maduran', 'Mantup', 'Modo', 'Ngimbang', 'Paciran', 'Pucuk', 'Sambeng', 'Sarirejo', 'Sekaran', 'Solokuro', 'Sugio', 'Sukodadi', 'Sukorame', 'Tikung', 'Turi'],
      'Kab. Bojonegoro': ['Balen', 'Baureno', 'Bojonegoro', 'Bubulan', 'Dander', 'Gayam', 'Gondang', 'Kalitidu', 'Kanor', 'Kapas', 'Kasiman', 'Kedewan', 'Kedungadem', 'Kepohbaru', 'Malo', 'Margomulyo', 'Ngambon', 'Ngasem', 'Ngraho', 'Padangan', 'Purwosari', 'Sekar', 'Sugihwaras', 'Sukosewu', 'Sumberejo', 'Tambakrejo', 'Temayang', 'Trucuk'],
      'Kab. Tuban': ['Bancar', 'Bangilan', 'Jatirogo', 'Jenu', 'Kenduruan', 'Merakurak', 'Montong', 'Palang', 'Parengan', 'Plumpang', 'Rengel', 'Semanding', 'Senori', 'Singgahan', 'Soko', 'Tambakboyo', 'Tuban', 'Widang'],
      'Kab. Madiun': ['Balerejo', 'Dagangan', 'Dolopo', 'Geger', 'Gemarang', 'Jiwan', 'Kare', 'Kebonsari', 'Madiun', 'Mejayan', 'Pilangkenceng', 'Saradan', 'Sawahan', 'Wonoasri', 'Wungu'],
      'Kab. Magetan': ['Barat', 'Bendo', 'Karangrejo', 'Karas', 'Kartoharjo', 'Kawedanan', 'Lembeyan', 'Magetan', 'Maospati', 'Ngariboyo', 'Nguntoronadi', 'Panekan', 'Parang', 'Plaosan', 'Poncol', 'Sidorejo', 'Sukomoro', 'Takeran'],
      'Kab. Ngawi': ['Bringin', 'Geneng', 'Gerih', 'Jogorogo', 'Karanganyar', 'Karangjati', 'Kasreman', 'Kedunggalar', 'Kendal', 'Kwadungan', 'Mantingan', 'Ngawi', 'Ngrambe', 'Padas', 'Pangkur', 'Paron', 'Pitu', 'Sine', 'Widodaren'],
      'Kab. Nganjuk': ['Bagor', 'Baron', 'Berbek', 'Gondang', 'Jatikalen', 'Lengkong', 'Loceret', 'Nganjuk', 'Ngetos', 'Ngluyu', 'Ngronggot', 'Pace', 'Patianrowo', 'Prambon', 'Rejoso', 'Sawahan', 'Sukomoro', 'Tanjunganom', 'Wilangan', 'Kertosono'],
      'Kab. Kediri': ['Badas', 'Banyakan', 'Gampengrejo', 'Grogol', 'Kandangan', 'Kandat', 'Kayen Kidul', 'Kepung', 'Kras', 'Kunjang', 'Mojo', 'Ngadiluwih', 'Ngancar', 'Ngasem', 'Pagu', 'Papar', 'Pare', 'Plemahan', 'Plosoklaten', 'Puncu', 'Purwoasri', 'Ringinrejo', 'Semen', 'Tarokan', 'Wates', 'Gurah'],
      'Kab. Blitar': ['Bakung', 'Binangun', 'Gandusari', 'Garum', 'Kademangan', 'Kanigoro', 'Kesamben', 'Nglegok', 'Panggungrejo', 'Ponggok', 'Sanankulon', 'Selorejo', 'Selopuro', 'Srengat', 'Sutojayan', 'Talun', 'Udanawu', 'Wates', 'Wlingi', 'Wonodadi', 'Wonotirto'],
      'Kab. Tulungagung': ['Bandung', 'Besuki', 'Boyolangu', 'Campurdarat', 'Gondang', 'Kalidawir', 'Karangrejo', 'Kauman', 'Kedungwaru', 'Ngantru', 'Ngunut', 'Pagerwojo', 'Pakel', 'Pucanglaban', 'Rejotangan', 'Sendang', 'Sumbergempol', 'Tanggunggunung', 'Tulungagung'],
      'Kab. Trenggalek': ['Bendungan', 'Dongko', 'Durenan', 'Gandusari', 'Kampak', 'Karangan', 'Munjungan', 'Panggul', 'Pogalan', 'Pule', 'Suruh', 'Trenggalek', 'Tugu', 'Watulimo'],
      'Kab. Ponorogo': ['Babadan', 'Badegan', 'Balong', 'Bungkal', 'Jambon', 'Jenangan', 'Jetis', 'Kauman', 'Mlarak', 'Ngrayun', 'Ngebel', 'Ponorogo', 'Pudak', 'Pulung', 'Sambit', 'Sampung', 'Sawoo', 'Siman', 'Slahung', 'Sooko', 'Sukorejo'],
      'Kab. Pacitan': ['Arjosari', 'Bandar', 'Donorojo', 'Kebonagung', 'Nawangan', 'Ngadirojo', 'Pacitan', 'Pringkuku', 'Punung', 'Sudimoro', 'Tegalombo', 'Tulakan'],
      'Kab. Malang': ['Ampelgading', 'Bantur', 'Bululawang', 'Dampit', 'Dau', 'Donomulyo', 'Gedangan', 'Gondanglegi', 'Jabung', 'Kalipare', 'Karangploso', 'Kasembon', 'Kepanjen', 'Kromengan', 'Lawang', 'Ngajum', 'Ngantang', 'Pagak', 'Pagelaran', 'Pakis', 'Pakisaji', 'Poncokusumo', 'Pujon', 'Sumbermanjing Wetan', 'Sumberpucung', 'Singosari', 'Tajinan', 'Tirtoyudo', 'Tumpang', 'Turen', 'Wagir', 'Wajak', 'Wonosari'],
      'Kab. Pasuruan': ['Bangil', 'Beji', 'Gempol', 'Gondang Wetan', 'Grati', 'Kejayan', 'Kraton', 'Lekok', 'Lumbang', 'Nguling', 'Pandaan', 'Pasrepan', 'Pohjentrek', 'Prigen', 'Purwodadi', 'Purwosari', 'Puspo', 'Rejoso', 'Rembang', 'Sukorejo', 'Tosari', 'Tutur', 'Winongan', 'Wonorejo'],
      'Kab. Probolinggo': ['Bantaran', 'Banyuanyar', 'Besuk', 'Dringu', 'Gading', 'Gending', 'Kotaanyar', 'Kuripan', 'Leces', 'Lumbang', 'Maron', 'Paiton', 'Pajarakan', 'Pakuniran', 'Sukapura', 'Sumber', 'Sumberasih', 'Tegal Siwalan', 'Tongas', 'Wonomerto'],
      'Kab. Lumajang': ['Candipuro', 'Gucialit', 'Jatiroto', 'Kedungjajang', 'Klakah', 'Kunir', 'Lumajang', 'Padang', 'Pasirian', 'Pasrujambe', 'Pronojiwo', 'Randuagung', 'Ranuyoso', 'Rowokangkung', 'Senduro', 'Sukodono', 'Sumbersuko', 'Tekung', 'Tempeh', 'Tempursari', 'Yosowilangun'],
      'Kab. Jember': ['Ajung', 'Arjasa', 'Balung', 'Bangsalsari', 'Gumukmas', 'Jelbuk', 'Jenggawah', 'Jombang', 'Kalisat', 'Kaliwates', 'Kencong', 'Ledokombo', 'Mayang', 'Mumbulsari', 'Pakusari', 'Panti', 'Patrang', 'Puger', 'Rambipuji', 'Semboro', 'Silo', 'Sukorambi', 'Sukowono', 'Sumberbaru', 'Sumberjambe', 'Sumbersari', 'Tanggul', 'Tempurejo', 'Umbulsari', 'Wuluhan'],
      'Kab. Bondowoso': ['Binakal', 'Bondowoso', 'Botolinggo', 'Cermee', 'Curahdami', 'Grujugan', 'Jambesari Darus Sholah', 'Klabang', 'Maesan', 'Pakem', 'Prajekan', 'Pujer', 'Sempol', 'Sukosari', 'Sumberwringin', 'Taman Krocok', 'Tamanan', 'Tapen', 'Tegalampel', 'Tenggarang', 'Tlogosari', 'Wonosari', 'Wringin'],
      'Kab. Situbondo': ['Arjasa', 'Asembagus', 'Banyuglugur', 'Banyuputih', 'Besuki', 'Bungatan', 'Jangkar', 'Jatibanteng', 'Kapongan', 'Kendit', 'Mangaran', 'Mlandingan', 'Panarukan', 'Panji', 'Situbondo', 'Suboh', 'Sumbermalang'],
      'Kab. Banyuwangi': ['Bangorejo', 'Banyuwangi', 'Blimbingsari', 'Cluring', 'Gambiran', 'Genteng', 'Giri', 'Glagah', 'Glenmore', 'Kabat', 'Kalibaru', 'Kalipuro', 'Licin', 'Muncar', 'Pesanggaran', 'Purwoharjo', 'Rogojampi', 'Sempu', 'Siliragung', 'Singojuruh', 'Songgon', 'Srono', 'Tegaldlimo', 'Tegalsari', 'Wongsorejo'],
      'Kab. Bangkalan': ['Bangkalan', 'Blega', 'Burneh', 'Galis', 'Geger', 'Kamal', 'Klampis', 'Kokop', 'Konang', 'Kwanyar', 'Labang', 'Modung', 'Socah', 'Tanah Merah', 'Tanjungbumi', 'Tragah', 'Sepulu', 'Arosbaya'],
      'Kab. Sampang': ['Banyuates', 'Camplong', 'Jrengik', 'Karang Penang', 'Kedungdung', 'Ketapang', 'Omben', 'Pangarengan', 'Robatal', 'Sampang', 'Sokobanah', 'Sreseh', 'Tambelangan', 'Torjun'],
      'Kab. Pamekasan': ['Batumarmar', 'Galis', 'Kadur', 'Larangan', 'Pademawu', 'Pakong', 'Palengaan', 'Pamekasan', 'Pasean', 'Proppo', 'Tlanakan', 'Waru', 'Pegantenan'],
      'Kab. Sumenep': ['Ambunten', 'Arjasa', 'Batang Batang', 'Batuan', 'Batuputih', 'Bluto', 'Dasuk', 'Dungkek', 'Ganding', 'Gayam', 'Gili Genting', 'Guluk-Guluk', 'Kalianget', 'Kangayan', 'Kota Sumenep', 'Lenteng', 'Manding', 'Masalembu', 'Nonggunong', 'Pasongsongan', 'Pragaan', 'Raas', 'Rubaru', 'Sapeken', 'Saronggi', 'Talango'],
    }
  },
  'Kalimantan Barat': {
    lat: 0.130, lng: 111.087, kota: {
      'Kota Pontianak': ['Pontianak Barat', 'Pontianak Kota', 'Pontianak Selatan', 'Pontianak Tenggara', 'Pontianak Timur', 'Pontianak Utara'],
      'Kota Singkawang': ['Singkawang Barat', 'Singkawang Selatan', 'Singkawang Tengah', 'Singkawang Timur', 'Singkawang Utara'],
      'Kab. Mempawah': ['Anjongan', 'Mempawah Hilir', 'Mempawah Timur', 'Sadaniang', 'Segedong', 'Siantan', 'Sungai Kunyit', 'Sungai Pinyuh', 'Toho'],
      'Kab. Kubu Raya': ['Batu Ampar', 'Kuala Mandor B', 'Kubu', 'Rasau Jaya', 'Sungai Ambawang', 'Sungai Kakap', 'Sungai Raya', 'Teluk Pakedai', 'Terentang'],
      'Kab. Sambas': ['Galing', 'Jawai', 'Jawai Selatan', 'Paloh', 'Pemangkat', 'Sajad', 'Sajingan Besar', 'Salatiga', 'Sambas', 'Sebawi', 'Sejangkung', 'Selakau', 'Selakau Timur', 'Semparuk', 'Subah', 'Tangaran', 'Tebas', 'Tekarang', 'Teluk Keramat'],
      'Kab. Bengkayang': ['Bengkayang', 'Capkala', 'Jagoi Babang', 'Ledo', 'Lembah Bawang', 'Lumar', 'Monterado', 'Samalantan', 'Sangau Ledo', 'Seluas', 'Siding', 'Sungai Betung', 'Sungai Raya', 'Teriak', 'Tujuh Belas'],
      'Kab. Landak': ['Air Besar', 'Banyuke Hulu', 'Jelimpo', 'Mandor', 'Mempawah Hulu', 'Menjalin', 'Menyuke', 'Meranti', 'Ngabang', 'Sebangki', 'Sengah Temila', 'Sompak', 'Kuala Behe'],
      'Kab. Sanggau': ['Balai', 'Beduai', 'Bonti', 'Entikong', 'Jangkang', 'Kapuas', 'Kembayan', 'Meliau', 'Mukok', 'Noyan', 'Parindu', 'Sekayam', 'Tayan Hilir', 'Tayan Hulu', 'Toba'],
      'Kab. Sekadau': ['Belitang', 'Belitang Hilir', 'Belitang Hulu', 'Nanga Mahap', 'Nanga Taman', 'Sekadau Hilir', 'Sekadau Hulu'],
      'Kab. Sintang': ['Ambalau', 'Binjai Hulu', 'Dedai', 'Kayan Hilir', 'Kayan Hulu', 'Kelam Permai', 'Ketungau Hilir', 'Ketungau Hulu', 'Ketungau Tengah', 'Sei Tebelian', 'Sepauk', 'Serawai', 'Sintang', 'Tempunak'],
      'Kab. Melawi': ['Belimbing', 'Belimbing Hulu', 'Ella Hilir', 'Menukung', 'Nanga Pinoh', 'Pinoh Selatan', 'Pinoh Utara', 'Tanah Pinoh', 'Tanah Pinoh Barat'],
      'Kab. Kapuas Hulu': ['Badau', 'Batang Lupar', 'Boyan Tanjung', 'Bunut Hilir', 'Bunut Hulu', 'Embaloh Hilir', 'Embaloh Hulu', 'Empanang', 'Hulu Gurung', 'Jongkong', 'Kalis', 'Mentebah', 'Pengkadan', 'Puring Kencana', 'Putussibau Selatan', 'Putussibau Utara', 'Seberuang', 'Selimbau', 'Semitau', 'Silat Hilir', 'Silat Hulu', 'Suhaid', 'Bika'],
      'Kab. Ketapang': ['Benua Kayong', 'Air Upas', 'Delta Pawan', 'Hulu Sungai', 'Jelai Hulu', 'Kendawangan', 'Manis Mata', 'Marau', 'Muara Pawan', 'Matan Hilir Selatan', 'Matan Hilir Utara', 'Nanga Tayap', 'Pemahan', 'Sandai', 'Singkup', 'Sungai Laur', 'Sungai Melayu Rayak', 'Tumbang Titi', 'Simpang Hulu', 'Simpang Dua'],
      'Kab. Kayong Utara': ['Kepulauan Karimata', 'Pulau Maya', 'Seponti', 'Simpang Hilir', 'Teluk Batang', 'Sukadana'],
    }
  },
  'Kalimantan Selatan': {
    lat: -3.093, lng: 115.284, kota: {
      'Kota Banjarmasin': ['Banjarmasin Barat', 'Banjarmasin Selatan', 'Banjarmasin Tengah', 'Banjarmasin Timur', 'Banjarmasin Utara'],
      'Kota Banjarbaru': ['Banjarbaru Selatan', 'Banjarbaru Utara', 'Cempaka', 'Landasan Ulin', 'Liang Anggang'],
      'Kab. Banjar': ['Aluh-Aluh', 'Aranio', 'Astambul', 'Beruntung Baru', 'Cintapuri Darussalam', 'Gambut', 'Karang Intan', 'Kertak Hanyar', 'Martapura', 'Martapura Barat', 'Martapura Timur', 'Mataraman', 'Pengaron', 'Sambung Makmur', 'Simpang Empat', 'Sungai Pinang', 'Sungai Tabuk', 'Tatah Makmur', 'Telaga Bauntung', 'Paramasan'],
      'Kab. Tanah Laut': ['Bajuin', 'Bati-Bati', 'Batu Ampar', 'Jorong', 'Kintap', 'Kurau', 'Panyipatan', 'Pelaihari', 'Takisung', 'Tambang Ulang', 'Bumi Makmur'],
      'Kab. Tanah Bumbu': ['Angsana', 'Batulicin', 'Kuranji', 'Kusan Hilir', 'Kusan Hulu', 'Mantewe', 'Satui', 'Sungai Loban', 'Simpang Empat', 'Karang Bintang'],
      'Kab. Kotabaru': ['Hampang', 'Kelumpang Barat', 'Kelumpang Hilir', 'Kelumpang Hulu', 'Kelumpang Selatan', 'Kelumpang Tengah', 'Kelumpang Utara', 'Pamukan Barat', 'Pamukan Selatan', 'Pamukan Utara', 'Pulau Laut Barat', 'Pulau Laut Kepulauan', 'Pulau Laut Selatan', 'Pulau Laut Tengah', 'Pulau Laut Utara', 'Pulau Sebuku', 'Pulau Sembilan', 'Sampanahan', 'Sungai Durian'],
      'Kab. Barito Kuala': ['Alalak', 'Anjir Muara', 'Anjir Pasar', 'Bakumpai', 'Belawang', 'Cerbon', 'Jejangkit', 'Kuripan', 'Mandastana', 'Marabahan', 'Mekarsari', 'Rantau Badauh', 'Tabukan', 'Tabunganen', 'Tamban', 'Wanaraya', 'Barambai'],
      'Kab. Tapin': ['Bakarangan', 'Binuang', 'Candi Laras Selatan', 'Candi Laras Utara', 'Hatungun', 'Lokpaikat', 'Piani', 'Salam Babaris', 'Tapin Selatan', 'Tapin Tengah', 'Tapin Utara'],
      'Kab. Hulu Sungai Selatan': ['Angkinang', 'Daha Barat', 'Daha Selatan', 'Daha Utara', 'Kalumpang', 'Kandangan', 'Loksado', 'Padang Batung', 'Simpur', 'Sungai Raya', 'Telaga Langsat'],
      'Kab. Hulu Sungai Tengah': ['Barabai', 'Batang Alai Selatan', 'Batang Alai Timur', 'Batang Alai Utara', 'Batu Benawa', 'Hantakan', 'Haruyan', 'Labuan Amas Selatan', 'Labuan Amas Utara', 'Limpasu', 'Pandawan'],
      'Kab. Hulu Sungai Utara': ['Amuntai Selatan', 'Amuntai Tengah', 'Amuntai Utara', 'Babirik', 'Banjang', 'Danau Panggang', 'Haur Gading', 'Paminggir', 'Sungai Pandan', 'Sungai Tabukan'],
      'Kab. Balangan': ['Awayan', 'Batu Mandi', 'Halong', 'Juai', 'Lampihong', 'Paringin', 'Paringin Selatan', 'Tebing Tinggi'],
      'Kab. Tabalong': ['Banua Lawas', 'Bintang Ara', 'Haruai', 'Jaro', 'Kelua', 'Muara Harus', 'Muara Uya', 'Murung Pudak', 'Pugaan', 'Tanta', 'Tanjung', 'Upau'],
    }
  },
  'Kalimantan Tengah': {
    lat: -1.682, lng: 113.382, kota: {
      'Kota Palangka Raya': ['Bukit Batu', 'Jekan Raya', 'Pahandut', 'Rakumpit', 'Sabangau'],
      'Kab. Kapuas': ['Basarang', 'Kapuas Barat', 'Kapuas Hilir', 'Kapuas Hulu', 'Kapuas Murung', 'Kapuas Tengah', 'Kapuas Timur', 'Mandau Talawang', 'Mantangai', 'Pasak Talawang', 'Selat', 'Timpah', 'Dadahup', 'Tamban Catur', 'Pulau Petak', 'Kapuas Kuala', 'Bataguh'],
      'Kab. Kotawaringin Timur': ['Antang Kalang', 'Baamang', 'Bukit Santuai', 'Cempaga', 'Cempaga Hulu', 'Kota Besi', 'Mentaya Hilir Selatan', 'Mentaya Hilir Utara', 'Mentaya Hulu', 'Mentawa Baru Ketapang', 'Parenggean', 'Pulau Hanaut', 'Seranau', 'Telawang', 'Teluk Sampit', 'Tualang Besi', 'Telaga Antang'],
      'Kab. Kotawaringin Barat': ['Arut Selatan', 'Arut Utara', 'Kotawaringin Lama', 'Kumai', 'Pangkalan Banteng', 'Pangkalan Lada'],
      'Kab. Barito Selatan': ['Dusun Hilir', 'Dusun Selatan', 'Dusun Utara', 'Gunung Bintang Awai', 'Jenamas', 'Karau Kuala'],
      'Kab. Barito Utara': ['Gunung Timang', 'Gunung Purei', 'Lahei', 'Lahei Barat', 'Montallat', 'Teweh Baru', 'Teweh Selatan', 'Teweh Tengah', 'Teweh Timur'],
      'Kab. Barito Timur': ['Awang', 'Benua Lima', 'Dusun Tengah', 'Dusun Timur', 'Karusen Janang', 'Paju Epat', 'Paku', 'Patangkep Tutui', 'Pematang Karau', 'Raren Batuah'],
      'Kab. Murung Raya': ['Murung', 'Laung Tuhup', 'Permata Intan', 'Sumber Barito', 'Tanah Siang', 'Tanah Siang Selatan', 'Barito Tuhup Raya', 'Seribu Riam', 'Uut Murung', 'Sungai Babuat'],
      'Kab. Gunung Mas': ['Kurun', 'Manuhing', 'Manuhing Raya', 'Mihing Raya', 'Damang Batu', 'Kahayan Hulu Utara', 'Miri Singan', 'Rungan', 'Rungan Barat', 'Rungan Hulu', 'Sepang', 'Tewah'],
      'Kab. Pulang Pisau': ['Banama Tingang', 'Jabiren Raya', 'Kahayan Hilir', 'Kahayan Kuala', 'Kahayan Tengah', 'Maliku', 'Pandih Batu', 'Sebangau Kuala'],
      'Kab. Katingan': ['Bukit Raya', 'Kamipang', 'Katingan Hilir', 'Katingan Hulu', 'Katingan Kuala', 'Katingan Tengah', 'Marikit', 'Mendawai', 'Pulau Malan', 'Sanaman Mantikei', 'Tasik Payawan', 'Tewang Sangalang Garing', 'Petak Malai'],
      'Kab. Seruyan': ['Danau Sembuluh', 'Danau Seluluk', 'Hanau', 'Seruyan Hilir', 'Seruyan Hilir Timur', 'Seruyan Hulu', 'Seruyan Raya', 'Seruyan Tengah', 'Batu Ampar'],
      'Kab. Lamandau': ['Batangkawa', 'Belantikan Raya', 'Bulik', 'Bulik Timur', 'Delang', 'Lamandau', 'Menthobi Raya', 'Sematu Jaya'],
      'Kab. Sukamara': ['Balai Riam', 'Jelai', 'Permata Kecubung', 'Sukamara', 'Pantai Lunci'],
    }
  },
  'Kalimantan Timur': {
    lat: 1.636, lng: 116.419, kota: {
      'Kota Samarinda': ['Loa Janan Ilir', 'Palaran', 'Samarinda Ilir', 'Samarinda Kota', 'Samarinda Seberang', 'Samarinda Ulu', 'Samarinda Utara', 'Sambutan', 'Sungai Kunjang', 'Sungai Pinang'],
      'Kota Balikpapan': ['Balikpapan Barat', 'Balikpapan Kota', 'Balikpapan Selatan', 'Balikpapan Tengah', 'Balikpapan Timur', 'Balikpapan Utara'],
      'Kota Bontang': ['Bontang Barat', 'Bontang Selatan', 'Bontang Utara'],
      'Kab. Kutai Kartanegara': ['Anggana', 'Kembang Janggut', 'Kenohan', 'Kota Bangun', 'Loa Janan', 'Loa Kulu', 'Marang Kayu', 'Muara Badak', 'Muara Jawa', 'Muara Kaman', 'Muara Muntai', 'Muara Wis', 'Samboja', 'Sangasanga', 'Sebulu', 'Tabang', 'Tenggarong', 'Tenggarong Seberang'],
      'Kab. Kutai Timur': ['Batu Ampar', 'Bengalon', 'Busang', 'Kaliorang', 'Karangan', 'Kaubun', 'Kongbeng', 'Long Mesangat', 'Muara Ancalong', 'Muara Bengkal', 'Muara Wahau', 'Rantau Pulung', 'Sandaran', 'Sangatta Selatan', 'Sangatta Utara', 'Sangkulirang', 'Telen', 'Teluk Pandan'],
      'Kab. Kutai Barat': ['Barong Tongkok', 'Bentian Besar', 'Bongan', 'Damai', 'Jempang', 'Linggang Bigung', 'Long Iram', 'Melak', 'Mura Lawa', 'Muara Pahu', 'Nyuatan', 'Penyinggahan', 'Sekolaq Darat', 'Siluq Ngurai', 'Tering'],
      'Kab. Mahakam Ulu': ['Laham', 'Long Apari', 'Long Hubung', 'Long Bagun', 'Long Pahangai'],
      'Kab. Paser': ['Batu Engau', 'Batu Sopang', 'Kuaro', 'Long Ikis', 'Long Kali', 'Muara Komam', 'Muara Samu', 'Pasir Belengkong', 'Tanah Grogot', 'Tanjung Harapan'],
      'Kab. Penajam Paser Utara': ['Babulu', 'Penajam', 'Sepaku', 'Waru'],
      'Kab. Berau': ['Batu Putih', 'Biatan', 'Biduk-Biduk', 'Gunung Tabur', 'Kelay', 'Maratua', 'Pulau Derawan', 'Sambaliung', 'Segah', 'Tabalar', 'Talisayan', 'Tanjung Redeb', 'Teluk Bayur'],
    }
  },
  'Kalimantan Utara': {
    lat: 3.073, lng: 116.041, kota: {
      'Kota Tarakan': ['Tarakan Barat', 'Tarakan Tengah', 'Tarakan Timur', 'Tarakan Utara'],
      'Kab. Bulungan': ['Bunyu', 'Peso', 'Peso Hilir', 'Sekatak', 'Tanjung Palas', 'Tanjung Palas Barat', 'Tanjung Palas Tengah', 'Tanjung Palas Timur', 'Tanjung Palas Utara', 'Tanjung Selor'],
      'Kab. Nunukan': ['Krayan', 'Krayan Selatan', 'Krayan Tengah', 'Krayan Timur', 'Krayan Barat', 'Lumbis', 'Lumbis Ogong', 'Lumbis Pansiangan', 'Lumbis Hulu', 'Nunukan', 'Nunukan Selatan', 'Sebatik', 'Sebatik Barat', 'Sebatik Tengah', 'Sebatik Timur', 'Sebatik Utara', 'Sebuku', 'Sei Menggaris', 'Sembakung', 'Sembakung Atulai', 'Tulin Onsoi'],
      'Kab. Malinau': ['Bahau Hulu', 'Kayan Hilir', 'Kayan Hulu', 'Kayan Selatan', 'Malinau Barat', 'Malinau Kota', 'Malinau Selatan', 'Malinau Selatan Hilir', 'Malinau Selatan Hulu', 'Malinau Utara', 'Mentarang', 'Mentarang Hulu', 'Pujungan', 'Sungai Boh', 'Sungai Tubu'],
      'Kab. Tana Tidung': ['Betayau', 'Muruk Rian', 'Sesayap', 'Sesayap Hilir', 'Tana Lia'],
    }
  },
  'Kepulauan Riau': {
    lat: 3.946, lng: 108.142, kota: {
      'Kota Batam': ['Batam Kota', 'Batu Aji', 'Batu Ampar', 'Belakang Padang', 'Bengkong', 'Bulang', 'Galang', 'Lubuk Baja', 'Nongsa', 'Sagulung', 'Sei Beduk', 'Sekupang'],
      'Kota Tanjungpinang': ['Bukit Bestari', 'Tanjungpinang Barat', 'Tanjungpinang Kota', 'Tanjungpinang Timur'],
      'Kab. Bintan': ['Bintan Pesisir', 'Bintan Timur', 'Bintan Utara', 'Gunung Kijang', 'Mantang', 'Seri Kuala Lobam', 'Tambelan', 'Teluk Bintan', 'Teluk Sebong', 'Toapaya'],
      'Kab. Karimun': ['Belat', 'Buru', 'Karimun', 'Kundur', 'Kundur Barat', 'Kundur Utara', 'Meral', 'Meral Barat', 'Moro', 'Tebing', 'Ungar'],
      'Kab. Natuna': ['Bunguran Barat', 'Bunguran Batubi', 'Bunguran Selatan', 'Bunguran Tengah', 'Bunguran Timur', 'Bunguran Timur Laut', 'Bunguran Utara', 'Midai', 'Pulau Laut', 'Pulau Tiga', 'Serasan', 'Subi'],
      'Kab. Kepulauan Anambas': ['Jemaja', 'Jemaja Timur', 'Palmatak', 'Siantan', 'Siantan Selatan', 'Siantan Timur', 'Siantan Tengah'],
      'Kab. Lingga': ['Bakung Serumpun', 'Katang Bidare', 'Lingga', 'Lingga Timur', 'Lingga Utara', 'Selayar', 'Senayang', 'Singkep', 'Singkep Barat', 'Singkep Pesisir', 'Singkep Selatan'],
    }
  },
  'Lampung': {
    lat: -4.558, lng: 105.405, kota: {
      'Kota Bandar Lampung': ['Kedaton', 'Kemiling', 'Panjang', 'Rajabasa', 'Sukarame', 'Tanjung Karang Barat', 'Tanjung Karang Pusat', 'Tanjung Karang Timur', 'Teluk Betung Barat', 'Teluk Betung Selatan', 'Teluk Betung Timur', 'Teluk Betung Utara', 'Way Halim', 'Labuhan Ratu'],
      'Kota Metro': ['Metro Barat', 'Metro Pusat', 'Metro Selatan', 'Metro Timur', 'Metro Utara'],
      'Kab. Lampung Selatan': ['Bakauheni', 'Kalianda', 'Katibung', 'Ketapang', 'Natar', 'Palas', 'Penengahan', 'Rajabasa', 'Sidomulyo', 'Tanjung Bintang', 'Way Sulan'],
      'Kab. Lampung Tengah': ['Anak Tuha', 'Bandar Mataram', 'Bangun Rejo', 'Gunung Sugih', 'Kalirejo', 'Padang Ratu', 'Punggur', 'Seputih Banyak', 'Seputih Mataram', 'Terbanggi Besar', 'Terusan Nunyai'],
      'Kab. Lampung Utara': ['Abung Barat', 'Abung Selatan', 'Abung Tinggi', 'Bukit Kemuning', 'Kotabumi', 'Kotabumi Selatan', 'Kotabumi Utara', 'Sungkai Selatan', 'Sungkai Utara'],
      'Kab. Lampung Barat': ['Balik Bukit', 'Belalau', 'Kebun Tebu', 'Lumbok Seminung', 'Sumber Jaya', 'Way Tenong'],
      'Kab. Lampung Timur': ['Bandar Sribhawono', 'Labuhan Maringgai', 'Melinting', 'Pekalongan', 'Sukadana', 'Way Bungur', 'Way Jepara'],
      'Kab. Tanggamus': ['Air Naningan', 'Gisting', 'Kota Agung', 'Pulau Panggung', 'Semaka', 'Talang Padang', 'Wonosobo'],
      'Kab. Pringsewu': ['Adiluwih', 'Ambarawa', 'Gading Rejo', 'Pagelaran', 'Pringsewu', 'Sukoharjo'],
      'Kab. Pesawaran': ['Gedong Tataan', 'Kedondong', 'Negeri Katon', 'Padang Cermin', 'Punduh Pidada', 'Tegineneng'],
      'Kab. Way Kanan': ['Banjit', 'Baradatu', 'Blambangan Umpu', 'Kasui', 'Pakuan Ratu', 'Rebang Tangkas'],
      'Kab. Mesuji': ['Mesuji', 'Mesuji Timur', 'Panca Jaya', 'Rawajitu Utara', 'Simpang Pematang', 'Tanjung Raya', 'Way Serampung'],
      'Kab. Tulang Bawang': ['Banjar Agung', 'Dente Teladas', 'Menggala', 'Menggala Timur', 'Penawar Tama', 'Rawajitu Selatan'],
      'Kab. Tulang Bawang Barat': ['Gunung Agung', 'Gunung Terang', 'Lambu Kibang', 'Pagar Dewa', 'Tulang Bawang Tengah', 'Tulang Bawang Udik'],
      'Kab. Pesisir Barat': ['Lemong', 'Pesisir Selatan', 'Pesisir Tengah', 'Pesisir Utara', 'Pulau Pisang', 'Way Krui'],
    }
  },
  'Maluku': {
    lat: -3.237, lng: 130.145, kota: {
      'Kota Ambon': ['Baguala', 'Leitimur Selatan', 'Nusaniwe', 'Sirimau', 'Teluk Ambon'],
      'Kota Tual': ['Pulau Dullah Selatan', 'Pulau Dullah Utara', 'Pulau-Pulau Kur', 'Kur Selatan', 'Tayando Tam'],
      'Kab. Maluku Tengah': ['Amahai', 'Banda', 'Masohi', 'Saparua', 'Seram Utara', 'Tehoru'],
      'Kab. Maluku Tenggara': ['Kei Kecil', 'Kei Kecil Barat', 'Kei Kecil Timur', 'Kei Besar', 'Kei Besar Selatan', 'Kei Besar Utara Timur'],
      'Kab. Maluku Barat Daya': ['Moa Lakor', 'Pulau-Pulau Babar', 'Pulau-Pulau Terselatan', 'Wetar'],
      'Kab. Kepulauan Tanimbar': ['Tanimbar Selatan', 'Tanimbar Utara', 'Wer Tamrian', 'Wuarlabobar'],
      'Kab. Buru': ['Namlea', 'Air Buaya', 'Batabual', 'Waeapo', 'Waplau'],
      'Kab. Buru Selatan': ['Namrole', 'Ambalau', 'Fena Fafan', 'Kepala Madan', 'Leksula', 'Waesama'],
      'Kab. Seram Bagian Barat': ['Kairatu', 'Huamual', 'Piru', 'Taniwel'],
      'Kab. Seram Bagian Timur': ['Bula', 'Geser', 'Gorom', 'Werinama'],
      'Kab. Kepulauan Aru': ['Pulau-Pulau Aru', 'Aru Selatan', 'Aru Tengah', 'Aru Utara'],
    }
  },
  'Maluku Utara': {
    lat: 1.571, lng: 127.808, kota: {
      'Kota Ternate': ['Pulau Ternate', 'Ternate Barat', 'Ternate Selatan', 'Ternate Tengah', 'Ternate Utara', 'Pulau Moti', 'Pulau Batang Dua'],
      'Kota Tidore Kepulauan': ['Oba', 'Oba Selatan', 'Oba Tengah', 'Oba Utara', 'Tidore', 'Tidore Selatan', 'Tidore Timur', 'Tidore Utara'],
      'Kab. Halmahera Barat': ['Jailolo', 'Jailolo Selatan', 'Ibu', 'Ibu Selatan', 'Ibu Utara', 'Sahu', 'Sahu Timur'],
      'Kab. Halmahera Tengah': ['Weda', 'Weda Selatan', 'Weda Tengah', 'Weda Utara', 'Patani', 'Patani Barat', 'Patani Utara'],
      'Kab. Halmahera Utara': ['Tobelo', 'Tobelo Barat', 'Tobelo Selatan', 'Tobelo Tengah', 'Tobelo Utara', 'Galela', 'Galela Barat', 'Galela Selatan', 'Galela Utara', 'Loloda Utara'],
      'Kab. Halmahera Selatan': ['Bacan', 'Bacan Barat', 'Bacan Selatan', 'Bacan Timur', 'Gane Barat', 'Gane Timur', 'Obi', 'Obi Selatan', 'Pulau Makian'],
      'Kab. Halmahera Timur': ['Maba', 'Maba Selatan', 'Maba Tengah', 'Maba Utara', 'Wasile', 'Wasile Selatan', 'Wasile Tengah', 'Wasile Timur', 'Wasile Utara'],
      'Kab. Kepulauan Sula': ['Sanana', 'Sanana Utara', 'Mangoli Barat', 'Mangoli Tengah', 'Mangoli Timur', 'Mangoli Utara'],
      'Kab. Pulau Morotai': ['Morotai Selatan', 'Morotai Selatan Barat', 'Morotai Timur', 'Morotai Utara', 'Morotai Jaya'],
      'Kab. Pulau Taliabu': ['Taliabu Barat', 'Taliabu Barat Laut', 'Taliabu Selatan', 'Taliabu Timur', 'Taliabu Utara', 'Lede', 'Tabona'],
    }
  },
  'NTB': {
    lat: -8.653, lng: 117.361, kota: {
      'Kota Mataram': ['Ampenan', 'Cakranegara', 'Mataram', 'Pejanggik', 'Sandubaya', 'Sekarbela'],
      'Kota Bima': ['Asakota', 'Mpunda', 'Raba', 'Rasanae Barat', 'Rasanae Timur'],
      'Kab. Lombok Barat': ['Batu Layar', 'Gunungsari', 'Kediri', 'Kuripan', 'Labu Api', 'Lembar', 'Lingsar', 'Narmada', 'Sekotong'],
      'Kab. Lombok Tengah': ['Batukliang', 'Janapria', 'Jonggat', 'Kopang', 'Praya', 'Praya Barat', 'Praya Timur', 'Pringgarata', 'Pujut'],
      'Kab. Lombok Timur': ['Aikmel', 'Jerowaru', 'Keruak', 'Labuhan Haji', 'Masbagik', 'Montong Gading', 'Pringgabaya', 'Sakra', 'Sambelia', 'Selong', 'Terara'],
      'Kab. Lombok Utara': ['Bayan', 'Gangga', 'Kayangan', 'Pemenang', 'Tanjung'],
      'Kab. Sumbawa': ['Alas', 'Empang', 'Lape', 'Lopok', 'Moyo Hilir', 'Moyo Hulu', 'Plampang', 'Rhee', 'Sumbawa', 'Utan'],
      'Kab. Sumbawa Barat': ['Brang Ene', 'Brang Rea', 'Jereweh', 'Maluk', 'Poto Tano', 'Sekongkang', 'Seteluk', 'Taliwang'],
      'Kab. Dompu': ['Dompu', "Hu'u", 'Kempo', 'Kilo', 'Manggelewa', 'Pajo', 'Pekat', 'Woja'],
      'Kab. Bima': ['Ambalawi', 'Belo', 'Donggo', 'Lambu', 'Madapangga', 'Monta', 'Bolo', 'Sape', 'Wawo', 'Woha'],
    }
  },
  'NTT': {
    lat: -8.657, lng: 121.079, kota: {
      'Kota Kupang': ['Alak', 'Kelapa Lima', 'Kota Raja', 'Kota Lama', 'Maulafa', 'Oebobo'],
      'Kab. Kupang': ['Amarasi', 'Amfoang', 'Fatuleu', 'Kupang Barat', 'Kupang Tengah', 'Kupang Timur', 'Nekamese', 'Sulamu', 'Taebenu'],
      'Kab. Timor Tengah Selatan': ['Amanuban', 'Amanatun', 'Batu Putih', 'Fatumnasi', 'Kie', 'Kolbano', 'Mollo', 'Noebeba', 'Soe'],
      'Kab. Timor Tengah Utara': ['Biboki', 'Insana', 'Kota Kefamenanu', 'Miomaffo', 'Musi', 'Mutis', 'Noemuti'],
      'Kab. Belu': ['Atambua Barat', 'Atambua Kota', 'Atambua Selatan', 'Kakuluk Mesak', 'Lasiolat', 'Raihat', 'Tasifeto Barat', 'Tasifeto Timur'],
      'Kab. Malaka': ['Kobalima', 'Malaka Barat', 'Malaka Tengah', 'Malaka Timur', 'Rinhat', 'Weliman', 'Wewiku'],
      'Kab. Alor': ['Alor Barat Daya', 'Alor Barat Laut', 'Alor Selatan', 'Alor Timur', 'Pantar', 'Pulau Pura', 'Teluk Mutiara'],
      'Kab. Flores Timur': ['Adonara', 'Larantuka', 'Lewolema', 'Solor', 'Tanjung Bunga', 'Titihena', 'Wotan Ulumado'],
      'Kab. Sikka': ['Alok', 'Bola', 'Doreng', 'Kewapante', 'Lela', 'Maumere', 'Nita', 'Paga', 'Talibura', 'Waigete'],
      'Kab. Ende': ['Detusoko', 'Ende', 'Ende Selatan', 'Kelimutu', 'Lio Timur', 'Maurole', 'Nangapanda', 'Wolowaru'],
      'Kab. Ngada': ['Aimere', 'Bajawa', 'Golewa', 'Jerebuu', 'Riung', 'Wolomeze'],
      'Kab. Manggarai': ['Cibal', 'Langke Rembong', 'Lelak', 'Reok', 'Ruteng', 'Satar Mese', 'Wae Rii'],
      'Kab. Manggarai Barat': ['Komodo', 'Kuwus', 'Labuan Bajo', 'Lembor', 'Macang Pacar', 'Mbeliling', 'Sano Nggoang'],
      'Kab. Manggarai Timur': ['Borong', 'Elar', 'Kota Komba', 'Lamba Leda', 'Sambi Rampas'],
      'Kab. Sumba Timur': ['Haharu', 'Karera', 'Lewa', 'Paberiwai', 'Tabundung', 'Waingapu', 'Wulla Waijelu'],
      'Kab. Sumba Barat': ['Kota Waikabubak', 'Lamboya', 'Loli', 'Tanarighu', 'Wanokaka'],
      'Kab. Sumba Tengah': ['Katikutana', 'Mamboro', 'Umbu Ratu Nggay'],
      'Kab. Sumba Barat Daya': ['Kodi', 'Loura', 'Tambolaka', 'Wewewa Barat', 'Wewewa Timur'],
      'Kab. Lembata': ['Atadei', 'Buyasuri', 'Ile Ape', 'Lebatukan', 'Nagawutung', 'Nubatukan', 'Omesuri'],
      'Kab. Rote Ndao': ['Lobalain', 'Pantai Baru', 'Rote Barat', 'Rote Selatan', 'Rote Timur'],
      'Kab. Sabu Raijua': ['Hawu Mehara', 'Raijua', 'Sabu Barat', 'Sabu Liae', 'Sabu Timur'],
    }
  },
  'Papua': {
    lat: -4.269, lng: 138.080, kota: {
      'Kota Jayapura': ['Abepura', 'Heram', 'Jayapura Selatan', 'Jayapura Utara', 'Muara Tami'],
      'Kab. Jayapura': ['Airu', 'Demta', 'Depapre', 'Ebungfau', 'Gresi Selatan', 'Kaureh', 'Kemtuk', 'Kemtuk Gresi', 'Namblong', 'Nimbokrang', 'Nimboran', 'Sentani', 'Sentani Barat', 'Sentani Timur', 'Waibu', 'Yapsi', 'Yokari'],
      'Kab. Keerom': ['Arso', 'Arso Barat', 'Arso Timur', 'Mannem', 'Senggi', 'Skanto', 'Waris', 'Towe', 'Web', 'Yaffi', 'Kesenar'],
      'Kab. Sarmi': ['Apawer Hulu', 'Bonggo', 'Bonggo Timur', 'Pantai Barat', 'Pantai Timur', 'Sarmi', 'Sarmi Selatan', 'Sarmi Timur', 'Tor Atas'],
      'Kab. Waropen': ['Kirihi', 'Masirei', 'Oudate', 'Risei Sayati', 'Wapoga', 'Waropen Bawah', 'Urei Faisei'],
      'Kab. Kepulauan Yapen': ['Angkaisera', 'Kepulauan Ambai', 'Kosiwo', 'Poom', 'Teluk Ampimoi', 'Yapen Barat', 'Yapen Selatan', 'Yapen Timur', 'Yapen Utara'],
      'Kab. Biak Numfor': ['Biak Barat', 'Biak Kota', 'Biak Timur', 'Biak Utara', 'Numfor Barat', 'Numfor Timur', 'Samofa', 'Warsa', 'Aimando Padaido'],
      'Kab. Supiori': ['Supiori Barat', 'Supiori Timur', 'Supiori Utara', 'Supiori Selatan', 'Kepulauan Aruri'],
      'Kab. Merauke': ['Jagebob', 'Kurik', 'Merauke', 'Muting', 'Okaba', 'Semangga', 'Sota', 'Tanah Miring', 'Tubang', 'Ulilin'],
      'Kab. Asmat': ['Agats', 'Akat', 'Atsj', 'Fayit', 'Pantai Kasuari', 'Pulau Tiga', 'Sawa Erma', 'Suator'],
      'Kab. Boven Digoel': ['Bomakia', 'Jair', 'Mandobo', 'Mindiptana', 'Muyu', 'Subur', 'Waropko'],
      'Kab. Mappi': ['Edera', 'Haju', 'Kasuami', 'Minyamur', 'Obaa', 'Passue'],
    }
  },
  'Papua Barat': {
    lat: -1.336, lng: 133.174, kota: {
      'Kab. Manokwari': ['Manokwari Barat', 'Manokwari Selatan', 'Manokwari Timur', 'Manokwari Utara', 'Prafi', 'Masni', 'Sidey', 'Tanah Rubuh'],
      'Kab. Manokwari Selatan': ['Dataran Isim', 'Mameh', 'Oransbari', 'Ransiki', 'Tahota', 'Tohida'],
      'Kab. Pegunungan Arfak': ['Anggi', 'Anggi Gida', 'Catubouw', 'Didohu', 'Hink', 'Membey', 'Minyambouw', 'Sururey', 'Taige', 'Testega'],
      'Kab. Fakfak': ['Fakfak', 'Fakfak Barat', 'Fakfak Tengah', 'Fakfak Timur', 'Karas', 'Kokas', 'Kramomongga', 'Teluk Patipi'],
      'Kab. Kaimana': ['Buruway', 'Kaimana', 'Kambrauw', 'Teluk Arguni', 'Teluk Etna', 'Yamor'],
      'Kab. Teluk Bintuni': ['Aranday', 'Bintuni', 'Babo', 'Ituri', 'Merdey', 'Moskona Barat', 'Moskona Utara', 'Sumuri', 'Tembuni'],
      'Kab. Teluk Wondama': ['Rasiei', 'Roon', 'Roswar', 'Wasior', 'Windesi', 'Wamesa', 'Teluk Duairi'],
    }
  },
  'Papua Barat Daya': {
    lat: -1.000, lng: 131.500, kota: {
      'Kota Sorong': ['Maladum Mes', 'Sorong', 'Sorong Barat', 'Sorong Kepulauan', 'Sorong Kota', 'Sorong Manoi', 'Sorong Timur', 'Sorong Utara'],
      'Kab. Sorong': ['Aimas', 'Klamono', 'Makbon', 'Mayamuk', 'Salawati', 'Sayosa', 'Seget', 'Segun'],
      'Kab. Sorong Selatan': ['Kais', 'Kokoda', 'Saifi', 'Sawiat', 'Teminabuan', 'Wayer'],
      'Kab. Raja Ampat': ['Ayau', 'Kofiau', 'Meos Mansar', 'Misool', 'Pulau Sembilan', 'Samate', 'Teluk Mayalibit', 'Waigeo Barat', 'Waigeo Timur', 'Waigeo Selatan'],
      'Kab. Tambrauw': ['Abun', 'Fef', 'Kwoor', 'Miyah', 'Sausapor', 'Senopi', 'Yembun'],
      'Kab. Maybrat': ['Aitinyo', 'Ayamaru', 'Mare', 'Mare Selatan', 'Yumassess'],
    }
  },
  'Papua Selatan': {
    lat: -6.500, lng: 140.700, kota: {
      'Kab. Merauke': ['Jagebob', 'Kurik', 'Merauke', 'Muting', 'Okaba', 'Semangga', 'Sota', 'Tanah Miring', 'Tubang', 'Ulilin'],
      'Kab. Asmat': ['Agats', 'Akat', 'Atsj', 'Fayit', 'Pantai Kasuari', 'Pulau Tiga', 'Sawa Erma', 'Suator'],
      'Kab. Boven Digoel': ['Bomakia', 'Jair', 'Mandobo', 'Mindiptana', 'Muyu', 'Subur', 'Waropko'],
      'Kab. Mappi': ['Edera', 'Haju', 'Kasuami', 'Minyamur', 'Obaa', 'Passue'],
    }
  },
  'Papua Tengah': {
    lat: -3.800, lng: 136.000, kota: {
      'Kab. Nabire': ['Makimi', 'Nabire', 'Nabire Barat', 'Napan', 'Siriwo', 'Teluk Kimi', 'Uwapa', 'Wanggar', 'Yaro'],
      'Kab. Mimika': ['Agimuga', 'Jila', 'Jita', 'Kuala Kencana', 'Mimika Baru', 'Mimika Barat', 'Mimika Timur', 'Tembagapura'],
      'Kab. Puncak': ['Beoga', 'Doufo', 'Gome', 'Ilaga', 'Sinak', 'Wangbe'],
      'Kab. Puncak Jaya': ['Fawi', 'Ilu', 'Mulia', 'Mewoluk', 'Pagaleme', 'Tingginambut'],
      'Kab. Dogiyai': ['Dogiyai', 'Kamu', 'Kamu Selatan', 'Kamu Utara', 'Mapia', 'Mapia Tengah'],
      'Kab. Deiyai': ['Bowobado', 'Kapiraya', 'Tigi', 'Tigi Barat', 'Tigi Timur'],
      'Kab. Intan Jaya': ['Agisiga', 'Biandoga', 'Hitadipa', 'Homeyo', 'Sugapa', 'Wandai'],
      'Kab. Paniai': ['Aradide', 'Bibida', 'Paniai Barat', 'Paniai Timur', 'Yatamo'],
    }
  },
  'Papua Pegunungan': {
    lat: -4.100, lng: 139.000, kota: {
      'Kab. Jayawijaya': ['Asologaima', 'Bolakme', 'Kurulu', 'Musatfak', 'Piramid', 'Wamena', 'Walelagama'],
      'Kab. Lanny Jaya': ['Balingga', 'Gamelia', 'Makki', 'Tiom', 'Tiom Ollo', 'Pirime'],
      'Kab. Tolikara': ['Bokondini', 'Karubaga', 'Kanggime', 'Kembu', 'Nabunage'],
      'Kab. Yahukimo': ['Anggruk', 'Dekai', 'Kurima', 'Ninia', 'Obio', 'Silimo', 'Sumo'],
      'Kab. Yalimo': ['Abenaho', 'Apalapsili', 'Benawa', 'Elelim', 'Welarek'],
      'Kab. Nduga': ['Kenyam', 'Mapenduma', 'Mugi', 'Yigi'],
      'Kab. Pegunungan Bintang': ['Kalomdol', 'Kiwirok', 'Okaba', 'Oksibil', 'Tarup'],
      'Kab. Mamberamo Tengah': ['Eragayam', 'Ilugwa', 'Kelila', 'Kobakma'],
    }
  },
  'Riau': {
    lat: 0.293, lng: 101.707, kota: {
      'Kota Pekanbaru': ['Binawidya', 'Bukit Raya', 'Lima Puluh', 'Marpoyan Damai', 'Payung Sekaki', 'Pekanbaru Kota', 'Rumbai Barat', 'Rumbai', 'Rumbai Timur', 'Senapelan', 'Sukajadi', 'Tuah Madani', 'Tenayan Raya', 'Kulim'],
      'Kota Dumai': ['Bukit Kapur', 'Dumai Barat', 'Dumai Kota', 'Dumai Selatan', 'Dumai Timur', 'Medang Kampai', 'Sungai Sembilan'],
      'Kab. Kampar': ['Bangkinang', 'Bangkinang Kota', 'Gunung Sahilan', 'Kampar', 'Kampar Kiri', 'Kampar Kiri Hilir', 'Kampar Kiri Hulu', 'Kampar Kiri Tengah', 'Kampar Utara', 'Koto Kampar Hulu', 'Kuok', 'Rumbio Jaya', 'Salo', 'Siak Hulu', 'Tambang', 'Tapung', 'Tapung Hilir', 'Tapung Hulu'],
      'Kab. Siak': ['Bunga Raya', 'Dayun', 'Kandis', 'Kerinci Kanan', 'Koto Gasib', 'Lubuk Dalam', 'Mempura', 'Minas', 'Pusako', 'Sabak Auh', 'Siak', 'Sungai Apit', 'Sungai Mandau', 'Tualang'],
      'Kab. Pelalawan': ['Bandar Petalangan', 'Bandar Sei Kijang', 'Bunut', 'Kerumutan', 'Kuala Kampar', 'Langgam', 'Pangkalan Kerinci', 'Pangkalan Kuras', 'Pangkalan Lesung', 'Pelalawan', 'Teluk Meranti', 'Ukui'],
      'Kab. Indragiri Hulu': ['Batang Cenaku', 'Batang Gansal', 'Batang Peranap', 'Kelayang', 'Kuala Cenaku', 'Lirik', 'Lubuk Batu Jaya', 'Pasir Penyu', 'Peranap', 'Rakit Kulim', 'Rengat', 'Rengat Barat', 'Seberida', 'Sungai Lala'],
      'Kab. Indragiri Hilir': ['Batang Tuaka', 'Enok', 'Gaung', 'Gaung Anak Serka', 'Kateman', 'Kempas', 'Keritang', 'Kuala Indragiri', 'Mandah', 'Pelangiran', 'Pulau Burung', 'Retseh', 'Sungai Batang', 'Tanah Merah', 'Teluk Belengkong', 'Tembilahan', 'Tembilahan Hulu', 'Tempuling', 'Concong', 'Kemuning'],
      'Kab. Kuantan Singingi': ['Benai', 'Cerenti', 'Gunung Toar', 'Hulu Kuantan', 'Inuman', 'Kuantan Hilir', 'Kuantan Hilir Seberang', 'Kuantan Mudik', 'Kuantan Tengah', 'Logas Tanah Darat', 'Pangean', 'Pucuk Rantau', 'Sentajo Raya', 'Singingi', 'Singingi Hilir'],
      'Kab. Rokan Hulu': ['Bangun Purba', 'Bonai Darussalam', 'Kabun', 'Kunto Darussalam', 'Pagaran Tapah Darussalam', 'Pendalian IV Koto', 'Rambah', 'Rambah Hilir', 'Rambah Samo', 'Rokan IV Koto', 'Tandun', 'Ujung Batu', 'Tambusai', 'Tambusai Utara'],
      'Kab. Rokan Hilir': ['Bangko', 'Bangko Pusako', 'Batu Hampar', 'Bagan Sinembah', 'Balai Jaya', 'Kubu', 'Kubu Babussalam', 'Pasir Limau Kapas', 'Pekaitan', 'Pujud', 'Rantau Kopar', 'Rimba Melintang', 'Sinaboi', 'Tanah Putih', 'Tanah Putih Tanjung Melawan', 'Tanjung Medan'],
      'Kab. Bengkalis': ['Bengkalis', 'Bantan', 'Bukit Batu', 'Mandau', 'Rupat', 'Rupat Utara', 'Siak Kecil', 'Pinggir', 'Bandar Laksamana', 'Talang Muandau', 'Bathin Solapan'],
      'Kab. Kepulauan Meranti': ['Merbau', 'Pulau Merbau', 'Rangsang', 'Rangsang Barat', 'Rangsang Pesisir', 'Tebing Tinggi', 'Tebing Tinggi Barat', 'Tebing Tinggi Timur', 'Tasik Putri Puyu'],
    }
  },
  'Sulawesi Barat': {
    lat: -2.840, lng: 119.232, kota: {
      'Kab. Mamuju': ['Mamuju', 'Simboro dan Kepulauan', 'Tapalang', 'Tapalang Barat', 'Kalukku', 'Kalumpang', 'Bonehau', 'Sampaga', 'Tommo', 'Papalang'],
      'Kab. Mamuju Tengah': ['Benteng', 'Budong-Budong', 'Pangale', 'Karossa', 'Tobadak', 'Topoyo'],
      'Kab. Pasangkayu': ['Pasangkayu', 'Sarjo', 'Bambalamotu', 'Bambaira', 'Pedongga', 'Tikke Raya', 'Bulu Taba', 'Baras', 'Sarudu', 'Dapurang', 'Lariang'],
      'Kab. Polewali Mandar': ['Polewali', 'Anreapi', 'Matakali', 'Tapango', 'Matangnga', 'Bulo', 'Mapilli', 'Luyo', 'Campalagian', 'Limboro', 'Tinambung', 'Balanipa', 'Alu', 'Tubbi Taramanu', 'Wonomulyo'],
      'Kab. Majene': ['Banggae', 'Banggae Timur', 'Pamboang', 'Sendana', 'Tammerodo Sendana', 'Tubo Sendana', 'Malunda', 'Ulumanda'],
      'Kab. Mamasa': ['Mamasa', 'Tawalian', 'Tanduk Kalua', 'Sesena Padang', 'Balla', 'Nosu', 'Pana', 'Tabang', 'Messawa', 'Sumarorong', 'Aralle', 'Mambi', 'Bambang', 'Rantebulahan Timur', 'Mehalaan', 'Tabulahan', 'Vari'],
    }
  },
  'Sulawesi Selatan': {
    lat: -3.666, lng: 119.974, kota: {
      'Kota Makassar': ['Biringkanaya', 'Bontoala', 'Makassar', 'Mamajang', 'Manggala', 'Mariso', 'Rappocini', 'Tallo', 'Tamalanrea', 'Tamalate', 'Ujung Pandang', 'Ujung Tanah', 'Panakkukang', 'Wajo', 'Sangkarrang'],
      'Kota Parepare': ['Bacukiki', 'Bacukiki Barat', 'Soreang', 'Ujung'],
      'Kota Palopo': ['Bara', 'Sendana', 'Tellu Wanua', 'Wara', 'Wara Barat', 'Wara Selatan', 'Wara Timur'],
      'Kab. Gowa': ['Biringbulu', 'Barombong', 'Bajeng', 'Bajeng Barat', 'Bontomarannu', 'Bontonompo', 'Bontonompo Selatan', 'Bungaya', 'Manuju', 'Pallangga', 'Parangloe', 'Pattallassang', 'Somba Opu', 'Tinggimoncong', 'Tompobulu', 'Tombolo Pao'],
      'Kab. Maros': ['Bantimurung', 'Bontoa', 'Camba', 'Cenrana', 'Lau', 'Mallawa', 'Mandai', 'Maros Baru', 'Marusu', 'Moncongloe', 'Simbang', 'Tanralili', 'Tompobulu', 'Turikale'],
      'Kab. Pangkajene dan Kepulauan': ['Balocci', 'Bungoro', 'Labakkang', 'Liukang Kalmas', 'Liukang Tangaya', 'Liukang Tupabbiring', "Ma'rang", 'Minasatene', 'Pangkajene', 'Segeri', 'Tondong Tallasa'],
      'Kab. Barru': ['Balusu', 'Barru', 'Mallusetasi', 'Pujananting', 'Soppeng Riaja', 'Tanete Riaja', 'Tanete Rilau'],
      'Kab. Bone': ['Ajangale', 'Amali', 'Awangpone', 'Barebbo', 'Bengo', 'Bontocani', 'Cenrana', 'Cina', 'Dua Boccoe', 'Kahu', 'Kajuara', 'Lamuru', 'Lappariaja', 'Libureng', 'Mare', 'Patimpeng', 'Ponre', 'Salomekko', 'Sibulue', 'Tanete Riattang', 'Tanete Riattang Barat', 'Tanete Riattang Timur', 'Tellu Limpoe', 'Tellu Siattinge', 'Tonra', 'Ulaweng'],
      'Kab. Soppeng': ['Citta', 'Donri Donri', 'Ganra', 'Lalabata', 'Liliriaja', 'Lilirilau', 'Marioriawa', 'Marioriwawo'],
      'Kab. Wajo': ['Belawa', 'Bola', 'Gilireng', 'Keera', 'Majauleng', 'Maniang Pajo', 'Pammana', 'Penrang', 'Pitumpanua', 'Sabbang Paru', 'Sajoanging', 'Takkalalla', 'Tanasitolo', 'Tempe'],
      'Kab. Sidrap': ['Baranti', 'Duapitue', 'Kulo', 'Maritengngae', 'Panca Lautang', 'Panca Rijang', 'Pitu Riase', 'Pitu Riawa', 'Tellu Limpoe', 'Watang Pulu', 'Watang Sidenreng'],
      'Kab. Pinrang': ['Batu Lappa', 'Duampanua', 'Lanrisang', 'Lembang', 'Mattiro Bulu', 'Mattiro Sompe', 'Paleteang', 'Patampanua', 'Pinrang', 'Suppa', 'Tiroang'],
      'Kab. Enrekang': ['Alla', 'Anggeraja', 'Baraka', 'Bungin', 'Cendana', 'Curio', 'Enrekang', 'Maiwa', 'Malua', 'Masalle'],
      'Kab. Luwu': ['Bajo', 'Bajo Barat', 'Bastem', 'Bastem Utara', 'Belopa', 'Belopa Utara', 'Bua', 'Bua Ponrang', 'Kamanre', 'Lamasi', 'Lamasi Timur', 'Larompong', 'Larompong Selatan', 'Latimojong', 'Ponrang', 'Ponrang Selatan', 'Suli', 'Suli Barat', 'Walenrang', 'Walenrang Barat', 'Walenrang Timur', 'Walenrang Utara'],
      'Kab. Luwu Utara': ['Baebunta', 'Bone-Bone', 'Malangke', 'Malangke Barat', 'Mappedeceng', 'Masamba', 'Rongkong', 'Sabbang', 'Seko', 'Sukamaju', 'Tanalili'],
      'Kab. Luwu Timur': ['Angkona', 'Burau', 'Malili', 'Mangkutana', 'Nuha', 'Towuti', 'Wasuponda', 'Wotu', 'Kalaena', 'Tomoni', 'Tomoni Timur'],
      'Kab. Tana Toraja': ['Bittuang', 'Bonggakaradeng', 'Gandangbatu Sillanan', 'Makale', 'Makale Utara', 'Makale Selatan', 'Mengkendek', 'Rembon', 'Saluputti', 'Sangalla', 'Sangalla Utara', 'Sangalla Selatan'],
      'Kab. Toraja Utara': ['Balusu', 'Bangkelekila', 'Buntao', 'Kesu', 'Nanggala', 'Rantepao', 'Sesean', 'Tallunglipu', 'Tikala'],
      'Kab. Sinjai': ['Bulupoddo', 'Pulau Sembilan', 'Sinjai Barat', 'Sinjai Borong', 'Sinjai Selatan', 'Sinjai Tengah', 'Sinjai Timur', 'Sinjai Utara', 'Tellu Limpoe'],
      'Kab. Bulukumba': ['Bonto Bahari', 'Bontotiro', 'Bulukumpa', 'Gantarang', 'Kajang', 'Kindang', 'Rilau Ale', 'Ujung Bulu', 'Ujung Loe'],
      'Kab. Bantaeng': ['Bantaeng', 'Bissappu', 'Eremerasa', 'Gantarangkeke', 'Pajukukang', 'Sinoa', 'Tompobulu', 'Uluere'],
      'Kab. Jeneponto': ['Arungkeke', 'Bangkala', 'Bangkala Barat', 'Batang', 'Binamu', 'Bontosunggu', 'Kelara', 'Rumbia', 'Tamalatea', 'Tarowang', 'Turatea'],
      'Kab. Takalar': ['Galesong', 'Galesong Selatan', 'Galesong Utara', 'Mappakasunggu', 'Mangarabombang', 'Pattallassang', 'Polombangkeng Selatan', 'Polombangkeng Utara'],
      'Kab. Kepulauan Selayar': ['Benteng', 'Bontoharu', 'Bontomatene', 'Bontosikuyu', 'Pasimarannu', 'Pasimasunggu', 'Pasimasunggu Timur', 'Takabonerate'],
    }
  },
  'Sulawesi Tengah': {
    lat: -1.431, lng: 121.445, kota: {
      'Kota Palu': ['Mantikulore', 'Palu Barat', 'Palu Selatan', 'Palu Timur', 'Palu Utara', 'Tatanga', 'Tawaeli', 'Ulujadi'],
      'Kab. Donggala': ['Banawa', 'Banawa Selatan', 'Banawa Tengah', 'Labuan', 'Sindue', 'Sirenja', 'Sojol', 'Tanantovea'],
      'Kab. Sigi': ['Biromaru', 'Dolo', 'Gumbasa', 'Kulawi', 'Lindu', 'Marawola', 'Nokilalaki', 'Pipikoro'],
      'Kab. Parigi Moutong': ['Ampibabo', 'Bolano', 'Kasimbar', 'Moutong', 'Parigi', 'Sausu', 'Tinombo', 'Torue'],
      'Kab. Poso': ['Lore Selatan', 'Lore Utara', 'Poso Kota', 'Poso Pesisir', 'Pamona', 'Wuasa'],
      'Kab. Tojo Una-Una': ['Ampana Kota', 'Ampana Tete', 'Ratolindo', 'Togean', 'Una-Una', 'Ulubongka'],
      'Kab. Banggai': ['Balantak', 'Batui', 'Bunta', 'Luwuk', 'Kintom', 'Lamala', 'Pagimana', 'Toili'],
      'Kab. Banggai Kepulauan': ['Buko', 'Bulagi', 'Liang', 'Tinangkung', 'Totikum'],
      'Kab. Banggai Laut': ['Banggai', 'Bangkurung', 'Bokan Kepulauan', 'Labobo'],
      'Kab. Morowali': ['Bahodopi', 'Bungku Barat', 'Bungku Pesisir', 'Bungku Selatan', 'Bungku Tengah', 'Menui Kepulauan'],
      'Kab. Morowali Utara': ['Lembo', 'Mori Atas', 'Mori Utara', 'Petasia', 'Soyo Jaya'],
      'Kab. Buol': ['Biau', 'Bokat', 'Bunobogu', 'Gadung', 'Karamat', 'Lakea', 'Momunu', 'Paleleh', 'Tiloan'],
      'Kab. Tolitoli': ['Baolan', 'Dondo', 'Galang', 'Lampasio', 'Ogodeide'],
    }
  },
  'Sulawesi Tenggara': {
    lat: -4.145, lng: 122.174, kota: {
      'Kota Kendari': ['Abeli', 'Baruga', 'Kadia', 'Kambu', 'Kendari', 'Kendari Barat', 'Mandonga', 'Poasia', 'Puuwatu', 'Wua-Wua'],
      'Kota Baubau': ['Batupoaro', 'Betoambari', 'Bungi', 'Kokalukuna', 'Murhum', 'Sorawolio', 'Wolio'],
      'Kab. Konawe': ['Unaaha', 'Abuki', 'Anggaberi', 'Besulutu', 'Pondidaha', 'Sampara', 'Wawotobi'],
      'Kab. Konawe Utara': ['Asera', 'Lasolo', 'Lembo', 'Molawe', 'Sawa', 'Wanggudu'],
      'Kab. Konawe Selatan': ['Andoolo', 'Baito', 'Konda', 'Kolono', 'Lainea', 'Tinanggea', 'Wolasi'],
      'Kab. Konawe Kepulauan': ['Wawonii Barat', 'Wawonii Selatan', 'Wawonii Tengah', 'Wawonii Timur'],
      'Kab. Kolaka': ['Kolaka', 'Latambaga', 'Pomalaa', 'Watubangga', 'Wundulako'],
      'Kab. Kolaka Utara': ['Lasusua', 'Ngapa', 'Pakue', 'Rante Angin', 'Watunohu'],
      'Kab. Kolaka Timur': ['Tirawuta', 'Ladongi', 'Lambandia', 'Loea', 'Mowewe', 'Poli-Polia'],
      'Kab. Muna': ['Raha', 'Batalaiworu', 'Katobu', 'Kontunaga', 'Kusambi', 'Watopute'],
      'Kab. Muna Barat': ['Lawa', 'Sawerigadi', 'Tiworo Kepulauan', 'Wadaga'],
      'Kab. Buton': ['Pasarwajo', 'Kapontori', 'Lasalimu', 'Wabula'],
      'Kab. Buton Utara': ['Buranga', 'Kulisusu', 'Kambowa', 'Wakorumba'],
      'Kab. Buton Selatan': ['Batauga', 'Kadatua', 'Sampolawa', 'Siompu'],
      'Kab. Buton Tengah': ['Labungkari', 'Lakudo', 'Mawasangka', 'Sangia Wambulu'],
      'Kab. Wakatobi': ['Wangi-Wangi', 'Kaledupa', 'Tomia', 'Binongko'],
      'Kab. Bombana': ['Kasipute', 'Kabaena', 'Poleang', 'Rarowatu', 'Rumbia'],
    }
  },
  'Sulawesi Utara': {
    lat: 0.627, lng: 124.021, kota: {
      'Kota Manado': ['Bunaken', 'Malalayang', 'Paal Dua', 'Sario', 'Singkil', 'Tikala', 'Tuminting', 'Wanea', 'Wenang'],
      'Kota Bitung': ['Aertembaga', 'Girian', 'Lembeh', 'Madidir', 'Maesa', 'Matuari', 'Ranowulu'],
      'Kota Tomohon': ['Tomohon Barat', 'Tomohon Selatan', 'Tomohon Tengah', 'Tomohon Timur', 'Tomohon Utara'],
      'Kota Kotamobagu': ['Kotamobagu Barat', 'Kotamobagu Selatan', 'Kotamobagu Timur', 'Kotamobagu Utara'],
      'Kab. Minahasa': ['Tondano', 'Kawangkoan', 'Langowan', 'Pineleng', 'Tombariri', 'Tombulu'],
      'Kab. Minahasa Utara': ['Airmadidi', 'Kauditan', 'Kema', 'Likupang', 'Talawaan', 'Wori'],
      'Kab. Minahasa Selatan': ['Amurang', 'Modoinding', 'Motoling', 'Tareran', 'Tumpaan'],
      'Kab. Minahasa Tenggara': ['Ratahan', 'Belang', 'Pusomaen', 'Tombatu', 'Touluaan'],
      'Kab. Bolaang Mongondow': ['Lolak', 'Dumoga', 'Sang Tombolang', 'Poigar'],
      'Kab. Bolaang Mongondow Utara': ['Boroko', 'Bolangitang', 'Kaidipang'],
      'Kab. Bolaang Mongondow Selatan': ['Molibagu', 'Bolaang Uki', 'Pinolosian'],
      'Kab. Bolaang Mongondow Timur': ['Tutuyan', 'Kotabunan', 'Modayag', 'Nuangan'],
      'Kab. Kepulauan Sangihe': ['Tahuna', 'Manganitu', 'Tamako', 'Tabukan'],
      'Kab. Kepulauan Talaud': ['Melonguane', 'Beo', 'Essang', 'Nanusa'],
      'Kab. Kepulauan Sitaro': ['Ondong Siau', 'Tagulandang', 'Biaro'],
    }
  },
  'Sumatera Barat': {
    lat: -0.739, lng: 100.800, kota: {
      'Kota Padang': ['Bungus Teluk Kabung', 'Koto Tangah', 'Kuranji', 'Lubuk Begalung', 'Lubuk Kilangan', 'Nanggalo', 'Padang Barat', 'Padang Selatan', 'Padang Timur', 'Padang Utara', 'Pauh'],
      'Kota Bukittinggi': ['Aur Birugo Tigo Baleh', 'Guguk Panjang', 'Mandiangin Koto Selayan'],
      'Kota Payakumbuh': ['Lamposi Tigo Nagori', 'Payakumbuh Barat', 'Payakumbuh Selatan', 'Payakumbuh Timur', 'Payakumbuh Utara'],
      'Kota Padang Panjang': ['Padang Panjang Barat', 'Padang Panjang Timur'],
      'Kota Pariaman': ['Pariaman Selatan', 'Pariaman Tengah', 'Pariaman Timur', 'Pariaman Utara'],
      'Kota Solok': ['Lubuk Sikarah', 'Tanjung Harapan'],
      'Kota Sawahlunto': ['Barangin', 'Lembah Segar', 'Silungkang', 'Talawi'],
      'Kab. Agam': ['Ampek Angkek', 'Ampek Nagari', 'Banuhampu', 'Baso', 'Canduang', 'IV Koto', 'Kamang Magek', 'Lubuk Basung', 'Malalak', 'Matur', 'Palembayan', 'Palupuh', 'Sungai Pua', 'Tanjung Mutiara', 'Tanjung Raya', 'Tilatung Kamang'],
      'Kab. Pasaman': ['Bonjol', 'Lubuk Sikaping', 'Panti', 'Mapat Tunggul', 'Mapat Tunggul Selatan', 'Padang Gelugur', 'Rao', 'Rao Selatan', 'Rao Utara', 'Simpang Alahan Mati', 'Tigo Nagari', 'Dua Koto'],
      'Kab. Pasaman Barat': ['Gunung Tuleh', 'Lembah Melintang', 'Luhak Nan Duo', 'Kinali', 'Pasaman', 'Ranah Batahan', 'Sasak Ranah Pasirie', 'Sungai Aur', 'Sungai Beremas', 'Talamau', 'Tuah Pejati'],
      'Kab. Tanah Datar': ['Batipuh', 'Batipuh Selatan', 'Lima Kaum', 'Lintau Buo', 'Lintau Buo Utara', 'Padang Ganting', 'Pariangan', 'Rambatan', 'Salimpaung', 'Sungai Tarab', 'Sungayang', 'Tanjung Baru', 'Tanjung Emas', 'X Koto'],
      'Kab. Padang Pariaman': ['2x11 Enam Lingkung', '2x11 Kayu Tanam', 'Enam Lingkung', 'Lubuk Alung', 'Nan Sabaris', 'Padang Sago', 'Patamuan', 'Sungai Geringging', 'Sungai Limau', 'Ulakan Tapakis', 'V Koto Kampung Dalam', 'V Koto Timur', 'VII Koto Sungai Sarik'],
      'Kab. Pesisir Selatan': ['Basa Ampek Balai Tapan', 'Bayang', 'IV Jurai', 'Koto XI Tarusan', 'Linggo Sari Baganti', 'Lunang', 'Pancung Soal', 'Ranah Pesisir', 'Silaut', 'Sutera', 'Lengayang'],
      'Kab. Solok': ['Bukit Sundi', 'Danau Kembar', 'Gunung Talang', 'Hiliran Gumanti', 'Kubung', 'Lembah Gumanti', 'Lembang Jaya', 'Pantai Cermin', 'Payung Sekaki', 'Tigo Lurah', 'X Koto Diatas', 'X Koto Singkarak'],
      'Kab. Solok Selatan': ['Koto Parik Gadang Diateh', 'Sangir', 'Sangir Balai Janggo', 'Sangir Batang Hari', 'Sangir Jujuan', 'Pauh Duo', 'Sungai Pagu'],
      'Kab. Sijunjung': ['IV Nagari', 'Kamang Baru', 'Koto VII', 'Kupitan', 'Lubuk Tarok', 'Sijunjung', 'Sumpur Kudus', 'Tanjung Gadang'],
      'Kab. Dharmasraya': ['Asam Jujuhan', 'Koto Baru', 'Koto Besar', 'Koto Salak', 'Padang Laweh', 'Pulau Punjung', 'Sembilan Koto', 'Sitiung', 'Sungai Rumbai', 'Timpeh', 'Tiumang'],
      'Kab. Lima Puluh Kota': ['Akabiluru', 'Bukit Barisan', 'Guguak', 'Gunuang Omeh', 'Harau', 'Kapur IX', 'Luak', 'Lareh Sago Halaban', 'Mungka', 'Pangkalan Koto Baru', 'Payakumbuh', 'Situjuah Limo Nagari', 'Suliki'],
      'Kab. Kepulauan Mentawai': ['Pagai Selatan', 'Pagai Utara', 'Sipora Selatan', 'Sipora Utara', 'Siberut Barat', 'Siberut Barat Daya', 'Siberut Selatan', 'Siberut Tengah', 'Siberut Utara', 'Sikakap'],
    }
  },
  'Sumatera Selatan': {
    lat: -3.316, lng: 103.914, kota: {
      'Kota Palembang': ['Alang-Alang Lebar', 'Bukit Kecil', 'Gandus', 'Ilir Barat I', 'Ilir Barat II', 'Ilir Timur I', 'Ilir Timur II', 'Ilir Timur III', 'Jakabaring', 'Kalidoni', 'Kemuning', 'Kertapati', 'Plaju', 'Sako', 'Seberang Ulu I', 'Seberang Ulu II', 'Sematang Borang', 'Sukarami'],
      'Kota Lubuklinggau': ['Lubuklinggau Barat I', 'Lubuklinggau Barat II', 'Lubuklinggau Selatan I', 'Lubuklinggau Selatan II', 'Lubuklinggau Timur I', 'Lubuklinggau Timur II', 'Lubuklinggau Utara I', 'Lubuklinggau Utara II'],
      'Kota Pagar Alam': ['Dempo Selatan', 'Dempo Tengah', 'Dempo Utara', 'Pagar Alam Selatan', 'Pagar Alam Utara'],
      'Kota Prabumulih': ['Cambai', 'Prabumulih Barat', 'Prabumulih Selatan', 'Prabumulih Timur', 'Prabumulih Utara', 'RKT'],
      'Kab. Banyuasin': ['Air Kumbang', 'Banyuasin I', 'Banyuasin II', 'Banyuasin III', 'Betung', 'Makarti Jaya', 'Muara Padang', 'Muara Telang', 'Rambutan', 'Rantau Bayur', 'Sembawa', 'Suak Tapeh', 'Talang Kelapa', 'Tanjung Lago', 'Tungkal Ilir'],
      'Kab. Musi Banyuasin': ['Babat Supat', 'Babat Toman', 'Batanghari Leko', 'Bayung Lencir', 'Keluang', 'Lais', 'Lalan', 'Lawang Wetan', 'Plakat Tinggi', 'Sanga Desa', 'Sekayu', 'Sungai Keruh', 'Tungkal Jaya'],
      'Kab. Musi Rawas': ['Jayaloka', 'Muara Beliti', 'Muara Lakitan', 'Muara Kelingi', 'Purwodadi', 'Selangit', 'Sukakarya', 'Tugumulyo', 'Tuah Negeri'],
      'Kab. Musi Rawas Utara': ['Karang Dapo', 'Karang Jaya', 'Rawas Ilir', 'Rawas Ulu', 'Rupit', 'Ulu Rawas', 'Nibung'],
      'Kab. Empat Lawang': ['Lintang Kanan', 'Muara Pinang', 'Pasemah Air Keruh', 'Pendopo', 'Pendopo Barat', 'Saling', 'Tebing Tinggi', 'Ulu Musi', 'Talang Padang'],
      'Kab. Lahat': ['Gumay Ulu', 'Jarai', 'Kikim Barat', 'Kikim Selatan', 'Kikim Tengah', 'Kikim Timur', 'Kota Agung', 'Lahat', 'Merapi Barat', 'Merapi Selatan', 'Merapi Timur', 'Mulak Ulu', 'Pajar Bulan', 'Pulau Pinang', 'Tanjung Sakti Pumu', 'Tanjung Sakti Pumi'],
      'Kab. Muara Enim': ['Belida Darat', 'Gelumbang', 'Gunung Megang', 'Lawang Kidul', 'Lembak', 'Lubai', 'Muara Belida', 'Muara Enim', 'Rambang', 'Rambang Niru', 'Semende Darat Laut', 'Semende Darat Tengah', 'Semende Darat Ulu', 'Tanjung Agung', 'Ujan Mas'],
      'Kab. PALI': ['Abab', 'Penukal', 'Penukal Utara', 'Talang Ubi', 'Tanah Abang'],
      'Kab. OKU': ['Baturaja Barat', 'Baturaja Timur', 'Lengkiti', 'Lubuk Batang', 'Lubuk Raja', 'Pengandonan', 'Peninjauan', 'Semidang Aji', 'Sosoh Buay Rayap', 'Ulu Ogan'],
      'Kab. OKU Timur': ['Belitang', 'Belitang II', 'Belitang III', 'Belitang Jaya', 'Belitang Madang Raya', 'Belitang Mulya', 'Buay Madang', 'Buay Madang Timur', 'Martapura', 'Semendawai Barat', 'Semendawai Timur', 'Semendawai Suku III'],
      'Kab. OKU Selatan': ['Banding Agung', 'Buay Pemaca', 'Buay Runjung', 'Buay Sandang Aji', 'Muaradua', 'Muaradua Kisam', 'Pulau Beringin', 'Simpang'],
      'Kab. OKI': ['Air Sugihan', 'Cengal', 'Jejawi', 'Kayu Agung', 'Lempuing', 'Lempuing Jaya', 'Mesuji', 'Mesuji Makmur', 'Mesuji Raya', 'Pampangan', 'Pedamaran', 'Pedamaran Timur', 'Sirah Pulau Padang', 'Tanjung Lubuk', 'Teluk Gelam', 'Tulung Selapan'],
      'Kab. Ogan Ilir': ['Indralaya', 'Indralaya Utara', 'Indralaya Selatan', 'Kandis', 'Pemulutan', 'Pemulutan Barat', 'Pemulutan Selatan', 'Rantau Alai', 'Rantau Panjang', 'Sungai Pinang', 'Tanjung Batu', 'Tanjung Raja'],
    }
  },
  'Sumatera Utara': {
    lat: 2.115, lng: 99.533, kota: {
      'Kota Medan': ['Medan Amplas', 'Medan Area', 'Medan Barat', 'Medan Baru', 'Medan Belawan', 'Medan Deli', 'Medan Denai', 'Medan Helvetia', 'Medan Johor', 'Medan Kota', 'Medan Labuhan', 'Medan Maimun', 'Medan Marelan', 'Medan Perjuangan', 'Medan Petisah', 'Medan Polonia', 'Medan Selayang', 'Medan Sunggal', 'Medan Tembung', 'Medan Timur', 'Medan Tuntungan'],
      'Kota Binjai': ['Binjai Barat', 'Binjai Kota', 'Binjai Selatan', 'Binjai Timur', 'Binjai Utara'],
      'Kota Tebing Tinggi': ['Bajenis', 'Padang Hilir', 'Padang Hulu', 'Rambutan', 'Tebing Tinggi Kota'],
      'Kota Pematangsiantar': ['Siantar Barat', 'Siantar Marihat', 'Siantar Marimbun', 'Siantar Martoba', 'Siantar Selatan', 'Siantar Timur', 'Siantar Utara', 'Siantar Sitalasari'],
      'Kota Tanjungbalai': ['Datuk Bandar', 'Datuk Bandar Timur', 'Sei Tualang Raso', 'Tanjungbalai Selatan', 'Tanjungbalai Utara', 'Teluk Nibung'],
      'Kota Sibolga': ['Sibolga Kota', 'Sibolga Sambas', 'Sibolga Selatan', 'Sibolga Utara'],
      'Kota Padangsidimpuan': ['Padangsidimpuan Angkola Julu', 'Padangsidimpuan Batunadua', 'Padangsidimpuan Hutaimbaru', 'Padangsidimpuan Selatan', 'Padangsidimpuan Tenggara', 'Padangsidimpuan Utara'],
      'Kota Gunungsitoli': ['Gunungsitoli Idanoi', 'Gunungsitoli Selatan', 'Gunungsitoli Utara', 'Gunungsitoli Barat'],
      'Kab. Deli Serdang': ['Bangun Purba', 'Batang Kuis', 'Beringin', 'Biru-Biru', 'Deli Tua', 'Galang', 'Gunung Meriah', 'Hamparan Perak', 'Kutalimbaru', 'Labuhan Deli', 'Lubuk Pakam', 'Namorambe', 'Pagar Merbau', 'Pancur Batu', 'Pantai Labu', 'Patumbak', 'Percut Sei Tuan', 'Sibolangit', 'Sunggal', 'Tanjung Morawa'],
      'Kab. Langkat': ['Babalan', 'Bahorok', 'Batang Serangan', 'Besitang', 'Binjai', 'Brandan Barat', 'Gebang', 'Hinai', 'Kuala', 'Kutambaru', 'Padang Tualang', 'Pangkalan Susu', 'Pematang Jaya', 'Salapian', 'Sawit Seberang', 'Secanggang', 'Sei Bingai', 'Sei Lepan', 'Selesai', 'Stabat', 'Tanjung Pura', 'Wampu'],
      'Kab. Karo': ['Barusjahe', 'Berastagi', 'Juhar', 'Kabanjahe', 'Kutabuluh', 'Laubaleng', 'Mardinding', 'Merdeka', 'Merek', 'Munthe', 'Payung', 'Simpang Empat', 'Tigabinanga', 'Tigapanah', 'Dolat Rayat'],
      'Kab. Simalungun': ['Bandar', 'Bandar Huluan', 'Bandar Masilam', 'Bosar Maligas', 'Dolok Batu Nanggar', 'Dolok Panribuan', 'Dolok Pardamean', 'Dolok Silau', 'Girsang Sipangan Bolon', 'Gunung Malela', 'Gunung Maligas', 'Haranggaol Horison', 'Hatonduhan', 'Hutabayu Raja', 'Purba', 'Raya', 'Siantar', 'Sidamanik', 'Silimakuta', 'Tanah Jawa', 'Tapian Dolok', 'Ujung Padang'],
      'Kab. Serdang Bedagai': ['Bandar Khalipah', 'Bintang Bayu', 'Dolok Masihul', 'Dolok Merawan', 'Kotarih', 'Pantai Cermin', 'Pegajahan', 'Perbaungan', 'Sei Bamban', 'Sei Rampah', 'Serba Jadi', 'Sipispis', 'Tanjung Beringin', 'Tebing Syahbandar', 'Tebing Tinggi', 'Teluk Mengkudu'],
      'Kab. Batu Bara': ['Air Putih', 'Lima Puluh', 'Medang Deras', 'Sei Balai', 'Sei Suka', 'Talawi', 'Tanjung Tiram'],
      'Kab. Asahan': ['Aek Kuasan', 'Aek Ledong', 'Aek Songsongan', 'Air Batu', 'Air Joman', 'Bandar Pasir Mandoge', 'Bandar Pulau', 'Buntu Pane', 'Kisaran Barat', 'Kisaran Timur', 'Meranti', 'Pulau Rakyat', 'Rawang Panca Arga', 'Sei Dadap', 'Sei Kepayang', 'Sei Kepayang Barat', 'Sei Kepayang Timur', 'Setia Janji', 'Silau Laut', 'Simpang Empat', 'Teluk Dalam', 'Tinggi Raja'],
      'Kab. Labuhanbatu': ['Bilah Barat', 'Bilah Hilir', 'Bilah Hulu', 'Panai Hilir', 'Panai Hulu', 'Panai Tengah', 'Pangkatan', 'Rantau Selatan', 'Rantau Utara'],
      'Kab. Labuhanbatu Utara': ['Aek Kuo', 'Aek Natas', 'Kualuh Hilir', 'Kualuh Hulu', 'Kualuh Leidong', 'Kualuh Selatan', 'Marbau', 'Na IX-X'],
      'Kab. Labuhanbatu Selatan': ['Kampung Rakyat', 'Kotapinang', 'Sei Kanan', 'Silangkitang', 'Torgamba'],
      'Kab. Dairi': ['Berampu', 'Gunung Sitember', 'Lae Parira', 'Parbuluan', 'Pegagan Hilir', 'Sidikalang', 'Siempat Nempu', 'Siempat Nempu Hilir', 'Siempat Nempu Hulu', 'Silahisabungan', 'Sumbul', 'Tanah Pinem', 'Tigalingga'],
      'Kab. Pakpak Bharat': ['Kerajaan', 'Pagindar', 'Salak', 'Siempat Rube', 'Sitellu Tali Urang Jehe', 'Sitellu Tali Urang Julu', 'Tinada'],
      'Kab. Samosir': ['Harian', 'Nainggolan', 'Onan Runggu', 'Palipi', 'Pangururan', 'Ronggur Nihuta', 'Sianjur Mulamula', 'Simanindo', 'Sitiotio'],
      'Kab. Toba': ['Ajibata', 'Balige', 'Borbor', 'Habinsaran', 'Laguboti', 'Lumban Julu', 'Nassau', 'Parmaksian', 'Pintu Pohan Meranti', 'Porsea', 'Siantar Narumonda', 'Sigumpar', 'Silaen', 'Tampahan', 'Uluan'],
      'Kab. Humbang Hasundutan': ['Baktiraja', 'Dolok Sanggul', 'Lintong Nihuta', 'Onan Ganjang', 'Pakkat', 'Paranginan', 'Parlilitan', 'Pollung', 'Sijamapolang', 'Tara Bintang'],
      'Kab. Tapanuli Utara': ['Adian Koting', 'Garoga', 'Muara', 'Pagaran', 'Pahae Jae', 'Pahae Julu', 'Pangaribuan', 'Parmonangan', 'Purbatua', 'Siatas Barita', 'Siborong-borong', 'Simangumban', 'Sipahutar', 'Sipoholon', 'Tarutung'],
      'Kab. Tapanuli Tengah': ['Barus', 'Barus Utara', 'Badiri', 'Kolang', 'Lumut', 'Manduamas', 'Pandan', 'Pinangsori', 'Sarudik', 'Sibabangun', 'Sirandorung', 'Sorkam', 'Sorkam Barat', 'Tapian Nauli', 'Tukka'],
      'Kab. Tapanuli Selatan': ['Angkola Barat', 'Angkola Muaratais', 'Angkola Sangkunur', 'Angkola Selatan', 'Angkola Timur', 'Arse', 'Batang Angkola', 'Batang Toru', 'Marancar', 'Muara Batang Toru', 'Saipar Dolok Hole', 'Sayur Matinggi', 'Sipirok', 'Tano Tombangan Angkola'],
      'Kab. Mandailing Natal': ['Batahan', 'Batang Natal', 'Bukit Malintang', 'Kotanopan', 'Lembah Sorik Marapi', 'Lingga Bayu', 'Muara Batang Gadis', 'Muara Sipongi', 'Naga Juang', 'Natal', 'Panyabungan', 'Panyabungan Barat', 'Panyabungan Kota', 'Panyabungan Selatan', 'Panyabungan Timur', 'Panyabungan Utara', 'Puncak Sorik Marapi', 'Ranto Baek', 'Siabu', 'Sinunukan', 'Tambangan'],
      'Kab. Padang Lawas': ['Barumun', 'Barumun Selatan', 'Barumun Tengah', 'Batang Lubu Sutam', 'Huristak', 'Huta Raja Tinggi', 'Lubuk Barumun', 'Sosopan', 'Ulu Barumun'],
      'Kab. Padang Lawas Utara': ['Batang Onang', 'Dolok', 'Dolok Sigompulon', 'Halongonan', 'Hulu Sihapas', 'Padang Bolak', 'Padang Bolak Julu', 'Portibi', 'Simangambat'],
      'Kab. Nias': ['Bawolato', 'Gido', 'Hiliduho', 'Hiliserangkai', 'Idanogawo', "Ma'u", 'Somolo-molo', 'Ulugawo'],
      'Kab. Nias Selatan': ['Amandraya', 'Fanayama', 'Gomo', 'Hibala', 'Lolomatua', 'Lolowau', 'Mazino', 'Pulau-Pulau Batu', 'Teluk Dalam'],
      'Kab. Nias Utara': ['Afulu', 'Alasa', 'Alasa Talumuzoi', 'Lahewa', 'Lahewa Timur', 'Lotu', 'Namohalu Esiwa', 'Sawo', 'Sitolu Ori', 'Tuhemberua'],
      'Kab. Nias Barat': ['Lahomi', 'Lolofitu Moi', 'Mandrehe', 'Mandrehe Barat', 'Mandrehe Utara', "Moro'o", 'Sirombu', "Ulu Moro'o"],
    }
  }
};

// ===== STATE =====
var allLaporan = [];
var curSev = '';
var curFilter = 'semua';
var ecoMap = null;
var heatLayer = null;
var markerList = [];
var heatOn = false;
var mapInited = false;
var charts = {};
var chatHist = [];
var isDark = true;
var poinLokal = 0;
try { poinLokal = parseInt(localStorage.getItem('eco_poin') || '0'); } catch(e) { poinLokal = 0; }

// ===== FIREBASE REALTIME LISTENER =====
function startListener() {
  db.collection('laporan').orderBy('ts', 'desc').onSnapshot(function(snap) {
    allLaporan = [];
    snap.forEach(function(doc) {
      var d = doc.data();
      d.id = doc.id;
      allLaporan.push(d);
    });
    updateStats();
    checkWarn();
    if (mapInited) refreshMarkers();
    var dp = document.getElementById('page-dashboard');
    if (dp && dp.classList.contains('active')) initCharts();
  }, function(err) {
    console.error('Firebase listener error:', err);
    setTimeout(startListener, 3000);
  });
}

// ===== NAVIGASI =====
function showPage(id) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(function(a) { a.classList.remove('active'); });
  var nl = document.getElementById('nav-' + id);
  if (nl) nl.classList.add('active');
  document.querySelectorAll('.mni').forEach(function(m) { m.classList.remove('active'); });
  var mn = document.getElementById('mnav-' + id);
  if (mn) mn.classList.add('active');
  if (id === 'peta') setTimeout(initMap, 200);
  if (id === 'dashboard') setTimeout(initCharts, 100);
  if (id === 'poin') initPoin();
  window.scrollTo(0, 0);
}

function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? '' : 'light');
  document.getElementById('themeBtn').textContent = isDark ? '🌙' : '☀️';
}

// ===== WARN =====
function checkWarn() {
  var pc = {};
  allLaporan.filter(function(l) {
    return l.sev === 'parah' && l.ts && (Date.now() - l.ts) < 86400000 * 7;
  }).forEach(function(l) {
    pc[l.prov] = (pc[l.prov] || 0) + 1;
  });
  var e = Object.keys(pc).map(function(k) { return [k, pc[k]]; }).sort(function(a, b) { return b[1] - a[1]; });
  var bar = document.getElementById('warn-bar');
  if (e.length > 0 && e[0][1] >= 2) {
    bar.classList.remove('hidden');
    document.getElementById('warn-txt').textContent = '⚠️ PERINGATAN: ' + e[0][0] + ' memiliki ' + e[0][1] + ' laporan PARAH dalam 7 hari terakhir!';
  } else {
    bar.classList.add('hidden');
  }
}

// ===== STATS =====
function updateStats() {
  var total = allLaporan.length;
  var week = allLaporan.filter(function(l) { return l.ts && (Date.now() - l.ts) < 86400000 * 7; }).length;
  var done = allLaporan.filter(function(l) { return l.done; }).length;
  var ps = {};
  allLaporan.forEach(function(l) { if (l.prov) ps[l.prov] = 1; });
  var provs = Object.keys(ps).length;
  function se(id, v) { var x = document.getElementById(id); if (x) x.textContent = v; }
  se('s-total', total); se('m-total', total);
  se('s-week', week); se('m-week', week);
  se('s-done', done); se('m-done', done);
  se('s-prov', provs); se('m-prov', provs);
}

// ===== FORM =====
function buildProvSelect() {
  var sel = document.getElementById('f-prov');
  Object.keys(LOKASI).sort().forEach(function(p) {
    var o = document.createElement('option');
    o.value = p; o.textContent = p;
    sel.appendChild(o);
  });
}

function onProvChange() {
  var prov = document.getElementById('f-prov').value;
  var ks = document.getElementById('f-kota');
  var ke = document.getElementById('f-kec');
  ks.innerHTML = '<option value="">— Pilih kota/kabupaten —</option>';
  ke.innerHTML = '<option value="">— Pilih kota dulu —</option>';
  ke.disabled = true;
  if (!prov) { ks.disabled = true; return; }
  ks.disabled = false;
  Object.keys(LOKASI[prov].kota).sort().forEach(function(k) {
    var o = document.createElement('option');
    o.value = k; o.textContent = k;
    ks.appendChild(o);
  });
}

function onKotaChange() {
  var prov = document.getElementById('f-prov').value;
  var kota = document.getElementById('f-kota').value;
  var ke = document.getElementById('f-kec');
  ke.innerHTML = '<option value="">— Pilih kecamatan —</option>';
  if (!prov || !kota || !LOKASI[prov] || !LOKASI[prov].kota[kota]) { ke.disabled = true; return; }
  ke.disabled = false;
  LOKASI[prov].kota[kota].sort().forEach(function(k) {
    var o = document.createElement('option');
    o.value = k; o.textContent = k;
    ke.appendChild(o);
  });
}

function setSev(s, btn) {
  curSev = s;
  document.querySelectorAll('.sev-btn').forEach(function(b) { b.className = 'sev-btn'; });
  btn.classList.add('sv-' + s);
}

function getGPS() {
  if (!navigator.geolocation) { alert('GPS tidak tersedia.'); return; }
  var btn = document.querySelector('.btn-gps');
  btn.textContent = '⏳';
  navigator.geolocation.getCurrentPosition(
    function(p) {
      document.getElementById('f-lokasi').value = p.coords.latitude.toFixed(5) + ', ' + p.coords.longitude.toFixed(5);
      btn.textContent = '📍 GPS';
    },
    function() {
      document.getElementById('f-lokasi').value = 'GPS gagal — isi manual';
      btn.textContent = '📍 GPS';
    }
  );
}

// ===== SUBMIT LAPORAN =====
function submitLaporan() {
  var jenis = document.getElementById('f-jenis').value;
  var prov  = document.getElementById('f-prov').value;
  var kota  = document.getElementById('f-kota').value;
  var kec   = document.getElementById('f-kec').value;

  if (!jenis || !prov || !kota || !kec || !curSev) {
    showToast('Lengkapi semua field: Jenis Masalah, Provinsi, Kota, Kecamatan, dan Tingkat Keparahan.', 'err');
    return;
  }

  var base  = LOKASI[prov] ? [LOKASI[prov].lat, LOKASI[prov].lng] : [-2.5, 118];
  var nama  = document.getElementById('f-nama').value.trim() || 'Anonim';
  var desc  = document.getElementById('f-desc').value.trim() || 'Tidak ada deskripsi.';
  var lokasi = document.getElementById('f-lokasi').value.trim() || '-';

  var lap = {
    jenis: jenis, prov: prov, kota: kota, kec: kec, lokasi: lokasi,
    lat: base[0] + (Math.random() - 0.5) * 0.3,
    lng: base[1] + (Math.random() - 0.5) * 0.3,
    sev: curSev, desc: desc, nama: nama,
    ts: Date.now(), done: false
  };

  // Optimistic update
  lap.id = 'tmp_' + Date.now();
  allLaporan.unshift(lap);
  updateStats();
  checkWarn();

  // Tambah poin
  poinLokal += 15;
  try { localStorage.setItem('eco_poin', String(poinLokal)); } catch(e) {}

  resetForm();
  showToast('✅ Laporan terkirim! +15 poin 🌿', 'ok');
  showPage('peta');

  // Kirim email di background
  kirimEmailLaporan(lap);

  // Kirim ke Firebase
  var lapFirebase = {
    jenis: lap.jenis, prov: lap.prov, kota: lap.kota, kec: lap.kec,
    lokasi: lap.lokasi, lat: lap.lat, lng: lap.lng, sev: lap.sev,
    desc: lap.desc, nama: lap.nama, ts: lap.ts, done: lap.done
  };

  db.collection('laporan').add(lapFirebase).then(function(docRef) {
    var idx = allLaporan.findIndex(function(l) { return l.id === lap.id; });
    if (idx >= 0) allLaporan[idx].id = docRef.id;
  }).catch(function(err) {
    console.error('Firebase write error:', err);
    allLaporan = allLaporan.filter(function(l) { return l.id !== lap.id; });
    updateStats();
    checkWarn();
  });
}

function resetForm() {
  ['f-jenis','f-prov','f-lokasi','f-desc','f-nama'].forEach(function(id) {
    var x = document.getElementById(id);
    if (x) x.value = '';
  });
  var ks = document.getElementById('f-kota');
  ks.innerHTML = '<option value="">— Pilih provinsi dulu —</option>';
  ks.disabled = true;
  var ke = document.getElementById('f-kec');
  ke.innerHTML = '<option value="">— Pilih kota dulu —</option>';
  ke.disabled = true;
  document.querySelectorAll('.sev-btn').forEach(function(b) { b.className = 'sev-btn'; });
  curSev = '';
}

function showToast(msg, type) {
  var t = document.getElementById('toast');
  if (!t) return;
  t.className = 'toast ' + type;
  t.textContent = msg;
  t.style.display = 'block';
  setTimeout(function() { t.style.display = 'none'; }, 4000);
}

// ===== KIRIM EMAIL (FIXED) =====
function kirimEmailLaporan(lap) {
  var attempt = 0;

  function tryKirim() {
    attempt++;
    if (typeof emailjs === 'undefined' || typeof emailjs.send !== 'function') {
      if (attempt < 15) {
        setTimeout(tryKirim, 500);
      } else {
        console.error('❌ EmailJS tidak tersedia setelah 7.5 detik');
      }
      return;
    }

    // Re-init untuk pastikan key terpasang
    try { emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY }); } catch(e) {}

    var sevLabel = lap.sev === 'parah' ? '🔴 PARAH' : lap.sev === 'sedang' ? '🟡 SEDANG' : '🟢 RINGAN';
    var tgl = new Date(lap.ts).toLocaleString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });

    // Semua kemungkinan variable name yang umum dipakai di template EmailJS
    var params = {
      // Tujuan & pengirim
      to_email    : EMAIL_TUJUAN,
      to_name     : 'Admin EcoSense',
      from_name   : 'EcoSense Indonesia',
      reply_to    : EMAIL_TUJUAN,
      email       : EMAIL_TUJUAN,

      // Data laporan — semua versi alias
      nama        : lap.nama,
      name        : lap.nama,
      pelapor     : lap.nama,

      jenis       : lap.jenis,
      jenis_masalah: lap.jenis,
      issue       : lap.jenis,

      sev         : sevLabel,
      severity    : sevLabel,
      keparahan   : sevLabel,
      tingkat     : sevLabel,

      prov        : lap.prov,
      provinsi    : lap.prov,
      province    : lap.prov,

      kota        : lap.kota,
      city        : lap.kota,

      kec         : lap.kec,
      kecamatan   : lap.kec,
      district    : lap.kec,

      lokasi      : lap.lokasi,
      alamat      : lap.lokasi,
      address     : lap.lokasi,
      location    : lap.lokasi,

      desc        : lap.desc,
      deskripsi   : lap.desc,
      description : lap.desc,
      message_body: lap.desc,

      tgl         : tgl,
      tanggal     : tgl,
      date        : tgl,
      waktu       : tgl,

      // Satu field ringkas — pakai {{message}} di template
      message:
        '📋 LAPORAN BARU — ECOSENSE INDONESIA\n' +
        '══════════════════════════════════\n' +
        '👤 Pelapor   : ' + lap.nama + '\n' +
        '🔍 Jenis     : ' + lap.jenis + '\n' +
        '⚠️  Keparahan : ' + sevLabel + '\n' +
        '🏛️  Provinsi  : ' + lap.prov + '\n' +
        '🏙️  Kota/Kab  : ' + lap.kota + '\n' +
        '📍 Kecamatan : ' + lap.kec + '\n' +
        '🗺️  Lokasi    : ' + lap.lokasi + '\n' +
        '📝 Deskripsi : ' + lap.desc + '\n' +
        '🕐 Waktu     : ' + tgl + '\n' +
        '══════════════════════════════════\n' +
        'Dikirim otomatis oleh EcoSense Indonesia'
    };

    console.log('📧 Mengirim email laporan...');
    console.log('   Service :', EMAILJS_SERVICE_ID);
    console.log('   Template:', EMAILJS_TEMPLATE_ID);
    console.log('   Tujuan  :', EMAIL_TUJUAN);

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
      .then(function(res) {
        console.log('✅ Email berhasil terkirim! Status:', res.status, res.text);
      })
      .catch(function(err) {
        console.error('❌ Email gagal:', JSON.stringify(err));
        // Retry sekali lagi setelah 5 detik
        if (attempt <= 2) {
          console.log('🔄 Retry kirim email dalam 5 detik...');
          setTimeout(tryKirim, 5000);
        }
      });
  }

  // Mulai setelah 500ms
  setTimeout(tryKirim, 500);
}

// ===== RESET SEMUA DATA (ADMIN) =====
function resetSemuaData() {
  var total = allLaporan.filter(function(l) { return l.id && !l.id.startsWith('tmp_'); }).length;

  if (total === 0) {
    alert('Tidak ada data di Firebase untuk dihapus. Data lokal sudah kosong.');
    return;
  }

  var ok1 = window.confirm(
    '⚠️  RESET DATA FIREBASE\n\n' +
    'Kamu akan menghapus SEMUA ' + total + ' laporan dari database.\n\n' +
    'Tindakan ini TIDAK BISA DIBATALKAN!\n\n' +
    'Klik OK untuk lanjut ke konfirmasi kedua.'
  );
  if (!ok1) return;

  var ok2 = window.confirm(
    '🔴 KONFIRMASI AKHIR\n\n' +
    'Yakin 100% ingin menghapus ' + total + ' laporan?\n\n' +
    'Setelah ini data statistik kembali ke NOL.'
  );
  if (!ok2) return;

  var btn = document.getElementById('btn-reset-data');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Menghapus...'; }

  var ids = allLaporan
    .map(function(l) { return l.id; })
    .filter(function(id) { return id && !id.startsWith('tmp_'); });

  var deleted = 0, errors = 0;

  if (ids.length === 0) {
    selesaiReset(0, 0, btn);
    return;
  }

  ids.forEach(function(id) {
    db.collection('laporan').doc(id).delete()
      .then(function() {
        deleted++;
        if (btn) btn.textContent = '⏳ ' + deleted + '/' + ids.length + '...';
        if (deleted + errors === ids.length) selesaiReset(deleted, errors, btn);
      })
      .catch(function(err) {
        errors++;
        console.error('Gagal hapus', id, err);
        if (deleted + errors === ids.length) selesaiReset(deleted, errors, btn);
      });
  });
}

function selesaiReset(deleted, errors, btn) {
  // Reset state lokal
  allLaporan = [];
  poinLokal = 0;
  try { localStorage.setItem('eco_poin', '0'); } catch(e) {}

  updateStats();
  checkWarn();
  if (mapInited) refreshMarkers();

  // Reset chart
  var chEl = document.getElementById('dash-charts');
  var emEl = document.getElementById('dash-empty');
  if (chEl) chEl.style.display = 'none';
  if (emEl) emEl.style.display = 'block';

  if (btn) {
    btn.textContent = '✅ Reset selesai!';
    setTimeout(function() {
      btn.textContent = '🗑️ Reset Semua Data';
      btn.disabled = false;
    }, 3000);
  }

  alert(
    '✅ Reset selesai!\n\n' +
    '📊 ' + deleted + ' laporan dihapus dari Firebase' +
    (errors > 0 ? '\n⚠️ ' + errors + ' gagal dihapus' : '') + '\n\n' +
    'Semua statistik kembali ke nol.\nPoin kamu juga direset ke 0.'
  );
}

// ===== PETA =====
function initMap() {
  var emEl = document.getElementById('peta-empty');
  var mpEl = document.getElementById('map');

  if (allLaporan.length === 0) {
    emEl.classList.add('show');
    mpEl.style.display = 'none';
    return;
  }

  emEl.classList.remove('show');
  mpEl.style.display = 'block';

  if (mapInited) {
    setTimeout(function() { ecoMap.invalidateSize(); refreshMarkers(); }, 200);
    return;
  }

  mapInited = true;
  ecoMap = L.map('map', { zoomControl: true }).setView([-2.5, 118], 5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors', maxZoom: 19
  }).addTo(ecoMap);

  setTimeout(function() { ecoMap.invalidateSize(); refreshMarkers(); }, 300);
}

function getColor(s) {
  return s === 'parah' ? '#ff5c5c' : s === 'sedang' ? '#ffb74d' : '#4ac571';
}

function refreshMarkers() {
  if (!ecoMap) return;
  markerList.forEach(function(m) { ecoMap.removeLayer(m); });
  markerList = [];
  if (heatLayer) { ecoMap.removeLayer(heatLayer); heatLayer = null; }

  var kw = (document.getElementById('search-peta') ? document.getElementById('search-peta').value : '').toLowerCase();
  var fil = allLaporan.filter(function(l) {
    var mf = curFilter === 'semua' ? true :
      curFilter === 'parah'  ? l.sev === 'parah' :
      curFilter === 'sedang' ? l.sev === 'sedang' :
      curFilter === 'ringan' ? l.sev === 'ringan' :
      curFilter === 'polusi' ? (l.jenis && (l.jenis.indexOf('Polusi') >= 0 || l.jenis.indexOf('udara') >= 0)) :
      curFilter === 'sampah' ? (l.jenis && (l.jenis.indexOf('Sampah') >= 0 || l.jenis.indexOf('sampah') >= 0)) :
      curFilter === 'hutan'  ? (l.jenis && l.jenis.indexOf('hutan') >= 0) : true;
    var ms = !kw ||
      (l.prov && l.prov.toLowerCase().indexOf(kw) >= 0) ||
      (l.kota && l.kota.toLowerCase().indexOf(kw) >= 0) ||
      (l.kec  && l.kec.toLowerCase().indexOf(kw) >= 0);
    return mf && ms;
  });

  var hd = [];
  fil.forEach(function(l) {
    var c = getColor(l.sev);
    var icon = L.divIcon({
      html: '<div style="width:13px;height:13px;border-radius:50%;background:' + c + ';border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',
      iconSize: [13,13], iconAnchor: [6,6], className: ''
    });
    var m = L.marker([l.lat, l.lng], { icon: icon }).addTo(ecoMap);
    var tgl = l.ts ? new Date(l.ts).toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric' }) : '-';
    m.bindPopup(
      '<div style="font-family:DM Sans,sans-serif;min-width:220px;padding:4px">' +
      '<div style="font-weight:700;font-size:14px;margin-bottom:6px">' + (l.jenis||'') + '</div>' +
      '<div style="font-size:12px;color:#666;margin-bottom:2px">🏛️ ' + (l.prov||'') + '</div>' +
      '<div style="font-size:12px;color:#666;margin-bottom:2px">🏙️ ' + (l.kota||'') + ' — ' + (l.kec||'') + '</div>' +
      '<div style="font-size:12px;color:#666;margin-bottom:6px">📍 ' + (l.lokasi||'') + '</div>' +
      '<div style="font-size:13px;margin-bottom:8px">' + (l.desc||'') + '</div>' +
      '<div style="display:flex;justify-content:space-between;font-size:11px;color:#888;margin-bottom:7px">' +
      '<span>👤 ' + (l.nama||'Anonim') + '</span><span>' + tgl + '</span></div>' +
      '<span style="padding:3px 10px;border-radius:12px;font-size:11px;font-weight:700;' +
      'background:' + (l.sev==='parah'?'#fff0f0':l.sev==='sedang'?'#fff8e1':'#f0fff4') + ';color:' + c + '">' +
      (l.sev||'').toUpperCase() + (l.done?' ✓ Ditangani':'') + '</span></div>'
    );
    markerList.push(m);
    hd.push([l.lat, l.lng, l.sev==='parah'?.9:l.sev==='sedang'?.5:.25]);
  });

  if (heatOn && hd.length > 0) {
    heatLayer = L.heatLayer(hd, {
      radius: 40, blur: 25, maxZoom: 17,
      gradient: {0.2:'#4ac571', 0.5:'#ffb74d', 0.8:'#ff5c5c'}
    }).addTo(ecoMap);
  }

  var emEl2 = document.getElementById('peta-empty');
  var mpEl2 = document.getElementById('map');
  if (allLaporan.length === 0) {
    emEl2.classList.add('show'); mpEl2.style.display = 'none';
  } else {
    emEl2.classList.remove('show'); mpEl2.style.display = 'block';
  }
}

function filterMap(f, btn) {
  curFilter = f;
  document.querySelectorAll('.fbtn').forEach(function(b) { b.classList.remove('active','fp','fs'); });
  btn.classList.add('active');
  if (f === 'parah') btn.classList.add('fp');
  if (f === 'sedang') btn.classList.add('fs');
  refreshMarkers();
}

function toggleHeat() {
  heatOn = !heatOn;
  var hb = document.getElementById('heat-btn');
  if (hb) hb.classList.toggle('active', heatOn);
  refreshMarkers();
}

function searchMap() { refreshMarkers(); }

// ===== DASHBOARD =====
function initCharts() {
  var emEl = document.getElementById('dash-empty');
  var chEl = document.getElementById('dash-charts');
  if (allLaporan.length === 0) {
    emEl.style.display = 'block'; chEl.style.display = 'none'; return;
  }
  emEl.style.display = 'none'; chEl.style.display = 'block';

  var gc = 'rgba(74,197,113,.08)', tc = '#7fa87f';
  function bo(ax) {
    var o = { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}} };
    if (ax !== false) {
      o.scales = {
        x: { grid:{color:gc}, ticks:{color:tc, font:{size:10}} },
        y: { grid:{color:gc}, ticks:{color:tc, font:{size:10}}, beginAtZero:true }
      };
    }
    return o;
  }

  if (charts.line)  { charts.line.destroy();  charts.line  = null; }
  if (charts.donut) { charts.donut.destroy(); charts.donut = null; }
  if (charts.bar)   { charts.bar.destroy();   charts.bar   = null; }

  var now = Date.now();
  var wd = [0,0,0,0,0,0,0];
  allLaporan.forEach(function(l) {
    if (!l.ts) return;
    var w = Math.floor((now - l.ts) / (86400000 * 7));
    if (w < 7) wd[6 - w]++;
  });
  charts.line = new Chart(document.getElementById('chartLine'), {
    type: 'line',
    data: {
      labels: ['6 mgg lalu','5 mgg lalu','4 mgg lalu','3 mgg lalu','2 mgg lalu','Mgg lalu','Mgg ini'],
      datasets: [{
        data: wd, borderColor:'#4ac571', backgroundColor:'rgba(74,197,113,.1)',
        borderWidth:2, fill:true, tension:0.4, pointBackgroundColor:'#4ac571', pointRadius:4
      }]
    },
    options: bo()
  });

  var jl = ['Polusi','Sampah','Air/Sungai','Limbah Ind.','Banjir','Hutan','Laut/Pesisir','Limbah B3','Lainnya'];
  var jd = [0,0,0,0,0,0,0,0,0];
  allLaporan.forEach(function(l) {
    if (!l.jenis) return;
    var j = l.jenis;
    if      (j.indexOf('udara')>=0||j.indexOf('Polusi')>=0) jd[0]++;
    else if (j.indexOf('Sampah')>=0||j.indexOf('sampah')>=0) jd[1]++;
    else if (j.indexOf('air')>=0||j.indexOf('Sungai')>=0) jd[2]++;
    else if (j.indexOf('industri')>=0) jd[3]++;
    else if (j.indexOf('Banjir')>=0) jd[4]++;
    else if (j.indexOf('hutan')>=0) jd[5]++;
    else if (j.indexOf('laut')>=0||j.indexOf('pesisir')>=0) jd[6]++;
    else if (j.indexOf('B3')>=0) jd[7]++;
    else jd[8]++;
  });
  charts.donut = new Chart(document.getElementById('chartDonut'), {
    type: 'doughnut',
    data: {
      labels: jl,
      datasets: [{
        data: jd,
        backgroundColor: ['#4ac571','#64b5f6','#ffb74d','#ff5c5c','#ce93d8','#80cbc4','#f48fb1','#e57373','#bcaaa4'],
        borderWidth: 0
      }]
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{position:'bottom', labels:{color:tc, font:{size:10}, boxWidth:11}}}
    }
  });

  var pm = {
    'Sumatera': ['Aceh','Sumatera Utara','Sumatera Barat','Riau','Jambi','Sumatera Selatan','Bengkulu','Lampung','Bangka Belitung','Kepulauan Riau'],
    'Jawa':     ['DKI Jakarta','Jawa Barat','Jawa Tengah','DI Yogyakarta','Jawa Timur','Banten'],
    'Kalimantan': ['Kalimantan Barat','Kalimantan Tengah','Kalimantan Selatan','Kalimantan Timur','Kalimantan Utara'],
    'Sulawesi': ['Sulawesi Utara','Sulawesi Tengah','Sulawesi Selatan','Sulawesi Tenggara','Gorontalo','Sulawesi Barat'],
    'Bali & Nusa': ['Bali','NTB','NTT'],
    'Maluku':   ['Maluku','Maluku Utara'],
    'Papua':    ['Papua Barat','Papua','Papua Barat Daya','Papua Tengah','Papua Selatan','Papua Pegunungan']
  };
  var pl = Object.keys(pm);
  var pd = pl.map(function(p) {
    return allLaporan.filter(function(l) { return pm[p].indexOf(l.prov) >= 0; }).length;
  });
  charts.bar = new Chart(document.getElementById('chartBar'), {
    type: 'bar',
    data: {
      labels: pl,
      datasets: [{
        data: pd,
        backgroundColor: pd.map(function(v) { return v>=5?'#ff5c5c':v>=2?'#ffb74d':'#4ac571'; }),
        borderRadius: 6
      }]
    },
    options: bo()
  });

  var np = {}, npv = {};
  allLaporan.forEach(function(l) {
    if (l.nama && l.nama !== 'Anonim') {
      np[l.nama]  = (np[l.nama]  || 0) + 15;
      npv[l.nama] = l.prov;
    }
  });
  var rk = Object.keys(np).map(function(n) { return {n:n, p:np[n], v:npv[n]}; })
    .sort(function(a,b) { return b.p - a.p; }).slice(0, 10);
  var rks = ['g','s','b','','','','','','',''];
  document.getElementById('lb-list').innerHTML = rk.length === 0
    ? '<div style="text-align:center;padding:20px;color:var(--text2);font-size:13px">Belum ada pelapor terdaftar. Isi namamu saat laporan!</div>'
    : rk.map(function(x,i) {
        return '<div class="lb-item"><div class="lb-rank '+(rks[i]||'')+'">'+( i+1)+'</div>' +
          '<div><div class="lb-name">'+x.n+'</div><div class="lb-loc">📍 '+x.v+'</div></div>' +
          '<div class="lb-pts">'+x.p+' pts</div></div>';
      }).join('');
}

// ===== EDUKASI =====
var EDU = [
  { tag:'Sampah', e:'🗑️', t:'Cara Pilah Sampah yang Benar',
    b:'<p>Indonesia menghasilkan lebih dari 60 juta ton sampah per tahun. Memilah sampah adalah langkah pertama yang paling penting.</p><p><strong>3 Kategori Utama:</strong></p><ul><li><strong>Sampah Organik</strong> — sisa makanan, daun kering. Jadikan kompos.</li><li><strong>Sampah Anorganik</strong> — plastik, kertas, kaca, logam. Daur ulang di bank sampah.</li><li><strong>Sampah B3</strong> — baterai, obat kadaluarsa, cat. Buang ke tempat khusus.</li></ul><p>Mulai dari dua tempat sampah di rumah. Ikut bank sampah terdekat!</p>' },
  { tag:'Polusi Udara', e:'🌫️', t:'Bahaya Kabut Asap & Karhutla',
    b:'<p>Kebakaran hutan dan lahan (karhutla) di Sumatera dan Kalimantan setiap musim kemarau menghasilkan kabut asap yang menyerang jutaan warga.</p><ul><li>PM2.5 — partikel super halus yang masuk ke paru-paru</li><li>Karbon monoksida (CO) — menghambat pengangkutan oksigen darah</li><li>Dioksin dari pembakaran gambut</li></ul><p><strong>Cara melindungi diri:</strong> Masker N95, tutup jendela, pantau indeks kualitas udara secara berkala.</p>' },
  { tag:'Air Bersih', e:'💧', t:'Menjaga Sumber Air Indonesia',
    b:'<p>Sungai Citarum di Jawa Barat pernah menjadi salah satu sungai paling tercemar di dunia. Sungai Siak, Musi, dan ribuan sungai lain juga terancam.</p><ul><li>Limbah industri tekstil dan manufaktur</li><li>Limbah pertanian — pestisida dan pupuk kimia</li><li>Sampah plastik dari permukiman tepian sungai</li></ul><p>Jangan buang sampah ke sungai. Laporkan pencemaran lewat EcoSense!</p>' },
  { tag:'Hutan', e:'🌴', t:'Deforestasi & Krisis Hutan Tropis',
    b:'<p>Indonesia memiliki hutan tropis terluas ketiga di dunia. Namun deforestasi terus mengancam dari perkebunan sawit dan tambang.</p><ul><li>Kalimantan dan Papua — epicentrum kehilangan hutan terbesar</li><li>Orangutan, Harimau Sumatera, ratusan spesies lain terancam punah</li><li>Gambut yang terbakar melepaskan karbon yang tersimpan ribuan tahun</li></ul><p>Dukung produk bersertifikat ramah lingkungan!</p>' },
  { tag:'Laut & Pesisir', e:'🌊', t:'Krisis Sampah Plastik di Laut Indonesia',
    b:'<p>Indonesia masuk daftar penyumbang sampah plastik laut terbesar di dunia, dengan lebih dari 17.000 pulau yang terancam.</p><ul><li>Mematikan penyu, lumba-lumba, dan paus yang menelannya</li><li>Mikroplastik masuk ke rantai makanan dan tubuh manusia</li><li>Merusak terumbu karang dan ekosistem pesisir</li></ul><p>Bawa tas sendiri. Ikut kegiatan bersih pantai di kotamu!</p>' },
  { tag:'Jejak Karbon', e:'🌿', t:'Jejak Karbon & Perubahan Iklim Indonesia',
    b:'<p>Beberapa wilayah pesisir Indonesia sudah mulai tenggelam akibat kenaikan muka air laut. Perubahan iklim bukan ancaman masa depan — ini sedang terjadi sekarang.</p><p><strong>5 langkah mengurangi jejak karbonmu:</strong></p><ul><li>Naik transportasi umum atau sepeda</li><li>Hemat listrik — matikan yang tidak dipakai</li><li>Kurangi konsumsi daging merah</li><li>Pilih produk lokal untuk kurangi emisi transportasi</li><li>Tanam pohon di sekitar rumah</li></ul>' }
];

function openEdu(i) {
  var d = EDU[i];
  document.getElementById('edu-content').innerHTML = '<span class="edu-tag">'+d.tag+'</span><h2>'+d.e+' '+d.t+'</h2>'+d.b;
  document.getElementById('edu-ov').classList.add('open');
}
function closeEduOv(e) { if (e.target === document.getElementById('edu-ov')) closeEduBtn(); }
function closeEduBtn() { document.getElementById('edu-ov').classList.remove('open'); }

// ===== POIN =====
var BADGES = [
  {e:'🌱', n:'Pelapor Pertama',     d:'Kirim laporan pertama',  min:15},
  {e:'🌿', n:'Warga Peduli',        d:'Capai 50 poin',          min:50},
  {e:'🌳', n:'Pahlawan Lokal',      d:'Capai 150 poin',         min:150},
  {e:'🏆', n:'Guardian Lingkungan', d:'Capai 300 poin',         min:300},
  {e:'💚', n:'Eco Ambassador',      d:'Capai 500 poin',         min:500},
  {e:'🌍', n:'Penyelamat Bumi',     d:'Capai 1000 poin',        min:1000}
];

function initPoin() {
  document.getElementById('poin-angka').textContent = poinLokal;
  var nama = '';
  try { nama = localStorage.getItem('eco_nama') || ''; } catch(e) {}
  if (nama) document.getElementById('poin-nama').textContent = nama;

  var lv = poinLokal>=1000?'Penyelamat Bumi':poinLokal>=500?'Eco Ambassador':poinLokal>=300?'Guardian Lingkungan':poinLokal>=150?'Pahlawan Lokal':poinLokal>=50?'Warga Peduli':'Pemula Hijau';
  document.getElementById('poin-level').textContent = lv;
  var nx = poinLokal>=1000?2000:poinLokal>=500?1000:poinLokal>=300?500:poinLokal>=150?300:poinLokal>=50?150:50;
  document.getElementById('poin-bar').style.width = Math.min(100, Math.round(poinLokal/nx*100)) + '%';
  document.getElementById('poin-next').textContent = poinLokal + '/' + nx + ' poin menuju level berikutnya';
  document.getElementById('badge-grid').innerHTML = BADGES.map(function(b) {
    var on = poinLokal >= b.min;
    return '<div class="badge-item '+(on?'on':'badge-off')+'"><span class="badge-emoji">'+b.e+'</span><div class="badge-name">'+b.n+'</div><div class="badge-desc">'+b.d+'</div></div>';
  }).join('');
}

// ===== SERTIFIKAT =====
function generateCert() {
  var cv = document.getElementById('cert-canvas');
  cv.style.display = 'block';
  var ctx = cv.getContext('2d'), w = 800, h = 500;
  ctx.fillStyle = '#071a0d'; ctx.fillRect(0,0,w,h);
  ctx.strokeStyle = '#4ac571'; ctx.lineWidth = 5; ctx.strokeRect(16,16,w-32,h-32);
  ctx.strokeStyle = 'rgba(74,197,113,.25)'; ctx.lineWidth = 1; ctx.strokeRect(28,28,w-56,h-56);
  ctx.fillStyle = 'rgba(74,197,113,.04)'; ctx.font = 'bold 80px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('ECOSENSE INDONESIA', w/2, h/2+25);
  ctx.fillStyle = '#4ac571'; ctx.font = 'bold 13px sans-serif';
  ctx.fillText('🌿 ECOSENSE INDONESIA — PLATFORM KOMUNITAS LINGKUNGAN HIDUP NASIONAL', w/2, 62);
  ctx.strokeStyle = 'rgba(74,197,113,.3)'; ctx.beginPath(); ctx.moveTo(60,75); ctx.lineTo(w-60,75); ctx.stroke();
  ctx.fillStyle = 'rgba(232,240,232,.6)'; ctx.font = '12px sans-serif';
  ctx.fillText('SERTIFIKAT PENGHARGAAN', w/2, 108);
  ctx.fillStyle = '#4ac571'; ctx.font = 'bold 28px sans-serif';
  ctx.fillText('PAHLAWAN LINGKUNGAN HIDUP', w/2, 155);
  ctx.fillStyle = 'rgba(232,240,232,.7)'; ctx.font = '14px sans-serif';
  ctx.fillText('Diberikan dengan bangga kepada', w/2, 195);
  var nama = (document.getElementById('f-nama') && document.getElementById('f-nama').value) || 'Warga Peduli Lingkungan Indonesia';
  ctx.fillStyle = '#fff'; ctx.font = 'bold 26px sans-serif';
  ctx.fillText(nama, w/2, 242);
  ctx.strokeStyle = 'rgba(74,197,113,.4)'; ctx.beginPath(); ctx.moveTo(200,258); ctx.lineTo(600,258); ctx.stroke();
  ctx.fillStyle = 'rgba(232,240,232,.65)'; ctx.font = '13px sans-serif';
  ctx.fillText('Atas kontribusi nyata dalam menjaga kelestarian lingkungan hidup Indonesia', w/2, 295);
  ctx.fillText('melalui pelaporan aktif masalah lingkungan di platform EcoSense', w/2, 315);
  ctx.fillStyle = '#4ac571'; ctx.font = 'bold 18px sans-serif';
  ctx.fillText('✦ ' + poinLokal + ' Poin Lingkungan ✦', w/2, 362);
  ctx.fillStyle = 'rgba(232,240,232,.5)'; ctx.font = '12px sans-serif';
  ctx.fillText('Tertanggal: ' + new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'}), w/2, 415);
  ctx.strokeStyle = 'rgba(74,197,113,.2)'; ctx.beginPath(); ctx.moveTo(60,448); ctx.lineTo(w-60,448); ctx.stroke();
  ctx.fillStyle = 'rgba(74,197,113,.5)'; ctx.font = '11px sans-serif';
  ctx.fillText('EcoSense Indonesia — Platform Komunitas Pemantau Lingkungan Hidup Nasional', w/2, 473);
  var a = document.createElement('a');
  a.download = 'sertifikat-ecosense.png';
  a.href = cv.toDataURL();
  a.click();
}

// ===== AI CHAT =====
function callGroqAI(question, history, onReply, onError) {
  var msgs = [{role:'system', content:AI_SYSTEM}].concat(history).concat([{role:'user', content:question}]);
  fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Authorization':'Bearer '+GROQ_KEY, 'Content-Type':'application/json' },
    body: JSON.stringify({ model:'llama-3.3-70b-versatile', messages:msgs, max_tokens:350, temperature:0.7 })
  }).then(function(r) {
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  }).then(function(d) {
    var reply = (d.choices&&d.choices[0]&&d.choices[0].message&&d.choices[0].message.content) || 'Maaf, tidak ada jawaban. Coba lagi!';
    onReply(reply);
  }).catch(function(err) { onError(err); });
}

function toggleChat() { document.getElementById('chat-win').classList.toggle('open'); }
function sendQ(q) { document.getElementById('chat-in').value = q; sendChat(); }

function sendChat() {
  var inp = document.getElementById('chat-in');
  var q = inp.value.trim();
  if (!q) return;
  inp.value = '';
  addMsg('user', q);
  var load = addMsg('bot', '⏳ Sedang menjawab...', true);
  chatHist.push({role:'user', content:q});

  callGroqAI(q, chatHist.slice(0,-1),
    function(reply) {
      load.remove(); addMsg('bot', reply);
      chatHist.push({role:'assistant', content:reply});
      if (chatHist.length > 20) chatHist = chatHist.slice(-20);
    },
    function(err) {
      load.remove();
      addMsg('bot', 'Koneksi ke AI bermasalah. Pastikan internet aktif, lalu coba lagi.');
      console.error('Groq error:', err);
    }
  );
}

function addMsg(type, text, loading) {
  var msgs = document.getElementById('chat-msgs');
  var d = document.createElement('div');
  d.className = 'msg ' + type + (loading ? ' loading' : '');
  d.textContent = text;
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
  return d;
}

// ===== ISU NASIONAL =====
var ISU = [
  {icon:'🌫️', judul:'Kebakaran Hutan & Lahan', region:'Sumatera & Kalimantan', desc:'Jutaan hektar terbakar setiap kemarau, kabut asap menyelimuti belasan provinsi.'},
  {icon:'🌊', judul:'Pencemaran Sungai & Laut', region:'Seluruh Indonesia',       desc:'Citarum, Siak, Musi terancam limbah industri dan sampah rumah tangga.'},
  {icon:'🏝️', judul:'Abrasi Pulau Kecil',       region:'NTT, Maluku, Papua',      desc:'Ribuan pulau kecil terancam tenggelam akibat kenaikan muka air laut.'},
  {icon:'🌴', judul:'Deforestasi Hutan Tropis', region:'Kalimantan & Papua',      desc:'Hutan tropis ketiga terluas di dunia terus berkurang demi perkebunan dan tambang.'},
  {icon:'🏭', judul:'Limbah Industri Kota Besar',region:'Jawa & Sumatera',        desc:'Kawasan industri membuang limbah ke sungai tanpa pengolahan yang memadai.'},
  {icon:'🗑️', judul:'Krisis Sampah Perkotaan', region:'Jakarta, Surabaya, Medan', desc:'TPA sudah over kapasitas. Indonesia hasilkan 60 juta ton sampah per tahun.'}
];
document.getElementById('isu-grid').innerHTML = ISU.map(function(x) {
  return '<div class="isu-card"><span class="isu-icon">'+x.icon+'</span><h4>'+x.judul+'</h4><p>'+x.desc+'</p><span class="isu-reg">📍 '+x.region+'</span></div>';
}).join('');

// ===== INIT =====
buildProvSelect();
startListener();
