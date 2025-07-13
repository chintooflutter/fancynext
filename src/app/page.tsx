'use client';

import { useState } from 'react';
import { defaultFontStyles } from '@/data/defaultFontStyles';
import { transformText } from '@/lib/transformText';
import CopyButton from '@/components/CopyButton';
import {
  FileText,
  Layout,
  PenLine,
  Eraser,
  Sparkles,
  Mail,
} from 'lucide-react';

const subdomainStyles = [
  { name: "Cute Fonts", preview: "ⓒⓤⓣⓔ", subdomain: "cutefonts" },  
  { name: "Cursive Fonts", preview: "𝓗𝓮𝓵𝓵𝓸", subdomain: "cursivefonts" },
  { name: "Tattoo Fonts", preview: "𝕿𝖆𝖙𝖙𝖔𝖔", subdomain: "tattoofonts" },
  { name: "Cool Fonts", preview: "C͟O͟O͟L͟", subdomain: "coolfonts" },
  { name: "Font Changer", preview: "Fσит Cнαиgєя", subdomain: "fontchanger" },
  { name: "Bubble Letters", preview: "ⓗⓔⓛⓛⓞ", subdomain: "bubble" },
  { name: "Font Generator (Main)", preview: "Fancy Text", subdomain: "main" },
];

