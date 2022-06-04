// import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardHeader from '@material-ui/core/CardHeader';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import {  Link} from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   '@global': {
//     ul: {
//       margin: 0,
//       padding: 0,
//       listStyle: 'none',
//     },
//   },
//   appBar: {
//     background: '#353E4E',
//     color:'#fff',
//     borderBottom: `1px solid ${theme.palette.divider}`,
//   },
//   toolbar: {
//     color:'#fff',
//     flexWrap: 'wrap',
//   },
//   toolbarTitle: {
//       color:'#fff',
//     flexGrow: 1,
//   },
//   link: {
//     color:'#fff',
//     margin: theme.spacing(1, 1.5),

//   },
// }));

// export default function Header() {
//   const classes = useStyles();

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
//         <Toolbar className={classes.toolbar}>
//         <Link variant="button" color="textPrimary" to="/" className={classes.toolbarTitle}>

//           <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
//             Nome Empresa
//           </Typography></Link>
//           <nav>

//             <Link variant="button" color="textPrimary" to="/pricing" className={classes.link}>
//             Pricing
//             </Link>
//             <Link variant="button" color="textPrimary" to="/help" className={classes.link}>
//             Help
//             </Link>
//           </nav>
//           <Button href="/login" color="primary" variant="outlined" className={classes.link}>
//             Login
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// }
