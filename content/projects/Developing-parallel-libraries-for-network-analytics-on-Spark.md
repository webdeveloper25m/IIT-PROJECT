---
title: "Developing Parallel Libraries for Network Analytics on Spark"
date: 2020-07-24T16:21:49+05:30
tags: ["network", "graph", "big data"]
categories: "projects"
authors: ["B Ravindran", "Rupesh Nasre"]
draft: false
image: "developing-parallel-libraries-for-network-analysis-on-spark.jpg"
---



One of the common theme underlying much of the work in the group is that of network analytics. In diverse areas such as transportation and systems biology the data is typically associated with a network of interacting entities. Analyzing the effects on a node in isolation is often not fructuous and we need to look at the network of entities as a whole. This leads to additional challenges in map-reduce style parallelism. We look to leverage the availability of several graph abstractions on Spark, such as Graphx and pregel, in order to develop efficient libraries for several common and specialized network related tasks. These libraries will be available to the campus community at large and would be deployed on our compute cluster.


