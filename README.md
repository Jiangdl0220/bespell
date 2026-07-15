# 补白 — AI 英语拼写练习

> 白处生词 · 一词一世界

看中文拼英文，听发音写句子。AI 生成对话场景课程，支持好友竞技对战。

## ✨ 功能

### 📖 词海（课程）
- **书阁**：15 门预设课程，覆盖 A1-C1 全难度，14 个场景分类，每门 50 句
- **随性抒写**：自然语言描述对话场景，AI 即时生成课程（可选难度 + 句数）
- **3D 卡片悬浮**：鼠标移动时卡片透视倾斜

### ✏️ 练习
- **落笔模式**：看中文逐词拼英文，空格确认，Tab 窥探提示
- **聆音模式**：听发音写整句，可反复重播，逐词对比反馈
- **断点续练**：进课程自动跳到上次结束位置，已做句子回览原文，禁止跳未做题
- **句子导航条**：横向滚动圆点总览全课进度（50 句也流畅），点已完成句回览原文
- **珍藏此句**：句子级收藏，一键存整句所有单词到温故
- **音标标签**：词级音标以药丸标签展示，清晰可辨
- **发音朗读**：浏览器 TTS，支持美式/英式男女声切换
- **页面导航**：左上角返回词海按钮

### 🔄 温故（复习）
- **所思**：练习中 Tab 窥探的句子自动记录
- **所念**：手动珍藏的整句单词集合，可随时移除
- **双 Tab 统一风格**：全站一致的 iOS 风格分段控件

### ⚔️ 对弈（竞技）
- **设局**：选课程设窥探上限，生成 4 位房间号
- **赴约**：输入房间号加入对战
- **实时同步**：SSE 推送对方加入/完成事件
- **计分规则**：净时间 = 实际用时 + 窥探次数 × 5s，短者胜

### 👤 印迹（个人中心）
- 头像上传（base64 存储）
- 昵称编辑
- 学习数据卡片（课业数 / 已练句数 / 待思词数）
- 嗓音设置（发音人选择 + 试听）

## 🚀 快速开始

```bash
git clone https://github.com/Jiangdl0220/bespell.git
cd bespell
npm install
cp .env.example .env.local
# 编辑 .env.local，填入 DEEPSEEK_API_KEY、JWT_SECRET、DATABASE_URL
npm run dev
```

打开 http://localhost:3001 即可使用。

## 🛠 技术栈

| 层面 | 技术 |
|------|------|
| 框架 | Next.js 16 + React 19 + TypeScript |
| 样式 | Tailwind CSS + Framer Motion |
| 3D | Three.js（墨滴粒子背景、课程完成印章动画） |
| 数据库 | Drizzle ORM + Neon Postgres（生产）/ SQLite（本地） |
| 认证 | bcrypt + JWT HttpOnly Cookie |
| AI | DeepSeek API (OpenAI 兼容) |
| 部署 | PM2 + 阿里云 ECS (Ubuntu 24.04) |

## 🌐 部署

### 环境变量

| 变量 | 说明 |
|------|------|
| `DEEPSEEK_API_KEY` | DeepSeek API Key |
| `JWT_SECRET` | JWT 签名密钥（随机字符串） |
| `DATABASE_URL` | Neon Postgres 连接串（如用 SQLite 可省略） |

### 服务器部署

```bash
# 构建
npm run build

# 启动（指定 DATABASE_URL）
DATABASE_URL="postgresql://..." pm2 start npm --name bespell -- start -- -p 3000
pm2 save
```

## 📁 项目结构

```
src/
├── app/                      # Next.js App Router
│   ├── (main)/               # 带侧边栏的主页面
│   │   ├── courses/          # 词海（课业 + 书阁）
│   │   ├── course/[id]/      # 练习页 + 完成页
│   │   ├── review/           # 温故
│   │   ├── battle/           # 对弈
│   │   └── profile/          # 印迹
│   ├── api/                  # API Routes
│   │   ├── auth/             # 注册/登录/登出/当前用户
│   │   ├── courses/          # 课程 CRUD
│   │   ├── library/          # 书阁预设课程 + 选课
│   │   ├── generate/         # AI 课程生成
│   │   ├── progress/         # 进度读写
│   │   ├── review-words/     # 窥探词 + 生词本
│   │   ├── battles/          # 竞技创建/加入/状态/提交
│   │   └── user/profile/     # 昵称 + 头像上传
│   ├── login/                # 登录页
│   └── register/             # 注册页
├── components/               # UI 组件
│   ├── practice/             # sentence-card, input-area, sentence-nav
│   ├── sidebar.tsx           # 侧边栏导航
│   ├── course-card.tsx       # 课业卡片（3D 悬浮）
│   ├── course-library.tsx    # 书阁组件
│   ├── course-creator.tsx    # 随性抒写组件
│   ├── battle-arena.tsx      # 对战界面
│   ├── ink-particles.tsx     # Three.js 墨滴粒子背景
│   ├── seal-stamp.tsx        # Three.js 课程完成印章
│   ├── card-3d.tsx           # CSS 3D 悬浮包装
│   ├── icons.tsx             # SVG 图标库
│   ├── logo.tsx              # 补白 Logo（对角半填）
│   └── voice-selector.tsx    # 嗓音选择 + speak()
├── db/                       # 数据库
│   ├── schema.ts             # SQLite Drizzle Schema
│   ├── schema.pg.ts          # Postgres Drizzle Schema
│   ├── index.ts              # getDb() 双端适配
│   └── preset-courses.ts     # 15 门预设课程数据
├── hooks/                    # 自定义 Hooks
│   ├── use-practice-engine.ts    # 落笔引擎（逐词输入 + 断点续练）
│   └── use-dictation-engine.ts   # 聆音引擎（整句输入）
└── lib/
    ├── ai.ts                 # AI Prompt 构建
    ├── auth.ts               # JWT 签发/验证
    └── password.ts           # bcrypt 密码哈希
```

## 🎨 设计

- **配色**：纯白底色 + 苔藓绿强调 `#2d8a4e`，卡片微绿渐变
- **字体**：ZCOOL QingKe HuangYou（品牌标题）+ Ma Shan Zheng（菜单）+ Inter Tight（正文）
- **3D 动效**：墨滴粒子背景、卡片透视悬浮、完成印章动画
- **Logo**：对角半填圆角方块——左上留白轮廓（白），右下实体填充（补），交汇处墨滴
- **交互**：全站统一 iOS 风格分段控件（课业/书阁、所思/所念、落笔/聆音）
