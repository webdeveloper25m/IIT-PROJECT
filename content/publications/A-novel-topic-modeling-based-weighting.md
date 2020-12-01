---
title: "A novel topic modeling based weighting framework for class imbalance learning"
date: 2018-11-15
authors: ["Sudarsun Santhiappan", "Jeshuren Chelladurai", "B Ravindran"]
tags: ["imbalance learning", "undersampling"] 
doi: "https://doi.org/10.1145/3152494.3152496"
publishedon: "Proceedings of the ACM India Joint International Conference on Data Science and Management of Data"
image: "A-novel-topic-modeling-based-weighting.jpg"
altmetric: 
dimension: pub.1101025862
draft: false
---
Classification of data with imbalance characteristics has become an important research problem, as data from most of the real-world applications follow non-uniform class distributions. A simple solution to handle class imbalance is by sampling from the dataset appropriately to compensate for the imbalance in class proportions. When the data distribution is unknown during sampling, making assumptions on the distribution requires domain knowledge and insights on the dataset. We propose a novel unsupervised topic modeling based weighting framework to estimate the latent data distribution of a dataset. We also propose TODUS, a topics oriented directed undersampling algorithm that follows the estimated data distribution to draw samples from the dataset. TODUS minimizes the loss of important information that typically gets dropped during random undersampling. We have shown empirically that the performance of TODUS method is better than the other sampling methods compared in our experiments.