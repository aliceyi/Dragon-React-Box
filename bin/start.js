#!/usr/bin/env node

const express = require('express')
const path = require('path')
const app = express()

const port = 10082 //端口

app.use(express.static(path.join(__dirname, '../storybook-static')))

app.get('/monitoring/ping', function (req, res) {
    res.send('Ok!')
})

app.get('/monitoring/pong', function (req, res) {
    let result = {
        uptime: 0,
        memory: {},
        isHealthy: true,
    }

    try {
        result.uptime = process.uptime()
        result.memory = process.memoryUsage()
        result.isHealthy = true
    } catch (e) {
        result.isHealthy = false
    }
    res.set('Content-Type', 'application/json')
    res.status(200).send(JSON.stringify(result))
})

app.listen(port, function () {
    console.log(`🚀 服务已启动！http://localhost:${port}/`)
})
