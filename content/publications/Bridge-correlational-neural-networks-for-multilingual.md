---
title: "Bridge correlational neural networks for multilingual multimodal representation learning"
date: 2016-02-12
authors: ["Janarthanan Rajendran", "Mitesh M Khapra", "Sarath Chandar", "B Ravindran"]
tags: ["neural networks", "representation learning", "document classification"]
doi: "http://dx.doi.org/10.18653/v1/N16-1021"
publishedon: "Neural Computation"
image: "Bridge-correlational-neural-networks-for-multilingual.png"
altmetric: 
dimension: pub.1099150716
pubmed: 
draft: false
---
Recently there has been a lot of interest in learning common representations for multiple views of data. Typically, such common representations are learned using a parallel corpus between the two views (say, 1M images and their English captions). In this work, we address a real-world scenario where no direct parallel data is available between two views of interest (say, V1 and V2) but parallel data is available between each of these views and a pivot view (V3). We propose a model for learning a common representation for V1, V2 and V3 using only the parallel data available between V1V3 and V2V3. The proposed model is generic and even works when there are n views of interest and only one pivot view which acts as a bridge between them. There are two specific downstream applications that we focus on (i) transfer learning between languages L1,L2,...,Ln using a pivot language L and (ii) cross modal access between images and a language L1 using a pivot language L2. Our model achieves state-of-the-art performance in multilingual document classification on the publicly available multilingual TED corpus and promising results in multilingual multimodal retrieval on a new dataset created and released as a part of this work.