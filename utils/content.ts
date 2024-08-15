interface DefaultCategory {
  label: string;
  slug: string;
  image: string;
}

export const defaultCategory = (): DefaultCategory[] => ([
  { label: 'Pramuka', slug: 'pramuka', image: buildImageUrl('images/category/pramuka.jpg') },
  { label: 'Teknologi', slug: 'teknologi', image: buildImageUrl('images/category/teknologi.jpg') },
  { label: 'Coding', slug: 'coding', image: buildImageUrl('images/category/coding.jpg') },
  { label: 'Desain Grafis', slug: 'desain-grafis', image: buildImageUrl('images/category/desain.jpg') },
  { label: 'Pengalaman Hidup', slug: 'pengalaman-hidup', image: buildImageUrl('images/category/life.jpg') },
  { label: 'Kuliah', slug: 'kuliah', image: buildImageUrl('images/category/kuliah.jpg') },
]);