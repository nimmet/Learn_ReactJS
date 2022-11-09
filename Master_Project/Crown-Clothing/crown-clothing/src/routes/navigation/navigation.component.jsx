
import { Outlet, Link } from "react-router-dom"
import { Fragment , useContext} from "react"
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import { CartContext } from "../../contexts/cart.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDrowdown from "../../components/cart-dropdown/cart-dropdown.component"
import { useSelector } from "react-redux"

const Navigation = ()=> {
  const currentUser = useSelector((state)=> state.user.currentUser)
  const {isCartOpen} = useContext(CartContext)

    return (
      <Fragment>
      <div className="navigation">
      <Link className="logo-container" to='/'>
      <CrownLogo className='logo' />
      </Link>
      <div className="links-container">
        <Link className="nav-link" to='/shop'>
        SHOP
        </Link>
        {
          currentUser ? (
            <span className="nav-link" onClick={signOutUser}>{' '}SIGN OUT{' '}</span>
           ) : (<Link className="nav-link" to='/auth'>SIGN IN</Link>
          )
        }
       <CartIcon/>
      </div>
      {isCartOpen && <CartDrowdown/>}
      </div>
      <Outlet/>
          </Fragment>
    )
    }

    export default Navigation