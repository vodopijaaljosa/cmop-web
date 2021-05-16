---
layout: page
permalink: /landscapes/
nav_order: 2
title: Problem landscape visualizations
---

# Problem landscape visualizations #
---

Show plots in 
<button id="colPrev" onclick="getPrev(this)" class="button">&minus;</button>
<select id="col" onchange="changePlot()" class="dropdown"></select>
<button id="colNext" onclick="getNext(this)" class="button">+</button> 
columns

<table BORDER="0">
<tr>
<td align="center" onclick="selectNode(this)" id="suiAll" class="off"><b>Suite</b></td>
<td align="center" onclick="selectNode(this)" id="vizAll" class="on"><b>Visualization</b></td>
</tr>
<tr>
<td class="select" align="center">
<button id="suiPrev" onclick="getPrev(this)" class="button"><i class="arrow left"></i></button>
<select id="sui" onchange="changePlot()" style="width:200px;"></select>
<button id="suiNext" onclick="getNext(this)" class="button"><i class="arrow right"></i></button>
</td>
<td class="select" align="center">
<button id="vizPrev" onclick="getPrev(this)" class="button"><i class="arrow left"></i></button>
<select id="viz" onchange="changePlot()" style="width:200px;"></select>
<button id="vizNext" onclick="getNext(this)" class="button"><i class="arrow right"></i></button>
</td>
</tr>
</table>

<textarea id="test" rows="50" cols="100"></textarea>
<div id="images"></div>

<script src="{{ '/assets/js/custom.js' | relative_url }}"></script>