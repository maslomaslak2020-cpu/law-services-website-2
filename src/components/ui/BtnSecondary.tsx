import { Link } from 'react-router-dom';

const G = '#C8A35F';

interface Props {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function BtnSecondary({ to, href, onClick, children, className = '' }: Props) {
  const style = {
    border: `1px solid rgba(200,163,95,0.45)`,
    color: G,
  };
  const cls = `font-golos text-[13px] font-medium px-7 py-3.5 inline-block transition-all duration-200 hover:border-[#C8A35F] tracking-wide ${className}`;

  if (to) return <Link to={to} className={cls} style={style}>{children}</Link>;
  if (href) return <a href={href} className={cls} style={style}>{children}</a>;
  return <button onClick={onClick} className={cls} style={style}>{children}</button>;
}
