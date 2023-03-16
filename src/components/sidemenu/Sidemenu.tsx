import {
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';

export interface SidemenuIProps {
  items: Array<{ icon: ReactNode; title: string; url: string }>;
}
export interface SidemenuItemIProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export interface SidemenuItemTitleIProps
  extends HTMLAttributes<HTMLSpanElement> {
  title: string;
}

export interface LucidIconIProps {
  icon: ReactNode;
}

const Sidemenu = ({ items }: SidemenuIProps) => {
  return items.map((item) => {
    <SidemenuItem href={item.url}>
      {item.icon}
      <SidemenuItemTitle title={item.title} />
    </SidemenuItem>;
  });
};

const SidemenuItem = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<SidemenuItemIProps>
>(({ children, ...props }: SidemenuItemIProps, ref) => {
  return <a {...props}>{children}</a>;
});

const LucideIcon = ({ icon, ...props }: LucidIconIProps) => <>{icon}</>;

const SidemenuItemTitle = forwardRef<HTMLSpanElement, SidemenuItemTitleIProps>(
  ({ title, ...props }: SidemenuItemTitleIProps, ref) => {
    return (
      <span ref={ref} {...props}>
        {title}
      </span>
    );
  }
);

export { Sidemenu, SidemenuItem, SidemenuItemTitle, LucideIcon };
