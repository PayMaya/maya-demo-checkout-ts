import '../App.css';
import ProductList from '../components/ProductList';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CartSummaryButton from '../components/CartSummaryButton';
import UserCard from '../components/UserCard';
import HomeButton from '../components/HomeButton';
import TitleSection from '../components/TitleSection';
import ContentSection from '../components/ContentSection';
import RedirectButton from '../components/RedirectButton';

function LandingPage() {
  return (
    <div className='body'>
      <NavBar
        left={<HomeButton />}
        right={<><CartSummaryButton /><UserCard /></>}
      />
      <TitleSection text="Products" />
      <ContentSection>
        <ProductList />
        <div className='redirect-button'>
          <RedirectButton display='View Cart' url='/cart' className='btn green large'/>
        </div>
      </ContentSection>
      <Footer />
    </div>
  );
}

export default LandingPage;
