!function(){!function(n,a){var t=document.getElementById("pagination-s2a1");t.innerHTML="";for(var i=[n],c=1;c<=2;c++)n-c>0&&i.unshift(n-c),n+c<=a&&i.push(n+c);1!==i[0]&&(t.innerHTML+='<a href="#" onclick="changePage(1)">1</a>',2!==i[0]&&(t.innerHTML+="<span>...</span>")),i.forEach((function(a){var i=a===n?"current":"";t.innerHTML+='<a href="#" onclick="changePage('.concat(a,')" class="').concat(i,'">').concat(a,"</a>")})),i[i.length-1]!==a&&(i[i.length-1]!==a-1&&(t.innerHTML+="<span>...</span>"),t.innerHTML+='<a href="#" onclick="changePage('.concat(a,')">').concat(a,"</a>"))}(3,5);var n=document.querySelector(".control-pagination ul");n.innerHTML=function(a,t){var i,c,e="",s=t-2,o=t+2;t>1&&(e+='<li class="btn prev" onclick="createPagination('.concat(a,", ").concat(t-1,')"><svg width="16" height="16">\n                  <use href="../images/icons.svg#icon-arrow-right"></use>\n                </svg></li>'));t>3&&(e+='<li class="first numb" onclick="createPagination('.concat(a,', 1)"><span>1</span></li>'),t>4&&(e+='<li class="dots"><span>...</span></li>'));t==a&&(s-=1);1==t&&(o+=1);for(var l=s;l<=o;l++)l>a||l<=0||(t==l?(c="active",i="id = 'pagination-current-page'"):(c="",i=""),e+='<li class="numb '.concat(c,'" ').concat(i,' onclick="createPagination(').concat(a,", ").concat(l,')"><span>').concat(l,"</span></li>"));t<a-2&&(t<a-3&&(e+='<li class="dots"><span>...</span></li>'),e+='<li class="last numb" onclick="createPagination('.concat(a,", ").concat(a,')"><span>').concat(a,"</span></li>"));t<a&&(e+='<li class="btn next" onclick="createPagination('.concat(a,", ").concat(t+1,')"><svg width="16" height="16">\n          <use href="../images/icons.svg#icon-arrow-right"></use>\n        </svg></li>'));return n.innerHTML=e,e}(1e3,10);var a=document.querySelector(".pagination ul");a.innerHTML=function(n,t){var i="",c=t-1,e=t+1;t>1&&(i+='<li class="btn prev" onclick="createPaginationOrigin(totalPages, '.concat(t-1,')"><span><i class="fas fa-angle-left"></i> Prev</span></li>'));t>2&&(i+='<li class="first numb" onclick="createPaginationOrigin(totalPages, 1)"><span>1</span></li>',t>3&&(i+='<li class="dots"><span>...</span></li>'));t==n?c-=2:t==n-1&&(c-=1);1==t?e+=2:2==t&&(e+=1);for(var s=c;s<=e;s++)s>n||(0==s&&(s+=1),i+='<li class="numb '.concat(t==s?"active":"",'" onclick="createPaginationOrigin(totalPages, ').concat(s,')"><span>').concat(s,"</span></li>"));t<n-1&&(t<n-2&&(i+='<li class="dots"><span>...</span></li>'),i+='<li class="last numb" onclick="createPaginationOrigin(totalPages, '.concat(n,')"><span>').concat(n,"</span></li>"));t<n&&(i+='<li class="btn next" onclick="createPaginationOrigin(totalPages, '.concat(t+1,')"><span>Next <i class="fas fa-angle-right"></i></span></li>'));return a.innerHTML=i,i}(1e3,10);var t=document.querySelector("ul#pagination-new-list"),i=document.querySelector("div#pagination-new"),c=document.querySelector("div#example-pagination-new");!function(n,a,e){var s,o,l="",r=a-2,g=a+2,p=null,u=document.createElement("img");if(a>1){(p=document.createElement("li")).classList.add("pagination-new-first"),p.dataset.page="".concat(a-1);var d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("width","16"),d.setAttribute("height","16"),d.classList.add("pagination-new-icon");var h=document.createElementNS("http://www.w3.org/2000/svg","use");h.setAttributeNS("http://www.w3.org/1999/xlink","href","../images/icons.svg#icon-arrow-right"),d.appendChild(h),p.appendChild(u),l+='<li class="btn prev" data-page="'.concat(a-1,'"><svg width="16" height="16">\n                  <use href="../images/icons.svg#icon-arrow-right"></use>\n                </svg></li>')}a>3&&(l+='<li class="first numb" data-page="1"><span>1</span></li>',a>4&&(l+='<li class="dots"><span>...</span></li>'));a==n&&(r-=1);1==a&&(g+=1);for(var v=r;v<=g;v++)v>n||v<=0||(a==v?(o="active",s="id = 'pagination-current-page'"):(o="",s=""),l+='<li class="numb '.concat(o,'" ').concat(s,' data-page="').concat(v,'"><span>').concat(v,"</span></li>"));a<n-2&&(a<n-3&&(l+='<li class="dots"><span>...</span></li>'),l+='<li class="last numb" data-page="'.concat(n,'"><span>').concat(n,"</span></li>"));a<n&&(l+='<li class="btn next" data-page="'.concat(a+1,'"><svg width="16" height="16">\n          <use href="./images/icons.svg#icon-arrow-right"></use>\n        </svg></li>'));console.log("listItemFirst",p),t&&i.appendChild(p);t.querySelectorAll("li[data-page]").forEach((function(n){n.addEventListener("click",(function(n){var a=Number(n.currentTarget.getAttribute("data-page"));e(a)}))})),function(n,a){var t=document.createElement("pre");t.classList.add("example-theory-pre-pagination");var i=a.innerHTML.split("  ").join("");t.textContent="HTML1: ".concat(i),n.prepend(t)}(c,i)}(40,7,(function(){console.log("function something",e),e++}));var e=1}();
//# sourceMappingURL=pagination.690fa80b.js.map
