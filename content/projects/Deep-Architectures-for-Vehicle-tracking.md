---
title: "Deep Architectures for Vehicle Tracking"
date: 2020-07-24T16:27:40+05:30
tags: ["deep learning", "attention mechanism", "segmentation"]
categories: "projects"
authors: ["B Ravindran", "Gitakrishnan Ramadurai", "Kaushik Mitra"]
draft: false
image: "deep-architecture-for-vehicle-tracking.jpg"
---


The primary problem we will explore is that of semantic segmentation of images and videos using deep learning and attention models, with the aim of doing motion prediction.Use of attention has several advantages - it reduces the computation overhead both during training and testing; it reduced the number of parameters required to predict the output for each input so that learning can happen with fewer samples; it is a biologically and cognitively appealing technique. Attention techniques have been deployed widely with architectures such as CNNs, LSTMs, and memory networks. But this has been largely in the domain of images and text.In this project, we explore the use of attention in videos and we will look for the following from the proposed architecture 

--Meaningful semantic segmentation of video frames. The crucial parts of the frame that are essential for tracking activity across frames should be the focus of the approach.


--Accurate motion prediction in real scene videos over short horizons. Again, the prediction should focus on objects of interest, and not necessarily on predicting the background. The key challenge is to maintain the definition of the objects across predicted frames. Attention will play a crucial role here.


--Efficient computation, first engendered by the attention mechanism, and second by further optimization of the implementation based on the actual computation performed. 
