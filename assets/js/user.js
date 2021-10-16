const RegisterForm = document.querySelector('#RegisterForm')
const LoginForm = document.querySelector('#customer_login')
const reviewsForm = document.querySelector('#reviewForm')


function getUser(){
    const auth = sessionStorage.getItem('user')
    console.log(`auth`, auth)
}


RegisterForm.addEventListener('submit',function(e){
    e.preventDefault();
    const newUser = {
        firstname: document.querySelector('#FirstName').value,
        lastname: document.querySelector('#LastName').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
        role: 2
    }
    axios.post('http://localhost:3333/register', newUser)
})

customer_login.addEventListener('submit',function(e){
    e.preventDefault();
    const loginUser = {
        email: document.querySelector('#CustomerEmail').value,
        password: document.querySelector('#CustomerPassword').value
    }
    axios.post('http://localhost:3333/signin', loginUser)
    .then(response => {
        localStorage.setItem('user',JSON.stringify(response.data))
    })
    .then(()=>{
        document.querySelector('#success').innerHTML = "Login Success"
    })
    .catch(error =>{
        document.querySelector('#error').innerHTML = error.response.data
    })
})

reviewsForm.addEventListener('submit', function(e){
    e.preventDefault();
    const today = new Date();
    const reivews = {
        name: document.querySelector('#review_customer_name').value,
        email: document.querySelector('#review_customer_email').value,
        title: document.querySelector('#review_customer_title').value,
        content: document.querySelector('#review_customer_content').value,
        productId: id,
        createdAt : today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
    }
    axios.post('http://localhost:3333/reviews', reivews)
})

getUser()

