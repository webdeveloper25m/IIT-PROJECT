---
title: "Nonparametric Poisson Factorization Machine"
date: 2015-09-24
authors: ["Avijit Saha", "Ayan Acharya", "B Ravindran", "Joydeep Ghosh"]
tags: ["Factorization Machine", "Poisson distribution"]
doi: "https://doi.org/10.1109/ICDM.2015.142"
publishedon: "Data Mining"
image: "Nonparametric-Poisson-Factorization-Machine.PNG"
altmetric: 
dimension: 
pubmed: 
draft: false
---
Factorization Machine (FM) provides a generic framework that combines the prediction quality of factorization models with the flexibility of feature engineering that discriminative models like SVM offer. The Bayesian Factorization Machine [11], with its impressive predictive performance and the convenience of automatic tuning of parameters, has been one of the most successful and efficient approaches within this framework. However, this model has two major drawbacks. Firstly, it assumes that the data is generated from Gaussian distributions that may not be the best assumption for count data such as integer-valued ratings. Secondly, to get the best performance, one needs to cross-validate over the number of latent factors used for modeling the pairwise interaction in FM, a process that is computationally intensive. This paper introduces the Nonparametric Poisson Factorization Machine (NPFM), which models count data using the Poisson distribution, which provides both modeling and computational advantages for sparse data. The ideal number of latent factors is estimated from the data itself, thereby addressing a key limitation of existing approaches to FM. Additionally, NPFM has linear time complexity with respect to the number of non-zero observations.