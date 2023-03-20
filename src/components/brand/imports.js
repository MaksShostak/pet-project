import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';
import { nanoid } from 'nanoid';

const items = [
  {
    img: `${google}`,
    alt: 'google',
    id: nanoid(),
  },
  {
    img: `${slack}`,
    alt: 'slack',
    id: nanoid(),
  },
  {
    img: `${atlassian}`,
    alt: 'atlassian',
    id: nanoid(),
  },
  {
    img: `${dropbox}`,
    alt: 'dropbox',
    id: nanoid(),
  },
  {
    img: `${shopify}`,
    alt: 'shopify',
    id: nanoid(),
  },
];

export default items;
