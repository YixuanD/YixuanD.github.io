d3.select("#chart1")
  .on("mousemove", function() {

    var tooltip = d3.select("#tooltip")
      .style("display", "block")
      .style("top", d3.event.pageY + 20 + "px")
      .style("left", d3.event.pageX + 20 + "px");

    tooltip.select("#title").html("Artworks and Time ");
    tooltip.select("#value").html("1-50");

  })
  .on("mouseout", function() {
    d3.select("#tooltip")
      .style("display", "none");
  });
