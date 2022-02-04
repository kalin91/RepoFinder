const buildResults = (...arr) => {
	const results = document.getElementById('results');
	arr.forEach(elem => {
		let str_name = elem.full_name;
		let str_descri = elem.description;
		let str_lang = elem.language;
		let str_url = elem.html_url;
		let str_null = 'null';
		console.log(elem);
		const div = document.createElement('div');
		div.classList.add('single-result');
		const title = document.createElement('a');
		title.innerText = !!str_name ? str_name : str_null;
		if (!!str_url)
			title.href = str_url;
		const descri = document.createElement('p');
		descri.innerText = !!str_descri ? str_descri : str_null;
		const lang = document.createElement('span');
		lang.innerText = !!str_lang ? str_lang : str_null;
		console.log(elem.language);
		div.appendChild(title);
		div.appendChild(descri);
		div.appendChild(lang);
		results.appendChild(div);
	});
}

export { buildResults }