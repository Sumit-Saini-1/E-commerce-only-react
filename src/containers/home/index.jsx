import ItemCard from "../../components/itemcard/index.jsx";
import Style from "./style.module.css";
import { LoadProduct, AddToCartList } from "../../../apis/product.js";
import { useState, useEffect, useRef } from "react";
import Button from "../../components/button/index.jsx";
import CustomPopup from "../../components/productDetailPopup/index.jsx";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [isLastPage, setIsLastPage] = useState(false);
    const [visibility, setVisibility] = useState(false);
    const [popupProduct, setPopUpProdct] = useState({});
    const itemPerPage = 8;
    const curPage = useRef(0);
    useEffect(() => {
        LoadProduct(curPage.current, itemPerPage).then(function (result) {
            setProducts(result.products);
            setIsLastPage(result.isLast);
            
        }).catch(function (err) {
            console.log(err);
        });
    }, []);

    function onLoadMoreClick() {
        curPage.current++;
        console.log(curPage);
        LoadProduct(curPage.current, itemPerPage).then(function (result) {
            setProducts(result.products);
            setIsLastPage(result.isLast);
        }).catch(function (err) {
            console.log(err);
        });
    }

    function onClickAddToCart(product) {
        return function () {
            // console.log(product);
            AddToCartList(product).then(function (status) {
                if (status == 202) {
                    alert("already in cart");
                }
                else if (status == 200) {
                    alert("added to cart");
                }
                else {
                    alert("item cant be added to cart");
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };

    function onClickViewDetail(product) {
        return function () {
            setPopUpProdct(product);
            setVisibility(!visibility)

        }
    }
    return (

        <>
            <div className={Style.productsContainer}>
                <CustomPopup onClose={popupCloseHandler} product={popupProduct} show={visibility} title="Product Detail" >
                    <h1>Hello This is Popup Content Area</h1>
                    <h2>This is my lorem ipsum text here!</h2>
                </CustomPopup>
                {
                    products.map((product) => {
                        return <ItemCard key={product.pid} onClickViewDetail={onClickViewDetail(product)} onClickAddToCart={onClickAddToCart(product)} productName={product.name} image={product.image} price={product.price} />
                    })
                }
            </div>
            <div>
                {
                    !isLastPage?<Button onClick={onLoadMoreClick}>Load More</Button>:<></>
                }
            </div>
        </>
    )
}