const {Router} = require('express');
const router = Router();
const Productos = require('../api/contenedor')

const producto = new Productos()

router.get('/', async (req, res) => {
  const productosLista = await producto.getAll();
  res.render('index', {productosLista});
})

// router.post('/', (req, res) => {
//   const productoNuevo = req.body;
//   producto.save(productoNuevo);
//   res.redirect('/');
//})

module.exports = router;