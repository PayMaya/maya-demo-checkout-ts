import { Dispatch } from 'redux';
import { useDispatch } from "react-redux"
import { clearCartThunk } from '../../thunks/cart';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import TitleSection from '../../components/TitleSection';
import UserCard from '../../components/UserCard';
import HomeButton from '../../components/HomeButton';
import ContentSection from '../../components/ContentSection';

function PurchaseSuccessPage() {
  const dispatch: Dispatch<any> = useDispatch()

  return (
    <div className='body'>
      <NavBar
        left={<HomeButton onClick={() => dispatch(clearCartThunk())} />}
        right={<UserCard />}
      />
      <TitleSection text='Purchase successful!' />
      <ContentSection>
        <div className='payment-text'>
          <p>This is just a post-payment redirection. Your application's backend service
          should handle the webhook notification from Maya to update payment information accordingly.</p>
          <p>Read more about webhooks: <a href='https://developers.maya.ph/docs/receive-real-time-payment-information-using-webhooks'> How to handle webhooks </a></p>
        </div>
      </ContentSection>
      <Footer/>
    </div>
  );
}

export default PurchaseSuccessPage;
