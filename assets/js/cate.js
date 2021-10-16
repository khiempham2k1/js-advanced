

const subCate = document.querySelector('#sub-cate')


function getCate(){
    axios.get('http://localhost:3333/categories')
    .then(response =>{
        const resultCate = response.data.map(cate=>{
            return`         
            <div class="menu-item">
                <a href="../../shop.html?id=${cate.id}">${cate.name}</a>
            </div>                                              
        `
        }).join("");
        subCate.innerHTML = resultCate
    })
}



getCate()
