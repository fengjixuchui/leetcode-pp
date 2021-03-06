<template>
  <div>
    切换主题：<a-select
      :value="currentTheme"
      style="width: 240px"
      @change="handleThemeChange"
    >
      <a-select-option value="empty">
        默认主题
      </a-select-option>
      <a-select-option value="blue">
        蓝调
      </a-select-option>
      <a-select-option value="bluew">
        蓝调（无网格）
      </a-select-option>
      <a-select-option value="purple">
        紫调
      </a-select-option>
      <a-select-option value="purplew">
        紫调（无网格）
      </a-select-option>
      <a-select-option value="wechat">
        wechat
      </a-select-option>
      <a-select-option value="vue">
        vue
      </a-select-option>
    </a-select>
    <div class="outline" v-show="false"></div>
    <div class="wrapper" id="nice">
      <div v-if="loading" class="spinner-container">
        <a-spin size="large"></a-spin>
      </div>
      <div v-if="!loading" class="container">
        <div class="max-width-800">
          <a-alert
            v-if="hasError"
            message="很抱歉，目前请求无法执行，请稍候再试。"
            type="error"
          />
        </div>
        <h2 class="subtitle" v-if="type === '0'">题解详情</h2>
        <div class="desc text-align-left" v-html="desc"></div>
      </div>
    </div>
    <!-- <a-button size="small" type="primary" @click="handleCopyClick"
      >复制内容</a-button
    > -->

    <div class="pagination" v-if="type === '2' || type === '3'">
      <a-button
        class="pagination-button"
        :disabled="disabledPre"
        size="small"
        type="primary"
        @click="handlePreClick"
        >上一页</a-button
      >
      <a-button
        size="small"
        :disabled="disabledNext"
        class="pagination-button"
        type="primary"
        @click="handleNextClick"
        >下一页</a-button
      >
    </div>
  </div>
</template>

<script>
import { Base64 } from 'js-base64'
import MarkdownIt from 'markdown-it'
import markdownItLatex from '@iktakahiro/markdown-it-katex'
import markdownItImplicitFigures from 'markdown-it-implicit-figures'
// import DocumentOutliner from 'document-outliner'

import highlightLines from '../utils/highlight-lines'
import hljs from '../utils/langHighlight'
import 'highlight.js/styles/github.css'
import { getLectureDetails, getDailyProblemSolution } from '@/apis/91'
import markdownItSpan from '../utils/markdown-it-span'
import markdownItMultiquote from '../utils/markdown-it-multiquote'
import markdownItImageflow from '../utils/markdown-it-imageflow'
import markdownItLinkfoot from '../utils/markdown-it-linkfoot'
import markdownItLi from '../utils/markdown-it-li'
import markdownItRemovepre from '../utils/markdown-it-removepre'
import markdownItTableContainer from '../utils/markdown-it-table-container'
import { replaceStyle } from '../utils/style'
import { copyToClipboard } from '../utils/browser'
import theme from '../themes/index'
import { getStorage, setStorage } from '../utils/storage'
import { getGithubContent } from '../apis/github'

import students from './91/students-talk'

import '../themes/atom-one-dark.less'
import '../themes/base.less'
import '../themes/outline-base.less'

const { blue, purple, wechat, vue } = theme
const options = {
  html: true
}
const md = new MarkdownIt(options)
md.use(markdownItImplicitFigures, { figcaption: true })
md.use(highlightLines)
md.use(markdownItLatex)
md.use(markdownItSpan)
md.use(markdownItMultiquote)
md.use(markdownItImageflow)
md.use(markdownItLinkfoot)
md.use(markdownItLi)
md.use(markdownItRemovepre)
md.use(markdownItTableContainer)

md.options.highlight = (str, lang) => {
  if (lang === undefined || lang === '') {
    lang = 'bash'
  }
  // 加上custom则表示自定义样式，而非微信专属，避免被remove pre
  if (hljs.getLanguage(lang)) {
    const formatted = hljs
      .highlight(lang, str, true)
      .value.replace(/\n/g, '<br/>') // 换行用br表示
      .replace(/\s/g, '&nbsp;') // 用nbsp替换空格
      .replace(/span&nbsp;/g, 'span ') // span标签修复
    return (
      '<pre class="custom"><code class="hljs">' + formatted + '</code></pre>'
    )
  }
}

