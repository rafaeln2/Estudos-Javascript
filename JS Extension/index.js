const inputButtonEl = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const myLeads = ["lead1.com", "lead2.com", "lead3.com"];
const ulEl = document.querySelector("#ul-el");
console.log(ulEl);

inputButtonEl.addEventListener("click", () => {
    let input = inputEl.value;
    if (!input) return;
    if (input.startsWith("http://") === false && input.startsWith("https://") === false) {
        input = "http://" + input;
    }
    myLeads.push(input);
    renderLeads();
});

function renderLeads(){
    let listItems = "";    
    myLeads.forEach(element => {
        
        listItems += `
        <li>
            <a href='${element}' target='_blank'>${element}</a>
        </li>`;

        // Mesma coisa com mais passos
        // const li = document.createElement("li");
        // li.textContent = element;
        // ulEl.appendChild(li);
    });
    ulEl.innerHTML = listItems;
    inputEl.value = "";
}