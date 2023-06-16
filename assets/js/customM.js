/**************************************************************/
/* Functions for the Visualizations of multiple features page */
/**************************************************************/

selectCol.options[3].selected = true;

/* Url to the plots */
plotPath = "../assets/img/plots-features-multiple/";

/* Not all suites are available for all dimensions */
var dimSui = {
  "d2": ["Any", "CTP", "C-DTLZ", "DC-DTLZ", "DAS-CMOP", "MW", "RCM"],
  "d3": ["Any", "CTP", "CF",  "C-DTLZ", "NCTP", "DC-DTLZ", "DAS-CMOP", "LIR-CMOP", "MW", "RCM"],
  "d5": ["Any", "CTP", "CF",  "C-DTLZ", "NCTP", "DC-DTLZ", "DAS-CMOP", "LIR-CMOP", "MW", "RCM"],
  "all": ["Any", "CTP", "CF",  "C-DTLZ", "NCTP", "DC-DTLZ", "DAS-CMOP", "LIR-CMOP", "MW", "RCM"],
};

/* Features */
var valuesFea = ["n_com", "min_com", "median_com", "max_com", "opt_max_com", "size_opt_com",
	"fr", "corr_min", "corr_max", "pf_bound", "h_max", "eps_s", "m0", "min_rfb", "median_rfb", "max_rfb",
	"n_basin", "min_basin", "median_basin", "max_basin", "min_feas_basin", "median_feas_basin",
	"max_feas_basin", "fr_basin", "median_cv_basin", "cv_max_basin", "opt_max_basin",
	"size_opt_basin"];

/* Fill the suite dropdown with values */
var selectSui = document.getElementById("sui");
var valuesSui = dimSui["all"];
var contentsSui;
for (let i = 0; i < valuesSui.length; i++) {
  contentsSui += "<option>" + valuesSui[i] + "</option>";
}
selectSui.innerHTML = contentsSui;

/* Fill the dimension dropdown with values */
var selectDim = document.getElementById("dim");
var namesDim = ["2", "3", "5", "Any"];
var valuesDim = ["d2", "d3", "d5", "all"];
var contentsDim;
for (let i = 0; i < valuesDim.length; i++) {
  contentsDim += "<option value=\"" + valuesDim[i] + "\">" + namesDim[i] + "</option>";
}
selectDim.innerHTML = contentsDim;
selectDim.options[3].selected = true;

/* Fill the visualization dropdown with values */
var selectViz = document.getElementById("viz");
var valuesViz = ["PCA", "Isomap", "MDS", "t-SNE"];
var contentsViz;
for (let i = 0; i < valuesViz.length; i++) {
  contentsViz += "<option>" + valuesViz[i] + "</option>";
}
selectViz.innerHTML = contentsViz;

/* By default, visualizations are chosen */
var allNodes = ["suiAll", "dimAll", "vizAll"];
var selectedNode = "vizAll";
selectNode(document.getElementById(selectedNode));

/* Show the plots wrt the chosen suite, dimension and visualization.
Exactly one of these categories contains all possible values, the rest only the chosen one. */
function changePlot() {
	let plotName;
	let chosenSui = [sui.value];
	let chosenDim = [dim.value];
	let chosenViz = [viz.value];
	let textName;
	if (selectedNode === "suiAll") {
		chosenSui = [...valuesSui];
	} else if (selectedNode === "dimAll") {
		chosenDim = [...valuesDim];
	} else if (selectedNode === "vizAll") {
		chosenViz = [...valuesViz];
	}
	document.getElementById("images").innerHTML = "";
	//document.getElementById("test").value = "";
	for (let iDim = 0; iDim < chosenDim.length; iDim++) {
		if (selectedNode === "suiAll") {
			chosenSui = [...dimSui[chosenDim[iDim]]];
		}
		for (let iSui = 0; iSui < chosenSui.length; iSui++) {
			for (let iViz = 0; iViz < chosenViz.length; iViz++) {
				if (dimSui[chosenDim[iDim]].indexOf(chosenSui[iSui]) > -1) {
					plotName = "proj-" + chosenDim[iDim] + "-" + chosenViz[iViz] + "-" + chosenSui[iSui] + ".png";
					addPlot(plotPath, plotName, col.value);
					//document.getElementById("test").value += plotName + "\n";
			    }
			}
		}
	}
	for (let iFea = 0; iFea < valuesFea.length; iFea++) {
		for (let iDim = 0; iDim < chosenDim.length; iDim++) {
			for (let iViz = 0; iViz < chosenViz.length; iViz++) {
				plotName = "proj-" + chosenDim[iDim] + "-" + chosenViz[iViz] + "-color-" + valuesFea[iFea] + ".png";
				addPlot(plotPath, plotName, col.value);
				//document.getElementById("test").value += plotName + "\n";
			}
		}
	}
}