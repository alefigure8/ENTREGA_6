const socket = io.connect();

const formProducts = document.getElementById('form_products');

formProducts.addEventListener('submit', e => {
  e.preventDefault()
  const product = {
    title: e.target.title.value,
    price: e.target.price.value,
    thumbnail: e.target.thumbnail.value
  };
  socket.emit('newProduct', product);
})


socket.on('message', async messages => {
  const html = await makeHtmlTable(messages);
  console.log(html);
})

function makeHtmlTable(productosLista) {
  return fetch('views/layouts/main.hbs')
      .then(respuesta => respuesta.text())
      .then(plantilla => {
          const template = Handlebars.compile(plantilla);
          const html = template({ productosLista })
          return html
      })
}