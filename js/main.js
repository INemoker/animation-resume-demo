
function writeCode(prefix, code, fn) {
    var domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    var n = 0
    var id = setInterval(() => {
        n += 1
        domCode.innerHTML =
            Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        domCode.scrollTop = domCode.scrollHeight
        styleTag.innerHTML = prefix + code.substring(0, n)
        if (n > code.length) {
            window.clearInterval(id)
            fn.call()
            //这里是回调
        }
    }, 20)
}
function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper')
    let n = 0
    var id = setInterval(() => {
        n += 1
        domPaper.innerHTML =
            markdown.substring(0, n)
        // Prism.highlight(markdown.substring(0,n),Prism.languages.markdown)
        domPaper.scrollTop = markdown.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 20)
}

function formatMarkdown(fn) {
    let domPaper = document.querySelector('#paper')
    domPaper.innerHTML = marked(domPaper.innerHTML)
    fn.call()
}

function createPaper(fn) {//这是一个回调函数
    var paper = document.createElement('pre')
    paper.id = 'paper'
    document.body.appendChild(paper)
    fn.call()
}

function playMusic(fn) {
    let music = document.createElement('audio')
    music.id = 'music'
    music.volume = 0.5
    music.autoplay = true
    music.src = './Logic - Welcome To Forever.mp3'
    music.controls = true
    document.body.appendChild(music)
    fn.call()
}




var result =
    `/*面试官，你好。
    首先介绍以下我自己，
    以文字介绍太单调了，
    那就来一些代码吧~
    首先准备一些样式*/
*{
    transition: all 1s;
    padding: 0;
    margin: 0;
}
body{
    background:#93959D;
}
#code{
    border: 1px solid black;
    padding: 16px;
    height: 100vh;
    font-size: 18px; 
    overflow: auto;
}
/*现在我们给代码加一点颜色吧*/ 
.token.selector{
    color: #A6D626;
}
.token.punctuation{
    color: #FFCC16;
}
.token.property{
    color: #52C8EF;
}
.token.comment{
    color: white;
}
/*加点3D效果*/
#code{
    transform: rotate(360deg);
}
/*来点音乐dO.ob*/
audio{
    position: fixed;
    right: 0;
    bottom: 0;
    z-index:1;
}
`
var result2 = `
/*好了不玩了，给我来一张白纸*/
#code{
    position: fixed;
    left: 0;
    width: 50%;
    transition: all 2s;
}
#paper{
    position: fixed;
    transition: all 1s;
    width: 50%;
    height: 100vh;
    background:white;
    top:0;
    transform: translateX(100%);
    margin:10px;
    box-shadow: 0px 0px 40px black;
} `
var md = `
# 自我介绍 #
---
我是Nemo，1993年1月出生，毕业于XXXX大学，因喜爱编程所以自学前端，希望能应聘前端开发岗位。

## 技能介绍 ##
---
熟悉Javascript CSS

## 项目介绍 ##
---
 · 轮播
 · 会动的简历
 · canvas画板
## 联系方式 ##
---
 · QQ: 330612768
 · Email: lil_puppy@163.com
 · 手机/同微信: xxxxxxxxx
 ![](https://i.imgur.com/us8CYfv.jpg)
`
var result3 = `
/*白纸好丑，变一下*/
#paper{
    padding: 26px;
    font-size: 18px;
}
/*加一点效果*/
#paper{
    animation:breath alternate-reverse infinite 3s;
    overflow: auto;
}
@keyframes breath {
	from {
	box-shadow: 0 0 40px white;
}
 50% {
	box-shadow: 0 0 40px black;
}
to {
	box-shadow: 0 0 40px white;
}`
writeCode('', result, () => {//写第一段
    playMusic(() => {//加音乐
        createPaper(() => {//创建paper
            writeCode(result, result2, () => {//写第二段
                writeMarkdown(md, () => {//写md
                    writeCode(result + result2, result3, () => {//给paper加样式
                        formatMarkdown(() => {})//格式化md
                    }) 
                })
            })
        })
    })
})




