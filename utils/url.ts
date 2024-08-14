export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase() // Ubah menjadi huruf kecil
    .trim() // Hilangkan spasi di awal dan akhir
    .replace(/[\s\W-]+/g, '-') // Ganti spasi, karakter khusus, dan tanda hubung dengan '-'
    .replace(/^-+|-+$/g, ''); // Hilangkan tanda '-' di awal atau akhir slug
}