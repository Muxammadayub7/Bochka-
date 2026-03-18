import { FaHome, FaSearch, FaBars, } from 'react-icons/fa'
import { CgPlayListSearch } from "react-icons/cg";
import '../../assets/style/Navbar.css'


function Navbar() {
	return (
		<section className='navbar'>
			<div className='navbar__container container'>
				<div className='navbar__row'>
					<FaHome className='navbar__img' />
          <p className="">Uy</p>
				</div>
				<div className='navbar__row'>
					<CgPlayListSearch className='navbar__img__1' />
          <p className="">Katalog</p>
				</div>
				<div className='navbar__row'>
					<FaSearch className='navbar__img__3' />
          <p className="">Qidiruv</p>
				</div>
				<div className='navbar__row'>
					<FaBars className='navbar__img__4' />
          <p className="">Menu</p>
				</div>
			</div>
		</section>
	)
}

export default Navbar
