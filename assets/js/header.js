const header = document.querySelector('#header-mid')


function Header(){
    const getHeader = () =>{
        if (sessionStorage.length > 0) {
            for (let i = 0; i < sessionStorage.length; i++) {
              const key = sessionStorage.key(i);
              var user = `${sessionStorage.getItem('user')}`;
              var auth = JSON.parse(user)
            }
            var auth = JSON.parse(user)
            if (auth.user.role == 1) {
                var admin = `
                    <li
                        class="type_mega menu_wid_cus menu-item has-children menu_has_offsets menu_center pos_center">
                        <a class="lh__1 flex al_center pr" href="/admin">Admin</a>
                    </li>
                          `
              }
              else{
                return `
                <li
                    class="type_mega menu_wid_cus menu-item has-children menu_has_offsets menu_center pos_center">
                    <a class="lh__1 flex al_center pr" href="index.html">Home</a>
                </li>
                <li
                    class="type_mega menu_wid_cus menu-item has-children menu_has_offsets menu_center pos_center">
                    <a class="lh__1 flex al_center pr"
                        href="shop-filter-sidebar.html">Shop<span
                            class="lbc_nav lb_new">New</span></a>
                </li>
                <li
                    class="type_mega menu_wid_cus menu-item has-children menu_has_offsets menu_center pos_center">
                    <a class="lh__1 flex al_center pr"
                        href="product-detail-layout-01.html">Product</a>
                </li>
                <li
                    class="type_mega menu_wid_cus menu-item has-children menu_has_offsets menu_center pos_center">
                    <a class="lh__1 flex al_center pr kalles-lbl__nav-sale"
                        href="shop-filter-sidebar.html">Sale<span
                            class="lbc_nav">Sale</span></a>
                </li>
                <li
                    class="type_dropdown menu-item has-children menu_has_offsets menu_right pos_right">
                    <a class="lh__1 flex al_center pr" href="blog-grid.html">Blog</a>
                </li>
                <li
                    class="type_dropdown menu-item has-children menu_has_offsets menu_right pos_right">
                    <a class="lh__1 flex al_center pr" href="#">Abouts</a>
                </li>
    `
              }
        } 
    }
    console.log(`getHeader`, getHeader)
    header.innerHTML = getHeader;
}

Header()

