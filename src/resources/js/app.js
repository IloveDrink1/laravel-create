import Vue from 'vue'
import Vuex from 'vuex'
import {PipeDream} from '@pipe-dream/core'
import {PipeDreamVueTools} from '@pipe-dream/core'
import LaravelFileFactory from '@pipe-dream/laravel-file-factory';
import LaravelNovaFileFactory from '../../../../LaravelCreate/node_modules/laravel-nova-file-factory/src/index' 

/* setup Vue to use Vuex and Pipe Dream components */
Vue.use(Vuex)
Vue.use(PipeDreamVueTools)
Vue.config.debug = true
window.Vue = Vue

/* Create Pipe Dream default store
 * Attach it to window to make it accessible inside core and file factories */

window.store = new Vuex.Store(
    new PipeDream({
        fileFactories: [
            LaravelFileFactory,
            LaravelNovaFileFactory
        ],
        ...window.__ENV__
    }).defaultStore
)

/* Let's go */
new Vue({
    el: '#app',
    store
})
