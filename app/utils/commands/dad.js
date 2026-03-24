const globImages = import.meta.glob('~/assets/img/dad/*.{jpg,png,webp}', {
  eager: true,
  import: 'default',
});
const images = Object.values(globImages);

export const dad = () => {
  if (!images.length) return;
  const randomImage = images[Math.floor(Math.random() * images.length)];
  useImageViewer().value = { asset: randomImage, type: 'image' };
};

export const helpSummary = 'Show a photo of dad 💜';
