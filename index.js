const express = require('express')
const helmet = require('helmet')

const app = express()

// add some security-related headers to the response
app.use(helmet())

app.get('*', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send(`
        <pre>${req.url}</pre>
        <pre>${decodeURIComponent(req.url)}</pre>
    `)
})

module.exports = app
