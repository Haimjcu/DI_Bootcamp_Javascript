const showItems = (arr) => {
    const html = arr.map(item => {
      return `<div><h2>${item.item} ${item.amount}</h2></div>`
    })
    document.getElementById('shoppingList').innerHTML = html.join('')
    console.log(html);
  }

  const getData = () => {
    fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(data => {
      showItems(data);
    })
    .catch(err => {
      console.log(err);
    })
  }
  getData();




  