import CName from "@/components/CName";

const SERVICES = [
  {
    title: "Toilet Installation",
    description:
      "Installation of various types of toilets including standard, low-flow, and dual-flush systems.",
    imageUrl: "/s1.png",
  },
  {
    title: "Geyser Repair and Maintenance",
    description:
      "Repair and maintenance services for geysers to ensure hot water availability.",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Waterproofing",
    description:
      "Specialized waterproofing services to prevent leaks and water damage in bathrooms.",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Renovation",
    description:
      "Comprehensive renovation services to update and enhance bathroom aesthetics and functionality.",
    imageUrl: "/s1.png",
  },
  {
    title: "Tile Restoration and Replacement",
    description:
      "Restoration and replacement of tiles to rejuvenate bathroom floors and walls.",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Design Consultation",
    description:
      "Consultation services to help design a functional and stylish bathroom layout.",
    imageUrl: "/s1.png",
  },
  {
    title: "Fixture Upgrades",
    description:
      "Upgrades to bathroom fixtures including faucets, showerheads, and toilet seats.",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Lighting Solutions",
    description:
      "Installation of lighting solutions tailored for bathroom environments.",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Ventilation Systems",
    description:
      "Installation and maintenance of ventilation systems to improve air quality and prevent mold.",
    imageUrl: "/s1.png",
  },
  {
    title: "Flooring Solutions",
    description:
      "Selection and installation of flooring materials suitable for bathrooms.",
    imageUrl: "/s1.png",
  },
  {
    title: "Wall Paint and Design",
    description:
      "Painting and design services to create a visually appealing bathroom space.",
    imageUrl: "/s1.png",
  },
  {
    title: "Plumbing Services",
    description:
      "Comprehensive plumbing services including repairs, installations, and maintenance.",
    imageUrl: "/s1.png",
  },
  {
    title: "Bath Additions",
    description:
      "Addition of new elements such as hand showers, bathtub liners, and vanity units.",
    imageUrl: "/s1.png",
  },
  {
    title: "Storage Solutions",
    description:
      "Customized storage solutions to maximize space and organization in bathrooms.",
    imageUrl: "/s1.png",
  },
  {
    title: "Sanitation Services",
    description:
      "Deep cleaning and sanitation services to maintain cleanliness and hygiene in bathrooms.",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Plumbing Repairs",
    description:
      "Leaky Faucets and Pipes: Quick and efficient repair of leaking faucets and pipes to prevent water wastage and damage. Showerhead and Tap Replacement: Installation of modern, water-saving showerheads and taps.",
    imageUrl: "/s1.png",
  },
  {
    title: "Installation Services",
    description:
      "Bathtub Installation: Professional installation of bathtubs, ensuring proper sealing and plumbing connections. Shower Enclosures: Installation of frameless or framed shower enclosures for a stylish and functional bathroom. Jacuzzi and Spa Tubs: Setting up luxurious jacuzzi and spa tubs with proper plumbing and electrical connections.",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Renovation",
    description:
      "Complete Bathroom Remodeling: From design to execution, providing complete renovation services to modernize and enhance bathroom aesthetics. Tile and Fixture Replacement: Replacing old tiles, fixtures, and fittings to give the bathroom a fresh look.",
    imageUrl: "/s1.png",
  },
  {
    title: "Water Heating Solutions",
    description:
      "Geyser Installation and Repair: Installation of various types of water heaters (instant, storage) and providing repair services. Solar Water Heaters: Installation and maintenance of eco-friendly solar water heating systems.",
    imageUrl: "/s1.png",
  },
  {
    title: "Drainage Solutions",
    description:
      "Clogged Drain Cleaning: Clearing blockages in bathroom drains using advanced tools and techniques. Sewer Line Repair and Replacement: Fixing issues with sewer lines to ensure smooth drainage.",
    imageUrl: "/s1.png",
  },
  {
    title: "Fixture Upgrades",
    description:
      "Smart Shower Systems: Installing high-tech shower systems with features like temperature control, music, and lighting. Water-Efficient Fixtures: Upgrading to water-efficient toilets, faucets, and showers to save water and reduce utility bills.",
    imageUrl: "/s1.png",
  },
  {
    title: "Emergency Plumbing Services",
    description:
      "24/7 Emergency Repairs: Immediate response to plumbing emergencies like burst pipes or severe leaks to prevent extensive damage.",
    imageUrl: "/s1.png",
  },
  {
    title: "Custom Bathroom Solutions",
    description:
      "Customized Vanities and Sinks: Creating custom-designed vanities and sinks to match the client's style and space requirements. Handicap Accessible Bathrooms: Designing and installing accessible bathrooms with features like grab bars, walk-in tubs, and roll-in showers.",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Lighting Solutions",
    description:
      "LED Lighting Installation: Energy-efficient LED lights for bright and eco-friendly bathroom lighting. Ambient Lighting: Creating a relaxing atmosphere with soft, ambient lighting solutions.",
    imageUrl: "/s1.png",
  },
  {
    title: "Water Filtration Systems",
    description:
      "Shower Water Filters: Installation of filters to ensure clean and purified water for showers. Whole-Bathroom Filtration: Comprehensive filtration systems for all bathroom water sources.",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Ventilation Solutions",
    description:
      "Exhaust Fan Installation: Installing high-performance exhaust fans to remove moisture and odors. Humidity Control Systems: Advanced systems to control humidity and prevent mold growth.",
    imageUrl: "/s1.png",
  },
  {
    title: "Luxury Bathroom Additions",
    description:
      "Heated Towel Racks: Installing heated racks for warm, cozy towels. Underfloor Heating: Installation of underfloor heating systems for a luxurious warm floor experience.",
    imageUrl: "/s1.png",
  },
  {
    title: "Eco-Friendly Bathroom Solutions",
    description:
      "Water-Saving Toilets: Installing ultra-low flush toilets to conserve water. Greywater Recycling Systems: Systems to recycle greywater for toilet flushing and irrigation.",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Accessories Installation",
    description:
      "Towel Bars and Hooks: Installing stylish and functional towel bars and hooks. Soap Dispensers and Holders: Installing various types of soap dispensers and holders for convenience.",
    imageUrl: "/s1.png",
  },
  {
    title: "Mirror and Cabinet Installation",
    description:
      "LED Mirrors: Installation of modern mirrors with integrated LED lighting. Medicine Cabinets: Installing medicine cabinets with various storage options.",
    imageUrl: "/s1.png",
  },
  {
    title: "Leak Detection Services",
    description:
      "Advanced Leak Detection: Using modern technology to detect hidden leaks in the bathroom. Preventative Maintenance: Regular maintenance to prevent potential leaks and water damage.",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Waterproofing",
    description:
      "Shower Waterproofing: Applying waterproofing solutions to prevent leaks and water damage. Complete Bathroom Waterproofing: Comprehensive waterproofing for all areas of the bathroom.",
    imageUrl: "/s1.png",
  },
  {
    title: "Bathroom Soundproofing",
    description:
      "Soundproofing Solutions: Installing soundproofing materials to reduce noise transmission. Quiet Ventilation Fans: Installing low-noise ventilation fans for a peaceful bathroom environment.",
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

const personalData = {
  COMPANY_NAME: "Gigwall",
  EMAIL: "servicesgigwell@gmail.com",
  MOBILE: "+91 75758 02028",
};

const termsAndConditions = [
  {
    title: "Service Commitment",
    description: (
      <>
        At <CName />, we are dedicated to providing top-notch bathroom
        transformation services. We aim to deliver an exceptional experience,
        ensuring your satisfaction with our designs, installations, and overall
        service.
      </>
    ),
  },
  {
    title: "Emergency Situations",
    description: (
      <>
        In the rare event of an emergency where our worker is unable to reach
        your location on time due to unforeseen circumstances, we kindly ask for
        your understanding and cooperation. <CName /> will make every effort to
        communicate promptly and find suitable solutions to address the
        situation. We appreciate your flexibility and patience during such
        unforeseen events.
      </>
    ),
  },
  {
    title: "Communication",
    description: (
      <>
        Effective communication is crucial for a successful partnership.{" "}
        <CName /> commits to keeping you informed throughout the service
        process. We encourage open dialogue, and our team is here to address any
        queries or concerns you may have regarding your bathroom project.
      </>
    ),
  },
  {
    title: "Service Terms",
    description: (
      <>
        Our services are provided on a project basis, and specific terms will be
        outlined in the agreement established between <CName /> and the client.
        These terms may include project timelines, costs, and any other relevant
        details specific to the scope of work.
      </>
    ),
  },
  {
    title: "Privacy and Confidentiality",
    description: (
      <>
        <CName /> respects your privacy and treats all client information with
        utmost confidentiality. Any data shared with us during the course of our
        services will be handled securely and in compliance with applicable
        privacy laws.
      </>
    ),
  },
  {
    title: "Payment",
    description: (
      <>
        Payment terms will be clearly communicated and agreed upon before the
        commencement of any project. <CName />
        accepts payments through the agreed-upon methods outlined in the service
        agreement.
      </>
    ),
  },
  {
    title: "Modifications to Terms",
    description: (
      <>
        <CName /> reserves the right to modify these terms and conditions at any
        time. Clients will be notified of any changes, and continued engagement
        with our services implies acceptance of the updated terms.
      </>
    ),
  },
  {
    title: "Termination of Services",
    description: (
      <>
        Either party may terminate the service agreement with reasonable notice.{" "}
        <CName /> retains the right to terminate services in the event of a
        breach of terms by the client.
      </>
    ),
  },
];

export { SERVICES, STATICS, personalData, primaryMenu, termsAndConditions };
