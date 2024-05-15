function generatePagination(currentPage, totalPages) {
  const paginationElement = document.getElementById('pagination-s2a1');
  paginationElement.innerHTML = '';

  const prevPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;

  let pagesToShow = [currentPage];
  for (let i = 1; i <= 2; i++) {
    if (currentPage - i > 0) {
      pagesToShow.unshift(currentPage - i);
    }
    if (currentPage + i <= totalPages) {
      pagesToShow.push(currentPage + i);
    }
  }

  if (pagesToShow[0] !== 1) {
    paginationElement.innerHTML += `<a href="#" onclick="changePage(1)">1</a>`;
    if (pagesToShow[0] !== 2) {
      paginationElement.innerHTML += `<span>...</span>`;
    }
  }

  pagesToShow.forEach(page => {
    const className = page === currentPage ? 'current' : '';
    paginationElement.innerHTML += `<a href="#" onclick="changePage(${page})" class="${className}">${page}</a>`;
  });

  if (pagesToShow[pagesToShow.length - 1] !== totalPages) {
    if (pagesToShow[pagesToShow.length - 1] !== totalPages - 1) {
      paginationElement.innerHTML += `<span>...</span>`;
    }
    paginationElement.innerHTML += `<a href="#" onclick="changePage(${totalPages})">${totalPages}</a>`;
  }
}

function changePage(pageNumber) {
  // Tutaj dodaj kod obsługujący zmianę strony
  console.log('Przejście do strony', pageNumber);
  // Tutaj możesz na przykład załadować nowe dane zgodnie z numerem strony
  // Na potrzeby tego przykładu, wypisuję numer strony w konsoli
}

// Przykładowe użycie
const currentPage_s2a1 = 3; // Aktualna strona
const totalPages_s2a1 = 5; // Całkowita liczba stron
generatePagination(currentPage_s2a1, totalPages_s2a1);

// section3
// https://www.codingnepalweb.com/pagination-ui-design-javascript/
// https://www.youtube.com/watch?v=d2ve7xQNco8
// selecting required element
const element = document.querySelector('.control-pagination ul');
let totalPages = 40;
let page = 10;

element.innerHTML = createPagination(totalPages, page);

function createPagination(totalPages, page) {
  let liTag = '';
  let active;
  let beforePage = page - 2;
  let afterPage = page + 2;

  if (page > 1) {
    liTag += `<li class="btn prev" onclick="createPagination(${totalPages}, ${
      page - 1
    })"><svg width="16" height="16">
                  <use href="../images/icons.svg#icon-arrow-right"></use>
                </svg></li>`;
  }

  if (page > 3) {
    liTag += `<li class="first numb" onclick="createPagination(${totalPages}, 1)"><span>1</span></li>`;
    if (page > 4) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  if (page == totalPages) {
    beforePage = beforePage - 1;
  } else if (page == totalPages - 1) {
    beforePage = beforePage;
  }
  if (page == 1) {
    afterPage = afterPage + 1;
  } else if (page == 2) {
    afterPage = afterPage;
  }

  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      continue;
    }
    if (plength <= 0) {
      continue;
    }
    if (page == plength) {
      active = 'active';
    } else {
      active = '';
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(${totalPages}, ${plength})"><span>${plength}</span></li>`;
  }

  if (page < totalPages - 2) {
    if (page < totalPages - 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(${totalPages}, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="btn next" onclick="createPagination(${totalPages}, ${
      page + 1
    })"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
  }

  element.innerHTML = liTag;
  return liTag;
}

// // section3
// // https://www.codingnepalweb.com/pagination-ui-design-javascript/
// // https://www.youtube.com/watch?v=d2ve7xQNco8
// // selecting required element
// const element = document.querySelector('.pagination ul');
// let totalPages = 40;
// let page = 10;

// //calling function with passing parameters and adding inside element which is ul tag
// element.innerHTML = createPagination(totalPages, page);
// function createPagination(totalPages, page) {
//   let liTag = '';
//   let active;
//   let beforePage = page - 1;
//   let afterPage = page + 1;
//   if (page > 1) {
//     //show the next button if the page value is greater than 1
//     liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${
//       page - 1
//     })"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
//   }

//   if (page > 2) {
//     //if page value is less than 2 then add 1 after the previous button
//     liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
//     if (page > 3) {
//       //if page value is greater than 3 then add this (...) after the first li or page
//       liTag += `<li class="dots"><span>...</span></li>`;
//     }
//   }

//   // how many pages or li show before the current li
//   if (page == totalPages) {
//     beforePage = beforePage - 2;
//   } else if (page == totalPages - 1) {
//     beforePage = beforePage - 1;
//   }
//   // how many pages or li show after the current li
//   if (page == 1) {
//     afterPage = afterPage + 2;
//   } else if (page == 2) {
//     afterPage = afterPage + 1;
//   }
//   for (var plength = beforePage; plength <= afterPage; plength++) {
//     console.log('beforePage', beforePage);
//     console.log('afterPage', afterPage);
//     console.log('plength', plength);
//     if (plength > totalPages) {
//       //if plength is greater than totalPage length then continue
//       continue;
//     }
//     if (plength == 0) {
//       //if plength is 0 than add +1 in plength value
//       plength = plength + 1;
//     }
//     if (page == plength) {
//       //if page is equal to plength than assign active string in the active variable
//       active = 'active';
//     } else {
//       //else leave empty to the active variable
//       active = '';
//     }
//     liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
//   }

//   if (page < totalPages - 1) {
//     //if page value is less than totalPage value by -1 then show the last li or page
//     if (page < totalPages - 2) {
//       //if page value is less than totalPage value by -2 then add this (...) before the last li or page
//       liTag += `<li class="dots"><span>...</span></li>`;
//     }
//     liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
//   }

//   if (page < totalPages) {
//     //show the next button if the page value is less than totalPage(20)
//     liTag += `<li class="btn next" onclick="createPagination(totalPages, ${
//       page + 1
//     })"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
//   }
//   element.innerHTML = liTag; //add li tag inside ul tag
//   return liTag; //reurn the li tag
// }
