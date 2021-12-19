import Nav from "./Nav"
import Logo from "./Logo"
import Button from "./Button"

export default function Navbar() {
    return (
        <div className="flex items-center py-10">
            <div className="w-3/12">
              <Logo/>
            </div>
            <div className="w-6/12">
              <Nav/>
            </div>
            <div className="w-3/12 text-right">
              <Button variant="outline-yellow">Kontak</Button>
            </div>
          </div>
    );
}