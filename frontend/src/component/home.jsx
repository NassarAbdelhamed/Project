import Nav from "./Nav"
function Home() {

  const navLinks = [
    { text: 'Sign up', url: '/signup' },
    { text: 'Login', url: '/login' },
  ];
    return (
      <>
        <Nav links={navLinks} />
      </>
    );
  }
  
  export default Home;