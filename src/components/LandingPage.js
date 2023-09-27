import './LandingPage.css'
import logo from '../assets/aquarizz-logo.png'
import background from '../assets/background-svg.svg'

function LandingPage () {

    return (
<div className='main'>

        <div className='contents'>
        <div className='header'>
            <img src={logo} className='logo' alt='logo'/>
            <button className='getStarted'>Ged Started</button>
        </div>
        
        <div className='content'>
            <div className='spanContainer'>
            <h1>
            Connecting  for the Love of Healthy Fish.
            </h1>
            </div>
           <div className='backgroundContainer'>
           <img className='background' src={background} />
           </div>
        </div>
        </div>
        <div className='text'>
            <span>
            For fish lovers, fish sellers, fish tank design enthusiasts, fish breeders and bidders.
            </span>
        </div>

        <div className='information'>
        <div className='information-contents'>
            <div className='logo'>

            </div>
            <div className='description'>

            </div>
        </div>
        </div>
        <div className='footer'>

        </div>
</div>
    );
}

export default LandingPage;