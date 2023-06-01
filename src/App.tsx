import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import DetailsPage from "./pages/DetailsPage";
import BlogPage from "./pages/BlogPage";
import BlogDeatailsPage from "./pages/BlogDeatailsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header/Header";
import { useAppSelector } from "./hooks/hooks";
import { createTheme, ThemeProvider } from "@mui/material";
import Footer from "./components/Footer/Footer";




function App() {
  const darkScheme = useAppSelector((state) => state.general.darkScheme);

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            whiteSpace: 'nowrap',
            color: darkScheme ? 'white' : 'black',
            minWidth: '20px',
            textTransform: 'none',
            boxShadow: 'none!important',
            ...({
              '&:hover': {
                backgroundColor: darkScheme ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
              },
            }),
            ...(ownerState.size === 'small' &&{
              borderRadius: '8px',
              ".MuiButtonBase-root": {
                padding: '4px 10px',
              },
            }),
            ...(ownerState.size === 'medium' &&{
              borderRadius: '8px',
              ".MuiButtonBase-root": {
                padding: '6px 16px',
              },
            }),
            ...(ownerState.size === 'large' &&{
              borderRadius: '8px',
              ".MuiButtonBase-root": {
                padding: '11px 22px',
              },
              }),
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'secondary' && {
                backgroundColor: darkScheme ? 'white' : 'black',
                color: darkScheme ? 'black' : 'white',
                '&:hover': {
                  backgroundColor: darkScheme ? '#a2aab3' : 'rgba(69, 79, 91, 1)',
                  boxShadow: 'none'
                },
                '& img': {
                  filter: darkScheme ?  'contrast(0) brightness(0%)' : ''
                },
              }),
              ...(ownerState.disabled &&{
                backgroundColor: 'rgba(127, 127, 127, 0.1)!important',
                color: darkScheme ? 'rgba(255,255,255,0.3)!important' : 'rgba(0, 0, 0, 0.3)'
              }),
              ...(ownerState.variant === 'contained' &&
              ownerState.color === 'primary' && {
                color: 'white',
                backgroundColor: 'var(--main-orange)',
                '&:hover': {
                  backgroundColor: 'rgba(179, 32, 14, 1)'
                }
              }),
              ...(ownerState.variant === 'outlined' &&
              ownerState.color === 'secondary' && {
                color: darkScheme ? 'white' : 'black',
                borderColor: darkScheme ? 'rgba(255, 255, 255, 0.5)' : "rgba(0, 0, 0, 0.5)",
                '&:hover': {
                  borderColor: darkScheme ? 'rgba(255, 255, 255, 0.5)' : "rgba(0, 0, 0, 0.5)",
                  backgroundColor: darkScheme ? 'rgba(255, 255, 255, 0.1)' : "rgba(0, 0, 0, 0.1)"
                },
              }),
          }),
        },
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${darkScheme ? 'App-dark' : ''}`}>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/list/:courseId" element={<DetailsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-details" element={<BlogDeatailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
