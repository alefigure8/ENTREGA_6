const {Router} = require('express');
const router = Router();
const Productos = require('../api/contenedor')
const Cometario = require('../api/contenedor_msg')

const producto = new Productos()
const comentario = new Cometario()

router.get('/', async (req, res) => {
  const productosLista = await producto.getAll();
  const commentsList = await comentario.getAll();
  res.render('index', {productosLista, commentsList});
})

module.exports = router;