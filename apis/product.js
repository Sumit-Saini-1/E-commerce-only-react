import { SERVER_URL } from "./global";

export function LoadProduct(page = 0, perpage = 0) {

    return new Promise((resolve, reject) => {
        fetch(SERVER_URL + "/product/getProducts", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ page, perpage })
        }).then(function (response) {
            if (response.status == 200) {
                resolve(response.json());
            }
            else {
                console.log("something went wrong");
            }
        }).catch(function (err) {
            reject(err);
        });
    });
}

export function TotalItems() {
    fetch(SERVER_URL + "/product/totalProduct", {
        credentials: "include",
    }).then(function (response) {
        if (response.status == 200) {
            return response.json();
        }
        else {
            console.log("something went wrong");
        }
    }).then(function (totalProduct) {
        return (totalProduct.totalProduct);
    }).catch(function (err) {
        console.log(err);
    });

}

export function AddToCartList(product) {
    return new Promise((resolve, reject) => {
        let cartItem = { user: "userId", product: product.pid, price: product.price, quantity: 1 };
        fetch(SERVER_URL + "/cart/addToCart", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ cartItem })
        }).then((response) => {
            resolve(response.status);
        }).catch(function (err) {
            reject(err);
        });
    });

}

export function DeleteProductAPi(product) {
    return new Promise((resolve, reject) => {
        fetch(SERVER_URL + "/product/deleteProduct", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ product: product })
        }).then(function (response) {
            if (response.status == 200) {
                alert("Product Deleted");
                resolve(true);
            }
            else {
                resolve(false);
            }
        }).catch(function (err) {
            reject(err);
        });
    })
}

export function ProductsTOApproveApi(page) {
    return new Promise((resolve, reject) => {
        fetch(SERVER_URL + "/product/productsToAprove/" + page, {
            credentials: "include",
        }).then(function (response) {
            if (response.status == 200) {
                return response.json();
            }
            else {
                console.log("something went wrong");
            }
        }).then(function (products) {
            resolve(products);
            console.log(products);
        }).catch(function (err) {
            reject(err);
        });
    });
}
export function ApproveProductApi(product) {
    return new Promise((resolve, reject) => {
        fetch(SERVER_URL + "/product/approveProduct/" + product.pid, {
            credentials: "include"
        }).then(function (response) {
            if (response.status == 200) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        }).catch(function (err) {
            reject(err);
        });
    });
}
export function RejectProductApi(product) {
    return new Promise((resolve, reject) => {
        fetch(SERVER_URL + "/product/rejectProduct/" + product.pid, {
            credentials: "include",
        }).then(function (response) {
            if (response.status == 200) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        }).catch(function (err) {
            reject(err);
        })
    });
}

export function AddNewProduct(productImage,name,desc,price,quantity,brand,category) {
    const formData = new FormData();
    formData.append("productImage", productImage);
    formData.append("name", name);
    formData.append("Description", desc);
    formData.append("price", price);
    formData.append("stock", quantity);
    formData.append("brand", brand);
    formData.append("category", category);
    return new Promise((resolve, reject) => {
        fetch(SERVER_URL + "/product/addProduct", {
            method: "POST",
            credentials: "include",
            body: formData
        }).then(function (response) {
            if (response.status === 200) {
                resolve(true);
            }
            else if (response.status == 422) {
                resolve(false);
            }
            else {
                reject("Something went wrong");
            }
        }).catch(function (err) {
            reject(err);
        });
    });
}

export function UpdateProductApi(pId,name,desc,price,quantity,brand,category) {
    return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append("pId", pId);
        formData.append("name", name);
        formData.append("Description", desc);
        formData.append("price", price);
        formData.append("stock", quantity);
        formData.append("brand", brand);
        formData.append("category", category);
        fetch(SERVER_URL+"/product/updateProduct", {
            method: "POST",
            credentials:"include",
            body: formData
        }).then(function (response) {
            if (response.status === 200) {
               resolve(true);
            }
            else if (response.status == 422) {
                resolve(false)
            }
            else {
                reject("Something went wrong");
            }
        }).catch(function (err) {
            reject(err)
        });
    });
}