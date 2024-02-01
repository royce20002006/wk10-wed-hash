const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null)
  }

  hash(key) {
    let hashed = sha256(key)
    
    let eight = hashed.slice(0,8);
    
    let int = parseInt(eight, 16);
    
    return int;
  }

  hashMod(key) {
    
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here 
  }

  insertWithHashCollisions(key, value) {
    // Your code here 
  }

  insert(key, value) {
    // Your code here 
  }

}


module.exports = HashTable;
