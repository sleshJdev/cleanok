enum Status {
  active, block
}

console.log(Status.active === Status['active']);
console.log(typeof Status.active);
console.log(typeof Status['active']);
