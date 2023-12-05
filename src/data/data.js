const HandyMen = [
  {
    name: "Akash",
    role: "Fouder",
    imageUrl:
      "https://st3.depositphotos.com/1177973/13759/i/450/depositphotos_137592562-stock-photo-young-handsome-plumber.jpg",
  },
  {
    name: "Saurya",
    role: "Supervisor",
    imageUrl:
      "https://st3.depositphotos.com/1177973/13759/i/450/depositphotos_137592562-stock-photo-young-handsome-plumber.jpg",
  },
  {
    name: "Nilam",
    role: "Creative Plumber",
    imageUrl:
      "https://st3.depositphotos.com/1177973/13759/i/450/depositphotos_137592562-stock-photo-young-handsome-plumber.jpg",
  },
  {
    name: "Sojit",
    role: "Creative Plumber",
    imageUrl:
      "https://st3.depositphotos.com/1177973/13759/i/450/depositphotos_137592562-stock-photo-young-handsome-plumber.jpg",
  },
  {
    name: "Tanmay",
    role: "Designer",
    imageUrl:
      "https://st3.depositphotos.com/1177973/13759/i/450/depositphotos_137592562-stock-photo-young-handsome-plumber.jpg",
  },
  {
    name: "Umesh",
    role: "Manager",
    imageUrl:
      "https://st3.depositphotos.com/1177973/13759/i/450/depositphotos_137592562-stock-photo-young-handsome-plumber.jpg",
  },
];

const DUMMY_SERVICES = [
  {
    title: "Water heater services",
    description:
      "There are many variations loream of passages Lorem Ipsum available, but the majority have suffered alteration",
    imageUrl: "/s1.png",
  },
  {
    title: "Piping/leak services",
    description:
      "The possible passages of gases, of vermin from pipes and sewers into the building should be prevented",
    imageUrl: "/s2.png",
  },
  {
    title: "Sewer pipeline services",
    description:
      "The drainage pipes used in plumbing systems should be airtight, gas-tight and tough enough and durable to withstand",
    imageUrl: "s3.png",
  },
  {
    title: "Drainage & potable water",
    description:
      "The whole network of pipes used in plumbing services should have ample means of cleaning and removing barriers.",
    imageUrl: "/s4.png",
  },
  {
    title: "Sewer line services",
    description:
      "Proper care has to be taken to check and rectify all possible air-locks, siphonage, under deposits and obstructions.",
    imageUrl: "/s5.png",
  },
  {
    title: "Emergency Plumbing",
    description:
      "There are many variations loream of passages Lorem Ipsum available, but the majority have suffered alteration",
    imageUrl: "/s6.png",
  },
];

const STATICS = [
  {
    start: 0,
    end: 179297,
    duration: 5,
    text: "Happy Clients",
    prefix: "+ ",
  },
  {
    start: 0,
    end: 1200,
    duration: 5,
    text: "Reached Clients",
    prefix: "+ ",
  },
  {
    start: 0,
    end: 4789,
    duration: 5,
    text: "Plumbing Services",
    prefix: "+ ",
  },
  {
    start: 0,
    end: 25,
    duration: 5,
    text: "Finished Projects",
    prefix: "+ ",
  },
];

const primaryMenu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About Us",
    url: "/aboutus",
  },
  {
    name: "Policies",
    url: "/policies",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Contact Us",
    url: "/contact",
  },
];
const followUsMenu = [
  {
    name: "Facebook",
    url: "#",
  },
  {
    name: "Instagram",
    url: "#",
  },
  {
    name: "You Tube",
    url: "#",
  },
  {
    name: "+91 9999 99999",
    url: "https://wa.me/(91{MOBILE-NUMBER})/",
    // e.g. : https://wa.me/919876543210/
    _blank: true,
  },
  {
    name: "abc@123gmail.com",
    url: "https://mail.google.com/mail/u/0/?fs=1&to={EMAIL-ID}&tf=cm",
    // e.g. : "https://mail.google.com/mail/u/0/?fs=1&to=abc@123gmail.com&tf=cm",
  },
];

export { HandyMen, DUMMY_SERVICES, STATICS, primaryMenu, followUsMenu };
