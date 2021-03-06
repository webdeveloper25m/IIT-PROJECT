---
title: "Fast-SL:an efficient algorithm to identify synthetic lethal sets in metabolic networks"
date: 2015-01-08
authors: ["A. Pratapa", "S. Balachandran", K. Raman"]
tags: ["Linear Programming", "gene sets", "metabolic networks"]
doi: "https://doi.org/10.1093/bioinformatics/btv352"
publishedon: "Bioinformatics"
image: "Fast-SL-an-efficient-algorithm-to-identify.PNG"
altmetric: 2466619
dimension: pub.1059414393
pubmed: https://pubmed.ncbi.nlm.nih.gov/26085504/
draft: false
---
Synthetic lethal reaction/gene-sets are sets of reactions/genes where only the simultaneous removal of all reactions/genes in the set abolishes growth of an organism. In silico, synthetic lethal sets can be identified by simulating the effect of removal of gene sets from the reconstructed genome-scale metabolic network of an organism. Flux balance analysis (FBA), based on linear programming, has emerged as a powerful tool for the in silico analyses of metabolic networks. To identify all possible synthetic lethal reactions combinations, an exhaustive sampling of all possible combinations is computationally expensive. We surmount the computational complexity of exhaustive search by iteratively restricting the sample space of reaction combinations for search, resulting in a substantial reduction in the running time. We here propose an algorithm, Fast-SL, which provides an efficient way to analyse metabolic networks for higher order lethal reaction sets. Fast-SL offers a substantial speed-up through a massive reduction in the search space for synthetic lethals; in the case of E. coli, Fast-SL reduces the search space for synthetic lethal triplets by over 4000-fold. Fast-SL also compares favourably with SL Finder, an algorithm for identifying synthetic lethal sets, by Suthers et al (2009), which involves the solution of a bi-level Mixed Integer Linear Programming problem. We have implemented the Fast-SL algorithm in MATLAB, building upon COBRA toolbox v2.0.