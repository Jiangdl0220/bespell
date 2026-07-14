const presetCourses = [
  {
    "category": "日常对话",
    "title": "基础问候与自我介绍",
    "scene": "日常问候、自我介绍、简单寒暄对话场景",
    "difficulty": "A1",
    "sentences": [
      {
        "zh": "你好！",
        "en": "Hello!",
        "ipa": "/həˈloʊ/",
        "words": [
          {
            "en": "Hello",
            "zh": "你好"
          },
          {
            "en": "!",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你好吗？",
        "en": "How are you?",
        "ipa": "/haʊ ɑːr juː/",
        "words": [
          {
            "en": "How",
            "zh": "怎样"
          },
          {
            "en": "are",
            "zh": "是"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我很好，谢谢。",
        "en": "I am fine, thank you.",
        "ipa": "/aɪ æm faɪn θæŋk juː/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "是"
          },
          {
            "en": "fine",
            "zh": "好的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "thank",
            "zh": "感谢"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你呢？",
        "en": "And you?",
        "ipa": "/ænd juː/",
        "words": [
          {
            "en": "And",
            "zh": "和"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我也很好。",
        "en": "I am fine too.",
        "ipa": "/aɪ æm faɪn tuː/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "是"
          },
          {
            "en": "fine",
            "zh": "好的"
          },
          {
            "en": "too",
            "zh": "也"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你叫什么名字？",
        "en": "What is your name?",
        "ipa": "/wʌt ɪz jɔːr neɪm/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "你的"
          },
          {
            "en": "name",
            "zh": "名字"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我叫李明。",
        "en": "My name is Li Ming.",
        "ipa": "/maɪ neɪm ɪz liː mɪŋ/",
        "words": [
          {
            "en": "My",
            "zh": "我的"
          },
          {
            "en": "name",
            "zh": "名字"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "Li",
            "zh": "李"
          },
          {
            "en": "Ming",
            "zh": "明"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "很高兴认识你。",
        "en": "Nice to meet you.",
        "ipa": "/naɪs tuː miːt juː/",
        "words": [
          {
            "en": "Nice",
            "zh": "高兴的"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "meet",
            "zh": "遇见"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我也很高兴认识你。",
        "en": "Nice to meet you too.",
        "ipa": "/naɪs tuː miːt juː tuː/",
        "words": [
          {
            "en": "Nice",
            "zh": "高兴的"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "meet",
            "zh": "遇见"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "too",
            "zh": "也"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你来自哪里？",
        "en": "Where are you from?",
        "ipa": "/wer ɑːr juː frʌm/",
        "words": [
          {
            "en": "Where",
            "zh": "哪里"
          },
          {
            "en": "are",
            "zh": "是"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "from",
            "zh": "来自"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我来自中国。",
        "en": "I am from China.",
        "ipa": "/aɪ æm frʌm ˈtʃaɪnə/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "是"
          },
          {
            "en": "from",
            "zh": "来自"
          },
          {
            "en": "China",
            "zh": "中国"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你住在哪里？",
        "en": "Where do you live?",
        "ipa": "/wer duː juː lɪv/",
        "words": [
          {
            "en": "Where",
            "zh": "哪里"
          },
          {
            "en": "do",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "live",
            "zh": "居住"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我住在北京。",
        "en": "I live in Beijing.",
        "ipa": "/aɪ lɪv ɪn ˌbeɪˈdʒɪŋ/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "live",
            "zh": "居住"
          },
          {
            "en": "in",
            "zh": "在...里"
          },
          {
            "en": "Beijing",
            "zh": "北京"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你多大了？",
        "en": "How old are you?",
        "ipa": "/haʊ oʊld ɑːr juː/",
        "words": [
          {
            "en": "How",
            "zh": "怎样"
          },
          {
            "en": "old",
            "zh": "老的"
          },
          {
            "en": "are",
            "zh": "是"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我二十五岁。",
        "en": "I am twenty-five years old.",
        "ipa": "/aɪ æm ˈtwɛnti faɪv jɪrz oʊld/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "是"
          },
          {
            "en": "twenty-five",
            "zh": "二十五"
          },
          {
            "en": "years",
            "zh": "年"
          },
          {
            "en": "old",
            "zh": "老的"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你做什么工作？",
        "en": "What do you do?",
        "ipa": "/wʌt duː juː duː/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "do",
            "zh": "做"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "do",
            "zh": "做"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我是学生。",
        "en": "I am a student.",
        "ipa": "/aɪ æm ə ˈstjuːdənt/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "是"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "student",
            "zh": "学生"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你在哪里学习？",
        "en": "Where do you study?",
        "ipa": "/wer duː juː ˈstʌdi/",
        "words": [
          {
            "en": "Where",
            "zh": "哪里"
          },
          {
            "en": "do",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "study",
            "zh": "学习"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我在大学学习。",
        "en": "I study at a university.",
        "ipa": "/aɪ ˈstʌdi æt ə ˌjuːnɪˈvɜːrsəti/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "study",
            "zh": "学习"
          },
          {
            "en": "at",
            "zh": "在"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "university",
            "zh": "大学"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你学什么？",
        "en": "What do you study?",
        "ipa": "/wʌt duː juː ˈstʌdi/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "do",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "study",
            "zh": "学习"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我学英语。",
        "en": "I study English.",
        "ipa": "/aɪ ˈstʌdi ˈɪŋɡlɪʃ/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "study",
            "zh": "学习"
          },
          {
            "en": "English",
            "zh": "英语"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你会说英语吗？",
        "en": "Do you speak English?",
        "ipa": "/duː juː spiːk ˈɪŋɡlɪʃ/",
        "words": [
          {
            "en": "Do",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "speak",
            "zh": "说"
          },
          {
            "en": "English",
            "zh": "英语"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我会说一点英语。",
        "en": "I speak a little English.",
        "ipa": "/aɪ spiːk ə ˈlɪtl ˈɪŋɡlɪʃ/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "speak",
            "zh": "说"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "little",
            "zh": "一点"
          },
          {
            "en": "English",
            "zh": "英语"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你喜欢什么？",
        "en": "What do you like?",
        "ipa": "/wʌt duː juː laɪk/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "do",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "like",
            "zh": "喜欢"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我喜欢读书。",
        "en": "I like reading books.",
        "ipa": "/aɪ laɪk ˈriːdɪŋ bʊks/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "like",
            "zh": "喜欢"
          },
          {
            "en": "reading",
            "zh": "阅读"
          },
          {
            "en": "books",
            "zh": "书"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你也喜欢音乐吗？",
        "en": "Do you like music too?",
        "ipa": "/duː juː laɪk ˈmjuːzɪk tuː/",
        "words": [
          {
            "en": "Do",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "like",
            "zh": "喜欢"
          },
          {
            "en": "music",
            "zh": "音乐"
          },
          {
            "en": "too",
            "zh": "也"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，我喜欢音乐。",
        "en": "Yes, I like music.",
        "ipa": "/jes aɪ laɪk ˈmjuːzɪk/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "like",
            "zh": "喜欢"
          },
          {
            "en": "music",
            "zh": "音乐"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你最喜欢的颜色是什么？",
        "en": "What is your favorite color?",
        "ipa": "/wʌt ɪz jɔːr ˈfeɪvərɪt ˈkʌlər/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "你的"
          },
          {
            "en": "favorite",
            "zh": "最喜欢的"
          },
          {
            "en": "color",
            "zh": "颜色"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我最喜欢的颜色是蓝色。",
        "en": "My favorite color is blue.",
        "ipa": "/maɪ ˈfeɪvərɪt ˈkʌlər ɪz bluː/",
        "words": [
          {
            "en": "My",
            "zh": "我的"
          },
          {
            "en": "favorite",
            "zh": "最喜欢的"
          },
          {
            "en": "color",
            "zh": "颜色"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "blue",
            "zh": "蓝色"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "今天天气很好。",
        "en": "The weather is nice today.",
        "ipa": "/ðə ˈweðər ɪz naɪs təˈdeɪ/",
        "words": [
          {
            "en": "The",
            "zh": "这个"
          },
          {
            "en": "weather",
            "zh": "天气"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "nice",
            "zh": "好的"
          },
          {
            "en": "today",
            "zh": "今天"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，天气很好。",
        "en": "Yes, it is nice.",
        "ipa": "/jes ɪt ɪz naɪs/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "it",
            "zh": "它"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "nice",
            "zh": "好的"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你喜欢今天吗？",
        "en": "Do you like today?",
        "ipa": "/duː juː laɪk təˈdeɪ/",
        "words": [
          {
            "en": "Do",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "like",
            "zh": "喜欢"
          },
          {
            "en": "today",
            "zh": "今天"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我喜欢今天。",
        "en": "I like today.",
        "ipa": "/aɪ laɪk təˈdeɪ/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "like",
            "zh": "喜欢"
          },
          {
            "en": "today",
            "zh": "今天"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你饿了吗？",
        "en": "Are you hungry?",
        "ipa": "/ɑːr juː ˈhʌŋɡri/",
        "words": [
          {
            "en": "Are",
            "zh": "是"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "hungry",
            "zh": "饿的"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，我饿了。",
        "en": "Yes, I am hungry.",
        "ipa": "/jes aɪ æm ˈhʌŋɡri/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "是"
          },
          {
            "en": "hungry",
            "zh": "饿的"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你想吃点什么？",
        "en": "What do you want to eat?",
        "ipa": "/wʌt duː juː wɑːnt tuː iːt/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "do",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "eat",
            "zh": "吃"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我想吃米饭。",
        "en": "I want to eat rice.",
        "ipa": "/aɪ wɑːnt tuː iːt raɪs/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "eat",
            "zh": "吃"
          },
          {
            "en": "rice",
            "zh": "米饭"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你喝什么？",
        "en": "What do you drink?",
        "ipa": "/wʌt duː juː drɪŋk/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "do",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "drink",
            "zh": "喝"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我喝水。",
        "en": "I drink water.",
        "ipa": "/aɪ drɪŋk ˈwɔːtər/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "drink",
            "zh": "喝"
          },
          {
            "en": "water",
            "zh": "水"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你有兄弟姐妹吗？",
        "en": "Do you have brothers or sisters?",
        "ipa": "/duː juː hæv ˈbrʌðərz ɔːr ˈsɪstərz/",
        "words": [
          {
            "en": "Do",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "brothers",
            "zh": "兄弟"
          },
          {
            "en": "or",
            "zh": "或"
          },
          {
            "en": "sisters",
            "zh": "姐妹"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我有一个哥哥。",
        "en": "I have one brother.",
        "ipa": "/aɪ hæv wʌn ˈbrʌðər/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "one",
            "zh": "一个"
          },
          {
            "en": "brother",
            "zh": "兄弟"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "他多大了？",
        "en": "How old is he?",
        "ipa": "/haʊ oʊld ɪz hiː/",
        "words": [
          {
            "en": "How",
            "zh": "怎样"
          },
          {
            "en": "old",
            "zh": "老的"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "he",
            "zh": "他"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "他三十岁。",
        "en": "He is thirty years old.",
        "ipa": "/hiː ɪz ˈθɜːrti jɪrz oʊld/",
        "words": [
          {
            "en": "He",
            "zh": "他"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "thirty",
            "zh": "三十"
          },
          {
            "en": "years",
            "zh": "年"
          },
          {
            "en": "old",
            "zh": "老的"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你有宠物吗？",
        "en": "Do you have a pet?",
        "ipa": "/duː juː hæv ə pet/",
        "words": [
          {
            "en": "Do",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "pet",
            "zh": "宠物"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，我有一只猫。",
        "en": "Yes, I have a cat.",
        "ipa": "/jes aɪ hæv ə kæt/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "cat",
            "zh": "猫"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "猫叫什么名字？",
        "en": "What is the cat's name?",
        "ipa": "/wʌt ɪz ðə kæts neɪm/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "the",
            "zh": "这个"
          },
          {
            "en": "cat's",
            "zh": "猫的"
          },
          {
            "en": "name",
            "zh": "名字"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "它叫咪咪。",
        "en": "Its name is Mimi.",
        "ipa": "/ɪts neɪm ɪz ˈmiːmiː/",
        "words": [
          {
            "en": "Its",
            "zh": "它的"
          },
          {
            "en": "name",
            "zh": "名字"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "Mimi",
            "zh": "咪咪"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你早上几点起床？",
        "en": "What time do you get up in the morning?",
        "ipa": "/wʌt taɪm duː juː ɡet ʌp ɪn ðə ˈmɔːrnɪŋ/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "time",
            "zh": "时间"
          },
          {
            "en": "do",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "get",
            "zh": "得到"
          },
          {
            "en": "up",
            "zh": "向上"
          },
          {
            "en": "in",
            "zh": "在...里"
          },
          {
            "en": "the",
            "zh": "这个"
          },
          {
            "en": "morning",
            "zh": "早上"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我早上七点起床。",
        "en": "I get up at seven in the morning.",
        "ipa": "/aɪ ɡet ʌp æt ˈsɛvən ɪn ðə ˈmɔːrnɪŋ/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "get",
            "zh": "得到"
          },
          {
            "en": "up",
            "zh": "向上"
          },
          {
            "en": "at",
            "zh": "在"
          },
          {
            "en": "seven",
            "zh": "七"
          },
          {
            "en": "in",
            "zh": "在...里"
          },
          {
            "en": "the",
            "zh": "这个"
          },
          {
            "en": "morning",
            "zh": "早上"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你晚上几点睡觉？",
        "en": "What time do you go to bed at night?",
        "ipa": "/wʌt taɪm duː juː ɡoʊ tuː bed æt naɪt/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "time",
            "zh": "时间"
          },
          {
            "en": "do",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "go",
            "zh": "去"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "bed",
            "zh": "床"
          },
          {
            "en": "at",
            "zh": "在"
          },
          {
            "en": "night",
            "zh": "晚上"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我晚上十点睡觉。",
        "en": "I go to bed at ten at night.",
        "ipa": "/aɪ ɡoʊ tuː bed æt tɛn æt naɪt/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "go",
            "zh": "去"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "bed",
            "zh": "床"
          },
          {
            "en": "at",
            "zh": "在"
          },
          {
            "en": "ten",
            "zh": "十"
          },
          {
            "en": "at",
            "zh": "在"
          },
          {
            "en": "night",
            "zh": "晚上"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "再见！",
        "en": "Goodbye!",
        "ipa": "/ɡʊdˈbaɪ/",
        "words": [
          {
            "en": "Goodbye",
            "zh": "再见"
          },
          {
            "en": "!",
            "zh": ""
          }
        ]
      },
      {
        "zh": "明天见！",
        "en": "See you tomorrow!",
        "ipa": "/siː juː təˈmɑːroʊ/",
        "words": [
          {
            "en": "See",
            "zh": "看见"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "tomorrow",
            "zh": "明天"
          },
          {
            "en": "!",
            "zh": ""
          }
        ]
      }
    ],
    "sentenceCount": 53
  },
  {
    "category": "餐饮场景",
    "title": "餐厅点餐对话",
    "scene": "西餐厅点餐、服务员与顾客对话",
    "difficulty": "A2",
    "sentences": [
      {
        "zh": "欢迎来到我们的餐厅。",
        "en": "Welcome to our restaurant.",
        "ipa": "/ˈwɛlkəm tuː aʊər ˈrɛstərɒnt/",
        "words": [
          {
            "en": "Welcome",
            "zh": "欢迎"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "our",
            "zh": "我们的"
          },
          {
            "en": "restaurant",
            "zh": "餐厅"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请问您有预订吗？",
        "en": "Do you have a reservation?",
        "ipa": "/duː juː hæv ə ˌrɛzərˈveɪʃən/",
        "words": [
          {
            "en": "Do",
            "zh": ""
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "reservation",
            "zh": "预订"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，我预订了两人位。",
        "en": "Yes, I have a reservation for two.",
        "ipa": "/jɛs aɪ hæv ə ˌrɛzərˈveɪʃən fɔːr tuː/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "reservation",
            "zh": "预订"
          },
          {
            "en": "for",
            "zh": "为"
          },
          {
            "en": "two",
            "zh": "两位"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请这边走。",
        "en": "Please come this way.",
        "ipa": "/pliːz kʌm ðɪs weɪ/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "come",
            "zh": "来"
          },
          {
            "en": "this",
            "zh": "这个"
          },
          {
            "en": "way",
            "zh": "方向"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这是您的菜单。",
        "en": "Here is your menu.",
        "ipa": "/hɪər ɪz jɔːr ˈmɛnjuː/",
        "words": [
          {
            "en": "Here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "menu",
            "zh": "菜单"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您想喝点什么？",
        "en": "What would you like to drink?",
        "ipa": "/wɒt wʊd juː laɪk tuː drɪŋk/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "would",
            "zh": "会"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "like",
            "zh": "想要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "drink",
            "zh": "喝"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我想要一杯水。",
        "en": "I would like a glass of water.",
        "ipa": "/aɪ wʊd laɪk ə ɡlɑːs ɒv ˈwɔːtər/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "would",
            "zh": "会"
          },
          {
            "en": "like",
            "zh": "想要"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "glass",
            "zh": "玻璃杯"
          },
          {
            "en": "of",
            "zh": "的"
          },
          {
            "en": "water",
            "zh": "水"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您准备好点餐了吗？",
        "en": "Are you ready to order?",
        "ipa": "/ɑːr juː ˈrɛdi tuː ˈɔːrdər/",
        "words": [
          {
            "en": "Are",
            "zh": ""
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "ready",
            "zh": "准备好"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "order",
            "zh": "点餐"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，我准备好了。",
        "en": "Yes, I am ready.",
        "ipa": "/jɛs aɪ æm ˈrɛdi/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "是"
          },
          {
            "en": "ready",
            "zh": "准备好"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我想要一份沙拉。",
        "en": "I want a salad.",
        "ipa": "/aɪ wɒnt ə ˈsæləd/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "a",
            "zh": "一份"
          },
          {
            "en": "salad",
            "zh": "沙拉"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您想要哪种沙拉？",
        "en": "Which salad do you want?",
        "ipa": "/wɪtʃ ˈsæləd duː juː wɒnt/",
        "words": [
          {
            "en": "Which",
            "zh": "哪一种"
          },
          {
            "en": "salad",
            "zh": "沙拉"
          },
          {
            "en": "do",
            "zh": ""
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我要凯撒沙拉。",
        "en": "I want the Caesar salad.",
        "ipa": "/aɪ wɒnt ðə ˈsiːzər ˈsæləd/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "the",
            "zh": "这个"
          },
          {
            "en": "Caesar",
            "zh": "凯撒"
          },
          {
            "en": "salad",
            "zh": "沙拉"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您想要什么主菜？",
        "en": "What main dish do you want?",
        "ipa": "/wɒt meɪn dɪʃ duː juː wɒnt/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "main",
            "zh": "主要的"
          },
          {
            "en": "dish",
            "zh": "菜"
          },
          {
            "en": "do",
            "zh": ""
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我想要牛排。",
        "en": "I would like a steak.",
        "ipa": "/aɪ wʊd laɪk ə steɪk/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "would",
            "zh": "会"
          },
          {
            "en": "like",
            "zh": "想要"
          },
          {
            "en": "a",
            "zh": "一份"
          },
          {
            "en": "steak",
            "zh": "牛排"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您想要几分熟？",
        "en": "How do you like it cooked?",
        "ipa": "/haʊ duː juː laɪk ɪt kʊkt/",
        "words": [
          {
            "en": "How",
            "zh": "怎样"
          },
          {
            "en": "do",
            "zh": ""
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "like",
            "zh": "喜欢"
          },
          {
            "en": "it",
            "zh": "它"
          },
          {
            "en": "cooked",
            "zh": "烹饪"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我要五分熟。",
        "en": "I want it medium.",
        "ipa": "/aɪ wɒnt ɪt ˈmiːdiəm/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "it",
            "zh": "它"
          },
          {
            "en": "medium",
            "zh": "五分熟"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您要配什么配菜？",
        "en": "What side dish do you want?",
        "ipa": "/wɒt saɪd dɪʃ duː juː wɒnt/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "side",
            "zh": "配"
          },
          {
            "en": "dish",
            "zh": "菜"
          },
          {
            "en": "do",
            "zh": ""
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我要薯条。",
        "en": "I want French fries.",
        "ipa": "/aɪ wɒnt frɛntʃ fraɪz/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "French",
            "zh": "法式"
          },
          {
            "en": "fries",
            "zh": "薯条"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您还要别的吗？",
        "en": "Would you like anything else?",
        "ipa": "/wʊd juː laɪk ˈɛniθɪŋ ɛls/",
        "words": [
          {
            "en": "Would",
            "zh": "会"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "like",
            "zh": "想要"
          },
          {
            "en": "anything",
            "zh": "任何东西"
          },
          {
            "en": "else",
            "zh": "别的"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "不，就这些。",
        "en": "No, that is all.",
        "ipa": "/noʊ ðæt ɪz ɔːl/",
        "words": [
          {
            "en": "No",
            "zh": "不"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "that",
            "zh": "那"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "all",
            "zh": "全部"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "好的，我马上为您下单。",
        "en": "Okay, I will put your order now.",
        "ipa": "/ˌoʊˈkeɪ aɪ wɪl pʊt jɔːr ˈɔːrdər naʊ/",
        "words": [
          {
            "en": "Okay",
            "zh": "好的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "will",
            "zh": "将"
          },
          {
            "en": "put",
            "zh": "放"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "order",
            "zh": "订单"
          },
          {
            "en": "now",
            "zh": "现在"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请稍等。",
        "en": "Please wait a moment.",
        "ipa": "/pliːz weɪt ə ˈmoʊmənt/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "wait",
            "zh": "等"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "moment",
            "zh": "片刻"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这是您的沙拉。",
        "en": "Here is your salad.",
        "ipa": "/hɪər ɪz jɔːr ˈsæləd/",
        "words": [
          {
            "en": "Here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "salad",
            "zh": "沙拉"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请慢用。",
        "en": "Please enjoy your meal.",
        "ipa": "/pliːz ɪnˈdʒɔɪ jɔːr miːl/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "enjoy",
            "zh": "享用"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "meal",
            "zh": "餐"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "谢谢。",
        "en": "Thank you.",
        "ipa": "/θæŋk juː/",
        "words": [
          {
            "en": "Thank",
            "zh": "谢谢"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "牛排味道怎么样？",
        "en": "How is the steak?",
        "ipa": "/haʊ ɪz ðə steɪk/",
        "words": [
          {
            "en": "How",
            "zh": "怎样"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "the",
            "zh": "这个"
          },
          {
            "en": "steak",
            "zh": "牛排"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "牛排很好吃。",
        "en": "The steak is very good.",
        "ipa": "/ðə steɪk ɪz ˈvɛri ɡʊd/",
        "words": [
          {
            "en": "The",
            "zh": "这个"
          },
          {
            "en": "steak",
            "zh": "牛排"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "very",
            "zh": "非常"
          },
          {
            "en": "good",
            "zh": "好"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您需要加酱汁吗？",
        "en": "Do you need some sauce?",
        "ipa": "/duː juː niːd sʌm sɔːs/",
        "words": [
          {
            "en": "Do",
            "zh": ""
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "some",
            "zh": "一些"
          },
          {
            "en": "sauce",
            "zh": "酱汁"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，请给我黑胡椒酱。",
        "en": "Yes, please give me black pepper sauce.",
        "ipa": "/jɛs pliːz ɡɪv miː blæk ˈpɛpər sɔːs/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "please",
            "zh": "请"
          },
          {
            "en": "give",
            "zh": "给"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": "black",
            "zh": "黑"
          },
          {
            "en": "pepper",
            "zh": "胡椒"
          },
          {
            "en": "sauce",
            "zh": "酱"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这是您的黑胡椒酱。",
        "en": "Here is your black pepper sauce.",
        "ipa": "/hɪər ɪz jɔːr blæk ˈpɛpər sɔːs/",
        "words": [
          {
            "en": "Here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "black",
            "zh": "黑"
          },
          {
            "en": "pepper",
            "zh": "胡椒"
          },
          {
            "en": "sauce",
            "zh": "酱"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您想要甜点吗？",
        "en": "Would you like a dessert?",
        "ipa": "/wʊd juː laɪk ə dɪˈzɜːrt/",
        "words": [
          {
            "en": "Would",
            "zh": "会"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "like",
            "zh": "想要"
          },
          {
            "en": "a",
            "zh": "一份"
          },
          {
            "en": "dessert",
            "zh": "甜点"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，我想要巧克力蛋糕。",
        "en": "Yes, I want a chocolate cake.",
        "ipa": "/jɛs aɪ wɒnt ə ˈtʃɒklət keɪk/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "a",
            "zh": "一份"
          },
          {
            "en": "chocolate",
            "zh": "巧克力"
          },
          {
            "en": "cake",
            "zh": "蛋糕"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您要喝咖啡吗？",
        "en": "Do you want some coffee?",
        "ipa": "/duː juː wɒnt sʌm ˈkɒfi/",
        "words": [
          {
            "en": "Do",
            "zh": ""
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "some",
            "zh": "一些"
          },
          {
            "en": "coffee",
            "zh": "咖啡"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "不，谢谢，我只要茶。",
        "en": "No, thank you, I only want tea.",
        "ipa": "/noʊ θæŋk juː aɪ ˈoʊnli wɒnt tiː/",
        "words": [
          {
            "en": "No",
            "zh": "不"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "thank",
            "zh": "谢谢"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "only",
            "zh": "只"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "tea",
            "zh": "茶"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "好的，马上来。",
        "en": "Okay, coming right away.",
        "ipa": "/ˌoʊˈkeɪ ˈkʌmɪŋ raɪt əˈweɪ/",
        "words": [
          {
            "en": "Okay",
            "zh": "好的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "coming",
            "zh": "来"
          },
          {
            "en": "right",
            "zh": "马上"
          },
          {
            "en": "away",
            "zh": "离开"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这是您的茶和蛋糕。",
        "en": "Here is your tea and cake.",
        "ipa": "/hɪər ɪz jɔːr tiː ænd keɪk/",
        "words": [
          {
            "en": "Here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "tea",
            "zh": "茶"
          },
          {
            "en": "and",
            "zh": "和"
          },
          {
            "en": "cake",
            "zh": "蛋糕"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "蛋糕非常好吃。",
        "en": "The cake is very delicious.",
        "ipa": "/ðə keɪk ɪz ˈvɛri dɪˈlɪʃəs/",
        "words": [
          {
            "en": "The",
            "zh": "这个"
          },
          {
            "en": "cake",
            "zh": "蛋糕"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "very",
            "zh": "非常"
          },
          {
            "en": "delicious",
            "zh": "美味"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您还需要什么吗？",
        "en": "Do you need anything else?",
        "ipa": "/duː juː niːd ˈɛniθɪŋ ɛls/",
        "words": [
          {
            "en": "Do",
            "zh": ""
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "anything",
            "zh": "任何东西"
          },
          {
            "en": "else",
            "zh": "别的"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "不用了，谢谢。",
        "en": "No, thank you.",
        "ipa": "/noʊ θæŋk juː/",
        "words": [
          {
            "en": "No",
            "zh": "不"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "thank",
            "zh": "谢谢"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "可以给我账单吗？",
        "en": "Can I have the bill, please?",
        "ipa": "/kæn aɪ hæv ðə bɪl pliːz/",
        "words": [
          {
            "en": "Can",
            "zh": "能"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "the",
            "zh": "这个"
          },
          {
            "en": "bill",
            "zh": "账单"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "please",
            "zh": "请"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "当然，这是您的账单。",
        "en": "Of course, here is your bill.",
        "ipa": "/ɒv kɔːrs hɪər ɪz jɔːr bɪl/",
        "words": [
          {
            "en": "Of",
            "zh": ""
          },
          {
            "en": "course",
            "zh": "当然"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "bill",
            "zh": "账单"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "总共是三十美元。",
        "en": "The total is thirty dollars.",
        "ipa": "/ðə ˈtoʊtəl ɪz ˈθɜːrti ˈdɑːlərz/",
        "words": [
          {
            "en": "The",
            "zh": "这个"
          },
          {
            "en": "total",
            "zh": "总共"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "thirty",
            "zh": "三十"
          },
          {
            "en": "dollars",
            "zh": "美元"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我可以用信用卡支付吗？",
        "en": "Can I pay by credit card?",
        "ipa": "/kæn aɪ peɪ baɪ ˈkrɛdɪt kɑːrd/",
        "words": [
          {
            "en": "Can",
            "zh": "能"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "pay",
            "zh": "支付"
          },
          {
            "en": "by",
            "zh": "用"
          },
          {
            "en": "credit",
            "zh": "信用"
          },
          {
            "en": "card",
            "zh": "卡"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，我们接受信用卡。",
        "en": "Yes, we accept credit cards.",
        "ipa": "/jɛs wiː əkˈsɛpt ˈkrɛdɪt kɑːrdz/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "we",
            "zh": "我们"
          },
          {
            "en": "accept",
            "zh": "接受"
          },
          {
            "en": "credit",
            "zh": "信用"
          },
          {
            "en": "cards",
            "zh": "卡"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请在这里签名。",
        "en": "Please sign here.",
        "ipa": "/pliːz saɪn hɪər/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "sign",
            "zh": "签名"
          },
          {
            "en": "here",
            "zh": "这里"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这是您的收据。",
        "en": "Here is your receipt.",
        "ipa": "/hɪər ɪz jɔːr rɪˈsiːt/",
        "words": [
          {
            "en": "Here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "receipt",
            "zh": "收据"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "非常感谢您的光临。",
        "en": "Thank you very much for coming.",
        "ipa": "/θæŋk juː ˈvɛri mʌtʃ fɔːr ˈkʌmɪŋ/",
        "words": [
          {
            "en": "Thank",
            "zh": "谢谢"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "very",
            "zh": "非常"
          },
          {
            "en": "much",
            "zh": "多"
          },
          {
            "en": "for",
            "zh": "为了"
          },
          {
            "en": "coming",
            "zh": "光临"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "祝您有美好的一天。",
        "en": "Have a nice day.",
        "ipa": "/hæv ə naɪs deɪ/",
        "words": [
          {
            "en": "Have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "nice",
            "zh": "美好的"
          },
          {
            "en": "day",
            "zh": "一天"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "再见，欢迎再来。",
        "en": "Goodbye, and come again.",
        "ipa": "/ɡʊdˈbaɪ ænd kʌm əˈɡɛn/",
        "words": [
          {
            "en": "Goodbye",
            "zh": "再见"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "and",
            "zh": "和"
          },
          {
            "en": "come",
            "zh": "来"
          },
          {
            "en": "again",
            "zh": "再"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "再见，谢谢。",
        "en": "Goodbye, thank you.",
        "ipa": "/ɡʊdˈbaɪ θæŋk juː/",
        "words": [
          {
            "en": "Goodbye",
            "zh": "再见"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "thank",
            "zh": "谢谢"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      }
    ],
    "sentenceCount": 50
  },
  {
    "category": "购物场景",
    "title": "商场购物对话",
    "scene": "服装店、超市等购物对话场景",
    "difficulty": "A2",
    "sentences": [
      {
        "zh": "你好！我想买一件T恤。",
        "en": "Hello! I want to buy a T-shirt.",
        "ipa": "/həˈloʊ aɪ wɑnt tə baɪ ə ˈtiːʃɜːrt/",
        "words": [
          {
            "en": "Hello",
            "zh": "你好"
          },
          {
            "en": "!",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "buy",
            "zh": "买"
          },
          {
            "en": "a",
            "zh": "一件"
          },
          {
            "en": "T-shirt",
            "zh": "T恤"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这件T恤多少钱？",
        "en": "How much is this T-shirt?",
        "ipa": "/haʊ mʌtʃ ɪz ðɪs ˈtiːʃɜːrt/",
        "words": [
          {
            "en": "How",
            "zh": "多少"
          },
          {
            "en": "much",
            "zh": "多少钱"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "this",
            "zh": "这件"
          },
          {
            "en": "T-shirt",
            "zh": "T恤"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这件T恤五十元。",
        "en": "This T-shirt is fifty yuan.",
        "ipa": "/ðɪs ˈtiːʃɜːrt ɪz ˈfɪfti juˈɑːn/",
        "words": [
          {
            "en": "This",
            "zh": "这件"
          },
          {
            "en": "T-shirt",
            "zh": "T恤"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "fifty",
            "zh": "五十"
          },
          {
            "en": "yuan",
            "zh": "元"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "有更便宜的吗？",
        "en": "Do you have a cheaper one?",
        "ipa": "/duː juː hæv ə ˈtʃiːpər wʌn/",
        "words": [
          {
            "en": "Do",
            "zh": "（助动词）"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一件"
          },
          {
            "en": "cheaper",
            "zh": "更便宜的"
          },
          {
            "en": "one",
            "zh": "一件"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "有，这件三十五元。",
        "en": "Yes, this one is thirty-five yuan.",
        "ipa": "/jɛs ðɪs wʌn ɪz ˈθɜːrti faɪv juˈɑːn/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "this",
            "zh": "这件"
          },
          {
            "en": "one",
            "zh": "一件"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "thirty-five",
            "zh": "三十五"
          },
          {
            "en": "yuan",
            "zh": "元"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我可以试穿一下吗？",
        "en": "Can I try it on?",
        "ipa": "/kæn aɪ traɪ ɪt ɒn/",
        "words": [
          {
            "en": "Can",
            "zh": "可以"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "try",
            "zh": "试穿"
          },
          {
            "en": "it",
            "zh": "它"
          },
          {
            "en": "on",
            "zh": "上"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "当然，试衣间在那边。",
        "en": "Of course, the fitting room is over there.",
        "ipa": "/ɒv kɔːrs ðə ˈfɪtɪŋ ruːm ɪz ˈoʊvər ðɛr/",
        "words": [
          {
            "en": "Of",
            "zh": "的"
          },
          {
            "en": "course",
            "zh": "当然"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "the",
            "zh": "那"
          },
          {
            "en": "fitting",
            "zh": "试穿"
          },
          {
            "en": "room",
            "zh": "房间"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "over",
            "zh": "在"
          },
          {
            "en": "there",
            "zh": "那边"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这件衣服太大了。",
        "en": "This shirt is too big.",
        "ipa": "/ðɪs ʃɜːrt ɪz tuː bɪɡ/",
        "words": [
          {
            "en": "This",
            "zh": "这件"
          },
          {
            "en": "shirt",
            "zh": "衬衫"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "too",
            "zh": "太"
          },
          {
            "en": "big",
            "zh": "大"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "有小一点的吗？",
        "en": "Do you have a smaller size?",
        "ipa": "/duː juː hæv ə ˈsmɔːlər saɪz/",
        "words": [
          {
            "en": "Do",
            "zh": "（助动词）"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "smaller",
            "zh": "更小的"
          },
          {
            "en": "size",
            "zh": "尺寸"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "有，这是中号。",
        "en": "Yes, here is a medium size.",
        "ipa": "/jɛs hɪr ɪz ə ˈmiːdiəm saɪz/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "a",
            "zh": "一件"
          },
          {
            "en": "medium",
            "zh": "中号"
          },
          {
            "en": "size",
            "zh": "尺寸"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这件很合身。",
        "en": "This one fits well.",
        "ipa": "/ðɪs wʌn fɪts wɛl/",
        "words": [
          {
            "en": "This",
            "zh": "这件"
          },
          {
            "en": "one",
            "zh": "一件"
          },
          {
            "en": "fits",
            "zh": "合身"
          },
          {
            "en": "well",
            "zh": "很好"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我要买这件。",
        "en": "I will take this one.",
        "ipa": "/aɪ wɪl teɪk ðɪs wʌn/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "will",
            "zh": "将要"
          },
          {
            "en": "take",
            "zh": "拿"
          },
          {
            "en": "this",
            "zh": "这件"
          },
          {
            "en": "one",
            "zh": "一件"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你付现金还是刷卡？",
        "en": "Do you pay cash or by card?",
        "ipa": "/duː juː peɪ kæʃ ɔːr baɪ kɑːrd/",
        "words": [
          {
            "en": "Do",
            "zh": "（助动词）"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "pay",
            "zh": "支付"
          },
          {
            "en": "cash",
            "zh": "现金"
          },
          {
            "en": "or",
            "zh": "还是"
          },
          {
            "en": "by",
            "zh": "用"
          },
          {
            "en": "card",
            "zh": "卡"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我付现金。",
        "en": "I pay cash.",
        "ipa": "/aɪ peɪ kæʃ/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "pay",
            "zh": "支付"
          },
          {
            "en": "cash",
            "zh": "现金"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这是你的找零和收据。",
        "en": "Here is your change and receipt.",
        "ipa": "/hɪr ɪz jɔːr tʃeɪndʒ ænd rɪˈsiːt/",
        "words": [
          {
            "en": "Here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "你的"
          },
          {
            "en": "change",
            "zh": "找零"
          },
          {
            "en": "and",
            "zh": "和"
          },
          {
            "en": "receipt",
            "zh": "收据"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "谢谢，再见！",
        "en": "Thank you, goodbye!",
        "ipa": "/θæŋk juː ɡʊdˈbaɪ/",
        "words": [
          {
            "en": "Thank",
            "zh": "谢谢"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "goodbye",
            "zh": "再见"
          },
          {
            "en": "!",
            "zh": ""
          }
        ]
      },
      {
        "zh": "欢迎下次光临。",
        "en": "Welcome back again.",
        "ipa": "/ˈwɛlkəm bæk əˈɡɛn/",
        "words": [
          {
            "en": "Welcome",
            "zh": "欢迎"
          },
          {
            "en": "back",
            "zh": "回来"
          },
          {
            "en": "again",
            "zh": "再次"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "现在我们去超市吧。",
        "en": "Now let's go to the supermarket.",
        "ipa": "/naʊ lɛts ɡoʊ tuː ðə ˈsuːpərˌmɑːrkɪt/",
        "words": [
          {
            "en": "Now",
            "zh": "现在"
          },
          {
            "en": "let's",
            "zh": "让我们"
          },
          {
            "en": "go",
            "zh": "去"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "the",
            "zh": "那"
          },
          {
            "en": "supermarket",
            "zh": "超市"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我需要买一些水果。",
        "en": "I need to buy some fruit.",
        "ipa": "/aɪ niːd tuː baɪ sʌm fruːt/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "buy",
            "zh": "买"
          },
          {
            "en": "some",
            "zh": "一些"
          },
          {
            "en": "fruit",
            "zh": "水果"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "苹果多少钱一斤？",
        "en": "How much are the apples per jin?",
        "ipa": "/haʊ mʌtʃ ɑːr ði ˈæpəlz pɜːr dʒɪn/",
        "words": [
          {
            "en": "How",
            "zh": "多少"
          },
          {
            "en": "much",
            "zh": "多少钱"
          },
          {
            "en": "are",
            "zh": "是"
          },
          {
            "en": "the",
            "zh": "这些"
          },
          {
            "en": "apples",
            "zh": "苹果"
          },
          {
            "en": "per",
            "zh": "每"
          },
          {
            "en": "jin",
            "zh": "斤"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "苹果六元一斤。",
        "en": "Apples are six yuan per jin.",
        "ipa": "/ˈæpəlz ɑːr sɪks juˈɑːn pɜːr dʒɪn/",
        "words": [
          {
            "en": "Apples",
            "zh": "苹果"
          },
          {
            "en": "are",
            "zh": "是"
          },
          {
            "en": "six",
            "zh": "六"
          },
          {
            "en": "yuan",
            "zh": "元"
          },
          {
            "en": "per",
            "zh": "每"
          },
          {
            "en": "jin",
            "zh": "斤"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请给我称两斤苹果。",
        "en": "Please weigh two jins of apples for me.",
        "ipa": "/pliːz weɪ tuː dʒɪnz ɒv ˈæpəlz fɔːr miː/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "weigh",
            "zh": "称重"
          },
          {
            "en": "two",
            "zh": "两"
          },
          {
            "en": "jins",
            "zh": "斤"
          },
          {
            "en": "of",
            "zh": "的"
          },
          {
            "en": "apples",
            "zh": "苹果"
          },
          {
            "en": "for",
            "zh": "给"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "还要别的吗？",
        "en": "Do you need anything else?",
        "ipa": "/duː juː niːd ˈɛniθɪŋ ɛls/",
        "words": [
          {
            "en": "Do",
            "zh": "（助动词）"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "anything",
            "zh": "任何东西"
          },
          {
            "en": "else",
            "zh": "别的"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我还要买一瓶牛奶。",
        "en": "I also want to buy a bottle of milk.",
        "ipa": "/aɪ ˈɔːlsoʊ wɑnt tuː baɪ ə ˈbɒtəl ɒv mɪlk/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "also",
            "zh": "还"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "buy",
            "zh": "买"
          },
          {
            "en": "a",
            "zh": "一瓶"
          },
          {
            "en": "bottle",
            "zh": "瓶"
          },
          {
            "en": "of",
            "zh": "的"
          },
          {
            "en": "milk",
            "zh": "牛奶"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "牛奶在那边冷柜里。",
        "en": "The milk is in the fridge over there.",
        "ipa": "/ðə mɪlk ɪz ɪn ðə frɪdʒ ˈoʊvər ðɛr/",
        "words": [
          {
            "en": "The",
            "zh": "那"
          },
          {
            "en": "milk",
            "zh": "牛奶"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "in",
            "zh": "在"
          },
          {
            "en": "the",
            "zh": "那"
          },
          {
            "en": "fridge",
            "zh": "冰箱"
          },
          {
            "en": "over",
            "zh": "在"
          },
          {
            "en": "there",
            "zh": "那边"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这瓶牛奶多少钱？",
        "en": "How much is this bottle of milk?",
        "ipa": "/haʊ mʌtʃ ɪz ðɪs ˈbɒtəl ɒv mɪlk/",
        "words": [
          {
            "en": "How",
            "zh": "多少"
          },
          {
            "en": "much",
            "zh": "多少钱"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "this",
            "zh": "这瓶"
          },
          {
            "en": "bottle",
            "zh": "瓶"
          },
          {
            "en": "of",
            "zh": "的"
          },
          {
            "en": "milk",
            "zh": "牛奶"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "十五元一瓶。",
        "en": "Fifteen yuan per bottle.",
        "ipa": "/fɪfˈtiːn juˈɑːn pɜːr ˈbɒtəl/",
        "words": [
          {
            "en": "Fifteen",
            "zh": "十五"
          },
          {
            "en": "yuan",
            "zh": "元"
          },
          {
            "en": "per",
            "zh": "每"
          },
          {
            "en": "bottle",
            "zh": "瓶"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我要两瓶。",
        "en": "I will take two bottles.",
        "ipa": "/aɪ wɪl teɪk tuː ˈbɒtəlz/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "will",
            "zh": "将要"
          },
          {
            "en": "take",
            "zh": "拿"
          },
          {
            "en": "two",
            "zh": "两"
          },
          {
            "en": "bottles",
            "zh": "瓶"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请问面包在哪里？",
        "en": "Excuse me, where is the bread?",
        "ipa": "/ɪkˈskjuːz miː wɛr ɪz ðə brɛd/",
        "words": [
          {
            "en": "Excuse",
            "zh": "打扰"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "where",
            "zh": "哪里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "the",
            "zh": "那"
          },
          {
            "en": "bread",
            "zh": "面包"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "面包在第二个货架。",
        "en": "The bread is on the second shelf.",
        "ipa": "/ðə brɛd ɪz ɒn ðə ˈsɛkənd ʃɛlf/",
        "words": [
          {
            "en": "The",
            "zh": "那"
          },
          {
            "en": "bread",
            "zh": "面包"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "on",
            "zh": "在"
          },
          {
            "en": "the",
            "zh": "那"
          },
          {
            "en": "second",
            "zh": "第二个"
          },
          {
            "en": "shelf",
            "zh": "货架"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这个面包新鲜吗？",
        "en": "Is this bread fresh?",
        "ipa": "/ɪz ðɪs brɛd frɛʃ/",
        "words": [
          {
            "en": "Is",
            "zh": "是"
          },
          {
            "en": "this",
            "zh": "这个"
          },
          {
            "en": "bread",
            "zh": "面包"
          },
          {
            "en": "fresh",
            "zh": "新鲜"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，今天刚做的。",
        "en": "Yes, it was made today.",
        "ipa": "/jɛs ɪt wʌz meɪd təˈdeɪ/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "it",
            "zh": "它"
          },
          {
            "en": "was",
            "zh": "是"
          },
          {
            "en": "made",
            "zh": "做的"
          },
          {
            "en": "today",
            "zh": "今天"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我要一个面包。",
        "en": "I will take one bread.",
        "ipa": "/aɪ wɪl teɪk wʌn brɛd/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "will",
            "zh": "将要"
          },
          {
            "en": "take",
            "zh": "拿"
          },
          {
            "en": "one",
            "zh": "一个"
          },
          {
            "en": "bread",
            "zh": "面包"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我们还需要鸡蛋吗？",
        "en": "Do we also need eggs?",
        "ipa": "/duː wiː ˈɔːlsoʊ niːd ɛɡz/",
        "words": [
          {
            "en": "Do",
            "zh": "（助动词）"
          },
          {
            "en": "we",
            "zh": "我们"
          },
          {
            "en": "also",
            "zh": "还"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "eggs",
            "zh": "鸡蛋"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，家里没有鸡蛋了。",
        "en": "Yes, we have no eggs at home.",
        "ipa": "/jɛs wiː hæv noʊ ɛɡz æt hoʊm/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "we",
            "zh": "我们"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "no",
            "zh": "没有"
          },
          {
            "en": "eggs",
            "zh": "鸡蛋"
          },
          {
            "en": "at",
            "zh": "在"
          },
          {
            "en": "home",
            "zh": "家"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "鸡蛋一盒多少钱？",
        "en": "How much is a box of eggs?",
        "ipa": "/haʊ mʌtʃ ɪz ə bɒks ɒv ɛɡz/",
        "words": [
          {
            "en": "How",
            "zh": "多少"
          },
          {
            "en": "much",
            "zh": "多少钱"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "a",
            "zh": "一"
          },
          {
            "en": "box",
            "zh": "盒"
          },
          {
            "en": "of",
            "zh": "的"
          },
          {
            "en": "eggs",
            "zh": "鸡蛋"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "一盒鸡蛋十二元。",
        "en": "A box of eggs is twelve yuan.",
        "ipa": "/ə bɒks ɒv ɛɡz ɪz twɛlv juˈɑːn/",
        "words": [
          {
            "en": "A",
            "zh": "一"
          },
          {
            "en": "box",
            "zh": "盒"
          },
          {
            "en": "of",
            "zh": "的"
          },
          {
            "en": "eggs",
            "zh": "鸡蛋"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "twelve",
            "zh": "十二"
          },
          {
            "en": "yuan",
            "zh": "元"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我要买一盒。",
        "en": "I want to buy one box.",
        "ipa": "/aɪ wɑnt tuː baɪ wʌn bɒks/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "buy",
            "zh": "买"
          },
          {
            "en": "one",
            "zh": "一"
          },
          {
            "en": "box",
            "zh": "盒"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我们还要买饮料吗？",
        "en": "Do we also need to buy drinks?",
        "ipa": "/duː wiː ˈɔːlsoʊ niːd tuː baɪ drɪŋks/",
        "words": [
          {
            "en": "Do",
            "zh": "（助动词）"
          },
          {
            "en": "we",
            "zh": "我们"
          },
          {
            "en": "also",
            "zh": "还"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "buy",
            "zh": "买"
          },
          {
            "en": "drinks",
            "zh": "饮料"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "买两瓶水吧。",
        "en": "Let's buy two bottles of water.",
        "ipa": "/lɛts baɪ tuː ˈbɒtəlz ɒv ˈwɔːtər/",
        "words": [
          {
            "en": "Let's",
            "zh": "让我们"
          },
          {
            "en": "buy",
            "zh": "买"
          },
          {
            "en": "two",
            "zh": "两"
          },
          {
            "en": "bottles",
            "zh": "瓶"
          },
          {
            "en": "of",
            "zh": "的"
          },
          {
            "en": "water",
            "zh": "水"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这些够了吗？",
        "en": "Is this enough?",
        "ipa": "/ɪz ðɪs ɪˈnʌf/",
        "words": [
          {
            "en": "Is",
            "zh": "是"
          },
          {
            "en": "this",
            "zh": "这些"
          },
          {
            "en": "enough",
            "zh": "足够"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "够了，我们去结账吧。",
        "en": "Enough, let's go to the checkout.",
        "ipa": "/ɪˈnʌf lɛts ɡoʊ tuː ðə ˈtʃɛkaʊt/",
        "words": [
          {
            "en": "Enough",
            "zh": "够了"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "let's",
            "zh": "让我们"
          },
          {
            "en": "go",
            "zh": "去"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "the",
            "zh": "那"
          },
          {
            "en": "checkout",
            "zh": "收银台"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请在那边排队。",
        "en": "Please line up over there.",
        "ipa": "/pliːz laɪn ʌp ˈoʊvər ðɛr/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "line",
            "zh": "排队"
          },
          {
            "en": "up",
            "zh": "起来"
          },
          {
            "en": "over",
            "zh": "在"
          },
          {
            "en": "there",
            "zh": "那边"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你好，我要结账。",
        "en": "Hello, I want to check out.",
        "ipa": "/həˈloʊ aɪ wɑnt tuː tʃɛk aʊt/",
        "words": [
          {
            "en": "Hello",
            "zh": "你好"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "check",
            "zh": "结账"
          },
          {
            "en": "out",
            "zh": "出去"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你有会员卡吗？",
        "en": "Do you have a membership card?",
        "ipa": "/duː juː hæv ə ˈmɛmbərʃɪp kɑːrd/",
        "words": [
          {
            "en": "Do",
            "zh": "（助动词）"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一张"
          },
          {
            "en": "membership",
            "zh": "会员"
          },
          {
            "en": "card",
            "zh": "卡"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "没有，我没有。",
        "en": "No, I don't have one.",
        "ipa": "/noʊ aɪ doʊnt hæv wʌn/",
        "words": [
          {
            "en": "No",
            "zh": "不"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "don't",
            "zh": "不"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "one",
            "zh": "一张"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "总共是四十二元。",
        "en": "The total is forty-two yuan.",
        "ipa": "/ðə ˈtoʊtəl ɪz ˈfɔːrti tuː juˈɑːn/",
        "words": [
          {
            "en": "The",
            "zh": "那"
          },
          {
            "en": "total",
            "zh": "总共"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "forty-two",
            "zh": "四十二"
          },
          {
            "en": "yuan",
            "zh": "元"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "给你五十元。",
        "en": "Here is fifty yuan.",
        "ipa": "/hɪr ɪz ˈfɪfti juˈɑːn/",
        "words": [
          {
            "en": "Here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "fifty",
            "zh": "五十"
          },
          {
            "en": "yuan",
            "zh": "元"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "找你八元。",
        "en": "Here is eight yuan change.",
        "ipa": "/hɪr ɪz eɪt juˈɑːn tʃeɪndʒ/",
        "words": [
          {
            "en": "Here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "eight",
            "zh": "八"
          },
          {
            "en": "yuan",
            "zh": "元"
          },
          {
            "en": "change",
            "zh": "找零"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请拿好你的东西。",
        "en": "Please take your things.",
        "ipa": "/pliːz teɪk jɔːr θɪŋz/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "take",
            "zh": "拿"
          },
          {
            "en": "your",
            "zh": "你的"
          },
          {
            "en": "things",
            "zh": "东西"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "谢谢你，再见！",
        "en": "Thank you, goodbye!",
        "ipa": "/θæŋk juː ɡʊdˈbaɪ/",
        "words": [
          {
            "en": "Thank",
            "zh": "谢谢"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "goodbye",
            "zh": "再见"
          },
          {
            "en": "!",
            "zh": ""
          }
        ]
      },
      {
        "zh": "再见，祝你有美好的一天！",
        "en": "Goodbye, have a nice day!",
        "ipa": "/ɡʊdˈbaɪ hæv ə naɪs deɪ/",
        "words": [
          {
            "en": "Goodbye",
            "zh": "再见"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "nice",
            "zh": "美好的"
          },
          {
            "en": "day",
            "zh": "一天"
          },
          {
            "en": "!",
            "zh": ""
          }
        ]
      }
    ],
    "sentenceCount": 52
  },
  {
    "category": "旅行出行",
    "title": "机场酒店出行对话",
    "scene": "机场值机、酒店入住、问路指路等旅行场景对话",
    "difficulty": "B1",
    "sentences": [
      {
        "zh": "我需要在柜台办理登机手续。",
        "en": "I need to check in at the counter.",
        "ipa": "/aɪ niːd tuː tʃek ɪn æt ðə ˈkaʊntər/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "check",
            "zh": "办理"
          },
          {
            "en": "in",
            "zh": "登机手续"
          },
          {
            "en": "at",
            "zh": "在"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "counter",
            "zh": "柜台"
          }
        ]
      },
      {
        "zh": "请出示您的护照和机票。",
        "en": "Please show me your passport and ticket.",
        "ipa": "/pliːz ʃoʊ miː jɔːr ˈpæspɔːrt ænd ˈtɪkɪt/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "show",
            "zh": "出示"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "passport",
            "zh": "护照"
          },
          {
            "en": "and",
            "zh": "和"
          },
          {
            "en": "ticket",
            "zh": "机票"
          }
        ]
      },
      {
        "zh": "我的行李重22公斤。",
        "en": "My luggage weighs twenty-two kilograms.",
        "ipa": "/maɪ ˈlʌɡɪdʒ weɪz ˈtwɛnti-tuː ˈkɪləɡræmz/",
        "words": [
          {
            "en": "My",
            "zh": "我的"
          },
          {
            "en": "luggage",
            "zh": "行李"
          },
          {
            "en": "weighs",
            "zh": "重"
          },
          {
            "en": "twenty-two",
            "zh": "二十二"
          },
          {
            "en": "kilograms",
            "zh": "公斤"
          }
        ]
      },
      {
        "zh": "超重了，您需要支付额外费用。",
        "en": "It is overweight, you need to pay extra.",
        "ipa": "/ɪt ɪz ˈoʊvərweɪt juː niːd tuː peɪ ˈɛkstrə/",
        "words": [
          {
            "en": "It",
            "zh": "它"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "overweight",
            "zh": "超重"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "pay",
            "zh": "支付"
          },
          {
            "en": "extra",
            "zh": "额外费用"
          }
        ]
      },
      {
        "zh": "我可以带一个手提包上飞机吗？",
        "en": "Can I take one handbag on the plane?",
        "ipa": "/kæn aɪ teɪk wʌn ˈhændbæɡ ɒn ðə pleɪn/",
        "words": [
          {
            "en": "Can",
            "zh": "可以"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "take",
            "zh": "带"
          },
          {
            "en": "one",
            "zh": "一个"
          },
          {
            "en": "handbag",
            "zh": "手提包"
          },
          {
            "en": "on",
            "zh": "在...上"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "plane",
            "zh": "飞机"
          }
        ]
      },
      {
        "zh": "是的，但尺寸不能太大。",
        "en": "Yes, but the size cannot be too big.",
        "ipa": "/jɛs bʌt ðə saɪz ˈkænɒt biː tuː bɪɡ/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": "but",
            "zh": "但是"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "size",
            "zh": "尺寸"
          },
          {
            "en": "cannot",
            "zh": "不能"
          },
          {
            "en": "be",
            "zh": "是"
          },
          {
            "en": "too",
            "zh": "太"
          },
          {
            "en": "big",
            "zh": "大"
          }
        ]
      },
      {
        "zh": "请给我靠窗的座位。",
        "en": "Please give me a window seat.",
        "ipa": "/pliːz ɡɪv miː ə ˈwɪndoʊ siːt/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "give",
            "zh": "给"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "window",
            "zh": "窗户"
          },
          {
            "en": "seat",
            "zh": "座位"
          }
        ]
      },
      {
        "zh": "您的登机口是15号。",
        "en": "Your boarding gate is number fifteen.",
        "ipa": "/jɔːr ˈbɔːrdɪŋ ɡeɪt ɪz ˈnʌmbər ˈfɪfˈtiːn/",
        "words": [
          {
            "en": "Your",
            "zh": "您的"
          },
          {
            "en": "boarding",
            "zh": "登机"
          },
          {
            "en": "gate",
            "zh": "登机口"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "number",
            "zh": "号码"
          },
          {
            "en": "fifteen",
            "zh": "十五"
          }
        ]
      },
      {
        "zh": "登机什么时候开始？",
        "en": "When does boarding start?",
        "ipa": "/wɛn dʌz ˈbɔːrdɪŋ stɑːrt/",
        "words": [
          {
            "en": "When",
            "zh": "什么时候"
          },
          {
            "en": "does",
            "zh": "助动词"
          },
          {
            "en": "boarding",
            "zh": "登机"
          },
          {
            "en": "start",
            "zh": "开始"
          }
        ]
      },
      {
        "zh": "登机将在三十分钟后开始。",
        "en": "Boarding will start in thirty minutes.",
        "ipa": "/ˈbɔːrdɪŋ wɪl stɑːrt ɪn ˈθɜːrti ˈmɪnɪts/",
        "words": [
          {
            "en": "Boarding",
            "zh": "登机"
          },
          {
            "en": "will",
            "zh": "将要"
          },
          {
            "en": "start",
            "zh": "开始"
          },
          {
            "en": "in",
            "zh": "在...之后"
          },
          {
            "en": "thirty",
            "zh": "三十"
          },
          {
            "en": "minutes",
            "zh": "分钟"
          }
        ]
      },
      {
        "zh": "我在哪里可以拿到登机牌？",
        "en": "Where can I get my boarding pass?",
        "ipa": "/wɛr kæn aɪ ɡɛt maɪ ˈbɔːrdɪŋ pæs/",
        "words": [
          {
            "en": "Where",
            "zh": "在哪里"
          },
          {
            "en": "can",
            "zh": "可以"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "get",
            "zh": "拿到"
          },
          {
            "en": "my",
            "zh": "我的"
          },
          {
            "en": "boarding",
            "zh": "登机"
          },
          {
            "en": "pass",
            "zh": "牌"
          }
        ]
      },
      {
        "zh": "这是您的登机牌，请拿好。",
        "en": "Here is your boarding pass, please keep it.",
        "ipa": "/hɪr ɪz jɔːr ˈbɔːrdɪŋ pæs pliːz kiːp ɪt/",
        "words": [
          {
            "en": "Here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "boarding",
            "zh": "登机"
          },
          {
            "en": "pass",
            "zh": "牌"
          },
          {
            "en": "please",
            "zh": "请"
          },
          {
            "en": "keep",
            "zh": "保管"
          },
          {
            "en": "it",
            "zh": "它"
          }
        ]
      },
      {
        "zh": "请问机场大巴在哪里乘坐？",
        "en": "Excuse me, where is the airport bus stop?",
        "ipa": "/ɪkˈskjuːz miː wɛr ɪz ði ˈɛrpɔːrt bʌs stɒp/",
        "words": [
          {
            "en": "Excuse",
            "zh": "抱歉"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": "where",
            "zh": "哪里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "airport",
            "zh": "机场"
          },
          {
            "en": "bus",
            "zh": "巴士"
          },
          {
            "en": "stop",
            "zh": "站"
          }
        ]
      },
      {
        "zh": "右转然后直走两百米。",
        "en": "Turn right and go straight for two hundred meters.",
        "ipa": "/tɜːrn raɪt ænd ɡoʊ streɪt fɔːr tuː ˈhʌndrəd ˈmiːtərz/",
        "words": [
          {
            "en": "Turn",
            "zh": "转"
          },
          {
            "en": "right",
            "zh": "右"
          },
          {
            "en": "and",
            "zh": "和"
          },
          {
            "en": "go",
            "zh": "走"
          },
          {
            "en": "straight",
            "zh": "直"
          },
          {
            "en": "for",
            "zh": "持续"
          },
          {
            "en": "two",
            "zh": "两"
          },
          {
            "en": "hundred",
            "zh": "百"
          },
          {
            "en": "meters",
            "zh": "米"
          }
        ]
      },
      {
        "zh": "我需要出租车去市区。",
        "en": "I need a taxi to the city center.",
        "ipa": "/aɪ niːd ə ˈtæksi tuː ðə ˈsɪti ˈsɛntər/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "a",
            "zh": "一辆"
          },
          {
            "en": "taxi",
            "zh": "出租车"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "city",
            "zh": "城市"
          },
          {
            "en": "center",
            "zh": "中心"
          }
        ]
      },
      {
        "zh": "到市中心大约要多少钱？",
        "en": "How much does it cost to the city center?",
        "ipa": "/haʊ mʌtʃ dʌz ɪt kɒst tuː ðə ˈsɪti ˈsɛntər/",
        "words": [
          {
            "en": "How",
            "zh": "多少"
          },
          {
            "en": "much",
            "zh": "钱"
          },
          {
            "en": "does",
            "zh": "助动词"
          },
          {
            "en": "it",
            "zh": "它"
          },
          {
            "en": "cost",
            "zh": "花费"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "city",
            "zh": "城市"
          },
          {
            "en": "center",
            "zh": "中心"
          }
        ]
      },
      {
        "zh": "大概二十到二十五美元。",
        "en": "About twenty to twenty-five dollars.",
        "ipa": "/əˈbaʊt ˈtwɛnti tuː ˈtwɛnti-faɪv ˈdɒlərz/",
        "words": [
          {
            "en": "About",
            "zh": "大约"
          },
          {
            "en": "twenty",
            "zh": "二十"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "twenty-five",
            "zh": "二十五"
          },
          {
            "en": "dollars",
            "zh": "美元"
          }
        ]
      },
      {
        "zh": "请带我去这家酒店。",
        "en": "Please take me to this hotel.",
        "ipa": "/pliːz teɪk miː tuː ðɪs hoʊˈtɛl/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "take",
            "zh": "带"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "this",
            "zh": "这家"
          },
          {
            "en": "hotel",
            "zh": "酒店"
          }
        ]
      },
      {
        "zh": "我预订了一间双人房。",
        "en": "I have booked a double room.",
        "ipa": "/aɪ hæv bʊkt ə ˈdʌbəl ruːm/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "have",
            "zh": "已经"
          },
          {
            "en": "booked",
            "zh": "预订了"
          },
          {
            "en": "a",
            "zh": "一间"
          },
          {
            "en": "double",
            "zh": "双人"
          },
          {
            "en": "room",
            "zh": "房间"
          }
        ]
      },
      {
        "zh": "请填写这张登记表。",
        "en": "Please fill in this registration form.",
        "ipa": "/pliːz fɪl ɪn ðɪs ˌrɛdʒɪˈstreɪʃən fɔːrm/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "fill",
            "zh": "填写"
          },
          {
            "en": "in",
            "zh": "在...里"
          },
          {
            "en": "this",
            "zh": "这张"
          },
          {
            "en": "registration",
            "zh": "登记"
          },
          {
            "en": "form",
            "zh": "表格"
          }
        ]
      },
      {
        "zh": "您的房间号是508。",
        "en": "Your room number is five zero eight.",
        "ipa": "/jɔːr ruːm ˈnʌmbər ɪz faɪv zɪroʊ eɪt/",
        "words": [
          {
            "en": "Your",
            "zh": "您的"
          },
          {
            "en": "room",
            "zh": "房间"
          },
          {
            "en": "number",
            "zh": "号码"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "five",
            "zh": "五"
          },
          {
            "en": "zero",
            "zh": "零"
          },
          {
            "en": "eight",
            "zh": "八"
          }
        ]
      },
      {
        "zh": "早餐几点开始供应？",
        "en": "What time is breakfast served?",
        "ipa": "/wɒt taɪm ɪz ˈbrɛkfəst sɜːrvd/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "time",
            "zh": "时间"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "breakfast",
            "zh": "早餐"
          },
          {
            "en": "served",
            "zh": "供应"
          }
        ]
      },
      {
        "zh": "早餐从早上七点到十点。",
        "en": "Breakfast is from seven to ten in the morning.",
        "ipa": "/ˈbrɛkfəst ɪz frəm ˈsɛvən tuː tɛn ɪn ðə ˈmɔːrnɪŋ/",
        "words": [
          {
            "en": "Breakfast",
            "zh": "早餐"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "from",
            "zh": "从"
          },
          {
            "en": "seven",
            "zh": "七点"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "ten",
            "zh": "十点"
          },
          {
            "en": "in",
            "zh": "在"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "morning",
            "zh": "早上"
          }
        ]
      },
      {
        "zh": "房间里有免费的Wi-Fi吗？",
        "en": "Is there free Wi-Fi in the room?",
        "ipa": "/ɪz ðɛr friː ˈwaɪfaɪ ɪn ðə ruːm/",
        "words": [
          {
            "en": "Is",
            "zh": "有"
          },
          {
            "en": "there",
            "zh": "那里"
          },
          {
            "en": "free",
            "zh": "免费的"
          },
          {
            "en": "Wi-Fi",
            "zh": "无线网络"
          },
          {
            "en": "in",
            "zh": "在...里"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "room",
            "zh": "房间"
          }
        ]
      },
      {
        "zh": "Wi-Fi密码是1234。",
        "en": "The Wi-Fi password is one two three four.",
        "ipa": "/ðə ˈwaɪfaɪ ˈpæswɜːrd ɪz wʌn tuː θriː fɔːr/",
        "words": [
          {
            "en": "The",
            "zh": "定冠词"
          },
          {
            "en": "Wi-Fi",
            "zh": "无线网络"
          },
          {
            "en": "password",
            "zh": "密码"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "one",
            "zh": "一"
          },
          {
            "en": "two",
            "zh": "二"
          },
          {
            "en": "three",
            "zh": "三"
          },
          {
            "en": "four",
            "zh": "四"
          }
        ]
      },
      {
        "zh": "请给我多一条毛巾。",
        "en": "Please give me one more towel.",
        "ipa": "/pliːz ɡɪv miː wʌn mɔːr ˈtaʊəl/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "give",
            "zh": "给"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": "one",
            "zh": "一"
          },
          {
            "en": "more",
            "zh": "更多"
          },
          {
            "en": "towel",
            "zh": "毛巾"
          }
        ]
      },
      {
        "zh": "空调不工作了。",
        "en": "The air conditioner is not working.",
        "ipa": "/ði ɛr kənˈdɪʃənər ɪz nɒt ˈwɜːrkɪŋ/",
        "words": [
          {
            "en": "The",
            "zh": "定冠词"
          },
          {
            "en": "air",
            "zh": "空气"
          },
          {
            "en": "conditioner",
            "zh": "调节器"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "not",
            "zh": "不"
          },
          {
            "en": "working",
            "zh": "工作"
          }
        ]
      },
      {
        "zh": "我会派人来修理。",
        "en": "I will send someone to fix it.",
        "ipa": "/aɪ wɪl sɛnd ˈsʌmwʌn tuː fɪks ɪt/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "will",
            "zh": "将要"
          },
          {
            "en": "send",
            "zh": "派"
          },
          {
            "en": "someone",
            "zh": "某人"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "fix",
            "zh": "修理"
          },
          {
            "en": "it",
            "zh": "它"
          }
        ]
      },
      {
        "zh": "请问附近有地铁站吗？",
        "en": "Is there a subway station nearby?",
        "ipa": "/ɪz ðɛr ə ˈsʌbweɪ ˈsteɪʃən ˈnɪrbaɪ/",
        "words": [
          {
            "en": "Is",
            "zh": "有"
          },
          {
            "en": "there",
            "zh": "那里"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "subway",
            "zh": "地铁"
          },
          {
            "en": "station",
            "zh": "站"
          },
          {
            "en": "nearby",
            "zh": "附近"
          }
        ]
      },
      {
        "zh": "最近的地铁站步行五分钟。",
        "en": "The nearest subway station is five minutes on foot.",
        "ipa": "/ðə ˈnɪrɪst ˈsʌbweɪ ˈsteɪʃən ɪz faɪv ˈmɪnɪts ɒn fʊt/",
        "words": [
          {
            "en": "The",
            "zh": "定冠词"
          },
          {
            "en": "nearest",
            "zh": "最近的"
          },
          {
            "en": "subway",
            "zh": "地铁"
          },
          {
            "en": "station",
            "zh": "站"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "five",
            "zh": "五"
          },
          {
            "en": "minutes",
            "zh": "分钟"
          },
          {
            "en": "on",
            "zh": "在"
          },
          {
            "en": "foot",
            "zh": "步行"
          }
        ]
      },
      {
        "zh": "去博物馆怎么走？",
        "en": "How can I get to the museum?",
        "ipa": "/haʊ kæn aɪ ɡɛt tuː ðə mjuˈziːəm/",
        "words": [
          {
            "en": "How",
            "zh": "怎样"
          },
          {
            "en": "can",
            "zh": "可以"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "get",
            "zh": "到达"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "museum",
            "zh": "博物馆"
          }
        ]
      },
      {
        "zh": "沿着这条街走到第二个红绿灯。",
        "en": "Walk along this street to the second traffic light.",
        "ipa": "/wɔːk əˈlɒŋ ðɪs striːt tuː ðə ˈsɛkənd ˈtræfɪk laɪt/",
        "words": [
          {
            "en": "Walk",
            "zh": "走"
          },
          {
            "en": "along",
            "zh": "沿着"
          },
          {
            "en": "this",
            "zh": "这条"
          },
          {
            "en": "street",
            "zh": "街"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "second",
            "zh": "第二个"
          },
          {
            "en": "traffic",
            "zh": "交通"
          },
          {
            "en": "light",
            "zh": "灯"
          }
        ]
      },
      {
        "zh": "在拐角处左转。",
        "en": "Turn left at the corner.",
        "ipa": "/tɜːrn lɛft æt ðə ˈkɔːrnər/",
        "words": [
          {
            "en": "Turn",
            "zh": "转"
          },
          {
            "en": "left",
            "zh": "左"
          },
          {
            "en": "at",
            "zh": "在"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "corner",
            "zh": "拐角"
          }
        ]
      },
      {
        "zh": "那个地方就在银行对面。",
        "en": "That place is opposite the bank.",
        "ipa": "/ðæt pleɪs ɪz ˈɒpəzɪt ðə bæŋk/",
        "words": [
          {
            "en": "That",
            "zh": "那个"
          },
          {
            "en": "place",
            "zh": "地方"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "opposite",
            "zh": "在...对面"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "bank",
            "zh": "银行"
          }
        ]
      },
      {
        "zh": "你能在地图上指给我看吗？",
        "en": "Can you show me on the map?",
        "ipa": "/kæn juː ʃoʊ miː ɒn ðə mæp/",
        "words": [
          {
            "en": "Can",
            "zh": "可以"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "show",
            "zh": "指给"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": "on",
            "zh": "在...上"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "map",
            "zh": "地图"
          }
        ]
      },
      {
        "zh": "我们在这里，博物馆在那边。",
        "en": "We are here, and the museum is over there.",
        "ipa": "/wiː ɑːr hɪr ænd ðə mjuˈziːəm ɪz ˈoʊvər ðɛr/",
        "words": [
          {
            "en": "We",
            "zh": "我们"
          },
          {
            "en": "are",
            "zh": "是"
          },
          {
            "en": "here",
            "zh": "这里"
          },
          {
            "en": "and",
            "zh": "和"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "museum",
            "zh": "博物馆"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "over",
            "zh": "在"
          },
          {
            "en": "there",
            "zh": "那里"
          }
        ]
      },
      {
        "zh": "坐公交车需要多长时间？",
        "en": "How long does it take by bus?",
        "ipa": "/haʊ lɒŋ dʌz ɪt teɪk baɪ bʌs/",
        "words": [
          {
            "en": "How",
            "zh": "多少"
          },
          {
            "en": "long",
            "zh": "长时间"
          },
          {
            "en": "does",
            "zh": "助动词"
          },
          {
            "en": "it",
            "zh": "它"
          },
          {
            "en": "take",
            "zh": "花费"
          },
          {
            "en": "by",
            "zh": "通过"
          },
          {
            "en": "bus",
            "zh": "公交车"
          }
        ]
      },
      {
        "zh": "大约二十分钟。",
        "en": "About twenty minutes.",
        "ipa": "/əˈbaʊt ˈtwɛnti ˈmɪnɪts/",
        "words": [
          {
            "en": "About",
            "zh": "大约"
          },
          {
            "en": "twenty",
            "zh": "二十"
          },
          {
            "en": "minutes",
            "zh": "分钟"
          }
        ]
      },
      {
        "zh": "我迷路了，你能帮我吗？",
        "en": "I am lost, can you help me?",
        "ipa": "/aɪ æm lɒst kæn juː hɛlp miː/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "是"
          },
          {
            "en": "lost",
            "zh": "迷路了"
          },
          {
            "en": "can",
            "zh": "可以"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "help",
            "zh": "帮助"
          },
          {
            "en": "me",
            "zh": "我"
          }
        ]
      },
      {
        "zh": "请跟我来，我带你去。",
        "en": "Please follow me, I will take you there.",
        "ipa": "/pliːz ˈfɒloʊ miː aɪ wɪl teɪk juː ðɛr/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "follow",
            "zh": "跟随"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "will",
            "zh": "将要"
          },
          {
            "en": "take",
            "zh": "带"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "there",
            "zh": "那里"
          }
        ]
      },
      {
        "zh": "这个方向对吗？",
        "en": "Is this the right direction?",
        "ipa": "/ɪz ðɪs ðə raɪt dɪˈrɛkʃən/",
        "words": [
          {
            "en": "Is",
            "zh": "是"
          },
          {
            "en": "this",
            "zh": "这个"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "right",
            "zh": "正确的"
          },
          {
            "en": "direction",
            "zh": "方向"
          }
        ]
      },
      {
        "zh": "不，你应该走反方向。",
        "en": "No, you should go the opposite way.",
        "ipa": "/noʊ juː ʃʊd ɡoʊ ði ˈɒpəzɪt weɪ/",
        "words": [
          {
            "en": "No",
            "zh": "不"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "should",
            "zh": "应该"
          },
          {
            "en": "go",
            "zh": "走"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "opposite",
            "zh": "相反的"
          },
          {
            "en": "way",
            "zh": "方向"
          }
        ]
      },
      {
        "zh": "这附近有洗手间吗？",
        "en": "Is there a restroom near here?",
        "ipa": "/ɪz ðɛr ə ˈrɛstruːm nɪr hɪr/",
        "words": [
          {
            "en": "Is",
            "zh": "有"
          },
          {
            "en": "there",
            "zh": "那里"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "restroom",
            "zh": "洗手间"
          },
          {
            "en": "near",
            "zh": "附近"
          },
          {
            "en": "here",
            "zh": "这里"
          }
        ]
      },
      {
        "zh": "洗手间在二楼电梯旁边。",
        "en": "The restroom is on the second floor next to the elevator.",
        "ipa": "/ðə ˈrɛstruːm ɪz ɒn ðə ˈsɛkənd flɔːr nɛkst tuː ði ˈɛlɪveɪtər/",
        "words": [
          {
            "en": "The",
            "zh": "定冠词"
          },
          {
            "en": "restroom",
            "zh": "洗手间"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "on",
            "zh": "在"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "second",
            "zh": "第二"
          },
          {
            "en": "floor",
            "zh": "层"
          },
          {
            "en": "next",
            "zh": "旁边"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "elevator",
            "zh": "电梯"
          }
        ]
      },
      {
        "zh": "请帮我叫一辆出租车。",
        "en": "Please call a taxi for me.",
        "ipa": "/pliːz kɔːl ə ˈtæksi fɔːr miː/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "call",
            "zh": "叫"
          },
          {
            "en": "a",
            "zh": "一辆"
          },
          {
            "en": "taxi",
            "zh": "出租车"
          },
          {
            "en": "for",
            "zh": "为"
          },
          {
            "en": "me",
            "zh": "我"
          }
        ]
      },
      {
        "zh": "我明天早上需要叫醒服务。",
        "en": "I need a wake-up call tomorrow morning.",
        "ipa": "/aɪ niːd ə ˈweɪk-ʌp kɔːl təˈmɔːroʊ ˈmɔːrnɪŋ/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "wake-up",
            "zh": "叫醒"
          },
          {
            "en": "call",
            "zh": "电话"
          },
          {
            "en": "tomorrow",
            "zh": "明天"
          },
          {
            "en": "morning",
            "zh": "早上"
          }
        ]
      },
      {
        "zh": "好的，请在早上六点半叫醒我。",
        "en": "Okay, please wake me up at six thirty in the morning.",
        "ipa": "/oʊˈkeɪ pliːz weɪk miː ʌp æt sɪks ˈθɜːrti ɪn ðə ˈmɔːrnɪŋ/",
        "words": [
          {
            "en": "Okay",
            "zh": "好的"
          },
          {
            "en": "please",
            "zh": "请"
          },
          {
            "en": "wake",
            "zh": "叫醒"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": "up",
            "zh": "起来"
          },
          {
            "en": "at",
            "zh": "在"
          },
          {
            "en": "six",
            "zh": "六"
          },
          {
            "en": "thirty",
            "zh": "三十"
          },
          {
            "en": "in",
            "zh": "在"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "morning",
            "zh": "早上"
          }
        ]
      },
      {
        "zh": "我要退房，请准备账单。",
        "en": "I want to check out, please prepare the bill.",
        "ipa": "/aɪ wɒnt tuː tʃɛk aʊt pliːz prɪˈpɛr ðə bɪl/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "check",
            "zh": "办理"
          },
          {
            "en": "out",
            "zh": "退房"
          },
          {
            "en": "please",
            "zh": "请"
          },
          {
            "en": "prepare",
            "zh": "准备"
          },
          {
            "en": "the",
            "zh": "定冠词"
          },
          {
            "en": "bill",
            "zh": "账单"
          }
        ]
      },
      {
        "zh": "您住得愉快吗？",
        "en": "Did you enjoy your stay?",
        "ipa": "/dɪd juː ɪnˈdʒɔɪ jɔːr steɪ/",
        "words": [
          {
            "en": "Did",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "enjoy",
            "zh": "享受"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "stay",
            "zh": "住宿"
          }
        ]
      },
      {
        "zh": "是的，非常愉快，谢谢。",
        "en": "Yes, very pleasant, thank you.",
        "ipa": "/jɛs ˈvɛri ˈplɛzənt θæŋk juː/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": "very",
            "zh": "非常"
          },
          {
            "en": "pleasant",
            "zh": "愉快"
          },
          {
            "en": "thank",
            "zh": "谢谢"
          },
          {
            "en": "you",
            "zh": "你"
          }
        ]
      },
      {
        "zh": "请在这里签字。",
        "en": "Please sign here.",
        "ipa": "/pliːz saɪn hɪr/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "sign",
            "zh": "签字"
          },
          {
            "en": "here",
            "zh": "这里"
          }
        ]
      },
      {
        "zh": "祝您旅途愉快！",
        "en": "Have a nice trip!",
        "ipa": "/hæv ə naɪs trɪp/",
        "words": [
          {
            "en": "Have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一次"
          },
          {
            "en": "nice",
            "zh": "愉快的"
          },
          {
            "en": "trip",
            "zh": "旅行"
          }
        ]
      }
    ],
    "sentenceCount": 52
  },
  {
    "category": "商务工作",
    "title": "英语面试对话",
    "scene": "求职面试常见问答、自我介绍、工作经验描述",
    "difficulty": "B1",
    "sentences": [
      {
        "zh": "你好，请坐。",
        "en": "Hello, please have a seat.",
        "ipa": "/həˈloʊ, pliːz hæv ə siːt/",
        "words": [
          {
            "en": "Hello",
            "zh": "你好"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "please",
            "zh": "请"
          },
          {
            "en": "have",
            "zh": "有；请"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "seat",
            "zh": "座位"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "谢谢。",
        "en": "Thank you.",
        "ipa": "/θæŋk juː/",
        "words": [
          {
            "en": "Thank",
            "zh": "感谢"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请先介绍一下你自己。",
        "en": "Please introduce yourself first.",
        "ipa": "/pliːz ˌɪntrəˈdjuːs jɔːrˈself fɜːrst/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "introduce",
            "zh": "介绍"
          },
          {
            "en": "yourself",
            "zh": "你自己"
          },
          {
            "en": "first",
            "zh": "首先"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我叫李明，今年二十五岁。",
        "en": "My name is Li Ming, and I am twenty-five years old.",
        "ipa": "/maɪ neɪm ɪz liː mɪŋ, ænd aɪ æm ˈtwɛnti faɪv jɪrz oʊld/",
        "words": [
          {
            "en": "My",
            "zh": "我的"
          },
          {
            "en": "name",
            "zh": "名字"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "Li",
            "zh": "李"
          },
          {
            "en": "Ming",
            "zh": "明"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "and",
            "zh": "和"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "是"
          },
          {
            "en": "twenty-five",
            "zh": "二十五"
          },
          {
            "en": "years",
            "zh": "岁"
          },
          {
            "en": "old",
            "zh": "年纪的"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我来自上海，现在住在北京。",
        "en": "I come from Shanghai, and now I live in Beijing.",
        "ipa": "/aɪ kʌm frɒm ʃæŋˈhaɪ, ænd naʊ aɪ lɪv ɪn beɪˈdʒɪŋ/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "come",
            "zh": "来"
          },
          {
            "en": "from",
            "zh": "从"
          },
          {
            "en": "Shanghai",
            "zh": "上海"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "and",
            "zh": "和"
          },
          {
            "en": "now",
            "zh": "现在"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "live",
            "zh": "住"
          },
          {
            "en": "in",
            "zh": "在"
          },
          {
            "en": "Beijing",
            "zh": "北京"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我大学学的是市场营销。",
        "en": "I studied marketing at university.",
        "ipa": "/aɪ ˈstʌdid ˈmɑːrkɪtɪŋ æt ˌjuːnɪˈvɜːrsɪti/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "studied",
            "zh": "学习过"
          },
          {
            "en": "marketing",
            "zh": "市场营销"
          },
          {
            "en": "at",
            "zh": "在"
          },
          {
            "en": "university",
            "zh": "大学"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我毕业已经三年了。",
        "en": "I graduated three years ago.",
        "ipa": "/aɪ ˈɡrædʒueɪtɪd θriː jɪrz əˈɡoʊ/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "graduated",
            "zh": "毕业了"
          },
          {
            "en": "three",
            "zh": "三"
          },
          {
            "en": "years",
            "zh": "年"
          },
          {
            "en": "ago",
            "zh": "以前"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你之前在哪里工作？",
        "en": "Where did you work before?",
        "ipa": "/wɛr dɪd juː wɜːrk bɪˈfɔːr/",
        "words": [
          {
            "en": "Where",
            "zh": "哪里"
          },
          {
            "en": "did",
            "zh": "（助动词）"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "work",
            "zh": "工作"
          },
          {
            "en": "before",
            "zh": "之前"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我在一家外贸公司工作过两年。",
        "en": "I worked at a foreign trade company for two years.",
        "ipa": "/aɪ wɜːrkt æt ə ˈfɔːrɪn treɪd ˈkʌmpəni fɔːr tuː jɪrz/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "worked",
            "zh": "工作过"
          },
          {
            "en": "at",
            "zh": "在"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "foreign",
            "zh": "外国的"
          },
          {
            "en": "trade",
            "zh": "贸易"
          },
          {
            "en": "company",
            "zh": "公司"
          },
          {
            "en": "for",
            "zh": "长达"
          },
          {
            "en": "two",
            "zh": "两"
          },
          {
            "en": "years",
            "zh": "年"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我的工作是帮助开发新客户。",
        "en": "My job was to help find new customers.",
        "ipa": "/maɪ dʒɒb wʌz tuː hɛlp faɪnd njuː ˈkʌstəmərz/",
        "words": [
          {
            "en": "My",
            "zh": "我的"
          },
          {
            "en": "job",
            "zh": "工作"
          },
          {
            "en": "was",
            "zh": "是"
          },
          {
            "en": "to",
            "zh": "为了"
          },
          {
            "en": "help",
            "zh": "帮助"
          },
          {
            "en": "find",
            "zh": "找到"
          },
          {
            "en": "new",
            "zh": "新的"
          },
          {
            "en": "customers",
            "zh": "客户"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我学到了很多销售技巧。",
        "en": "I learned a lot of sales skills.",
        "ipa": "/aɪ lɜːrnd ə lɒt ʌv seɪlz skɪlz/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "learned",
            "zh": "学到了"
          },
          {
            "en": "a",
            "zh": "一"
          },
          {
            "en": "lot",
            "zh": "很多"
          },
          {
            "en": "of",
            "zh": "的"
          },
          {
            "en": "sales",
            "zh": "销售"
          },
          {
            "en": "skills",
            "zh": "技巧"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你为什么想离开上一家公司？",
        "en": "Why do you want to leave your last company?",
        "ipa": "/waɪ duː juː wɒnt tuː liːv jɔːr læst ˈkʌmpəni/",
        "words": [
          {
            "en": "Why",
            "zh": "为什么"
          },
          {
            "en": "do",
            "zh": "（助动词）"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "leave",
            "zh": "离开"
          },
          {
            "en": "your",
            "zh": "你的"
          },
          {
            "en": "last",
            "zh": "上一个"
          },
          {
            "en": "company",
            "zh": "公司"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我想有更多的发展机会。",
        "en": "I want more opportunities to grow.",
        "ipa": "/aɪ wɒnt mɔːr ˌɒpərˈtjuːnɪtiz tuː ɡroʊ/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "more",
            "zh": "更多的"
          },
          {
            "en": "opportunities",
            "zh": "机会"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "grow",
            "zh": "成长"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我希望能做更有挑战性的工作。",
        "en": "I hope to do more challenging work.",
        "ipa": "/aɪ hoʊp tuː duː mɔːr ˈtʃælɪndʒɪŋ wɜːrk/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "hope",
            "zh": "希望"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "do",
            "zh": "做"
          },
          {
            "en": "more",
            "zh": "更"
          },
          {
            "en": "challenging",
            "zh": "有挑战性的"
          },
          {
            "en": "work",
            "zh": "工作"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你对这个职位了解多少？",
        "en": "How much do you know about this position?",
        "ipa": "/haʊ mʌtʃ duː juː noʊ əˈbaʊt ðɪs pəˈzɪʃən/",
        "words": [
          {
            "en": "How",
            "zh": "多么"
          },
          {
            "en": "much",
            "zh": "多"
          },
          {
            "en": "do",
            "zh": "（助动词）"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "know",
            "zh": "知道"
          },
          {
            "en": "about",
            "zh": "关于"
          },
          {
            "en": "this",
            "zh": "这个"
          },
          {
            "en": "position",
            "zh": "职位"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我看了贵公司的网站和招聘信息。",
        "en": "I looked at your company's website and job posting.",
        "ipa": "/aɪ lʊkt æt jɔːr ˈkʌmpəniz ˈwebsaɪt ænd dʒɒb ˈpoʊstɪŋ/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "looked",
            "zh": "看了"
          },
          {
            "en": "at",
            "zh": "在"
          },
          {
            "en": "your",
            "zh": "你们的"
          },
          {
            "en": "company's",
            "zh": "公司的"
          },
          {
            "en": "website",
            "zh": "网站"
          },
          {
            "en": "and",
            "zh": "和"
          },
          {
            "en": "job",
            "zh": "工作"
          },
          {
            "en": "posting",
            "zh": "招聘信息"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这个职位主要做市场推广。",
        "en": "This position is mainly about marketing promotion.",
        "ipa": "/ðɪs pəˈzɪʃən ɪz ˈmeɪnli əˈbaʊt ˈmɑːrkɪtɪŋ prəˈmoʊʃən/",
        "words": [
          {
            "en": "This",
            "zh": "这个"
          },
          {
            "en": "position",
            "zh": "职位"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "mainly",
            "zh": "主要"
          },
          {
            "en": "about",
            "zh": "关于"
          },
          {
            "en": "marketing",
            "zh": "市场营销"
          },
          {
            "en": "promotion",
            "zh": "推广"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我觉得我的经验很适合。",
        "en": "I think my experience is a good fit.",
        "ipa": "/aɪ θɪŋk maɪ ɪkˈspɪriəns ɪz ə ɡʊd fɪt/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "think",
            "zh": "认为"
          },
          {
            "en": "my",
            "zh": "我的"
          },
          {
            "en": "experience",
            "zh": "经验"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "good",
            "zh": "好的"
          },
          {
            "en": "fit",
            "zh": "适合"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你能说说你的优点吗？",
        "en": "Can you tell me about your strengths?",
        "ipa": "/kæn juː tɛl miː əˈbaʊt jɔːr strɛŋθs/",
        "words": [
          {
            "en": "Can",
            "zh": "能"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "tell",
            "zh": "告诉"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": "about",
            "zh": "关于"
          },
          {
            "en": "your",
            "zh": "你的"
          },
          {
            "en": "strengths",
            "zh": "优点"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我做事很认真，也喜欢团队合作。",
        "en": "I am very careful, and I like teamwork.",
        "ipa": "/aɪ æm ˈvɛri ˈkɛrfəl, ænd aɪ laɪk ˈtiːmwɜːrk/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "是"
          },
          {
            "en": "very",
            "zh": "很"
          },
          {
            "en": "careful",
            "zh": "认真的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "and",
            "zh": "而且"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "like",
            "zh": "喜欢"
          },
          {
            "en": "teamwork",
            "zh": "团队合作"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我学习新东西很快。",
        "en": "I learn new things quickly.",
        "ipa": "/aɪ lɜːrn njuː θɪŋz ˈkwɪkli/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "learn",
            "zh": "学习"
          },
          {
            "en": "new",
            "zh": "新的"
          },
          {
            "en": "things",
            "zh": "东西"
          },
          {
            "en": "quickly",
            "zh": "快速地"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "那你的缺点是什么？",
        "en": "What are your weaknesses?",
        "ipa": "/wʌt ɑːr jɔːr ˈwiːknəsɪz/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "are",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "你的"
          },
          {
            "en": "weaknesses",
            "zh": "缺点"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "有时候我太追求完美了。",
        "en": "Sometimes I am too much of a perfectionist.",
        "ipa": "/ˈsʌmtaɪmz aɪ æm tuː mʌtʃ ʌv ə pərˈfɛkʃənɪst/",
        "words": [
          {
            "en": "Sometimes",
            "zh": "有时候"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "是"
          },
          {
            "en": "too",
            "zh": "太"
          },
          {
            "en": "much",
            "zh": "多"
          },
          {
            "en": "of",
            "zh": "的"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "perfectionist",
            "zh": "完美主义者"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我正在学习更好地管理时间。",
        "en": "I am learning to manage my time better.",
        "ipa": "/aɪ æm ˈlɜːrnɪŋ tuː ˈmænɪdʒ maɪ taɪm ˈbɛtər/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "正在"
          },
          {
            "en": "learning",
            "zh": "学习"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "manage",
            "zh": "管理"
          },
          {
            "en": "my",
            "zh": "我的"
          },
          {
            "en": "time",
            "zh": "时间"
          },
          {
            "en": "better",
            "zh": "更好地"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你用过哪些办公软件？",
        "en": "What office software have you used?",
        "ipa": "/wʌt ˈɒfɪs ˈsɒftwɛr hæv juː juːzd/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "office",
            "zh": "办公"
          },
          {
            "en": "software",
            "zh": "软件"
          },
          {
            "en": "have",
            "zh": "（助动词）"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "used",
            "zh": "用过"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我会用Word、Excel和PowerPoint。",
        "en": "I can use Word, Excel, and PowerPoint.",
        "ipa": "/aɪ kæn juːz wɜːrd, ɪkˈsɛl, ænd ˈpaʊərpɔɪnt/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "can",
            "zh": "会"
          },
          {
            "en": "use",
            "zh": "使用"
          },
          {
            "en": "Word",
            "zh": "Word（文字处理软件）"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "Excel",
            "zh": "Excel（电子表格软件）"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "and",
            "zh": "和"
          },
          {
            "en": "PowerPoint",
            "zh": "PowerPoint（演示软件）"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我也会用一些设计软件。",
        "en": "I also know some design software.",
        "ipa": "/aɪ ˈɔːlsoʊ noʊ sʌm dɪˈzaɪn ˈsɒftwɛr/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "also",
            "zh": "也"
          },
          {
            "en": "know",
            "zh": "会"
          },
          {
            "en": "some",
            "zh": "一些"
          },
          {
            "en": "design",
            "zh": "设计"
          },
          {
            "en": "software",
            "zh": "软件"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你的英语水平怎么样？",
        "en": "How is your English level?",
        "ipa": "/haʊ ɪz jɔːr ˈɪŋɡlɪʃ ˈlɛvəl/",
        "words": [
          {
            "en": "How",
            "zh": "怎么样"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "你的"
          },
          {
            "en": "English",
            "zh": "英语"
          },
          {
            "en": "level",
            "zh": "水平"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我的英语口语和写作都不错。",
        "en": "My spoken and written English are good.",
        "ipa": "/maɪ ˈspoʊkən ænd ˈrɪtən ˈɪŋɡlɪʃ ɑːr ɡʊd/",
        "words": [
          {
            "en": "My",
            "zh": "我的"
          },
          {
            "en": "spoken",
            "zh": "口头的"
          },
          {
            "en": "and",
            "zh": "和"
          },
          {
            "en": "written",
            "zh": "书面的"
          },
          {
            "en": "English",
            "zh": "英语"
          },
          {
            "en": "are",
            "zh": "是"
          },
          {
            "en": "good",
            "zh": "好的"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我通过了大学英语六级考试。",
        "en": "I passed the College English Test Band 6.",
        "ipa": "/aɪ pæst ðə ˈkɒlɪdʒ ˈɪŋɡlɪʃ tɛst bænd sɪks/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "passed",
            "zh": "通过了"
          },
          {
            "en": "the",
            "zh": "（定冠词）"
          },
          {
            "en": "College",
            "zh": "大学"
          },
          {
            "en": "English",
            "zh": "英语"
          },
          {
            "en": "Test",
            "zh": "考试"
          },
          {
            "en": "Band",
            "zh": "级"
          },
          {
            "en": "6",
            "zh": "六"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你能用英语做一个简短的自我介绍吗？",
        "en": "Can you give a short self-introduction in English?",
        "ipa": "/kæn juː ɡɪv ə ʃɔːrt sɛlf ˌɪntrəˈdʌkʃən ɪn ˈɪŋɡlɪʃ/",
        "words": [
          {
            "en": "Can",
            "zh": "能"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "give",
            "zh": "做"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "short",
            "zh": "简短的"
          },
          {
            "en": "self-introduction",
            "zh": "自我介绍"
          },
          {
            "en": "in",
            "zh": "用"
          },
          {
            "en": "English",
            "zh": "英语"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "当然可以。我叫李明，今年二十五岁。",
        "en": "Of course. My name is Li Ming, and I am twenty-five.",
        "ipa": "/ʌv kɔːrs. maɪ neɪm ɪz liː mɪŋ, ænd aɪ æm ˈtwɛnti faɪv/",
        "words": [
          {
            "en": "Of",
            "zh": "的"
          },
          {
            "en": "course",
            "zh": "当然"
          },
          {
            "en": ".",
            "zh": ""
          },
          {
            "en": "My",
            "zh": "我的"
          },
          {
            "en": "name",
            "zh": "名字"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "Li",
            "zh": "李"
          },
          {
            "en": "Ming",
            "zh": "明"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "and",
            "zh": "和"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "是"
          },
          {
            "en": "twenty-five",
            "zh": "二十五岁"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我毕业于上海大学。",
        "en": "I graduated from Shanghai University.",
        "ipa": "/aɪ ˈɡrædʒueɪtɪd frɒm ʃæŋˈhaɪ ˌjuːnɪˈvɜːrsɪti/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "graduated",
            "zh": "毕业"
          },
          {
            "en": "from",
            "zh": "从"
          },
          {
            "en": "Shanghai",
            "zh": "上海"
          },
          {
            "en": "University",
            "zh": "大学"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我有两年销售工作经验。",
        "en": "I have two years of sales work experience.",
        "ipa": "/aɪ hæv tuː jɪrz ʌv seɪlz wɜːrk ɪkˈspɪriəns/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "two",
            "zh": "两"
          },
          {
            "en": "years",
            "zh": "年"
          },
          {
            "en": "of",
            "zh": "的"
          },
          {
            "en": "sales",
            "zh": "销售"
          },
          {
            "en": "work",
            "zh": "工作"
          },
          {
            "en": "experience",
            "zh": "经验"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你期望的薪水是多少？",
        "en": "What is your expected salary?",
        "ipa": "/wʌt ɪz jɔːr ɪkˈspɛktɪd ˈsæləri/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "你的"
          },
          {
            "en": "expected",
            "zh": "期望的"
          },
          {
            "en": "salary",
            "zh": "薪水"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我期望月薪八千到一万元。",
        "en": "I expect a monthly salary of 8,000 to 10,000 yuan.",
        "ipa": "/aɪ ɪkˈspɛkt ə ˈmʌnθli ˈsæləri ʌv eɪt ˈθaʊzənd tuː tɛn ˈθaʊzənd juːˈɑːn/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "expect",
            "zh": "期望"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "monthly",
            "zh": "每月的"
          },
          {
            "en": "salary",
            "zh": "薪水"
          },
          {
            "en": "of",
            "zh": "的"
          },
          {
            "en": "8,000",
            "zh": "八千"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "10,000",
            "zh": "一万"
          },
          {
            "en": "yuan",
            "zh": "元"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这个可以根据具体情况再商量。",
        "en": "We can discuss it based on the specific situation.",
        "ipa": "/wiː kæn dɪˈskʌs ɪt beɪst ɒn ðə spəˈsɪfɪk ˌsɪtʃuˈeɪʃən/",
        "words": [
          {
            "en": "We",
            "zh": "我们"
          },
          {
            "en": "can",
            "zh": "可以"
          },
          {
            "en": "discuss",
            "zh": "商量"
          },
          {
            "en": "it",
            "zh": "它"
          },
          {
            "en": "based",
            "zh": "基于"
          },
          {
            "en": "on",
            "zh": "在"
          },
          {
            "en": "the",
            "zh": "（定冠词）"
          },
          {
            "en": "specific",
            "zh": "具体的"
          },
          {
            "en": "situation",
            "zh": "情况"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你什么时候可以开始上班？",
        "en": "When can you start work?",
        "ipa": "/wɛn kæn juː stɑːrt wɜːrk/",
        "words": [
          {
            "en": "When",
            "zh": "什么时候"
          },
          {
            "en": "can",
            "zh": "可以"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "start",
            "zh": "开始"
          },
          {
            "en": "work",
            "zh": "工作"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我下个月一号就可以开始。",
        "en": "I can start on the first of next month.",
        "ipa": "/aɪ kæn stɑːrt ɒn ðə fɜːrst ʌv nɛkst mʌnθ/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "can",
            "zh": "可以"
          },
          {
            "en": "start",
            "zh": "开始"
          },
          {
            "en": "on",
            "zh": "在"
          },
          {
            "en": "the",
            "zh": "（定冠词）"
          },
          {
            "en": "first",
            "zh": "一号"
          },
          {
            "en": "of",
            "zh": "的"
          },
          {
            "en": "next",
            "zh": "下一个"
          },
          {
            "en": "month",
            "zh": "月"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我需要提前两周通知现在的公司。",
        "en": "I need to give two weeks' notice to my current company.",
        "ipa": "/aɪ niːd tuː ɡɪv tuː wiːks ˈnoʊtɪs tuː maɪ ˈkɜːrənt ˈkʌmpəni/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "give",
            "zh": "给"
          },
          {
            "en": "two",
            "zh": "两"
          },
          {
            "en": "weeks'",
            "zh": "周的"
          },
          {
            "en": "notice",
            "zh": "通知"
          },
          {
            "en": "to",
            "zh": "给"
          },
          {
            "en": "my",
            "zh": "我的"
          },
          {
            "en": "current",
            "zh": "现在的"
          },
          {
            "en": "company",
            "zh": "公司"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你为什么要应聘我们公司？",
        "en": "Why do you want to work for our company?",
        "ipa": "/waɪ duː juː wɒnt tuː wɜːrk fɔːr ˈaʊər ˈkʌmpəni/",
        "words": [
          {
            "en": "Why",
            "zh": "为什么"
          },
          {
            "en": "do",
            "zh": "（助动词）"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "want",
            "zh": "想要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "work",
            "zh": "工作"
          },
          {
            "en": "for",
            "zh": "为"
          },
          {
            "en": "our",
            "zh": "我们的"
          },
          {
            "en": "company",
            "zh": "公司"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我很欣赏贵公司的企业文化。",
        "en": "I really admire your company's culture.",
        "ipa": "/aɪ ˈrɪəli ədˈmaɪər jɔːr ˈkʌmpəniz ˈkʌltʃər/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "really",
            "zh": "非常"
          },
          {
            "en": "admire",
            "zh": "欣赏"
          },
          {
            "en": "your",
            "zh": "你们的"
          },
          {
            "en": "company's",
            "zh": "公司的"
          },
          {
            "en": "culture",
            "zh": "文化"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我觉得在这里我可以学到很多。",
        "en": "I think I can learn a lot here.",
        "ipa": "/aɪ θɪŋk aɪ kæn lɜːrn ə lɒt hɪr/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "think",
            "zh": "觉得"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "can",
            "zh": "可以"
          },
          {
            "en": "learn",
            "zh": "学到"
          },
          {
            "en": "a",
            "zh": "一"
          },
          {
            "en": "lot",
            "zh": "很多"
          },
          {
            "en": "here",
            "zh": "这里"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你们公司的发展前景很好。",
        "en": "Your company has good development prospects.",
        "ipa": "/jɔːr ˈkʌmpəni hæz ɡʊd dɪˈvɛləpmənt ˈprɑːspɛkts/",
        "words": [
          {
            "en": "Your",
            "zh": "你们的"
          },
          {
            "en": "company",
            "zh": "公司"
          },
          {
            "en": "has",
            "zh": "有"
          },
          {
            "en": "good",
            "zh": "好的"
          },
          {
            "en": "development",
            "zh": "发展"
          },
          {
            "en": "prospects",
            "zh": "前景"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你对加班怎么看？",
        "en": "What do you think about working overtime?",
        "ipa": "/wʌt duː juː θɪŋk əˈbaʊt ˈwɜːrkɪŋ ˈoʊvərtaɪm/",
        "words": [
          {
            "en": "What",
            "zh": "什么"
          },
          {
            "en": "do",
            "zh": "（助动词）"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "think",
            "zh": "认为"
          },
          {
            "en": "about",
            "zh": "关于"
          },
          {
            "en": "working",
            "zh": "工作"
          },
          {
            "en": "overtime",
            "zh": "加班"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "如果需要，我可以加班。",
        "en": "If necessary, I can work overtime.",
        "ipa": "/ɪf ˈnɛsəsɛri, aɪ kæn wɜːrk ˈoʊvərtaɪm/",
        "words": [
          {
            "en": "If",
            "zh": "如果"
          },
          {
            "en": "necessary",
            "zh": "有必要的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "can",
            "zh": "可以"
          },
          {
            "en": "work",
            "zh": "工作"
          },
          {
            "en": "overtime",
            "zh": "加班"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "但我希望工作生活能平衡。",
        "en": "But I hope to have a good work-life balance.",
        "ipa": "/bʌt aɪ hoʊp tuː hæv ə ɡʊd wɜːrk laɪf ˈbæləns/",
        "words": [
          {
            "en": "But",
            "zh": "但是"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "hope",
            "zh": "希望"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "good",
            "zh": "好的"
          },
          {
            "en": "work-life",
            "zh": "工作生活"
          },
          {
            "en": "balance",
            "zh": "平衡"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你有什么问题要问我吗？",
        "en": "Do you have any questions for me?",
        "ipa": "/duː juː hæv ˈɛni ˈkwɛstʃənz fɔːr miː/",
        "words": [
          {
            "en": "Do",
            "zh": "（助动词）"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "any",
            "zh": "任何"
          },
          {
            "en": "questions",
            "zh": "问题"
          },
          {
            "en": "for",
            "zh": "对于"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我想问一下公司的培训计划。",
        "en": "I would like to ask about the training plan.",
        "ipa": "/aɪ wʊd laɪk tuː æsk əˈbaʊt ðə ˈtreɪnɪŋ plæn/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "would",
            "zh": "会"
          },
          {
            "en": "like",
            "zh": "想要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "ask",
            "zh": "问"
          },
          {
            "en": "about",
            "zh": "关于"
          },
          {
            "en": "the",
            "zh": "（定冠词）"
          },
          {
            "en": "training",
            "zh": "培训"
          },
          {
            "en": "plan",
            "zh": "计划"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "公司会为新员工提供培训吗？",
        "en": "Does the company provide training for new employees?",
        "ipa": "/dʌz ðə ˈkʌmpəni prəˈvaɪd ˈtreɪnɪŋ fɔːr njuː ɛmˈplɔɪiz/",
        "words": [
          {
            "en": "Does",
            "zh": "（助动词）"
          },
          {
            "en": "the",
            "zh": "（定冠词）"
          },
          {
            "en": "company",
            "zh": "公司"
          },
          {
            "en": "provide",
            "zh": "提供"
          },
          {
            "en": "training",
            "zh": "培训"
          },
          {
            "en": "for",
            "zh": "为"
          },
          {
            "en": "new",
            "zh": "新的"
          },
          {
            "en": "employees",
            "zh": "员工"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，我们有一个月的入职培训。",
        "en": "Yes, we have a one-month orientation training.",
        "ipa": "/jɛs, wiː hæv ə wʌn mʌnθ ˌɔːriənˈteɪʃən ˈtreɪnɪŋ/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "we",
            "zh": "我们"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "one-month",
            "zh": "一个月的"
          },
          {
            "en": "orientation",
            "zh": "入职"
          },
          {
            "en": "training",
            "zh": "培训"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "很好，谢谢您的回答。",
        "en": "Great, thank you for your answers.",
        "ipa": "/ɡreɪt, θæŋk juː fɔːr jɔːr ˈænsərz/",
        "words": [
          {
            "en": "Great",
            "zh": "很好"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "thank",
            "zh": "谢谢"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "for",
            "zh": "为了"
          },
          {
            "en": "your",
            "zh": "你的"
          },
          {
            "en": "answers",
            "zh": "回答"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我们会在三天内通知你结果。",
        "en": "We will inform you of the result within three days.",
        "ipa": "/wiː wɪl ɪnˈfɔːrm juː ʌv ðə rɪˈzʌlt wɪˈðɪn θriː deɪz/",
        "words": [
          {
            "en": "We",
            "zh": "我们"
          },
          {
            "en": "will",
            "zh": "将会"
          },
          {
            "en": "inform",
            "zh": "通知"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "of",
            "zh": "关于"
          },
          {
            "en": "the",
            "zh": "（定冠词）"
          },
          {
            "en": "result",
            "zh": "结果"
          },
          {
            "en": "within",
            "zh": "在……之内"
          },
          {
            "en": "three",
            "zh": "三"
          },
          {
            "en": "days",
            "zh": "天"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "谢谢您的时间，再见。",
        "en": "Thank you for your time. Goodbye.",
        "ipa": "/θæŋk juː fɔːr jɔːr taɪm. ɡʊdˈbaɪ/",
        "words": [
          {
            "en": "Thank",
            "zh": "谢谢"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": "for",
            "zh": "为了"
          },
          {
            "en": "your",
            "zh": "你的"
          },
          {
            "en": "time",
            "zh": "时间"
          },
          {
            "en": ".",
            "zh": ""
          },
          {
            "en": "Goodbye",
            "zh": "再见"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      }
    ],
    "sentenceCount": 54
  },
  {
    "category": "生活服务",
    "title": "看病就医对话",
    "scene": "医院挂号、医生问诊、药房取药等医疗场景对话",
    "difficulty": "B1",
    "sentences": [
      {
        "zh": "你好，我想挂号。",
        "en": "Hello, I would like to register.",
        "ipa": "/həˈloʊ aɪ wʊd laɪk tə ˈrɛdʒɪstər/",
        "words": [
          {
            "en": "Hello",
            "zh": "你好"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "would",
            "zh": "想要"
          },
          {
            "en": "like",
            "zh": "喜欢"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "register",
            "zh": "挂号"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请问您挂哪个科室？",
        "en": "Which department would you like to see?",
        "ipa": "/wɪtʃ dɪˈpɑrtmənt wʊd ju laɪk tə si/",
        "words": [
          {
            "en": "Which",
            "zh": "哪个"
          },
          {
            "en": "department",
            "zh": "科室"
          },
          {
            "en": "would",
            "zh": "想要"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "like",
            "zh": "喜欢"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "see",
            "zh": "看"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我喉咙痛，应该看内科吗？",
        "en": "I have a sore throat. Should I see internal medicine?",
        "ipa": "/aɪ hæv ə sɔr θroʊt ʃʊd aɪ si ɪnˈtɜrnl ˈmɛdɪsɪn/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "sore",
            "zh": "疼痛的"
          },
          {
            "en": "throat",
            "zh": "喉咙"
          },
          {
            "en": ".",
            "zh": ""
          },
          {
            "en": "Should",
            "zh": "应该"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "see",
            "zh": "看"
          },
          {
            "en": "internal",
            "zh": "内科的"
          },
          {
            "en": "medicine",
            "zh": "医学"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "建议您先挂耳鼻喉科。",
        "en": "I suggest you register for ENT first.",
        "ipa": "/aɪ səˈdʒɛst ju ˈrɛdʒɪstər fɔr i ɛn ti fɜrst/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "suggest",
            "zh": "建议"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "register",
            "zh": "挂号"
          },
          {
            "en": "for",
            "zh": "为了"
          },
          {
            "en": "ENT",
            "zh": "耳鼻喉科"
          },
          {
            "en": "first",
            "zh": "先"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "好的，请给我一张挂号单。",
        "en": "Okay, please give me a registration form.",
        "ipa": "/oʊˈkeɪ pliz gɪv mi ə ˌrɛdʒɪˈstreɪʃən fɔrm/",
        "words": [
          {
            "en": "Okay",
            "zh": "好的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "please",
            "zh": "请"
          },
          {
            "en": "give",
            "zh": "给"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": "a",
            "zh": "一张"
          },
          {
            "en": "registration",
            "zh": "挂号"
          },
          {
            "en": "form",
            "zh": "单"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "挂号费是二十元。",
        "en": "The registration fee is twenty yuan.",
        "ipa": "/ðə ˌrɛdʒɪˈstreɪʃən fi ɪz ˈtwɛnti ˈjwɑn/",
        "words": [
          {
            "en": "The",
            "zh": "这"
          },
          {
            "en": "registration",
            "zh": "挂号"
          },
          {
            "en": "fee",
            "zh": "费"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "twenty",
            "zh": "二十"
          },
          {
            "en": "yuan",
            "zh": "元"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这是您的挂号单，请去三楼三号诊室。",
        "en": "Here is your registration form. Please go to Room 3 on the third floor.",
        "ipa": "/hɪr ɪz jɔr ˌrɛdʒɪˈstreɪʃən fɔrm pliz goʊ tə rum θri ɑn ðə θɜrd flɔr/",
        "words": [
          {
            "en": "Here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "registration",
            "zh": "挂号"
          },
          {
            "en": "form",
            "zh": "单"
          },
          {
            "en": ".",
            "zh": ""
          },
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "go",
            "zh": "去"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "Room",
            "zh": "诊室"
          },
          {
            "en": "3",
            "zh": "三"
          },
          {
            "en": "on",
            "zh": "在"
          },
          {
            "en": "the",
            "zh": "这"
          },
          {
            "en": "third",
            "zh": "第三"
          },
          {
            "en": "floor",
            "zh": "层"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "医生，我咳嗽已经三天了。",
        "en": "Doctor, I have been coughing for three days.",
        "ipa": "/ˈdɑktər aɪ hæv bɪn ˈkɔfɪŋ fɔr θri deɪz/",
        "words": [
          {
            "en": "Doctor",
            "zh": "医生"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "have",
            "zh": "已经"
          },
          {
            "en": "been",
            "zh": "一直"
          },
          {
            "en": "coughing",
            "zh": "咳嗽"
          },
          {
            "en": "for",
            "zh": "持续了"
          },
          {
            "en": "three",
            "zh": "三"
          },
          {
            "en": "days",
            "zh": "天"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您发烧吗？",
        "en": "Do you have a fever?",
        "ipa": "/du ju hæv ə ˈfivər/",
        "words": [
          {
            "en": "Do",
            "zh": "助动词"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "fever",
            "zh": "发烧"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，昨晚体温三十八度五。",
        "en": "Yes, my temperature was 38.5 degrees last night.",
        "ipa": "/jɛs maɪ ˈtɛmprətʃər wʌz ˈθɜrti eɪt pɔɪnt faɪv dɪˈgriz læst naɪt/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "my",
            "zh": "我的"
          },
          {
            "en": "temperature",
            "zh": "体温"
          },
          {
            "en": "was",
            "zh": "是"
          },
          {
            "en": "38.5",
            "zh": "三十八点五"
          },
          {
            "en": "degrees",
            "zh": "度"
          },
          {
            "en": "last",
            "zh": "昨晚的"
          },
          {
            "en": "night",
            "zh": "晚上"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "让我听听您的肺部。",
        "en": "Let me listen to your lungs.",
        "ipa": "/lɛt mi ˈlɪsən tə jɔr lʌŋz/",
        "words": [
          {
            "en": "Let",
            "zh": "让"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": "listen",
            "zh": "听"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "lungs",
            "zh": "肺部"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请深呼吸。",
        "en": "Please take a deep breath.",
        "ipa": "/pliz teɪk ə dip brɛθ/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "take",
            "zh": "做"
          },
          {
            "en": "a",
            "zh": "一次"
          },
          {
            "en": "deep",
            "zh": "深的"
          },
          {
            "en": "breath",
            "zh": "呼吸"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您对什么药物过敏吗？",
        "en": "Are you allergic to any medication?",
        "ipa": "/ɑr ju əˈlɜrdʒɪk tə ˈɛni ˌmɛdɪˈkeɪʃən/",
        "words": [
          {
            "en": "Are",
            "zh": "是"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "allergic",
            "zh": "过敏的"
          },
          {
            "en": "to",
            "zh": "对"
          },
          {
            "en": "any",
            "zh": "任何"
          },
          {
            "en": "medication",
            "zh": "药物"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "不，我不过敏。",
        "en": "No, I am not allergic.",
        "ipa": "/noʊ aɪ æm nɑt əˈlɜrdʒɪk/",
        "words": [
          {
            "en": "No",
            "zh": "不"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "是"
          },
          {
            "en": "not",
            "zh": "不"
          },
          {
            "en": "allergic",
            "zh": "过敏的"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您需要验血。",
        "en": "You need a blood test.",
        "ipa": "/ju nid ə blʌd tɛst/",
        "words": [
          {
            "en": "You",
            "zh": "您"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "a",
            "zh": "一次"
          },
          {
            "en": "blood",
            "zh": "血"
          },
          {
            "en": "test",
            "zh": "检查"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "验血室在二楼。",
        "en": "The blood test room is on the second floor.",
        "ipa": "/ðə blʌd tɛst rum ɪz ɑn ðə ˈsɛkənd flɔr/",
        "words": [
          {
            "en": "The",
            "zh": "这"
          },
          {
            "en": "blood",
            "zh": "血"
          },
          {
            "en": "test",
            "zh": "检查"
          },
          {
            "en": "room",
            "zh": "室"
          },
          {
            "en": "is",
            "zh": "在"
          },
          {
            "en": "on",
            "zh": "在"
          },
          {
            "en": "the",
            "zh": "这"
          },
          {
            "en": "second",
            "zh": "第二"
          },
          {
            "en": "floor",
            "zh": "层"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请问验血要空腹吗？",
        "en": "Do I need to fast for the blood test?",
        "ipa": "/du aɪ nid tə fæst fɔr ðə blʌd tɛst/",
        "words": [
          {
            "en": "Do",
            "zh": "助动词"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "fast",
            "zh": "空腹"
          },
          {
            "en": "for",
            "zh": "为了"
          },
          {
            "en": "the",
            "zh": "这个"
          },
          {
            "en": "blood",
            "zh": "血"
          },
          {
            "en": "test",
            "zh": "检查"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，至少空腹八小时。",
        "en": "Yes, you need to fast for at least eight hours.",
        "ipa": "/jɛs ju nid tə fæst fɔr æt list eɪt ˈaʊərz/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "fast",
            "zh": "空腹"
          },
          {
            "en": "for",
            "zh": "持续"
          },
          {
            "en": "at",
            "zh": "至少"
          },
          {
            "en": "least",
            "zh": "最少"
          },
          {
            "en": "eight",
            "zh": "八"
          },
          {
            "en": "hours",
            "zh": "小时"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我明白了，谢谢。",
        "en": "I understand, thank you.",
        "ipa": "/aɪ ˌʌndərˈstænd θæŋk ju/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "understand",
            "zh": "明白"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "thank",
            "zh": "谢谢"
          },
          {
            "en": "you",
            "zh": "你"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这是您的化验单。",
        "en": "Here is your lab test form.",
        "ipa": "/hɪr ɪz jɔr læb tɛst fɔrm/",
        "words": [
          {
            "en": "Here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "lab",
            "zh": "化验"
          },
          {
            "en": "test",
            "zh": "检查"
          },
          {
            "en": "form",
            "zh": "单"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "抽血时会有点疼。",
        "en": "It will hurt a little when we draw blood.",
        "ipa": "/ɪt wɪl hɜrt ə ˈlɪtəl wɛn wi drɔ blʌd/",
        "words": [
          {
            "en": "It",
            "zh": "它"
          },
          {
            "en": "will",
            "zh": "会"
          },
          {
            "en": "hurt",
            "zh": "疼"
          },
          {
            "en": "a",
            "zh": "一点"
          },
          {
            "en": "little",
            "zh": "少量"
          },
          {
            "en": "when",
            "zh": "当"
          },
          {
            "en": "we",
            "zh": "我们"
          },
          {
            "en": "draw",
            "zh": "抽"
          },
          {
            "en": "blood",
            "zh": "血"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "别担心，很快就结束了。",
        "en": "Don't worry, it will be over soon.",
        "ipa": "/doʊnt ˈwɜri ɪt wɪl bi ˈoʊvər sun/",
        "words": [
          {
            "en": "Don't",
            "zh": "不要"
          },
          {
            "en": "worry",
            "zh": "担心"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "it",
            "zh": "它"
          },
          {
            "en": "will",
            "zh": "会"
          },
          {
            "en": "be",
            "zh": "是"
          },
          {
            "en": "over",
            "zh": "结束"
          },
          {
            "en": "soon",
            "zh": "很快"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "半小时后取结果。",
        "en": "You can get the results in half an hour.",
        "ipa": "/ju kæn gɛt ðə rɪˈzʌlts ɪn hæf æn ˈaʊər/",
        "words": [
          {
            "en": "You",
            "zh": "您"
          },
          {
            "en": "can",
            "zh": "可以"
          },
          {
            "en": "get",
            "zh": "取"
          },
          {
            "en": "the",
            "zh": "这些"
          },
          {
            "en": "results",
            "zh": "结果"
          },
          {
            "en": "in",
            "zh": "在"
          },
          {
            "en": "half",
            "zh": "半"
          },
          {
            "en": "an",
            "zh": "一个"
          },
          {
            "en": "hour",
            "zh": "小时"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "医生，这是我的化验结果。",
        "en": "Doctor, here are my test results.",
        "ipa": "/ˈdɑktər hɪr ɑr maɪ tɛst rɪˈzʌlts/",
        "words": [
          {
            "en": "Doctor",
            "zh": "医生"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "here",
            "zh": "这里"
          },
          {
            "en": "are",
            "zh": "是"
          },
          {
            "en": "my",
            "zh": "我的"
          },
          {
            "en": "test",
            "zh": "化验"
          },
          {
            "en": "results",
            "zh": "结果"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "结果显示您有细菌感染。",
        "en": "The results show you have a bacterial infection.",
        "ipa": "/ðə rɪˈzʌlts ʃoʊ ju hæv ə bækˈtɪriəl ɪnˈfɛkʃən/",
        "words": [
          {
            "en": "The",
            "zh": "这些"
          },
          {
            "en": "results",
            "zh": "结果"
          },
          {
            "en": "show",
            "zh": "显示"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "a",
            "zh": "一种"
          },
          {
            "en": "bacterial",
            "zh": "细菌的"
          },
          {
            "en": "infection",
            "zh": "感染"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我需要吃药吗？",
        "en": "Do I need to take medication?",
        "ipa": "/du aɪ nid tə teɪk ˌmɛdɪˈkeɪʃən/",
        "words": [
          {
            "en": "Do",
            "zh": "助动词"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "take",
            "zh": "服用"
          },
          {
            "en": "medication",
            "zh": "药物"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "是的，我给您开一些抗生素。",
        "en": "Yes, I will prescribe some antibiotics for you.",
        "ipa": "/jɛs aɪ wɪl prɪˈskraɪb sʌm ˌæntɪbaɪˈɑtɪks fɔr ju/",
        "words": [
          {
            "en": "Yes",
            "zh": "是的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "will",
            "zh": "会"
          },
          {
            "en": "prescribe",
            "zh": "开药"
          },
          {
            "en": "some",
            "zh": "一些"
          },
          {
            "en": "antibiotics",
            "zh": "抗生素"
          },
          {
            "en": "for",
            "zh": "给"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "您一天吃三次，饭后服用。",
        "en": "Take it three times a day, after meals.",
        "ipa": "/teɪk ɪt θri taɪmz ə deɪ ˈæftər milz/",
        "words": [
          {
            "en": "Take",
            "zh": "服用"
          },
          {
            "en": "it",
            "zh": "它"
          },
          {
            "en": "three",
            "zh": "三"
          },
          {
            "en": "times",
            "zh": "次"
          },
          {
            "en": "a",
            "zh": "每"
          },
          {
            "en": "day",
            "zh": "天"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "after",
            "zh": "之后"
          },
          {
            "en": "meals",
            "zh": "餐"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "每次吃一片。",
        "en": "Take one tablet each time.",
        "ipa": "/teɪk wʌn ˈtæblət itʃ taɪm/",
        "words": [
          {
            "en": "Take",
            "zh": "服用"
          },
          {
            "en": "one",
            "zh": "一"
          },
          {
            "en": "tablet",
            "zh": "片"
          },
          {
            "en": "each",
            "zh": "每"
          },
          {
            "en": "time",
            "zh": "次"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这个药有副作用吗？",
        "en": "Does this medicine have side effects?",
        "ipa": "/dʌz ðɪs ˈmɛdɪsɪn hæv saɪd ɪˈfɛkts/",
        "words": [
          {
            "en": "Does",
            "zh": "助动词"
          },
          {
            "en": "this",
            "zh": "这个"
          },
          {
            "en": "medicine",
            "zh": "药"
          },
          {
            "en": "have",
            "zh": "有"
          },
          {
            "en": "side",
            "zh": "副"
          },
          {
            "en": "effects",
            "zh": "作用"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "可能会有点头晕，多喝水。",
        "en": "You might feel a little dizzy, drink plenty of water.",
        "ipa": "/ju maɪt fil ə ˈlɪtəl ˈdɪzi drɪŋk ˈplɛnti əv ˈwɔtər/",
        "words": [
          {
            "en": "You",
            "zh": "您"
          },
          {
            "en": "might",
            "zh": "可能"
          },
          {
            "en": "feel",
            "zh": "感觉"
          },
          {
            "en": "a",
            "zh": "一点"
          },
          {
            "en": "little",
            "zh": "少量"
          },
          {
            "en": "dizzy",
            "zh": "头晕"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "drink",
            "zh": "喝"
          },
          {
            "en": "plenty",
            "zh": "大量"
          },
          {
            "en": "of",
            "zh": "的"
          },
          {
            "en": "water",
            "zh": "水"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我需要打针吗？",
        "en": "Do I need an injection?",
        "ipa": "/du aɪ nid æn ɪnˈdʒɛkʃən/",
        "words": [
          {
            "en": "Do",
            "zh": "助动词"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "an",
            "zh": "一次"
          },
          {
            "en": "injection",
            "zh": "打针"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "不需要，吃药就可以了。",
        "en": "No, taking medicine is enough.",
        "ipa": "/noʊ ˈteɪkɪŋ ˈmɛdɪsɪn ɪz ɪˈnʌf/",
        "words": [
          {
            "en": "No",
            "zh": "不"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "taking",
            "zh": "服用"
          },
          {
            "en": "medicine",
            "zh": "药"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "enough",
            "zh": "足够的"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请多休息，三天后再来复诊。",
        "en": "Please rest more and come back for a follow-up in three days.",
        "ipa": "/pliz rɛst mɔr ænd kʌm bæk fɔr ə ˈfɑloʊ ʌp ɪn θri deɪz/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "rest",
            "zh": "休息"
          },
          {
            "en": "more",
            "zh": "更多"
          },
          {
            "en": "and",
            "zh": "并且"
          },
          {
            "en": "come",
            "zh": "来"
          },
          {
            "en": "back",
            "zh": "回"
          },
          {
            "en": "for",
            "zh": "为了"
          },
          {
            "en": "a",
            "zh": "一次"
          },
          {
            "en": "follow-up",
            "zh": "复诊"
          },
          {
            "en": "in",
            "zh": "在"
          },
          {
            "en": "three",
            "zh": "三"
          },
          {
            "en": "days",
            "zh": "天"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "好的，谢谢医生。",
        "en": "Okay, thank you doctor.",
        "ipa": "/oʊˈkeɪ θæŋk ju ˈdɑktər/",
        "words": [
          {
            "en": "Okay",
            "zh": "好的"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "thank",
            "zh": "谢谢"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "doctor",
            "zh": "医生"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "现在我去药房取药。",
        "en": "Now I will go to the pharmacy to get the medicine.",
        "ipa": "/naʊ aɪ wɪl goʊ tə ðə ˈfɑrməsi tə gɛt ðə ˈmɛdɪsɪn/",
        "words": [
          {
            "en": "Now",
            "zh": "现在"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "will",
            "zh": "将"
          },
          {
            "en": "go",
            "zh": "去"
          },
          {
            "en": "to",
            "zh": "到"
          },
          {
            "en": "the",
            "zh": "那个"
          },
          {
            "en": "pharmacy",
            "zh": "药房"
          },
          {
            "en": "to",
            "zh": "去"
          },
          {
            "en": "get",
            "zh": "取"
          },
          {
            "en": "the",
            "zh": "这些"
          },
          {
            "en": "medicine",
            "zh": "药"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "你好，我来取药。",
        "en": "Hello, I am here to pick up my medicine.",
        "ipa": "/həˈloʊ aɪ æm hɪr tə pɪk ʌp maɪ ˈmɛdɪsɪn/",
        "words": [
          {
            "en": "Hello",
            "zh": "你好"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "am",
            "zh": "是"
          },
          {
            "en": "here",
            "zh": "这里"
          },
          {
            "en": "to",
            "zh": "来"
          },
          {
            "en": "pick",
            "zh": "取"
          },
          {
            "en": "up",
            "zh": "上"
          },
          {
            "en": "my",
            "zh": "我的"
          },
          {
            "en": "medicine",
            "zh": "药"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "请给我您的处方。",
        "en": "Please give me your prescription.",
        "ipa": "/pliz gɪv mi jɔr prɪˈskrɪpʃən/",
        "words": [
          {
            "en": "Please",
            "zh": "请"
          },
          {
            "en": "give",
            "zh": "给"
          },
          {
            "en": "me",
            "zh": "我"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "prescription",
            "zh": "处方"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这是您的药，请核对一下。",
        "en": "Here is your medicine, please check it.",
        "ipa": "/hɪr ɪz jɔr ˈmɛdɪsɪn pliz tʃɛk ɪt/",
        "words": [
          {
            "en": "Here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "medicine",
            "zh": "药"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "please",
            "zh": "请"
          },
          {
            "en": "check",
            "zh": "核对"
          },
          {
            "en": "it",
            "zh": "它"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这药怎么吃？",
        "en": "How should I take this medicine?",
        "ipa": "/haʊ ʃʊd aɪ teɪk ðɪs ˈmɛdɪsɪn/",
        "words": [
          {
            "en": "How",
            "zh": "怎么"
          },
          {
            "en": "should",
            "zh": "应该"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "take",
            "zh": "服用"
          },
          {
            "en": "this",
            "zh": "这"
          },
          {
            "en": "medicine",
            "zh": "药"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "每天三次，每次一片，饭后吃。",
        "en": "Three times a day, one tablet each time, after meals.",
        "ipa": "/θri taɪmz ə deɪ wʌn ˈtæblət itʃ taɪm ˈæftər milz/",
        "words": [
          {
            "en": "Three",
            "zh": "三"
          },
          {
            "en": "times",
            "zh": "次"
          },
          {
            "en": "a",
            "zh": "每"
          },
          {
            "en": "day",
            "zh": "天"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "one",
            "zh": "一"
          },
          {
            "en": "tablet",
            "zh": "片"
          },
          {
            "en": "each",
            "zh": "每"
          },
          {
            "en": "time",
            "zh": "次"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "after",
            "zh": "之后"
          },
          {
            "en": "meals",
            "zh": "餐"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这药需要冷藏吗？",
        "en": "Does this medicine need to be refrigerated?",
        "ipa": "/dʌz ðɪs ˈmɛdɪsɪn nid tə bi rɪˈfrɪdʒəˌreɪtɪd/",
        "words": [
          {
            "en": "Does",
            "zh": "助动词"
          },
          {
            "en": "this",
            "zh": "这"
          },
          {
            "en": "medicine",
            "zh": "药"
          },
          {
            "en": "need",
            "zh": "需要"
          },
          {
            "en": "to",
            "zh": "被"
          },
          {
            "en": "be",
            "zh": "是"
          },
          {
            "en": "refrigerated",
            "zh": "冷藏"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "不需要，放在阴凉处就行。",
        "en": "No, just keep it in a cool place.",
        "ipa": "/noʊ dʒʌst kip ɪt ɪn ə kul pleɪs/",
        "words": [
          {
            "en": "No",
            "zh": "不"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "just",
            "zh": "只要"
          },
          {
            "en": "keep",
            "zh": "放"
          },
          {
            "en": "it",
            "zh": "它"
          },
          {
            "en": "in",
            "zh": "在"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "cool",
            "zh": "阴凉的"
          },
          {
            "en": "place",
            "zh": "地方"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这个药多少钱？",
        "en": "How much does this medicine cost?",
        "ipa": "/haʊ mʌtʃ dʌz ðɪs ˈmɛdɪsɪn kɔst/",
        "words": [
          {
            "en": "How",
            "zh": "多少"
          },
          {
            "en": "much",
            "zh": "钱"
          },
          {
            "en": "does",
            "zh": "助动词"
          },
          {
            "en": "this",
            "zh": "这"
          },
          {
            "en": "medicine",
            "zh": "药"
          },
          {
            "en": "cost",
            "zh": "花费"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "一共五十六元。",
        "en": "It is fifty-six yuan in total.",
        "ipa": "/ɪt ɪz ˈfɪfti sɪks ˈjwɑn ɪn ˈtoʊtəl/",
        "words": [
          {
            "en": "It",
            "zh": "它"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "fifty-six",
            "zh": "五十六"
          },
          {
            "en": "yuan",
            "zh": "元"
          },
          {
            "en": "in",
            "zh": "总共"
          },
          {
            "en": "total",
            "zh": "总计"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "我可以用医保卡吗？",
        "en": "Can I use my medical insurance card?",
        "ipa": "/kæn aɪ juz maɪ ˈmɛdɪkəl ɪnˈʃʊrəns kɑrd/",
        "words": [
          {
            "en": "Can",
            "zh": "可以"
          },
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "use",
            "zh": "用"
          },
          {
            "en": "my",
            "zh": "我的"
          },
          {
            "en": "medical",
            "zh": "医疗的"
          },
          {
            "en": "insurance",
            "zh": "保险"
          },
          {
            "en": "card",
            "zh": "卡"
          },
          {
            "en": "?",
            "zh": ""
          }
        ]
      },
      {
        "zh": "可以，请刷卡。",
        "en": "Yes, please swipe your card.",
        "ipa": "/jɛs pliz swaɪp jɔr kɑrd/",
        "words": [
          {
            "en": "Yes",
            "zh": "可以"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "please",
            "zh": "请"
          },
          {
            "en": "swipe",
            "zh": "刷"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "card",
            "zh": "卡"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "这是您的收据和药。",
        "en": "Here is your receipt and medicine.",
        "ipa": "/hɪr ɪz jɔr rɪˈsit ænd ˈmɛdɪsɪn/",
        "words": [
          {
            "en": "Here",
            "zh": "这里"
          },
          {
            "en": "is",
            "zh": "是"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "receipt",
            "zh": "收据"
          },
          {
            "en": "and",
            "zh": "和"
          },
          {
            "en": "medicine",
            "zh": "药"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "如果症状没有改善，请回来。",
        "en": "If your symptoms do not improve, please come back.",
        "ipa": "/ɪf jɔr ˈsɪmptəmz du nɑt ɪmˈpruv pliz kʌm bæk/",
        "words": [
          {
            "en": "If",
            "zh": "如果"
          },
          {
            "en": "your",
            "zh": "您的"
          },
          {
            "en": "symptoms",
            "zh": "症状"
          },
          {
            "en": "do",
            "zh": "助动词"
          },
          {
            "en": "not",
            "zh": "没有"
          },
          {
            "en": "improve",
            "zh": "改善"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "please",
            "zh": "请"
          },
          {
            "en": "come",
            "zh": "来"
          },
          {
            "en": "back",
            "zh": "回"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "祝您早日康复。",
        "en": "I wish you a speedy recovery.",
        "ipa": "/aɪ wɪʃ ju ə ˈspidi rɪˈkʌvəri/",
        "words": [
          {
            "en": "I",
            "zh": "我"
          },
          {
            "en": "wish",
            "zh": "祝"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": "a",
            "zh": "一个"
          },
          {
            "en": "speedy",
            "zh": "快速的"
          },
          {
            "en": "recovery",
            "zh": "康复"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      },
      {
        "zh": "谢谢，再见。",
        "en": "Thank you, goodbye.",
        "ipa": "/θæŋk ju gʊdˈbaɪ/",
        "words": [
          {
            "en": "Thank",
            "zh": "谢谢"
          },
          {
            "en": "you",
            "zh": "您"
          },
          {
            "en": ",",
            "zh": ""
          },
          {
            "en": "goodbye",
            "zh": "再见"
          },
          {
            "en": ".",
            "zh": ""
          }
        ]
      }
    ],
    "sentenceCount": 51
  }
]; export default presetCourses;
