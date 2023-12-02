import NoImage from '../assets/noImg.jpg';

export const getCropped = (url: string) => {
  if (!url) return NoImage;

  const target = 'media/';
  const index = url.indexOf('media/') + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};
