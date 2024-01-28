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

const SERVICES = [
  {
    title: "Bathroom Design",
    description:
      "Tailored bathroom designs that combine functionality and aesthetics.",
    // image: "bathroom_design.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Installation Services",
    description:
      "Professional installation of bath fixtures, faucets, shower systems, and other bathroom essentials.",
    // image: "installation_services.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Customized Cabinetry",
    description:
      "Crafting bespoke bathroom cabinets to optimize storage space and enhance the overall look of the bathroom.",
    // image: "custom_cabinetry.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Tiling and Flooring",
    description:
      "Expert tiling and flooring services for bathrooms. Choose from a wide range of tiles and flooring materials.",
    // image: "tiling_flooring.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Fixture Repair and Maintenance",
    description:
      "Comprehensive repair and maintenance services for bathroom fixtures to ensure optimal condition.",
    // image: "fixture_maintenance.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Accessible Bathroom Solutions",
    description:
      "Designing and installing accessible bathrooms for individuals with mobility challenges.",
    // image: "accessible_bathrooms.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Transform outdated bathrooms into modern and stylish spaces through layout redesign and fixture upgrades.",
    // image: "bathroom_remodeling.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Spa and Wellness Features",
    description:
      "Integrating spa-like features into bathrooms for a relaxing and rejuvenating experience.",
    // image: "spa_features.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Green and Sustainable Solutions",
    description:
      "Providing environmentally friendly and sustainable options for bathrooms, including eco-conscious fixtures and materials.",
    // image: "green_solutions.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Shower Enclosure Installation",
    description:
      "Installation of various types of shower enclosures, including frameless glass and sliding doors.",
    // image: "shower_enclosures.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathtub Installation",
    description:
      "Professional installation of bathtubs, including freestanding, alcove, and corner tubs.",
    // image: "bathtub_installation.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Vanity Design and Installation",
    description:
      "Designing and installing stylish and functional bathroom vanities tailored to your space and needs.",
    // image: "vanity_design.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Mirror and Lighting Solutions",
    description:
      "Providing custom mirror and lighting solutions to enhance the aesthetics and functionality of your bathroom.",
    // image: "mirror_lighting.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Heated Flooring Installation",
    description:
      "Installation of radiant heating systems for warm and comfortable bathroom floors.",
    // image: "heated_flooring.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Toilet Replacement and Installation",
    description:
      "Efficient replacement and installation services for toilets, including water-saving and smart toilet options.",
    // image: "toilet_installation.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Faucet and Sink Upgrades",
    description:
      "Upgrading faucets and sinks for improved functionality, water efficiency, and aesthetic appeal.",
    // image: "faucet_sink_upgrades.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Waterproofing Services",
    description:
      "Ensuring proper waterproofing to protect your bathroom from water damage and mold.",
    // image: "waterproofing.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Ventilation Installation",
    description:
      "Installation of ventilation systems to promote air circulation and prevent humidity in the bathroom.",
    // image: "ventilation_installation.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Smart Home Integration",
    description:
      "Integrating smart home features into your bathroom, including smart mirrors, lighting, and temperature control.",
    // image: "smart_home_integration.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Custom Shower Design",
    description:
      "Designing unique and personalized shower spaces with custom features and fixtures.",
    // image: "custom_shower_design.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Decor Consultation",
    description:
      "Consultation services for selecting the right decor elements to complement your bathroom design.",
    // image: "bathroom_decor.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Color Scheme Consultation",
    description:
      "Expert advice on selecting the perfect color scheme for your bathroom to create a cohesive and inviting space.",
    // image: "color_scheme_consultation.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Grout and Caulking Services",
    description:
      "Professional grouting and caulking services to maintain the integrity and cleanliness of your bathroom surfaces.",
    // image: "grout_caulking.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Storage Solutions",
    description:
      "Maximizing storage space in your bathroom with innovative and space-saving storage solutions.",
    // image: "storage_solutions.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Anti-Slip Flooring Installation",
    description:
      "Installation of anti-slip flooring options to enhance safety and prevent accidents in the bathroom.",
    // image: "anti_slip_flooring.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Mirror Defogging Systems",
    description:
      "Installation of mirror defogging systems to keep bathroom mirrors clear and functional.",
    // image: "mirror_defogging.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Water-Efficient Fixture Upgrades",
    description:
      "Upgrading to water-efficient fixtures to reduce water consumption and promote sustainability.",
    // image: "water_efficient_fixtures.jpg",
    imageUrl: "/s1.png",
  },
  {
    title: "Custom Bathroom Accessories",
    description:
      "Creating custom accessories to add a personal touch to your bathroom, including towel racks, soap dispensers, and more.",
    // image: "custom_accessories.jpg",
    imageUrl: "/s1.png",
  },
];

const STATICS = [
  {
    start: 0,
    end: 135000,
    duration: 2,
    text: "Happy Customers",
    prefix: "+ ",
  },
  {
    start: 0,
    end: 20,
    duration: 5,
    text: "Plumbing Services",
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
    name: "Terms & Conditions",
    url: "/terms-conditions",
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

const termsAndConditions = [
  {
    title: "Service Commitment",
    description:
      "At [company_name], we are dedicated to providing top-notch bathroom transformation services. We aim to deliver an exceptional experience, ensuring your satisfaction with our designs, installations, and overall service.",
  },
  {
    title: "Emergency Situations",
    description:
      "In the rare event of an emergency where our worker is unable to reach your location on time due to unforeseen circumstances, we kindly ask for your understanding and cooperation. [company_name] will make every effort to communicate promptly and find suitable solutions to address the situation. We appreciate your flexibility and patience during such unforeseen events.",
  },
  {
    title: "Communication",
    description:
      "Effective communication is crucial for a successful partnership. [company_name] commits to keeping you informed throughout the service process. We encourage open dialogue, and our team is here to address any queries or concerns you may have regarding your bathroom project.",
  },
  {
    title: "Service Terms",
    description:
      "Our services are provided on a project basis, and specific terms will be outlined in the agreement established between [company_name] and the client. These terms may include project timelines, costs, and any other relevant details specific to the scope of work.",
  },
  {
    title: "Privacy and Confidentiality",
    description:
      "[company_name] respects your privacy and treats all client information with utmost confidentiality. Any data shared with us during the course of our services will be handled securely and in compliance with applicable privacy laws.",
  },
  {
    title: "Payment",
    description:
      "Payment terms will be clearly communicated and agreed upon before the commencement of any project. [company_name] accepts payments through the agreed-upon methods outlined in the service agreement.",
  },
  {
    title: "Modifications to Terms",
    description:
      "[company_name] reserves the right to modify these terms and conditions at any time. Clients will be notified of any changes, and continued engagement with our services implies acceptance of the updated terms.",
  },
  {
    title: "Termination of Services",
    description:
      "Either party may terminate the service agreement with reasonable notice. [company_name] retains the right to terminate services in the event of a breach of terms by the client.",
  },
];

export {
  HandyMen,
  SERVICES,
  STATICS,
  primaryMenu,
  followUsMenu,
  termsAndConditions,
};
