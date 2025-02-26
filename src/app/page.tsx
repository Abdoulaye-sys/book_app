// src/app/page.tsx
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* En-tête */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Quran Explorer</h1>
          <nav className="space-x-4">
            <a href="#home" className="hover:text-yellow-300">Home</a>
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Corps de la page */}
      <main className="flex-1 container mx-auto p-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Choose a Verse</h2>

          {/* Sélection du réciteur */}
          <div className="mb-4">
            <label htmlFor="qaree" className="block text-sm font-medium">Select Qaree (Reciter)</label>
            <select id="qaree" className="mt-1 p-2 border border-gray-300 rounded-md">
              <option value="husary">Husary</option>
              <option value="shuraim">Shuraim</option>
              {/* Ajouter d'autres réciteurs ici */}
            </select>
          </div>

          {/* Sélection de la traduction */}
          <div className="mb-4">
            <label htmlFor="translation" className="block text-sm font-medium">Select Translation</label>
            <select id="translation" className="mt-1 p-2 border border-gray-300 rounded-md">
              <option value="ar_mu">Arabic (M. Asad)</option>
              <option value="en_en">English (Pickthall)</option>
              {/* Ajouter d'autres traductions ici */}
            </select>
          </div>

          {/* Affichage du texte du Coran */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Surah Al-Fatiha (1:1)</h3>
            <p className="text-xl font-medium text-right mt-2">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </p>
            {/* Affichage de la traduction */}
            <p className="text-md text-left mt-2">
              In the name of Allah, the Most Gracious, the Most Merciful
            </p>
          </div>

          {/* Lecteur audio */}
          <div className="mt-4">
            <audio controls className="w-full">
              <source src="https://verses.example.com/1_1.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Quran Explorer</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
