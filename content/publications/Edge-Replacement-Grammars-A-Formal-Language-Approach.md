---
title: "Edge Replacement Grammars: A Formal Language Approach for Generating Graphs"
date: 2019-05-20
authors: ["S. Chandar R. Reddy", "B Ravindran"]
tags: ["social and information-networks", "databases"]
doi: "https://doi.org/10.1137/1.9781611975673.40"
publishedon: "To appear in the proceedings of the SIAM International Conference on Data Mining"
image: "Edge-Replacement-Grammars-A-Formal-Language-Approach.png"
draft: false
---
Graphs are increasingly becoming ubiquitous as models for structured data. A generative model that closely mimics the structural properties of a given set of graphs has utility in a variety of domains. Much of the existing work require that a large number of parameters, in fact exponential in size of the graphs, be estimated from the data. We take a slightly different approach to this problem, leveraging the extensive prior work in the formal graph grammar literature. In this paper, we propose a graph generation model based on Probabilistic Edge Replacement Grammars (PERGs). We propose a variant of PERG called Restricted PERG (RPERG), which is analogous to PCFGs in string grammar literature. With this restriction, we are able to derive a learning algorithm for estimating the parameters of the grammar from graph data. We empirically demonstrate on real life datasets that RPERGs outperform existing methods for graph generation. We improve on the performance of the state-of-the-art Hyperedge Replacement Grammar based graph generative model. Despite being a context free grammar, the proposed model is able to capture many of the structural properties of real networks, such as degree distributions, power law and spectral characteristics