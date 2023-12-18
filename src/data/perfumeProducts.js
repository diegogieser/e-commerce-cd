const perfumeProducts = [
    {
      id: 1,
      categoria: 'Mujer',
      nombre: 'Eau de Luxe',
      dscripcion: 'Fragancia floral con notas de jazmín y rosa.',
      precio: 49.99,
      imagen: 'https://ae01.alicdn.com/kf/S19d560cbe3fc4754a59b8979db3dfc96X/Perfume-Floral-delicado-para-mujer-fragancia-duradera-de-100ml-regalo-Natural-fresco-para-ni-as-y.jpg_120x120.jpg',
    },
    {
      id: 2,
      categoria: 'Mujer',
      nombre: 'Mystic Musk',
      dscripcion: 'Aroma misterioso con notas de sándalo y almizcle.',
      precio: 39.99,
      imagen: 'https://ae01.alicdn.com/kf/S19d560cbe3fc4754a59b8979db3dfc96X/Perfume-Floral-delicado-para-mujer-fragancia-duradera-de-100ml-regalo-Natural-fresco-para-ni-as-y.jpg_120x120.jpg',
    },
    {
      id: 3,
      categoria: 'Mujer',
      nombre: 'Citrus Splash',
      dscripcion: 'Refrescante fragancia cítrica con toques de limón y naranja.',
      precio: 29.99,
      imagen: 'https://ae01.alicdn.com/kf/S19d560cbe3fc4754a59b8979db3dfc96X/Perfume-Floral-delicado-para-mujer-fragancia-duradera-de-100ml-regalo-Natural-fresco-para-ni-as-y.jpg_120x120.jpg',
    },
    {
      id: 4,
      categoria: 'Mujer',
      nombre: 'Velvet Rose',
      dscripcion: 'Elegante aroma a rosas con un toque de vainilla.',
      precio: 54.99,
      imagen: 'https://ae01.alicdn.com/kf/S19d560cbe3fc4754a59b8979db3dfc96X/Perfume-Floral-delicado-para-mujer-fragancia-duradera-de-100ml-regalo-Natural-fresco-para-ni-as-y.jpg_120x120.jpg',
    },
    {
      id: 5,
      categoria: 'Mujer',
      nombre: 'Ocean Breeze',
      dscripcion: 'Fragancia fresca con notas de agua de mar y brisa marina.',
      precio: 44.99,
      imagen: 'https://ae01.alicdn.com/kf/S19d560cbe3fc4754a59b8979db3dfc96X/Perfume-Floral-delicado-para-mujer-fragancia-duradera-de-100ml-regalo-Natural-fresco-para-ni-as-y.jpg_120x120.jpg',
    },
    {
      id: 6,
      categoria: 'Hombre',
      nombre: 'Passion Fruit Bliss',
      dscripcion: 'Fragancia tropical con la dulzura de la fruta de la pasión.',
      precio: 34.99,
      imagen: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      id: 7,
      categoria: 'Hombre',
      nombre: 'Enchanting Jasmine',
      dscripcion: 'Aroma encantador con notas dominantes de jazmín.',
      precio: 49.99,
      imagen: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      id: 8,
      categoria: 'Hombre',
      nombre: 'Spicy Amber',
      dscripcion: 'Fragancia intensa con toques de ámbar y especias.',
      precio: 59.99,
      imagen: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      id: 9,
      categoria: 'Unisex',
      nombre: 'Golden Orchid',
      dscripcion: 'Aroma floral exquisito con la elegancia de la orquídea dorada.',
      precio: 64.99,
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_817255-MLU71590584289_092023-O.webp',

    },
    {
      id: 10,
      categoria: 'Unisex',
      nombre: 'Cedarwood Serenity',
      dscripcion: 'Fragancia calmante con notas de madera de cedro.',
      precio: 39.99,
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_817255-MLU71590584289_092023-O.webp',

    },
  ];

  export const fetchProductList = () => {
    return new Promise((res) => {
      setTimeout(() => {
        res(perfumeProducts);
      }, 1000); //retardo
    });
  };

  export const fetchProductById = (id) => {
    return new Promise((res) => {
      setTimeout(() => {
        const productFilter = perfumeProducts.find(
          (prod) => prod.id === parseInt(id)
        );
        res(productFilter);
      }, 1000);
    });
  };

  export const fetchProductByCategory = (category) => {
    return new Promise((res) => {
      setTimeout(() => {
        const productFilter = perfumeProducts.filter(
          (prod) => prod.categoria === category
        );
        res(productFilter);
      }, 1000);
    });
  };
  
  export default perfumeProducts;
  