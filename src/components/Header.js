import { Image } from "react-bootstrap"

function Header() {
  return (
    <div className="p-2 text-center d-flex justify-content-center align-items-center" style={{ backgroundColor: "#1e293b" }}>
      <Image src="images/logo.png" width={40} height={40} alt="The worst person, with a bad testimony" />
      <div className="fw-bold p-2 fs-4 lh-sm text-white">OmarMamani.com</div>
    </div>
  )
}

export default Header