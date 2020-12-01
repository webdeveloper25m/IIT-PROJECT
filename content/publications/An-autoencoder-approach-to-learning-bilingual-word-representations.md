---
title: "An autoencoder approach to learning bilingual word representations"
date: 2014-12-24
authors: ["Sarath Chandar AP", "Stanislas Lauly", "Hugo Larochelle", "Mitesh Khapra", "Balaraman Ravindran", "Vikas C Raykar", "Amrita Saha"]
tags: ["computation and language", "machine learning"]
doi: ""
publishedon: "Advances in Neural Information Processing Systems"
image: "An-autoencoder-approach-to-learning-bilingual-word-representations.png"
altmetric: 
dimension:
pubmed: 
draft: false
---
Cross-language learning allows us to use training data from one language to build models for a different language. Many approaches to bilingual learning require that we have word-level alignment of sentences from parallel corpora. In this work we explore the use of autoencoder-based methods for cross-language learning of vectorial word representations that are aligned between two languages, while not relying on word-level alignments. We show that by simply learning to reconstruct the bag-of-words representations of aligned sentences, within and between languages, we can in fact learn high-quality representations and do without word alignments. Since training autoencoders on word observations presents certain computational issues, we propose and compare different variations adapted to this setting. We also propose an explicit correlation maximizing regularizer that leads to significant improvement in the performance. We empirically investigate the success of our approach on the problem of cross-language test classification, where a classifier trained on a given language (e.g., English) must learn to generalize to a different language (e.g., German). These experiments demonstrate that our approaches are competitive with the state-of-the-art, achieving up to 10-14 percentage point improvements over the best reported results on this task