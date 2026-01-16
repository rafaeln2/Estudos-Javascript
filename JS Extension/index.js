const inputButtonEl = document.querySelector("#input-btn");
const deleteButtonEl = document.querySelector("#delete-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const tabEl = document.querySelector("#tab-btn");

document.addEventListener("DOMContentLoaded", () => {
    render(JSON.parse(localStorage.getItem("myLeads")) || []);
});

// gets current website link and saves to local storage
tabEl.addEventListener("click", async () => {
    const leads = JSON.parse(localStorage.getItem("myLeads")) || [];

    const [currentURL] = await chrome.tabs.query({
        active:true, currentWindow: true
    })
    leads.push(currentURL.url);
    localStorage.setItem("myLeads", JSON.stringify(leads));
    render(leads);
})

inputButtonEl.addEventListener("click", () => {
    let input = inputEl.value;
    if (!input) return;
    if (input.startsWith("http://") === false && input.startsWith("https://") === false) {
        input = "http://" + input;
    }
    myLeadsLS = JSON.parse(localStorage.getItem("myLeads")) || [];    
    myLeadsLS.push(input);
    localStorage.setItem("myLeads", JSON.stringify(myLeadsLS));    
    render(JSON.parse(localStorage.getItem("myLeads")) || []);
});

deleteButtonEl.addEventListener("dblclick", () => {
    localStorage.removeItem("myLeads");
    render(JSON.parse(localStorage.getItem("myLeads")) || []);
});

function render(renderableList){
    let listItems = "";    
    ;    
    
    renderableList.forEach(element => {        
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