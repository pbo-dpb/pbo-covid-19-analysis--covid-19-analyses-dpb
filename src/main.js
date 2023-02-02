import { defineCustomElement } from './defineCustomElement'
import App from "./App.ce.vue"
import router from './router'

customElements.define('pbotool-covid', defineCustomElement(App, { plugins: [router] }))