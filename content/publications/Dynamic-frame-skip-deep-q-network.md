---
title: "Dynamic frame skip deep q network"
date: 2016-07-22
authors: ["Aravind S Lakshminarayanan", "Sahil Sharma", "B Ravindran"]
tags: ["reinforcement learning", "arcade learning environment", "frame skip rate"]
doi: "https://arxiv.org/abs/1605.05365"
publishedon: "arXiv preprint arXiv:1605.05365"
image: "Dynamic-frame-skip-deep-q-network.png"
altmetric: 
dimension: 
pubmed: 
draft: false
---
Deep Reinforcement Learning methods have achieved state of the art performance in learning control policies for the games in the Atari 2600 domain. One of the important parameters in the Arcade Learning Environment (ALE) is the frame skip rate. It decides the granularity at which agents can control game play. A frame skip value of k allows the agent to repeat a selected action k number of times. The current state of the art architectures like Deep Q-Network (DQN) and Dueling Network Architectures (DuDQN) consist of a framework with a static frame skip rate, where the action output from the network is repeated for a fixed number of frames regardless of the current state. In this paper, we propose a new architecture, Dynamic Frame skip Deep Q-Network (DFDQN) which makes the frame skip rate a dynamic learnable parameter. This allows us to choose the number of times an action is to be repeated based on the current state. We show empirically that such a setting improves the performance on relatively harder games like Seaquest.