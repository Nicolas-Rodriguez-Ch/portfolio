import { LinkPropsInterface } from '@/utils/types';
import Link from 'next/link';

const Links: React.FC<LinkPropsInterface> = ({
  href,
  text,
  toggleMenu,
  pathname,
}) => {
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`block text-blue-custom font-semibold hover:text-blue-custom-darken hover:underline ${
        isActive && 'underline'
      } p-2`}
      onClick={toggleMenu}
    >
      {text}
    </Link>
  );
};

export default Links;
