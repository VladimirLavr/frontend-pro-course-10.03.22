import './Header.scss';

export function Header () {
  const userName = 'Andrii Doroshenko';
  const userNick = 'itsdorosh';
  return (
    <header>
      <h1>{userName}</h1>
      <p>{userNick}</p>
    </header>
  );
}
