

export const mainMenu = [
  {
    path: "/",
    name: "✨ Ana Sayfa",
    icon: "",
  },
  {
    path: "/use-cases",
    name: "Kullanım Durumları",
    icon: true,
    subtitle: {
      content_1: {
        title: "Takımlar için",
        comment:
          "Farklı departman ve konumlardaki tüm ekibinizi tek bir hesap altında nasıl planlayabileceğinizi kontrol edin.",
      },
      content_2: {
        title: "Eğitim için",
        comment:
          "Olağanüstü bir öğrenci deneyimi sunmaya odaklanabilmeniz için rezervasyonları otomatikleştirin.",
      },
    },
  },
  {
    path: "/product",
    name: "Ürünler",
    icon: true,
    subtitle: {
      content_1: {
        title: "Uygunluk Durumunuzu Yönetin",
        comment:
          "Programınızı ve toplantılarınızı yaşam tarzınıza uyacak ve işinizi kolaylaştıracak şekilde uyarlayın. Müsaitlik durumunuzu anında güncellemek için takvimlerinizi bağlayın.",
      },
      content_2: {
        title: "For educations",
        comment:
          "Automate bookings so you can focus on delivering an outstanding student experience. ",
      },
    },
  },
  {
    path: "/company",
    name: "Şirketimiz",
    icon: true,
    subtitle: {
      content_1: {
        title: "Hakkımızda",
        comment:
          "2011 yılında kurulan ve kendini buluşmak için zaman bulma sorununu çözmeye adamış, tamamen uzaktan çalışan bir ekibiz.",
      },
      content_2: {
        title: "Yenilikler",
        comment:
          "En son özellikler ve ürün güncellemeleri hakkında daha fazla bilgi edinin. ",
      },
      content_3: {
        title: "Yardım Merkezi",
        comment:
          "Yardıma mı ihtiyacın var? Sitemizde bulunan dökümantasyona, videolara veya foruma göz atabilirsin. ",
      },
      content_4: {
        title: "Güvenlik",
        comment:
          "Hesabınızı, verilerinizi koruyor ve her gün güveninizi kazanıyoruz. ",
      },
    },
  },
  {
    path: "/pricing",
    name: "Fiyatlandırma",
    icon: "",
  },
  {
    path: "/login",
    name: "Giriş Yap",
    icon: "",
  },
];

export let [pricePolicy] = [
  {
    Aylık: [
      {
        id: 0,
        title: "Başlangıç aylık",
        price: "Ücretsiz",
        features: ["Özellik1", "Özellik2", "Özellik3"],
      },
      {
        id: 1,
        title: "Profesyonel aylık",
        price: "50",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4"],
      },
      {
        id: 2,
        title: "İşletme aylık",
        price: "200",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4", "Özellik5"],
      },
      {
        id: 3,
        title: "Özel aylık",
        price: "500",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4", "Özellik5"],
      },
    ],
    Yıllık: [
      {
        id: 0,
        title: "Başlangıç yıllık",
        price: "Ücretsiz",
        features: ["Özellik1", "Özellik2", "Özellik3"],
      },
      {
        id: 1,
        title: "Profesyonel yıllık",
        price: "50",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4"],
      },
      {
        id: 2,
        title: "İşletme yıllık",
        price: "200",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4", "Özellik5"],
      },
      {
        id: 3,
        title: "Özel yıllık",
        price: "500",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4", "Özellik5"],
      },
    ],
  },
];
