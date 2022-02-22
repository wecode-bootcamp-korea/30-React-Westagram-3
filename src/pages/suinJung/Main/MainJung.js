import Nav from '../../../components/Nav/Nav';
import Aside from './Component/Aside';
import Main from './Component/Main';
import './MainJung.scss';

function MainJung() {
  return (
    <>
      <Nav />
      <div className="mainPage">
        <Main />
        <Aside />
      </div>
    </>
  );
}

export default MainJung;
