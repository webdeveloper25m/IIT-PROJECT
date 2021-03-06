---
title: "Scalable Positional Analysis for Studying Evolution of Nodes in Networks"
date: 2014-02-14
authors: ["Pratik Vinay Gupte", "B Ravindran"]
tags: ["social and information networks", "physics and society"]
doi: ""
publishedon: "arXiv preprint arXiv:1402.3797"
image: "Scalable-Positional-Analysis-for-Studying-Evolution.png"
altmetric: 
dimension:
pubmed: 
draft: false
---
In social network analysis, the fundamental idea behind the notion of position is to discover actors who have similar structural signatures. Positional analysis of social networks involves partitioning the actors into disjoint sets using a notion of equivalence which captures the structure of relationships among actors. Classical approaches to Positional Analysis, such as Regular equivalence and Equitable Partitions, are too strict in grouping actors and often lead to trivial partitioning of actors in real world networks. An Epsilon Equitable Partition (EEP) of a graph, which is similar in spirit to Stochastic Blockmodels, is a useful relaxation to the notion of structural equivalence which results in meaningful partitioning of actors. In this paper we propose and implement a new scalable distributed algorithm based on MapReduce methodology to find EEP of a graph. Empirical studies on random power-law graphs show that our algorithm is highly scalable for sparse graphs, thereby giving us the ability to study positional analysis on very large scale networks. We also present the results of our algorithm on time evolving snapshots of the facebook and flickr social graphs. Results show the importance of positional analysis on large dynamic networks