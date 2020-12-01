---
title: "Deep learning in biomedical image analysis"
date: 2020-11-17T09:45:00+05:30
blogs_tags: ["Medical Imaging", "Radiologic Imaging", "Cardiac Disease Classification", "Cardiac Segmentation", "Deep Learning"]
blogs_categories: ["Research"]
authors: ["Mahendra Khened", "Avinash G Kori", "Ganapathy Krishnamurthi"]
image: "imaging-planes.png"
summary: "Medical imaging, specifically radiologic imaging is the most commonly used diagnostic tool for disease diagnosis and treatment assessment for a wide variety of conditions. Over the last decades the image acquisition hardware has improved significantly and corresponding image reconstruction software has become more sophisticated. These provide increasingly complex data both in terms of size and content, making it a challenging task for radiologists to sift through and arrive at meaningful diagnosis and therapeutic assessment. The role of AI/ML techniques in this context is to act as a radiologist's assistant to automate routine tasks and provide preliminary diagnosis. A radiologist can then use the outputs from these systems to speed up and improve accuracy of diagnosis."
draft: false
---

## Cardiac cine MRI
{{<figure src="/images/blogs/cardiac-cine.png" class="text-center">}}

One of the complex and challenging diagnosis tasks involves cardiac cine Magnetic Resonance Imaging (MRI). Cardiac cine Magnetic Resonance Imaging (MRI) is primarily used for the assessment of cardiac function and diagnosis of Cardiovascular diseases (CVDs). Cardiac MRI is considered the most accurate method for the estimation of clinical parameters such as ejection fraction, ventricular volumes, stroke volume and myocardial mass. Cardiac cine MRI consists of images of the cross sections of the heart (entire heart can be covered) acquired at different time points during the cardiac cycle including end systole and end diastole. The diagnosis tasks consists of image segmentation to segment the left ventricle and derive quantitative measures to diagnose specific heart conditions.

## Deep Learning for cardiac MRI
We developed a deep learning based framework for cardiac segmentation which incorporated cardiac structures segmentation and cardiac disease diagnosis. The figure below illustrates the pipeline. The pipeline involved:

1. Image Pre-processing: Fourier analysis and circular Hough-transform for the region of interest (ROI) cropping
2. FCN for cardiac structures segmentation: A typical semantic segmentation architecture comprises a down-sampling path (contracting) and an up-sampling path (expanding).
3. Automated Cardiac Disease Classification: Ensemble of classifier using image derived features including those from the labels output by the FCN

{{<figure src="/images/blogs/dl_cardiac_mri.png" class="text-center">}}

{{<rawhtml>}}
<p class="text-center font-weight-bold"> Automated cardiac segmentation and disease classification framework [1]</p>
{{</rawhtml>}}

{{<figure src="/images/blogs/semantic-segmentation-architecture.png" class="text-center">}}

{{<rawhtml>}}
<p class="text-center font-weight-bold"> Semantic Segmentation architecture for cardiac segmentation [1]</p>
{{</rawhtml>}}

The figure above illustrates the schematic diagram of our FCN architecture. Our FCN's connectivity pattern was based on DenseNets. Multi-scale processing was incorporated in the initial layers of the network by performing convolutions on the input with different kernel sizes in parallel paths and later fusing them as in Inception architectures. The long skip and short-cut (residual) connections in the up-sampling path were computationally and memory-efficient when compared to standard skip connections based on copy and concatenation (as in U-Net

Our FCN design ensured significant reduction in the number parameters (by a factor of 100 times compared to the existing state-of-the-art architecture like U-Net for biomedical segmentation), and it was found to be suitable where there was a constraint on the availability of large annotated training datasets and computational resources. The FCN was trained using a custom loss function based on a weighted combination of cross-entropy and Dice loss.

