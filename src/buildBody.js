
const buildBody = ()=>{
    const arr = range(5,100,5); 
    console.log(arr);
    const app = document.getElementById('app');
    const divMenu = document.createElement('div');
    divMenu.classList.add('menu');
    const title = document.createElement('h1');
    title.innerText = 'Repo Finder: Reto Sesión 7'
    const divBusqueda = document.createElement('div');
    divBusqueda.classList.add('busqueda');
    const input = document.createElement('input');
    input.id = 'search';
    input.type = 'text';
    const button = document.createElement('button');
    button.id = 'btn'
    button.innerText = 'Search'
    divBusqueda.appendChild(input);
    divBusqueda.appendChild(button);
    const divSize = document.createElement('div');
    divSize.classList.add('cantidad');
    const lab = document.createElement('label');
    lab.setAttribute('for','pageSize');
    lab.innerText= '# de resultados'
    const sel = document.createElement('select');
    sel.id = 'pageSize';
    sel.name = 'pageSize';
    for (let val of arr) {
        const opt = document.createElement('option');
        opt.value = val;
        opt.innerText = val;
        opt.classList.add('option-list');
        sel.appendChild(opt);
    }

    const divRes = document.createElement('div');
    divRes.id = 'results';

    divSize.appendChild(lab);
    divSize.appendChild(sel);

    divMenu.appendChild(title);
    divMenu.appendChild(divBusqueda);
    divMenu.appendChild(divSize);
    app.appendChild(divMenu);
    app.appendChild(divRes);


}

function range(start, end, interval) {
    const size = Math.ceil(Math.abs((end - start + 1)/interval));
    console.log(size);
    return Array(size).fill().map((_, idx) => start + (idx * interval))
  }
export { buildBody }