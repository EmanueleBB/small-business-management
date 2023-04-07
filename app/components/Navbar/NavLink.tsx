import useDashboardStore from '@/app/hooks/dashboardStore';
import './Navbar.styles.css'


interface NavLinkProps{
   label:string;
}

const NavLink:React.FC<NavLinkProps> = ({
   label
}) => {

	const {setActive} = useDashboardStore();

	const handleClick = (label:string):void => {
		if(label !=='Clienti' && label !=='Storico' ){
			return setActive(label);
		}
		return;
	}
	if(label !=='Clienti' && label !=='Storico' ){
		return (
		 <div className='navlink' onClick={()=>{handleClick(label)}}>
				{label}
		  </div>
		)
	}else{
		return (
			<div className='navlink' onClick={()=>document.getElementById(`${label}`)?.scrollIntoView({behavior:'smooth'})}>
				{label}
			</div>
		  )
	}
}

export default NavLink