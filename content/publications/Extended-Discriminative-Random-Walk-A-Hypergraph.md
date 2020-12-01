---
title: "Extended Discriminative Random Walk: A Hypergraph Approach to Multi-View Multi-Relational Transductive Learning."
date: 2015-04-17
authors: ["Sai Nageswar Satchidanand", "Harini Ananthapadmanaban", "B Ravindran"]
tags: ["hypergraphs", "class imbalance", "networks"]
doi: "https://dl.acm.org/doi/10.5555/2832747.2832778"
publishedon: "IJCAI"
image: "Extended-Discriminative-Random-Walk-A-Hypergraph.PNG"
altmetric: 
dimension:
pubmed: 
draft: false
---
Transductive inference on graphs has been garnering increasing attention due to the connected nature of many real-life data sources, such as online social media and biological data (protein-protein interaction network, gene networks, etc.). Typically relational information in the data is encoded as edges in a graph but often it is important to model multi-way interactions, such as in collaboration networks and reaction networks. In this work we model multiway relations as hypergraphs and extend the discriminative random walk (DRW) framework, originally proposed for transductive inference on single graphs, to the case of multiple hypergraphs. We use the extended DRW framework for inference on multi-view, multi-relational data in a natural way, by representing attribute descriptions of the data also as hypergraphs. We further exploit the structure of hypergraphs to modify the random walk operator to take into account class imbalance in the data. This work is among very few approaches to explicitly address class imbalance in the innetwork classification setting, using random walks. We compare our approach to methods proposed for inference on hypergraphs, and to methods proposed for multi-view data and show that empirically we achieve better performance. We also compare to methods specifically tailored for class-imbalanced data and show that our approach achieves comparable performance even on non-network data.