---
title: "Ablation-CAM: Visual Explanations for Deep Convolutional Network via Gradient-free Localization"
date: 2020-05-02
authors: ["Harish G. Ramaswamy", "Saurabh Desai"]
tags: ["networks", "machine learning"]
doi: "https://doi.org/10.1109/WACV45572.2020.9093360"
publishedon: "The IEEE Winter Conference on Applications of Computer Vision"
image: "Ablation-CAM-Visual-Explanations-for-Deep-Convolutional-Network.png"
draft: false
---
In response to recent criticism of gradient-based visualization techniques, we propose a new methodology to generate visual explanations for deep Convolutional Neural Networks (CNN) - based models. Our approach Ablation-based Class Activation Mapping (Ablation CAM) uses ablation analysis to determine the importance (weights) of individual feature map units w.r.t. class. Further, this is used to produce a coarse localization map highlighting the important regions in the image for predicting the concept. Our objective and subjective evaluations show that this gradient-free approach works better than state-of-the-art Grad-CAM technique. Moreover, further experiments are carried out to show that Ablation-CAM is class discriminative as well as can be used to evaluate trust in a model.