import { buildUrl, randomArr, validLimit, getResults } from './util'
import { buildResults } from './buildResults';

const sendRequest = async () => {
    const searchInput = document.getElementById('search');
    const limiteInput = document.getElementById('pageSize');
    const search = searchInput.value;
    const limite = limiteInput.value;
    console.log({ search, limite })
    const limiteValido = validLimit(limite);
    const searchValido = !(typeof search === 'undefined' | search == '');

    while (results.firstChild) {
        results.firstChild.remove()
    }
    if (searchValido & limiteValido) {
        let url = buildUrl(search, limite);
        console.log(url);

        let response_all = await getResults(url);
        console.log({ola:response_all.items,url});
        buildResults(...response_all.items);
    }
}
export { sendRequest }