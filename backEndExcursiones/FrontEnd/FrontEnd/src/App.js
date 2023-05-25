
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { Desktop } from './Desktop'

function App() {
  
  return (
     <BrowserView>
        <Desktop/>
     </BrowserView>
  );
}

export default App;
