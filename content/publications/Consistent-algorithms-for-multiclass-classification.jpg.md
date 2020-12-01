---
title: "Consistent algorithms for multiclass classification with a reject option"
date: 2018-05-08
authors: ["Harish G Ramaswamy", "Ambuj Tewari", "Shivani Agarwal"]
tags: ["machine learning", "consistent algorithms", "multiclass classification"]
doi: "https://arxiv.org/abs/1505.04137"
publishedon: "arXiv preprint arXiv:1505.04137 "
image: "Consistent-algorithms-for-multiclass-classification.jpg"
altmetric: 
dimension: 
pubmed:
draft: false
---

We consider the problem of n-class classification (n≥2), where the classifier can choose to abstain from making predictions at a given cost, say, a factor α of the cost of misclassification. Designing consistent algorithms for such n-class classification problems with a `reject option' is the main goal of this paper, thereby extending and generalizing previously known results for n=2. We show that the Crammer-Singer surrogate and the one vs all hinge loss, albeit with a different predictor than the standard argmax, yield consistent algorithms for this problem when α=12. More interestingly, we design a new convex surrogate that is also consistent for this problem when α=12 and operates on a much lower dimensional space (log(n) as opposed to n). We also generalize all three surrogates to be consistent for any α∈[0,12].