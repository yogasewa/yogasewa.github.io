const select = document.getElementById('select');

document.addEventListener('DOMContentLoaded', () => {
    axios.get('db.json')
        .then((options) => {
            options = options.data;
            let out = "";

            for (let option of options) {
                out += `<option> ${option.name.en} | ${option.name.sn} </option>`;
            }
            document.getElementById('select').innerHTML += out;
        });
});

select.addEventListener('change', () => {
    axios.get('db.json')
        .then((data) => {
            data = data.data;
            
            document.getElementById('name').innerText = data[select.selectedIndex].name.en;
            document.getElementById('body').innerText = data[select.selectedIndex].body;
            document.getElementById('img').innerHTML = `<img alt="${data[select.selectedIndex].name.en}" src="${data[select.selectedIndex].img}" width="300" height="300">`;
        });
});