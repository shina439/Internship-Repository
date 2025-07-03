window.loading = () => {
    const heading = document.createElement("h1");
    const headingText = document.createTextNode("big head!");
    heading.appendChild(headingText);
    document.body.appendChild(heading);
}