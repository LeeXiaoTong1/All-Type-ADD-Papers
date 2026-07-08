
const STORAGE_KEY = 'all_type_add_literature_table_v1';
const DEFAULT_ROWS = [
  {
    "title": "Detect All-Type Deepfake Audio: Wavelet Prompt Tuning for Enhanced Auditory Perception",
    "source": "A：核心传入文献；Detect All-Type Deepfake Audio 直接来源",
    "venue": "AAAI 2026 / arXiv",
    "dataset": "19LA、Codecfake-A3、CtrSVDD、FakeMusicCaps；覆盖 speech / sound / singing / music",
    "metrics": "EER",
    "idea": "提出 all-type ADD benchmark；比较 Spec-ResNet、AASIST、MERT/WavLM/XLSR-AASIST；提出 PT-SSL 与 WPT-SSL，用 wavelet prompt 学习跨类型伪造线索。",
    "paper": "https://arxiv.org/abs/2504.06753",
    "code": "https://github.com/xieyuankun/all-type-add",
    "note": "这是 Track2 最核心的参考文献。它的价值不只是一个模型，而是把 speech、sound、singing、music 四类音频统一成 all-type 检测问题。"
  },
  {
    "title": "AT-ADD: All-Type Audio Deepfake Detection Challenge Evaluation Plan",
    "source": "C：网页检索补充；与 A 同一任务体系",
    "venue": "ACM MM 2026 Challenge / arXiv",
    "dataset": "AT-ADD Challenge；Track1 robust speech；Track2 all-type speech/sound/singing/music",
    "metrics": "竞赛指标；Track2 面向 all-type detection",
    "idea": "定义 All-Type Audio Deepfake Detection Challenge，强调从 speech-centric ADD 走向全类型音频检测。",
    "paper": "https://arxiv.org/abs/2604.08184",
    "code": "未检索到独立公开代码仓库",
    "note": "适合写任务背景、竞赛设置和为什么需要 all-type detector。对解释 Train / Dev / Progress / Evaluation 数据划分也有帮助。"
  },
  {
    "title": "Interpretable All-Type Audio Deepfake Detection with Audio LLMs via Frequency-Time Reinforcement Learning",
    "source": "C：网页检索补充；A 的 all-type 后续方向",
    "venue": "arXiv 2026",
    "dataset": "All-type audio：speech、environmental sound、singing voice、music；约 340K frequency-time CoT demonstrations",
    "metrics": "ADD 检测指标；论文报告 all-type SOTA 表现",
    "idea": "用 Audio LLM、Frequency-Time CoT 和 FT-GRPO，让模型不仅判别真假，还输出时频依据。",
    "paper": "https://arxiv.org/abs/2601.02983",
    "code": "https://github.com/xieyuankun/ALLM-ADD-FT-GRPO",
    "note": "这是 all-type ADD 的可解释化路线。它与传统二分类检测器不同，更强调模型为什么判 fake。"
  },
  {
    "title": "FakeSound: Deepfake General Audio Detection",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "Interspeech 2024",
    "dataset": "FakeSound；基于 AudioCaps，使用音频 inpainting / 生成模型构造 fake general audio",
    "metrics": "Binary accuracy、segment-level F1、综合分数",
    "idea": "不只判断真假，还定位被篡改的音频片段；面向 general audio 而非纯语音。",
    "paper": "https://arxiv.org/abs/2406.08052",
    "code": "https://github.com/FakeSoundData/FakeSound",
    "note": "支撑 all-type 中的 sound/general-audio 方向。对 Track2 的启发是：非语音音频伪造痕迹与 TTS/VC 不同。"
  },
  {
    "title": "EnvSDD: Benchmarking Environmental Sound Deepfake Detection",
    "source": "B/C：由 FakeSound / ESDD 方向继续检索得到",
    "venue": "Interspeech 2025 / arXiv",
    "dataset": "EnvSDD：45.25h real + 316.74h fake environmental sounds",
    "metrics": "EER / binary detection metrics",
    "idea": "构建大规模 environmental sound deepfake dataset，重点考察 unseen generator 和 unseen dataset 泛化。",
    "paper": "https://arxiv.org/abs/2505.19203",
    "code": "https://github.com/apple-yinhan/EnvSDD",
    "note": "比 FakeSound 更系统地聚焦环境声。说明 sound branch 需要独立建模，不能完全依赖 speech detector。"
  },
  {
    "title": "The First Environmental Sound Deepfake Detection Challenge: Benchmarking Robustness, Evaluation, and Insights",
    "source": "C：网页检索补充",
    "venue": "ICASSP 2026 Challenge / arXiv",
    "dataset": "Environmental Sound Deepfake Detection Challenge 数据",
    "metrics": "Challenge metrics / detection metrics",
    "idea": "进一步规范环境声伪造检测的竞赛评估与鲁棒性分析。",
    "paper": "https://arxiv.org/html/2603.04865v4",
    "code": "https://github.com/apple-yinhan/EnvSDD",
    "note": "这是 sound 子方向的挑战类文献，可用于说明环境声检测已成为独立研究问题。"
  },
  {
    "title": "The Codecfake Dataset and Countermeasures for the Universally Detection of Deepfake Audio",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "IEEE/ACM TASLP 2025 / arXiv",
    "dataset": "Codecfake；超过 100 万中英文 ALM / codec-based fake audio",
    "metrics": "EER",
    "idea": "面向 Audio Language Model / neural codec 生成音频，提出 Codecfake 数据集和 CSAM countermeasure。",
    "paper": "https://arxiv.org/abs/2405.04880",
    "code": "https://github.com/xieyuankun/Codecfake",
    "note": "对 Track2 很重要：codec/artifact 特征可作为跨类型伪造线索，用来支撑 Artifact branch 或 forensic memory。"
  },
  {
    "title": "CtrSVDD: A Benchmark Dataset and Baseline Analysis for Controlled Singing Voice Deepfake Detection",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "Interspeech 2024 / arXiv",
    "dataset": "CtrSVDD：47.64h bonafide + 260.34h deepfake singing；14 种 SVS/SVC 方法",
    "metrics": "EER",
    "idea": "构建受控 singing voice deepfake benchmark，并评估多种 front-end features。",
    "paper": "https://arxiv.org/abs/2406.02438",
    "code": "https://github.com/SVDDChallenge/CtrSVDD2024_Baseline",
    "note": "这是 singing 分支的核心数据集论文。它说明 singing 不是 speech 的简单迁移。"
  },
  {
    "title": "SVDD 2024: The Inaugural Singing Voice Deepfake Detection Challenge",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "IEEE SLT 2024 / arXiv",
    "dataset": "CtrSVDD、WildSVDD",
    "metrics": "EER",
    "idea": "第一个 Singing Voice Deepfake Detection Challenge，包含 controlled 和 in-the-wild 两个 track。",
    "paper": "https://arxiv.org/abs/2408.16132",
    "code": "https://github.com/SVDDChallenge",
    "note": "Singing deepfake detection 的挑战基准。写相关工作时可作为 singing 子任务的标准入口。"
  },
  {
    "title": "SingFake: Singing Voice Deepfake Detection",
    "source": "B：由 SVDD / CtrSVDD 方向继续追溯得到",
    "venue": "arXiv 2023 / singing deepfake dataset paper",
    "dataset": "SingFake：多语言、网络场景 singing deepfake clips",
    "metrics": "EER",
    "idea": "构建 in-the-wild singing voice deepfake dataset，验证 speech detector 迁移到 singing 会退化。",
    "paper": "https://github.com/yongyizang/SingFake",
    "code": "https://github.com/yongyizang/SingFake",
    "note": "更接近真实网络歌曲场景，适合说明 singing voice 的开放域复杂性。"
  },
  {
    "title": "FSD: An Initial Chinese Dataset for Fake Song Detection",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "ICASSP 2024 / arXiv",
    "dataset": "FSD 中文假歌数据集；5 种 SVS/SVC 方法生成",
    "metrics": "EER",
    "idea": "构建中文 fake song detection 数据集，并比较 speech-trained 与 song-trained ADD 模型。",
    "paper": "https://arxiv.org/abs/2309.02232",
    "code": "https://github.com/xieyuankun/FSD-Dataset",
    "note": "对中文唱声伪造检测很关键。它直接证明语音模型不能直接等价替代歌曲检测模型。"
  },
  {
    "title": "Audio Features Investigation for Singing Voice Deepfake Detection",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "ICASSP 2025",
    "dataset": "Singing voice deepfake detection 数据；具体数据集需阅读全文进一步确认",
    "metrics": "EER / detection metrics",
    "idea": "系统分析不同 audio features 对 singing voice deepfake detection 的影响。",
    "paper": "https://ieeexplore.ieee.org/document/10888452",
    "code": "未检索到稳定公开官方代码",
    "note": "这篇更偏特征分析。适合支撑对 XLS-R、MERT、OpenBEATs 等不同前端的解释。"
  },
  {
    "title": "FakeMusicCaps: A Dataset for Detection and Attribution of Synthetic Music Generated via Text-to-Music Models",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "Journal of Imaging 2025 / arXiv 2024",
    "dataset": "FakeMusicCaps；MusicCaps 真实音乐 + 多个 text-to-music 模型生成版本",
    "metrics": "Detection / attribution metrics",
    "idea": "构建 text-to-music synthetic music 检测与模型归因数据集。",
    "paper": "https://arxiv.org/abs/2409.10684",
    "code": "https://github.com/polimi-ispl/FakeMusicCaps",
    "note": "这是 all-type 中 music 分支最直接的数据源。说明 music fake 不只是人声假，还包括伴奏、配器、节奏和风格伪造。"
  },
  {
    "title": "SONICS: Synthetic Or Not — Identifying Counterfeit Songs",
    "source": "C：网页检索补充",
    "venue": "ICLR 2025",
    "dataset": "SONICS：97K songs，4,751h；约 49K synthetic songs 来自 Suno / Udio",
    "metrics": "F1、速度、内存等",
    "idea": "提出 SpecTTTra，用 spectro-temporal tokens 处理长时长 AI song 检测。",
    "paper": "https://arxiv.org/abs/2408.14080",
    "code": "https://github.com/awsaf49/sonics",
    "note": "这是 music/synthetic song 检测顶会论文。比 FakeMusicCaps 更贴近完整 AI 歌曲检测。"
  },
  {
    "title": "Detecting Music Deepfakes is Easy but Actually Hard",
    "source": "C：网页检索补充",
    "venue": "arXiv 2024；Deezer research",
    "dataset": "Real music + fake reconstructions / music deepfake 数据",
    "metrics": "Accuracy、calibration、robustness、generalization 分析",
    "idea": "证明音乐深伪看似容易检测，但部署时存在校准、鲁棒性、泛化和可解释性问题。",
    "paper": "https://arxiv.org/abs/2405.04181",
    "code": "https://github.com/deezer/deepfake-detector",
    "note": "适合写 music fake detection 的问题复杂性。它提醒不能只报告单一测试集高分。"
  },
  {
    "title": "From Voices to Beats: Enhancing Music Deepfake Detection by Identifying Forgeries in Background",
    "source": "C：网页检索补充",
    "venue": "ICASSP 2025",
    "dataset": "Music deepfake detection 数据；具体公开数据细节需阅读全文确认",
    "metrics": "Detection metrics",
    "idea": "关注背景/伴奏中的伪造线索，而不是只看主唱声线。",
    "paper": "https://ieeexplore.ieee.org/document/10890293",
    "code": "未检索到稳定公开官方代码",
    "note": "对 Music branch 有启发：音乐伪造检测应关注 background / beat / instrumental artifact。"
  },
  {
    "title": "M6: Multi-generator, Multi-domain, Multi-lingual and Cultural, Multi-genres, Multi-instrument Machine-Generated Music Detection Databases",
    "source": "C：网页检索补充",
    "venue": "Scientific Reports 2026 / arXiv 2024",
    "dataset": "M6：多生成器、多领域、多语言文化、多流派、多乐器机器生成音乐数据",
    "metrics": "Baseline binary classification metrics",
    "idea": "构建大规模多维度 machine-generated music detection benchmark。",
    "paper": "https://arxiv.org/abs/2412.06001",
    "code": "论文称 dataset/code 将公开；当前未检索到稳定官方仓库",
    "note": "适合扩展 music 分支相关工作，强调 music fake 的多语言、多流派、多乐器分布差异。"
  },
  {
    "title": "ASVspoof 2021: Towards Spoofed and Deepfake Speech Detection in the Wild",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "IEEE/ACM TASLP 2023",
    "dataset": "ASVspoof 2021 LA / PA / DF",
    "metrics": "EER、min-tDCF 等",
    "idea": "将 speech anti-spoofing 推向 in-the-wild，DF track 关注线上压缩语音深伪。",
    "paper": "https://arxiv.org/abs/2210.02437",
    "code": "https://github.com/asvspoof-challenge/2021",
    "note": "Speech 分支的基础挑战文献。all-type 论文中的 speech 部分基本继承 ASVspoof 系列范式。"
  },
  {
    "title": "ASVspoof 5: Crowdsourced Speech Data, Deepfakes, and Adversarial Attacks at Scale",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "ASVspoof Workshop 2024 / arXiv",
    "dataset": "ASVspoof 5；crowdsourced speech、deepfake、adversarial attacks",
    "metrics": "Stand-alone CM metrics、SASV metrics、EER",
    "idea": "引入更大规模众包语音和对抗攻击，强化 speech deepfake 检测现实性。",
    "paper": "https://arxiv.org/abs/2408.08739",
    "code": "未检索到独立官方代码；数据和协议属于 ASVspoof 生态",
    "note": "适合支撑真实语音分布和对抗攻击会造成检测退化。"
  },
  {
    "title": "ADD 2022: The First Audio Deep Synthesis Detection Challenge",
    "source": "B/C：由 ASVspoof / ADD challenge 方向追溯",
    "venue": "ICASSP 2022 / arXiv",
    "dataset": "ADD 2022：low-quality fake、partially fake、audio fake game",
    "metrics": "EER / track-specific metrics",
    "idea": "第一个 Audio Deep Synthesis Detection Challenge，关注低质、局部伪造和攻防博弈。",
    "paper": "https://arxiv.org/abs/2202.08433",
    "code": "未检索到官方统一仓库",
    "note": "对 all-type 的启发是：真实伪造不一定整段 fake，可能是局部 fake 或低质量传播后的 fake。"
  },
  {
    "title": "ADD 2023: The Second Audio Deepfake Detection Challenge",
    "source": "B/C：由 ADD challenge 方向追溯",
    "venue": "IJCAI 2023 Workshop / arXiv",
    "dataset": "ADD 2023：audio fake game、manipulation region location、algorithm recognition",
    "metrics": "FG / RL / AR track-specific metrics",
    "idea": "从二分类扩展到伪造区间定位和伪造算法识别。",
    "paper": "https://arxiv.org/abs/2305.13774",
    "code": "https://addchallenge.cn/add2023",
    "note": "可用于说明伪造检测不应只停留在 real/fake，还应包括定位与归因。"
  },
  {
    "title": "Cross-Domain Audio Deepfake Detection: Dataset and Analysis",
    "source": "C：网页检索补充",
    "venue": "EMNLP 2024",
    "dataset": "CD-ADD；300h+，5 个 zero-shot TTS 模型",
    "metrics": "EER",
    "idea": "构建跨域语音 deepfake 数据，研究 attack-augmented training 和 codec compression 影响。",
    "paper": "https://arxiv.org/abs/2404.04904",
    "code": "https://github.com/leolya/CD-ADD",
    "note": "虽然主要是 speech，但 cross-domain evaluation 对 held-out dev、跨类型验证很有启发。"
  },
  {
    "title": "Towards Generalisable and Calibrated Audio Deepfake Detection with Self-Supervised Representations",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "Interspeech 2024",
    "dataset": "8 个 audio deepfake datasets",
    "metrics": "EER、calibration metrics",
    "idea": "冻结 SSL 表征 + 简单 logistic regression，强调泛化和校准。",
    "paper": "https://arxiv.org/abs/2309.05384",
    "code": "未检索到稳定官方代码；论文和实验协议公开于 arXiv",
    "note": "适合支撑冻结 SSL 前端具有强泛化能力。你的多分支 SSL 表征与它同一逻辑。"
  },
  {
    "title": "Heterogeneity over Homogeneity: Investigating Multilingual Speech Pre-Trained Models for Detecting Audio Deepfake",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "Findings of NAACL 2024",
    "dataset": "ASVspoof 2019、In-the-Wild、DECRO",
    "metrics": "EER / ADD metrics",
    "idea": "比较多种 multilingual PTM，提出 MiO 融合异质预训练表征。",
    "paper": "https://arxiv.org/abs/2404.00809",
    "code": "https://github.com/orchidchetiaphukan/MultilingualPTM_ADD_NAACL24",
    "note": "对多模型融合有直接启发：异质模型比同质堆叠更有价值。"
  },
  {
    "title": "Audio Deepfake Detection with Self-Supervised XLS-R and SLS Classifier",
    "source": "C：网页检索补充；与 XLS-R-AASIST 路线高度相关",
    "venue": "ACM MM 2024",
    "dataset": "ASVspoof 2021 DF / LA、In-the-Wild",
    "metrics": "EER",
    "idea": "把 XLS-R 24 层当作 feature pyramid，用 Sensitive Layer Selection 学习层权重。",
    "paper": "https://dl.acm.org/doi/10.1145/3664647.3681345",
    "code": "https://github.com/QiShanZhang/SLSforASVspoof-2021-DF",
    "note": "支撑 XLS-R 多层特征的有效性，也能支撑 TokenPooling / layer-wise fusion 的合理性。"
  },
  {
    "title": "AASIST: Audio Anti-Spoofing Using Integrated Spectro-Temporal Graph Attention Networks",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "ICASSP 2022",
    "dataset": "ASVspoof 2019 LA/PA 等",
    "metrics": "EER、min-tDCF",
    "idea": "用 integrated spectro-temporal graph attention 同时建模时域和频域伪造线索。",
    "paper": "https://arxiv.org/abs/2110.01200",
    "code": "https://github.com/clovaai/aasist",
    "note": "AASIST 是很多 ADD 系统的标准后端。all-type 论文也是用 AASIST 作为 backbone。"
  },
  {
    "title": "Automatic Speaker Verification Spoofing and Deepfake Detection Using Wav2vec 2.0 and Data Augmentation",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "Odyssey 2022",
    "dataset": "ASVspoof 2021 LA / DF",
    "metrics": "EER、min-tDCF",
    "idea": "使用 wav2vec 2.0 SSL 前端 + data augmentation 做语音反欺骗/深伪检测。",
    "paper": "https://arxiv.org/abs/2202.12233",
    "code": "https://github.com/TakHemlata/SSL_Anti-spoofing",
    "note": "这是 SSL-AASIST / XLSR-AASIST 路线的重要前身。WPT-SSL 可看作其参数高效、跨类型扩展。"
  },
  {
    "title": "Mixture of Experts Fusion for Fake Audio Detection Using Frozen wav2vec 2.0",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "ICASSP 2025 / arXiv",
    "dataset": "ASVspoof 2019、ASVspoof 2021",
    "metrics": "EER",
    "idea": "冻结 wav2vec 2.0，用 gate network 做 layer-feature MoE fusion。",
    "paper": "https://arxiv.org/abs/2409.11909",
    "code": "https://github.com/john852517791/pytorch_lightning_FAD",
    "note": "和 expert router / 多分支融合非常接近。虽然主要是 speech，但思想可迁移到 all-type。"
  },
  {
    "title": "WaveFake: A Data Set to Facilitate Audio DeepFake Detection",
    "source": "C：网页检索补充",
    "venue": "NeurIPS Datasets and Benchmarks 2021",
    "dataset": "WaveFake；多种 neural vocoder/TTS 生成音频，两种语言",
    "metrics": "EER / classification metrics",
    "idea": "构建早期 audio deepfake detection 数据集和 baseline。",
    "paper": "https://openreview.net/forum?id=74TZg9gsO8W",
    "code": "https://github.com/RUB-SysSec/wavefake",
    "note": "音频深伪检测早期重要数据集，对 speech fake 生成器泛化研究有基础意义。"
  },
  {
    "title": "DeepSonar: Towards Effective and Robust Detection of AI-Synthesized Fake Voices",
    "source": "C：网页检索补充",
    "venue": "ACM MM 2020",
    "dataset": "英文/中文 AI-synthesized fake voice 数据",
    "metrics": "Accuracy、error rate",
    "idea": "监测 speaker recognition DNN 的 layer-wise neuron behavior 来检测假语音。",
    "paper": "https://arxiv.org/abs/2005.13770",
    "code": "未检索到官方代码；非官方复现：https://github.com/0Rambler0/DeepSonar",
    "note": "较早的顶会 fake voice detection 文献，可用于补充 speech deepfake 检测发展脉络。"
  },
  {
    "title": "The Impact of Silence on Speech Anti-Spoofing",
    "source": "A：Detect All-Type Deepfake Audio 直接引用",
    "venue": "IEEE/ACM TASLP 2023",
    "dataset": "ASVspoof / speech anti-spoofing 数据",
    "metrics": "EER / anti-spoofing metrics",
    "idea": "分析 silence duration 与 silence content 对 CM 判别的影响，并讨论 silence attack。",
    "paper": "https://arxiv.org/abs/2309.11827",
    "code": "未检索到稳定公开官方代码",
    "note": "可用于解释为什么裁剪、静音、head crop / random crop 会显著影响检测结果。"
  }
];

