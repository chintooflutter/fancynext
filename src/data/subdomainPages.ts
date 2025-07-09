type FontEntry = {
  name: string;
  preview: string;
  style: string;
  category: string;
};

type SubdomainConfig = {
    title: string;
    description: string;
    ogImage: string;
    category: string;
    fonts: FontEntry[]; // ✅ Add this
  };
  
  export const subdomainPages: Record<string, SubdomainConfig> = {
    cutefonts: {
      title: 'Cute Fonts Generator',
      description: 'Generate adorable and cute Unicode fonts for your bios, captions, and messages.',
      ogImage: '/og/cutefonts.png',
      category: 'Cute',
      fonts: [
        { name: 'Cute Style ①', preview: '𝒞𝓊𝓉𝑒 𝓉𝑒𝓍𝓉', style: 'cute1', category: 'Cute' },
        { name: 'Cute Style ②', preview: '𝓛𝓸𝓿𝓮 𝓣𝓮𝔁𝓽', style: 'cute2', category: 'Cute' },
        { name: 'Cute Style ③', preview: '🅕🅐🅝🅒🅨 🅛🅔🅣🅣🅔🅡🅢', style: 'cute3', category: 'Cute' },
        { name: 'Cute Style ④', preview: '♡Fancy Text♡', style: 'cute4', category: 'Cute' },
        { name: 'Cute Style ⑤', preview: '🧸Soft Style🧸', style: 'cute5', category: 'Cute' },
        { name: 'Cute Style ⑥', preview: '𝓟𝓻𝓮𝓽𝓽𝔂 𝓣𝓮𝔁𝓽', style: 'cute6', category: 'Cute' },
        { name: 'Cute Style ⑦', preview: '🌸Fancy Letters🌸', style: 'cute7', category: 'Cute' },
        { name: 'Cute Style ⑧', preview: '🦋Butter Letters🦋', style: 'cute8', category: 'Cute' },
        { name: 'Cute Style ⑨', preview: '𝒜𝓃𝑔𝑒𝓁 𝓉𝑒𝓍𝓉', style: 'cute9', category: 'Cute' },
        { name: 'Cute Style ⑩', preview: '꧁꫞꯭Fancy꫞꧂', style: 'cute10', category: 'Cute' },
        { name: 'Cute Style ⑪', preview: '💫F̲a̲n̲c̲y̲💫', style: 'cute11', category: 'Cute' },
        { name: 'Cute Style ⑫', preview: '❀ＦＡＮＣＹ❀', style: 'cute12', category: 'Cute' },
        { name: 'Cute Style ⑬', preview: '💖ＦａＮｃＹ💖', style: 'cute13', category: 'Cute' },
        { name: 'Cute Style ⑭', preview: '✿𝓕𝓪𝓷𝓬𝔂✿', style: 'cute14', category: 'Cute' },
        { name: 'Cute Style ⑮', preview: '⟆F⟆a⟆n⟆c⟆y⟆', style: 'cute15', category: 'Cute' },
        { name: 'Cute Style ⑯', preview: 'F✨a✨n✨c✨y✨', style: 'cute16', category: 'Cute' },
        { name: 'Cute Style ⑰', preview: 'F̀́̕à́̕ǹ́̕c̀́̕ỳ́̕', style: 'cute17', category: 'Cute' },
        { name: 'Cute Style ⑱', preview: 'Fancy͓̽ ͓̽Letters͓̽', style: 'cute18', category: 'Cute' },
        { name: 'Cute Style ⑲', preview: 'F⃠a⃠n⃠c⃠y⃠', style: 'cute19', category: 'Cute' },
        { name: 'Cute Style ⑳', preview: 'ꈍᴗꈍ Fancy ꈍᴗꈍ', style: 'cute20', category: 'Cute' },
      ],
    },
  
    tattoofonts: {
      title: 'Tattoo Fonts Generator',
      description: 'Design your name or message with stylish tattoo-style fonts.',
      ogImage: '/og/tattoofonts.png',
      category: 'Tattoo',
      fonts: [
        { name: 'Tattoo Style ①', preview: '𝕿𝖆𝖙𝖙𝖔𝖔 𝕿𝖊𝖝𝖙', style: 'tattoo1', category: 'Tattoo' },
        { name: 'Tattoo Style ②', preview: 'Ṭ́ạ́ṭ́ṭ́ọ́ọ́ Ṭ́ẹ́x̣́ṭ́', style: 'tattoo2', category: 'Tattoo' },
        { name: 'Tattoo Style ③', preview: '𐍈𝖙𝖆𝖙𝖙𝖔𝖔𐍈', style: 'tattoo3', category: 'Tattoo' },
        { name: 'Tattoo Style ④', preview: '⛧Tattoo⛧ Text⛧', style: 'tattoo4', category: 'Tattoo' },
        { name: 'Tattoo Style ⑤', preview: '†Tattooo† Text†', style: 'tattoo5', category: 'Tattoo' },
        { name: 'Tattoo Style ⑥', preview: '❤T❤a❤t❤t❤o❤o❤', style: 'tattoo6', category: 'Tattoo' },
        { name: 'Tattoo Style ⑦', preview: 'Ṫȧṫṫȯȯ Ṫėẋṫ', style: 'tattoo7', category: 'Tattoo' },
        { name: 'Tattoo Style ⑧', preview: 'ｔａｔｔｏｏ ｔｅｘｔ', style: 'tattoo8', category: 'Tattoo' },
        { name: 'Tattoo Style ⑨', preview: 'T̶a̶t̶t̶o̶o̶ T̶e̶x̶t̶', style: 'tattoo9', category: 'Tattoo' },
        { name: 'Tattoo Style ⑩', preview: 'T✨a✨t✨t✨o✨o✨', style: 'tattoo10', category: 'Tattoo' },
        { name: 'Tattoo Style ⑪', preview: 'Ṫ̈̉ȧ̈̉ṫ̈̉ṫ̈̉ȯ̈̉ȯ̈̉', style: 'tattoo11', category: 'Tattoo' },
        { name: 'Tattoo Style ⑫', preview: '⟦T⟧⟦a⟧⟦t⟧⟦t⟧⟦o⟧⟦o⟧', style: 'tattoo12', category: 'Tattoo' },
        { name: 'Tattoo Style ⑬', preview: '☾T☽☾a☽☾t☽☾t☽☾o☽☾o☽', style: 'tattoo13', category: 'Tattoo' },
        { name: 'Tattoo Style ⑭', preview: '◇T◇a◇t◇t◇o◇o◇', style: 'tattoo14', category: 'Tattoo' },
        { name: 'Tattoo Style ⑮', preview: 'T̵a̵t̵t̵o̵o̵', style: 'tattoo15', category: 'Tattoo' },
        { name: 'Tattoo Style ⑯', preview: '𓂀T𓂀a𓂀t𓂀t𓂀o𓂀o𓂀', style: 'tattoo16', category: 'Tattoo' },
        { name: 'Tattoo Style ⑰', preview: '•T–•a–•t–•t–•o–•o–', style: 'tattoo17', category: 'Tattoo' },
        { name: 'Tattoo Style ⑱', preview: 'T̯a̯t̯t̯o̯o̯', style: 'tattoo18', category: 'Tattoo' },
        { name: 'Tattoo Style ⑲', preview: 'T✡a✡t✡t✡o✡o✡', style: 'tattoo19', category: 'Tattoo' },
        { name: 'Tattoo Style ⑳', preview: 'T͜͜͜a͜͜͜t͜͜͜t͜͜͜o͜͜͜o͜͜͜', style: 'tattoo20', category: 'Tattoo' },
      ],
    }
  };
  