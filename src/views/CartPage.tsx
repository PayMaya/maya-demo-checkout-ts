import { Dispatch } from 'redux';
import { useSelector, useDispatch } from "react-redux"
import { createCheckoutThunk } from '../thunks/checkout';
import NavBar from '../components/NavBar';
import TitleSection from '../components/TitleSection';
import CartList from '../components/CartList';
import Footer from '../components/Footer';
import UserCard from '../components/UserCard';
import HomeButton from '../components/HomeButton';
import ContentSection from '../components/ContentSection';

function CartPage() {
  const cart: Cart = useSelector((state: AppState) => state.cart)
  const user: User = useSelector((state: AppState) => state.currentUser)

  const dispatch: Dispatch<any> = useDispatch()
  const onCheckout = () => {
    dispatch(createCheckoutThunk(cart, user))
  }

  return (
    <div className='body'>
      <NavBar
        left={<HomeButton />}
        right={<UserCard />}
      />
      <TitleSection text='Your Cart'/>
      <ContentSection>
        <CartList />
        <div className='redirect-button'>
          <button className='btn green large' onClick={() => onCheckout()}>Checkout</button>
        </div>
      </ContentSection>
      <Footer />
    </div>
  );
}

export default CartPage;
