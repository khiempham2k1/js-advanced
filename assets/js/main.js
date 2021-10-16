// const axios = require('axios').default;

// const { response } = require("express")

const listProductAdmin = document.querySelector('#productAdmin')
const FormAdd = document.querySelector('#formAdd')
const formEdit = document.querySelector('#formEdit')
const listProductHome = document.querySelector('#product-item')
const relatedProduct = document.querySelector('#related-product')
const detail = document.querySelector('#product-details')


var url = window.location.search;
const urlParams = new URLSearchParams(url);
const id = urlParams.get('id')



if(FormAdd){
    FormAdd.addEventListener('submit', function(e){
        e.preventDefault();
        const add = {
            id: Math.floor(Math.random() * 100),
            name: document.querySelector('#name').value,
            price: document.querySelector('#price').value,
            desc: document.querySelector('#desc').value,
            img: document.querySelector('#img').value,
            categoriesId: document.querySelector('#select-cate').value
        }
        addProduct(add)
    })
}

function getProduct(){
    axios.get('http://localhost:3333/products')
    .then(response =>{
        const result = response.data.map(product => {
            return`
                <tr>
                    <td>${product.id}</td>
                    <td><img src="${product.img}" alt="" width="50px"></td>
                    <td>${product.name}</td>
                    <td><strong>$</strong>${product.price}</td>
                    <td>${product.categoriesId}</td>
                    <td class="td-desc">${product.desc}</td>
                    <td>
                        <a href="./Edit-product.html?id=${product.id}">     
                            <button class="btn btn-primary">Edit</button>
                        </a>
                        <button onclick="removeProduct(${product.id})" class="btn btn-danger">Delete</button>

                    </td>
                </tr>
            `
        }).join("");
        listProductAdmin.innerHTML = result;
    })
}

function getProductHome(){
    axios.get('http://localhost:3333/products?_limit=8')
    .then(response =>{
        const resultHome = response.data.map(productHome => {  
            return`
            <div
                class="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1">
                <div class="product-inner pr">
                    <div class="product-image pr oh lazyload">
                        <a class="db" href="../../product-detail.html?id=${productHome.id}">
                            <div class="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload">
                                <img src="${productHome.img}"/>
                            </div>
                        </a>
                        <div class="nt_add_w ts__03 pa">
                            <a href="#" class="wishlistadd cb chp ttip_nt tooltip_right">
                                <span class="tt_txt">Add to Wishlist</span><i class="facl facl-heart-o"></i>
                            </a>
                        </div>
                        <div class="hover_button op__0 tc pa flex column ts__03">
                            <a class="pr nt_add_qv js_add_qv cd br__40 pl__25 pr__25 bgw tc dib ttip_nt tooltip_top_left"
                                href="../../product-detail.html?id=${productHome.id}">
                                <span class="tt_txt">Quick view</span><i
                                    class="iccl iccl-eye"></i><span>Quick view</span>
                            </a>
                            <a href="#"
                                class="pr pr_atc cd br__40 bgw tc dib js_addtc cb chp ttip_nt tooltip_top_left">
                                <span class="tt_txt">Add to cart</span><i
                                    class="iccl iccl-cart"></i><span>Add to cart</span>
                            </a>
                        </div>
                    </div>
                    <div class="product-info mt__15">
                        <h3 class="product-title pr fs__14 mg__0 fwm">
                            <a class="cd chp" href="../../product-detail.html?id=${productHome.id}">${productHome.name}</a>
                        </h3>
                        <span class="price dib mb__5">
                        <ins><span class="money">$${productHome.price}</span></ins></span>
                    </div>
                </div>
            </div>
            `
        }).join("");
        listProductHome.innerHTML = resultHome;
    })
}


