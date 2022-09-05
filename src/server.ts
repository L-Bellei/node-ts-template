import express from 'express';

const app = express();

app.get('/', (request, response) => {
	return response.json({ ok: true });
});

app.listen(3030, () => console.log('running on port: 3030'));
