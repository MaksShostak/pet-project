import items from './menu-items';

const Menu = () => {
  const elements = items.map(({ id, link, href }) => (
    <li key={id}>
      <a href={href}>{link}</a>
    </li>
  ));
  return <>{elements}</>;
};

export default Menu;
