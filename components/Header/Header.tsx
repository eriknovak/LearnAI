import Link from "components/Link";
import { useRouter } from "next/router";

import cn from "classnames";
import styles from "./Header.module.scss";

const LEFT_PAGES = [
  { title: "Home", route: "/" },
];

const RIGHT_PAGES = [
  { title: "About", route: "/about" },
];

export default function Header() {
  const router = useRouter();

  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <div>
          {LEFT_PAGES.map((page, id) => (
            <Link href={page.route} key={id} legacyBehavior>
              <a
                className={cn(styles.link, {
                  [styles["link--active"]]: router.route === page.route,
                })}
              >
                {page.title}
              </a>
            </Link>
          ))}
        </div>

        <div>
          {RIGHT_PAGES.map((page, id) => (
            <Link href={page.route} key={id} legacyBehavior>
              <a
                className={cn(styles.link, {
                  [styles["link--active"]]: router.route === page.route,
                })}
              >
                {page.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}