const URL_REGEX = /(\s+)(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g
const LINK_REGRX = /\[(.*)\]\(\.\.\/(.*)\)/g
const WAREHOURSE_ADDRESS =
  'https://github.com/azl397985856/leetcode/raw/master/'
const ERROR_MSG_DISPLAY_DURATION = 5000

export default {
  data() {
    return {
      // 0 : 题解(github api)
      // 1: 专题(github api)
      // 2: 91讲义 (leetcode-pp-node api)
      // 3: 91每日一题题解(leetcode-pp-node api)
      // 4: 个人访谈
      // 5: github reader
      currentTheme: 'empty',
      type: 0,
      loading: true,
      hasError: false,
      desc: '',
      prettified: false,
      labels: []
    }
  },
  computed: {
    disabledPre() {
      return this.type === '2'
        ? ['1001', '2001', '3001', '4001'].includes(this.$route.query.id)
        : +this.$route.query.id <= 1
    },
    disabledNext() {
      return +this.$route.query.id >= this.$route.query.max_id
    }
  },
  methods: {
    handleCopyClick() {
      try {
        copyToClipboard(this.desc)
        this.$message.success({
          message: '复制成功'
        })
      } catch (err) {
        this.$message.error({
          message: '浏览器太旧了~'
        })
        console.log(err)
      }
    },
    handleNextClick() {
      this.$router.push({
        path: 'solutionDetail',
        query: {
          ...this.$route.query,
          id: +this.$route.query.id + 1
        }
      })
    },
    handlePreClick() {
      this.$router.push({
        path: 'solutionDetail',
        query: {
          ...this.$route.query,
          id: +this.$route.query.id - 1
        }
      })
    },
    handleThemeChange(v) {
      this.currentTheme = v
      if (v === 'purple' || v === 'purplew') {
        replaceStyle(
          'theme-style',
          purple({ withoutGrid: v === 'purplew' }).content
        )
      }
      if (v === 'blue' || v === 'bluew') {
        replaceStyle(
          'theme-style',
          blue({ withoutGrid: v === 'bluew' }).content
        )
      }
      if (v === 'empty') {
        replaceStyle('theme-style', '')
      }
      if (v === 'wechat') {
        replaceStyle('theme-style', wechat().content)
      }
      if (v === 'vue') {
        replaceStyle('theme-style', vue().content)
      }
      setStorage('theme', v)
    },
    showError(error) {
      this.hasError = true
      setTimeout(() => {
        this.hasError = false
      }, ERROR_MSG_DISPLAY_DURATION)

      throw error
    },
    async getSolution() {
      try {
        if (this.type === '2') {
          const { content } = await getLectureDetails(this.$route.query.id)

          this.loading = false
          this.desc = md.render(content || '正在快马加鞭书写中~')
        } else if (this.type === '3') {
          const { content } = await getDailyProblemSolution(
            this.$route.query.id
          )
          this.loading = false
          this.desc = md.render(content)
        } else if (this.type === '4') {
          //
          this.loading = false
          const student = students.find(
            student => student.id === this.$route.query.id
          )
          if (student) {
            this.desc = md.render(student.body)
          } else {
            this.showError({
              message: 'id 不存在'
            })
          }
        } else if (this.type === '1') {
          const res = await getGithubContent(this.$route.query.url)
          this.loading = false
          this.desc = md.render(
            this.addLinkMarkdown(Base64.decode(res.content))
          )
        } else if (this.type === '5') {
          const res = await getStorage('github-reader')
          this.loading = false
          this.desc = md.render(res?.result?.value)
        } else {
          this.loading = false
          this.showError({
            message: '不支持的 type'
          })
        }
      } catch (error) {
        this.loading = false
        this.showError(error)
      }
    },
    addLinkMarkdown(content) {
      // 仓库的 markdown 中仓库地址用的相对地址，所以需要 replace 成绝对地址
      return content
        .replace(URL_REGEX, '<$2>')
        .replace(LINK_REGRX, `[$1](${WAREHOURSE_ADDRESS}$2)`)
    }
  },
  async mounted() {
    this.type = this.$route.query.type.toString()
    await this.getSolution()
    // const outliner = new DocumentOutliner('#nice')
    // outliner.makeList('.outline', {
    //   link: true,
    //   listType: 'ul',
    //   listClassName: 'list-group',
    //   itemClassName: 'list-group-item',
    //   anchorName: 'heading-$1'
    // })
    // hljs.configure({ useBR: false })
    // document.querySelectorAll('code').forEach(block => {
    //   hljs.highlightBlock(block)
    // })
    // document.querySelectorAll('img').forEach(block => {
    //   // block.style.maxWidth = '340px'
    //   block.style.width = '100%'
    // })
    getStorage('theme').then(v => {
      if (v?.result?.value) {
        this.handleThemeChange(v?.result?.value)
        this.currentTheme = v?.result?.value
      }
    })
    document
      .getElementsByClassName('wrapper')[0]
      .querySelectorAll('a')
      .forEach(block => {
        block.target = '_blank'
      })
  }
}
</script>

<style lang="less" scoped>
/deep/ p > code {
  display: inline;
}
.pagination-button {
  margin: 10px;
}
.wrapper {
  width: 100%;

  h2.subtitle {
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 32px;
    font-weight: bold;
  }
  .max-width-800 {
    max-width: 800px;
    margin: 30px auto;
  }
  .text-align-left {
    text-align: left;
  }
  .container {
    max-width: 1080px;
    margin: 30px auto;
  }
  .desc {
    margin: 20px 10px;
  }
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .spinner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .tags {
    margin-bottom: 30px;
  }
}
</style>
