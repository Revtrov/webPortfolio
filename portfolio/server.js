const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const router = express.Router();

const createRoute = (browserPath, filePath) => {
        app.get(browserPath, (req, res) => {
            res.sendFile(path.resolve(__dirname, filePath))
        })
    },
    createPage = (pageName) => {
        createRoute(`/${pageName}`, `${pageName}/index.html`);
        createRoute(`/${pageName}/style.css`, `${pageName}/style.css`);
        createRoute(`/${pageName}/script.js`, `${pageName}/script.js`);
    },
    createImageRoutes = (array) => {
        for (i in array) {
            createRoute(`/images/${array[i]}`, `images/${array[i]}`);
        }
    },
    createProjectPage = (name) => {

        createRoute(`/projects/${name}`, `projects/${name}/index.html`);
        createRoute(`/projects/${name}/style.css`, `projects/${name}/style.css`);
        createRoute(`/projects/${name}/script.js`, `projects/${name}/script.js`);
    }

//home page 
createPage("home");
//projects page routes
createPage("projects");
//about page Routes
createPage("about");
//contact page routes
createPage("contact");
//dice routes
createProjectPage("dice");
//snakes and ladders routes
createProjectPage("snakesAndLadders");
//typeracer
createProjectPage("typingPractice");
//images
createImageRoutes(["logo.png", "rollDice.png", "snakesAndLadders.png", "typingPractice.png"])

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
module.exports = router