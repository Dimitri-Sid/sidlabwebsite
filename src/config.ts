// Site-wide settings. Edit here; everything else reads from this file.
export const site = {
  name: 'SIDlab',
  fullName: 'Systems ImmunoDynamics Lab',
  tagline: 'Dissecting immune systems across space, time, and therapeutic perturbation to optimize immunotherapies.',
  institution: 'Johns Hopkins School of Medicine',
  // Welcome statement on the home page: one string per paragraph.
  welcome: [
    'Led by Dr. Dimitri Sidiropoulos, the Systems ImmunoDynamics Lab works to understand how cancer and the immune system change together over time. We use patient samples, cutting-edge technologies, and computational tools to uncover new molecular targets and determine why treatments succeed or fail. Our goal is to transform these insights into new therapies and strategies for cancer interception and treatment.',
  ],
  // Emails are written out so address-harvesting bots don't pick them up.
  email: 'sdimitri (at) jhmi (dot) edu', // the PI: footer, Contact page, Join page
  contactEmail: 'sidlab.ops (at) gmail (dot) com', // lab email (Contact page only)
  address: [
    'Cancer Research Building 1 (CRB1), Room 416',
    'Johns Hopkins School of Medicine',
    '1550 Orleans St',
    'Baltimore, MD 21287',
  ],
  // "Get directions" button. Replace with the exact Google Maps link if you prefer.
  mapUrl: 'https://maps.app.goo.gl/UHobJzc2ETSTTM2m7',
  // Optional building photo for the Contact page: put the file in public/images/ and set e.g. '/images/crb1.jpg'.
  contactImage: '/images/building.jpg',
  // Link for the Give page's button, e.g. your Johns Hopkins secure gift form (https://secure.jhu.edu/form/...).
  // Leave empty until you have it: the button then shows "Donation link coming soon".
  giveUrl: '',
  // Add more: { label: 'Twitter / X', href: '…' }
  links: [] as { label: string; href: string }[],
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research/' },
  { label: 'People', href: '/people/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'News & Media', href: '/news/' },
  { label: 'Join', href: '/join/' },
  { label: 'Contact', href: '/contact/' },
];
