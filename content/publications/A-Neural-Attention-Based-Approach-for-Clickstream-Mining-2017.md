---
title: "A Neural Attention Based Approach for Clickstream Mining"
date: 2017-11-28
authors: ["T. N. Chandramohan", "B Ravindran"]
tags: ["Deep learning, Neural network, Machine learning"]
doi: "https://doi.org/10.1145/3152494.3152505"
publishedon: "In the proceedings of the 26th International Conference on Artificial Neural Networks"
image: "A-Neural-Attention-Based-Approach-for-Clickstream-Mining.png"
altmetric: 
dimension: 
pubmed: 
draft: false
---
E-commerce has seen tremendous growth over the past few years, so much so that only those companies which analyze browsing behaviour of users, can hope to survive the stiff competition in market. Analyzing customer behaviour helps in modeling and recognizing purchase intent which is vital to e-commerce for providing improved personalization and better ranking of search results. In this work, we make use of user clickstreams to model browsing behaviour of users. But clickstreams are known to be noisy and hence generating features from clickstreams and using them in one go for building a predictive model may not always capture the purchase/intent characteristics. There are multiple aspects within clickstreams which are to be considered such as the sequence (path) and temporal behaviour. Hence we model clickstreams as having multiple views, each view, concentrating on an aspect or a component of clickstream. In this work, we develop a Multi-View learning (MVL) framework that predicts whether users would make a purchase or not by analyzing their clickstreams. Recent advances in deep learning allow us to build neural networks that are able to extract complex latent features from the data with minimal human intervention. Separate models known as experts are trained on each view. The experts are then combined using an Expert-Attention (EA) network, where the attention part of the network tries to learn when to attend to which view of the data. Multiple variants have been proposed based on how EA network is trained. Yet another challenge is the extreme class imbalance present in the data since only a small fraction of clickstreams correspond to buyers. We propose a well informed undersampling strategy using autoencoders. This simple undersampling technique ensured that the model trained was not biased to non-buyers and resulted in much improved f-scores. Experimental results show that using EA networks, there is an improvement of 13% over single view methods. Moreover, it was also noticed that MVL using EA network performs better than conventional MVL methods such as Multiple Kernel Learning.