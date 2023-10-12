import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.scss"
import CMS from "decap-cms-app"
// Initialize the CMS object
CMS.init()
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate("my-template", MyTemplate)

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobike/i)
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        )
    },
}
if (isMobile.any()) {
    document.body.classList.add("touch")
} else {
    document.body.classList.add("pc")
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
