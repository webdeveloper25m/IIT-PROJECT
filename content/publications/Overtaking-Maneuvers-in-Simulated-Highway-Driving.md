---
title: "Overtaking Maneuvers in Simulated Highway Driving using Deep Reinforcement Learning"
date: 2018-04-10
authors: ["Meha Kaushik", "Vignesh Prasad", "K Madhava Krishna", "Balaraman Ravindran"]
tags: ["reinforced learning", "curriculum learning", "autonomous driving"]
doi: "https://doi.org/10.1109/IVS.2018.8500718"
publishedon: "2018 IEEE Intelligent Vehicles Symposium "
image: "Overtaking-Maneuvers-in-Simulated-Highway-Driving.jpg"
altmetric: 
dimension: pub.1107773859
pubmed:
draft: false
---

Most methods that attempt to tackle the problem of Autonomous Driving and overtaking usually try to either directly minimize an objective function or iteratively in a Reinforcement Learning like framework to generate motor actions given a set of inputs. We follow a similar trend but train the agent in a way similar to a curriculum learning approach where the agent is first given an easier problem to solve, followed by a harder problem. We use Deep Deterministic Policy Gradients to learn overtaking maneuvers for a car, in presence of multiple other cars, in a simulated highway scenario. The novelty of our approach lies in the training strategy used where we teach the agent to drive in a manner similar to the way humans learn to drive and the fact that our reward function uses only the raw sensor data at the current time step. This method, which resembles a curriculum learning approach is able to learn smooth maneuvers, largely collision free, wherein the agent overtakes all other cars, independent of the track and number of cars in the scene.