---
title: "On Knowledge Distillation From Complex Networks"
date: 2019-12-10
authors: ["Siddhartha Arora", "Mitesh M. Khapra", "Harish G. Ramaswamy"]
tags: ["response prediction","SAM-mul Train","SAM-add Train","BIDAF","QANET"]
doi: "https://doi.org/10.18653/v1%2FN19-1382"
publishedon: "Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1"
image: "On-Knowledge-distillation-from-complex-networks.png"
dimension: pub.1123987522
draft: false
---
Recent advances in Question Answering have lead to the development of very complex models which compute rich representations for query and documents by capturing all pairwise interactions between query and document words. This makes these models expensive in space and time, and in practice one has to restrict the length of the documents that can be fed to these models. Such models have also been recently employed for the task of predicting dialog responses from available background documents (e.g., Holl-E dataset). However, here the documents are longer, thereby rendering these complex models infeasible except in select restricted settings. In order to overcome this, we use standard simple models which do not capture all pairwise interactions, but learn to emulate certain characteristics of a complex teacher network. Specifically, we first investigate the conicity of representations learned by a complex model and observe that it is significantly lower than that of simpler models. Based on this insight, we modify the simple architecture to mimic this characteristic. We go further by using knowledge distillation approaches, where the simple model acts as a student and learns to match the output from the complex teacher network. We experiment with the Holl-E dialog data set and show that by mimicking characteristics and matching outputs from a teacher, even a simple network can give improved performance