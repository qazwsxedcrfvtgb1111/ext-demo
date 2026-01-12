console.log('devtools: typeof devtools', typeof browser.devtools)
console.log('devtools: devtools in browser', 'devtools' in browser)
console.log('devtools: tabs', typeof browser.tabs)
console.log('devtools: extension', typeof browser.extension)


browser.devtools.panels
    .create('test demo ext', '', 'panel.html')
    .then(() => {
        console.log('panel created')
    })

