//SVG-elementet indsættes
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 1000);

//Vi putter en cirkel ind i SVG-elementet
svg
  .append("circle")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", 50)
  .attr("fill", "#49d6d1");

d3.selectAll("circle")
  //En transition begynder
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(2000)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således fra 100 - 600
  .attr("cx", 600)
  //Nu strater vi endnu en trasition som skal bevæge cirklen tilbage til 100
  .transition()
  //duration er hvor lang tid transitionen skal tage
  .duration(2000)
  //herunder definerer vi slutværdierne for transitionen - cirklens cx rykkes således tilbage fra 600 - 100
  .attr("cx", 100);

/**
 * Bonusopgave: implementer en knap som starter animationen og få cirklen til at bevæge sig i en trekant.
 */