const columns = [
  { key: 'title', label: '论文名称' },
  { key: 'taskType', label: '任务类型' },
  { key: 'source', label: '来源备注' },
  { key: 'venue', label: '会议/期刊' },
  { key: 'dataset', label: '所用数据集' },
  { key: 'metrics', label: '评估指标' },
  { key: 'idea', label: '主要思路' },
  { key: 'paper', label: '论文链接', link: true },
  { key: 'code', label: '代码/项目链接', link: true },
  { key: 'note', label: '我的理解备注' }
];

let rows = loadRows();
let dirty = false;

const tbody = document.querySelector('#papersTable tbody');
const rowCountEl = document.getElementById('rowCount');
const saveStateEl = document.getElementById('saveState');
const searchInput = document.getElementById('searchInput');
const printTime = document.getElementById('printTime');
const tableScroll = document.getElementById('tableScroll');
const topScrollbar = document.getElementById('topScrollbar');
const topScrollbarSpacer = document.getElementById('topScrollbarSpacer');
let isSyncingHorizontalScroll = false;

function inferTaskType(row) {
  const text = `${row.title || ''} ${row.dataset || ''} ${row.note || ''}`.toLowerCase();
  if (/all-type|all type|all-type add|speech.*sound.*singing|singing.*music/.test(text)) return 'All-Type ADD';
  if (/singing|song|svdd|ctrsvdd/.test(text)) return 'Singing Voice ADD';
  if (/music|song|fakeMusic|sonics/.test(text)) return 'Music Deepfake Detection';
  if (/sound|environmental|envsdd|fakesound/.test(text)) return 'Sound Deepfake Detection';
  if (/survey|survey|review/.test(text)) return 'Survey / Review';
  if (/asvspoof|speech|voice|wav2vec|xls-r|xslr/.test(text)) return 'Speech ADD';
  if (/face|image|video|deepfake detection/.test(text)) return 'Other Deepfake Detection';
  return 'General ADD';
}

