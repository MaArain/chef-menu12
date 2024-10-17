export type MenuItem = {
    name: string;
    description: string;
    price: number;
    courseType: string;
    image: string;
  };
  
  const menu: MenuItem[] = [
    // Starters
    {
      image: "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
      name: "Beans",
      description: "Grilled bean topped with diced tomatoes, garlic, and basil.",
      price: 9, 
      courseType: "starters"
    },
    {
      image: "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
      name: "Fries",
      description: "Fries with garlic, herbs, and cheese.",
      price: 9, 
      courseType: "starters"
    },
    // Mains
    {
      image: "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
      name: "Salmon",
      description: "Salmon fillet grilled to perfection, served with lemon butter sauce.",
      price: 23, 
      courseType: "mains"
    },
    {image: "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
      name: "Chicken",
      description: "Pasta tossed in creamy sauce with grilled chicken.",
      price: 19, 
      courseType: "mains"
    },
    // Desserts
    {
      image: "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
      name: "Italia",
      description: "Classic Italian dessert made with coffee and cheese.",
      price: 8, 
      courseType: "desserts"
    },
    {
      image: "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg",
      name: "Cheesecake",
      description: "Rich and creamy cheesecake with crust.",
      price: 7, 
      courseType: "desserts"
    }
  ];
  
  export default menu; 
  