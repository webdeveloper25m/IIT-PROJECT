---
title: "A New Measure of Modularity in Hypergraphs: Theoretical Insights and Implications for Effective Clustering"
date: 2019-09-20
authors: ["Tarun Kumar", "Sankaran Vaidyanathan", "Harini Ananthapadmanabhan", "Srinivasan Parthasarathy", "B Ravindran"]
tags: ["machine learning", "social and information networks"]
doi: "https://doi.org/10.1007/978-3-030-36687-2_24"
publishedon: "International Conference on Complex Networks and Their Applications"
image: "A-New-Measure-of-Modularity-in-Hypergraph.webp"
dimension: pub.1122910709
draft: false
---
Many real-world systems consist of entities that exhibit complex group interactions rather than simple pairwise relationships; such multi-way relations are more suitably modeled using hypergraphs. In this work, we generalize the framework of modularity maximization, commonly used for community detection on graphs, for the hypergraph clustering problem. We introduce a hypergraph null model that can be shown to correspond exactly to the configuration model for undirected graphs. We then derive an adjacency matrix reduction that preserves the hypergraph node degree sequence, for use with this null model. The resultant modularity function can be maximized using the Louvain method, a popular fast algorithm known to work well in practice for graphs. We additionally propose an iterative refinement over this clustering that exploits higher-order information within the hypergraph, seeking to encourage balanced hyperedge cuts. We demonstrate the efficacy of our methods on several real-world dataset