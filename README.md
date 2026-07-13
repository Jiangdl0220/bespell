# BeSpell — AI 英语拼写练习

AI 自动生成英语对话课程，看中文拼英文，类多邻国翻译练习体验。

## ✨ 功能

- **AI 课程生成**：选场景（便利店/机场/餐厅…）+ 难度（A1-C1），DeepSeek 自动出 30-100 句
- **逐词拼写练习**：显示中文句子 → 逐个输入英文单词，空格确认
- **Tab 提示**：按住 Tab 偷看当前单词释义
- **Combo 计数**：连续正确有连击加成
- **音标切换**：可显隐 IPA 音标，偏好自动记忆
- **发音朗读**：🔊 按钮调用浏览器 TTS
- **用户系统**：注册/登录，个人进度云端隔离
- **完成统计**：正确率、最高连击、用时

## 🚀 快速开始

```bash
# 1. 克隆仓库
git clone https://github.com/Jiangdl0220/bespell.git
cd bespell

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp .env.example .env.local
# 编辑 .env.local，填入你的 DeepSeek API Key 和 JWT Secret

# 4. 初始化数据库
npx drizzle-kit push

# 5. 启动开发服务器
npm run dev
```

打开 http://localhost:3000 即可使用。

## 🌐 部署到 Vercel（分享给朋友）

1. [导入此仓库到 Vercel](https://vercel.com/import)
2. 设置环境变量：
   - `DEEPSEEK_API_KEY`: 你的 DeepSeek API Key（[获取地址](https://platform.deepseek.com)）
   - `JWT_SECRET`: 随机字符串（用于加密会话）
3. 部署完成后获得 `bespell.vercel.app` 链接
4. 把链接分享给朋友！

> **注意**：Vercel 默认使用 SQLite，数据不持久。如需生产环境，建议配置 Vercel Postgres。

## 🛠 技术栈

- **前端**：Next.js 15 + React 19 + TypeScript + Tailwind CSS
- **动效**：Framer Motion
- **数据库**：SQLite (Drizzle ORM)
- **认证**：bcrypt + JWT (HttpOnly Cookie)
- **AI**：DeepSeek API (OpenAI 兼容)
- **部署**：Vercel

## 📁 项目结构

```
src/
├── app/                  # Next.js App Router
│   ├── api/              # API Routes
│   │   ├── auth/         # 注册/登录/登出
│   │   ├── courses/      # 课程 CRUD
│   │   ├── generate/     # AI 课程生成
│   │   └── progress/     # 进度保存
│   ├── course/[id]/      # 练习模式 + 完成页
│   ├── login/            # 登录页
│   ├── new/              # 新建课程页
│   └── register/         # 注册页
├── components/           # UI 组件
│   └── practice/         # 练习模式组件
├── db/                   # 数据库 Schema
├── hooks/                # 自定义 Hooks
│   └── use-practice-engine.ts
└── lib/                  # 工具库
    ├── ai.ts             # AI Prompt 构建
    ├── auth.ts           # JWT 工具
    └── password.ts       # 密码哈希
```
