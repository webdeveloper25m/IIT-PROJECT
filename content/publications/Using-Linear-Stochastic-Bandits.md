---
title: "Using Linear Stochastic Bandits to extend traditional offline Designed Experiments to online settings"
date: 2018-11-25
authors: ["Nandan Sudarsanam", "B Ravindran"]
tags: ["design of experiments", "linear bandits", "linear stochastic bandits"] 
doi: "https://doi.org/10.1016/j.cie.2017.11.030"
publishedon: "Computers & Industrial Engineering"
image: "Using-Linear-Stochastic-Bandits.jpg"
altmetric: 
dimension: pub.1093139074
draft: false
---
A designed experiment is typically followed by a statistical analysis of the results, using which the preferred settings of the inputs are selected for operation. In this paper, we motivate real-world scenarios, where it could be advantageous to succeed the experiment with continued exploration upon deployment in the online context. We propose the use of Linear Bandits to conduct sequential experiments in the online setting. The linear bandit algorithms, which utilize results from the designed experiment as an initial seed, are then used to select a treatment combination in each step or trial. Specifically, the study analyzes two linear bandit algorithms and compares them to three different baselines. The two linear bandit algorithms are OFUL, which is shown in literature to have one of the best theoretical performances, and LGUCBand, a novel contribution of this research, which uses the statistical concept of upper confidence bands for linear models. The baselines are different designs and data analyses without any form of online experimentation. The results are compared using simulations of a model built on meta-data from published experiments on real engineering applications. An analytical derivation of the default baselines is also an important contribution of this research and is intended to provide theoretical validation of the simulation results. The results indicate that, across different environments, substantial long-term improvements can be made by following designed experiments with linear bandits, with minimal short term costs.