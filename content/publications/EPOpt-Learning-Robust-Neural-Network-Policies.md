---
title: "EPOpt: Learning Robust Neural Network Policies Using Model Ensembles"
date: 2016-08-16
authors: ["Aravind Rajeswaran", "Sarvjeet Ghotra", "Sergey Levine", "B Ravindran"]
tags: ["reinforcement learning", "robustness", "ensemble"]
doi: "https://arxiv.org/abs/1610.01283v4"
publishedon: "ICLR"
image: "EPOpt-Learning-Robust-Neural-Network-Policies.png"
altmetric: 
dimension: 
pubmed: 
draft: false
---
Sample complexity and safety are major challenges when learning policies with reinforcement learning for real-world tasks, especially when the policies are represented using rich function approximators like deep neural networks. Model-based methods where the real-world target domain is approximated using a simulated source domain provide an avenue to tackle the above challenges by augmenting real data with simulated data. However, discrepancies between the simulated source domain and the target domain pose a challenge for simulated training. We introduce the EPOpt algorithm, which uses an ensemble of simulated source domains and a form of adversarial training to learn policies that are robust and generalize to a broad range of possible target domains, including unmodeled effects. Further, the probability distribution over source domains in the ensemble can be adapted using data from target domain and approximate Bayesian methods, to progressively make it a better approximation. Thus, learning on a model ensemble, along with source domain adaptation, provides the benefit of both robustness and learning/adaptation.