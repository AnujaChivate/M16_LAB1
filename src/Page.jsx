import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import Contents from "./Contents.jsx";

function NavBar() {
    // const Separator = () => <span> | </span>;
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                Employee Management Application
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="/employees">All Employees</Nav.Link>
                <Nav.Link href="/report">Reports</Nav.Link>
            </Nav>
        </Navbar>

        // <nav>
        //     <NavLink end to="/">
        //         Home
        //     </NavLink>
        //     <Separator />
        //     <NavLink to="/employees">All Employees</NavLink>
        //     <Separator />
        //     <NavLink to="/report">Reports</NavLink>
        // </nav>
    );
}

export default function Page() {
    return (
        <div>
            <NavBar />
            <Contents />
        </div>
    );
}
