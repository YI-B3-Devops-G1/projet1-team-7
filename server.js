'use strict';

const express = require('express');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
	res.json('Home')
});

app.get('/status', (req, res) => {
	res.json({
		status: "OK",
		postgresUptime: String,
		redisConnectedClients: Number
	});
});

app.listen(port, () => {
	console.log(`Server port: ${port}`);
});
