---
title: "RAIL: Risk-Averse Imitation Learning"
date: 2018-12-01
authors: ["Anirban Santara", "Abhishek Naik", "B Ravindran", "Dipankar Das", "Dheevatsa Mudigere", "Sasikanth Avancha", "Bharat Kaul"]
tags: ["imitation learning", "risk-sensitive applications"] 
doi: "https://arxiv.org/abs/1707.06658"
publishedon: "Proceedings of the 17th International Conference on Autonomous Agents and MultiAgent Systems"
image: "RAIL-Risk-Averse-Imitation-Learning.jpg"
altmetric: 
dimension: pub.1101908727
draft: false
---
Imitation learning algorithms learn viable policies by imitating an expert's behavior when reward signals are not available. Generative Adversarial Imitation Learning (GAIL) is a state-of-the-art algorithm for learning policies when the expert's behavior is available as a fixed set of trajectories. We evaluate in terms of the expert's cost function and observe that the distribution of trajectory-costs is often more heavy-tailed for GAIL-agents than the expert at a number of benchmark continuous-control tasks. Thus, high-cost trajectories, corresponding to tail-end events of catastrophic failure, are more likely to be encountered by the GAIL-agents than the expert. This makes the reliability of GAIL-agents questionable when it comes to deployment in risk-sensitive applications like robotic surgery and autonomous driving. In this work, we aim to minimize the occurrence of tail-end events by minimizing tail risk within the GAIL framework. We quantify tail risk by the Conditional-Value-at-Risk (CVaR) of trajectories and develop the Risk-Averse Imitation Learning (RAIL) algorithm. We observe that the policies learned with RAIL show lower tail-end risk than those of vanilla GAIL. Thus the proposed RAIL algorithm appears as a potent alternative to GAIL for improved reliability in risk-sensitive applications.