"use client";
import { useEffect, useState } from "react";

const sections = [
  {
    id: "bab1",
    title: "Bab 1 Pendahuluan",
    content: `Pendahuluan berisi latar belakang penelitian, rumusan masalah, tujuan penelitian, dan manfaat penelitian. 
    Dalam penelitian ini, kita akan membahas bagaimana teknologi dapat meningkatkan efisiensi dalam berbagai bidang. 
    Penelitian ini juga akan mengeksplorasi tantangan yang dihadapi serta solusi yang dapat diterapkan.`
  },
  {
    id: "bab2",
    title: "Bab 2 Kajian Pustaka",
    content: `Kajian pustaka membahas teori-teori yang relevan dengan penelitian ini. 
    Beberapa konsep utama yang dibahas meliputi kecerdasan buatan, machine learning, dan sistem informasi. 
    Selain itu, penelitian sebelumnya yang terkait akan dijadikan referensi untuk mendukung analisis.`
  },
  {
    id: "bab3",
    title: "Bab 3 Metodologi Penelitian",
    content: `Metodologi penelitian menjelaskan langkah-langkah penelitian, mulai dari pengumpulan data, teknik analisis, hingga metode eksperimen yang digunakan dalam penelitian ini.`
  },
  {
    id: "bab4",
    title: "Bab 4 Hasil dan Pembahasan",
    content: `Bagian ini memaparkan hasil penelitian yang telah dilakukan. 
    Data yang diperoleh akan dianalisis dan dibandingkan dengan teori yang telah dibahas pada kajian pustaka.`
  },
  {
    id: "bab5",
    title: "Bab 5 Kesimpulan dan Saran",
    content: `Kesimpulan merangkum hasil penelitian dan memberikan saran untuk penelitian selanjutnya.`
  },
];

export default function SkripsiOnline() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = sections[0].id;
      for (let section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top <= 150) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 100, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-200 text-green-600 text-xl font-bold p-4 shadow-md z-50 flex justify-between items-center px-6">
        <span className="text-lg font-bold">TradeHaven - Skripsi Online</span>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`md:flex md:space-x-2 text-black text-sm ${menuOpen ? 'block' : 'hidden'} md:block` }>
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} onClick={(e) => handleSmoothScroll(e, section.id)} className={`hover:text-green-600 ${activeSection === section.id ? 'text-green-600 font-bold' : ''}`}>{section.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Judul */}
      <div className="pt-24 px-4 md:px-20 text-center">
        <h1 className="text-3xl font-bold text-black mb-6">Aplikasi Skripsi Online</h1>
        <p className="text-gray-700 text-lg">Platform ini dirancang untuk membantu mahasiswa dalam menyusun dan mengelola skripsi mereka dengan lebih efisien.</p>
      </div>

      {/* Content */}
      <div className="pt-12 px-4 md:px-20 space-y-4 pb-40">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="py-2">
            <h2 className={`text-2xl font-semibold text-black mb-2 p-4 rounded-lg shadow-lg transition-all duration-300 sticky top-16 z-40 ${activeSection === section.id ? 'bg-blue-300' : 'bg-gray-300'}`}>{section.title}</h2>
            <p className="text-gray-800 leading-relaxed bg-gray-200 p-6 rounded-lg shadow-md">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
