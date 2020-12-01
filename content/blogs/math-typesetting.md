---
title: Math Typesetting
date: 2020-10-11
math: true
blogs_categories: ["Themes", "Syntax"]
authors: ["Author2"]
blogs_tags: ["Maths"]
image: "math.jpg"
draft: true
---

Mathematical notation can be enabled by using KaTeX javascript libary which enabled in this hugo project.


**Note:** Use the online reference of [Supported KaTeX Functions](https://katex.org/docs/supported.html)

## Examples

Inline math:
{{< math inline>}}
\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…

{{</ math >}}



Block math:

{{<math>}}
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
{{</math>}}

{{<math>}}
\relax{x} = \int_{-\infty}^\infty
    \hat\xi,e^{2 \pi i \xi x}
    \,d\xi
{{</ math>}}