function normalizeRows(data) {
  return data.map(item => ({
    taskType: item.taskType || inferTaskType(item),
    ...item
  }));
}

function loadRows() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return normalizeRows(structuredClone(DEFAULT_ROWS));
  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) return normalizeRows(parsed);
    return structuredClone(DEFAULT_ROWS);
  } catch (error) {
    console.warn('LocalStorage JSON 解析失败，已加载初始表格。', error);
    return structuredClone(DEFAULT_ROWS);
  }
}

function cloneDefaultRows() {
  return JSON.parse(JSON.stringify(DEFAULT_ROWS));
}

function markDirty() {
  dirty = true;
  saveStateEl.textContent = '有未保存修改';
  saveStateEl.classList.add('dirty');
}

function markSaved() {
  dirty = false;
  saveStateEl.textContent = '已保存';
  saveStateEl.classList.remove('dirty');
}

function normalizeUrl(value) {
  const text = String(value || '').trim();
  if (/^https?:\/\//i.test(text)) return text;
  return '';
}

function detectSourceType(value) {
  const text = String(value || '').trim();
  if (/^A[：:]/i.test(text)) return 'A';
  if (/^B[：:]/i.test(text)) return 'B';
  if (/^C[：:]/i.test(text)) return 'C';
  return '';
}

function createEditableCell(rowIndex, column) {
  const td = document.createElement('td');
  td.dataset.key = column.key;
  if (column.link) td.className = 'link-cell';
  if (column.key === 'source') td.dataset.sourceType = detectSourceType(rows[rowIndex][column.key]);

  const div = document.createElement('div');
  div.className = 'cell-edit';
  div.contentEditable = 'true';
  div.spellcheck = false;
  div.dataset.row = String(rowIndex);
  div.dataset.key = column.key;
  div.textContent = rows[rowIndex][column.key] || '';

  div.addEventListener('input', () => {
    const i = Number(div.dataset.row);
    rows[i][column.key] = div.textContent.trim();
    if (column.key === 'source') td.dataset.sourceType = detectSourceType(rows[i][column.key]);
    markDirty();
  });

  div.addEventListener('paste', (event) => {
    event.preventDefault();
    const text = event.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  });

  td.appendChild(div);

  if (column.link) {
    const tools = document.createElement('div');
    tools.className = 'link-tools no-print';

    const openBtn = document.createElement('button');
    openBtn.type = 'button';
    openBtn.innerHTML = '<span class="btn-icon">↗</span>打开';
    openBtn.addEventListener('click', () => {
      const url = normalizeUrl(rows[rowIndex][column.key]);
      if (url) window.open(url, '_blank', 'noopener,noreferrer');
      else alert('当前内容不是可打开的 http/https 链接。');
    });

    tools.appendChild(openBtn);
    td.appendChild(tools);
  }

  return td;
}

function renderTable() {
  tbody.innerHTML = '';
  rows.forEach((row, rowIndex) => {
    const tr = document.createElement('tr');

    const idx = document.createElement('td');
    idx.className = 'idx-col';
    const idxDiv = document.createElement('div');
    idxDiv.className = 'cell-edit';
    idxDiv.contentEditable = 'false';
    idxDiv.textContent = rowIndex + 1;
    idx.appendChild(idxDiv);
    tr.appendChild(idx);

    columns.forEach((column) => tr.appendChild(createEditableCell(rowIndex, column)));

    const actions = document.createElement('td');
    actions.className = 'actions-col no-print';
    const wrap = document.createElement('div');
    wrap.className = 'row-actions';
    const del = document.createElement('button');
    del.type = 'button';
    del.innerHTML = '<span class="btn-icon">×</span>删除';
    del.className = 'danger';
    del.addEventListener('click', () => deleteRow(rowIndex));
    wrap.appendChild(del);
    actions.appendChild(wrap);
    tr.appendChild(actions);

    tbody.appendChild(tr);
  });
  applyFilter();
  updateRowCount();
  requestAnimationFrame(updateHorizontalScrollbar);
}

function updateRowCount() {
  const visible = Array.from(tbody.querySelectorAll('tr')).filter(tr => !tr.classList.contains('filtered-out')).length;
  rowCountEl.textContent = searchInput.value.trim() ? `${visible} / ${rows.length} 条文献` : `${rows.length} 条文献`;
}

function updateHorizontalScrollbar() {
  if (!tableScroll || !topScrollbar || !topScrollbarSpacer) return;
  const table = document.getElementById('papersTable');
  const scrollWidth = Math.max(table?.scrollWidth || 0, tableScroll.scrollWidth || 0);
  topScrollbarSpacer.style.width = `${scrollWidth}px`;
  topScrollbar.classList.toggle('is-hidden', scrollWidth <= tableScroll.clientWidth + 2);
  topScrollbar.scrollLeft = tableScroll.scrollLeft;
}

function syncHorizontalScroll(source, target) {
  if (!source || !target || isSyncingHorizontalScroll) return;
  isSyncingHorizontalScroll = true;
  target.scrollLeft = source.scrollLeft;
  requestAnimationFrame(() => { isSyncingHorizontalScroll = false; });
}

function applyFilter() {
  const keyword = searchInput.value.trim().toLowerCase();
  tbody.querySelectorAll('tr').forEach((tr, i) => {
    const rowText = columns.map(c => rows[i][c.key] || '').join(' ').toLowerCase();
    tr.classList.toggle('filtered-out', keyword && !rowText.includes(keyword));
  });
  updateRowCount();
}

function addRow() {
  rows.push({
    title: '新论文',
    taskType: 'General ADD',
    source: 'C：自行补充',
    venue: '',
    dataset: '',
    metrics: '',
    idea: '',
    paper: '',
    code: '',
    note: ''
  });
  markDirty();
  renderTable();
  const lastTitle = tbody.querySelector('tr:last-child td:nth-child(2) .cell-edit');
  if (lastTitle) lastTitle.focus();
}

function deleteRow(index) {
  const title = rows[index]?.title || `第 ${index + 1} 行`;
  if (!confirm(`确认删除：${title}？`)) return;
  rows.splice(index, 1);
  markDirty();
  renderTable();
}

function saveRows() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rows, null, 2));
  markSaved();
}

