const DATA_FOR_WEBRING = `https://raw.githubusercontent.com/kylies/webring/main/users.json`;

const template = document.createElement("template");
template.innerHTML = `
<style>
.webring {
  border: 5px solid #222;
  border-top-color: #666;
  border-left-color: #666;
  background-color: #87c281;

  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-gap: 1rem;

  text-align: center;

  font: 100% system-ui, sans-serif;
}
.icon {
  font-size: 40px;
}
</style>

<div class="webring">
  <div class="icon"><</div>
  <div id="copy">

  </div>
  <div class="icon">></div>
</div>`;

class WebRing extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // e.g. https://css-tricks.com
    const thisSite = this.getAttribute("site");

    fetch(DATA_FOR_WEBRING)
      .then((response) => response.json())
      .then((sites) => {
        // Find the current site in the data
        const matchedSiteIndex = sites.findIndex(
          (site) => site.url === thisSite
        );
        const matchedSite = sites[matchedSiteIndex];

        let prevSiteIndex = matchedSiteIndex - 1;
        if (prevSiteIndex === -1) prevSiteIndex = sites.length - 1;

        let nextSiteIndex = matchedSiteIndex + 1;
        if (nextSiteIndex > sites.length) nextSiteIndex = 0;

        const randomSiteIndex = this.getRandomInt(0, sites.length - 1);

        const cp = `
          <h1 style="font-size:1em">LINE Friends Webring</h1>
          <p>
            This <a href="${matchedSite.url}">${matchedSite.name}</a> site is owned by ${matchedSite.owner}
          </p>
          <p>Navigate to other sites in the webring by using the buttons below.</p>

          <p>
            <a href="${sites[prevSiteIndex].url}">[Prev]</a>
            <a href="${sites[nextSiteIndex].url}">[Next]</a>
            <a href="${sites[randomSiteIndex].url}">[Random]</a>
          </p>
        `;

        this.shadowRoot
          .querySelector("#copy")
          .insertAdjacentHTML("afterbegin", cp);
      });
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

window.customElements.define("webring-css", WebRing);
