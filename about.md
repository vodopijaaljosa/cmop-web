---
layout: page
permalink: /
nav_order: 1
title: Home
---

# Characterization of Constrained Multiobjective Optimization Problems (CMOPs) #
---

{: .no_toc } 

Welcome to the website with supplementary material for the paper entitled **Characterization of Constrained Continuous Multiobjective Optimization Problems: A Feature Space Perspective** by Aljoša Vodopija, Tea Tušar and Bogdan Filipič. 

## Content ##

#### Problem landscape visualizations ####
* *Problem landscape* as a combination between *dominance ratio* (blue) and *violation landscape* (pink).
* *Dominance ratio* for each sampled solution expressed as a proportion of all sampled solutions that dominate it.
* *Violation landscape* in terms of constraint violation values whit the feasible region presented in white.
* *All solutions* in the objective space where blue indicates the objective values that can be obtained with feasible solutions, while pink color indicates solutions that can be obtained with infeasible solutions only.
* *Non-dominated solutions* in the objective space where the unconstrained Pareto front is depicted in pink and the constrained Pareto front in blue.

#### Visualizations of separate features ####
* Violin plots showing feature distributions for each test suite and three dimensionalities: 2, 3, 5.

Feature | Symbol
------- | ------
Feasibility ratio | $\rho_{\mathrm{F}}$
Number of feasible components | $N_{\mathcal{F}}$
Largest feasible component | $\mathcal{F}_{\mathrm{max}}$
Median feasible component | $\mathcal{F}_{\mathrm{med}}$
Smallest feasible component | $\mathcal{F}_{\mathrm{min}}$
Proportion of Pareto-optimal solutions in the largest feasible component | $\mathcal{O}(\mathcal{F}_{\mathrm{max}})$
Size of the optimal feasible component | $\mathcal{F}_{\mathrm{opt}}$
Proportion of boundary Pareto-optimal solutions | $\rho_{\partial S_o}$
Maximum information content | $H_{\mathrm{max}}$
Settling sensitivity | $\epsilon_s$
Initial partial information | $M_0$
Minimum correlation | $\rho_{\mathrm{min}}$
Maximum correlation | $\rho_{\mathrm{max}}$
Number of basins | $N_{\mathcal{B}}$
Largest basin | $\mathcal{B}_{\mathrm{max}}$
Median basin | $\mathcal{B}_{\mathrm{med}}$
Smallest basin | $\mathcal{B}_{\mathrm{min}}$
Largest feasible basin | $(\mathcal{B}_\mathrm{F})_{\mathrm{max}}$
Median feasible basin | $(\mathcal{B}_\mathrm{F})_{\mathrm{med}}$
Smallest feasible basin | $(\mathcal{B}_\mathrm{F})_{\mathrm{min}}$
Proportion of Pareto-optimal solutions in the largest basin | $\mathcal{O}(\mathcal{B}_{\mathrm{max}})$
Size of the optimal basin | $\mathcal{B}_{\mathrm{opt}}$
Proportion of feasible basins | $\cup \mathcal{B}_\mathrm{F}$
Maximum constraint violation of all basins | $v(\mathcal{B})_{\mathrm{max}}$
Median constraint violation over all basins | $v(\mathcal{B})_{\mathrm{med}}$
Constraint violation of the maximum basin | $v(\mathcal{B}_{\mathrm{max}})$
Maximal ratio of feasible boundary crossings | $(\rho_{\partial F})_{\mathrm{max}}$
Median ratio of feasible boundary crossings | $(\rho_{\partial F})_{\mathrm{median}}$
Minimal ratio of feasible boundary crossings | $(\rho_{\partial F})_{\mathrm{min}}$

#### Visualizations of multiple features ####
* Feature space visualization using dimensionality reduction methods: PCA, Isomap, MDS, and t-SNE.

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js" integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js" integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>
