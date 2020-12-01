---
title: "Improved Insights on Financial Health through Partially Constrained Hidden Markov Model Clustering on Loan Repayment Data"
date: 2018-04-20
authors: ["Dibu John Philip", "Nandan Sudarsanam", "B Ravindran"]
tags: ["HMM based clustering", "expectation-maximization", "loan repayment"]
doi: "https://doi.org/10.1145/3242734.3242741"
publishedon: "ACM SIGMIS Database: the DATABASE for Advances in Information Systems "
image: "Improved-Insights-on-Financial-Health-through-Partially-Constrained.jpg"
altmetric: 
dimension: pub.1105862913
pubmed:
draft: false
---

There is a growing interest in understanding, as opposed to predicting, the repayment behavior of customers of financial institutions that provide loans. This study proposes a modified Hidden Markov Model (HMM) based clustering, which clusters repayment sequences across selected subsets of the HMM parameters. We demonstrate that different implementations of this modified adaptation helps us gain an in-depth understanding of various drivers that are hard to directly observe but nevertheless govern repayment. These include drivers such as the ability to repay (financial health of the customer) or the intention to repay independent of the ability (willful defaulting and unintentional delinquency). Algorithmically, we achieve this partially constrained HMM clustering (PC-HMM) by placing constraints on the expectation-maximization (EM) algorithm where a subset of parameters are used to cluster the repayments via the estimation process, while the other parameters are learned globally across all repayments. We compare our approach with three other baselines on a real-world loan repayment data set. We use an exogenous variable to validate and benchmark the clusters. We conclude our study with the observation that the ability to cluster on selective parameters, in conjunction with the structural construct of HMMs, enables the discovery of substantially more meaningful business insights than the baselines.