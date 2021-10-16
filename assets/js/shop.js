const productShop = document.querySelector("#shop-product")
const sidebarCate = document.querySelector('#sidebar-cate')
const productShopAll = document.querySelector("#shop-productAll")

if(productShop){
    function getCateProd(){
        axios.get('http://localhost:3333/products')
        .then(response =>{
            let getProd = response.data.filter(productCate => productCate.categoriesId == id);
            getProd = getProd.map(cateItem =>{
                return`
                    <div class="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                        <div class="product-inner pr">
                            <div class="product-image pr oh lazyload">
                                <a class="d-block" href="../../product-detail.html?id=${cateItem.id}">
                                    <div class="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__127_571"
                                        data-bgset="${cateItem.img}"></div>
                                </a>
                                <div class="nt_add_w ts__03 pa ">
                                    <a href="#" class="wishlistadd cb chp ttip_nt tooltip_right"><span
                                            class="tt_txt">Add to Wishlist</span><i
                                            class="facl facl-heart-o"></i></a>
                                </div>
                                <div class="hover_button op__0 tc pa flex column ts__03">
                                    <a class="pr nt_add_qv js_add_qv cd br__40 pl__25 pr__25 bgw tc dib ttip_nt tooltip_top_left"
                                        href="#"><span class="tt_txt">Quick view</span><i
                                            class="iccl iccl-eye"></i><span>Quick view</span></a>
                                    <a href="#"
                                        class="pr pr_atc cd br__40 bgw tc dib js__qs cb chp ttip_nt tooltip_top_left"><span
                                            class="tt_txt">Quick Shop</span><i
                                            class="iccl iccl-cart"></i><span>Quick Shop</span></a>
                                </div>
                            </div>
                            <div class="product-info mt__15">
                                <h3 class="product-title pr fs__14 mg__0 fwm">
                                    <a class="cd chp" href="../../product-detail.html?id=${cateItem.id}">${cateItem.name}</a>
                                </h3>
                                <span class="price dib mb__5">$${cateItem.price}</span>
                            </div>
                        </div>
                    </div>
                `
            }).join("")
            productShop.innerHTML = getProd
        })
    }
}


function getCateSidebar(){
    axios.get('http://localhost:3333/categories')
    .then(response =>{
        const resultSidebarCate = response.data.map(cateSidebar=>{
            return`         
                <li class="cat-item" >
                    <a id="cat-item" href="../../shop.html?id=${cateSidebar.id}">${cateSidebar.name} <span
                            class="cat_count">(24)</span></a>
                </li>                                      
        `
        }).join("");
        sidebarCate.innerHTML = resultSidebarCate
    })
}




getCateProd()
getCateSidebar()
