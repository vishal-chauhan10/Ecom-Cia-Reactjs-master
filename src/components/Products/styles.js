import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Repeat } from "@material-ui/icons";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    backgroundImage: `url("https://img.freepik.com/free-vector/blue-pink-halftone-background_53876-99004.jpg?size=626&ext=jpg&ga=GA1.2.1978120341.1627776000")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  root: {
    flexGrow: 1,
  },
}));
