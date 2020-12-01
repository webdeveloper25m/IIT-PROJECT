---
title: "Tracking and stabilization of mechanical systems using reinforcement learning"
date: 2018-11-05
authors: ["S Bhuvaneswari", "Ramkrishna Pasumarthy", "B Ravindran", "Arun D Mahindrakar"]
tags: ["reinforced learning", "IDA-PBC", "PDE"] 
doi: "https://doi.org/10.1109/INDIANCC.2018.8307979"
publishedon: "Indian Control Conference"
image: "Tracking-and-stabilization-of-mechanical-systems.jpg"
altmetric: 
draft: false
---
The Interconnection and Damping Assignment Passivity Based Control (IDA-PBC) is a well-known method for control of complex physical systems in the port-Hamiltonian framework. Improvising on top of IDA-PBC which just focuses on stability, the memristive port-Hamiltonian control addresses performance concerns in the control task by providing a state-modulated damping term to IDA-PBC via a memristor element. The control way of implementing the memristive IDA-PBC first requires solving a set of Partial Differential Equations (PDEs) and then choosing a suitable memristance function for the system, out of which the former is a challenging math problem and the latter is a design problem. This paper employs reinforcement learning to learn the memristive IDA-PBC law and in the process, avoids the challenging task of solving PDEs, automates the design of the memristance function and also respects some physical system-level constraints which are not accounted for by the control way of solving IDA-PBC.