function resetRows() {
  if (!confirm('确认恢复初始表格？当前未导出的修改会丢失。')) return;
  rows = cloneDefaultRows();
  localStorage.removeItem(STORAGE_KEY);
  markSaved();
  renderTable();
}

function exportJson() {
  const blob = new Blob([JSON.stringify(rows, null, 2)], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `all_type_add_literature_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!Array.isArray(data)) throw new Error('JSON 根节点必须是数组。');
      rows = data.map(item => {
        const row = {};
        columns.forEach(col => row[col.key] = String(item[col.key] ?? ''));
        row.taskType = row.taskType || inferTaskType(row);
        return row;
      });
      markDirty();
      renderTable();
      alert('导入完成。请点击“保存到本机”写入 LocalStorage。');
    } catch (error) {
      alert(`导入失败：${error.message}`);
    }
  };
  reader.readAsText(file, 'utf-8');
}

function preparePrint() {
  printTime.textContent = `生成时间：${new Date().toLocaleString('zh-CN')}；共 ${rows.length} 条文献。`;
}

function printPdf() {
  preparePrint();
  window.print();
}

window.addEventListener('beforeprint', preparePrint);
window.addEventListener('beforeunload', (event) => {
  if (!dirty) return;
  event.preventDefault();
  event.returnValue = '';
});

document.getElementById('addRowBtn').addEventListener('click', addRow);
document.getElementById('saveBtn').addEventListener('click', saveRows);
document.getElementById('exportJsonBtn').addEventListener('click', exportJson);
document.getElementById('resetBtn').addEventListener('click', resetRows);
document.getElementById('printBtn').addEventListener('click', printPdf);
searchInput.addEventListener('input', applyFilter);
document.getElementById('importJsonInput').addEventListener('change', (event) => {
  const file = event.target.files?.[0];
  if (file) importJson(file);
  event.target.value = '';
});

if (tableScroll && topScrollbar) {
  tableScroll.addEventListener('scroll', () => syncHorizontalScroll(tableScroll, topScrollbar));
  topScrollbar.addEventListener('scroll', () => syncHorizontalScroll(topScrollbar, tableScroll));
  window.addEventListener('resize', updateHorizontalScrollbar);
}

renderTable();
markSaved();
updateHorizontalScrollbar();
