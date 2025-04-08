import React from "react";
import { render, screen } from "@testing-library/react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home" data-testid="home">
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div id="about" data-testid="about">
      <h1>About</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

test("renders the correct child components", () => {
  const { container } = render(<App />);

  expect(container.querySelector("nav")).toBeInTheDocument();
  expect(screen.getByTestId("home")).toBeInTheDocument(); // Example using data-testid
  expect(screen.getByTestId("about")).toBeInTheDocument(); // Example using data-testid
});

export default App;
