const prendasDeportivas = [
    { 
        nombre: "Remera Arsenal 2022/2023", 
        id: "1", 
        precio: 60000, 
        imagen: "https://i.pinimg.com/564x/58/e6/e9/58e6e923e80016daa8936fd3f00b4837.jpg", 
        descripcion: "Camiseta oficial del Arsenal para la temporada 2022/2023.", 
        category: "actual",
        stock: 18 
    },
    { 
        nombre: "Remera River Plate 2019/2020", 
        id: "2", 
        precio: 60000, 
        imagen: "https://i.postimg.cc/CLvQHrwP/river-plate-camiseta-2020-edition-front-1-12777.jpg", 
        descripcion: "Camiseta oficial de River Plate para la temporada 2019/2020.", 
        category: "actual",
        stock: 27 
    },
    { 
        nombre: "Remera Liverpool 2016/2017", 
        id: "3", 
        precio: 75000, 
        imagen: "https://i.pinimg.com/564x/4a/f0/78/4af0782e8e3b8dff63b461ff8a05b4f0.jpg", 
        descripcion: "Camiseta oficial del Liverpool para la temporada 2016/2017.", 
        category: "retro",
        stock: 12 
    },
    { 
        nombre: "Remera Ajax 2022/2023", 
        id: "4", 
        precio: 50000, 
        imagen: "https://i.postimg.cc/fTRn9nRr/ajax-2022.jpg", 
        descripcion: "Camiseta oficial del Ajax para la temporada 2022/2023.", 
        category: "actual",
        stock: 19 
    },
    { 
        nombre: "Remera Barcelona 2009", 
        id: "5", 
        precio: 80000, 
        imagen: "https://i.postimg.cc/njS2hSGY/barcelona-2009.jpg", 
        descripcion: "Camiseta histórica del Barcelona, usada en la temporada 2009.", 
        category: "retro",
        stock: 22 
    },
    { 
        nombre: "Remera Arsenal 2005/2006", 
        id: "6", 
        precio: 80000, 
        imagen: "https://i.pinimg.com/564x/77/1b/77/771b77bb32caab8ee0c3c10e7989a675.jpg", 
        descripcion: "Camiseta del Arsenal usada en la temporada 2005/2006.", 
        category: "retro",
        stock: 10 
    },
    { 
        nombre: "Remera Real Madrid 1996/1997", 
        id: "7", 
        precio: 100000, 
        imagen: "https://i.postimg.cc/hztMgRTt/real-96-97.jpg", 
        descripcion: "Camiseta clásica del Real Madrid de la temporada 1996/1997.", 
        category: "retro",
        stock: 18 
    },
    { 
        nombre: "Remera Manchester United 2000/2001", 
        id: "8", 
        precio: 80000, 
        imagen: "https://i.postimg.cc/R3XQgpy5/united-2000-2001.jpg", 
        descripcion: "Camiseta clásica del Manchester United, temporada 2000/2001.", 
        category: "retro",
        stock: 5 
    },
    { 
        nombre: "Remera Seleccion Argentina 2022", 
        id: "9", 
        precio: 60000, 
        imagen: "https://i.postimg.cc/fRzMkrB8/ARG2022-A.jpg", 
        descripcion: "Camiseta oficial de la selección argentina para el Mundial 2022.", 
        category: "actual",
        stock: 30 
    },
    { 
        nombre: "Remera Seleccion Marruecos 2022", 
        id: "10", 
        precio: 60000, 
        imagen: "https://i.postimg.cc/t1XNtGrN/Marruecos-2022.jpg", 
        descripcion: "Camiseta oficial de la selección de Marruecos para el Mundial 2022.", 
        category: "actual",
        stock: 2 
    },
    { 
        nombre: "Remera Seleccion Uruguaya Retro", 
        id: "11", 
        precio: 70000, 
        imagen: "https://i.postimg.cc/NK8xHjx0/uruguay-retro.webp", 
        descripcion: "Camiseta retro de la selección uruguaya, diseño clásico.", 
        category: "retro",
        stock: 12 
    },
    { 
        nombre: "Remera Brasil 2022", 
        id: "12", 
        precio: 35000, 
        imagen: "https://i.pinimg.com/564x/2b/de/32/2bde32baf5c0448d90f1fd2b0102cfed.jpg", 
        descripcion: "Camiseta oficial de la selección brasileña para el Mundial 2022.", 
        category: "actual",
        stock: 14 
    },
    { 
        nombre: "Short de Argentina", 
        id: "13", 
        precio: 30000, 
        imagen: "https://i.postimg.cc/5jHqm3mT/short-argentina.jpg", 
        descripcion: "Short oficial de la selección argentina.", 
        category: "short",
        stock: 12 
    },
    { 
        nombre: "Short de Lanus", 
        id: "14", 
        precio: 30000, 
        imagen: "https://i.postimg.cc/rRt1FVmM/short-lanus.jpg", 
        descripcion: "Short oficial del club Lanús.", 
        category: "short",
        stock: 9 
    },
    { 
        nombre: "Short de River", 
        id: "15", 
        precio: 30000, 
        imagen: "https://i.postimg.cc/yWwhpZQd/short-river.jpg", 
        descripcion: "Short oficial de River Plate.", 
        category: "short",
        stock: 25 
    },
    { 
        nombre: "Short de Voka", 
        id: "16", 
        precio: 30000, 
        imagen: "/img/short voka.webp", 
        descripcion: "Short oficial del club Voka.", 
        category: "short",
        stock: 24 
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