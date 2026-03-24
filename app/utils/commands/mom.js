const globImages = import.meta.glob('~/assets/img/mom/*.{jpg,png,webp}', {
  eager: true,
  import: 'default',
});
const images = Object.values(globImages);

export const mom = () => {
  if (!images.length) return;
  const randomImage = images[Math.floor(Math.random() * images.length)];
  useImageViewer().value = { asset: randomImage, type: 'image' };
};

export const helpSummary = 'Show a photo of mom 💜';
