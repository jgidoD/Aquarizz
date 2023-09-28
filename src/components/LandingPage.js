import './LandingPage.css'
import logo from '../assets/aquarizz-logo.png'
import background from '../assets/background.svg'
import browse from '../assets/browse.svg'
import interact from '../assets/interact.svg'
import showcase from '../assets/showcase.svg'
function LandingPage () {

    return (
<div className='main'>
<div className='header'>
            <img src={logo} className='logo' alt='logo'/>
            <button className='getStarted'>Get Started</button>
</div>
        <div className='contents'>

        
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
                <img src={browse} />
            </div>
            <div className='description'>
            <span>
                Browse and discover something new!
                </span>
            </div>
        </div>
        <div className='information-contents'>
            <div className='description'>
                <span>
                Connect with people with similar interests.
                </span>
            </div>
            <div className='logo'>
            <img src={interact} />
            </div>
        </div>
        <div className='information-contents'>
            <div className='logo'>
                <img src={showcase}/>
            </div>
            <div className='description'>
            <span>
                Showcase and let people know about your designs.
            </span>
            </div>
        </div>
        </div>
        <div className='footer'>

        </div>
</div>
    );
}

export default LandingPage;