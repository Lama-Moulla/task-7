function initializeProducts() {
    if (!localStorage.getItem("products")) {
        const defaultProducts = [
            {
                id : 1,
                ProductName : "laptop",
                Price : `686$`,
                Category : "electronic",
                Image : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_2TZLfzygBN5iL139hbVU9ruI_aS6-WFTiYNa72-UltcJW2vPSamxPkR5M1ncWf_ffHXspH7x0bmiC5WHKFsQYrZwITkBvGg4oaUMzdBG"
            },
            {
                id : 2,
                ProductName :"laptop",
                Price : `583$`,
                Category : "electronic",
                Image : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSFHy7OxA9BusUQdDWKmJN2rKeuVPE7yTc6IIKEnB7lLJpn-2eS1KZR_75mA8Ow1he0tCN4HYlVR2ki9IgoAoddwYHSkcyexZ8ugphFQNaCzX3DxCGogNca"
            },
            {
                id : 3,
                ProductName :"gold jwellary",
                Price : `104500$`,
                Category : "clothes",
                Image : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOpC7u7xhtqdNdjF2KVaLlhvZPH3PT6zliuGuE6cspUdmzlQss9khm-vrNLn34IBM_yJfhPaEvNRzjJlKizezGhURvwZZbGViA9ScMo_tn5en4L-J4g6iAplZ0YCTEhnVy_SP5cjP4Ow&usqp=CAc"
            },
            {
                id : 4,
                ProductName :"gold jwellary",
                Price : `533$`,
                Category : "clothes",
                Image : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTzowBwGRq4PMgxGkJT2H43HdDXZ2Oz5IvTZjialN2_fbkfkNWEAdWZgQDgJwmI5kJY8q7vDhtE74Xx2UxblgKSiIVamUBt_Xq2iFfqEkJNSDmbyW5P8hxuf7qMw1BaMHRk3mkbsdtjav0&usqp=CAc"
            },
            {
                id : 5,
                ProductName :"silver jwellary",
                Price : `53$`,
                Category : "clothes",
                Image : "data:image/webp;base64,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"
            },
            {
                id : 6,
                ProductName :"laptop",
                Price : `333.84$`,
                Category : "electronic",
                Image : "data:image/jpeg;base64,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"
            }
        ]
        localStorage.setItem("products", JSON.stringify(defaultProducts))
    }
}

initializeProducts()



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

    if (productsToShow.length <= 3) {
    arrows.style.display = "none";
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
