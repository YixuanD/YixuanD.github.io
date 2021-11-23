var bannerimg = "bannerimg.jpeg";

d3.json("url", function(error, data) {

  if (!error) {
    d3.select("#banner")
      .style("background-image", "bannerimg");
  }

});

var bannerPosition = d3.scaleLinear()
  .domain([0, window.innerHeight])
  .range([100, 0]);

d3.select(window)
  .on("scroll", function() {
    var y = bannerPosition(window.scrollY);
    d3.select("#banner")
      .style("background-position", "50% " + y + "%");
  });