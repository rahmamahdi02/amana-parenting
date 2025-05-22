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


  export const navLinks = [
    { name: "About", to: "o-meni", type: "scroll" },
    { name: "Services", to: "tretmani", type: "scroll" },
    { name: "Testimonials", to: "Testimonials", type: "scroll" }, 
  ];
  
  export const counter = [
    {
      counterNumber: "10 Years",
      counterTitle: "Years of Experience",
      counterDesc: "A decade of experience guiding Muslim families through compassionate, Sunnah-aligned parenting practices that promote peace, connection, and consistency."
    },
    {
      counterNumber: "1,000",
      counterTitle: "Mothers Mentored",
      counterDesc: "Over 1,000 mothers have received mentorship through live coaching, group sessions, and 1:1 support—building calmer homes and stronger family bonds."
    },
    {
      counterNumber: "500,000",
      counterTitle: "Mothers Impacted Online",
      counterDesc: "Through free content, workshops, and community outreach, over half a million Muslim mothers have been supported with tools for faith-based, confident parenting."
    },
  ]
  

  export const treatmants = [
    {
      treatmantTitle: '1:1 Coaching Program',
      treatmantDesc: 'For Muslim mothers who want personalized, faith-rooted guidance to navigate parenting challenges with clarity, calmness, and consistency. In these private sessions, we work together to address your specific struggles—from tantrums to discipline—while building your confidence and spiritual connection. First step: book your free Clarity Call today.',
      treatmantPrice: 'Starting at $699 for 6 weeks program.',
      treatmantButtonText: "Book Your Clarity Call Today",
    },
    {
      treatmantTitle: 'Confident Mamas Monthly Membership',
      treatmantDesc: 'Join a nurturing, Sunnah-based parenting community designed to support Muslim moms in building peaceful, purposeful homes. Through live coaching, monthly workshops, and a supportive sisterhood, you’ll gain the tools and mindset to lead your family with calm authority and deep connection.',
      treatmantPrice: '$37/month membership.',
      treatmantButtonText: "Join for June 2025 Launch",
    },
  ];
  

export const benefits = [

    {
      benefitIcon: meditation,
      benefitTitle: "Calmness",
      benefitDesc:
        "When you manage your emotions and lead with strength, your child learns to regulate theirs and trust your leadership.",
    },
    {
      benefitIcon: psychiatry,
      benefitTitle: "Clarity",
      benefitDesc:
        "Clear expectations, routines, and follow-through reduce confusion, prevent power struggles, and build a stable, cooperative home.",
    },
    {
      benefitIcon: person,
      benefitTitle: "Connection",
      benefitDesc:
        "Nurturing daily connection through presence and kindness leads to a lasting, loving relationship with your children.",
    },
    {
      benefitIcon: physicalTherapy,
      benefitTitle: "Conviction",
      benefitDesc:
        "With tawakkul in Allah and confidence in your role, you’ll stop second-guessing yourself and start parenting with purpose and consistency.",
    },
    {
      benefitIcon: stamina,
      benefitTitle: "Consistency",
      benefitDesc:
        "Steady, values-based actions—day in and day out—build your child’s sense of safety, structure, and trust in you. Consistency in discipline, love, and faith sets the foundation for long-term growth.",
    },
    {
      benefitIcon: heartbeat,
      benefitTitle: "Compassion",
      benefitDesc:
        "Responding with empathy, even in tough moments, teaches your child the power of mercy. With compassionate discipline and heartfelt understanding, you model the prophetic example and nurture emotional resilience.",
    },
  ];

  export const faq = [
    {question: 'What is “sunnah-based discipline” and how is it different from gentle parenting and other mainstream approaches?', answer: 'Sunnah-Based Discipline is a gentle yet firm approach rooted in the Prophetic example—balancing mercy with boundaries. Unlike mainstream methods that often conflict with Islamic values, this approach helps you guide your children with love, structure, and deep spiritual alignment.'},
    {question: 'What’s the difference between the monthly membership and 1:1 coaching?', answer: 'The monthly membership offers group support through live Q&As, workshops, and a private community—perfect if you want consistent guidance and connection with other Muslim moms.The 1:1 coaching is a personalized deep dive, where we work together privately to address your unique parenting challenges. You can start by booking a free Clarity Call to see if it’s the right fit.'},
    {question: 'I struggle with consistency and staying calm. Will coaching work for me?', answer: 'Absolutely. Many parents come to Amana Parenting feeling overwhelmed, reactive, or unsure where to start. Our method is built around progress, not perfection. You’ll get practical tools and mindset shifts that help you stay calm, consistent, and confident—one small step at a time.'},
    {question: 'I’m not sure which option is right for me. How do I decide?', answer: 'If you’re looking for community, steady tools, and flexible learning—start with the membership. If you feel stuck in a cycle of frustration or need tailored support for your child or family dynamic, the Clarity Call is your first step toward private coaching. I’ll help you map out a clear path forward'},
    {question: 'What results can I expect from working with Yusur?', answer: 'You’ll start seeing results in your mindset, connection with your children, and how you handle discipline. Most moms report feeling more calm, confident, and consistent—with less yelling, fewer power struggles, and deeper relationships with their kids. And best of all? You’ll be parenting in a way that aligns with your deen and values.'},
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
  {icon: envelopeIcon, username: 'amanaparentcoaching@gmail.com', link: "mailto:amanaparentcoaching@gmail.com"}
];
