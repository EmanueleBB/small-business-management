import './Navbar.styles.css'

interface NavLinkProps{
   label:string;
}

const NavLink:React.FC<NavLinkProps> = ({
   label
}) => {
  return (
    <div className='navlink'>{label}</div>
  )
}

export default NavLink