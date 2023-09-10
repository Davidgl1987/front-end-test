export const mockFetchProducts = [{
  id: '123',
  brand: 'Samsung',
  model: 'Galaxy',
  price: '100',
  imgUrl: 'https://samsung.com/galaxy.jpg'
}, {
  id: '456',
  brand: 'iPhone',
  model: '24',
  price: '100000',
  imgUrl: 'https://apple.com/iphone24.jpg'
}]

export const mockFetchProductDetails = {
  id: '123',
  brand: 'Samsung',
  model: 'Galaxy',
  price: '100',
  imgUrl: 'https://samsung.com/galaxy.jpg',
  dimentions: '200 x 100 x 10',
  weight: '100',
  displayResolution: '1080',
  os: 'Android',
  cpu: 'Quad-core',
  ram: '2 GB',
  primaryCamera: ['5 MP', '1080p'],
  secondaryCmera: ['2 MP', '720p'],
  battery: '4000 mAh',
  options: {
    colors: [{ code: 1000, name: 'Black' }],
    storages: [{ code: 2000, name: '16 GB' }, { code: 2001, name: '32 GB' }]
  }
}
