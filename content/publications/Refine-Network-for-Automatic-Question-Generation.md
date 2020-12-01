---
title: "Let's Ask Again: Refine Network for Automatic Question Generation"
date: 2019-10-20
authors: ["Preksha Nema", "Akash Kumar Mohankumar", "Mitesh M. Khapra", "Balaji Vasan Srinivasan", "B Ravindran"]
tags: ["computation and language", "artificial intelligence"]
doi: "https://doi.org/10.18653/v1%2FD19-1326"
publishedon: "arXiv preprint arXiv:1909.05355"
image: "Refine-Network-for-Automatic-Question-Generation.png"
draft: false
---
In this work, we focus on the task of Automatic Question Generation (AQG) where given a passage and an answer the task is to generate the corresponding question. It is desired that the generated question should be (i) grammatically correct (ii) answerable from the passage and (iii) specific to the given answer. An analysis of existing AQG models shows that they produce questions which do not adhere to one or more of {the above-mentioned qualities}. In particular, the generated questions look like an incomplete draft of the desired question with a clear scope for refinement. {To alleviate this shortcoming}, we propose a method which tries to mimic the human process of generating questions by first creating an initial draft and then refining it. More specifically, we propose Refine Network (RefNet) which contains two decoders. The second decoder uses a dual attention network which pays attention to both (i) the original passage and (ii) the question (initial draft) generated by the first decoder. In effect, it refines the question generated by the first decoder, thereby making it more correct and complete. We evaluate RefNet on three datasets, \textit{viz.}, SQuAD, HOTPOT-QA, and DROP, and show that it outperforms existing state-of-the-art methods by 7-16\% on all of these datasets. Lastly, we show that we can improve the quality of the second decoder on specific metrics, such as, fluency and answerability by explicitly rewarding revisions that improve on the corresponding metric during training