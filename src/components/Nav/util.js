import { CONTACT_PAGE_ID, ABOUT_PAGE_ID, TITLE_PAGE_ID } from '../../utils/ids';

import CriminiIcon from '../../assets/criminiIcon.png';
import ChantrelleIcon from '../../assets/chantrelleIcon.png';
import KingOysterIcon from '../../assets/kingOysterIcon.png';

export const links = [
  {
    order: 0,
    alt: 'chantrelle',
    src: ChantrelleIcon,
    title: 'About',
    id: TITLE_PAGE_ID,
  },
  {
    order: 1,
    alt: 'crimini',
    src: CriminiIcon,
    title: 'Home',
    id: ABOUT_PAGE_ID,
  },
  {
    order:2, 
    alt: 'king oyster',
    src: KingOysterIcon,
    title: 'Contact',
    id: CONTACT_PAGE_ID,
  },
]
