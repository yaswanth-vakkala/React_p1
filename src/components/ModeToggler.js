const ModeToggler = () => {
  let darkModeOn = true;
  let darkMode = <h1>Dark Mode</h1>;
  let lightMode = <h1>Light Mode</h1>;
  const handleClick = () => {
    darkModeOn = !darkModeOn;
    if (darkModeOn === true) {
      console.log('Dark mode');
    } else {
      console.log('light mode');
    }
  };
  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};

export default ModeToggler;
