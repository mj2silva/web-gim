import Nav from "@components/Layout/Header/Nav/Nav";
import NavLink from "@components/Layout/Header/Nav/NavLink";
import styles from "@styles/Nav.module.scss";
import NavButton from "@components/Layout/Header/Nav/NavButton";
import { FC, useEffect, useRef, useState } from "react";
import NavGroup from "@components/Layout/Header/Nav/NavGroup";
import cn from "classnames";
import { useRouter } from "next/router";

type NavigationObject =
  | {
      href: string;
      title: string;
      type: "link";
    }
  | {
      title: string;
      type: "group";
      items: NavigationObject[];
    };

const navigationObject: NavigationObject[] = [
  {
    href: "/",
    title: "INICIO",
    type: "link",
  },
  {
    href: "/servicios",
    title: "SERVICIOS",
    type: "link",
  },
  {
    href: "/proyectos",
    title: "PROYECTOS",
    type: "link",
  },
  {
    title: "NOSOTROS",
    type: "group",
    items: [
      {
        href: "/nosotros/quienes-somos",
        title: "¿QUIENES SOMOS?",
        type: "link",
      },
      {
        href: "/nosotros/nuestro-equipo",
        title: "NUESTRO EQUIPO",
        type: "link",
      },
    ],
  },
  {
    href: "/contacto",
    title: "CONTACTO",
    type: "link",
  },
];

interface Props {
  className?: string;
  navClassName?: string;
  buttonClassName?: string;
  backDropClassName?: string;
  openClassName?: string;
  closedClassName?: string;
}

const renderItem = (item: NavigationObject) =>
  item.type === "link" && (
    <NavLink
      key={item.title}
      className={styles.NavLink}
      activeClassName={styles.NavLink_active}
      href={item.href}
    >
      {item.title}
    </NavLink>
  );

const HeaderNav: FC<Props> = ({
  className,
  navClassName,
  buttonClassName,
  backDropClassName,
  openClassName,
  closedClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((io) => !io);
  const { pathname } = useRouter();
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const headerNavClassName = cn(backDropClassName, {
    [openClassName || "open"]: isOpen,
    [closedClassName || "closed"]: !isOpen,
  });

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      window.setTimeout(() => {
        setIsHidden(true);
      }, 500);
    } else {
      setIsHidden(false);
    }
  }, [isOpen]);

  return (
    <div className={className}>
      <NavButton
        className={buttonClassName}
        open={isOpen}
        onClick={toggleOpen}
      />
      <div>
        <div
          ref={navRef}
          className={headerNavClassName}
          style={{
            transform: isHidden
              ? "translateX(100%) scaleX(100%)"
              : "translateX(0)",
          }}
        >
          <Nav className={navClassName}>
            {navigationObject.map((item) => {
              switch (item.type) {
                case "group":
                  return (
                    <NavGroup key={item.title} title={item.title}>
                      {item.items.map(renderItem)}
                    </NavGroup>
                  );
                case "link":
                  return renderItem(item);
                default:
                  return null;
              }
            })}
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
