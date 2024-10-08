export type MenuItem = {
    name: string;
    description: string;
    price: number;
    courseType: string;
  };
  
  const menu: MenuItem[] = [
    // Starters
    {
      name: "Beans",
      description: "Grilled bean topped with diced tomatoes, garlic, and basil.",
      price: 9, 
      courseType: "starters"
    },
    {
      name: "Fries",
      description: "Fries with garlic, herbs, and cheese.",
      price: 9, 
      courseType: "starters"
    },
    // Mains
    {
      name: "Salmon",
      description: "Salmon fillet grilled to perfection, served with lemon butter sauce.",
      price: 23, 
      courseType: "mains"
    },
    {
      name: "Chicken",
      description: "Pasta tossed in creamy sauce with grilled chicken.",
      price: 19, 
      courseType: "mains"
    },
    // Desserts
    {
      name: "Italia",
      description: "Classic Italian dessert made with coffee and cheese.",
      price: 8, 
      courseType: "desserts"
    },
    {
      name: "Cheesecake",
      description: "Rich and creamy cheesecake with crust.",
      price: 7, 
      courseType: "desserts"
    }
  ];
  
  export default menu; 
  