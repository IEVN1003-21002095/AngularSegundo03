export class AporB {
  resultado: number = 0;
  a : number = 0;
  b : number = 0;

  calcularMultiplicacion(): number {
    this.resultado = 0;
    for (let i = 0; i < this.b; i++) {
      this.resultado += this.a;
    }
    return this.resultado;
  }
}
