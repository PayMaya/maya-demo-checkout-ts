import ContentSection from '../../components/ContentSection';
import Footer from '../../components/Footer';
import HomeButton from '../../components/HomeButton';
import NavBar from '../../components/NavBar';
import TitleSection from '../../components/TitleSection';
import UserCard from '../../components/UserCard';

function PurchaseFailedPage() {

  return (
     <div className='body'>
      <NavBar
        left={<HomeButton />}
        right={<UserCard />}
      />
      <TitleSection text='Purchase failed! '/>
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

export default PurchaseFailedPage;
