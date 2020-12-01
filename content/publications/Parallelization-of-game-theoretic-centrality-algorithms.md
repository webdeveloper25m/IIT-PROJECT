---
title: "Parallelization of game theoretic centrality algorithms"
date: 2015-08-12
authors: ["M Vishnu Sankar", "B Ravindran"]
tags: ["centrality", "game theory", "map-reduce", "Hadoop"]
doi: "https://link.springer.com/article/10.1007%2Fs12046-015-0425-z"
publishedon: "Sadhana"
image: "Parallelization-of-game-theoretic-centrality-algorithms.PNG"
altmetric: 
dimension: 
pubmed: 
draft: false
---
Communication has become a lot easier with the advent of easy and cheap means of reaching people across the globe. This has allowed the development of large networked communities and, with the technology available to track them, has opened up the study of social networks at unprecedented scales. This has necessitated the scaling up of various network analysis algorithms that have been proposed earlier in the literature. While some algorithms can be readily adapted to large networks, in many cases the adaptation is not trivial. In this work, we explore the scaling up of a class of node centrality algorithms based on cooperative game theory. These were proposed earlier as an efficient alternatives to traditional measure of information diffusion centrality. We present here distributed versions of these algorithms in a MapReduce framework, currently the most popular distributed computing paradigm. We empirically demonstrate the scaling behavior of our algorithm on very large synthetic networks thereby establishing the utility of these methods in settings such as online social networks.