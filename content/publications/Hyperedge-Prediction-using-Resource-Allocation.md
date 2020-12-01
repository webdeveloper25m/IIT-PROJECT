---
title: "HPRA: Hyperedge Prediction using Resource Allocation"
date: 2020-06-19
authors: ["Tarun Kumar", "K Darwin", "Srinivasan Parthasarathy", "B Ravindran"]
tags: ["machine learning", "networks"]
doi: "https://arxiv.org/abs/2006.11070v1"
publishedon: "arXiv preprint arXiv:2006.11070"
image: "HPRA-Hyperedge-Prediction-using-Resource-Allocation.png"
altmetric: 84449094
dimension: pub.1128724479
draft: false
---
Many real-world systems involve higher-order interactions and thus demand complex models such as hypergraphs. For instance, a research article could have multiple collaborating authors, and therefore the co-authorship network is best represented as a hypergraph. In this work, we focus on the problem of hyperedge prediction. This problem has immense applications in multiple domains, such as predicting new collaborations in social networks, discovering new chemical reactions in metabolic networks, etc. Despite having significant importance, the problem of hyperedge prediction hasn't received adequate attention, mainly because of its inherent complexity. In a graph with n nodes the number of potential edges is (n2), whereas in a hypergraph, the number of potential hyperedges is (2n). To avoid searching through such a huge space, current methods restrain the original problem in the following two ways. One class of algorithms assume the hypergraphs to be k-uniform. However, many real-world systems are not confined only to have interactions involving k components. Thus, these algorithms are not suitable for many real-world applications. The second class of algorithms requires a candidate set of hyperedges from which the potential hyperedges are chosen. In the absence of domain knowledge, the candidate set can have (2n) possible hyperedges, which makes this problem intractable. We propose HPRA - Hyperedge Prediction using Resource Allocation, the first of its kind algorithm, which overcomes these issues and predicts hyperedges of any cardinality without using any candidate hyperedge set. HPRA is a similarity-based method working on the principles of the resource allocation process. In addition to recovering missing hyperedges, we demonstrate that HPRA can predict future hyperedges in a wide range of hypergraphs.