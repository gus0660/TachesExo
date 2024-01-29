// creation d'une fonction pour remplacer "document.querySelector()", il faudra juste remplacer "element" par l'id convoité.
function créerBalise(element) {
    return document.querySelector(element);
  };
  //creation des constantes avec la fonction c-dessus : 
  const but = créerBalise("#addTask");
  const list = créerBalise("#tasksList");
  const inp = créerBalise("#newTask");


addTask.addEventListener('click', () => {
    let content = inp.value; 
    let liEl = document.createElement('li');
    liEl.textContent = content;
    list.appendChild(liEl);
    saveLi();
})

function saveLi(){
    const textsList = [];
    const lists = document.querySelectorAll('li');
    lists.forEach((tache) => {
        let text = tache.textContent;
        textsList.push(text);
    })
    localStorage.setItem('list', JSON.stringify(textsList));
    console.log(JSON.stringify(textsList));
}
 function loadLi(){
    if (JSON.parse(localStorage.getItem('list')) != null) {
    let obj = JSON.parse(localStorage.getItem('list'));
    obj.forEach(element => {
        let liEl = document.createElement('li');
        liEl.textContent = element;
        list.appendChild(liEl);
    })}
 }
 loadLi();
 