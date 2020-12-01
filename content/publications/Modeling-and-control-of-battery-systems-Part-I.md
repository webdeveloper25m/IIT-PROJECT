---
title: "Modeling and control of battery systems. Part I: Revisiting Butler–Volmer equations to model non-linear coupling of various capacity fade mechanisms"
date: 2018-06-30
authors: ["Resmi Suresh", "Raghunathan Rengaswamy"]
tags: ["multivariate systems", "state estimation", "non-linear coupling"]
doi: "https://doi.org/10.1016/j.compchemeng.2018.08.016"
publishedon: "Computers \\& Chemical Engineering"
image: "Modeling-and-control-of-battery-systems-Part-I.jpg"
altmetric: 
dimension: pub.1106319712
pubmed:
draft: false
---

Lithium-ion batteries, affected by various capacity fade mechanisms, require an efficient battery management system that can prolong battery lifetime by periodic diagnosis, subsequent management and control. The work presented in this two-part paper is an investigation and development of strategies for battery modeling and controller implementation, which are two of the essential components of any battery management system. In this first part, a generalized approach to incorporate non-linear coupling of various capacity fade mechanisms is proposed. Though there exist numerous models to capture effects of various capacity fade mechanisms, they fail to model non-linear coupling as they assume linear superposition of individual current densities (provided by individual Butler–Volmer equations). Considering battery as a system with multiple reactions (both desired and undesired reactions), rate equations can be written for the overall system. Re-deriving a single Butler–Volmer equation from this rate equation provided insights regarding the true nature of coupling between various reactions inside a battery. Incorporating various side reactions using this framework to a detailed ideal battery model would help in understanding the behavior of a battery with aging and this information can be useful to diagnose various problems in the battery. For demonstrating the implementation and usefulness of this approach, SEI layer formation and Li plating are incorporated to a detailed battery model in this article.