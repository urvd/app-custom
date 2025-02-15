export function capitalizeFirstLetter(texte: string): string {
    if (!texte) return ""; // Vérifier si la chaîne est vide
    return texte.charAt(0).toUpperCase() + texte.substring(1);
}


export class AppSportError extends Error {
  constructor(msg:string){
    super(msg);
  }
}
