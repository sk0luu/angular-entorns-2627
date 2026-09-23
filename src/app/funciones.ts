// Función que saluda al usuario
export function saludar(nom: string): string {
  return `Hola, ${nom}!`;
}

// Función que comprueba si una persona es mayor de edad
export function esMajorEdat(edat: number): boolean {
  return edat >= 18;
}

// Función que suma todos los números de un array
export function sumarArray(nums: number[]): number {
  return nums.reduce((total, numero) => total + numero, 0);
}
