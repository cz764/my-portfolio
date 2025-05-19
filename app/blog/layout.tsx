import styles from "./styles.module.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Layout structure */}
      <nav>{/* Navigation links */}</nav>
      <main
        className={`flex flex-col gap-[32px] row-start-2 items-center sm:items-start ${styles.blog}`}
      >
        {children}
      </main>
      <footer>{/* Footer content */}</footer>
    </div>
  );
}
