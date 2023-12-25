import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/article">Article</Link>
        <Link to="/outlets">Outlets</Link>
      </nav>
      <h1>Home</h1>
    </div>
  )
}

export function Article() {
  return (
    <div> 
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/article">Article</Link>
        <Link to="/outlets">Outlets</Link>
      </nav>
      <h1>Article</h1>
      </div>
  )
}

export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/article">Article</Link>
        <Link to="/outlets">Outlets</Link>
      </nav>
      <h1>About</h1>
      <Outlet />
    </div>
  )
}

export function Anecdote() {
  return (
    <div>
      <h1> Placeholder Explanation </h1>
    </div>
  )
}

export function Outlets() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/article">Article</Link>
        <Link to="/outlets">Outlets</Link>
      </nav>
      <h1>Outlets</h1>
    </div>
  )
}

export function App() {
  return (
    <Home />
  )
}
