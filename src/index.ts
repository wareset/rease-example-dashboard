import * as rease from 'rease'
console.log(rease)

import { createReaseApp } from 'rease'

// import App from '#components/App.rease'

window.addEventListener('load', () => {
  import('#components/App.rease').then((chunk) => {
    createReaseApp(chunk.default, {
      target: document.body,
    
      beforeCreated: () => {
        console.time('ReaseApp')
      },
      onCreated: () => {
        console.timeEnd('ReaseApp')
      }
    })
  })
})
