const propiedadesEnVenta = [
    { 
        name: 'Apartamento de lujo en zona exclusiva',
        imgSrc: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        desc: 'Este apartamento de lujo est\u00e1 ubicado en una exclusiva zona residencial',
        address: '123 Luxury Lane, Prestige Suburb, CA 45678',
        rooms: 4,
        baths: 4,
        price: 5000,
        smoke: false,
        pets: false 
    },      
    { 
        name: 'Apartamento acogedor en la montaña',
        imgSrc: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        desc: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        address: '789 Mountain Road, Summit Peaks, CA 23456',
        rooms: 2,
        baths: 1,
        price: 1200,
        smoke: true,
        pets: true 
    },
    { 
        name: 'Penthouse de lujo con terraza panorámica',
        imgSrc: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        desc: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        address: '567 Skyline Avenue, Skyview City, CA 56789.',
        rooms: 3,
        baths: 3,
        price: 4500,
        smoke: false,
        pets: true  
    } ,
    { 
        name: 'Apartamento de lujo con vistas al centro de la ciudad',
        imgSrc: 'https://f1a3d4fea3a9a877e732-356deb4d9644d2835b7712e712dbd1ea.ssl.cf2.rackcdn.com/570496/slide_10078626.v.d933a30c147f061595ba1e432941308b.jpg',
        desc: 'Este departamento de lujo ofrece vistas espectaculares al centro de la ciudad',
        address: '320 19 Ave SW, Mission, Calgary, AB.',
        rooms: 2,
        baths: 2,
        price: 3800,
        smoke: false,
        pets: true  
    } ,
    { 
        name: ' Casa de lujo en condominio privado',
        imgSrc: 'https://f1a3d4fea3a9a877e732-356deb4d9644d2835b7712e712dbd1ea.ssl.cf2.rackcdn.com/535226/9091566.v.d6b664afec94d23cc1b7cff0fb95dc0a.jpg',
        desc: 'Esta casa de lujo esta cerca de hermosos parques, y posee seguridad las 24hrs',
        address: '604 Britannia Drive Southwest,Elboya, Calgary, AB',
        rooms: 4,
        baths: 3,
        price: 6500,
        smoke: false,
        pets: false  
    } ,
    { 
        name: 'Apartamento de lujo con terraza panorámica',
        imgSrc: 'https://f1a3d4fea3a9a877e732-356deb4d9644d2835b7712e712dbd1ea.ssl.cf2.rackcdn.com/490505/7976412.v.2dc4e0440ac9e633f82c9d4dc258648a.jpg',
        desc: 'Este departamento de lujo ofrece una terraza panorámica con vista al oceano Pacifico',
        address: '1770 Davie Street, West End, Vancouver, BC',
        rooms: 3,
        baths: 2,
        price: 5500,
        smoke: false,
        pets: true  
    } 
];


const Ventas = document.querySelector("#sectionVentas");

for (let propiedad of propiedadesEnVenta) {
  console.log(propiedad.smoke);
  const HTML3 = `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img src="${propiedad.imgSrc}"class="card-img-top" alt="Imagen de la propiedad"/>
      <div class="card-body">
        <h5 class="card-title">${propiedad.name}</h5>
        <p class="card-text">${propiedad.desc}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.address}</p>
        <p><i class="fas fa-bed"></i> ${propiedad.rooms}  Habitaciones |
        <i class="fas fa-bath"></i> ${propiedad.baths} Baños</p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.price}</p>
        <p class="text-${propiedad.smoke ? "success" : "danger"}">
        <i class="fas fa-smoking${propiedad.smoke ? "" : "-ban"}"></i> ${propiedad.smoke ? "Permitido fumar" : "No se permite fumar"}</p>
        <p class="text-${propiedad.pets ? "success" : "danger"}">
        <i class="fas fa${propiedad.pets ? "-paw" : "-ban"}"></i>${propiedad.pets ? "Mascotas permitidas" : "No se permiten mascotas"}</p>
      </div>
    </div>
  </div>
  `;
  Ventas.innerHTML += HTML3;
}