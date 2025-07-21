const sliderContainer = document.querySelector(".slider")
const form = document.querySelector("form")
const searchInput = document.querySelector("#name")
const categorySelect = document.querySelector("#category")
const sortSelect = document.querySelector("#sort")
const resetBtn = document.querySelector('input[type="reset"]')

let allProducts = JSON.parse(localStorage.getItem("products")) || []
let currentIndex = 0


function renderSlider(productsToShow) {
    sliderContainer.innerHTML = ""

    if (productsToShow.length === 0) {
        sliderContainer.innerHTML = "<p>No products found.</p>"
        return
    }

    const slidesWrapper = document.createElement("div")
    slidesWrapper.classList.add("slidesWrapper")

    productsToShow.forEach(product => {
        const slide = document.createElement("div")
        slide.classList.add("slide")

        slide.innerHTML = `
            <div class="product-card">
                <img src="${product.Image}" alt="${product.ProductName}">
                <h3>${product.ProductName}</h3>
                <p>${product.Price}</p>
            </div>`
        
        slidesWrapper.appendChild(slide);
    })

    const totalMovements = productsToShow.length - 2

    const dotsContainer = document.createElement("div")
    dotsContainer.classList.add("dots")

    for (let i = 0; i < totalMovements; i++) {
        const dot = document.createElement("span")
        dot.classList.add("dote")
        if (i == 0) 
            {dot.classList.add("active")}

        dot.addEventListener("click", () => {
            moveToSlide(i)
        })
        dotsContainer.appendChild(dot)
    }

    const arrows = document.createElement("div")
    arrows.classList.add("arrows")
    arrows.style.position = "absolute"
    arrows.style.top = "50%"
    arrows.style.left = "0"
    arrows.style.width = "100%"
    arrows.style.display = "flex"
    arrows.style.justifyContent = "space-between"
    arrows.style.padding = "0 10px"
    arrows.style.transform = "translateY(-50%)"

    const leftBtn = document.createElement("button")
    leftBtn.innerHTML = '<i class="fa-solid fa-arrow-left"></i>'
    leftBtn.onclick = () => moveToSlide(currentIndex - 1)

    const rightBtn = document.createElement("button")
    rightBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>'
    rightBtn.onclick = () => moveToSlide(currentIndex + 1)

    arrows.appendChild(leftBtn)
    arrows.appendChild(rightBtn)

    sliderContainer.appendChild(slidesWrapper)
    sliderContainer.appendChild(dotsContainer)
    sliderContainer.appendChild(arrows)

    window.sliderState = {
        wrapper: slidesWrapper,
        dots: dotsContainer.querySelectorAll(".dote"),
        total: productsToShow.length,
        maxIndex: totalMovements - 1
    }
}

function moveToSlide(index) {
    const state = window.sliderState
    if (!state) return

    if (index < 0) index = state.maxIndex
    if (index > state.maxIndex) index = 0

    const slide = state.wrapper.querySelector(".slide")
    if (!slide) return

    const style = window.getComputedStyle(slide)
    const slideWidth = slide.offsetWidth + parseInt(style.marginRight || 0)

    const offset = index * slideWidth
    state.wrapper.style.transform = `translateX(-${offset}px)`

    state.dots.forEach((dot) => {dot.classList.remove("active")})
    if (state.dots[index]) state.dots[index].classList.add("active")

    currentIndex = index
}

function applyFilters() {
    const searchValue = searchInput.value.trim().toLowerCase()
    const selectedCategory = categorySelect.value
    const selectedSort = sortSelect.value

    let filtered = [...allProducts]

    if (searchValue) {
        filtered = filtered.filter(product =>
            product.ProductName.toLowerCase().includes(searchValue)
        )
    }

    if (selectedCategory != "all") {
        filtered = filtered.filter(product =>
            product.Category?.toLowerCase() == selectedCategory
        )
    }

    if (selectedSort == "cheap") {
        filtered.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price))
    } 
    else if (selectedSort == "expencive") {
        filtered.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price))
    }

    currentIndex = 0
    renderSlider(filtered)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    applyFilters()
})

resetBtn.addEventListener("click", () => {
    searchInput.value = ""
    categorySelect.value = "all"
    sortSelect.value = ""
    currentIndex = 0
    renderSlider(allProducts)
})

categorySelect.addEventListener("change", applyFilters)
sortSelect.addEventListener("change", applyFilters)

renderSlider(allProducts)
