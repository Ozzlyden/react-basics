//import './App.css';

// COMPONENTES HEADER
export default function Header(props) {
  return(
    <div className='Header'>
        <div className="Header__logo">
            <img src="https://i.pinimg.com/736x/70/42/1e/70421eb25796395c266a5bdc24f941c6.jpg"/>
        </div>
        <div className="Header__menu">
            <a href="">Home</a>
            <a href="">Sobre</a>
            <a href="">Serviços</a>
            <a href="">Contato</a>
        </div>
    </div>
  );
  
}
