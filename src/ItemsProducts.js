const products = [
    {id: '1', name: 'HTML', price: 2000, category: 'desarrollo-web', stock: 10, image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png', description:'Curso de HTML'},
    {id: '2', name: 'CSS', price: 2500, category: 'desarrollo-web', stock: 10, image:'https://cdn-icons-png.flaticon.com/512/919/919826.png', description:'Curso de CSS'},
    {id: '3', name: 'JS', price: 4500, category: 'programacion', stock: 10, image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png', description:'Curso de JS'},
    {id: '4', name: 'ReactJS', price: 2500, category: 'programacion', stock: 10, image:'https://www.datocms-assets.com/45470/1631110818-logo-react-js.png', description:'Curso de ReactJS'},
    {id: '5', name: 'Git', price: 2500, category: 'control-de-versiones', stock: 10, image:'https://developer.si2soluciones.es/wp-content/uploads/2017/03/raspberry-pi-git-server.jpg', description:'Curso de Git'},
    {id: '6', name: 'GitHub', price: 2500, category: 'control-de-versiones', stock: 10, image:'https://global-uploads.webflow.com/5f5a53e153805db840dae2db/6073fbf151fa4565d48572dc_GitHub_aprender-programaci%25C3%25B3n.jpeg', description:'Curso de GitHub'},
]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}