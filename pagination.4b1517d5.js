function generatePagination(n,a){var c=document.getElementById("pagination-s2a1");c.innerHTML="";for(var e=[n],t=1;t<=2;t++)n-t>0&&e.unshift(n-t),n+t<=a&&e.push(n+t);1!==e[0]&&(c.innerHTML+='<a href="#" onclick="changePage(1)">1</a>',2!==e[0]&&(c.innerHTML+="<span>...</span>")),e.forEach((function(a){var e=a===n?"current":"";c.innerHTML+='<a href="#" onclick="changePage('.concat(a,')" class="').concat(e,'">').concat(a,"</a>")})),e[e.length-1]!==a&&(e[e.length-1]!==a-1&&(c.innerHTML+="<span>...</span>"),c.innerHTML+='<a href="#" onclick="changePage('.concat(a,')">').concat(a,"</a>"))}function changePage(n){console.log("Przejście do strony",n)}var currentPage_s2a1=3,totalPages_s2a1=5;generatePagination(currentPage_s2a1,totalPages_s2a1);var element=document.querySelector(".control-pagination ul"),totalPages=1e3,page=10;function createPagination(n,a){var c="",e=a-2,t=a+2;a>1&&(c+='<li class="btn prev" onclick="createPagination('.concat(n,", ").concat(a-1,')"><svg width="16" height="16">\n                  <use href="../images/icons.svg#icon-arrow-right"></use>\n                </svg></li>')),a>3&&(c+='<li class="first numb" onclick="createPagination('.concat(n,', 1)"><span>1</span></li>'),a>4&&(c+='<li class="dots"><span>...</span></li>')),a==n&&(e-=1),1==a&&(t+=1);for(var i=e;i<=t;i++)i>n||i<=0||(c+='<li class="numb '.concat(a==i?"active":"",'" onclick="createPagination(').concat(n,", ").concat(i,')"><span>').concat(i,"</span></li>"));return a<n-2&&(a<n-3&&(c+='<li class="dots"><span>...</span></li>'),c+='<li class="last numb" onclick="createPagination('.concat(n,", ").concat(n,')"><span>').concat(n,"</span></li>")),a<n&&(c+='<li class="btn next" onclick="createPagination('.concat(n,", ").concat(a+1,')"><svg width="16" height="16">\n          <use href="../images/icons.svg#icon-arrow-right"></use>\n        </svg></li>')),element.innerHTML=c,c}element.innerHTML=createPagination(totalPages,page);
//# sourceMappingURL=pagination.4b1517d5.js.map
