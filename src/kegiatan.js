import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes, useParams, useRouteMatch } from "react-router-dom";

import "./styles.css";

class Kegiatan extends Component {
  render() {
    return (
      <div className="kegiatan">
        <div className="kegiatan__section">
            <h3>Jenis Kegiatan Yang Dilakukan Di Posyandu</h3>
          <div>
            <ul className="header">
              <li>
                <Link to="/">KIA</Link>
              </li>
              <li>
                <Link to="/kb">KB</Link>
              </li>
              <li>
                <Link to="/imunisasi">Imunisasi</Link>
              </li>
              <li>
                <Link to="/gizi">Gizi</Link>
              </li>
              <li>
                <Link to="/diare">Diare</Link>
              </li>
            </ul>
            <hr />
            <Routes>
              <Route exact path="/" element={<KIA />} />
              <Route path="/kb" element={<KB />} />
              <Route path="/imunisasi" element={<Imunisasi />} />
              <Route path="/gizi" element={<Gizi />} />
              <Route path="/diare" element={<Diare />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}
function KIA() {
    return(
      <div>
        <h2>KIA</h2>
        <p>KIA merupakan kartu resmi yang dikeluarkan Pemerintah tujuannya untuk melakukan pendataan, perlindungan, dan pemenuhan hak konstitusional anak-anak Indonesia yang berada di Indonesia. KIA memiliki 2 jenis, yaitu anak pada usia 0-5 tahun dan kartu kedua untuk anak pada usia 5-17 tahun (Permendagri Nomor 2 Tahun 2016).</p>
      </div>
    );
  }
  function KB() {
    return(
      <div>
        <h2>KB</h2>
        <p>Keluarga berencana atau lebih akrab disebut KB adalah program skala nasional untuk menekan angka kelahiran dan mengendalikan pertambahan penduduk di suatu negara.</p>
      </div>
    );
  }
  function Imunisasi() {
    return(
      <div>
        <h2>Imunisasi</h2>
        <p>Imunisasi wajib merupakan salah satu program pemerintah yang mengharuskan setiap anak usia di bawah 1 tahun melakukan vaksinasi. Kementerian Kesehatan Republik Indonesia telah menetapkan ada 5 jenis imunisasi yang wajib diberikan, yaitu imunisasi hepatitis B, polio, BCG, campak, dan DPT-HB-HiB.</p>
      </div>
    );
  }
  function Gizi() {
    return(
      <div>
        <h2>Gizi</h2>
        <p>Melalui kegiatan pemantauan gizi, posyandu berperan penting dalam mencegah risiko stunting pada anak. Pelayanan gizi di posyandu meliputi penimbangan berat dan pengukuran tinggi badan, deteksi dini gangguan pertumbuhan, penyuluhan gizi, dan pemberian suplemen.</p>
      </div>
    );
  }
  function Diare() {
    return(
      <div>
        <h2>Diare</h2>
        <p>Pencegahan diare dilakukan melalui penyuluhan Perilaku Hidup Bersih dan Sehat (PHBS). Sedangkan, penanganan diare dilakukan melalui pemberian oralit. Apabila diperlukan penanganan lebih lanjut, petugas kesehatan dapat memberikan suplemen zinc.</p>
      </div>
    );
  }
export default Kegiatan;
