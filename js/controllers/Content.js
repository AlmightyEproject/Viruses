
  var test = document.createElement('div')
app.controller('Content', ['$scope', 'content', '$routeParams', function($scope, content, $routeParams) {
      content.success(function(data) {
        $scope.content = format(data[$routeParams.id].from)[0]
      });
    }
  
  
  
  ]);

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
          let strong_em = item.match(/\*\*\*[^*]+\*\*\*/gi);
          if(strong_em!=null){
              for (let em_item of strong_em) {
                  let em_old = em_item
                  em_item = em_item.match(/[^*]+/gi)
                  e = e.replace(em_old,`<strong><ins>${em_item}</ín></strong>`)
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
  
          let img = item.match(/\!\[img\]\([^*]+\)+/gi)
          if(img!=null){
              for (let img_item of img) {
                  let img_old = img_item
                  img_item = img_item.match(/\([^]+\)/gi)[0]
                  img_item = img_item.match(/[^\(,\)]+/gi)[0]
                
                  e = e.replace(img_old,`<br><img src="${img_item}"><br>`)        
              }
          }
  
          let a = item.match(/\[[^]+\]\([^]+\)/gi)
          if(a!=null){
              for (let a_item of a) {
                  let link = a_item.match(/\[[^]+\]/gi);
                  let href = a_item.match(/\([^]+\)/gi);
                  link = link[0].match(/[^\[,\]]+/gi)
                  href = href[0].match(/[^\(,\)]/gi)
                  e = e.replace(a_item,`<a href="${href[0]}">${link[0]}</a>`)
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
  
    
    return  content_fm
  }
  

  
