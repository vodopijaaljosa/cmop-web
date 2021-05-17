/* Url to the plots */
plotPath = "../assets/img/plots-2D/";

/* Fill the columns dropdown with values */
var selectCol = document.getElementById("col");
var valuesCol = [];
var contentsCol;
for (let i = 1; i <= 10; i++) {
  valuesCol.push(i);
  contentsCol += "<option>" + i + "</option>";
}
selectCol.innerHTML = contentsCol;
selectCol.options[4].selected = true;

/* Fill the suite dropdown with values */
var selectSui = document.getElementById("sui");
var valuesSui = ["CTP", "C-DTLZ", "DC-DTLZ", "MW", "DAS-CMOP", "Classic", "RCM"];
var countSui = [8, 5, 6, 8, 6, 3, 2]; /* Number of problems in each suite */
var contentsSui;
for (let i = 0; i < valuesSui.length; i++) {
  contentsSui += "<option>" + valuesSui[i] + "</option>";
}
selectSui.innerHTML = contentsSui;
var problemSui = {
  "CTP": ["CTP1", "CTP2", "CTP3", "CTP4", "CTP5", "CTP6", "CTP7", "CTP8"],
  "C-DTLZ": ["C1-DTLZ1", "C1-DTLZ3", "C2-DTLZ2", "Convex-C2-DTLZ2", "C3-DTLZ1"],
  "DC-DTLZ": ["DC1-DTLZ1", "DC2-DTLZ1", "DC2-DTLZ1", "DC2-DTLZ3", "DC3-DTLZ1", "DC3-DTLZ3"],
  "MW": ["MW3", "MW6", "MW7", "MW8", "MW10", "MW11", "MW13", "MW14"],
  "DAS-CMOP": ["DAS-CMOP1", "DAS-CMOP2", "DAS-CMOP3", "DAS-CMOP4", "DAS-CMOP5", "DAS-CMOP6"],
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

/* Adds the plot to the div */
function addPlot(plotName) {
  let plotWidth = 100 / col.value;
  var elemDiv = document.createElement('div');
  var elemA = document.createElement('a');
  var elemImg = document.createElement("img");
  elemDiv.setAttribute("style", "display:inline-block; width:" + plotWidth + "%;");
  elemA.setAttribute("href", plotPath + plotName);
  elemA.setAttribute("class", "nostyle");
  elemImg.setAttribute("src", plotPath + plotName);
  elemImg.setAttribute("alt", "");
  elemA.appendChild(elemImg);
  elemDiv.appendChild(elemA);
  document.getElementById("images").appendChild(elemDiv);
}

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
        addPlot(plotName);
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
    for (let iViz = 0; iViz < valuesViz.length; iViz++) {
      for (let iPrb = 0; iPrb < countSui[chosenSuiIndex]; iPrb++) {
        plotName = problemSui[suite][iPrb] + "-" + valuesViz[iViz] + ".png";
        addPlot(plotName);
        //document.getElementById("test").value += plotPath + plotName + "\n";
      }
    }
  }
}

/* Move the dropdown selection to the previous item in the list */
function getPrev(ele) {
  let select = document.getElementById(ele.id.substring(0, 3));
  let len = select.length;
  let curr_index = select.selectedIndex;
  if (curr_index > 0) {
    select.selectedIndex--;
  } else {
    select.selectedIndex = len - 1;
  }
  changePlot();
}

/* Move the dropdown selection to the next item in the list */
function getNext(ele) {
  let select = document.getElementById(ele.id.substring(0, 3));
  let len = select.length;
  let curr_index = select.selectedIndex;
  if (curr_index < len - 1) {
    select.selectedIndex++;
  } else {
    select.selectedIndex = 0;
  }
  changePlot();
}

/* Disable (or enable) the element */
function disableElements(ele, mode) {
  document.getElementById(ele + "Prev").disabled = mode;
  document.getElementById(ele).disabled = mode;
  document.getElementById(ele + "Next").disabled = mode;
  if (mode == false) {
    document.getElementById(ele + "Prev").style.cursor = "pointer";
    document.getElementById(ele).style.cursor = "pointer"
    document.getElementById(ele + "Next").style.cursor = "pointer"
  } else {
    document.getElementById(ele + "Prev").style.cursor = "default";
    document.getElementById(ele).style.cursor = "default"
    document.getElementById(ele + "Next").style.cursor = "default"
  }
}

/* Select the table cell */
function selectNode(node) {
  selectedNode = node.id;
  for (let i = 0; i < allNodes.length; i++) {
    if (selectedNode === allNodes[i]) {
      document.getElementById(allNodes[i]).className = "on";
      disableElements(allNodes[i].substring(0, 3), true);
    } else {
      document.getElementById(allNodes[i]).className = "off";
      disableElements(allNodes[i].substring(0, 3), false);
    }
  }
  changePlot();
}
