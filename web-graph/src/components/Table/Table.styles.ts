import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    table: {
      minWidth: 700
    },
  });

export const getModalStyle = () => {
const top = 50 
const left = 50

return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
};
}

export const useModalStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);