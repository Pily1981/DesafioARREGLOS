const propiedades_Venta = [
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
    } 
];

const propiedades_Arriendo= [
    { 
        name: 'Apartamento en el centro de la ciudad',
        imgSrc: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        desc: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        address: '123 Main Street, Anytown, CA 91234',
        rooms: 2,
        baths: 2,
        price: 2000,
        smoke: false,
        pets: true
    },      
    { 
        name: 'Apartamento luminoso con vista al mar',
        imgSrc: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        desc: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        address: '456 Ocean Avenue, Seaside Town, CA 56789',
        rooms: 3,
        baths: 3,
        price: 2500,
        smoke: true,
        pets: true 
    },
    { 
        name: 'Condominio moderno en zona residencial',
        imgSrc: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        desc: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        address: '123 Main Street, Anytown, CA 91234',
        rooms: 2,
        baths: 2,
        price: 2200,
        smoke: false,
        pets: false  
  }  
];


const propventas = document.querySelector("#ContainerVentas");

for (let propiedad1 of propiedades_Venta) {
  const HTML1 = `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img src="${propiedad1.imgSrc}"class="card-img-top" alt="Imagen de la propiedad"/>
      <div class="card-body">
        <h5 class="card-title">${propiedad1.name}</h5>
        <p class="card-text">${propiedad1.desc}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad1.address}</p>
        <p><i class="fas fa-bed"></i> ${propiedad1.rooms}  Habitaciones |
        <i class="fas fa-bath"></i> ${propiedad1.baths} Baños</p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad1.price}</p>
        <p class="text-${propiedad1.smoke ? "success" : "danger"}">
        <i class="fas fa-smoking${propiedad1.smoke ? "" : "-ban"}"></i> ${propiedad1.smoke ? "Permitido fumar" : "No se permite fumar"}</p>
        <p class="text-${propiedad1.pets ? "success" : "danger"}">
        <i class="fas fa${propiedad1.pets ? "-paw" : "-ban"}"></i>${propiedad1.pets ? "Mascotas permitidas" : "No se permiten mascotas"}</p>
      </div>
    </div>
  </div>
  `;
  propventas.innerHTML += HTML1;
}

const proparriendo = document.querySelector("#ContainerArriendos");

for (let propiedad2 of propiedades_Arriendo) {
  const HTML2 = `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img src="${propiedad2.imgSrc}"class="card-img-top" alt="Imagen de la propiedad"/>
      <div class="card-body">
        <h5 class="card-title">${propiedad2.name}</h5>
        <p class="card-text">${propiedad2.desc}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad2.address}</p>
        <p><i class="fas fa-bed"></i> ${propiedad2.rooms}  Habitaciones |
        <i class="fas fa-bath"></i> ${propiedad2.baths} Baños</p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad2.price}</p>
        <p class="text-${propiedad2.smoke ? "success" : "danger"}">
        <i class="fas fa-smoking${propiedad2.smoke ? "" : "-ban"}"></i> ${propiedad2.smoke ? "Permitido fumar" : "No se permite fumar"}</p>
        <p class="text-${propiedad2.pets ? "success" : "danger"}">
        <i class="fas fa${propiedad2.pets ? "-paw" : "-ban"}"></i>${propiedad2.pets ? "Mascotas permitidas" : "No se permiten mascotas"}</p>
      </div>
    </div>
  </div>
  `;
  proparriendo.innerHTML += HTML2;
};

