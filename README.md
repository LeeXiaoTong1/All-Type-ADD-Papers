# All-Type Audio Deepfake Detection 文献表格编辑器

这是一个单页 Web 表格编辑项目，用于编辑 all-type 音频伪造检测相关文献表，并通过浏览器打印功能导出 PDF。

## 使用方法

1. 解压项目压缩包。
2. 双击打开 `index.html`。
3. 单击任意表格单元格即可编辑。
4. 点击“保存到本机”可把修改保存到浏览器 LocalStorage。
5. 点击“导出 PDF”会打开浏览器打印窗口，选择“保存为 PDF”。

## 本次更新内容

- 重做系统首页视觉层次：顶部品牌区、功能卡片、悬浮工具栏、提示面板。
- 优化字体栈：中文优先使用系统无衬线字体，打印时使用宋体 / Times New Roman。
- 优化按钮、输入框、状态标签、表格边框、阴影、圆角和滚动条。
- 增加 A / B / C 来源类型图例，并在“来源备注”列进行弱色彩区分。
- 优化横向宽表格阅读：表头固定、序号列固定、行 hover 高亮。
- 新增顶部横向滚动条：无需滚动到表格底部，也可以直接横向拖动查看完整列。
- 保留 A4 横向打印样式，PDF 输出时自动隐藏页面控件。

## 功能

- 可编辑文献表格
- 新增 / 删除文献行
- 搜索过滤
- 保存到浏览器 LocalStorage
- JSON 导入 / 导出
- PDF 导出：使用浏览器打印为 PDF

## 说明

- PDF 导出基于浏览器打印功能；建议打印方向选择“横向”。
- 如果更换浏览器或清除浏览器数据，LocalStorage 中的保存内容可能丢失；重要修改建议同时导出 JSON 备份。

## 任务类型分类口径

当前表格使用以下任务类型：

- All-Type ADD：论文明确统一覆盖 speech、sound、singing、music 等多类音频伪造检测。
- Speech ADD：语音伪造、TTS / VC、ASVspoof、语音反欺骗、语音跨域泛化等。
- Sound ADD：环境声、通用非语音音频、general audio deepfake detection。
- Singing ADD：歌声伪造、SVDD、fake song、SVS / SVC 相关检测。
- Music ADD：音乐生成、AI song、text-to-music、machine-generated music 检测。
- Other：暂时无法归入上述主类的补充文献。

只有真正同时面向多类音频形态的论文才标为 All-Type ADD；仅被 all-type 论文引用或用于支撑某个子方向的文献，应归入其自身任务类型。

基于 LLM / ALLM / MLLM 的 ADD 文献仍按其主要音频范围归类。例如，ALLM4ADD 主要服务 speech ADD，因此标为 Speech ADD；FT-GRPO 同时覆盖 speech、environmental sound、singing voice 和 music，因此标为 All-Type ADD。方法路线信息统一写入“主要思路”和“我的理解备注”列，便于同时保留“任务对象”和“技术路线”两层信息。

## Cloudflare Pages 部署

该项目现在属于标准静态网站，无需后端服务器或构建流程：

```text
可编辑文献网格
│
├── index.html
├── styles.css
├── app.js
└── README.md
```

可以直接通过 GitHub 部署到 Cloudflare Pages：

```text
GitHub Repository
        ↓
Cloudflare Pages
        ↓
https://xxx.pages.dev
```

部署方式：
1. 将 `index.html`、`styles.css`、`app.js` 和 `README.md` 提交到 GitHub 仓库。
2. 进入 Cloudflare Dashboard，选择 Pages，并连接该 GitHub 仓库。
3. 构建设置中保持静态站点配置：
   - Framework preset：None 或默认静态站点配置
   - Build command：留空
   - Output directory：`/`
4. 点击部署，完成后即可通过 `https://xxx.pages.dev` 公开访问。

## 后续建议

目前版本已经可以公开访问。如果准备作为长期维护的 All-Type ADD 文献数据库，建议下一版继续增加：

1. 任务类型筛选按钮
   - 全部
   - All-Type ADD
   - Speech ADD
   - Sound ADD
   - Singing ADD
   - Music ADD
   - Other
2. 年份筛选
   - 2020-2022
   - 2023-2024
   - 2025+
3. 会议等级标签
   - AAAI
   - ICASSP
   - INTERSPEECH
   - TASLP
   - IEEE TIFS
   - ACM MM
4. Cloudflare D1 数据库

当前版本使用浏览器 LocalStorage 保存数据，适合个人编辑。如果升级为 Cloudflare D1，可以支持多人在线编辑，并逐步扩展为真正的公开维护型论文数据库。
