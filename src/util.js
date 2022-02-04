const buildUrl = function (search,page_size) {
    const baseUrl = 'https://api.github.com/search/repositories?q=';
        return `${baseUrl}${search}\&per_page=${page_size}`;
}

const randomArr = (new_size, ...arr) => {
    if (arr.length > new_size) {

        let idx_arr = [];
        let limite = arr.length;
        for (let i = 0; i < new_size; i++) {
            let index;
            do {
                index = Math.floor(Math.random() * limite);
            } while (idx_arr.includes(index))
            idx_arr.push(index)
        }
        return idx_arr.map(e => arr[e]);
    }
    else
        return arr;
}
const validLimit = function(limite){
    const result = isNaN(limite);
    if (result){
      alert('el limite debe ser numerico')
    }
    return !result;
  }

const getResults = async function (url) {
    try{
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      return data;
      }catch(err) {
        console.log(err);
      }
  }

  export { buildUrl, randomArr, validLimit, getResults }
