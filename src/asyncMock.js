const prendasDeportivas = [
    { 
        nombre: "Remera Arsenal 2022/2023", 
        id: "1", 
        precio: 60000, 
        imagen: "https://i.pinimg.com/564x/58/e6/e9/58e6e923e80016daa8936fd3f00b4837.jpg", 
        descripcion: "Camiseta oficial del Arsenal para la temporada 2022/2023.", 
        category: "actual" 
    },
    { 
        nombre: "Remera River Plate 2019/2020", 
        id: "2", 
        precio: 60000, 
        imagen: "/img/river-plate-camiseta-2020-edition-front-1__12777.jpg", 
        descripcion: "Camiseta oficial de River Plate para la temporada 2019/2020.", 
        category: "actual" 
    },
    { 
        nombre: "Remera Liverpool 2016/2017", 
        id: "3", 
        precio: 75000, 
        imagen: "https://i.pinimg.com/564x/4a/f0/78/4af0782e8e3b8dff63b461ff8a05b4f0.jpg", 
        descripcion: "Camiseta oficial del Liverpool para la temporada 2016/2017.", 
        category: "retro" 
    },
    { 
        nombre: "Remera Ajax 2022/2023", 
        id: "4", 
        precio: 50000, 
        imagen: "/img/ajax 2022.jpg", 
        descripcion: "Camiseta oficial del Ajax para la temporada 2022/2023.", 
        category: "actual" 
    },
    { 
        nombre: "Remera Barcelona 2009", 
        id: "5", 
        precio: 80000, 
        imagen: "/img/barcelona 2009.jpg", 
        descripcion: "Camiseta histórica del Barcelona, usada en la temporada 2009.", 
        category: "retro" 
    },
    { 
        nombre: "Remera Arsenal 2005/2006", 
        id: "6", 
        precio: 80000, 
        imagen: "https://i.pinimg.com/564x/77/1b/77/771b77bb32caab8ee0c3c10e7989a675.jpg", 
        descripcion: "Camiseta del Arsenal usada en la temporada 2005/2006.", 
        category: "retro" 
    },
    { 
        nombre: "Remera Real Madrid 1996/1997", 
        id: "7", 
        precio: 100000, 
        imagen: "/img/real 96-97.jpg", 
        descripcion: "Camiseta clásica del Real Madrid de la temporada 1996/1997.", 
        category: "retro" 
    },
    { 
        nombre: "Remera Manchester United 2000/2001", 
        id: "8", 
        precio: 80000, 
        imagen: "/img/united 2000 2001.jpg", 
        descripcion: "Camiseta clásica del Manchester United, temporada 2000/2001.", 
        category: "retro" 
    },
    { 
        nombre: "Remera Seleccion Argentina 2022", 
        id: "9", 
        precio: 60000, 
        imagen: "/img/ARG2022_A.jpg", 
        descripcion: "Camiseta oficial de la selección argentina para el Mundial 2022.", 
        category: "actual" 
    },
    { 
        nombre: "Remera Seleccion Marruecos 2022", 
        id: "10", 
        precio: 60000, 
        imagen: "/img/Marruecos 2022.jpg", 
        descripcion: "Camiseta oficial de la selección de Marruecos para el Mundial 2022.", 
        category: "actual" 
    },
    { 
        nombre: "Remera Seleccion Uruguaya Retro", 
        id: "11", 
        precio: 70000, 
        imagen: "/img/uruguay retro.webp", 
        descripcion: "Camiseta retro de la selección uruguaya, diseño clásico.", 
        category: "retro" 
    },
    { 
        nombre: "Remera Brasil 2022", 
        id: "12", 
        precio: 35000, 
        imagen: "https://i.pinimg.com/564x/2b/de/32/2bde32baf5c0448d90f1fd2b0102cfed.jpg", 
        descripcion: "Camiseta oficial de la selección brasileña para el Mundial 2022.", 
        category: "actual" 
    },
    { 
        nombre: "Short de Argentina", 
        id: "13", 
        precio: 30000, 
        imagen: "/img/short argentina.jpg", 
        descripcion: "Short oficial de la selección argentina.", 
        category: "short" 
    },
    { 
        nombre: "Short de Lanus", 
        id: "14", 
        precio: 30000, 
        imagen: "/img/short lanus.jpg", 
        descripcion: "Short oficial del club Lanús.", 
        category: "short" 
    },
    { 
        nombre: "Short de River", 
        id: "15", 
        precio: 30000, 
        imagen: "/img/short river.jpg", 
        descripcion: "Short oficial de River Plate.", 
        category: "short" 
    },
    { 
        nombre: "Short de Voka", 
        id: "16", 
        precio: 30000, 
        imagen: "/img/short voka.webp", 
        descripcion: "Short oficial del club Voka.", 
        category: "short" 
    }
];


export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(prendasDeportivas);
    }, 500);
  });

export const getProduct = (id) => {
    return prendasDeportivas.find((prendaDeportiva) => prendaDeportiva.id == id);
}

export const getCategory = (categoryId) => {
    return prendasDeportivas.filter((prendaDeportiva)=> prendaDeportiva.category === categoryId)
};