d3.select("#chart2")
  .on("mousemove", function() {

    var tooltip = d3.select("#tooltip")
      .style("display", "block")
      .style("top", d3.event.pageY + 20 + "px")
      .style("left", d3.event.pageX + 20 + "px");

    tooltip.select("#title").html("Genre and Paintings");
    tooltip.select("#paintings").html("Paintings: 1-877");

  })

  .on("mouseout", function() {
    d3.select("#tooltip")
      .style("display", "none");
  });