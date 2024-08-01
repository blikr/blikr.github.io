// adjust-code-block-height.js
// 限制代码块高度
document.addEventListener("DOMContentLoaded", function() {
    // 选择所有的.md-text元素
    var codeBlocks = document.querySelectorAll('.md-text');
    // 遍历每个.md-text元素
    codeBlocks.forEach(function(block) {
      // 检查是否包含.highlight类的子元素，且父元素高度超过500px
      var highlightBlocks = block.querySelectorAll('.highlight');
      highlightBlocks.forEach(function(highlightBlock) {
        if (highlightBlock.clientHeight > 500) {
          highlightBlock.style.maxHeight = '300px';
          highlightBlock.style.overflow = 'auto';
        }
      });
    });
  });

  // add-external-link-icon.js
  // 外部链接后面显示图标
  document.addEventListener('DOMContentLoaded', function () {

    const links = document.querySelectorAll('article.md-text.content a, footer.page-footer.footnote a');
    links.forEach(function(link) {
        const parentClasses = ['tag-plugin.users-wrap', 'tag-plugin.sites-wrap', 'tag-plugin.ghcard', 'tag-plugin.link.dis-select', 'tag-plugin.colorful.note', 'social-wrap.dis-select'];
        let skip = false;
        parentClasses.forEach(pc => {
            if (link.closest(`div.${pc}`)) {
                skip = true;
            }
        });

        if (!skip) {
            const href = link.getAttribute('href');
            if (href && (href.startsWith('http') || href.startsWith('/'))) {
                link.innerHTML += ` <span style="white-space: nowrap;"><svg width=".7em" height=".7em" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><path d="m13 3l3.293 3.293l-7 7l1.414 1.414l7-7L21 11V3z" fill="currentColor" /><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" fill="currentColor"></svg></span>`;
            }
        }
    });
});


// hexo.extend.filter.register('after_render:html', function (data) {
//   const posts = []
//   hexo.locals.get('posts').map(function (post) {
//     if (post.random !== false) posts.push(post.path)
//   })
//   data += `<script>var posts=${JSON.stringify(posts)};function toRandomPost(){ window.pjax ? pjax.loadUrl('/'+posts[Math.floor(Math.random()*posts.length)]) : window.open('/'+posts[Math.floor(Math.random()*posts.length)], "_self"); };</script>`
//   return data
// })