function productDetail(){
    axios.get(`http://localhost:3333/products/` + id)
    .then(response => {
        const resultDetali = `
        <div
            class="col-md-6 col-12 pr product-images img_action_zoom pr_sticky_img kalles_product_thumnb_slide">
            <div class="row theiaStickySidebar">
                <div class="col-12 col-lg col_thumb">
                    <div class="p-thumb p-thumb_ppr images sp-pr-gallery equal_nt nt_contain ratio_imgtrue position_8 nt_slider pr_carousel"
                        data-flickity='{"initialIndex": ".media_id_001","fade":true,"draggable":">1","cellAlign": "center","wrapAround": true,"autoPlay": false,"prevNextButtons":true,"adaptiveHeight": true,"imagesLoaded": false, "lazyLoad": 0,"dragThreshold" : 6,"pageDots": false,"rightToLeft": false }'>
                        <div class="img_ptw p_ptw p-item sp-pr-gallery__img w__100 nt_bg_lz lazyload padding-top__127_66 media_id_001"
                            data-mdid="001" data-height="1440" data-width="1128"
                            data-ratio="0.7833333333333333" data-mdtype="image"
                            data-src="${response.data.img}"
                            data-bgset="${response.data.img}"
                            data-cap="Blush Beanie - color pink , size S"></div>
                    </div>
                </div>
                <div class="dt_img_zoom pa t__0 r__0 dib"></div>
            </div>
        </div>

        <div class="col-md-6 col-12 product-infors pr_sticky_su">
            <div class="theiaStickySidebar">
                <div class="kalles-section-pr_summary kalles-section summary entry-summary mt__30">
                    <h1 class="product_title entry-title fs__16">${response.data.name}</h1>
                    <div class="flex wrap fl_between al_center price-review">
                        <p class="price_range" id="price_ppr">$${response.data.price}</p>
                        <a href="#tab_reviews_product" class="rating_sp_kl dib">
                            <div class="kalles-rating-result">
                                <span class="kalles-rating-result__pipe">
                                    <span
                                        class="kalles-rating-result__start kalles-rating-result__start--big"></span>
                                    <span
                                        class="kalles-rating-result__start kalles-rating-result__start--big"></span>
                                    <span
                                        class="kalles-rating-result__start kalles-rating-result__start--big"></span>
                                    <span
                                        class="kalles-rating-result__start kalles-rating-result__start--big active"></span>
                                    <span
                                        class="kalles-rating-result__start kalles-rating-result__start--big"></span>
                                </span>
                                <span class="kalles-rating-result__number">(12 reviews)</span>
                            </div>
                        </a>
                    </div>
                    <div class="pr_short_des">
                        <p class="mg__0">${response.data.desc}</p>
                    </div>
                    <div class="btn-atc atc-slide btn_des_1 btn_txt_3">
                        <div id="callBackVariant_ppr">
                            <div
                                class="variations mb__40 style__circle size_medium style_color des_color_1">
                                <div class="swatch is-color kalles_swatch_js">
                                    <h4 class="swatch__title">Color:
                                        <span class="nt_name_current user_choose_js">Pink</span>
                                    </h4>
                                    <ul class="swatches-select swatch__list_pr d-flex">
                                        <li class="ttip_nt tooltip_top_right nt-swatch swatch_pr_item"
                                            data-escape="Grey">
                                            <span class="tt_txt">Grey</span><span
                                                class="swatch__value_pr pr bg_color_grey lazyload"></span>
                                        </li>
                                        <li class="ttip_nt tooltip_top nt-swatch swatch_pr_item is-selected"
                                            data-escape="Pink">
                                            <span class="tt_txt">Pink</span><span
                                                class="swatch__value_pr pr bg_color_pink lazyload"></span>
                                        </li>
                                        <li class="ttip_nt tooltip_top nt-swatch swatch_pr_item"
                                            data-escape="Black">
                                            <span class="tt_txt">Black</span><span
                                                class="swatch__value_pr pr bg_color_black lazyload"></span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="swatch is-label kalles_swatch_js">
                                    <h4 class="swatch__title">Size:
                                        <span class="nt_name_current user_choose_js">M</span>
                                    </h4>
                                    <ul class="swatches-select swatch__list_pr d-flex">
                                        <li class="nt-swatch swatch_pr_item pr" data-escape="S">
                                            <span class="swatch__value_pr">S</span>
                                        </li>
                                        <li class="nt-swatch swatch_pr_item pr is-selected"
                                            data-escape="M">
                                            <span class="swatch__value_pr">M</span>
                                        </li>
                                        <li class="nt-swatch swatch_pr_item pr " data-escape="L">
                                            <span class="swatch__value_pr">L</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="nt_cart_form variations_form variations_form_ppr">
                                <div class="variations_button in_flex column w__100 buy_qv_false">
                                    <div class="flex wrap">
                                        <div class="quantity pr mr__10 order-1 qty__true d-inline-block"
                                            id="sp_qty_ppr">
                                            <input type="number"
                                                class="input-text qty text tc qty_pr_js qty_cart_js"
                                                name="quantity" value="1">
                                            <div class="qty tc fs__14">
                                                <button type="button"
                                                    class="plus db cb pa pd__0 pr__15 tr r__0">
                                                    <i class="facl facl-plus"></i></button>
                                                <button type="button"
                                                    class="minus db cb pa pd__0 pl__15 tl l__0">
                                                    <i class="facl facl-minus"></i></button>
                                            </div>
                                        </div>
                                        <div class="nt_add_w ts__03 pa order-3">
                                            <a href="#"
                                                class="wishlistadd cb chp ttip_nt tooltip_top_left">
                                                <span class="tt_txt">Add to Wishlist</span><i
                                                    class="facl facl-heart-o"></i>
                                            </a>
                                        </div>
                                        <button type="submit" data-time="6000" data-ani="shake"
                                            class="single_add_to_cart_button button truncate w__100 mt__20 order-4 d-inline-block animated">
                                            <span class="txt_add ">Add to cart</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="trust_seal_ppr" class="pr_trust_seal tl_md tc">
                        <img class="img_tr_s1 lazyload w__100 max-width__330px"
                            src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%202244%20285%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3C%2Fsvg%3E"
                            alt="" data-srcset="assets/images/single-product/trust_img2.png" />
                    </div>
                    <div class="extra-link mt__35 fwsb">
                        <a class="ajax_pp_js cd chp mr__20" href="#"
                            data-id="#popup-size-guide">Size Guide</a>
                        <a class="ajax_pp_js cd chp mr__20" href="#"
                            data-id="#popup-delivery-and-return">Delivery &amp; Return</a>
                        <a class="ajax_pp_js cd chp" href="#" data-id="#popup-ask-a-question">Ask a
                            Question</a>
                    </div>
                    <div class="product_meta">
                        <span class="sku_wrapper"><span class="cb">SKU:</span> <span
                                class="sku value cg d-inline-block">P15-2</span></span>
                        <span class="posted_in"><span class="cb">Categories:</span> <a
                                href="shop-filter-options.html" class="cg">All</a>, <a
                                href="shop-filter-options.html" class="cg">Best seller</a>, <a
                                href="shop-filter-options.html" class="cg">Bottom</a>, <a
                                href="shop-filter-options.html" class="cg">Dress</a>, <a
                                href="shop-filter-options.html" class="cg">New Arrival</a>, <a
                                href="shop-filter-options.html" class="cg">Women</a></span>
                        <span class="tagged_as"><span class="cb">Tags:</span> <a
                                href="shop-filter-options.html" class="cg">Color Black</a>, <a
                                href="shop-filter-options.html" class="cg">Color Grey</a>, <a
                                href="shop-filter-options.html" class="cg">Color Pink</a>, <a
                                href="shop-filter-options.html" class="cg">Price $7-$50</a>, <a
                                href="shop-filter-options.html" class="cg">Size L</a>, <a
                                href="shop-filter-options.html" class="cg">Size M</a>,
                            <a href="shop-filter-options.html" class="cg">Size S</a></span>
                    </div>
                    <div class="social-share tc">
                        <div
                            class="at-share-btn-elements kalles-social-media d-block text-left fs__0 lh__1">
                            <a href="https://www.facebook.com/"
                                class="at-icon-wrapper at-share-btn at-svc-facebook bg-white kalles-social-media__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                    class="at-icon at-icon-facebook">
                                    <g>
                                        <path
                                            d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z"
                                            fill-rule="evenodd"></path>
                                    </g>
                                </svg>
                            </a>
                            <a href="https://twitter.com/"
                                class="at-icon-wrapper at-share-btn at-svc-twitter bg-white kalles-social-media__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                    class="at-icon at-icon-twitter">
                                    <g>
                                        <path
                                            d="M27.996 10.116c-.81.36-1.68.602-2.592.71a4.526 4.526 0 0 0 1.984-2.496 9.037 9.037 0 0 1-2.866 1.095 4.513 4.513 0 0 0-7.69 4.116 12.81 12.81 0 0 1-9.3-4.715 4.49 4.49 0 0 0-.612 2.27 4.51 4.51 0 0 0 2.008 3.755 4.495 4.495 0 0 1-2.044-.564v.057a4.515 4.515 0 0 0 3.62 4.425 4.52 4.52 0 0 1-2.04.077 4.517 4.517 0 0 0 4.217 3.134 9.055 9.055 0 0 1-5.604 1.93A9.18 9.18 0 0 1 6 23.85a12.773 12.773 0 0 0 6.918 2.027c8.3 0 12.84-6.876 12.84-12.84 0-.195-.005-.39-.014-.583a9.172 9.172 0 0 0 2.252-2.336"
                                            fill-rule="evenodd"></path>
                                    </g>
                                </svg>
                            </a>
                            <a href="https://www.google.com/gmail/about"
                                class="at-icon-wrapper at-share-btn at-svc-email bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                    class="at-icon at-icon-email kalles-social-media__btn">
                                    <g>
                                        <g fill-rule="evenodd"></g>
                                        <path
                                            d="M27 22.757c0 1.24-.988 2.243-2.19 2.243H7.19C5.98 25 5 23.994 5 22.757V13.67c0-.556.39-.773.855-.496l8.78 5.238c.782.467 1.95.467 2.73 0l8.78-5.238c.472-.28.855-.063.855.495v9.087z">
                                        </path>
                                        <path
                                            d="M27 9.243C27 8.006 26.02 7 24.81 7H7.19C5.988 7 5 8.004 5 9.243v.465c0 .554.385 1.232.857 1.514l9.61 5.733c.267.16.8.16 1.067 0l9.61-5.733c.473-.283.856-.96.856-1.514v-.465z">
                                        </path>
                                    </g>
                                </svg>
                            </a>
                            <a href="https://www.pinterest.com/"
                                class="at-icon-wrapper at-share-btn at-svc-pinterest_share bg-white kalles-social-media__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                    class="at-icon at-icon-pinterest_share">
                                    <g>
                                        <path
                                            d="M7 13.252c0 1.81.772 4.45 2.895 5.045.074.014.178.04.252.04.49 0 .772-1.27.772-1.63 0-.428-1.174-1.34-1.174-3.123 0-3.705 3.028-6.33 6.947-6.33 3.37 0 5.863 1.782 5.863 5.058 0 2.446-1.054 7.035-4.468 7.035-1.232 0-2.286-.83-2.286-2.018 0-1.742 1.307-3.43 1.307-5.225 0-1.092-.67-1.977-1.916-1.977-1.692 0-2.732 1.77-2.732 3.165 0 .774.104 1.63.476 2.336-.683 2.736-2.08 6.814-2.08 9.633 0 .87.135 1.728.224 2.6l.134.137.207-.07c2.494-3.178 2.405-3.8 3.533-7.96.61 1.077 2.182 1.658 3.43 1.658 5.254 0 7.614-4.77 7.614-9.067C26 7.987 21.755 5 17.094 5 12.017 5 7 8.15 7 13.252z"
                                            fill-rule="evenodd"></path>
                                    </g>
                                </svg>
                            </a>
                            <a href="https://www.messenger.com"
                                class="at-icon-wrapper at-share-btn at-svc-messenger bg-white kalles-social-media__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"
                                    class="at-icon at-icon-messenger">
                                    <g>
                                        <path
                                            d="M16 6C9.925 6 5 10.56 5 16.185c0 3.205 1.6 6.065 4.1 7.932V28l3.745-2.056c1 .277 2.058.426 3.155.426 6.075 0 11-4.56 11-10.185C27 10.56 22.075 6 16 6zm1.093 13.716l-2.8-2.988-5.467 2.988 6.013-6.383 2.868 2.988 5.398-2.987-6.013 6.383z"
                                            fill-rule="evenodd"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        detail.innerHTML = resultDetali;
    })

    
}

function removeProduct(id){
    axios.delete(`http://localhost:3333/products/${id}`)
    .then(response => console.log(`response`, response))
}

function addProduct(add){
    axios.post('http://localhost:3333/products',add)
    .then(response => console.log(`response`, response))
}

function editProduct(){
    return axios.get('http://localhost:3333/products/'+id).then(response =>{
        const resultEdit = `
            <div class="form-group">
                <label for="name">Product Name:</label>
                <input type="text" class="form-control" name="name" id="name" value="${response.data.name}">
            </div>
            <div class="form-group">
                <label for="price">Product Price:</label>
                <input type="text" class="form-control" name="price" id="price" value="${response.data.price}">
            </div>
            <div class="form-group">
            <label for="desch">Product Categories:</label>
            <input type="text" class="form-control" name="desc" id="categoriesId" value="${response.data.categoriesId}">
        </div>
            <div class="form-group">
                <label for="desch">Product Description:</label>
                <input type="text" class="form-control" name="desc" id="desc" value="${response.data.desc}">
            </div>
            <div class="form-group">
                <label for="img">Product Image:</label>
                <input type="text" class="form-control" name="img" id="img" placeholder="Http://" value="${response.data.img}">
            </div>
            <button type="submit" class="btn btn-primary">Edit</button>
        `
        formEdit.innerHTML = resultEdit;
    })
}

editProduct().then(() =>{
    formEdit.addEventListener('submit', function(e) {
        e.preventDefault();
        const edit = {
            id: id,
            name: document.querySelector('#name').value,
            price: document.querySelector('#price').value,
            desc: document.querySelector('#desc').value,
            img: document.querySelector('#img').value,
            categoriesId: document.querySelector('#categoriesId').value
        }
        axios.put('http://localhost:3333/products/'+ edit.id,edit)
    })
})

const listReview = document.querySelector('#comment-reviews')

function getReviews(){
    axios.get('http://localhost:3333/reviews')
    .then(response => {
        const resultReview = response.data.map(review =>{
            if(review.productId == id){
                return`
                <div class="r--grid-item">
                    <div class="r--author r--text-limit">
                        <div class="r--avatar-default text-center text-white">P
                        </div>
                        <span class="r--author-review">${review.name}</span>
                    </div>
                    <div class="r--item-body">
                        <p class="r--title-review r--body-item">${review.title}</p>
                        <p class="r--content-review r--body-item">${review.content}</p>
                        <time datetime="2020-01-28T17:29:54Z"
                            class="r--date-review r--top r--text-limit">${review.createdAt}</time>
                    </div>
                </div>
            `
            }
        }).join("")
        listReview.innerHTML = resultReview
    })
}

function getRelatedProduct(){
    axios.get('http://localhost:3333/products')
    .then(response =>{
        let relatedProd = response.data.filter(productRelated => id === productRelated.categoriesId)
        relatedProd = relatedProd.map(relateProd=>{
            return`
            <div
            class="col-lg-3 pr_animated col-md-3 col-6 mt__30 pr_grid_item product nt_pr desgin__1 done">
            <div class="product-inner pr">
                <div class="product-image pr oh lazyload">
                    <a class="d-block" href="../../product-detail.html?id=${relateProd.id}">
                        <div class="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__127_571"
                            data-bgset="${relateProd.img}"></div>
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
                        <a class="cd chp" href="../../product-detail.html?id=${relateProd.id}">${relateProd.name}</a>
                    </h3>
                    <span class="price dib mb__5"><ins>$${relateProd.price}</ins></span>
                </div>
            </div>
        </div>
            `
        }).join("")
        console.log(`relatedProd`, relatedProd)
        relatedProduct.innerHTML = relatedProd
    })
}

getReviews()
getProduct();
productDetail();
getProductHome();
getRelatedProduct();
