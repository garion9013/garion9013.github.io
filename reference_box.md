---
title: Young H. Oh
name_en: Young H. Oh
name_kr: 오영환
position: phd
jobtitle: Ph.D. Candidates
avatar: oyh.jpg
email: younghwan@skku.edu
google_scholar: https://scholar.google.co.kr/citations?user=4x1sO8gAAAAJ&hl=en
github: younghwanoh
joined: 2013
layout: profile
show_profile: true
---

{: .anchor}
### Bio

Young H. Oh is currently a Ph.D. candidate in Electrical and Computer Engineering
Department at [Sungkyunkwan University](https://ice.skku.edu/eng_ice). His main research topic is
building an high-performance cloud DNN accelerator systems spanning DNN model compression,
accelerator resource scheduling, etc. He is interested in not only devising an exciting
research idea, but also realizing it into the practical open-source solution.

---

{: .anchor}
### Education

**[2013 - Current]** <span style="color:#090909">Sungkyunkwan Universty, South Korea.</span> \\
Combined M.S. and Ph.D. course in Electrical and Computer Engineering \\
Advisor: Jae W. Lee \\
<span style="color:#999999; font-size:11pt; font-family:Lato">
\*Since August 2016, Visiting student at Seoul National University (SNU)
</span>

**[2009 - 2013]** <span style="color:#090909">Sungkyunkwan Universty, South Korea.</span> \\
Bachelor of Science in Engineering

---

{% assign myname = "<u><b style='color:black'>Young H. Oh</b></u>" %}
{% assign mynamel = "<u><b style='color:black'>Younghwan Oh</b></u>" %}
{% assign pptx = "\[PPTX\]" %}

{: .anchor}
### Publications
<p style="color:#4ba056; font-size:15pt; font-family:Lato; margin-bottom:0">*Will be presented at the poster session!</p>
<!--*-->

<style>
.alert-green {
  width:105%;
  background-color: #d4edda;
  font-size:11.5pt;
  border-width: 4px;
  color: rgb(0,0,0) !important;
  padding: 5px !important;
  padding-left: 10px !important;
  margin-left: -10px !important;
}
.alert-content {
  margin-top: -25px !important;
  width:105%;
  background-color: #ffffff;
  border-color: #d4edda;
  font-size:11.5pt;
  border-width: 4px;
  color: rgb(0,0,0) !important;
  padding: 5px !important;
  padding-left: 10px !important;
  margin-left: -10px !important;
}
</style>

{% assign name = "<i>Layerweaver</i>" %}
{: .alert .alert-green}
**[HPCA '21]**
{{ myname }}, Seonghak Kim, Yunho Jin, Sam Son, Jonghyun Bae, Jongsung Lee, Yeonhong Park, Dong Uk Kim, Tae Jun Ham, and Jae W. Lee,
"[Layerweaver: Maximizing Resource Utilization of Neural Processing Units via Layer-Wise Scheduling](/pubs/hpca21_layerweaver.pdf)",
*The 27th IEEE International Symposium on High Performance Computer Architecture.*
[{{ pptx }}](/pubs/hpca21_layerweaver.pptx)

{: .alert .alert-content .alert-success}
**Abstract** --- To meet surging demands for deep learning inference services, many cloud computing vendors employ high-performance specialized accelerators, called neural processing units (NPUs). One important challenge for effective use of NPUs is to achieve high resource utilization over a wide spectrum of deep neural network (DNN) models with diverse arithmetic intensities. There is often an intrinsic mismatch between the compute-to-memory bandwidth ratio of a NPU and the arithmetic intensity of a model, leading to significant resource under-utilization. Thus, we propose {{ name }}, an inference serving system with a novel multi-model time-multiplexing scheduler for NPUs. {{ name }} reduces the temporal waste of computation resources by interweaving layer execution of different models with opposing characteristics: compute-intensive and memory-intensive. {{ name }} hides the memory time of a memory-intensive model by overlapping it with the long computation time of a compute-intensive model, thereby minimizing the idle time. For two serving scenarios with 16 pairs of models, {{ name }} achieves near-perfect utilization of computation units and memory channels. 

**[IEEE Access '21]**
Jongho Kim, Beomkyu Seo, {{ myname }}, Jung-Hoon Chun, Jae W. Lee, and Jintae Kim,
"[An 8-bit Ring-Amplifier based Mixed-Signal MAC Circuit with Full Digital Interface and Variable Accumulation Length](https://ieeexplore.ieee.org/document/9310297)",
*IEEE Access 2021, Vol. 9, December 2020.*

**[ISCA '20]**
Tae Jun Ham, David Bruns-Smith, Brendan Sweeney, Yejin Lee, Seong Hoon Seo, U Gyeong Song, {{ myname }}, Krste Asanovic, Jae W. Lee and Lisa Wu,
"[Genesis: A Hardware Acceleration Framework for Genomic Data Analysis](/pubs/isca20_genesis.pdf)",
*The 47th ACM/IEEE International Symposium on Computer Architecture*
\- <span style="color:red"><b><i>Selected as IEEE MICRO Top Picks from Computer Architecture Conferences in 2020.</i></b></span>

**[HPCA '20]**
Tae Jun Ham, Sung Jun Jung, Seonghak Kim, {{ myname }}, Yoon Ho Song, Junghoon Park, Sanghee Lee, Kyoung Park, Jae W. Lee, Deog-Kyoon Jeong,
"[A3: Accelerating Neural Network Attention Mechanism with Approximation](/pubs/hpca20_a3.pdf)",
*The 26th IEEE International Symposium on High Performance Computer Architecture.*

{: .anchor #pact18}
**[PACT '18]**
{{ myname }}, Quan Quan, Daeyeon Kim, Seonghak Kim, Jun Heo, Jaeyoung Jang, Sung Jun Jung, and Jae W. Lee,
"[A Portable Automatic Data Quantizer for Deep Neural Networks](/pubs/pact18_libnumber.pdf)",
*The 27th IEEE International Conference on Parallel Architectures and Compilation Techniques.*
[{{ pptx }}](/pubs/pact18-talk.pptx)


**[ASPLOS '17]**
Channoh Kim, Jaehyeok Kim, Sungmin Kim, Dooyoung Kim, Namho Kim, Gitae Na, {{ myname }}, Hyeon Gyu Cho, and Jae W. Lee,
"[Typed Architectures: Architectural Support for Lightweight Scripting](/pubs/asplos17_typed.pdf)",
*The 22nd ACM Architectural Support for Programming Languages and Operating Systems*
\- <span style="color:red"><b><i>Selected for ASPLOS Highlights session.</i></b></span>
[{{ pptx }}](/pubs/asplos17_typed-talk.pptx)


**[ISCA '16]**
Channoh Kim, Sungmin Kim, Hyeon Gyu Cho, Dooyoung Kim, Jaehyeok Kim, {{ myname }}, Hakbeom Jang, and Jae W. Lee,
"[Short-Circuit Dispatch: Accelerating Virtual Machine Interpreters on Embedded Processors](/pubs/isca16_scd.pdf)",
*The 43rd IEEE/ACM International Symposium on Computer Architecture.*
[{{ pptx }}](/pubs/isca16_scd.pptx)


**[IEEE D&T '16]**
Donghwan Jeong, {{ myname }}, Yongjun Park, Jae W. Lee,
"[An eDRAM-Based Approximate register File for GPUs](/pubs/ieeedt15_trrf.pdf)",
*IEEE Design & Test: Special Issues on Approximate Computing.*,
Vol. 33 (1), February 2016.


**[PPoPP-Poster '15]**
Xianglan Piao, Channoh Kim, {{ mynamel }}, Huiying Li, Jin Cheon Kim, Hanjun Kim, and Jae W. Lee,
"[JAWS: A JavaScript Framework for Adaptive CPU-GPU Work Sharing](/pubs/ppopp15_jaws.pdf)",
*The 20th ACM SIGPLAN Symposium on Principles and Practice of Parallel Programming.*
<!-- San Francisco, California, USA, February 2015. -->


**[WWW-Poster '14]**
Xianglan Piao, Channoh Kim, {{ mynamel }}, Hanjun Kim, and Jae W. Lee,
"[Efficient CPU-GPU Work Sharing for Data-Parallel JavaScript Workloads](/pubs/www14_cgws.pdf)",
*The 23rd International World Wide Web Conference.*
<!-- Seoul, Korea, April 2014. -->

**[ISLPED '14]**
Kyungsang Cho, Yongjun Lee, {{ myname }}, Gyoo-cheol Hwang, and Jae W. Lee,
"[eDRAM-based tiered-reliability memory with applications to low-power frame buffers](/pubs/ispled14_trm.pdf)",
*2014 IEEE/ACM International Symposium on Low Power Electronics and Design.*
<!-- La Jolla, California, USA, Aug 2014. -->


**[PRISM '14]**
{{ mynamel }}, Xianglan Piao, Channoh Kim, and Jae W Lee
"[Automatic Runtime Selection of Best Hardware for Data-Parallel JavaScript Kernels via Lifelong Profiling](/pubs/prism14_cgce.pdf)",
*The 2nd International Workshop on Parallelism in Mobile Platforms.*
<!-- Minneapolis, Minnesota, USA, June 2014. -->
[{{ pptx }}](http://channoh.github.io/pubs/PRISM-talk-v7.pptx)

---

{: .anchor}
### Invited Talks
**[FuriosaAI - South Korea]**
"Layerweaver: Maximizing Resource Utilization of Neural Processing Units via Layer-Wise Scheduling", Seoul, Korea, April 2021.

---

{: .anchor}
### Open-source Projects
- [***libnumber*****: A Portable, Automatic Data Quantizer for Deep Neural Networks**](#)\\
An implementation of [[PACT '18]](#pact18). <i>libnumber</i> supports a vast range of quantized data formats with variable bit widths for DNNs. It efficiently finds a compact number representation that minimizes the user-provided objective function, while satisfying some predefined constraints (e.g. Accuracy). 

- [**OpenDNN: An Open-source, cuDNN-like Deep Learning Primitive Library**](https://github.com/SNU-ARC/OpenDNN)\\
OpenDNN is an open-source, cuDNN-like deep learning primitive library to support various framework and hardware architectures such as CPU, GPU and FPGA. OpenDNN is implemented using CUDA and OpenCL and ported on popular DNN frameworks (Caffe, Tensorflow, and DarkNet).

- [**Implementation of Iterative Pruning on TensorFlow**](https://github.com/garion9013/impl-pruning-tf)\\
An implementation of "Learning both Weights and Connections for Efficient Neural Network." Song et al. @ NIPS '15. I utilized "Embedding Lookup Sparse" operators in TensorFlow 1.0 (Deprecated now) and evaluated its performance impacts on CPU/GPU.
