import keyb from '../assets/keyb.jpeg'
import monitor from '../assets/monitor.jpg'
import naysh from '../assets/naysh.webp'

const catalog = {
  title: 'каталог товаров',
  products: [
    {
      id: 1,
      name: 'наушники',
      price: 90,
      discount: 5,
      image: naysh,
    },
    {
      id: 2,
      name: 'клавиатура',
      price: 9900,
      discount: 0,
      image: keyb,
    },
    {
      id: 3,
      name: 'монитор',
      price: 99900,
      discount: 10,
      image: monitor,
    },
  ],
}

export default catalog