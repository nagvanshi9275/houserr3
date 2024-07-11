


const homeData = [
  {
    cityName: "Chennai",
    cityDescription: "A vibrant city known for its beaches, temples, and rich culture.",
    cityImages: "https://i.postimg.cc/9MRyp8Q2/chennai.jpg",
    locations: [
      {
        locationTitle: "Anna Nagar",
        locationDescription: "A well-planned residential area with good connectivity.",
        houseImages: ["https://i.postimg.cc/05DRb90k/anna1.jpg", "https://i.postimg.cc/t41z44FD/anna2.jpg", "https://i.postimg.cc/1Xq9z65s/anna3.jpg", "https://i.postimg.cc/RCDd5tHq/anna4.jpg"],
        pricing: "Starting from ₹1 crore",
        houses: [
          {
            houseTitle: "3 BHK Apartment",
            houseDescription: "A spacious 3-bedroom apartment with modern amenities.",
            housePricing: "₹1.5 crores",
            address: "101 Anna Nagar, Chennai",
            residentManager: "Rajesh Kumar",
            houseImages: ["anna_nagar_house1a.jpg", "anna_nagar_house1b.jpg", "anna_nagar_house1c.jpg", "anna_nagar_house1d.jpg"],
            nearbyProperties: [
              {
                propertyTitle: "Nearby Property 1",
                propertyDescription: "A cozy 2-bedroom flat.",
                propertyImages: ["anna_nagar_nearby1a.jpg", "anna_nagar_nearby1b.jpg", "anna_nagar_nearby1c.jpg", "anna_nagar_nearby1d.jpg"]
              },
              {
                propertyTitle: "Nearby Property 2",
                propertyDescription: "A modern 4-bedroom villa.",
                propertyImages: ["anna_nagar_nearby2a.jpg", "anna_nagar_nearby2b.jpg", "anna_nagar_nearby2c.jpg", "anna_nagar_nearby2d.jpg"]
              }
            ]
          },
          // Add more houses if needed
        ]
      },
      {
        locationTitle: "Velachery",
        locationDescription: "A bustling locality with commercial and residential complexes.",
        houseImages: ["https://i.postimg.cc/qvqS8K3T/val1.jpg", "https://i.postimg.cc/05DRb90k/anna1.jpg", "https://i.postimg.cc/1Xq9z65s/anna3.jpg", "https://i.postimg.cc/05DRb90k/anna1.jpg"],
        pricing: "Starting from ₹80 lakhs",
        houses: [
          {
            houseTitle: "2 BHK Apartment",
            houseDescription: "A cozy 2-bedroom apartment with amenities.",
            housePricing: "₹95 lakhs",
            address: "456 Velachery, Chennai",
            residentManager: "Sudha Murthy",
            houseImages: ["velachery_house1a.jpg", "velachery_house1b.jpg", "velachery_house1c.jpg", "velachery_house1d.jpg"],
            nearbyProperties: [
              {
                propertyTitle: "Nearby Property 1",
                propertyDescription: "A modern 3-bedroom flat.",
                propertyImages: ["velachery_nearby1a.jpg", "velachery_nearby1b.jpg", "velachery_nearby1c.jpg", "velachery_nearby1d.jpg"]
              },
              {
                propertyTitle: "Nearby Property 2",
                propertyDescription: "A spacious 4-bedroom villa.",
                propertyImages: ["velachery_nearby2a.jpg", "velachery_nearby2b.jpg", "velachery_nearby2c.jpg", "velachery_nearby2d.jpg"]
              }
            ]
          },
          // Add more houses if needed
        ]
      }
      // Add more locations for Chennai if needed
    ]
  },
  {
    cityName: "Pune",
    cityDescription: "A rapidly growing city known for its educational institutions and IT hubs.",
    cityImages: "https://i.postimg.cc/jS4mxLxP/bangluru.jpg",
    locations: [
      {
        locationTitle: "Kothrud",
        locationDescription: "A popular residential area with all essential facilities.",
        houseImages: ["kothrud_house1.jpg", "kothrud_house2.jpg", "kothrud_house3.jpg", "kothrud_house4.jpg"],
        pricing: "Starting from ₹70 lakhs",
        houses: [
          {
            houseTitle: "2 BHK Apartment",
            houseDescription: "A well-ventilated 2-bedroom apartment.",
            housePricing: "₹85 lakhs",
            address: "456 Kothrud Rd, Pune",
            residentManager: "Suresh Patil",
            houseImages: ["kothrud_house1a.jpg", "kothrud_house1b.jpg", "kothrud_house1c.jpg", "kothrud_house1d.jpg"],
            nearbyProperties: [
              {
                propertyTitle: "Nearby Property 1",
                propertyDescription: "A 1-bedroom flat in a prime location.",
                propertyImages: ["kothrud_nearby1a.jpg", "kothrud_nearby1b.jpg", "kothrud_nearby1c.jpg", "kothrud_nearby1d.jpg"]
              },
              {
                propertyTitle: "Nearby Property 2",
                propertyDescription: "A spacious 3-bedroom duplex.",
                propertyImages: ["kothrud_nearby2a.jpg", "kothrud_nearby2b.jpg", "kothrud_nearby2c.jpg", "kothrud_nearby2d.jpg"]
              }
            ]
          },
          // Add more houses if needed
        ]
      },
      {
        locationTitle: "Baner",
        locationDescription: "A developing suburb with a blend of residential and commercial spaces.",
        houseImages: ["baner_house1.jpg", "baner_house2.jpg", "baner_house3.jpg", "baner_house4.jpg"],
        pricing: "Starting from ₹75 lakhs",
        houses: [
          {
            houseTitle: "3 BHK Apartment",
            houseDescription: "A spacious 3-bedroom apartment with scenic views.",
            housePricing: "₹1.1 crores",
            address: "789 Baner Rd, Pune",
            residentManager: "Deepak Shah",
            houseImages: ["baner_house1a.jpg", "baner_house1b.jpg", "baner_house1c.jpg", "baner_house1d.jpg"],
            nearbyProperties: [
              {
                propertyTitle: "Nearby Property 1",
                propertyDescription: "A modern 2-bedroom apartment.",
                propertyImages: ["baner_nearby1a.jpg", "baner_nearby1b.jpg", "baner_nearby1c.jpg", "baner_nearby1d.jpg"]
              },
              {
                propertyTitle: "Nearby Property 2",
                propertyDescription: "A luxurious 4-bedroom villa.",
                propertyImages: ["baner_nearby2a.jpg", "baner_nearby2b.jpg", "baner_nearby2c.jpg", "baner_nearby2d.jpg"]
              }
            ]
          }
          // Add more houses if needed
        ]
      }
      // Add more locations for Pune if needed
    ]
  },
  {
    cityName: "Bangalore",
    cityDescription: "The Silicon Valley of India, known for its tech industry and pleasant climate.",
    cityImages: "https://i.postimg.cc/fyRZQp0n/itmh.jpg",
    locations: [
      {
        locationTitle: "Whitefield",
        locationDescription: "A bustling suburb with numerous IT parks and residential complexes.",
        houseImages: ["whitefield_house1.jpg", "whitefield_house2.jpg", "whitefield_house3.jpg", "whitefield_house4.jpg"],
        pricing: "Starting from ₹90 lakhs",
        houses: [
          {
            houseTitle: "4 BHK Villa",
            houseDescription: "A luxurious 4-bedroom villa with a private garden.",
            housePricing: "₹2 crores",
            address: "789 Whitefield Ln, Bangalore",
            residentManager: "Anil Reddy",
            houseImages: ["whitefield_house1a.jpg", "whitefield_house1b.jpg", "whitefield_house1c.jpg", "whitefield_house1d.jpg"],
            nearbyProperties: [
              {
                propertyTitle: "Nearby Property 1",
                propertyDescription: "A modern 3-bedroom apartment.",
                propertyImages: ["whitefield_nearby1a.jpg", "whitefield_nearby1b.jpg", "whitefield_nearby1c.jpg", "whitefield_nearby1d.jpg"]
              },
              {
                propertyTitle: "Nearby Property 2",
                propertyDescription: "A spacious 2-bedroom flat.",
                propertyImages: ["whitefield_nearby2a.jpg", "whitefield_nearby2b.jpg", "whitefield_nearby2c.jpg", "whitefield_nearby2d.jpg"]
              }
            ]
          },
          // Add more houses if needed
        ]
      },
      {
        locationTitle: "Indiranagar",
        locationDescription: "A trendy locality known for its vibrant nightlife and cultural diversity.",
        houseImages: ["indiranagar_house1.jpg", "indiranagar_house2.jpg", "indiranagar_house3.jpg", "indiranagar_house4.jpg"],
        pricing: "Starting from ₹1 crore",
        houses: [
          {
            houseTitle: "3 BHK Apartment",
            houseDescription: "A modern 3-bedroom apartment in the heart of Indiranagar.",
            housePricing: "₹1.5 crores",
            address: "456 Indiranagar St, Bangalore",
            residentManager: "Priya Sharma",
            houseImages: ["indiranagar_house1a.jpg", "indiranagar_house1b.jpg", "indiranagar_house1c.jpg", "indiranagar_house1d.jpg"],
            nearbyProperties: [
              {
                propertyTitle: "Nearby Property 1",
                propertyDescription: "A cozy 2-bedroom flat.",
                propertyImages: ["indiranagar_nearby1a.jpg", "indiranagar_nearby1b.jpg", "indiranagar_nearby1c.jpg", "indiranagar_nearby1d.jpg"]
              },
              {
                propertyTitle: "Nearby Property 2",
                propertyDescription: "A spacious 4-bedroom villa.",
                propertyImages: ["indiranagar_nearby2a.jpg", "indiranagar_nearby2b.jpg", "indiranagar_nearby2c.jpg", "indiranagar_nearby2d.jpg"]
              }
            ]
          }
          // Add more houses if needed
        ]
      }
      // Add more locations for Bangalore if needed
    ]
  },
  {
    cityName: "Delhi",
    cityDescription: "India's capital known for its history, culture, and political significance.",
    cityImages: "https://i.postimg.cc/pX4rQWnm/indiaget.webp",
    locations: [
      {
        locationTitle: "South Delhi",
        locationDescription: "A posh locality known for its green spaces and upscale residences.",
        houseImages: ["southdelhi_house1.jpg", "southdelhi_house2.jpg", "southdelhi_house3.jpg", "southdelhi_house4.jpg"],
        pricing: "Starting from ₹2 crores",
        houses: [
          {
            houseTitle: "3 BHK Apartment",
            houseDescription: "A spacious 3-bedroom apartment with modern amenities.",
            housePricing: "₹2.5 crores",
            address: "101 South Delhi, Delhi",
            residentManager: "Amit Singh",
            houseImages: ["southdelhi_house1a.jpg", "southdelhi_house1b.jpg", "southdelhi_house1c.jpg", "southdelhi_house1d.jpg"],
            nearbyProperties: [
              {
                propertyTitle: "Nearby Property 1",
                propertyDescription: "A cozy 2-bedroom flat.",
                propertyImages: ["southdelhi_nearby1a.jpg", "southdelhi_nearby1b.jpg", "southdelhi_nearby1c.jpg", "southdelhi_nearby1d.jpg"]
              },
              {
                propertyTitle: "Nearby Property 2",
                propertyDescription: "A luxurious 3-bedroom flat.",
                propertyImages: ["southdelhi_nearby2a.jpg", "southdelhi_nearby2b.jpg", "southdelhi_nearby2c.jpg", "southdelhi_nearby2d.jpg"]
              }
            ]
          },
          // Add more houses if needed
        ]
      },
      {
        locationTitle: "Gurgaon",
        locationDescription: "A major financial and technology hub with modern infrastructure.",
        houseImages: ["gurgaon_house1.jpg", "gurgaon_house2.jpg", "gurgaon_house3.jpg", "gurgaon_house4.jpg"],
        pricing: "Starting from ₹1 crore",
        houses: [
          {
            houseTitle: "4 BHK Apartment",
            houseDescription: "A spacious 4-bedroom apartment in the heart of Gurgaon.",
            housePricing: "₹2 crores",
            address: "456 Gurgaon St, Delhi",
            residentManager: "Kunal Sharma",
            houseImages: ["gurgaon_house1a.jpg", "gurgaon_house1b.jpg", "gurgaon_house1c.jpg", "gurgaon_house1d.jpg"],
            nearbyProperties: [
              {
                propertyTitle: "Nearby Property 1",
                propertyDescription: "A cozy 3-bedroom apartment.",
                propertyImages: ["gurgaon_nearby1a.jpg", "gurgaon_nearby1b.jpg", "gurgaon_nearby1c.jpg", "gurgaon_nearby1d.jpg"]
              },
              {
                propertyTitle: "Nearby Property 2",
                propertyDescription: "A luxurious 5-bedroom villa.",
                propertyImages: ["gurgaon_nearby2a.jpg", "gurgaon_nearby2b.jpg", "gurgaon_nearby2c.jpg", "gurgaon_nearby2d.jpg"]
              }
            ]
          }
          // Add more houses if needed
        ]
      }
      // Add more locations for Delhi if needed
    ]
  }
];


export default homeData



