/**
 *
 * @param {String} assetPath - path to the asset folder
 * @param {String?} extension - default is *
 * @returns
 */

export const useRandomAsset = (assetPath, extension = '*') => {
  const globPath = `~/assets/${assetPath}/${extension}`;
  const glob = import.meta.glob(globPath, {
    eager: true,
    import: 'default',
  });
  const fileList = Object.values(glob);
  if (!fileList.length) {
    throw new Error(`No assets found in ~/assets/${assetPath}/${extension}`);
  }
  const randomAsset = fileList[Math.floor(Math.random() * fileList.length)];
  return randomAsset;
};
