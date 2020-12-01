---
title: "Learning to repeat: Fine grained action repetition for deep reinforcement learning"
date: 2017-11-16
authors: ["Sahil Sharma", "Aravind S Lakshminarayanan", "B Ravindran"]
tags: ["Reinforcement learning, Feedback, Deep learning"]
doi: ""
publishedon: "ICLR "
image: "Learning-to-repeat-Fine-grained-action-repetition.png"
altmetric: 
dimension: 
pubmed: 
draft: false
---
Reinforcement Learning algorithms can learn complex behavioral patterns for sequential decision making tasks wherein an agent interacts with an environment and acquires feedback in the form of rewards sampled from it. Traditionally, such algorithms make decisions, i.e., select actions to execute, at every single time step of the agent-environment interactions. In this paper, we propose a novel framework, Fine Grained Action Repetition (FiGAR), which enables the agent to decide the action as well as the time scale of repeating it. FiGAR can be used for improving any Deep Reinforcement Learning algorithm which maintains an explicit policy estimate by enabling temporal abstractions in the action space. We empirically demonstrate the efficacy of our framework by showing performance improvements on top of three policy search algorithms in different domains: Asynchronous Advantage Actor Critic in the Atari 2600 domain, Trust Region Policy Optimization in Mujoco domain and Deep Deterministic Policy Gradients in the TORCS car racing domain.