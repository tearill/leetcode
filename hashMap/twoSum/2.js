// hash map
function hash(key) {
  let length = key.length
  return key.substr(length-2, length)
}

// hash('030340') => 40