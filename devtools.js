

const hasApi = (api) => {
    return typeof globalThis.browser !== 'undefined' && api in globalThis.browser
}

const getContext = () => {
    if (hasApi('devtools')) {
        return 'devtools'
    }

    if (hasApi('tabs')) {
        return 'background'
    }

    if (hasApi('extension')) {
        return 'content'
    }

    return null
}

console.log('devtools', getContext())



browser.devtools.panels
    .create('test demo ext', '', 'panel.html')
    .then(() => {
        console.log('panel created')
    })

