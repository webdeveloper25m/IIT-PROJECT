---
title: "Towards a Better Metric for Evaluating Question Generation Systems"
date: 2018-04-02
authors: ["Preksha Nema", "Mitesh M Khapra"]
tags: ["automatic question generation", "automatic evaluation"]
doi: "https://arxiv.org/abs/1808.10192"
publishedon: "arXiv preprint arXiv:1808.10192  "
image: "Towards-a-Better-Metric-for-Evaluating-Question-Generation-Systems.jpg"
altmetric: 
dimension: 
pubmed:
draft: false
---

There has always been criticism for using n-gram based similarity metrics, such as BLEU, NIST, etc, for evaluating the performance of NLG systems. However, these metrics continue to remain popular and are recently being used for evaluating the performance of systems which automatically generate questions from documents, knowledge graphs, images, etc. Given the rising interest in such automatic question generation (AQG) systems, it is important to objectively examine whether these metrics are suitable for this task. In particular, it is important to verify whether such metrics used for evaluating AQG systems focus on answerability of the generated question by preferring questions which contain all relevant information such as question type (Wh-types), entities, relations, etc. In this work, we show that current automatic evaluation metrics based on n-gram similarity do not always correlate well with human judgments about answerability of a question. To alleviate this problem and as a first step towards better evaluation metrics for AQG, we introduce a scoring function to capture answerability and show that when this scoring function is integrated with existing metrics, they correlate significantly better with human judgments. The scripts and data developed as a part of this work are made publicly available at this https URL