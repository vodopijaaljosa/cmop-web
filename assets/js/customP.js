/****************************************************************************/
/* Functions for the Visualizations of empirical runtime distributions page */
/****************************************************************************/

var numColumns = 3;

/* Url to the plots */
plotPath = "../assets/img/plots-performance/";

/* Use all available dimensions */
var namesDim = ["5", "10", "30"];

/* Fill the suite dropdown with values */
var selectSui = document.getElementById("sui");
var valuesSui = ["CF", "CTP", "C-DTLZ", "DAS-CMOP", "DC-DTLZ", "LIR-CMOP", "MW", "NCTP"];
var countSui = [10, 8, 6, 9, 6, 14, 14, 18]; /* Number of problems in each suite */
var contentsSui;
for (let i = 0; i < valuesSui.length; i++) {
  contentsSui += "<option>" + valuesSui[i] + "</option>";
}
selectSui.innerHTML = contentsSui;
selectSui.options[0].selected = true;

var problemSui = {
  "CF": ["CF1", "CF2", "CF3", "CF4", "CF5", "CF6", "CF7", "CF8", "CF9", "CF10"],
  "CTP": ["CTP1", "CTP2", "CTP3", "CTP4", "CTP5", "CTP6", "CTP7", "CTP8"],
  "C-DTLZ": ["C1-DTLZ1", "C1-DTLZ3", "C2-DTLZ2", "Convex-C2-DTLZ2", "C3-DTLZ1", "C3-DTLZ4"],
  "DAS-CMOP": ["DAS-CMOP1", "DAS-CMOP2", "DAS-CMOP3", "DAS-CMOP4", "DAS-CMOP5", "DAS-CMOP6", "DAS-CMOP7", "DAS-CMOP8",
  "DAS-CMOP9"],
  "DC-DTLZ": ["DC1-DTLZ1", "DC1-DTLZ3", "DC2-DTLZ1", "DC2-DTLZ3", "DC3-DTLZ1", "DC3-DTLZ3"],
  "LIR-CMOP": ["LIR-CMOP1", "LIR-CMOP2", "LIR-CMOP3", "LIR-CMOP4", "LIR-CMOP5", "LIR-CMOP6", "LIR-CMOP7", "LIR-CMOP8",
  "LIR-CMOP9", "LIR-CMOP10", "LIR-CMOP11", "LIR-CMOP12", "LIR-CMOP13", "LIR-CMOP14"],
  "MW": ["MW1", "MW2", "MW3", "MW4", "MW5", "MW6", "MW7", "MW8", "MW9", "MW10", "MW11", "MW12", "MW13", "MW14"],
  "NCTP": ["NCTP1", "NCTP2", "NCTP3", "NCTP4", "NCTP5", "NCTP6", "NCTP7", "NCTP8", "NCTP9", "NCTP10", "NCTP11",
  "NCTP12", "NCTP13", "NCTP14", "NCTP15", "NCTP16", "NCTP17", "NCTP18"]
};
showAggProblems();
changePlot();

/* Show the plots wrt the chosen suite. */
function changePlot() {
	var plotName;
	var chosenSui = sui.value;
	var chosenSuiIndex = 0;
	var chosenDim = "";
	/* Get index for the chosen suite */
    for (let iSui = 0; iSui < valuesSui.length; iSui++) {
      if (valuesSui[iSui] === chosenSui) {
        chosenSuiIndex = iSui;
      }
    }
	document.getElementById("images").innerHTML = "";
	// document.getElementById("test").value = "";
    /* For each problem separately */
    for (let iPrb = 0; iPrb < countSui[chosenSuiIndex]; iPrb++) {
        for (let iDim = 0; iDim < namesDim.length; iDim++) {
            chosenDim = namesDim[iDim];
            plotName = "ECDF_" + problemSui[chosenSui][iPrb] + "-" + chosenDim + ".png";
            // document.getElementById("test").value += plotPath + plotName + "\n";
            addPlot(plotPath, plotName, numColumns);
        }
	}
}

/* Adds the plot to the aggProblem div */
function addAggPlot(path, plotName, columns) {
  var plotWidth = 100 / columns;
  var elemDiv = document.createElement('div');
  var elemA = document.createElement('a');
  var elemImg = document.createElement("img");
  elemDiv.setAttribute("style", "display:inline-block; width:" + plotWidth + "%;");
  elemA.setAttribute("href", path + plotName);
  elemA.setAttribute("class", "nostyle");
  elemImg.setAttribute("src", path + plotName);
  elemImg.setAttribute("alt", "");
  elemA.appendChild(elemImg);
  elemDiv.appendChild(elemA);
  document.getElementById("aggProblem").appendChild(elemDiv);
}

function showAggProblems() {
    for (let iSui = 0; iSui < valuesSui.length; iSui++) {
        var chosenSui = valuesSui[iSui];
        for (let iDim = 0; iDim < namesDim.length; iDim++) {
            chosenDim = namesDim[iDim];
            plotName = "ECDF_" + chosenSui + "-" + chosenDim + ".png";
            // document.getElementById("test").value += plotPath + plotName + "\n";
            addAggPlot(plotPath, plotName, numColumns);
        }
	}
}