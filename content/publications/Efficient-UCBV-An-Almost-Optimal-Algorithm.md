---
title: "Efficient-UCBV: An Almost Optimal Algorithm using Variance Estimates"
date: 2018-11-20
authors: ["Subhojyoti Mukherjee", "KP Naveen", "Nandan Sudarsanam", "B Ravindran"]
tags: ["UCB algorithm", "multi-armed bandit", "variant estimates"] 
doi: "https://arxiv.org/abs/1711.03591"
publishedon: "Thirty-Second AAAI Conference on Artificial Intelligence"
image: "Efficient-UCBV-An-Almost-Optimal-Algorithm.jpg"
altmetric: 
draft: false
---
We propose a novel variant of the UCB algorithm (referred to as Efficient-UCB-Variance (EUCBV)) for minimizing cumulative regret in the stochastic multi-armed bandit (MAB) setting. EUCBV incorporates the arm elimination strategy proposed in UCB-Improved \citep{auer2010ucb}, while taking into account the variance estimates to compute the arms' confidence bounds, similar to UCBV \citep{audibert2009exploration}. Through a theoretical analysis we establish that EUCBV incurs a \emph{gap-dependent} regret bound of {\scriptsize O(Kσ2maxlog(TΔ2/K)Δ)} after T trials, where Δ is the minimal gap between optimal and sub-optimal arms; the above bound is an improvement over that of existing state-of-the-art UCB algorithms (such as UCB1, UCB-Improved, UCBV, MOSS). Further, EUCBV incurs a \emph{gap-independent} regret bound of {\scriptsize O(KT−−−√)} which is an improvement over that of UCB1, UCBV and UCB-Improved, while being comparable with that of MOSS and OCUCB. Through an extensive numerical study we show that EUCBV significantly outperforms the popular UCB variants (like MOSS, OCUCB, etc.) as well as Thompson sampling and Bayes-UCB algorithms.