## Automated cardiac disease classification
We developed an ensemble of classifiers trained on the features extracted from the segmentation map for developing automated diagnosis models. Based on cardiac physiological parameters in the medical reports, the patients are grouped into five classes namely (i) normal- NOR, (ii) patients with previous myocardial infarction- MINF, (iii) patients with dilated cardiomyopathy- DCM, (iv) patients with hypertrophic cardiomyopathy- HCM, and (v) patients with abnormal right ventricle- ARV. The figure below illustrates the cardiac pathologies.

{{<figure src="/images/blogs/illustration-of-cardiac-pathologies.png" class="text-center">}}
{{<figure src="/images/blogs/illustration-courtesy.png" class="text-center">}}

The ensemble classifier system processed the features in two-stages for prediction of the cardiac disease as shown in the figure below.

{{<figure src="/images/blogs/automated-cardiac-disease-diagnostic-pipeline.png" class="text-center">}}

{{<rawhtml>}}
<p class="text-center font-weight-bold"> Automated Cardiac disease diagnosis pipeline [1]</p>
{{</rawhtml>}}

By following these steps in framework and network design, we achieved almost state-of-the-art performance on multiple cardiac segmentation datasets namely- (i) On STACOM ACDC-2017 challenge test set for segmentation task achieved a mean dice score of 0.94, 0.91 and 0.89 for the left ventricle, right ventricle and myocardium respectively and for automated cardiac disease diagnosis the accuracy was 100%, (ii) On STACOM LV-2011 test set the approach achieved 0.74 Jaccard index for myocardium segmentation. On the Kaggle challenge test set, the approach gave a continuous ranked probability score (CRPS) of 0.0127 for left ventricular volume estimation.

{{<figure src="/images/blogs/cardiac-structure-labelling.png" class="text-center">}}

We would like to improve upon this work in terms of segmentation accuracy at the apex and base of the heart where most of the errors occur. Disease diagnosis is another aspect which has to be tested out in a clinical setting. Taking this work beyond curated challenge datasets to a clinical setting is full of challenges. As MRI becomes increasingly common in hospitals in India, the adoption of these techniques would enhance the value of such imaging systems.

{{<rawhtml>}}
<div class="row">
  <div class="col-sm-4">
    <h5>Input Image</h5>
    {{<figure src="/images/blogs/input.gif" class="text-left">}}
  </div>
  <div class="col-sm-4">
    <h5>Prediction</h5>
    {{<figure src="/images/blogs/prediction.gif" class="text-left">}}
  </div>
  <div class="col-sm-4">
    <h5>Ground Truth</h5>
    {{<figure src="/images/blogs/growth-truth.gif" class="text-left">}}
  </div>
</div>
{{</rawhtml>}}


#### Contributors:
{{<rawhtml>}}
Mahendra Khened <sup>1,3</sup>, <a href="{{<ref "people/Avinash-G-Kori.md">}}">Avinash Kori</a> <sup>2,3</sup>, <a href="{{<ref "people/Ganapathy-Krishnamurthi.md">}}">Ganapathy Krishnamurthi</a> <sup>3</sup>
{{</rawhtml>}}
1. Data Scientist, Verisk Analytics India Pvt LTD
2. Post baccalaureate Fellow, RBCDSAI
3. Department of Engineering Design, Indian Institute of Technology Madras

#### References:
1. Khened, Mahendra, Varghese Alex Kollerathu, and Ganapathy Krishnamurthi. ["Fully convolutional multi-scale residual DenseNets for cardiac segmentation and automated cardiac diagnosis using ensemble of classifiers."](https://doi.org/10.1016/j.media.2018.10.004) Medical image analysis 51 (2019): 21-45.
2. Bernard, Olivier, et al. ["Deep learning techniques for automatic MRI cardiac multi-structures segmentation and diagnosis: Is the problem solved?."](https://doi.org/10.1109/TMI.2018.2837502) IEEE transactions on medical imaging 37.11 (2018): 2514-2525.

## Keywords
Medical Imaging, Radiologic Imaging, Cardiac Disease Classification, Cardiac Segmentation, Deep Learning