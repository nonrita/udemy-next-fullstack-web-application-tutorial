import Link from "next/link"


const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link href='/'>Go back home</Link>
    </div>
  )
}

export default NotFoundPage