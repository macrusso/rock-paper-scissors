import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useState } from 'react';

type PlayerProps = {
  id: string;
};

type ResponseData = {
  result: string
}

const Player = ({ id }: PlayerProps) => (
  <FormControl>
    <FormLabel>Player {id}</FormLabel>
    <RadioGroup aria-labelledby={`player-${id}`} name={`player-${id}`}>
      <FormControlLabel value="rock" control={<Radio />} label="rock" />
      <FormControlLabel value="paper" control={<Radio />} label="paper" />
      <FormControlLabel value="scissors" control={<Radio />} label="scissors" />
    </RadioGroup>
  </FormControl>
);

export const Game = () => {
  const [resultStatus, setResultStatus] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    fetch("http://localhost:3333/play", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        playerOneSelected: data.get('player-one'),
        playerTwoSelected: data.get('player-two'),
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then((data: ResponseData) => {
        setResultStatus(data.result);
      })
      .catch((err) => {
        // TODO: add error handling with error message
        console.log(err)
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit} noValidate>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>Rock Paper Scissors</Grid>
            <Grid container direction="row" justifyContent="space-between">
              <Player id="one" />
              <Player id="two" />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <Container>Outcome: {resultStatus}</Container>
      </Box>
    </Container>
  );
};
