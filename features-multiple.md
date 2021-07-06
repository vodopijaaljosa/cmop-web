---
layout: page
permalink: /features-multiple/
nav_order: 4
title: Visualizations of multiple features
---

# Visualizations of multiple features #
---

Show plots in 
<button id="colPrev" onclick="getPrev(this)" class="button">&minus;</button>
<select id="col" onchange="changePlot()" class="dropdown"></select>
<button id="colNext" onclick="getNext(this)" class="button">+</button> 
columns

<table BORDER="0">
<tr>
<td align="center" onclick="selectNode(this)" id="suiAll" class="off"><b>Suite</b></td>
<td align="center" onclick="selectNode(this)" id="dimAll" class="off"><b>Problem dimension</b></td>
<td align="center" onclick="selectNode(this)" id="vizAll" class="on"><b>Visualization</b></td>
</tr>
<tr>
<td class="select" align="center">
<button id="suiPrev" onclick="getPrev(this)" class="button"><i class="arrow left"></i></button>
<select id="sui" onchange="changePlot()" style="width:160px;"></select>
<button id="suiNext" onclick="getNext(this)" class="button"><i class="arrow right"></i></button>
</td>
<td class="select" align="center">
<button id="dimPrev" onclick="getPrev(this)" class="button"><i class="arrow left"></i></button>
<select id="dim" onchange="changePlot()" style="width:80px;"></select>
<button id="dimNext" onclick="getNext(this)" class="button"><i class="arrow right"></i></button>
</td>
<td class="select" align="center">
<button id="vizPrev" onclick="getPrev(this)" class="button"><i class="arrow left"></i></button>
<select id="viz" onchange="changePlot()" style="width:320px;"></select>
<button id="vizNext" onclick="getNext(this)" class="button"><i class="arrow right"></i></button>
</td>
</tr>
</table>

<div id="images"></div>
<!-- <textarea id="test" rows="50" cols="100"></textarea> -->

<script src="{{ '/assets/js/common.js' | relative_url }}"></script>
<script src="{{ '/assets/js/customM.js' | relative_url }}"></script>

