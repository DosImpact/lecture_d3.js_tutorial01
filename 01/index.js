d3.select();
d3.selectAll();

d3.select("h1")
  .style("color", "red")
  .attr("class", "heading")
  .text("Update h1 tag");

d3.select("body").append("p").text("1 paragraph");
d3.select("body").append("p").text("2 paragraph");
d3.select("body").append("p").text("3 paragraph");

d3.selectAll("p").style("color", "blue");
