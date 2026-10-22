import './style.css'
import { Screen } from './screens/screen.js'

// Initialize the Portfolio app
document.querySelector('#app').innerHTML = `
  <div id="main-screen"></div>
`

// Ensure app takes full height
document.querySelector('#app').style.cssText = `
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`

// Create and initialize the main screen
const mainScreen = new Screen('main-screen');

console.log('Portfolio app initialized successfully');