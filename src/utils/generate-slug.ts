export function generateSlug(text: string): string {
  return text
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^\w\s-]/g, "")
  .replace(/\s+/g, "-");
}

//normalize-> "é" = "e´" Normaliza o texto para a forma de decomposição normalizada, onde letras acentuadas são divididas em letras simples e seus acentos.

//.replace(/[\u0300-\u036f]/g, "") -> remove todos esses sinais diacríticos do texto, deixando apenas as letras base.

//replace-> "e´" = "e"

//replace(/[^\w\s-]/g, "") -> Remove todos os caracteres que não são alfanuméricos, espaços, ou hífens.

//replace(/\s+/g, "-");-> Substitui um ou mais espaços em sequência por um hífen.