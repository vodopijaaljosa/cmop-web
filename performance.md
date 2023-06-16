---
layout: page
permalink: /erd/
nav_order: 5
title: Visualizations of ERDs
---

# Visualizations of empirical runtime distributions (ERDs) #
---

## Results aggregated over all suites ##

<div id="aggSuite">
<img src="../assets/img/plots-performance/ECDF_ALL-5.png" width="33%">
<img src="../assets/img/plots-performance/ECDF_ALL-10.png" width="33%">
<img src="../assets/img/plots-performance/ECDF_ALL-30.png" width="33%">
</div>

## Results aggregated over all problems in a suite ##

<div id="aggProblem"></div>

## Results for each problem ##

<table BORDER="0">
<tr>
<td align="center" id="suiAll" class="off"><b>Suite</b></td>
</tr>
<tr>
<td class="select" align="center">
<button id="suiPrev" onclick="getPrev(this)" class="button"><i class="arrow left"></i></button>
<select id="sui" onchange="changePlot()" style="width:160px;"></select>
<button id="suiNext" onclick="getNext(this)" class="button"><i class="arrow right"></i></button>
</td>
</tr>
</table>

<div id="images"></div>
<!-- <textarea id="test" rows="50" cols="100"></textarea> -->

<script src="{{ '/assets/js/common.js' | relative_url }}"></script>
<script src="{{ '/assets/js/customP.js' | relative_url }}"></script>

