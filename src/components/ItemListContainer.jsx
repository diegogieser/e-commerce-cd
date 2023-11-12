

import React from 'react';
import Perfume1 from './PerfumeFloral.jpg'
import Perfume2 from './PerfumeCitrico.jfif'
import Perfume3 from './PerfumeAmaderado.jpg'


const ItemListContainer = () => {
  return (
    <div className="item-list-container">
      <h2>Productos Destacados</h2>
      <div className="card-container">
        {/* Tarjeta 1 */}
        <div className="card">
          <img
            src={Perfume1}
            alt="Perfume Floral"
          />
          <h3>OuRouge FlowerPunch</h3>
          <p>Sumérgete en la elegancia floral de nuestro perfume, una mezcla cautivadora de jazmín, rosa y notas cítricas. Esta fragancia encantadora te envuelve en una sensación fresca y femenina, ideal para resaltar tu sofisticación en cualquier ocasión. Descubre la magia floral en cada rociada, una experiencia aromática que perdura con gracia y estilo.</p>
          <button>Comprar</button>
        </div>

        {/* Tarjeta 2 */}
        <div className="card">
          <img
            src={Perfume2}
            alt="Perfume Cítrico"
          />
          <h3>OuRouge Cítrika</h3>
          <p>Disfruta la frescura vibrante de nuestra fragancia cítrica. Una mezcla chispeante de bergamota, lima y mandarina que despierta tus sentidos con energía y vitalidad. Una explosión refrescante en cada rociada, perfecta para destacar tu positividad con un toque revitalizante.</p>
          <button>Comprar</button>
        </div>

        {/* Tarjeta 3 */}
        <div className="card">
          <img
            src={Perfume3}
            alt="Perfume Cítrico"
          />
          <h3>OuRouge WoodOvertake</h3>
          <p>
"Descubre la elegancia audaz de OuRouge WoodOvertake, una fragancia intrigante que fusiona la calidez de la madera con la intensidad del rojo. Notas misteriosas y envolventes se entrelazan para crear una experiencia sensorial única. Un aroma cautivador que deja una impresión duradera, personificando la fuerza y la sofisticación en cada gota."</p>
          <button>Comprar</button>
        </div>


        {/* Agrega más tarjetas según sea necesario */}
      </div>
    </div>
  );
};

export default ItemListContainer;
