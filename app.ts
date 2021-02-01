import express from 'express';
import buildDiscovery from './utils';

const app = express();
app.use(express.json());

app.get('/discovery', (req, res) => {
    const { lat, lon } = req.query;
    if(typeof lon != "string" || typeof lat != "string") {
      res.status(400).send({ error: "no latitude or longitude specifyed in query string!" });
      return;
    }

    res.status(200).json(buildDiscovery(parseFloat(lat), parseFloat(lon)));
});

export default app;