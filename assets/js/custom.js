/***********************************************************/
/* Functions for the Problem landscape visualizations page */
/***********************************************************/

selectCol.options[4].selected = true;

/* Url to the plots */
plotPath = "../assets/img/plots-2D/";

/* Fill the suite dropdown with values */
var selectSui = document.getElementById("sui");
var valuesSui = ["CTP", "C-DTLZ", "DC-DTLZ", "DAS-CMOP", "MW", "Classic", "RCM"];
var countSui = [8, 5, 6, 6, 8, 3, 2]; /* Number of problems in each suite */
var contentsSui;
for (let i = 0; i < valuesSui.length; i++) {
  contentsSui += "<option>" + valuesSui[i] + "</option>";
}
selectSui.innerHTML = contentsSui;
var problemSui = {
  "CTP": ["CTP1", "CTP2", "CTP3", "CTP4", "CTP5", "CTP6", "CTP7", "CTP8"],
  "C-DTLZ": ["C1-DTLZ1", "C1-DTLZ3", "C2-DTLZ2", "Convex-C2-DTLZ2", "C3-DTLZ1"],
  "DC-DTLZ": ["DC1-DTLZ1", "DC2-DTLZ1", "DC2-DTLZ1", "DC2-DTLZ3", "DC3-DTLZ1", "DC3-DTLZ3"],
  "DAS-CMOP": ["DAS-CMOP1", "DAS-CMOP2", "DAS-CMOP3", "DAS-CMOP4", "DAS-CMOP5", "DAS-CMOP6"],
  "MW": ["MW3", "MW6", "MW7", "MW8", "MW10", "MW11", "MW13", "MW14"],
  "Classic": ["BNH", "SRN", "TNK"],
  "RCM": ["RCM10", "RCM16"]
};

/* Fill the visualization dropdown with values */
var selectViz = document.getElementById("viz");
var namesViz = ["Problem landscape", "Dominance ratio", "Violation landscape", "All solutions in objective space", "Nondominated solutions in objective space"];
var valuesViz = ["problem-landscape", "dominance-ratio", "violation-landscape", "all-solutions", "nondom-solutions"];
/* Make sure namesViz and valuesViz have the same length! */
var contentsViz;
for (let i = 0; i < namesViz.length; i++) {
  contentsViz += "<option value=\"" + valuesViz[i] + "\">" + namesViz[i] + "</option>";
}
selectViz.innerHTML = contentsViz;

/* By default, visualizations are chosen */
var allNodes = ["suiAll", "vizAll"];
var selectedNode = "vizAll";
selectNode(document.getElementById(selectedNode));

/* Show the plots wrt the chosen suite and visualization.
Only one of the categories contains all possible values, the other only the chosen one. */
function changePlot() {
  let plotName;
  let chosenSui = sui.value;
  let chosenViz = viz.value;
  let textName;
  document.getElementById("images").innerHTML = "";
  //document.getElementById("test").value = "";
  if (selectedNode === "suiAll") {
    /* Showing all suites */
    for (let iSui = 0; iSui < valuesSui.length; iSui++) {
      let suite = valuesSui[iSui];
      for (let iPrb = 0; iPrb < countSui[iSui]; iPrb++) {
        plotName = problemSui[suite][iPrb] + "-" + chosenViz + ".png";
        addPlot(plotPath, plotName);
        //document.getElementById("test").value += plotPath + plotName + "\n";
      }
    }
  } else if (selectedNode === "vizAll") {
    /* Showing all visualizations */
    for (let iSui = 0; iSui < valuesSui.length; iSui++) {
      if (valuesSui[iSui] === chosenSui) {
        chosenSuiIndex = iSui;
      }
    }
    let suite = valuesSui[chosenSuiIndex];
    for (let iPrb = 0; iPrb < countSui[chosenSuiIndex]; iPrb++) {
      for (let iViz = 0; iViz < valuesViz.length; iViz++) {
        plotName = problemSui[suite][iPrb] + "-" + valuesViz[iViz] + ".png";
        addPlot(plotPath, plotName);
        //document.getElementById("test").value += plotPath + plotName + "\n";
      }
    }
  }
}
