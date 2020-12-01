---
title: "RRTPI: Policy iteration on continuous domains using rapidly-exploring random trees"
date: 2014-05-03
authors: ["Manimaran Sivasamy Sivamurugan", "B Ravindran"]
tags: ["approximation methods", "measurement", "heuristic algorithms", "trajectory", "robots", "approximation algorithms"]
doi: "https://doi.org/10.1109/ICRA.2014.6907494"
publishedon: "Robotics and Automation"
image: "RRTPI-Policy-iteration-on-continuous-domains.png"
altmetric: 
dimension:
pubmed: 
draft: false
---
Path planning in continuous spaces has been a central problem in robotics. In the case of systems with complex dynamics, the performance of sampling based techniques relies on identifying a good approximation to the cost-to-go distance metric. We propose a technique that uses reinforcement learning to learn this distance metric on the fly from samples and combine it with existing sampling based planners to produce near optimal solutions. The resulting algorithm - RRTPI can solve problems with complex dynamics in a sample efficient manner while preserving asymptotic guarantees. We provide experimental evaluation of this technique on domains with underactuated and underpowered dynamics