const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: Page not found</h1>
        <p>Oops, sorry we can't find this page!</p>
        <div>
          <img src='https://cdn.dribbble.com/users/3358696/screenshots/7184069/media/eec5daf9cc5fad7e214d3bd5e5510556.png'/>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;