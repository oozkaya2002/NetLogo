let currentPage = 1;
let isAnimating = false;

function showPage(pageNumber) {
  let pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.remove("active");
  }
  pages[pageNumber - 1].classList.add("active");
}

function nextPage() {
  if (!isAnimating) {
    isAnimating = true;
    currentPage++;
    if (currentPage > 2) {
      currentPage = 1;
    }
    console.log("Next page: " + currentPage);
    showPage(currentPage);

    setTimeout(() => {
      isAnimating = false;
    }, 500); // Delay to prevent multiple rapid taps
  }
}
