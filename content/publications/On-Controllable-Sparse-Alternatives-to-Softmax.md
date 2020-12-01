---
title: "On Controllable Sparse Alternatives to Softmax"
date: 2018-05-16
authors: ["Anirban Laha", "Saneem Ahmed Chemmengath", "Priyanka Agrawal", "Mitesh Khapra", "Karthik Sankaranarayanan", "Harish G Ramaswamy"]
tags: ["machine learning", "sparsegen-lin", "sparsehourglass"]
doi: "https://arxiv.org/abs/1810.11975"
publishedon: "Advances in Neural Information Processing Systems  "
image: "On-Controllable-Sparse-Alternatives-to-Softmax.jpg"
altmetric: 
dimension: 
pubmed:
draft: false
---

Converting an n-dimensional vector to a probability distribution over n objects is a commonly used component in many machine learning tasks like multiclass classification, multilabel classification, attention mechanisms etc. For this, several probability mapping functions have been proposed and employed in literature such as softmax, sum-normalization, spherical softmax, and sparsemax, but there is very little understanding in terms how they relate with each other. Further, none of the above formulations offer an explicit control over the degree of sparsity. To address this, we develop a unified framework that encompasses all these formulations as special cases. This framework ensures simple closed-form solutions and existence of sub-gradients suitable for learning via backpropagation. Within this framework, we propose two novel sparse formulations, sparsegen-lin and sparsehourglass, that seek to provide a control over the degree of desired sparsity. We further develop novel convex loss functions that help induce the behavior of aforementioned formulations in the multilabel classification setting, showing improved performance. We also demonstrate empirically that the proposed formulations, when used to compute attention weights, achieve better or comparable performance on standard seq2seq tasks like neural machine translation and abstractive summarization.