export default async function decorate(block) {

    const resp = await fetch('query-index.json');
    const json = await resp.json();
    const listElement = document.createElement("ul");
    json.data.forEach(eleObj => {
        console.log(eleObj);
            const liEl = document.createElement("li");
            var aTag = document.createElement('a');
            aTag.setAttribute('href',eleObj.link);
            aTag.innerText = eleObj.title;
            liEl.appendChild(aTag);
            listElement.appendChild(liEl);

    });
    block.appendChild(listElement);
}
