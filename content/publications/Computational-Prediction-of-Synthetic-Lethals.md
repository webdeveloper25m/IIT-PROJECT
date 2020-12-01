---
title: "Computational Prediction of Synthetic Lethals in Genome-Scale Metabolic Models Using Fast-SL"
date: 2018-12-10
authors: ["Karthik Raman", "Aditya Pratapa", "Omkar Mohite", "Shankar Balachandran"]
tags: ["metabolic networks", "constraint-based analysis"]
doi: "https://doi.org/10.1007/978-1-4939-7528-0_14"
publishedon: "Metabolic Network Reconstruction and Modeling"
image: "Computational-Prediction-of-Synthetic-Lethals.jpg"
altmetric: 30303388
dimension: pub.1099626829
pubmed: https://pubmed.ncbi.nlm.nih.gov/29222760/
draft: false
---
In this chapter, we describe Fast-SL, an in silico approach to predict synthetic lethals in genome-scale metabolic models. Synthetic lethals are sets of genes or reactions where only the simultaneous removal of all genes or reactions in the set abolishes growth of an organism. In silico approaches to predict synthetic lethals are based on Flux Balance Analysis (FBA), a popular constraint-based analysis method based on linear programming. FBA has been shown to accurately predict the viability of various genome-scale metabolic models. Fast-SL builds on the framework of FBA and enables the prediction of synthetic lethal reactions or genes in different organisms, under various environmental conditions. Predicting synthetic lethals in metabolic network models allows us to generate hypotheses on possible novel genetic interactions and potential candidates for combinatorial therapy, in case of pathogenic organisms. We here summarize the Fast-SL approach for analyzing metabolic networks and detail the procedure to predict synthetic lethals in any given metabolic model. We illustrate the approach by predicting synthetic lethals in Escherichia coli. The Fast-SL implementation for MATLAB is available from https://github.com/RamanLab/FastSL/ .