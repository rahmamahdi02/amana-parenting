import physicalTherapy from './assets/physical-therapy.svg';
import psychiatry from './assets/psychiatry.svg';
import meditation from './assets/meditation.svg';
import stamina from './assets/stamina.svg';
import heartbeat from './assets/heartbeat.svg';
import person from './assets/person.svg';
import envelopeIcon from './assets/envelope.svg';
import phoneIcon from './assets/phone.svg';
import mapMarkerIcon from './assets/map-marker.svg';
import instagramIcon from './assets/instagram-icon.svg';
import facebookIcon from './assets/facebook-icon.svg';

export const navLinks = [
    { name: "Services", to: "tretmani" },
    { name: "About Me", to: "o-meni" },
    { name: "Contact", to: "kontakt" },
  ];

export const counter = [
  { counterNumber: 1000, counterTitle: 'Zadovoljnih klijenata', counterDesc: 'Rekonekcija pruža vidljive i trajne rezultate, a zadovoljstvo klijenata potvrda je efikasnosti ove delotvorne metode.'},
  { counterNumber: 100, counterTitle: 'Održanih seansi', counterDesc: 'Kroz uspešno održane seanse, brojni klijenti su obnovili svoju energiju, postigli duhovni mir i unapredili kvalitet svog života.'},
  { counterNumber: 10, counterTitle: 'Godina iskustva', counterDesc: 'Višegodišnje iskustvo u primeni rekonekcijskog isceljenja, sa ciljem uspostavljanja ravnoteže i unutrašnje transformacije.'}
]  

export const treatmants = [
    { treatmantTitle: 'Rekonekcijsko isceljenje', treatmantDesc: 'Rekonekcijsko isceljenje uklanja energetske blokade koje su se formirale tokom života, počevši od najranijeg detinjstva. Ovaj proces se izvodi u prisustvu ili na daljinu kroz tri sesije koje se održavaju tri dana za redom. Svaka sesija je jedinstvena, sa svakim danom idemo sve dublje u proces isceljenja.', treatmantPrice: 'Cena po jednoj sesiji je 40€'},
    { treatmantTitle: 'Lična rekonekcija', treatmantDesc: 'Lična rekonekcija omogućava duboko i direktno energetsko oslobađanje blokada koje su se nakupljale tokom vašeg života. Ova metoda se izvodi u prisustvu, što omogućava direktan kontakt i rad sa vašim energetskim poljem. Lična Rekonekcija se radi samo jednom u životu i isključivo u prisustvu klijenta i praktičara.', treatmantPrice: 'Cena lične rekonekcije je 333€'}
];

export const benefits = [
    {
      benefitIcon: physicalTherapy,
      benefitTitle: "Fizičko zdravlje",
      benefitDesc:
        "Poboljšava opšte zdravstveno stanje, ublažava bol i pomaže u regeneraciji tela.",
    },
    {
      benefitIcon: psychiatry,
      benefitTitle: "Mentalno zdravlje",
      benefitDesc:
        "Smanjuje stres, poboljšava mentalnu jasnoću i pomaže u rešavanju emocionalnih blokada.",
    },
    {
      benefitIcon: meditation,
      benefitTitle: "Duhovni razvoj",
      benefitDesc:
        "Podstiče unutrašnji mir, povećava svest o životnim svrhama i promoviše duhovni rast.",
    },
    {
      benefitIcon: stamina,
      benefitTitle: "Energetska ravnoteža",
      benefitDesc:
        "Balansira energetske centre u telu, pomažući u slobodnom protoku životne energije.",
    },
    {
      benefitIcon: heartbeat,
      benefitTitle: "Poboljšana vitalnost",
      benefitDesc:
        "Povećava nivo energije i osećaj vitalnosti u svakodnevnom životu.",
    },
    {
      benefitIcon: person,
      benefitTitle: "Lični razvoj",
      benefitDesc:
        "Podstiče osobni rast i samopouzdanje  kroz procese samopoznanja i unutrašnje harmonije.",
    },
  ];

  export const faq = [
    {question: 'What is “Sunnah-Based Discipline” and how is it different from mainstream parenting advice?', answer: 'Sunnah-Based Discipline is a gentle yet firm approach rooted in the Prophetic example—balancing mercy with boundaries. Unlike mainstream methods that often conflict with Islamic values, this approach helps you guide your children with love, structure, and deep spiritual alignment.'},
    {question: 'What’s the difference between the monthly membership and 1:1 coaching?', answer: 'The monthly membership offers group support through live Q&As, workshops, and a private community—perfect if you want consistent guidance and connection with other Muslim moms.The 1:1 coaching is a personalized deep dive, where we work together privately to address your unique parenting challenges. You can start by booking a free Clarity Call to see if it’s the right fit.'},
    {question: 'I struggle with consistency and staying calm. Will this program work for me?', answer: 'Absolutely. Many parents come to Amana Parenting feeling overwhelmed, reactive, or unsure where to start. Our method is built around progress, not perfection. You’ll get practical tools and mindset shifts that help you stay calm, consistent, and confident—one small step at a time.'},
    {question: 'I’m not sure which option is right for me. How do I decide?', answer: 'If you’re looking for community, steady tools, and flexible learning—start with the membership. If you feel stuck in a cycle of frustration or need tailored support for your child or family dynamic, the Clarity Call is your first step toward private coaching. I’ll help you map out a clear path forward'},
    {question: 'What results can I expect from working with Yusur?', answer: 'You’ll start seeing results in your mindset, connection with your children, and how you handle discipline. Most moms report feeling more calm, confident, and consistent—with less yelling, fewer power struggles, and deeper relationships with their kids. And best of all? You’ll be parenting in a way that aligns with your deen and values.'},
    {question: 'What if I’m too busy to keep up?', answer: 'We get it—motherhood is full! That’s why Amana Parenting is structured to be flexible with recorded sessions and low-pressure e.g. easy scheduling. Even small changes guided by our method can make a big impact on your home and your heart.'},
];

export const contactInformations = [
  {
    contactIcon: phoneIcon,
    contactTitle: 'Clarity Call',
    contactInformation: "Book a 15 min session with Yusur",
    contactLink: "https://calendly.com/amanaparentcoaching/15min?month=2025-05",
  },
  {
    contactIcon: mapMarkerIcon,
    contactTitle: 'Community',
    contactInformation: "Join Yusur's WhatsApp Group to Stay Up to Date",
    contactLink: "https://chat.whatsapp.com/FYcODaC7UjvEcB8qy3WOqW",
  },
  {
    contactIcon: envelopeIcon,
    contactTitle: 'Email',
    contactInformation: "amanaparentcoaching@gmail.com",
    contactLink: "mailto:amanaparentcoaching@gmail.com",
  },
];

export const socialNetworks = [
  {icon: instagramIcon, username: 'amanaparenting', link: 'https://www.instagram.com/amanaparenting/'},
  {icon: facebookIcon, username: 'amanaparenting', link: 'https://www.facebook.com/amanaparenting/'}
];
