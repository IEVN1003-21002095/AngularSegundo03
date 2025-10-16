export class ZodiacoCal {
  signosChinos = [
    { signo: 'Mono', imagen: 'https://th.bing.com/th/id/OIP.2Knec6TVKzREakHT_eOtSAHaFT?w=250&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3' },
    { signo: 'Gallo', imagen: 'https://cdn.pixabay.com/photo/2020/01/09/15/04/gallo-4752996_1280.jpg' },
    { signo: 'Perro', imagen: 'https://www.rover.com/blog/wp-content/uploads/2018/06/border-collie-puppy-960x540.jpg' },
    { signo: 'Cerdo', imagen: 'https://pngimg.com/uploads/pig/pig_PNG2192.png' },
    { signo: 'Rata', imagen: 'https://media.airedesantafe.com.ar/p/05979b56514ee73df8676b9fa9149a3a/adjuntos/268/imagenes/002/193/0002193786/1200x675/smart/rata-topo.jpg' },
    { signo: 'Buey', imagen: 'https://th.bing.com/th/id/OIP.0uQgxntt5iFVI7D73sf0pQHaEK?w=303&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3' },
    { signo: 'Tigre', imagen: 'https://www.medioambiente.net/wp-content/uploads/tigre3.jpg' },
    { signo: 'Conejo', imagen: 'http://www.conejos.wiki/Imagenes/imagen-tierna-de-un-conejo-domestico.jpg' },
    { signo: 'Dragón', imagen: 'https://imgcdn.stablediffusionweb.com/2024/3/3/cd4e9755-6cdb-41c2-a12e-d504642db7a0.jpg' },
    { signo: 'Serpiente', imagen: 'https://cdn0.bioenciclopedia.com/es/posts/3/4/0/alimentacion_de_la_serpiente_43_1_orig.jpg' },
    { signo: 'Caballo', imagen: 'https://www.seresmitologicos.net/wp-content/uploads/2011/05/pegaso_mitologico.jpg' },
    { signo: 'Cabra', imagen: 'https://cdn0.bioenciclopedia.com/es/posts/9/9/4/cabra_499_orig.jpg' }
  ];

  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = '';

  calcularEdad(): string {
  const diaActual = new Date().getDate();
  const mesActual = new Date().getMonth()+1;
  const anioActual = new Date().getFullYear();

  let edad = anioActual - this.anio;
  if (this.mes > mesActual || (this.mes === mesActual && this.dia > diaActual)) {
    edad--;
  }

  return `Hola ${this.nombre}, tienes ${edad} años`;
}

  obtenerSignoChino(): string {
    const mensaje = ("Tu signo chino es " + this.signosChinos[this.anio % 12].signo);
    return mensaje;
  }

  obtenerImagenSignoChino(): string {
    return this.signosChinos[this.anio % 12].imagen;
  }
}
