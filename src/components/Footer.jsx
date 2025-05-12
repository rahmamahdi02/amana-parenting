export default function Footer() {
    
  const currentYear = new Date().getFullYear()

  return (
    <footer className="wrapper my-[50px] lg:my-[100px] md:text-center">
        <p>&copy; {currentYear} Amana Parenting LLC.</p>
    </footer>
  )
}