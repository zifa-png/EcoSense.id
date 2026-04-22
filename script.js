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
var LOKASI = {
  'Aceh': {
    lat: 4.695, lng: 96.749, kota: {
      'Kota Banda Aceh': ['Baiturrahman', 'Kuta Alam', 'Meuraxa', 'Syiah Kuala', 'Ulee Kareng', 'Kuta Raja', 'Lueng Bata', 'Jaya Baru', 'Banda Raya'],
      'Kota Sabang': ['Sukajaya', 'Sukakarya'],
      'Kota Lhokseumawe': ['Banda Sakti', 'Muara Dua', 'Blang Mangat', 'Muara Satu'],
      'Kota Langsa': ['Langsa Barat', 'Langsa Kota', 'Langsa Timur', 'Langsa Lama', 'Langsa Baro'],
      'Kab. Aceh Besar': ['Baitussalam', 'Darul Imarah', 'Darussalam', 'Indrapuri', 'Ingin Jaya', 'Kota Jantho', 'Mesjid Raya', 'Montasik', 'Peukan Bada', 'Seulimeum', 'Lhoknga'],
      'Kab. Pidie': ['Delima', 'Geumpang', 'Indrajaya', 'Kembang Tanjong', 'Keumala', 'Kota Sigli', 'Muara Tiga', 'Mutiara', 'Padang Tiji', 'Pidie', 'Sakti', 'Tangse'],
      'Kab. Bireuen': ['Baktiya', 'Gandapura', 'Jangka', 'Jeunieb', 'Peudada', 'Samalanga', 'Jeumpa', 'Kota Juang', 'Kuala', 'Peusangan'],
      'Kab. Aceh Utara': ['Baktiya', 'Dewantara', 'Kuta Makmur', 'Lhoksukon', 'Matangkuli', 'Muara Batu', 'Nibong', 'Nisam', 'Samudera', 'Sawang'],
      'Kab. Aceh Timur': ['Idi Rayeuk', 'Idi Tunong', 'Julok', 'Madat', 'Nurussalam', 'Peureulak', 'Simpang Ulim', 'Sungai Raya'],
      'Kab. Aceh Tengah': ['Bebesen', 'Bintang', 'Celala', 'Jagong Jeget', 'Kebayakan', 'Ketol', 'Laut Tawar', 'Pegasing'],
      'Kab. Aceh Tenggara': ['Babussalam', 'Badar', 'Bambel', 'Lawe Alas', 'Semadam', 'Tanoh Alas'],
      'Kab. Aceh Barat': ['Arongan Lambalek', 'Johan Pahlawan', 'Kaway XVI', 'Meureubo', 'Samatiga', 'Woyla'],
      'Kab. Aceh Selatan': ['Bakongan', 'Kluet Selatan', 'Kluet Utara', 'Labuhanhaji', 'Pasie Raja', 'Tapaktuan', 'Trumon'],
    }
  },
  'Bali': {
    lat: -8.340, lng: 115.091, kota: {
      'Kota Denpasar': ['Denpasar Barat', 'Denpasar Selatan', 'Denpasar Timur', 'Denpasar Utara'],
      'Kab. Badung': ['Abiansemal', 'Kuta', 'Kuta Selatan', 'Kuta Utara', 'Mengwi', 'Petang'],
      'Kab. Bangli': ['Bangli', 'Kintamani', 'Susut', 'Tembuku'],
      'Kab. Buleleng': ['Banjar', 'Buleleng', 'Gerokgak', 'Kubutambahan', 'Sawan', 'Seririt', 'Sukasada', 'Tejakula'],
      'Kab. Gianyar': ['Blahbatuh', 'Gianyar', 'Payangan', 'Sukawati', 'Tampaksiring', 'Tegallalang', 'Ubud'],
      'Kab. Jembrana': ['Jembrana', 'Melaya', 'Mendoyo', 'Negara', 'Pekutatan'],
      'Kab. Karangasem': ['Abang', 'Bebandem', 'Karangasem', 'Kubu', 'Manggis', 'Rendang', 'Sidemen', 'Selat'],
      'Kab. Klungkung': ['Banjarangkan', 'Dawan', 'Klungkung', 'Nusa Penida'],
      'Kab. Tabanan': ['Baturiti', 'Kediri', 'Kerambitan', 'Marga', 'Penebel', 'Pupuan', 'Selemadeg', 'Tabanan'],
    }
  },
  'Bangka Belitung': {
    lat: -2.741, lng: 106.440, kota: {
      'Kota Pangkalpinang': ['Bukit Intan', 'Gabek', 'Gerunggang', 'Girimaya', 'Pangkal Balam', 'Rangkui', 'Taman Sari'],
      'Kab. Bangka': ['Bakam', 'Belinyu', 'Mendo Barat', 'Merawang', 'Puding Besar', 'Sungai Liat'],
      'Kab. Bangka Barat': ['Jebus', 'Kelapa', 'Mentok', 'Simpang Teritip', 'Tempilang'],
      'Kab. Bangka Selatan': ['Air Gegas', 'Payung', 'Simpang Rimba', 'Toboali'],
      'Kab. Bangka Tengah': ['Koba', 'Lubuk Besar', 'Namang', 'Pangkalan Baru'],
      'Kab. Belitung': ['Badau', 'Membalong', 'Selat Nasik', 'Sijuk', 'Tanjung Pandan'],
      'Kab. Belitung Timur': ['Damar', 'Gantung', 'Kelapa Kampit', 'Manggar', 'Simpang Pesak'],
    }
  },
  'Banten': {
    lat: -6.406, lng: 106.064, kota: {
      'Kota Serang': ['Cipocok Jaya', 'Curug', 'Kasemen', 'Serang', 'Taktakan', 'Walantaka'],
      'Kota Tangerang': ['Batuceper', 'Benda', 'Cibodas', 'Ciledug', 'Cipondoh', 'Jatiuwung', 'Karangtengah', 'Karawaci', 'Larangan', 'Neglasari', 'Periuk', 'Pinang', 'Tangerang'],
      'Kota Cilegon': ['Cibeber', 'Cilegon', 'Citangkil', 'Ciwandan', 'Grogol', 'Jombang', 'Pulomerak', 'Purwakarta'],
      'Kota Tangerang Selatan': ['Ciputat', 'Ciputat Timur', 'Pamulang', 'Pondok Aren', 'Serpong', 'Serpong Utara', 'Setu'],
      'Kab. Serang': ['Anyar', 'Baros', 'Bojonegara', 'Carenang', 'Cikande', 'Cikeusal', 'Cinangka', 'Ciomas', 'Ciruas', 'Kramatwatu', 'Mancak', 'Pabuaran', 'Padarincang', 'Pontang', 'Tirtayasa'],
      'Kab. Tangerang': ['Balaraja', 'Cikupa', 'Cisauk', 'Cisoka', 'Curug', 'Jambe', 'Jayanti', 'Kelapa Dua', 'Kosambi', 'Kresek', 'Kronjo', 'Legok', 'Mauk', 'Pagedangan', 'Pakuhaji', 'Pasar Kemis', 'Rajeg', 'Sepatan', 'Sindang Jaya', 'Solear', 'Teluknaga', 'Tigaraksa'],
      'Kab. Pandeglang': ['Angsana', 'Banjar', 'Carita', 'Cibaliung', 'Cigeulis', 'Cikeusik', 'Labuan', 'Majasari', 'Menes', 'Pandeglang', 'Panimbang', 'Sumur'],
      'Kab. Lebak': ['Banjarsari', 'Bayah', 'Cibadak', 'Cibeber', 'Cileles', 'Cilograng', 'Cimarga', 'Cipanas', 'Maja', 'Malingping', 'Panggarangan', 'Rangkasbitung', 'Sajira', 'Warunggunung'],
    }
  },
  'Bengkulu': {
    lat: -3.793, lng: 102.261, kota: {
      'Kota Bengkulu': ['Gading Cempaka', 'Kampung Melayu', 'Ratu Agung', 'Ratu Samban', 'Selebar', 'Singaran Pati', 'Sungai Serut', 'Teluk Segara'],
      'Kab. Bengkulu Selatan': ['Air Nipis', 'Kedurang', 'Kota Manna', 'Manna', 'Pino', 'Pino Raya'],
      'Kab. Bengkulu Tengah': ['Bang Haji', 'Karang Tinggi', 'Pondok Kelapa', 'Taba Penanjung', 'Talang Empat'],
      'Kab. Bengkulu Utara': ['Air Besi', 'Arga Makmur', 'Ketahun', 'Padang Jaya', 'Putri Hijau'],
      'Kab. Rejang Lebong': ['Bermani Ulu', 'Curup', 'Curup Selatan', 'Curup Tengah', 'Curup Timur', 'Curup Utara', 'Padang Ulak Tanding', 'Selupu Rejang'],
      'Kab. Seluma': ['Air Periukan', 'Seluma', 'Seluma Barat', 'Seluma Selatan', 'Seluma Timur', 'Seluma Utara', 'Sukaraja'],
    }
  },
  'DI Yogyakarta': {
    lat: -7.797, lng: 110.370, kota: {
      'Kota Yogyakarta': ['Danurejan', 'Gedongtengen', 'Gondokusuman', 'Gondomanan', 'Jetis', 'Kotagede', 'Mantrijeron', 'Mergangsan', 'Ngampilan', 'Pakualaman', 'Tegalrejo', 'Umbulharjo', 'Wirobrajan'],
      'Kab. Sleman': ['Berbah', 'Cangkringan', 'Depok', 'Gamping', 'Godean', 'Kalasan', 'Minggir', 'Mlati', 'Moyudan', 'Ngaglik', 'Ngemplak', 'Pakem', 'Prambanan', 'Seyegan', 'Sleman', 'Tempel', 'Turi'],
      'Kab. Bantul': ['Bambanglipuro', 'Banguntapan', 'Bantul', 'Dlingo', 'Imogiri', 'Jetis', 'Kasihan', 'Kretek', 'Pajangan', 'Pandak', 'Piyungan', 'Pleret', 'Sanden', 'Sedayu', 'Sewon', 'Srandakan'],
      'Kab. Gunung Kidul': ['Gedangsari', 'Girisubo', 'Karangmojo', 'Ngawen', 'Nglipar', 'Paliyan', 'Panggang', 'Patuk', 'Playen', 'Ponjong', 'Rongkop', 'Saptosari', 'Semanu', 'Semin', 'Tanjungsari', 'Tepus', 'Wonosari'],
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
      'Kota Gorontalo': ['Kota Barat', 'Kota Selatan', 'Kota Utara', 'Kota Timur', 'Kota Tengah', 'Dungingi', 'Hulonthalangi', 'Sipatana'],
      'Kab. Gorontalo': ['Asparaga', 'Batudaa', 'Bilato', 'Boliyohuto', 'Limboto', 'Limboto Barat', 'Mootilango', 'Pulubala', 'Tabango', 'Telaga', 'Telaga Biru', 'Tibawa'],
      'Kab. Gorontalo Utara': ['Anggrek', 'Atinggola', 'Biau', 'Gentuma Raya', 'Sumalata', 'Tolinggula', 'Tomilito', 'Kwandang'],
      'Kab. Boalemo': ['Botumoito', 'Dulupi', 'Mananggu', 'Paguyaman', 'Tilamuta', 'Wonosari'],
      'Kab. Bone Bolango': ['Bone', 'Bonepantai', 'Botupingge', 'Bulango Selatan', 'Bulango Timur', 'Bulango Utara', 'Kabila', 'Suwawa', 'Tilongkabila'],
      'Kab. Pohuwato': ['Buntulia', 'Dengilo', 'Lemito', 'Marisa', 'Paguat', 'Popayato', 'Randangan'],
    }
  },
  'Jambi': {
    lat: -1.612, lng: 103.616, kota: {
      'Kota Jambi': ['Alam Barajo', 'Danau Sipin', 'Jambi Selatan', 'Jambi Timur', 'Jelutung', 'Kota Baru', 'Paal Merah', 'Pasar Jambi', 'Telanaipura'],
      'Kota Sungai Penuh': ['Hamparan Rawang', 'Kumun Debai', 'Pesisir Bukit', 'Sungai Penuh', 'Tanah Kampung'],
      'Kab. Batanghari': ['Bajubang', 'Maro Sebo Ilir', 'Mersam', 'Muara Bulian', 'Muara Tembesi', 'Pemayung'],
      'Kab. Bungo': ['Bathin III', 'Bungo Dani', 'Jujuhan', 'Pasar Muara Bungo', 'Pelepat', 'Rimbo Tengah', 'Tanah Sepenggal'],
      'Kab. Kerinci': ['Air Hangat', 'Batang Merangin', 'Bukit Kerman', 'Danau Kerinci', 'Gunung Kerinci', 'Kayu Aro', 'Sitinjau Laut', 'Siulak'],
      'Kab. Merangin': ['Bangko', 'Bangko Barat', 'Jangkat', 'Pamenang', 'Tabir', 'Tabir Barat'],
      'Kab. Muaro Jambi': ['Jambi Luar Kota', 'Kumpeh', 'Kumpeh Ulu', 'Maro Sebo', 'Mestong', 'Sungai Gelam'],
      'Kab. Sarolangun': ['Air Hitam', 'Batang Asai', 'Limun', 'Mandiangin', 'Pauh', 'Sarolangun'],
      'Kab. Tanjung Jabung Barat': ['Batang Asam', 'Betara', 'Merlung', 'Pengabuan', 'Seberang Kota', 'Tungkal Ilir'],
      'Kab. Tanjung Jabung Timur': ['Berbak', 'Dendang', 'Geragai', 'Muara Sabak Barat', 'Muara Sabak Timur', 'Nipah Panjang'],
      'Kab. Tebo': ['Muara Tabir', 'Rimbo Bujang', 'Rimbo Ilir', 'Rimbo Ulu', 'Tebo Ilir', 'Tebo Tengah', 'Tebo Ulu'],
    }
  },
  'Jawa Barat': {
    lat: -6.889, lng: 107.640, kota: {
      'Kota Bandung': ['Andir','Antapani','Arcamanik','Astanaanyar','Babakanciparay','Bandung Kidul','Bandung Kulon','Bandung Wetan','Batununggal','Bojongloa Kaler','Buahbatu','Cibeunying Kaler','Cibeunying Kidul','Cibiru','Cicendo','Cidadap','Cinambo','Coblong','Gedebage','Kiaracondong','Lengkong','Mandalajati','Panyileukan','Rancasari','Regol','Sukajadi','Sukasari','Sumurbandung','Ujungberung'],
      'Kota Bogor': ['Bogor Barat','Bogor Selatan','Bogor Tengah','Bogor Timur','Bogor Utara','Tanah Sareal'],
      'Kota Depok': ['Beji','Bojongsari','Cilodong','Cimanggis','Cinere','Cipayung','Limo','Pancoran Mas','Sawangan','Sukmajaya','Tapos'],
      'Kota Bekasi': ['Bantar Gebang','Bekasi Barat','Bekasi Selatan','Bekasi Timur','Bekasi Utara','Jatiasih','Jatisampurna','Medan Satria','Mustika Jaya','Pondok Gede','Pondok Melati','Rawalumbu'],
      'Kota Cirebon': ['Harjamukti','Kejaksan','Kesambi','Lemahwungkuk','Pekalipan'],
      'Kab. Bogor': ['Babakan Madang','Bojonggede','Caringin','Ciampea','Ciawi','Cibinong','Cibungbulang','Cigombong','Cigudeg','Cijeruk','Cileungsi','Ciomas','Cisarua','Citeureup','Dramaga','Gunung Putri','Gunung Sindur','Jasinga','Jonggol','Kemang','Leuwiliang','Megamendung','Nanggung','Pamijahan','Parung','Parung Panjang','Sukaraja','Tamansari','Tenjo'],
      'Kab. Bandung': ['Arjasari','Baleendah','Banjaran','Bojongsoang','Cangkuang','Cicalengka','Cikancung','Cilengkrang','Cileunyi','Cimaung','Cimenyan','Ciparay','Ciwidey','Dayeuhkolot','Ibun','Katapang','Kertasari','Majalaya','Margaasih','Margahayu','Nagreg','Pacet','Pangalengan','Paseh','Pasirjambu','Rancabali','Soreang'],
      'Kab. Karawang': ['Banyusari','Batujaya','Ciampel','Cibuaya','Cikampek','Cilamaya Kulon','Cilamaya Wetan','Jatisari','Jayakerta','Karawang Barat','Karawang Timur','Klari','Kotabaru','Lemahabang','Purwasari','Rawamerta','Rengasdengklok','Telukjambe Barat','Telukjambe Timur','Tempuran'],
      'Kab. Sukabumi': ['Cibadak','Cicantayan','Cicurug','Cidahu','Cisaat','Cisolok','Gegerbitung','Gunung Guruh','Jampang Kulon','Nagrak','Nyalindung','Pabuaran','Parakansalak','Parung Kuda','Pelabuhanratu','Sukaraja','Surade'],
      'Kab. Garut': ['Banjarwangi','Banyuresmi','Bayongbong','Bungbulang','Cibalong','Cibatu','Cibiuk','Cigedug','Cikajang','Cikelet','Cilawu','Cisewu','Cisurupan','Garut Kota','Kadungora','Karangpawitan','Leles','Malangbong','Pameungpeuk','Samarang','Talegong','Tarogong Kaler','Tarogong Kidul','Wanaraja'],
      'Kab. Bekasi': ['Babelan','Cibarusah','Cibitung','Cikarang Barat','Cikarang Pusat','Cikarang Selatan','Cikarang Timur','Cikarang Utara','Karangbahagia','Muara Gembong','Serang Baru','Setu','Sukakarya','Tambun Selatan','Tambun Utara','Tarumajaya'],
      'Kab. Subang': ['Binong','Blanakan','Ciasem','Ciater','Cibogo','Jalan Cagak','Kalijati','Pabuaran','Pagaden','Pamanukan','Purwadadi','Pusakanagara','Sagalaherang','Subang','Sukasari','Tanjungsiang'],
      'Kab. Purwakarta': ['Babakancikao','Bojong','Bungursari','Campaka','Cibatu','Darangdan','Jatiluhur','Plered','Pondoksalam','Purwakarta','Sukasari','Sukatani','Wanayasa'],
      'Kab. Indramayu': ['Anjatan','Arahan','Balongan','Bangodua','Bongas','Cantigi','Cikedung','Gabuswetan','Gantar','Indramayu','Jatibarang','Juntinyuat','Kandanghaur','Karangampel','Lemahabang','Lohbener','Losarang','Patrol','Sindang','Sliyeg','Sukra','Widasari'],
    }
  },
  'Jawa Tengah': {
    lat: -7.150, lng: 110.140, kota: {
      'Kota Semarang': ['Banyumanik','Candisari','Gajahmungkur','Gayamsari','Genuk','Gunungpati','Mijen','Ngaliyan','Pedurungan','Semarang Barat','Semarang Selatan','Semarang Tengah','Semarang Timur','Semarang Utara','Tembalang','Tugu'],
      'Kota Solo': ['Banjarsari','Jebres','Laweyan','Pasar Kliwon','Serengan'],
      'Kota Magelang': ['Magelang Selatan','Magelang Tengah','Magelang Utara'],
      'Kota Pekalongan': ['Pekalongan Barat','Pekalongan Selatan','Pekalongan Timur','Pekalongan Utara'],
      'Kota Salatiga': ['Argomulyo','Sidomukti','Sidorejo','Tingkir'],
      'Kota Tegal': ['Margadana','Tegal Barat','Tegal Selatan','Tegal Timur'],
      'Kab. Semarang': ['Ambarawa','Bancak','Bandungan','Banyubiru','Bawen','Bergas','Bringin','Getasan','Jambu','Kaliwungu','Pabelan','Pringapus','Suruh','Susukan','Tengaran','Tuntang','Ungaran Barat','Ungaran Timur'],
      'Kab. Demak': ['Bonang','Demak','Dempet','Gajah','Guntur','Karanganyar','Karangawen','Karangtengah','Mranggen','Sayung','Wedung','Wonosalam'],
      'Kab. Kudus': ['Bae','Dawe','Jati','Jekulo','Kaliwungu','Kudus','Mejobo','Undaan','Gebog'],
      'Kab. Banyumas': ['Ajibarang','Banyumas','Baturraden','Cilongok','Gumelar','Jatilawang','Kalibagor','Karanglewas','Kebasen','Kembaran','Kemranjen','Lumbir','Patikraja','Pekuncen','Purwojati','Purwokerto Barat','Purwokerto Selatan','Purwokerto Timur','Purwokerto Utara','Rawalo','Sokaraja','Somagede','Sumpiuh','Tambak','Wangon'],
      'Kab. Cilacap': ['Adipala','Bantarsari','Binangun','Cilacap Selatan','Cilacap Tengah','Cilacap Utara','Cimanggu','Cipari','Gandrungmangu','Jeruklegi','Karangpucung','Kesugihan','Kroya','Majenang','Maos','Nusawungu','Patimuan','Sampang','Sidareja','Wanareja'],
      'Kab. Kebumen': ['Adimulyo','Alian','Ambal','Ayah','Buayan','Gombong','Karanganyar','Karanggayam','Kebumen','Klirong','Kutowinangun','Mirit','Petanahan','Prembun','Rowokele','Sadang','Sempor','Sruweng'],
      'Kab. Magelang': ['Bandongan','Borobudur','Candimulyo','Dukun','Grabag','Kajoran','Mertoyudan','Mungkid','Muntilan','Ngablak','Ngluwar','Pakis','Salaman','Sawangan','Secang','Srumbung','Tegalrejo','Tempuran','Windusari'],
      'Kab. Boyolali': ['Ampel','Banyudono','Boyolali','Cepogo','Juwangi','Karanggede','Kemusu','Klego','Mojosongo','Musuk','Ngemplak','Nogosari','Sambi','Sawit','Selo','Simo','Teras','Wonosegoro'],
      'Kab. Klaten': ['Bayat','Cawas','Ceper','Delanggu','Gantiwarno','Jatinom','Jogonalan','Juwiring','Kalikotes','Karanganom','Karangdowo','Kemalang','Klaten Selatan','Klaten Tengah','Klaten Utara','Manisrenggo','Ngawen','Pedan','Polanharjo','Prambanan','Trucuk','Tulung','Wedi','Wonosari'],
    }
  },
  'Jawa Timur': {
    lat: -7.536, lng: 112.239, kota: {
      'Kota Surabaya': ['Asemrowo','Benowo','Bubutan','Bulak','Dukuh Pakis','Gayungan','Genteng','Gubeng','Gunung Anyar','Jambangan','Karang Pilang','Kenjeran','Krembangan','Lakar Santri','Mulyorejo','Pabean Cantian','Pakal','Rungkut','Sambikerep','Sawahan','Semampir','Simokerto','Sukolilo','Sukomanunggal','Tambaksari','Tandes','Tegalsari','Tenggilis Mejoyo','Wiyung','Wonocolo','Wonokromo'],
      'Kota Malang': ['Blimbing','Kedungkandang','Klojen','Lowokwaru','Sukun'],
      'Kota Batu': ['Batu','Bumiaji','Junrejo'],
      'Kota Kediri': ['Kediri Kota','Mojoroto','Pesantren'],
      'Kab. Gresik': ['Balongpanggang','Benjeng','Bungah','Cerme','Driyorejo','Gresik','Kebomas','Manyar','Menganti','Panceng','Sidayu','Ujung Pangkah','Wringinanom'],
      'Kab. Sidoarjo': ['Balongbendo','Buduran','Candi','Gedangan','Jabon','Krembung','Krian','Porong','Sedati','Sidoarjo','Sukodono','Taman','Tanggulangin','Tarik','Tulangan','Waru','Wonoayu'],
      'Kab. Mojokerto': ['Bangsal','Dawarblandong','Dlanggu','Gedeg','Gondang','Jatirejo','Jetis','Kutorejo','Mojosari','Ngoro','Pacet','Pungging','Puri','Trawas','Trowulan','Sooko'],
      'Kab. Jombang': ['Bandar Kedungmulyo','Bareng','Diwek','Gudo','Jogoroto','Jombang','Kabuh','Kesamben','Ngoro','Perak','Peterongan','Plandaan','Ploso','Mojoagung','Mojowarno','Sumobito','Tembelang','Wonosalam'],
      'Kab. Lamongan': ['Babat','Bluluk','Brondong','Deket','Glagah','Karangbinangun','Lamongan','Laren','Maduran','Mantup','Modo','Ngimbang','Paciran','Pucuk','Sambeng','Sekaran','Solokuro','Sugio','Sukodadi','Tikung','Turi'],
      'Kab. Malang': ['Ampelgading','Bantur','Bululawang','Dampit','Dau','Donomulyo','Gedangan','Gondanglegi','Jabung','Kalipare','Karangploso','Kasembon','Kepanjen','Kromengan','Lawang','Ngajum','Ngantang','Pagak','Pagelaran','Pakis','Pakisaji','Poncokusumo','Pujon','Sumbermanjing Wetan','Singosari','Tajinan','Tirtoyudo','Tumpang','Turen','Wagir','Wajak','Wonosari'],
      'Kab. Pasuruan': ['Bangil','Beji','Gempol','Gondang Wetan','Grati','Kejayan','Kraton','Lekok','Lumbang','Nguling','Pandaan','Pasrepan','Prigen','Purwodadi','Purwosari','Puspo','Rejoso','Rembang','Sukorejo','Tosari','Tutur','Winongan','Wonorejo'],
      'Kab. Jember': ['Ajung','Arjasa','Balung','Bangsalsari','Gumukmas','Jelbuk','Jenggawah','Jombang','Kalisat','Kaliwates','Kencong','Ledokombo','Mayang','Mumbulsari','Pakusari','Panti','Patrang','Puger','Rambipuji','Semboro','Silo','Sukorambi','Sumberbaru','Sumbersari','Tanggul','Tempurejo','Umbulsari','Wuluhan'],
      'Kab. Banyuwangi': ['Bangorejo','Banyuwangi','Blimbingsari','Cluring','Gambiran','Genteng','Giri','Glagah','Glenmore','Kabat','Kalibaru','Kalipuro','Licin','Muncar','Pesanggaran','Purwoharjo','Rogojampi','Sempu','Siliragung','Singojuruh','Songgon','Srono','Tegaldlimo','Wongsorejo'],
    }
  },
  'Kalimantan Barat': {
    lat: 0.130, lng: 111.087, kota: {
      'Kota Pontianak': ['Pontianak Barat','Pontianak Kota','Pontianak Selatan','Pontianak Tenggara','Pontianak Timur','Pontianak Utara'],
      'Kota Singkawang': ['Singkawang Barat','Singkawang Selatan','Singkawang Tengah','Singkawang Timur','Singkawang Utara'],
      'Kab. Mempawah': ['Anjongan','Mempawah Hilir','Mempawah Timur','Siantan','Sungai Kunyit','Sungai Pinyuh','Toho'],
      'Kab. Kubu Raya': ['Batu Ampar','Kubu','Rasau Jaya','Sungai Ambawang','Sungai Kakap','Sungai Raya','Terentang'],
      'Kab. Sambas': ['Galing','Jawai','Paloh','Pemangkat','Sajingan Besar','Sambas','Sebawi','Selakau','Semparuk','Subah','Tangaran','Tebas','Teluk Keramat'],
      'Kab. Sintang': ['Ambalau','Binjai Hulu','Dedai','Kayan Hilir','Kayan Hulu','Ketungau Hilir','Ketungau Hulu','Sepauk','Serawai','Sintang'],
      'Kab. Kapuas Hulu': ['Badau','Batang Lupar','Embaloh Hilir','Embaloh Hulu','Hulu Gurung','Jongkong','Putussibau Selatan','Putussibau Utara','Seberuang','Selimbau','Semitau'],
      'Kab. Ketapang': ['Benua Kayong','Air Upas','Delta Pawan','Kendawangan','Nanga Tayap','Sandai','Tumbang Titi'],
    }
  },
  'Kalimantan Selatan': {
    lat: -3.093, lng: 115.284, kota: {
      'Kota Banjarmasin': ['Banjarmasin Barat','Banjarmasin Selatan','Banjarmasin Tengah','Banjarmasin Timur','Banjarmasin Utara'],
      'Kota Banjarbaru': ['Banjarbaru Selatan','Banjarbaru Utara','Cempaka','Landasan Ulin','Liang Anggang'],
      'Kab. Banjar': ['Aluh-Aluh','Aranio','Astambul','Beruntung Baru','Gambut','Karang Intan','Kertak Hanyar','Martapura','Martapura Barat','Martapura Timur','Mataraman','Pengaron','Simpang Empat','Sungai Tabuk'],
      'Kab. Tanah Laut': ['Bajuin','Bati-Bati','Batu Ampar','Jorong','Kintap','Kurau','Panyipatan','Pelaihari','Takisung','Tambang Ulang'],
      'Kab. Tabalong': ['Banua Lawas','Bintang Ara','Haruai','Jaro','Kelua','Muara Uya','Murung Pudak','Pugaan','Tanta','Tanjung'],
    }
  },
  'Kalimantan Tengah': {
    lat: -1.682, lng: 113.382, kota: {
      'Kota Palangka Raya': ['Bukit Batu','Jekan Raya','Pahandut','Rakumpit','Sabangau'],
      'Kab. Kapuas': ['Basarang','Kapuas Barat','Kapuas Hilir','Kapuas Hulu','Kapuas Murung','Kapuas Tengah','Kapuas Timur','Mantangai','Selat','Timpah'],
      'Kab. Kotawaringin Timur': ['Antang Kalang','Baamang','Bukit Santuai','Cempaga','Cempaga Hulu','Kota Besi','Mentaya Hilir Selatan','Mentaya Hilir Utara','Mentaya Hulu','Mentawa Baru Ketapang','Parenggean','Seranau'],
      'Kab. Kotawaringin Barat': ['Arut Selatan','Arut Utara','Kotawaringin Lama','Kumai','Pangkalan Banteng','Pangkalan Lada'],
    }
  },
  'Kalimantan Timur': {
    lat: 1.636, lng: 116.419, kota: {
      'Kota Samarinda': ['Loa Janan Ilir','Palaran','Samarinda Ilir','Samarinda Kota','Samarinda Seberang','Samarinda Ulu','Samarinda Utara','Sambutan','Sungai Kunjang','Sungai Pinang'],
      'Kota Balikpapan': ['Balikpapan Barat','Balikpapan Kota','Balikpapan Selatan','Balikpapan Tengah','Balikpapan Timur','Balikpapan Utara'],
      'Kota Bontang': ['Bontang Barat','Bontang Selatan','Bontang Utara'],
      'Kab. Kutai Kartanegara': ['Anggana','Kembang Janggut','Kota Bangun','Loa Janan','Loa Kulu','Marang Kayu','Muara Badak','Muara Jawa','Muara Kaman','Muara Muntai','Samboja','Sangasanga','Sebulu','Tabang','Tenggarong','Tenggarong Seberang'],
      'Kab. Kutai Timur': ['Bengalon','Busang','Kaliorang','Karangan','Kaubun','Kongbeng','Muara Ancalong','Muara Bengkal','Muara Wahau','Rantau Pulung','Sandaran','Sangatta Selatan','Sangatta Utara','Sangkulirang'],
      'Kab. Berau': ['Batu Putih','Biatan','Biduk-Biduk','Gunung Tabur','Kelay','Maratua','Pulau Derawan','Sambaliung','Segah','Tabalar','Talisayan','Tanjung Redeb','Teluk Bayur'],
    }
  },
  'Kalimantan Utara': {
    lat: 3.073, lng: 116.041, kota: {
      'Kota Tarakan': ['Tarakan Barat','Tarakan Tengah','Tarakan Timur','Tarakan Utara'],
      'Kab. Bulungan': ['Bunyu','Peso','Peso Hilir','Sekatak','Tanjung Palas','Tanjung Palas Barat','Tanjung Palas Timur','Tanjung Selor'],
      'Kab. Nunukan': ['Krayan','Krayan Selatan','Lumbis','Lumbis Ogong','Nunukan','Nunukan Selatan','Sebatik','Sebatik Barat','Sebatik Tengah','Sebatik Timur','Sembakung'],
      'Kab. Malinau': ['Bahau Hulu','Kayan Hilir','Kayan Hulu','Kayan Selatan','Malinau Barat','Malinau Kota','Malinau Selatan','Malinau Utara','Mentarang','Pujungan','Sungai Boh'],
    }
  },
  'Kepulauan Riau': {
    lat: 3.946, lng: 108.142, kota: {
      'Kota Batam': ['Batam Kota','Batu Aji','Batu Ampar','Belakang Padang','Bengkong','Bulang','Galang','Lubuk Baja','Nongsa','Sagulung','Sei Beduk','Sekupang'],
      'Kota Tanjungpinang': ['Bukit Bestari','Tanjungpinang Barat','Tanjungpinang Kota','Tanjungpinang Timur'],
      'Kab. Bintan': ['Bintan Pesisir','Bintan Timur','Bintan Utara','Gunung Kijang','Mantang','Seri Kuala Lobam','Tambelan','Teluk Bintan','Teluk Sebong','Toapaya'],
      'Kab. Karimun': ['Belat','Buru','Karimun','Kundur','Kundur Barat','Kundur Utara','Meral','Meral Barat','Moro','Tebing','Ungar'],
      'Kab. Natuna': ['Bunguran Barat','Bunguran Batubi','Bunguran Selatan','Bunguran Tengah','Bunguran Timur','Bunguran Utara','Midai','Pulau Laut','Serasan','Subi'],
      'Kab. Lingga': ['Bakung Serumpun','Lingga','Lingga Timur','Lingga Utara','Senayang','Singkep','Singkep Barat','Singkep Pesisir'],
    }
  },
  'Lampung': {
    lat: -4.558, lng: 105.405, kota: {
      'Kota Bandar Lampung': ['Kedaton','Kemiling','Panjang','Rajabasa','Sukarame','Tanjung Karang Barat','Tanjung Karang Pusat','Tanjung Karang Timur','Teluk Betung Barat','Teluk Betung Selatan','Teluk Betung Timur','Teluk Betung Utara','Way Halim','Labuhan Ratu'],
      'Kota Metro': ['Metro Barat','Metro Pusat','Metro Selatan','Metro Timur','Metro Utara'],
      'Kab. Lampung Selatan': ['Bakauheni','Kalianda','Katibung','Ketapang','Natar','Palas','Penengahan','Rajabasa','Sidomulyo','Tanjung Bintang','Way Sulan'],
      'Kab. Lampung Tengah': ['Anak Tuha','Bandar Mataram','Bangun Rejo','Gunung Sugih','Kalirejo','Padang Ratu','Punggur','Seputih Banyak','Seputih Mataram','Terbanggi Besar','Terusan Nunyai'],
      'Kab. Lampung Utara': ['Abung Barat','Abung Selatan','Abung Tinggi','Bukit Kemuning','Kotabumi','Kotabumi Selatan','Kotabumi Utara','Sungkai Selatan','Sungkai Utara'],
      'Kab. Way Kanan': ['Banjit','Baradatu','Blambangan Umpu','Kasui','Pakuan Ratu','Rebang Tangkas'],
    }
  },
  'Maluku': {
    lat: -3.237, lng: 130.145, kota: {
      'Kota Ambon': ['Baguala','Leitimur Selatan','Nusaniwe','Sirimau','Teluk Ambon'],
      'Kab. Maluku Tengah': ['Amahai','Banda','Masohi','Saparua','Seram Utara','Tehoru'],
      'Kab. Buru': ['Namlea','Air Buaya','Batabual','Waeapo','Waplau'],
      'Kab. Seram Bagian Barat': ['Kairatu','Huamual','Piru','Taniwel'],
      'Kab. Kepulauan Aru': ['Pulau-Pulau Aru','Aru Selatan','Aru Tengah','Aru Utara'],
    }
  },
  'Maluku Utara': {
    lat: 1.571, lng: 127.808, kota: {
      'Kota Ternate': ['Pulau Ternate','Ternate Barat','Ternate Selatan','Ternate Tengah','Ternate Utara','Pulau Moti'],
      'Kota Tidore Kepulauan': ['Oba','Oba Selatan','Oba Tengah','Oba Utara','Tidore','Tidore Selatan','Tidore Timur','Tidore Utara'],
      'Kab. Halmahera Barat': ['Jailolo','Jailolo Selatan','Ibu','Ibu Selatan','Ibu Utara','Sahu','Sahu Timur'],
      'Kab. Halmahera Utara': ['Tobelo','Tobelo Barat','Tobelo Selatan','Tobelo Tengah','Tobelo Utara','Galela','Galela Barat'],
      'Kab. Halmahera Selatan': ['Bacan','Bacan Barat','Bacan Selatan','Bacan Timur','Gane Barat','Gane Timur','Obi','Obi Selatan'],
    }
  },
  'NTB': {
    lat: -8.653, lng: 117.361, kota: {
      'Kota Mataram': ['Ampenan','Cakranegara','Mataram','Pejanggik','Sandubaya','Sekarbela'],
      'Kota Bima': ['Asakota','Mpunda','Raba','Rasanae Barat','Rasanae Timur'],
      'Kab. Lombok Barat': ['Batu Layar','Gunungsari','Kediri','Kuripan','Labu Api','Lembar','Lingsar','Narmada','Sekotong'],
      'Kab. Lombok Tengah': ['Batukliang','Janapria','Jonggat','Kopang','Praya','Praya Barat','Praya Timur','Pujut'],
      'Kab. Lombok Timur': ['Aikmel','Jerowaru','Keruak','Labuhan Haji','Masbagik','Pringgabaya','Sakra','Sambelia','Selong','Terara'],
      'Kab. Lombok Utara': ['Bayan','Gangga','Kayangan','Pemenang','Tanjung'],
      'Kab. Sumbawa': ['Alas','Empang','Lape','Lopok','Moyo Hilir','Moyo Hulu','Plampang','Sumbawa','Utan'],
    }
  },
  'NTT': {
    lat: -8.657, lng: 121.079, kota: {
      'Kota Kupang': ['Alak','Kelapa Lima','Kota Raja','Kota Lama','Maulafa','Oebobo'],
      'Kab. Flores Timur': ['Adonara','Larantuka','Lewolema','Solor','Tanjung Bunga'],
      'Kab. Sikka': ['Alok','Bola','Doreng','Kewapante','Maumere','Nita','Paga'],
      'Kab. Ende': ['Detusoko','Ende','Ende Selatan','Kelimutu','Lio Timur','Maurole','Nangapanda'],
      'Kab. Manggarai Barat': ['Komodo','Labuan Bajo','Lembor','Mbeliling'],
      'Kab. Sumba Timur': ['Haharu','Karera','Lewa','Tabundung','Waingapu'],
    }
  },
  'Papua': {
    lat: -4.269, lng: 138.080, kota: {
      'Kota Jayapura': ['Abepura','Heram','Jayapura Selatan','Jayapura Utara','Muara Tami'],
      'Kab. Jayapura': ['Airu','Demta','Depapre','Kaureh','Kemtuk','Nimbokrang','Nimboran','Sentani','Sentani Barat','Sentani Timur','Waibu','Yapsi'],
      'Kab. Merauke': ['Jagebob','Kurik','Merauke','Muting','Okaba','Semangga','Sota','Tanah Miring'],
      'Kab. Biak Numfor': ['Biak Barat','Biak Kota','Biak Timur','Biak Utara','Numfor Barat','Numfor Timur','Samofa'],
    }
  },
  'Papua Barat': {
    lat: -1.336, lng: 133.174, kota: {
      'Kab. Manokwari': ['Manokwari Barat','Manokwari Selatan','Manokwari Timur','Manokwari Utara','Prafi','Masni','Sidey'],
      'Kab. Fakfak': ['Fakfak','Fakfak Barat','Fakfak Tengah','Fakfak Timur','Kokas'],
      'Kab. Teluk Bintuni': ['Aranday','Bintuni','Babo','Merdey','Sumuri'],
    }
  },
  'Papua Barat Daya': {
    lat: -1.000, lng: 131.500, kota: {
      'Kota Sorong': ['Maladum Mes','Sorong','Sorong Barat','Sorong Kepulauan','Sorong Kota','Sorong Manoi','Sorong Timur','Sorong Utara'],
      'Kab. Raja Ampat': ['Ayau','Kofiau','Meos Mansar','Misool','Samate','Waigeo Barat','Waigeo Timur','Waigeo Selatan'],
    }
  },
  'Riau': {
    lat: 0.293, lng: 101.707, kota: {
      'Kota Pekanbaru': ['Binawidya','Bukit Raya','Lima Puluh','Marpoyan Damai','Payung Sekaki','Pekanbaru Kota','Rumbai Barat','Rumbai','Rumbai Timur','Senapelan','Sukajadi','Tuah Madani','Tenayan Raya','Kulim'],
      'Kota Dumai': ['Bukit Kapur','Dumai Barat','Dumai Kota','Dumai Selatan','Dumai Timur','Medang Kampai','Sungai Sembilan'],
      'Kab. Kampar': ['Bangkinang','Bangkinang Kota','Gunung Sahilan','Kampar','Kampar Kiri','Kampar Kiri Hilir','Kampar Kiri Hulu','Kampar Utara','Koto Kampar Hulu','Kuok','Rumbio Jaya','Salo','Siak Hulu','Tambang','Tapung','Tapung Hilir','Tapung Hulu'],
      'Kab. Siak': ['Bunga Raya','Dayun','Kandis','Kerinci Kanan','Koto Gasib','Lubuk Dalam','Mempura','Minas','Pusako','Sabak Auh','Siak','Sungai Apit','Sungai Mandau','Tualang'],
      'Kab. Pelalawan': ['Bandar Sei Kijang','Bunut','Kerumutan','Kuala Kampar','Langgam','Pangkalan Kerinci','Pangkalan Kuras','Pangkalan Lesung','Pelalawan','Ukui'],
      'Kab. Indragiri Hulu': ['Batang Cenaku','Batang Gansal','Kelayang','Kuala Cenaku','Lirik','Pasir Penyu','Peranap','Rengat','Rengat Barat','Seberida','Sungai Lala'],
      'Kab. Indragiri Hilir': ['Batang Tuaka','Enok','Gaung','Kateman','Kempas','Keritang','Kuala Indragiri','Mandah','Pelangiran','Pulau Burung','Tanah Merah','Tembilahan','Tembilahan Hulu','Tempuling'],
      'Kab. Kuantan Singingi': ['Benai','Cerenti','Gunung Toar','Hulu Kuantan','Inuman','Kuantan Hilir','Kuantan Mudik','Kuantan Tengah','Pangean','Sentajo Raya','Singingi','Singingi Hilir'],
      'Kab. Rokan Hulu': ['Bangun Purba','Bonai Darussalam','Kabun','Kunto Darussalam','Pendalian IV Koto','Rambah','Rambah Hilir','Rambah Samo','Rokan IV Koto','Tandun','Ujung Batu','Tambusai','Tambusai Utara'],
      'Kab. Rokan Hilir': ['Bangko','Bangko Pusako','Bagan Sinembah','Balai Jaya','Kubu','Kubu Babussalam','Pasir Limau Kapas','Pujud','Rantau Kopar','Rimba Melintang','Sinaboi','Tanah Putih','Tanjung Medan'],
      'Kab. Bengkalis': ['Bengkalis','Bantan','Bukit Batu','Mandau','Rupat','Rupat Utara','Siak Kecil','Pinggir','Bathin Solapan'],
      'Kab. Kepulauan Meranti': ['Merbau','Pulau Merbau','Rangsang','Rangsang Barat','Tebing Tinggi','Tebing Tinggi Barat','Tebing Tinggi Timur'],
    }
  },
  'Sulawesi Barat': {
    lat: -2.840, lng: 119.232, kota: {
      'Kab. Mamuju': ['Mamuju','Simboro dan Kepulauan','Tapalang','Tapalang Barat','Kalukku','Kalumpang','Bonehau','Sampaga','Tommo','Papalang'],
      'Kab. Polewali Mandar': ['Polewali','Anreapi','Matakali','Tapango','Matangnga','Bulo','Mapilli','Luyo','Campalagian','Limboro','Tinambung','Balanipa','Alu','Wonomulyo'],
      'Kab. Majene': ['Banggae','Banggae Timur','Pamboang','Sendana','Tammerodo Sendana','Tubo Sendana','Malunda','Ulumanda'],
      'Kab. Mamasa': ['Mamasa','Tawalian','Tanduk Kalua','Sesena Padang','Balla','Nosu','Pana','Tabang','Sumarorong','Aralle','Mambi','Bambang'],
    }
  },
  'Sulawesi Selatan': {
    lat: -3.666, lng: 119.974, kota: {
      'Kota Makassar': ['Biringkanaya','Bontoala','Makassar','Mamajang','Manggala','Mariso','Rappocini','Tallo','Tamalanrea','Tamalate','Ujung Pandang','Ujung Tanah','Panakkukang','Wajo'],
      'Kota Parepare': ['Bacukiki','Bacukiki Barat','Soreang','Ujung'],
      'Kota Palopo': ['Bara','Sendana','Tellu Wanua','Wara','Wara Barat','Wara Selatan','Wara Timur'],
      'Kab. Gowa': ['Biringbulu','Barombong','Bajeng','Bajeng Barat','Bontomarannu','Bontonompo','Bontonompo Selatan','Bungaya','Manuju','Pallangga','Parangloe','Pattallassang','Somba Opu','Tinggimoncong','Tompobulu'],
      'Kab. Bone': ['Ajangale','Amali','Awangpone','Barebbo','Bengo','Bontocani','Cenrana','Cina','Dua Boccoe','Kahu','Kajuara','Lamuru','Lappariaja','Libureng','Mare','Patimpeng','Ponre','Salomekko','Sibulue','Tanete Riattang','Tellu Limpoe','Tonra','Ulaweng'],
      'Kab. Luwu Timur': ['Angkona','Burau','Malili','Mangkutana','Nuha','Towuti','Wasuponda','Wotu'],
    }
  },
  'Sulawesi Tengah': {
    lat: -1.431, lng: 121.445, kota: {
      'Kota Palu': ['Mantikulore','Palu Barat','Palu Selatan','Palu Timur','Palu Utara','Tatanga','Tawaeli','Ulujadi'],
      'Kab. Donggala': ['Banawa','Banawa Selatan','Banawa Tengah','Labuan','Sindue','Sirenja','Sojol','Tanantovea'],
      'Kab. Parigi Moutong': ['Ampibabo','Bolano','Kasimbar','Moutong','Parigi','Sausu','Tinombo','Torue'],
      'Kab. Poso': ['Lore Selatan','Lore Utara','Poso Kota','Poso Pesisir','Pamona'],
      'Kab. Banggai': ['Balantak','Batui','Bunta','Luwuk','Kintom','Pagimana','Toili'],
      'Kab. Morowali': ['Bahodopi','Bungku Barat','Bungku Tengah','Menui Kepulauan'],
    }
  },
  'Sulawesi Tenggara': {
    lat: -4.145, lng: 122.174, kota: {
      'Kota Kendari': ['Abeli','Baruga','Kadia','Kambu','Kendari','Kendari Barat','Mandonga','Poasia','Puuwatu','Wua-Wua'],
      'Kota Baubau': ['Batupoaro','Betoambari','Bungi','Kokalukuna','Murhum','Sorawolio','Wolio'],
      'Kab. Konawe': ['Unaaha','Abuki','Anggaberi','Besulutu','Pondidaha','Sampara','Wawotobi'],
      'Kab. Kolaka': ['Kolaka','Latambaga','Pomalaa','Watubangga','Wundulako'],
      'Kab. Wakatobi': ['Wangi-Wangi','Kaledupa','Tomia','Binongko'],
    }
  },
  'Sulawesi Utara': {
    lat: 0.627, lng: 124.021, kota: {
      'Kota Manado': ['Bunaken','Malalayang','Paal Dua','Sario','Singkil','Tikala','Tuminting','Wanea','Wenang'],
      'Kota Bitung': ['Aertembaga','Girian','Lembeh','Madidir','Maesa','Matuari','Ranowulu'],
      'Kota Tomohon': ['Tomohon Barat','Tomohon Selatan','Tomohon Tengah','Tomohon Timur','Tomohon Utara'],
      'Kab. Minahasa': ['Tondano','Kawangkoan','Langowan','Pineleng','Tombariri','Tombulu'],
      'Kab. Minahasa Utara': ['Airmadidi','Kauditan','Kema','Likupang','Talawaan','Wori'],
      'Kab. Bolaang Mongondow': ['Lolak','Dumoga','Sang Tombolang','Poigar'],
      'Kab. Kepulauan Sangihe': ['Tahuna','Manganitu','Tamako','Tabukan'],
    }
  },
  'Sumatera Barat': {
    lat: -0.739, lng: 100.800, kota: {
      'Kota Padang': ['Bungus Teluk Kabung','Koto Tangah','Kuranji','Lubuk Begalung','Lubuk Kilangan','Nanggalo','Padang Barat','Padang Selatan','Padang Timur','Padang Utara','Pauh'],
      'Kota Bukittinggi': ['Aur Birugo Tigo Baleh','Guguk Panjang','Mandiangin Koto Selayan'],
      'Kab. Agam': ['Ampek Angkek','Ampek Nagari','Banuhampu','Baso','Canduang','IV Koto','Kamang Magek','Lubuk Basung','Malalak','Matur','Palembayan','Sungai Pua','Tanjung Mutiara','Tanjung Raya'],
      'Kab. Pasaman': ['Bonjol','Lubuk Sikaping','Panti','Padang Gelugur','Rao','Rao Selatan','Rao Utara','Simpang Alahan Mati','Tigo Nagari'],
      'Kab. Tanah Datar': ['Batipuh','Batipuh Selatan','Lima Kaum','Lintau Buo','Lintau Buo Utara','Padang Ganting','Pariangan','Rambatan','Salimpaung','Sungai Tarab','Sungayang','Tanjung Emas','X Koto'],
      'Kab. Pesisir Selatan': ['Basa Ampek Balai Tapan','Bayang','IV Jurai','Koto XI Tarusan','Linggo Sari Baganti','Lunang','Pancung Soal','Ranah Pesisir','Silaut','Sutera','Lengayang'],
    }
  },
  'Sumatera Selatan': {
    lat: -3.316, lng: 103.914, kota: {
      'Kota Palembang': ['Alang-Alang Lebar','Bukit Kecil','Gandus','Ilir Barat I','Ilir Barat II','Ilir Timur I','Ilir Timur II','Jakabaring','Kalidoni','Kemuning','Kertapati','Plaju','Sako','Seberang Ulu I','Seberang Ulu II','Sukarami'],
      'Kota Lubuklinggau': ['Lubuklinggau Barat I','Lubuklinggau Barat II','Lubuklinggau Selatan I','Lubuklinggau Selatan II','Lubuklinggau Timur I','Lubuklinggau Timur II','Lubuklinggau Utara I','Lubuklinggau Utara II'],
      'Kab. Banyuasin': ['Air Kumbang','Banyuasin I','Banyuasin II','Banyuasin III','Betung','Makarti Jaya','Rambutan','Rantau Bayur','Sembawa','Talang Kelapa','Tanjung Lago'],
      'Kab. Musi Banyuasin': ['Babat Supat','Babat Toman','Batanghari Leko','Bayung Lencir','Keluang','Lais','Lalan','Lawang Wetan','Plakat Tinggi','Sekayu','Sungai Keruh'],
      'Kab. OKI': ['Air Sugihan','Cengal','Jejawi','Kayu Agung','Lempuing','Lempuing Jaya','Mesuji','Pampangan','Pedamaran','Sirah Pulau Padang','Tanjung Lubuk','Tulung Selapan'],
    }
  },
  'Sumatera Utara': {
    lat: 2.115, lng: 99.533, kota: {
      'Kota Medan': ['Medan Amplas','Medan Area','Medan Barat','Medan Baru','Medan Belawan','Medan Deli','Medan Denai','Medan Helvetia','Medan Johor','Medan Kota','Medan Labuhan','Medan Maimun','Medan Marelan','Medan Perjuangan','Medan Petisah','Medan Polonia','Medan Selayang','Medan Sunggal','Medan Tembung','Medan Timur','Medan Tuntungan'],
      'Kota Binjai': ['Binjai Barat','Binjai Kota','Binjai Selatan','Binjai Timur','Binjai Utara'],
      'Kota Pematangsiantar': ['Siantar Barat','Siantar Marihat','Siantar Marimbun','Siantar Martoba','Siantar Selatan','Siantar Timur','Siantar Utara'],
      'Kab. Deli Serdang': ['Bangun Purba','Batang Kuis','Beringin','Biru-Biru','Deli Tua','Galang','Hamparan Perak','Kutalimbaru','Labuhan Deli','Lubuk Pakam','Namorambe','Pagar Merbau','Pancur Batu','Pantai Labu','Patumbak','Percut Sei Tuan','Sibolangit','Sunggal','Tanjung Morawa'],
      'Kab. Langkat': ['Babalan','Bahorok','Batang Serangan','Besitang','Binjai','Brandan Barat','Gebang','Hinai','Kuala','Padang Tualang','Pangkalan Susu','Sawit Seberang','Secanggang','Stabat','Tanjung Pura','Wampu'],
      'Kab. Karo': ['Barusjahe','Berastagi','Juhar','Kabanjahe','Kutabuluh','Mardinding','Merdeka','Merek','Munthe','Payung','Simpang Empat','Tigabinanga','Tigapanah'],
      'Kab. Tapanuli Utara': ['Adian Koting','Garoga','Muara','Pagaran','Pahae Jae','Pahae Julu','Pangaribuan','Parmonangan','Siatas Barita','Siborong-borong','Sipahutar','Sipoholon','Tarutung'],
      'Kab. Tapanuli Selatan': ['Angkola Barat','Angkola Muaratais','Angkola Sangkunur','Angkola Selatan','Angkola Timur','Arse','Batang Angkola','Batang Toru','Marancar','Saipar Dolok Hole','Sipirok'],
      'Kab. Mandailing Natal': ['Batahan','Batang Natal','Bukit Malintang','Kotanopan','Lembah Sorik Marapi','Lingga Bayu','Muara Batang Gadis','Natal','Panyabungan','Panyabungan Barat','Panyabungan Kota','Panyabungan Selatan','Panyabungan Timur','Ranto Baek','Siabu','Sinunukan','Tambangan'],
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
