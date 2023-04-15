import { Link, NavLink } from "react-router-dom"; // Imperative Navigation

// -- Link ----->
/* **************
const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
************** */

/*
That's the case because by default <NavLink /> actually checks

whether the "path of the currently active route" (eg : "/products")

starts with the path of one of those NavLinks. (eg : "/")

And that NavLink is considered to be active

if the currently active route starts

with the path set on the link.

That behavior exists so that a link could be treated

as active even if you're on some nested child route.

That's nice to have but not what we want here

for the slash route since every route starts

with slash.

So this would always be active for all routes.

And that's why react-router-dom also gives us another prop

we can set here and that's the end prop

which we can set to true or false

but we can also just add it like this to set it to true.

This indicates that this link

should only be considered active

if the currently active route ends with this path

after the URL.
*/
const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : undefined)}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