export default function HomePage() {
  const [input, setInput] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['All', ...Array.from(new Set(defaultFontStyles.map(f => f.category)))];
  const fontStyles = defaultFontStyles.filter(style =>
    activeCategory === 'All' ? true : style.category === activeCategory
  );

  const itemsPerPage = 20;
  const totalPages = Math.ceil(subdomainStyles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStyles = subdomainStyles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="px-4 py-10 max-w-3xl lg:max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">Fancy Letters Generator 2025, FancyLetters.org</h1>

      <p className="text-center text-muted-foreground mb-8 text-sm sm:text-base">
        Create beautiful and stylish Unicode fonts for your Instagram bio, social handles, and more.
      </p>

      {/* Input Text Area */}
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your text here..."
        className="w-full p-4 border rounded-md resize-none mb-6 text-lg bg-accent text-foreground"
        rows={3}
      />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1 text-sm rounded-full border transition whitespace-nowrap ${cat === activeCategory
                ? 'bg-foreground text-background'
                : 'bg-background text-foreground border-foreground'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Font Previews */}
      <div className="space-y-8 mb-20">
        {fontStyles.map((font) => {
          const output = transformText(input || font.preview, font.style);
          return (
            <div
              key={font.name}
              className="flex items-center justify-between gap-4 border rounded-md p-3 bg-accent"
            >
              <span className="truncate font-medium text-lg">{output}</span>
              <CopyButton text={output} />
            </div>
          );
        })}
        {fontStyles.length === 0 && (
          <p className="text-center text-muted-foreground">No fonts found in this category.</p>
        )}
      </div>

      {/* Subdomain Grid Section */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-semibold mb-6">Explore More Fancy Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentStyles.map((style) => (
            <a
              key={style.name}
              href={`https://${style.subdomain}.fancyletters.org`}
              className="border border-gray-200 rounded-lg p-5 text-center shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-bold mb-1">{style.name}</h2>
              <p className="text-xl mb-1">{style.preview}</p>
              <p className="text-blue-600 font-medium">Try Now →</p>
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-6 mt-8 text-sm">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-40"
          >
            ⟵ Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-40"
          >
            Next ⟶
          </button>
        </div>
      </section>


      {/* Fancy Letter Writing Guide Section */}
      <section className="mt-16 text-left space-y-8">
        <h2 className="text-3xl font-bold text-gray-800">Fancy Letter Writing Guide</h2>

        <p className="text-gray-700">
          Fancy letter writing is a beautiful way to express your thoughts and emotions through a personalized and decorative medium.
          It can be a unique and thoughtful gift for a loved one or a creative way to communicate with friends and family.
          This guide will provide you with the necessary steps and tips to create your own fancy letters.
        </p>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Materials Needed</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>High-quality paper or cardstock</li>
            <li>Pen or calligraphy pen</li>
            <li>Ruler</li>
            <li>Pencil</li>
            <li>Eraser</li>
            <li>Decorative materials (e.g. stickers, washi tape, stamps, etc.)</li>
            <li>Envelope</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Step-by-Step Guide</h3>
          <ol className="space-y-6 text-gray-700">
            <li className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Choose Your Paper</p>
                <p>Select high-quality paper or cardstock that suits your desired aesthetic. Consider the weight, texture, and color of the paper to ensure it complements your letters content and design.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Layout className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Plan Your Layout</p>
                <p>Using a ruler and pencil, lightly sketch guidelines for your letters layout. Determine the margins, spacing, and placement of text and decorative elements. This will help you maintain a balanced and organized design.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <PenLine className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Write Your Letter</p>
                <p>Write your letter using a pen or calligraphy pen. Be mindful of your handwriting and take your time to ensure legibility. If you are using a calligraphy pen, practice your strokes and letterforms before writing your final letter.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Eraser className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Erase Guidelines</p>
                <p>Once your ink is dry, gently erase any visible pencil guidelines. Be careful not to smudge the ink or damage the paper.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Sparkles className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Decorate Your Letter</p>
                <p>Add decorative elements to your letter, such as stickers, washi tape, or stamps. Consider the overall theme and color scheme of your letter when selecting decorations. Be mindful not to overcrowd the letter with too many elements, as this can detract from the message.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Address and Seal Your Envelope</p>
                <p>Address your envelope using the same pen or calligraphy pen as your letter. Seal the envelope with a decorative sticker or wax seal for an extra touch of elegance.</p>
              </div>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tips for Fancy Letter Writing</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Practice your handwriting or calligraphy skills before writing your final letter.</li>
            <li>Experiment with different paper textures, weights, and colors to find the perfect match for your letter.</li>
            <li>Consider the recipients preferences when selecting decorative elements.</li>
            <li>Maintain a balance between text and decorative elements to ensure readability.</li>
            <li>Take your time and enjoy the process of creating a personalized and decorative letter.</li>
          </ul>
        </div>

        <div className="space-y-4 text-gray-700">
          <p>
            Fancy letter writing is a beautiful and creative way to express your thoughts and emotions. By following this guide and incorporating your unique style, you can create stunning letters that will be cherished by your loved ones. Happy writing!
          </p>

          <p>
            Fancy letter fonts have captivated people for centuries, adding a touch of elegance and style to written communication. Whether its for personal correspondence, invitations, or artistic projects, fancy writing has a timeless appeal.
          </p>

          <p>
            The art of crafting fancy letters is not just about using a specific font. it involves a blend of creativity, precision, and an understanding of the visual impact of different styles. A simple character like a fancy letter a can become a piece of art with the right flourishes.
          </p>

          <p>
            The origins of fancy fonts go back to illuminated manuscripts. Today, with digital tools, designers can still apply those principles to modern typography. Every swirl and serif can reflect emotion and purpose.
          </p>

          <p>
            From elaborate and ornamental to sleek and minimal, the alphabet of fancy letters is vast. Designing these often starts on paper with drafts, eventually becoming polished digital artwork used in events, branding, or crafts.
          </p>

          <p>
            The beauty of fancy writing lies in its emotional tone. A well-designed letter “A” can set the entire theme for your creation. The joy of crafting fancy letters is growing, especially with the rise of tools like FancyLetters.org that make it accessible to everyone.
          </p>

          <p>
            In conclusion, fancy letter writing combines tradition, creativity, and innovation. Whether you’re just sketching or digitally generating, it’s about expressing beauty through letters that leave a lasting impression.
          </p>
        </div>
      </section>
    </main>
  );
}
