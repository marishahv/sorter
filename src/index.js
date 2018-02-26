class Sorter {

  constructor() {
    this.array = [];
    this.comparator;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {   
    var tempArr = [];

    indices.forEach(element => {
      tempArr.push(this.array[element]);
    });

    if(typeof this.comparator === "function"){
      tempArr.sort(this.comparator);          
    }
    else{
      tempArr.sort((a, b) => a - b);          
    }

    indices.sort((a, b) => a - b);

    for(var i = 0; i < tempArr.length; i++){
      var j = indices[i];
      this.array[j] = tempArr[i];
    }   
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;  
  }
}

module.exports = Sorter;
