/**
 * Every photo the site shows, in one place: its address, what it shows and where it is used. Pages and lists read
 * them from here (images.<name>.src). To change a photo, change its src here. When the site becomes another
 * business or subject, every photo here that shows the old one is replaced.
 */
export type SiteImage = { src: string; shows: string; usedIn: string[] };

export const images = {
  heroPhoto: { src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1600&q=80", shows: "Vitrine de doces e salgados em padaria", usedIn: ["Index › hero"] },
  aboutPhoto: { src: "https://images.unsplash.com/photo-1587241321921-91a834d6d191?auto=format&fit=crop&w=1600&q=80", shows: "Interior de confeitaria com balcão", usedIn: ["Sobre › about"] },
  vitrineItem1: { src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80", shows: "Croissants dourados", usedIn: ["Vitrine › items", "Index › items"] },
  vitrineItem2: { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80", shows: "Bolo de chocolate fatiado", usedIn: ["Vitrine › items", "Index › items"] },
  vitrineItem3: { src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80", shows: "Cookies artesanais", usedIn: ["Vitrine › items", "Index › items"] },
  vitrineItem4: { src: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=800&q=80", shows: "Tortinhas de frutas", usedIn: ["Vitrine › items", "Index › items"] },
  vitrineItem5: { src: "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?auto=format&fit=crop&w=800&q=80", shows: "Macarons coloridos", usedIn: ["Vitrine › items", "Index › items"] },
  vitrineItem6: { src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=80", shows: "Cupcakes com cobertura pastel", usedIn: ["Vitrine › items", "Index › items"] },
  vitrineItem7: { src: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80", shows: "Pães enrolados assados", usedIn: ["Vitrine › items", "Index › items"] },
  vitrineItem8: { src: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80", shows: "Cheesecake com calda", usedIn: ["Vitrine › items", "Index › items"] },
  galleryImg1: { src: "https://images.unsplash.com/photo-1587241321921-91a834d6d191?auto=format&fit=crop&w=900&q=80", shows: "Interior da pastelaria", usedIn: ["Galeria › gallery", "Index › gallery"] },
  galleryImg2: { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80", shows: "Pães artesanais recém-assados", usedIn: ["Galeria › gallery", "Index › gallery"] },
  galleryImg3: { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80", shows: "Sobremesa com framboesas", usedIn: ["Galeria › gallery", "Index › gallery"] },
  galleryImg4: { src: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=80", shows: "Tiramisu em camadas", usedIn: ["Galeria › gallery"] },
  galleryImg5: { src: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=900&q=80", shows: "Pães rústicos em cesta", usedIn: ["Galeria › gallery"] },
  galleryImg6: { src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80", shows: "Panna cotta com frutas", usedIn: ["Galeria › gallery"] },
  galleryImg7: { src: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=80", shows: "Cupcake de baunilha", usedIn: ["Galeria › gallery"] },
  galleryImg8: { src: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=80", shows: "Merengues delicados", usedIn: ["Galeria › gallery"] },
  galleryImg9: { src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80", shows: "Vitrine de doces", usedIn: ["Index › gallery"] },
  galleryImg10: { src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=80", shows: "Croissants na bandeja", usedIn: ["Index › gallery"] },
  galleryImg11: { src: "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?auto=format&fit=crop&w=900&q=80", shows: "Macarons em caixa", usedIn: ["Index › gallery"] },
  galleryImg12: { src: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=900&q=80", shows: "Tortinhas decoradas", usedIn: ["Index › gallery"] },
} satisfies Record<string, SiteImage>;
