const propiedadesEnArriendo = [
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
  } ,
    { 
        name: 'Departamento de lujo con vistas al centro de la ciudad',
        imgSrc: 'https://f1a3d4fea3a9a877e732-356deb4d9644d2835b7712e712dbd1ea.ssl.cf2.rackcdn.com/433243/slide_7083016.v.a546daa52f625688eb8a5d1a47a7ea9b.jpg',
        desc: 'Este departamento de lujo ofrece vistas espectaculares al centro de la ciudad',
        address: '510 12th Avenue SW, Beltline, Calgary, AB',
        rooms: 2,
        baths: 2,
        price: 2800,
        smoke: false,
        pets: false
    } ,
    { 
        name: ' Casa de lujo en condominio privado',
        imgSrc: 'https://f1a3d4fea3a9a877e732-356deb4d9644d2835b7712e712dbd1ea.ssl.cf2.rackcdn.com/313343/3536515.v.9b97af12a603d91f445dd1ee6d4c4739.jpg',
        desc: 'Esta casa de lujo esta cerca de hermosos parques, ideal para familias',
        address: '604 Britannia Drive Southwest,Elboya, Calgary, AB',
        rooms: 3,
        baths: 2,
        price: 2500,
        smoke: false,
        pets: true  
    } ,
    { 
        name: 'Penthouse de lujo con terraza panorámica',
        imgSrc: 'https://f1a3d4fea3a9a877e732-356deb4d9644d2835b7712e712dbd1ea.ssl.cf2.rackcdn.com/417846/8087320.v.a004a12db89ca501f6ed06cd0a81973d.jpg',
        desc: 'Este departamento de lujo ofrece una terraza panorámica a toda la ciudad',
        address: '919 10 Ave SW, Downtown, Calgary, AB',
        rooms: 3,
        baths: 2,
        price: 3000,
        smoke: true,
        pets: false
    } 
];


const arriendos = document.querySelector("#sectionArriendos");

for (let propiedad4 of propiedadesEnArriendo) {
  const HTML4 = `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img src="${propiedad4.imgSrc}"class="card-img-top" alt="Imagen de la propiedad"/>
      <div class="card-body">
        <h5 class="card-title">${propiedad4.name}</h5>
        <p class="card-text">${propiedad4.desc}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${propiedad4.address}</p>
        <p><i class="fas fa-bed"></i> ${propiedad4.rooms}  Habitaciones |
        <i class="fas fa-bath"></i> ${propiedad4.baths} Baños</p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad4.price}</p>
        <p class="text-${propiedad4.smoke ? "success" : "danger"}">
        <i class="fas fa-smoking${propiedad4.smoke ? "" : "-ban"}"></i> ${propiedad4.smoke ? "Permitido fumar" : "No se permite fumar"}</p>
        <p class="text-${propiedad4.pets ? "success" : "danger"}">
        <i class="fas fa${propiedad4.pets ? "-paw" : "-ban"}"></i>${propiedad4.pets ? "Mascotas permitidas" : "No se permiten mascotas"}</p>
      </div>
    </div>
  </div>
  `;
  arriendos.innerHTML += HTML4;
  
}