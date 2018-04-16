var result = 
`/*面试官，你好。*/
*{
    transition: all 1s;
    padding: 0;
    margin: 0;
}
html{
    background:#93959D;
}
#code{
    border: 1px solid black;
    padding: 16px;
    font-size: 18px; 
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
    box-shadow: 0px 0px 40px black;
}
/*不玩了，下面我来自我介绍，先给我一张白纸*/
`

var n = 0
var id = setInterval(()=>{
  n += 1
  code.innerHTML = result.substring(0,n)
  code.innerHTML = Prism.highlight(code.innerHTML,Prism.languages.css)
  styleTag.innerHTML = result.substring(0,n)
  if(n>result.length){
    window.clearInterval(id)
    fn2()
    fn3(result)
  }
},10)
function fn2(){
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
}
function fn3(preResult){
    var result = `
body{
    width: 100%;
    position: relative;
}
#code{
    transition: all 2s;
    left: 0;
}
#paper{
    transition: all 2s;
    position: absolute;
    width: 50%;
    height: 100vh;
    background:white;
    transform: translateX(100%);
    box-shadow: 0px 0px 40px black;
}

    `

var n = 0
var id = setInterval(()=>{
    n += 1
    code.innerHTML = preResult + result.substring(0,n)
    code.innerHTML = Prism.highlight(code.innerHTML,Prism.languages.css)
    styleTag.innerHTML = preResult +result.substring(0,n)
    if(n >= result.length){
        window.clearInterval(id)
    }
},10)
}

