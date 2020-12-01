---
title: "Measuring network centrality using hypergraphs"
date: 2015-06-12
authors: ["Sanjukta Roy", "B Ravindran"]
tags: ["Hypergraph", "Shapley value", "Centrality"]
doi: "https://doi.org/10.1145/2732587.2732595"
publishedon: "Proceedings of the Second ACM IKDD Conference on Data Sciences"
image: "Measuring-Network-Centrality-Using-Hypergraphs.png"
altmetric: 
dimension: pub.1005855273
pubmed: 
draft: false
---
Networks abstracted as graph lose some information related to the super-dyadic relation among the nodes. We find natural occurrence of hyperedges in co-authorship, co-citation, social networks, e-mail networks, weblog networks etc. Treating these networks as hypergraph preserves the super-dyadic relations. But the primal graph or Gaifmann graph associated with hypergraphs converts each hyperedge to a clique losing again the n-ary relationship among nodes. We aim to measure Shapley Value based centrality on these networks without losing the super-dyadic information. For this purpose, we use co-operative games on single graph representation of a hypergraph such that Shapley value can be computed efficiently[1]. We propose several methods to generate simpler graphs from hypergraphs and study the efficacy of the centrality scores computed on these constructions.