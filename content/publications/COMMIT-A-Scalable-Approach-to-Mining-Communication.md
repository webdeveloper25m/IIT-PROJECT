---
title: "Commit: A scalable approach to mining communication motifs from dynamic networks"
date: 2015-05-28
authors: ["Saket Gurukar", "Sayan Ranu", "B Ravindran"]
tags: ["subgraph", "sequences", "scalability"]
doi: "https://doi.org/10.1145/2723372.2737791"
publishedon: "Proceedings of the 2015 ACM SIGMOD International Conference on Management of Data"
image: "COMMIT-A-Scalable-Approach-to-Mining-Communication.PNG"
altmetric: 
dimension: pub.1024661545
pubmed: 
draft: false
---
A fundamental problem in behavioral analysis of human interactions is to understand how communications unfold. In this paper, we study this problem by mining Communication motifs from dynamic interaction networks. A communication motif is a recurring subgraph that has a similar sequence of information flow. Mining communication motifs requires us to explore the exponential subgraph search space where existing techniques fail to scale. To tackle this scalability bottleneck, we develop a technique called COMMIT. COMMIT converts a dynamic graph into a database of sequences. Through careful analysis in the sequence space, only a small portion of the exponential search space is accessed to identify regions embedding communication motifs. Extensive experiments on three different social networks show COMMIT to be up to two orders of magnitude faster than baseline techniques. Furthermore, qualitative analysis demonstrate communication motifs to be effective in characterizing the recurring patterns of interactions while also revealing the role that the underlying social network plays in shaping human behavior