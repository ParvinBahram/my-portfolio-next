import Link from "next/link" ;
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <div className="dark:shadow-none shadow-md text-sm shadow-stone-300 dark:text-white/70 flex justify-center items-center gap-6 md:text-lg md:gap-12 py-5">
        <Link href= "/" className="navlink animation">خانه</Link>
        <Link href= "/projects" className="navlink animation">نمونه کارها</Link>
        <Link href="/#footer" className="navlink animation">ارتباط با من</Link>
        <ThemeToggle />
    </div>
  )
}

export default Navbar