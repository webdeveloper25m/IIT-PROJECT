---
title: "Multi-label collective classification in multi-attribute multi-relational network data"
date: 2014-08-22
authors: ["Priyesh Vijayan", "Shivashankar Subramanian", "B Ravindran"]
tags: ["correlation", "twitter", "motion pictures", "data models", "vectors", "data mining"]
doi: "https://doi.org/10.1109/ASONAM.2014.6921634"
publishedon: "Advances in Social Networks Analysis and Mining"
image: "Multi-label-collective-classification-in-multi-attribute.png"
altmetric: 
dimension:
pubmed: 
draft: false
---
Classical machine learning techniques assume the data to be i.i.d., but the real world data is inherently relational and can generally be represented using graphs or some variants of a graph representation. The importance of modeling relational data is evident from its increasing presence in many domains: Telecom networks, WWW, social networks, organizational networks, images, protein sequences, etc. This field has recently been receiving a lot of attention in various communities under different themes depending on the problem addressed and the nature of solution proposed. Collective classification is one such popular approach which involves the use of a local classifier that embeds the node's own attributes and neighbors' information in a feature vector, and classifies the nodes in an iterative procedure. Despite the increasing popularity, there is not much attention paid towards datasets with multiple attributes and multi-relational (MAMR) networks under multi-label scenarios. In MAMR data, nodes can be represented using multiple types of attributes (attribute views) and there are multiple link types between the nodes. For example, in Twitter, users can be represented using their tweets, urls shared, hashtags and list memberships. And different Twitter users can be connected using follower, followed by and re-tweet links. Secondly, in many networks, nodes are associated with more than one label. For instance, Twitter users can be tagged with one or more labels from a set L, where L contains various movie genres that a user might like. Motivated by this, we propose a learning technique for multi-label collective classification using multiple attribute views on multi-relational network data which captures complex label correlations within and across attribute/relationship types. We empirically evaluate our proposed approach on Twitter and MovieLens datasets, and we show that it performs better than the state-of-art approaches