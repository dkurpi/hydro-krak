import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  textAfterSucces: {
    padding: " 20px",
    fontSize: "20px",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    height: 48,
    padding: "0 30px",
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  buttonStart: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    "&:hover": {
      background: "linear-gradient(45deg, #2196F3 60%, #21CBF3 90%)",
    },
  },
  fabProgress: {
    color: "white",
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function CircularIntegration(props) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
    [classes.buttonStart]: !success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading && !success) {
      setSuccess(false);
      setLoading(true);

      const getAns = (ans) => {
        console.log(ans);
        if (ans !== "OK") {
          setLoading(false);
          return alert(`Coś poszlo nie tak! ${ans}`);
        }
        setSuccess(true);
        setLoading(false);
      };

      props.handleSend(getAns);

      // timer.current = setTimeout(() => {
      //   setSuccess(true);
      //   setLoading(false);
      // }, 2000);
    }
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          {success ? (
            <Fab aria-label="save" color="primary" className={buttonClassname}>
              <CheckIcon />
            </Fab>
          ) : null}
        </div>
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClassname}
            disabled={loading}
            onClick={handleButtonClick}
          >
            {!success ? "Wyślij" : "Wysłano"}
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </div>

      {!success ? null : (
        <div className={classes.textAfterSucces}>
          Wkrótce się z Tobą skontaktujemy.
        </div>
      )}
    </>
  );
}
