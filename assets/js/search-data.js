// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "The academic curriculum vitae of Dr. Trung-Nghia Le, Senior Researcher and Lecturer at University of Science, VNU-HCM.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-demo",
          title: "Demo",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/demo/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Members and collaborators of the lab.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-courses",
          title: "Courses",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/course/";
          },
        },{id: "nav-thesis",
          title: "Thesis",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/thesis/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-a-paper-about-salient-object-segmentation-is-accepted-to-psivt-2015",
          title: 'A paper about salient object segmentation is accepted to PSIVT 2015.',
          description: "",
          section: "News",},{id: "news-rank-3-in-densely-annotated-videosegmentation-davis-challenge-semi-supervised-segmentation-track-cvpr-2017",
          title: 'Rank 3 in Densely Annotated VIdeoSegmentation (DAVIS) Challenge (Semi-Supervised Segmentation Track), CVPR 2017....',
          description: "",
          section: "News",},{id: "news-a-paper-about-salient-object-segmentation-is-accepted-to-bmvc-2017",
          title: 'A paper about salient object segmentation is accepted to BMVC 2017.',
          description: "",
          section: "News",},{id: "news-a-paper-about-style-transfer-is-accepted-to-wacv-2018",
          title: 'A paper about style transfer is accepted to WACV 2018.',
          description: "",
          section: "News",},{id: "news-rank-6-in-densely-annotated-video-segmentation-davis-challenge-semi-supervised-segmentation-track-cvpr-2018",
          title: 'Rank 6 in Densely Annotated VIdeo Segmentation (DAVIS) Challenge (Semi-Supervised Segmentation Track), CVPR...',
          description: "",
          section: "News",},{id: "news-an-article-about-salient-object-segmentation-is-accepted-to-ieee-trans-on-image-processing-tip-2018",
          title: 'An article about salient object segmentation is accepted to IEEE Trans. on Image...',
          description: "",
          section: "News",},{id: "news-a-paper-about-salient-object-segmentation-is-accepted-to-wacv-2019",
          title: 'A paper about salient object segmentation is accepted to WACV 2019.',
          description: "",
          section: "News",},{id: "news-an-article-about-camouflaged-object-segmentation-is-accepted-to-cviu-journal-2019",
          title: 'An article about camouflaged object segmentation is accepted to CVIU journal, 2019.',
          description: "",
          section: "News",},{id: "news-rank-3-in-densely-annotated-video-segmentation-davis-challenge-semi-supervised-segmentation-track-cvpr-2019",
          title: 'Rank 3 in Densely Annotated VIdeo Segmentation (DAVIS) Challenge (Semi-Supervised Segmentation Track), CVPR...',
          description: "",
          section: "News",},{id: "news-rank-8-in-ai-city-challenge-track-3-cvpr-2019",
          title: 'Rank 8 in AI City Challenge (Track 3), CVPR 2019.',
          description: "",
          section: "News",},{id: "news-rank-25-in-ai-city-challenge-track-2-cvpr-2019-out-of-84-team-submissions",
          title: 'Rank 25 in AI City Challenge (Track 2), CVPR 2019 (out of 84...',
          description: "",
          section: "News",},{id: "news-a-paper-about-object-detection-is-accepted-to-wacv-2020",
          title: 'A paper about object detection is accepted to WACV 2020.',
          description: "",
          section: "News",},{id: "news-one-crest-aip-proposal-is-funded-may-2020",
          title: 'One CREST AIP proposal is funded (May 2020).',
          description: "",
          section: "News",},{id: "news-rank-5-in-ai-city-challenge-track-4-cvpr-2020",
          title: 'Rank 5 in AI City Challenge (Track 4), CVPR 2020.',
          description: "",
          section: "News",},{id: "news-rank-10-in-ai-city-challenge-track-1-cvpr-2020",
          title: 'Rank 10 in AI City Challenge (Track 1), CVPR 2020.',
          description: "",
          section: "News",},{id: "news-rank-4-in-densely-annotated-video-segmentation-davis-challenge-semi-supervised-segmentation-track-cvpr-2020",
          title: 'Rank 4 in Densely Annotated VIdeo Segmentation (DAVIS) Challenge (Semi-Supervised Segmentation Track), CVPR...',
          description: "",
          section: "News",},{id: "news-a-paper-about-object-detection-is-accepted-to-intelligent-vehicles-symposium-iv-2020",
          title: 'A paper about object detection is accepted to Intelligent Vehicles Symposium (IV) 2020....',
          description: "",
          section: "News",},{id: "news-a-paper-about-text-to-image-is-accepted-to-acm-multimedia-2020-demo-track",
          title: 'A paper about text-to-image is accepted to ACM Multimedia 2020, demo track.',
          description: "",
          section: "News",},{id: "news-one-jsps-kakenhi-proposal-is-funded-september-2020",
          title: 'One JSPS KAKENHI proposal is funded (September 2020).',
          description: "",
          section: "News",},{id: "news-two-papers-video-object-segmentation-and-camouflaged-instance-segmentation-are-accepted-to-aaai-2021-demonstration-program",
          title: 'Two papers (video object segmentation and camouflaged instance segmentation) are accepted to AAAI...',
          description: "",
          section: "News",},{id: "news-call-for-papers-special-issue-advanced-artificial-intelligence-in-mixed-reality-applications-of-journal-of-electronics",
          title: 'Call for papers: Special Issue “[Advanced Artificial Intelligence in Mixed Reality Applications]” of...',
          description: "",
          section: "News",},{id: "news-an-article-about-camouflaged-object-segmentation-is-accepted-to-ieee-access-2021",
          title: 'An article about camouflaged object segmentation is accepted to IEEE Access, 2021.',
          description: "",
          section: "News",},{id: "news-one-jsps-kakenhi-proposal-is-funded-march-2021",
          title: 'One JSPS KAKENHI proposal is funded (March 2021).',
          description: "",
          section: "News",},{id: "news-a-paper-about-adversarial-examples-is-accepted-to-workshop-of-media-forensics-cvpr-2021",
          title: 'A paper about adversarial examples is accepted to Workshop of Media Forensics, CVPR...',
          description: "",
          section: "News",},{id: "news-one-crest-aip-proposal-is-funded-june-2021",
          title: 'One CREST AIP proposal is funded (June 2021).',
          description: "",
          section: "News",},{id: "news-a-paper-about-deepfake-detection-is-accepted-to-iccv-2021-acceptance-rate-25-9",
          title: 'A paper about deepfake detection is accepted to ICCV 2021 (Acceptance rate 25.9%)....',
          description: "",
          section: "News",},{id: "news-an-article-about-face-analysis-is-accepted-to-journal-of-imaging-2021",
          title: 'An article about face analysis is accepted to Journal of Imaging, 2021.',
          description: "",
          section: "News",},{id: "news-an-article-about-camouflaged-instance-segmentation-is-accepted-to-ieee-trans-on-image-processing-tip-2021",
          title: 'An article about camouflaged instance segmentation is accepted to IEEE Trans. on Image...',
          description: "",
          section: "News",},{id: "news-an-article-about-deepfake-is-accepted-as-a-book-chapter-of-frontiers-in-fake-media-generation-and-detection-2021",
          title: 'An article about deepfake is accepted as a book chapter of Frontiers in...',
          description: "",
          section: "News",},{id: "news-an-article-about-video-object-segmentation-is-accepted-to-mva-journal-2022",
          title: 'An article about video object segmentation is accepted to MVA journal, 2022.',
          description: "",
          section: "News",},{id: "news-an-article-about-aquatic-animal-segmentation-will-be-presented-at-cv4animal-workshop-cvpr-2022",
          title: 'An article about aquatic animal segmentation will be presented at CV4Animal Workshop, CVPR...',
          description: "",
          section: "News",},{id: "news-a-poster-paper-about-public-speaking-simulator-is-accepted-to-ismar-2022",
          title: 'A poster paper about public speaking simulator is accepted to ISMAR, 2022.',
          description: "",
          section: "News",},{id: "news-a-paper-about-adversarial-example-is-accepted-to-wifs-2022",
          title: 'A paper about adversarial example is accepted to WIFS, 2022.',
          description: "",
          section: "News",},{id: "news-two-papers-multimedia-security-and-adversarial-example-are-accepted-to-wacv-2023",
          title: 'Two papers (multimedia security and adversarial example) are accepted to WACV, 2023.',
          description: "",
          section: "News",},{id: "news-we-organize-two-tracks-of-animar-challenge-at-shrec-2023",
          title: 'We organize two tracks of ANIMAR Challenge at SHREC 2023.',
          description: "",
          section: "News",},{id: "news-two-poster-papers-are-accepted-to-ismar-2023",
          title: 'Two poster papers are accepted to ISMAR, 2023.',
          description: "",
          section: "News",},{id: "news-our-virtual-try-on-paper-is-nominated-for-best-poster-at-ismar-2023",
          title: 'Our virtual try-on paper is nominated for Best Poster at ISMAR 2023.',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-to-psivt-2023-one-achieved-best-paper-award",
          title: 'Two papers are accepted to PSIVT, 2023 (one achieved Best Paper Award)',
          description: "",
          section: "News",},{id: "news-we-organize-medico-track-of-mediaeval-mmm-2024",
          title: 'We organize Medico track of MediaEval, MMM, 2024.',
          description: "",
          section: "News",},{id: "news-a-paper-about-self-supervised-learning-is-accepted-to-mmm-2024-oral-presentation",
          title: 'A paper about self-supervised learning is accepted to MMM, 2024 (Oral presentation).',
          description: "",
          section: "News",},{id: "news-a-paper-about-few-shot-instance-segmentation-is-accepted-to-aaai-2024-oral-presentation",
          title: 'A paper about few-shot instance segmentation is accepted to AAAI, 2024 (Oral presentation)....',
          description: "",
          section: "News",},{id: "news-an-article-is-accepted-to-the-journal-of-imaging-informatics-in-medicine-2024",
          title: 'An article is accepted to the Journal of Imaging Informatics in Medicine, 2024....',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-to-chi-late-breaking-work-track-2024",
          title: 'Two papers are accepted to CHI (Late Breaking Work track), 2024.',
          description: "",
          section: "News",},{id: "news-we-achieve-top-1-result-in-the-cvpr-syntagen-challenge-2024",
          title: 'We achieve top-1 result in the CVPR SyntaGen Challenge, 2024.',
          description: "",
          section: "News",},{id: "news-we-organize-1st-workshop-on-large-vision-language-model-learning-and-applications-lava-accv-2024",
          title: 'We organize 1st Workshop on Large Vision-Language Model Learning and Applications (LAVA), ACCV,...',
          description: "",
          section: "News",},{id: "news-my-student-quang-binh-nguyen-joins-vinai-residency-2024",
          title: 'My student Quang-Binh Nguyen joins VinAI Residency, 2024',
          description: "",
          section: "News",},{id: "news-two-poster-papers-are-accepted-to-ismar-2024",
          title: 'Two poster papers are accepted to ISMAR, 2024.',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-to-accv-2024",
          title: 'Two papers are accepted to ACCV, 2024.',
          description: "",
          section: "News",},{id: "news-some-papers-are-accepted-to-soict-2024",
          title: 'Some papers are accepted to SoICT, 2024.',
          description: "",
          section: "News",},{id: "news-a-paper-about-camouflage-segmentation-is-accepted-to-wacv-2025",
          title: 'A paper about camouflage segmentation is accepted to WACV, 2025.',
          description: "",
          section: "News",},{id: "news-we-organize-advancing-vision-language-ai-for-ent-endoscopy-analysis-entrep-challenge-acm-mm-2025",
          title: 'We organize Advancing Vision-Language AI for ENT Endoscopy Analysis (ENTRep) Challenge, ACM MM,...',
          description: "",
          section: "News",},{id: "news-we-organize-event-enriched-image-analysis-eventa-challenge-acm-mm-2025",
          title: 'We organize Event-Enriched Image Analysis (EVENTA) Challenge, ACM MM, 2025.',
          description: "",
          section: "News",},{id: "news-we-organize-2nd-workshop-on-large-vision-language-model-learning-and-applications-lava-acm-mm-2025",
          title: 'We organize 2nd Workshop on Large Vision-Language Model Learning and Applications (LAVA), ACM...',
          description: "",
          section: "News",},{id: "news-we-organize-1st-workshop-on-ambiguous-object-analysis-in-computer-vision-aocv-acm-mm-2025",
          title: 'We organize 1st Workshop on Ambiguous Object Analysis in Computer Vision (AOCV), ACM...',
          description: "",
          section: "News",},{id: "news-we-organize-cbmi-special-session-multimedia-ai-in-modern-cb-retrieval-challenges-and-applications-2025",
          title: 'We organize CBMI Special Session “Multimedia AI in Modern CB Retrieval: Challenges and...',
          description: "",
          section: "News",},{id: "news-three-papers-image-generation-and-application-are-accepted-to-iccci-2025",
          title: 'Three papers (image generation and application) are accepted to ICCCI, 2025.',
          description: "",
          section: "News",},{id: "news-an-article-about-camouflage-segmentation-is-accepted-to-journal-of-neural-computing-amp-amp-applications-2025",
          title: 'An article about camouflage segmentation is accepted to Journal of Neural Computing &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-a-paper-about-3d-retrieval-is-accepted-to-mapr-2025",
          title: 'A paper about 3D retrieval is accepted to MAPR, 2025.',
          description: "",
          section: "News",},{id: "news-a-paper-about-information-retrieval-is-accepted-to-cbmi-2025",
          title: 'A paper about information retrieval is accepted to CBMI, 2025.',
          description: "",
          section: "News",},{id: "news-a-paper-about-semi-supervised-segmentation-is-accepted-to-miccai-workshop-2025",
          title: 'A paper about semi-supervised segmentation is accepted to MICCAI Workshop, 2025.',
          description: "",
          section: "News",},{id: "news-openeventsv1-dataset-is-accepted-to-acm-mm-2025",
          title: 'OpenEventsV1 dataset is accepted to ACM MM, 2025.',
          description: "",
          section: "News",},{id: "news-some-challenge-and-demo-papers-are-accepted-to-acm-mm-2025",
          title: 'Some challenge and demo papers are accepted to ACM MM, 2025.',
          description: "",
          section: "News",},{id: "news-some-papers-are-accepted-to-soict-2025",
          title: 'Some papers are accepted to SoICT, 2025.',
          description: "",
          section: "News",},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-eventa",
          title: 'EVENTA',
          description: "Seeing Beyond the Pixels — Understanding the Story Behind Every Image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/EVENTA/";
            },},{id: "projects-openforensics",
          title: 'OpenForensics',
          description: "Large-Scale Challenging Dataset For Multi-Face Forgery Detection And Segmentation In-The-Wild",
          section: "Projects",handler: () => {
              window.location.href = "/projects/OpenForensics/";
            },},{id: "projects-pandora",
          title: 'PANDORA',
          description: "Pixel-wise Attention Dissolution and Latent Guidance for Zero-Shot Object Removal",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PANDORA/";
            },},{id: "projects-shape2animal",
          title: 'Shape2Animal',
          description: "Creative Animal Generation from Natural Silhouettes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Shape2Animal/";
            },},{id: "projects-camouflaged-object-segmentation",
          title: 'Camouflaged Object Segmentation',
          description: "Pioneering work on camouflaged object segmentation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/camo/";
            },},{id: "projects-camouflaged-instance-segmentation",
          title: 'Camouflaged Instance Segmentation',
          description: "Camouflaged instance segmentation in-the-wild",
          section: "Projects",handler: () => {
              window.location.href = "/projects/camopp/";
            },},{id: "projects-semi-supervised-video-instance-segmentation",
          title: 'Semi-Supervised Video Instance Segmentation',
          description: "Semi-supervised video instance segmentation in CVPR DAVIS Challenge series",
          section: "Projects",handler: () => {
              window.location.href = "/projects/semi-supervised/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%74%6E%67%68%69%61.%72%65%73%65%61%72%63%68@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=n8ZQzx8AAAAJ", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("http://www.informatik.uni-trier.de/~ley/pers/hd/l/Le:Trung=Nghia", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Trung-Nghia_Le/", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ltnghia", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/trung-nghia-le-9801255b", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
