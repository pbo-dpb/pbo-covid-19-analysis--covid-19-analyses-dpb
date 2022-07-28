import { defineCustomElement } from './defineCustomElement'
import App from "./App.ce.vue"
import router from './router'
import store from './store'

customElements.define('pbotool-covid', defineCustomElement(App, {plugins: [ store, router ]}))