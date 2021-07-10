import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';

import { default as Table } from './components/Table/Table'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
);

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3} style={{ marginTop: '5%' }}>
          <Grid item xs={12}>
            <Table></Table>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
