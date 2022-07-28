import { defineCustomPeatElement } from './defineCustomPeatElement'
import App from "./App.ce.vue"
//import router from './router'
//import store from './store'

customElements.define('pbotool-covid', defineCustomPeatElement(App, {plugins: [  ]}))