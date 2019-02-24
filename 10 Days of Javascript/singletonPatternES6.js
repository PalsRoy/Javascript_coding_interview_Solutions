class UserStore {

constructor(){
  this._data = [];
}


addItem(item){
 this._data.push(item);
}

getId(id){
  return this._data.find(d => d.id === id);
}

}

const instance = new UserStore();

Object.freeze(instance);

export default instance;
