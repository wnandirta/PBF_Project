import React, { Component } from "react";



import './styles.css';

class About extends Component {
    render() {
        return (
            <div className='about'>
                <div className='about__section'>
                    <h3>Apa itu Posyandu</h3>
                    <p>Posyandu (pos pelayanan terpadu) merupakan upaya pemerintah untuk memudahkan masyarakat Indonesia dalam memperoleh pelayanan kesehatan ibu dan anak. Tujuan utama posyandu adalah mencegah peningkatan angka kematian ibu dan bayi saat kehamilan, persalinan, atau setelahnya melalui pemberdayaan masyarakat.</p>
                </div>
                <div>
                    <h3>Tujuan</h3>
                    <p>Tujuan posyandu antara lain:</p>
                    <li>Menurunkan angka kematian bayi (AKB), angka kematian ibu (ibu hamil), melahirkan dan nifas</li>
                    <li>Membudayakan NKBS</li>
                    <li>Meningkatkan peran serta masyarakat untuk mengembangkan kegiatan kesehatan dan KB serta kegiatan lainnya yang menunjang untuk tercapainya masyarakat sehat sejahtera.</li>
                    <li>Berfungsi sebagai wahana gerakan reproduksi keluarga sejahtera, gerakan ketahanan keluarga dan gerakan ekonomi keluarga sejahtera.
                    (Bagian Kependudukan dan Biostatistik FKM USU. 2007)</li>
                </div>
                <div>
                    <h3>Kegiatan Pokok Posyandu</h3>
                    <ol>
                        <li>KIA</li>
                        <li>KB</li>
                        <li>Imunisasi</li>
                        <li>Gizi</li>
                        <li>Penanggulangan Diare</li>
                    </ol>
                </div>


             

            </div>
        );
    }
}

export default About;