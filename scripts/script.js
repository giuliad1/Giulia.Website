// Make variables
const pages = document.getElementsByClassName("page");
let pageCount = pages.length;
let currentPage = 0;

function nextPage() {
    if(currentPage + 1 >= pageCount) {
        console.log("Already at last page.");
        return;
    }

    pages[currentPage].classList.toggle('hidden');
    
    currentPage++;
    
    pages[currentPage].classList.toggle('hidden');
    console.log("Next page activated.");
}

function prevPage() {
    if(currentPage - 1 < 0) {
        console.log("Already at first page.");
        return;
    }

    pages[currentPage].classList.toggle('hidden');
    
    currentPage--;
    
    pages[currentPage].classList.toggle('hidden');
    console.log("Previous page activated.");
}

function toggleNav() {
    let navbar = document.getElementById('sidebar-nav');
    navbar.classList.toggle('hidden');
}

const leftButton = document.getElementById("page-left-button");
const rightButton = document.getElementById("page-right-button");

leftButton.onclick = prevPage;
rightButton.onclick = nextPage;