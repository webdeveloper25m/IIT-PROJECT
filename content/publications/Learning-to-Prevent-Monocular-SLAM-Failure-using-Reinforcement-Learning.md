---
title: "Learning to Prevent Monocular SLAM Failure using Reinforcement Learning"
date: 2018-04-27
authors: ["V Prasad", "B Ravindran", "K. M. Krishna", "N. Pareekutty", "S. Daga", "S. Singh", "K Yadav", "B. Bhowmick"]
tags: ["reinforced learning", "monocular SLAM"]
doi: "https://arxiv.org/abs/1607.07558"
publishedon: "To appear in the Proceedings of the Eleventh Indian Conference on Computer Vision, Graphics and Image Processing"
image: "Learning-to-Prevent-Monocular-SLAM-Failure-using-Reinforcement-Learning.jpg"
altmetric: 
dimension: 
pubmed:
draft: false
---

Monocular SLAM refers to using a single camera to estimate robot ego motion while building a map of the environment. While Monocular SLAM is a well studied problem, automating Monocular SLAM by integrating it with trajectory planning frameworks is particularly challenging. This paper presents a novel formulation based on Reinforcement Learning (RL) that generates fail safe trajectories wherein the SLAM generated outputs do not deviate largely from their true values. Quintessentially, the RL framework successfully learns the otherwise complex relation between perceptual inputs and motor actions and uses this knowledge to generate trajectories that do not cause failure of SLAM. We show systematically in simulations how the quality of the SLAM dramatically improves when trajectories are computed using RL. Our method scales effectively across Monocular SLAM frameworks in both simulation and in real world experiments with a mobile robot.