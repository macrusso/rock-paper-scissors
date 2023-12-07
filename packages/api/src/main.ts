/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import * as cors from 'cors';
import { compareSelections } from './compareSelections';

type RequestBody = {
  playerOneSelected?: string,
  playerTwoSelected?: string
}

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.post('/play', (req, res) => {
  const { playerOneSelected, playerTwoSelected } = req.body as RequestBody

  if (!playerOneSelected || !playerTwoSelected) {
    res.status(400).json({
      error: "Missing selections"
    });
  }

  // TODO: add input validation
  const result = compareSelections({
    selectionOne: playerOneSelected,
    selectionTwo: playerTwoSelected
  })

  res.status(200).json({
    result
  });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
