// Description: This file contains the JavaScript code for the master page.

const headerContent = `

<div class="header">
<img class="logo" src="Logo.png" alt="">
<h1>SRM CLUBS</h1>
    <div class="navbar-toggle" onclick="toggleNavbar()">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
    </div>
	<div class="navbar" id="navbar">
        <a href="index.html" >HOME</a>
        <a href="#activities">Galleryssss</a>
        <a href="#team">News</a>
        <a href="#teams">Connect Us</a>

    </div>
</div>
`;

const navbarContent = `
	<div class="navbar" id="navbar">

        <a href="#activities">Gallery</a>
        <a href="#team">News</a>
        <a href="#teams">Connect Us</a>

    </div>
`;
document.addEventListener("DOMContentLoaded", () => {
	const linkElement = document.createElement("link");

	// Set attributes for the link element
	linkElement.rel = "stylesheet";
	linkElement.href = "des.css"; // Replace with the actual path to your CSS file

	// Append the link element to the head section
	document.head.appendChild(linkElement);

	// Find the header and navbar elements
	const headerElement = document.getElementById("header");
	const navbarElement = document.getElementById("navbar");

	// Inject the header content
	if (headerElement) {
		headerElement.innerHTML = headerContent;
	}

	// Inject the navbar content
	if (navbarElement) {
		navbarElement.innerHTML = navbarContent;
	}
});
