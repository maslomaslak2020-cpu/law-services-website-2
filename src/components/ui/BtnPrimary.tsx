import { Link } from 'react-router-dom';

const G = '#C8A35F';
const DEEP = '#081629';

interface Props {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function BtnPrimary({ to, href, onClick, children, className = '' }: Props) {
  const style = {
    background: G,
    color: DEEP,
    fontFamily: 'inherit',
  };
  const cls = `font-golos text-[13px] font-semibold px-7 py-3.5 inline-block transition-opacity duration-200 hover:opacity-85 tracking-wide ${className}`;

  if (to) return <Link to={to} className={cls} style={style}>{children}</Link>;
  if (href) return <a href={href} className={cls} style={style}>{children}</a>;
  return <button onClick={onClick} className={cls} style={style}>{children}</button>;
}
