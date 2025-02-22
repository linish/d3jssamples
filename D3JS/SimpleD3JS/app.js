// const pBrowser = document.querySelector('p');
const el = d3
  .select("body")
  .append("p")
  .attr("class", "foo") // Add atribute but replace existing ones
  .text("Hello World");

  const el2 = d3
  .select("body")
  .append("p")
  .classed("foo", true)
  .classed("bar", true) // For multiple Classes
  .text("Hello World With Multiple Classes")
  .style('color', 'blue');

// console.log(pBrowser);
console.log(el);
