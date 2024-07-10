

const homeData = [
    {
      cityName: "Chennai",
      cityDescription: "A vibrant city with rich cultural heritage and modern infrastructure.",
      cityImages: "https://i.postimg.cc/zXCfsb7Q/indiaget.webp",
      locations: [
        {
          locationTitle: "Adyar",
          locationDescription: "A prime residential area with excellent connectivity.",
          houseImages: ["https://i.postimg.cc/z3mc3prx/pexels-jvdm-1457842.jpg", "https://i.postimg.cc/G2zHKS25/pexels-pixabay-271624.jpg", "https://i.postimg.cc/C1Js87VF/pexels-fotoaibe-1669799.jpg", "https://i.postimg.cc/zXCfsb7Q/indiaget.webp"],
          pricing: "Starting from ₹80 lakhs",
          houses: [
            {
              houseTitle: "3 BHK Apartment",
              houseDescription: "A spacious 3-bedroom apartment with modern amenities.",
              housePricing: "₹1.2 crores",
              address: "123 Adyar St, Chennai",
              residentManager: "Rajesh Kumar",
              houseImages: ["https://i.postimg.cc/zXCfsb7Q/indiaget.webp", "https://i.postimg.cc/zXCfsb7Q/indiaget.webp", "https://i.postimg.cc/zXCfsb7Q/indiaget.webp", "https://i.postimg.cc/zXCfsb7Q/indiaget.webp"],
              nearbyProperties: [
                {
                  propertyTitle: "Nearby Property 1",
                  propertyDescription: "A cozy 2-bedroom apartment.",
                  propertyImages: ["adyar_nearby1a.jpg", "adyar_nearby1b.jpg", "adyar_nearby1c.jpg", "adyar_nearby1d.jpg"]
                },
                {
                  propertyTitle: "Nearby Property 2",
                  propertyDescription: "A modern studio apartment.",
                  propertyImages: ["adyar_nearby2a.jpg", "adyar_nearby2b.jpg", "adyar_nearby2c.jpg", "adyar_nearby2d.jpg"]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      cityName: "Pune",
      cityDescription: "A rapidly growing city known for its educational institutions and IT hubs.",
      cityImages: "https://i.postimg.cc/zXCfsb7Q/indiaget.webp",
      locations: [
        {
          locationTitle: "Kothrud",
          locationDescription: "A popular residential area with all essential facilities.",
          houseImages: ["https://i.postimg.cc/kGnVsrWk/architecture-5339245-1280.jpg", "https://i.postimg.cc/zXCfsb7Q/indiaget.webp", "kothrud_house3.jpg", "kothrud_house4.jpg"],
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
            }
          ]
        }
      ]
    },
    {
      cityName: "Bangalore",
      cityDescription: "The Silicon Valley of India, known for its tech industry and pleasant climate.",
      cityImages: "https://i.postimg.cc/zXCfsb7Q/indiaget.webp",
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
            }
          ]
        }
      ]
    },
    {
      cityName: "Delhi",
      cityDescription: "The capital city of India, rich in history and cultural diversity.",
      cityImages: "https://i.postimg.cc/zXCfsb7Q/indiaget.webp",
      locations: [
        {
          locationTitle: "South Delhi",
          locationDescription: "An upscale area known for its luxurious properties.",
          houseImages: ["southdelhi_house1.jpg", "southdelhi_house2.jpg", "southdelhi_house3.jpg", "southdelhi_house4.jpg"],
          pricing: "Starting from ₹1.5 crores",
          houses: [
            {
              houseTitle: "5 BHK Mansion",
              houseDescription: "A grand 5-bedroom mansion with state-of-the-art facilities.",
              housePricing: "₹5 crores",
              address: "101 South Delhi Rd, Delhi",
              residentManager: "Pankaj Mehra",
              houseImages: ["southdelhi_house1a.jpg", "southdelhi_house1b.jpg", "southdelhi_house1c.jpg", "southdelhi_house1d.jpg"],
              nearbyProperties: [
                {
                  propertyTitle: "Nearby Property 1",
                  propertyDescription: "A modern 4-bedroom penthouse.",
                  propertyImages: ["southdelhi_nearby1a.jpg", "southdelhi_nearby1b.jpg", "southdelhi_nearby1c.jpg", "southdelhi_nearby1d.jpg"]
                },
                {
                  propertyTitle: "Nearby Property 2",
                  propertyDescription: "A luxurious 3-bedroom flat.",
                  propertyImages: ["southdelhi_nearby2a.jpg", "southdelhi_nearby2b.jpg", "southdelhi_nearby2c.jpg", "southdelhi_nearby2d.jpg"]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  export default homeData;
  






