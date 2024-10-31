export type MenuItem = {
    name: string;
    description: string;
    price: number;
    courseType: string;
    image: string;
  }
  
  const menu: MenuItem[] = [
    // Starters
    {
      image: "https://www.thecountrycook.net/wp-content/uploads/2019/06/thumbnail-Baked-Beans-scaled.jpg",
      name: "Beans",
      description: "Grilled bean topped with diced tomatoes, garlic, and basil.",
      price: 12, 
      courseType: "starters"
    },
    {
      image: "https://www.recipetineats.com/tachyon/2022/09/Fries-with-rosemary-salt_1.jpg",
      name: "Fries",
      description: "Fries with garlic, herbs, and cheese.",
      price: 8, 
      courseType: "starters"
    },
    // Mains
    {
      image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2F2023-04-baked-salmon-how-to%2Fbaked-salmon-step6-4792",
      name: "Salmon",
      description: "Salmon fillet grilled to perfection, served with lemon butter sauce.",
      price: 25, 
      courseType: "mains"
    },
    {image: "https://cdn.britannica.com/18/137318-050-29F7072E/rooster-Rhode-Island-Red-roosters-chicken-domestication.jpg",
      name: "Chicken",
      description: "Pasta tossed in creamy sauce with grilled chicken.",
      price: 20, 
      courseType: "mains"
    },
    // Desserts
    {
      image: "https://pureitalian.net/wp-content/uploads/2022/06/italian-desserts-cantucci-cannolis.jpg",
      name: "Italia",
      description: "Classic Italian dessert made with cheese and chocolate",
      price: 14, 
      courseType: "desserts"
    },
    {
      image: "https://www.inspiredtaste.net/wp-content/uploads/2024/04/New-York-Cheesecake-Recipe-Video.jpg",
      name: "Cheesecake",
      description: "Rich and creamy cheesecake with crust.",
      price: 8, 
      courseType: "desserts"
    }
  ];
  
  export default menu; 
  