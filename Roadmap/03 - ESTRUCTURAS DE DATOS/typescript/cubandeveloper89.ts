// ***  Estructura de Datos  ***

// !    Array
let my_list = ['Brais', 'midudev', 'el_gato'];

let num_list = [2, 5, 7, 3, 7];

console.log(my_list);

my_list.push('John')  // * añadir al final
console.log(my_list);

my_list.unshift('Python')   // * añadir al inicio
console.log(my_list);   

console.log(my_list[0]);    // * accediendo a un elemento en mi lista segun su posición 

my_list.pop()       // * elimina el ultimo elemento de la lista
console.log(my_list);

my_list.shift()       // * elimina el primer elemento de la lista
console.log(my_list);

let my_second_list = my_list.slice(1, 3);   // * crea un nuevo array con elementos del primero
console.log(my_second_list);


my_list.splice(2,1);    // * elimina elementos segun su posicion
console.log(my_list);

my_list[1] = 'mouredev';    // * actualizar un elemento segun su posicion
console.log(my_list);

my_list.push('John');
my_list.push('Doe'); 
my_list.sort();             //  * Ordenar los elementos del array
console.log(my_list);



// !     Set 
let my_set:any = new Set();
my_set.add(3);                  // * añadiendo valores
my_set.add('ordenador');
my_set.add(true);
my_set.add('45');
console.log(my_set);


console.log(my_set.has('ordenador'));

my_set.delete('45')             // * eliminando por elemento

console.log(my_set);

console.log(my_set.size);       // * muestra el tamaño del set


// !     Map
let my_map = new Map();
my_map.set('a', 1);             // * insertando elementos 
my_map.set('b', 2);
my_map.set('c', 3);

console.log(my_map);

my_map.set('a', 89);            // * actualizando elemento
console.log(my_map);

my_map.delete('b');             // * eliminando elemento
console.log(my_map);


// !    Objects
let my_obj = {};                    //  * 2 maneras de declarar un objeto
let my_second_obj = new Object();

my_obj.name = 'Camilo'              //  *   insertando elementos clave/valor
my_obj.age = 35;
my_obj.profession = 'influencer'
console.log(my_obj);

my_obj.name = 'Brais';              // * actualizando elementos
console.log(my_obj);

delete my_obj.profession;           // * eliminando elemento
console.log(my_obj);

                            // ? *** Ejercicio Extra ***

const prompt = require('prompt-sync')({sigint:true});

interface Contacto {
    nombre: string;
    telefono: string;
}

const agenda: Contacto[] = [];

function mostrarMenu() {
    console.log("Agenda de Contactos");
    console.log("1. Buscar contacto");
    console.log("2. Insertar contacto");
    console.log("3. Actualizar contacto");
    console.log("4. Eliminar contacto");
    console.log("5. Salir");
}

function buscarContacto(nombre: string) {
    const contacto = agenda.find(c => c.nombre === nombre);
    if (contacto) {
        console.log("Contacto encontrado:");
        console.log(contacto);
    } else {
        console.log("Contacto no encontrado.");
    }
}

function insertarContacto() {
    const nombre = prompt("Ingrese el nombre del contacto:");
    let telefono = prompt("Ingrese el número de teléfono:");

    // Validación del número de teléfono
    while (!/^\d{11}$/.test(telefono)) {
        console.log("El número de teléfono debe tener 11 dígitos.");
        telefono = prompt("Ingrese el número de teléfono:");
    }

    const nuevoContacto: Contacto = { nombre, telefono };
    agenda.push(nuevoContacto);
    console.log("Contacto agregado exitosamente.");
}

function actualizarContacto(nombre: string) {
    const indice = agenda.findIndex(c => c.nombre === nombre);
    if (indice !== -1) {
        const nuevoTelefono = prompt("Ingrese el nuevo número de teléfono:");
        agenda[indice].telefono = nuevoTelefono;
        console.log("Contacto actualizado exitosamente.");
    } else {
        console.log("Contacto no encontrado.");
    }
}

function eliminarContacto(nombre: string) {
    const indice = agenda.findIndex(c => c.nombre === nombre);
    if (indice !== -1) {
        agenda.splice(indice, 1);
        console.log("Contacto eliminado exitosamente.");
    } else {
        console.log("Contacto no encontrado.");
    }
}

function main() {
    let opcion: string;
    do {
        mostrarMenu();
        opcion = prompt("Ingrese una opción:");

        switch (opcion) {
            case "1":
                const nombreBuscar = prompt("Ingrese el nombre a buscar:");
                buscarContacto(nombreBuscar);
                break;
            case "2":
                insertarContacto();
                break;
            case "3":
                const nombreActualizar = prompt("Ingrese el nombre a actualizar:");
                actualizarContacto(nombreActualizar);
                break;
            case "4":
                const nombreEliminar = prompt("Ingrese el nombre a eliminar:");
                eliminarContacto(nombreEliminar);
                break;
            case "5":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción inválida.");
        }
    } while (opcion !== "5");
}

main();




