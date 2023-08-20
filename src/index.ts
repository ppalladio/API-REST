import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

const app = express();

app.use(
    cors({
        credentials: true,
    }),
);

app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);


app.get('/', (req, res) => {
	res.send('Hello World!');
});
server.listen(3000, () => {
    console.log('Listening on port 3000');
});
