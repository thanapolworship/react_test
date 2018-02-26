function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

export const Images = importAll(require.context('./images', false, /\.(png|jpe?g|gif|svg)$/));
export const Contents = importAll(require.context('./images/contents', false, /\.(png|jpe?g|gif|svg)$/));
export const Icons = importAll(require.context('./images/icons', false, /\.(png|jpe?g|gif|svg)$/));
export const Logos = importAll(require.context('./images/logos', false, /\.(png|jpe?g|gif|svg)$/));