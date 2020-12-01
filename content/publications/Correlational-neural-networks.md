---
title: "Correlational neural networks"
date: 2016-09-18
authors: ["Sarath Chandar", "Mitesh M Khapra", "Hugo Larochelle", "B Ravindran"]
tags: ["neural networks", "representation learning", "deep learning"]
doi: "https://doi.org/10.1162/neco_a_00801"
publishedon: "Neural computation"
image: "Correlational-neural-networks.jpeg"
altmetric: 81225114
dimension: pub.1035584096
pubmed: https://pubmed.ncbi.nlm.nih.gov/26654210/
draft: false
---
Common representation learning (CRL), wherein different descriptions (or views) of the data are embedded in a common subspace, has been receiving a lot of attention recently. Two popular paradigms here are canonical correlation analysis (CCA)–based approaches and autoencoder (AE)–based approaches. CCA-based approaches learn a joint representation by maximizing correlation of the views when projected to the common subspace. AE-based methods learn a common representation by minimizing the error of reconstructing the two views. Each of these approaches has its own advantages and disadvantages. For example, while CCA-based approaches outperform AE-based approaches for the task of transfer learning, they are not as scalable as the latter. In this work, we propose an AE-based approach, correlational neural network (CorrNet), that explicitly maximizes correlation among the views when projected to the common subspace. Through a series of experiments, we demonstrate that the proposed CorrNet is better than AE and CCA with respect to its ability to learn correlated common representations. We employ CorrNet for several cross-language tasks and show that the representations learned using it perform better than the ones learned using other state-of-the-art approaches.