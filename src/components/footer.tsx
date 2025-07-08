export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container px-4 mx-auto">
        <div className="text-center text-sm text-muted-foreground">
          {/* <p>&copy; 2024 Matias Saavedra. Todos los derechos reservados.</p> */}
          <p>Hecho con ❤️ por <a href="https://github.com/MatiasSaavedra7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400 transition-colors">Matias Saavedra</a></p>
        </div>
      </div>
    </footer>
  )
}