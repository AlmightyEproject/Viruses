text = document.querySelector('#blog')
content = document.querySelector('.content-text')
text.value = 
`![img](/img/1.svg)
#H1
##H2
###H3
####H4
#####H5
#####H6
Vertex
**B**
*I*
++T++
[text](href)`
text.onkeyup = function(){ 
    content.innerHTML =` ${format(text.value).join('')}` 
}
document.onmousemove = function(){
    content.innerHTML =` ${format(text.value).join('')}` 
}

// document.onmousemove = function(){ 
//     content.innerHTML =` ${format(text.value).join('')}` 
// }

$('.header-h').click(function(){
    let start = text.selectionStart 
    let end = text.selectionEnd
    const hh = this.className.match(/[0-9]/gi)[0]-'0'
    var h = ''
    for(var i=0;i<hh;i++){
       h+='#'
    }

    text.value = '\n' + text.value.slice(0,start-1) + h +'Header' + text.value.slice(start,text.length)
})
$('#option-bold').click(function(){
    let start = text.selectionStart 
    let end = text.selectionEnd
    text.value = text.value.slice(0,start) + '**' + text.value.slice(start,end) +'**' +text.value.slice(end,text.length)
})
$('#option-italic').click(function(){
    let start = text.selectionStart 
    let end = text.selectionEnd
    text.value = text.value.slice(0,start) + '*' + text.value.slice(start,end) +'*'+text.value.slice(end,text.length)
})
$('#option-underline').click(function(){
    let start = text.selectionStart 
    let end = text.selectionEnd
    text.value = text.value.slice(0,start) + '++' + text.value.slice(start,end) +'++'+text.value.slice(end,text.length)
})
$('#option-link').click(function(){
    let start = text.selectionStart 
    let end = text.selectionEnd
    text.value = text.value.slice(0,start-1) + '[text](href)' + text.value.slice(start,end)
})
$('#option-image').click(function(){
    let img
    let start = text.selectionStart 
    let end = text.selectionEnd
    let upload = document.createElement('input')
    upload.setAttribute("type", "file")
    upload.click()
    const reader = new FileReader();
    upload.addEventListener("change", (event) => {
        // Lấy thông tin tập tin được đăng tải
        const files  = event.target.files;
        
        // Đọc thông tin tập tin đã được đăng tải
        reader.readAsDataURL(files[0])
        
        // Lắng nghe quá trình đọc tập tin hoàn thành
        reader.addEventListener("load", (event) => {
            // Lấy chuỗi Binary thông tin hình ảnh
            img = event.target.result;
            text.value = text.value.slice(0,start-1) + `![img](/img/1.svg)\n` + text.value.slice(start,end)
        })
    })
   
})




function format(text){
    let content = []
    if(typeof text != typeof 'ok'){
        return false
    }
    var br = text.search('\n')

    while(br!=-1){
            content.push(`${text.slice(0,br)}`) 
            text = text.slice(br+1,text.length)
            br = text.search('\n')
    }
    content.push(`${text.slice(br+1,text.length)}`) 
   content = content.filter(e => e!=='')

  content_fm = content.map(function(e){
     let item = e
     if(item.trim()[0] !='#'){

        let img = item.match(/\!\[img\]\([^*]+\)/gi)
    
        if(img!=null){
            for (let img_item of img) {
                img_item = img_item.replace('![img](','')
                img_item = img_item.replace(')','')
                e = `<br><img src="${img_item}"><br>`      
                
            }
        }

        let strong_em = item.match(/\*\*\*[^*]+\*\*\*/gi);
        if(strong_em!=null){
            for (let em_item of strong_em) {
                let em_old = em_item
                em_item = em_item.match(/[^*]+/gi)
                e = e.replace(em_old,`<strong><em>${em_item}</em></strong>`)
            }
        }

        let strong = item.match(/\*\*[^*]+\*\*/gi);
        if(strong!=null){
            for (let strong_item of strong) {
                let strong_old = strong_item
                strong_item = strong_item.match(/[^*]+/gi)
                e = e.replace(strong_old,`<strong>${strong_item}</strong>`)
            }
        }

        let em = item.match(/\*[^*]+\*/gi);
        if(em!=null){
            for (let em_item of em) {
                let em_old = em_item
                em_item = em_item.match(/[^*]+/gi)
                e = e.replace(em_old,`<em>${em_item}</em>`)
            }
        }

        let ins = item.match(/\+\+[^*]+\+\+/gi);
        if(ins!=null){
            for (let ins_item of ins) {
                let ins_old = ins_item
                ins_item = ins_item.match(/[^+]+/gi)
                e = e.replace(ins_old,`<ins>${ins_item}</ins>`)
            }
        }


        let a = item.match(/\[[^]+\]\([^]+\)/gi)
        if(a!=null){
            for (let a_item of a) {
                let link = a_item.match(/\[[^]+\]/gi);
                let href = a_item.match(/\([^]+\)/gi);
                link = link[0].replace(/\[/gi, '')
                href = href[0].replace(/\(/gi, '')
                link = link.replace(/\]/gi, '')
                href = href.replace(/\)/gi, '')
                e = e.replace(a_item,`<a href="${href}">${link}</a>`)
            }
        }
        return `<p>${e}</p>`
     }else{
        if(item.trim().slice(0,6) == '######'){
            return `<h6>${e.match( /[^#]+/g)[0]}</h6>`
        } else  
        if(item.trim().slice(0,5)== '#####'){
            return `<h5>${e.match( /[^#]+/g)[0]}</h5>`
        } else 
        if(item.trim().slice(0,4) == '####'){
            return `<h4>${e.match( /[^#]+/g)[0]}</h4>`
        }
        else 
        if(item.trim().slice(0,3) == '###'){
            return `<h3>${e.match( /[^#]+/g)[0]}</h3>`
        }
        else 
        if(item.trim().slice(0,2) == '##'){
            return `<h2>${e.match( /[^#]+/g)[0]}</h2>`
        }
        else 
                return `<h1>${e.match( /[^#]+/g)[0]}</h1>`

           
     }
  })
   return content_fm
}

