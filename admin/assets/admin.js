
const cateAdmin = document.querySelector('#cateAdmin')
const cateSelect = document.querySelector('#select-cate')



function getCate(){
    axios.get('http://localhost:3333/categories')
    .then(response =>{
        const result = response.data.map(cates => {
            return`
                <tr>
                    <td>${cates.id}</td>

                    <td>${cates.name}</td>
                   
                    <td>
                        <a href="./Edit-product.html?id=${cates.id}">     
                            <button class="btn btn-primary">Edit</button>
                        </a>
                        <button onclick="removeCate(${cates.id})" class="btn btn-danger">Delete</button>

                    </td>
                </tr>
            `
        }).join("");
        cateAdmin.innerHTML = result;
    })
}
function removeCate(id){
    axios.delete(`http://localhost:3333/categories/${id}`)
    .then(response => console.log(`response`, response))
}

function getSelectCate(){
    axios.get('http://localhost:3333/categories')
    .then(response => {
        const resulteSelect = response.data.map(selectCate =>{
            return`
                <option value="${selectCate.id}">${selectCate.name}</option>
            `
        }).join("")
        cateSelect.innerHTML = resulteSelect
    })
}
getCate();
getSelectCate();