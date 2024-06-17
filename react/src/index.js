import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

const root = ReactDom.createRoot(document.getElementById ('root'))

console.log(BrowserRouter)

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

export default Index