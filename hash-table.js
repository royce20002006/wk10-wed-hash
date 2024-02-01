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

    let eight = hashed.slice(0, 8);

    let int = parseInt(eight, 16);

    return int;
  }

  hashMod(key) {

    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    let hash = new KeyValuePair(key, value)
    let index = this.hashMod(key);
    if (!this.data[index]) {
      this.data[index] = hash;
      this.count++;
    } else {
      throw new Error("hash collision or same key/value pair already exists!")
    }

    return this.data;
  }

  insertWithHashCollisions(key, value) {
    let hash = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    if (!this.data[index]) {
      this.data[index] = hash;
      this.count++;
    } else {
      hash.next = this.data[index]
      this.data[index] = hash;
      
      this.count++;
    }
    return this.data;
  }

  insert(key, value) {
    let hash = new KeyValuePair(key, value);
    let index = this.hashMod(key);
    if (this.data[index]) {
      let current = this.data[index];
      while(current) {
        if(current.key === key) {
          current.value = value;
          return;
        } 
        current = current.next;
      }
    }
    hash.next = this.data[index]
    this.data[index] = hash;
    this.count++;
        
       
      
    
  }

}


module.exports = HashTable;
