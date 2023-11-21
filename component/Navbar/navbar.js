function createNavbar() {
    const navbar = document.createElement('nav');
    navbar.className = 'navbar-fixed-top';

    navbar.innerHTML = `
        <img src="https://www.transparentpng.com/thumb/sushi/FjiXtn-sushi-food-picture.png"
            alt="Sushi Food Picture" width="150px" height="100px">
        <input type="text" placeholder="Search for Recipe" class="navbar-search-input" id="s_data">
        <button class="navbar-search-button" id="btn">Search</button>
        <h3 class="navbar-link" id="day">Recipes of the Day</h3>
        <h3 class="navbar-link" id="latest">Latest Recipe</h3>
    `;

    return navbar;
}

export default createNavbar;