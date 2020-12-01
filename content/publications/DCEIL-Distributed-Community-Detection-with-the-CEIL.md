---
title: "DCEIL: Distributed Community Detection with the CEIL Score"
date: 2017-12-10
authors: ["Akash Jain", "Rupesh Nasre", "B Ravindran"]
tags: ["Social networks, Graph networks, Complex networks"]
doi: "10.1109/HPCC-SmartCity-DSS.2017.19"
publishedon: "In the Proceedings of the Nineteenth IEEE International Conference on High Performance Computing and Communication HPCC 2017"
image: "DCEIL-Distributed-Community-Detection-with-the-CEIL.png"
altmetric: 
dimension: 
pubmed: 
draft: false
---
Community detection in complex networks has a wide range of applications such as detection of cyber-communities in social networks, recommendations based on the interest group, and estimating hidden features in a social network. In distributed frameworks, the primary focus has been scalability. However, the accuracy of the algorithm's output is also critical. We propose the first distributed community detection algorithm based on the state-of-the-art CEIL scoring function. Our algorithm, named DCEIL, is fast, scalable and maintains the quality of communities. DCEIL outperforms the existing state-of-the-art distributed Louvain algorithm by 180% on an average in Normalized Mutual Information (NMI) Index and 6.61% on an average in Jaccard Index metrics. DCEIL completes execution for 1 billion edges within 112 minutes and outperforms state-of-the-art distributed Louvain algorithm by 4.3 ×. DCEIL critically exploits three novel heuristics which address the existing issues with distributed community detection algorithms that have the hierarchical structure of CEIL or Louvain methods. Further, our proposed heuristics are generic as well as efficient, and we illustrate their efficacy by enhancing the accuracy of distributed Louvain algorithm by 22.91% on an average in Jaccard Index, and the average execution time by 1.68 × over popular datasets.