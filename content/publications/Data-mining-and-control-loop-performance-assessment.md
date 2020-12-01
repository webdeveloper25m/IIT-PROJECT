---
title: "Data mining and control loop performance assessment: The multivariate case"
date: 2017-12-01
authors: ["Laya Das", "Raghunathan Rengaswamy", "Babji Srinivasan"]
tags: ["Data analysis, Control loop, Performance evaluation"]
doi: "https://doi.org/10.1002/aic.15689"
publishedon: "AIChE Journal"
image: "Data-mining-and-control-loop-performance-assessment.jpg"
altmetric: 
dimension: 
pubmed: 
draft: false
---
Control loop performance assessment (CLPA) techniques assume that the data being analyzed is generated during steady state operation with fixed plant dynamics and controller parameters. However, in industrial settings one often encounters environmental and feedstock variations which can induce significant changes in the plant dynamics. Availability of data sets corresponding to fixed configurations is therefore questionable in industrial scenarios, in which case it becomes imperative to extract the same from routine plant operating data. This article proposes a technique for segmenting multivariate control loop data into portions corresponding to fixed steady state operation of the system. The proposed technique exploits the fact that changes in the operating region of the system lead to changes in variance‐covariance matrix of multivariate control loop data. The univariate interval halving technique is fused with Mahalanobis distance to develop a multivariate tool that accounts for interactions between variables. The resulting data segments can be used for reliable CLPA and/or for user defined benchmarking of control loops. A multivariate control loop performance index is also proposed that requires significantly less data as compared to one of the previously proposed techniques. The proposed technique requires only routine operating data from the plant, and is tested on benchmark systems in the literature with simulations. Experimental validation on a model predictive control system aimed at maintaining the temperature profile of a metal plate demonstrates applicability of the technique to industrial systems. The proposed technique acts as a tool for preprocessing data relevant to CLPA and can be applied to large scale interacting multivariate systems.