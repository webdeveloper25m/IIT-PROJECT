---
title: "Training a deep learning architecture for vehicle detection using limited heterogeneous traffic data"
date: 2018-11-30
authors: ["Deepak Mittal", "Avinash Reddy", "Gitakrishnan Ramadurai", "Kaushik Mitra", "B Ravindran"]
tags: ["deep learning", "data augmentation"] 
doi: "https://doi.org/10.1109/COMSNETS.2018.8328279"
publishedon: "Communication Systems & Networks"
image: "Training-a-deep-learning-architecture.jpg"
altmetric: 
dimension: pub.1101908727
draft: false
---
Video image processing of traffic camera feeds is useful for counting and classifying vehicles, estimating queue length, traffic speed and also for tracking individual vehicles. Unlike homogeneous traffic, heterogeneous traffic includes multiple vehicle types that do not follow lane discipline. Vehicle detection is especially challenging when vehicles are occluded which is common in heterogeneous traffic. Recently Deep Learning has shown remarkable promise in solving many computer vision tasks such as object recognition, detection, and tracking. However, training deep learning architectures require huge labeled datasets which are time-consuming and expensive to acquire. We circumvent this problem by data augmentation. By properly augmenting an existing large general (non-traffic) dataset with a small low-resolution heterogeneous traffic dataset (that we collected), we obtain state-of-the-art vehicle detection performance. To the best of our knowledge the collected dataset, named IITM-HeTra, is the first publicly available labeled dataset of heterogeneous traffic.