import { User } from "lucide-react"
import { Link, } from "react-router"
import Button from "./Shared/Button"

const Navbar = () => {
  return (
    <header className="shadow-2xl py-4 ">
      <div className="container flex items-center justify-between">
        <Link to={"/"} className="text-4xl font-bold">
          Home
        </Link>

        <div className="flex gap-2">
          <Link
            to={"/"}
          >
            <User className="border-2 border-gray-300  w-10 h-10 p-2 rounded-full hover:" />
          </Link>

          <Link to={"/login"}>
            <Button>Login</Button>
          </Link>

          <Link to={"/register"}>
            <Button>Register</Button>
          </Link>

        </div>
      </div>

    </header>
  )
}

export default Navbar
