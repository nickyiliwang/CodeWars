String.prototype.toJadenCase = function() {
  return this.split(" ")
    .map(cap => {
      return cap.charAt(0).toUpperCase() + cap.slice(1);
    })
    .join(" ");
};

"How can mirrors be real if our eyes aren't real".toJadenCase();
