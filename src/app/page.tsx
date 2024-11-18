import { IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import Image from "next/image";

import styles from "./page.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image src="/logo-transparent-bold.png" alt="#define GAMES logo" fill={true} priority />
      </main>
      <footer className={styles.footer}>
        <a href="https://x.com/definegames" target="_blank" rel="noopener noreferrer">
          <IconBrandX width={32} height={32} />
        </a>
        <a href="https://www.linkedin.com/company/define-games/" target="_blank" rel="noopener noreferrer">
          <IconBrandLinkedin width={32} height={32} />
        </a>
      </footer>
    </div>
  );
}
