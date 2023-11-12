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
        title: "BAŞLANGIÇ",
        price: "Ücretsiz",
        features: [
          "Güçlü, güvenilir rezervasyon sayfası.",
          "En iyi uygulama bildirimleri ve rezervasyon formu soruları.",
          "Google veya Microsoft hesabınızdan 1 bağlantılı takvim",
        ],
      },
      {
        id: 1,
        title: "PROFESYONEL",
        price: "50",
        features: [
          "SMS hatırlatıcıları",
          "Google veya Microsoft hesabınızdan 2 bağlantılı takvim ",
          "Görünüm Özelleştirme",
          "Rezervasyonları Kabul Et/Reddet",
        ],
      },
      {
        id: 2,
        title: "İŞLETME",
        price: "100",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4", "Özellik5"],
      },
      {
        id: 3,
        title: "ÖZEL",
        price: "150",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4", "Özellik5"],
      },
    ],
    Yıllık: [
      {
        id: 0,
        title: "STANDART",
        price: "200",
        features: ["Özellik1", "Özellik2", "Özellik3"],
      },
      {
        id: 1,
        title: "PROFESYONEL",
        price: "300",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4"],
      },
      {
        id: 2,
        title: "İŞLETME",
        price: "400",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4", "Özellik5"],
      },
      {
        id: 3,
        title: "ÖZEL",
        price: "600",
        features: ["Özellik1", "Özellik2", "Özellik3", "Özellik4", "Özellik5"],
      },
    ],
  },
];


export const userComments = [
  {
    _id: 1,
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "User 1",
    title: "Photographer",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    stars: 4,
  },
  {
    _id: 2,
    image:
      "https://image.lexica.art/full_jpg/7515495b-982d-44d2-9931-5a8bbbf27532",
    name: "User 2",
    title: "Graphic Designer",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    stars: 3,
  },
  {
    _id: 3,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "User 3",
    title: "Personal Assistant",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    stars: 4.5,
  },
  {
    _id: 4,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "User 4",
    title: "Musician",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    stars: 4,
  },
  {
    _id: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "User 5",
    title: "Executive Assistant",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    stars: 5,
  },
  {
    _id: 6,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "User 6",
    title: "Banker",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    stars: 2,
  },
];
