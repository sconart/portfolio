import { AppBar, Toolbar, IconButton, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import image from '../images/logo.png';

export default function Layout() {
  return (
    <AppBar position="fixed" sx={{ background: '#d8d8d8', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'center', gap: '2rem' }}>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <Link to="/">
            <img src={image} alt="Logo" style={{ height: '20px' }} />
          </Link>
        </IconButton>
        <Typography variant="h6" sx={{ color: 'black' }}>
          <MuiLink component={Link} to="/" color="inherit" underline="none" sx={{ color: 'black' }}>
            Home
          </MuiLink>
        </Typography>
        <Typography variant="h6" sx={{ color: 'black' }}>
          <MuiLink component={Link} to="/about" color="inherit" underline="none" sx={{ color: 'black' }}>
            About
          </MuiLink>
        </Typography>
        <Typography variant="h6" sx={{ color: 'black' }}>
          <MuiLink component={Link} to="/services" color="inherit" underline="none" sx={{ color: 'black' }}>
            Services
          </MuiLink>
        </Typography>
        <Typography variant="h6" sx={{ color: 'black' }}>
          <MuiLink component={Link} to="/projects" color="inherit" underline="none" sx={{ color: 'black' }}>
            Projects
          </MuiLink>
        </Typography>
        <Typography variant="h6" sx={{ color: 'black' }}>
          <MuiLink component={Link} to="/contact" color="inherit" underline="none" sx={{ color: 'black' }}>
            Contact
          </MuiLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
