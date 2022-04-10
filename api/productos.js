class Productos {
  constructor(){
    this.productos = [];
    this.id = 0;
  }

  listar(id){
    const selectedProduct = this.productos.filter((products) => products.id == id);
    return selectedProduct;
  }

  listarAll(){
    return this.productos;
  }

  guardar(prod){
    prod.id = this.id+=1;
    this.productos.push(prod);
    return prod;
  }

  actualizar(prod, id){
    const updateList = this.productos.filter((products) => products.id != id);
    prod.id = id;
    updateList.push(prod);
    this.productos = updateList;
    return prod;
  }

  borrar(id){
    const updateList = this.productos.filter((products) => products.id != id);
    this.productos = updateList;
    return ({msg: `El producto con el id ${id} ha sido borrado`});
  }

}

module.exports = Productos;
