export interface JournalPost {
  slug: string;
  titleTr: string;
  titleEn: string;
  excerptTr: string;
  excerptEn: string;
  date: string;
  readTimeTr: string;
  readTimeEn: string;
  categoryTr: string;
  categoryEn: string;
  author: string;
  authorRoleTr: string;
  authorRoleEn: string;
  image: string;
  contentTr: string[];
  contentEn: string[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: "ekshi-mayanin-72-saatlik-hafizasi",
    titleTr: "Ekşi Mayanın 72 Saatlik Hafızası: Karakılçık ve Sabır",
    titleEn: "The 72-Hour Memory of Wild Sourdough: Heirloom Grains & Patience",
    excerptTr: "Endüstriyel ekmeklerin birkaç saatte kabartıldığı günümüzde, Karakılçık buğdayı ve 12 yıllık miras mayamızla 72 saatlik soğuk fermantasyon neden bambaşka bir sindirim ve tat deneyimi yaratıyor?",
    excerptEn: "In an era of rushed commercial bread, why does a 72-hour cold-fermentation with stoneground Karakılçık and a 12-year mother starter create an entirely distinct digestion and flavour profile?",
    date: "14 Kasım 2026",
    readTimeTr: "5 dk okuma",
    readTimeEn: "5 min read",
    categoryTr: "Artisan Fırıncılık",
    categoryEn: "Artisan Baking",
    author: "Zeynep Usta",
    authorRoleTr: "Baş Fırıncı & Maya Uzmanı",
    authorRoleEn: "Head Baker & Fermentation Lead",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    contentTr: [
      "Modern fırıncılık, zamanı bir maliyet kalemi olarak görür. Oysa fırınımızda zaman, en değerli hammaddedir.",
      "Kastamonu'nun yüksek rakımlı yaylalarından temin ettiğimiz ata tohumu Karakılçık buğdayı, taş değirmende düşük devirde öğütülür. Böylece buğdayın ruşeymi ve kepeğindeki doğal enzimler yanmadan korunur.",
      "72 saatlik soğuk fermantasyon sürecinde laktik asit bakterileri, gluten ağını yavaşça parçalayarak bağırsaklar için son derece sindirilebilir bir yapı ortaya çıkarır. Fırından çıkan her somunun üzerindeki o koyu kehribar rengi kabuk, sabrın karamelize olmuş karşılığıdır.",
    ],
    contentEn: [
      "Modern industrial baking treats time as an expense to be minimized. In our hearth, time is our primary ingredient.",
      "Heirloom Karakılçık grains harvested from Anatolian highlands are milled slowly between granite stones, preserving living germ and micronutrients.",
      "Over 72 hours of cold fermentation, wild yeasts and lactic bacteria break down complex starches and gluten structures into easily digestible, intensely aromatic loaves.",
    ],
  },
  {
    slug: "anadoluda-odun-atesi-ve-modern-gastronomi",
    titleTr: "Meşe Ateşinin Büyüsü: Modern Türk Mutfağında İs ve Doku",
    titleEn: "The Allure of Oak Embers: Smoke and Texture in Contemporary Turkish Cuisine",
    excerptTr: "Mutfakta gaz ocakları yerine meşe ve zeytin odunu kullanmak sadece nostalji değil; yemeğin hücresel yapısına derin bir lezzet katmanı işleme sanatıdır.",
    excerptEn: "Cooking over oak and olive wood embers is more than nostalgic heritage; it is the art of imprinting deep cellular nuance into seasonal dishes.",
    date: "08 Kasım 2026",
    readTimeTr: "6 dk okuma",
    readTimeEn: "6 min read",
    categoryTr: "Mutfak Felsefesi",
    categoryEn: "Culinary Philosophy",
    author: "Şef Kenan Demir",
    authorRoleTr: "Mutfak Direktörü",
    authorRoleEn: "Culinary Director",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
    contentTr: [
      "Ateş, Türk mutfağının başlangıç noktasıdır. Ancak geleneksel odun ateşini bugünün mutfak teknikleriyle birleştirdiğinizde ortaya bambaşka bir denge çıkar.",
      "14 saat fırınlanan kuzu incikte hedefimiz yağı eritmek değil, kolajeni kadife gibi bir sosa dönüştürmektir. Firik buğdayının kendi doğal tütsüsü ile meşe kömürünün sıcaklığı tabakta buluştuğunda, Anadolu'nun yayla gecelerini hatırlatan bir koku yayılır.",
    ],
    contentEn: [
      "Fire is the primordial foundation of Anatolian food. Marrying this primal element with modern temperature precision creates remarkable balance.",
      "Our slow-braised lamb shank isn't just cooked; it is transformed into velvet alongside ancient smoked firik grains and wild herbs.",
    ],
  },
  {
    slug: "yirgacheffe-den-bodrum-mandalinasina",
    titleTr: "Kahve Asiditesi ve Narenciye: Çekirdeğin Yolculuğu",
    titleEn: "Coffee Acidity & Citrus Nuance: The Journey of the Bean",
    excerptTr: "Doğru kavrulmuş bir Etiyopya Yirgacheffe çekirdeğindeki bergamot notalarının Ege kıyılarının taze mandalina aromalarıyla olan şaşırtıcı akrabalığı.",
    excerptEn: "The surprising kinship between the bergamot floral notes in washed Ethiopian Yirgacheffe and the fresh sunlit mandarin orchards of the Aegean.",
    date: "02 Kasım 2026",
    readTimeTr: "4 dk okuma",
    readTimeEn: "4 min read",
    categoryTr: "Kahve Kültürü",
    categoryEn: "Coffee Culture",
    author: "Emre Akın",
    authorRoleTr: "Baş Barista & Roaster",
    authorRoleEn: "Head Barista & Roaster",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
    contentTr: [
      "Kahve bir meyvedir. Çoğu insan kahveyi acı ve koyu kavrulmuş bir içecek sansa da, yüksek rakımlı Afrika çekirdekleri narenciye ve yasemin gibi berrak asiditelere sahiptir.",
      "Atölyemizde suyun mineral dengesini 90 ppm seviyesine ayarlayarak V60 demlemelerinde bu zarif tatları bardağa yansıtıyoruz.",
    ],
    contentEn: [
      "Coffee is first and foremost a fruit. While commercial roasting burns away delicate notes, high-altitude African beans harbor crisp jasmine and citrus profiles.",
      "By tailoring our brewing water mineralization to 90 ppm, we extract crystal-clean notes with exceptional clarity.",
    ],
  },
];
