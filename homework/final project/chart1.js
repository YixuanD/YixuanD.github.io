d3.select("#chart1")
  .on("mousemove", function(d) {

    var tooltip = d3.select("#tooltip")
      .style("display", "block")
      .style("top", d3.event.pageY + 20 + "px")
      .style("left", d3.event.pageX + 20 + "px");

    tooltip.select("#title").html("Artists:" + d.data.name);
    tooltip.select("#value").html("paintings:" + d.data.paintings);

  })

  .on("mouseout", function() {
    d3.select("#tooltip")
      .style("display", "none");
  });

      
