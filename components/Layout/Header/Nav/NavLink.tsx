import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import Link, { LinkProps } from "next/link";

interface Props extends LinkProps {
  activeClassName?: string;
  className?: string;
}

const NavLink: FC<Props> = ({
  activeClassName,
  href,
  passHref = true,
  className,
  children,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    setIsActive(pathname === href);
  }, [pathname, href]);

  const linkClassName = cn(className || "link", {
    [activeClassName || "link_active"]: isActive,
  });

  return (
    <li className={linkClassName}>
      <Link href={href} passHref={passHref} {...rest}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default NavLink;
