---
layout: page
permalink: /
nav_order: 1
title: Home
---

# Characterization of Constrained Multiobjective Optimization Problems (CMOPs) #

---

{: .no_toc } 

Welcome to the website with supplementary material for two papers about characterization of constrained 
multiobjective optimization problems:

* Aljoša Vodopija, Tea Tušar, Bogdan Filipič. [**Characterization of constrained continuous multiobjective optimization problems: A feature space perspective**](https://doi.org/10.1016/j.ins.2022.05.106),
_Information Sciences_ 607:244-262, 2022.
* Aljoša Vodopija, Tea Tušar, Bogdan Filipič. [**Characterization of constrained continuous multiobjective pptimization problems: A performance space perspective**](https://arxiv.org/abs/2302.02170), 
_CoRR abs/2302.02170_, 2023.

---

## Content ##

This website provides several visualizations - of the feature and performance space of CMOPs. 

### Feature space visualizations (first paper) ###

#### Problem landscape visualizations ####
* *Problem landscape* shows a combination of *dominance ratio* (blue hues) and *violation landscape* (pink).
* *Dominance ratio* is expressed for each sampled solution as a proportion of all sampled solutions that dominate it.
* *Violation landscape* depicts the constraint violation values with the feasible region presented in white.
* *All solutions* plots show solutions in the objective space where blue color indicates the objective values that can be obtained with feasible solutions, while pink color indicates solutions that can be obtained with infeasible solutions only.
* *Non-dominated solutions* plots show solutions in the objective space where the unconstrained Pareto front is depicted in pink and the constrained Pareto front in blue.

#### Visualizations of separate features ####
* Violin plots showing feature distributions for each test suite and three dimensionalities: 2, 3, 5. All the features used are listed in the table below.

Feature | Symbol
:------- | :------
Feasibility ratio | $$\rho_{\mathrm{F}}$$
Number of feasible components | $$N_{\mathcal{F}}$$
Largest feasible component | $$\mathcal{F}_{\mathrm{max}}$$
Median feasible component | $$\mathcal{F}_{\mathrm{med}}$$
Smallest feasible component | $$\mathcal{F}_{\mathrm{min}}$$
Proportion of Pareto-optimal solutions in the largest feasible component | $$\mathcal{O}(\mathcal{F}_{\mathrm{max}})$$
Size of the optimal feasible component | $$\mathcal{F}_{\mathrm{opt}}$$
Proportion of boundary Pareto-optimal solutions | $$\rho_{\partial S_o}$$
Maximum information content | $$H_{\mathrm{max}}$$
Settling sensitivity | $$\epsilon_s$$
Initial partial information | $$M_0$$
Minimum correlation | $$\rho_{\mathrm{min}}$$
Maximum correlation | $$\rho_{\mathrm{max}}$$
Number of basins | $$N_{\mathcal{B}}$$
Largest basin | $$\mathcal{B}_{\mathrm{max}}$$
Median basin | $$\mathcal{B}_{\mathrm{med}}$$
Smallest basin | $$\mathcal{B}_{\mathrm{min}}$$
Largest feasible basin | $$(\mathcal{B}_\mathrm{F})_{\mathrm{max}}$$
Median feasible basin | $$(\mathcal{B}_\mathrm{F})_{\mathrm{med}}$$
Smallest feasible basin | $$(\mathcal{B}_\mathrm{F})_{\mathrm{min}}$$
Proportion of Pareto-optimal solutions in the largest basin | $$\mathcal{O}(\mathcal{B}_{\mathrm{max}})$$
Size of the optimal basin | $$\mathcal{B}_{\mathrm{opt}}$$
Proportion of feasible basins | $$\cup \mathcal{B}_\mathrm{F}$$
Maximum constraint violation of all basins | $$v(\mathcal{B})_{\mathrm{max}}$$
Median constraint violation over all basins | $$v(\mathcal{B})_{\mathrm{med}}$$
Constraint violation of the maximum basin | $$v(\mathcal{B}_{\mathrm{max}})$$
Maximal ratio of feasible boundary crossings | $$(\rho_{\partial F})_{\mathrm{max}}$$
Median ratio of feasible boundary crossings | $$(\rho_{\partial F})_{\mathrm{med}}$$
Minimal ratio of feasible boundary crossings | $$(\rho_{\partial F})_{\mathrm{min}}$$

#### Visualizations of multiple features ####
* The feature space is visualized using four dimensionality reduction methods: PCA, Isomap, MDS, and t-SNE.

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js" integrity="sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js" integrity="sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>

### Performance space visualizations (second paper) ###

#### Visualizations of empirical runtime distributions ####
Visualization show the empirical runtime distribution aggregated over multiple runs for various problems and three
optimization algorithms: NSGA-III, C-TAEA and MOEA/D-IEpsilon. 
