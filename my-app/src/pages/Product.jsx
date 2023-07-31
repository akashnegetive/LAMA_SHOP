import React from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from "../responsive";
import { useLocation } from 'react-router-dom';
import { useState , useEffect} from "react";
import { publicRequest } from '../requestMethod';
import { useDispatch } from 'react-redux';
import { addProduct ,removeProduct} from '../redux/cartRedux';



const Container=styled.div`

`;

const Wrapper=styled.div`
padding:50px;
display:flex;

${mobile({flexDirection:"column",padding:"10px"})}

`;

const ImgContainer=styled.div`
flex:1



`;

const Image=styled.img`
width:100%;
height:90vh;
Object-fit:cover;

${mobile({height:"50vh"})}

`;

const InfoContainer=styled.div`
flex:1;
padding:0px 50px;

${mobile({padding:"10px"})}

`;

const Title=styled.h1`
font-weight:200;

`;

const Desc=styled.p`
margin:20px 0px;

`;

const Price=styled.span`
font-weight:100;
font-size:40px;

`;

const FilterCointainer=styled.div`
 width:50%;
 margin:30px 0px;
 display:flex;
 justify-content:space-between;

 ${mobile({width:"100%"})}
`;

const Filter=styled.div`
display:flex;
align-items:center;
`;

const FilterTitle=styled.span`
font-size:20px;
font-weight:200;
`;

const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;
cursor:pointer;

`;

const FilterSize=styled.select`
margin-left:10px;
padding:5px;
`;

const FilterSizeOption=styled.option`
`;

const AddContainer=styled.div`
display:flex;
align-items:center;
width:50%;
 justify-content:space-between;
  ${mobile({width:"100%"})}
`;

const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;
`;

const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
 justify-content:center;
 margin:0px 5px;
`;



const Button=styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
  background-color:#f8f4f4;

}
`;



 function Product() {

   const location=useLocation();
   const id= location.pathname.split("/")[2];

   const [product,setProduct]=useState({});
   const [quantity,setQuantity]=useState(1);
   const [color,setColor]=useState("");
   const [size,setSize]=useState("");
   const dispatch = useDispatch();

   useEffect(()=>{

    const getProduct =async ()=>{
      try{

        const res= await publicRequest.get("/products/find/"+id)
        setProduct(res.data);

      }catch{

      }
    };
      getProduct();
   },[id]);

   const handleQuantity =(type)=>{
     if(type==="dec"){
       quantity>1 && setQuantity(quantity-1);
     }else{
       setQuantity(quantity+1);
     }
   };

//update cart
const handleClick =()=>{

  dispatch(addProduct({...product,quantity,color,size}));

};


let uppercasetext = (product.title)?.toUpperCase(); //To convert Upper Case

  return (


    <Container>
         <Announcement/>
         <Navbar/>
         <Wrapper>
              <ImgContainer>
                    <Image src={product.img}/>
              </ImgContainer>
              <InfoContainer>
                   <Title>{uppercasetext}</Title>
                   <Desc>{product.desc}</Desc>
                   <Price>Rs. {product.price}</Price>
                  <FilterCointainer>

                     <Filter>
                       <FilterTitle>Color</FilterTitle>
                       {product.color?.map(c=>(
                          <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                       ))}
                     </Filter>

                     <Filter>
                       <FilterTitle>Size</FilterTitle>
                         <FilterSize onChange={(e)=>setSize(e.target.value)}>
                         {product.size?.map((s)=>(
                            <FilterSizeOption key={s}>{s}</FilterSizeOption>
                         ))}

                         </FilterSize>

                     </Filter>
                  </FilterCointainer>

                  <AddContainer>

                      <AmountContainer>
                        <RemoveIcon onClick={()=>handleQuantity("dec")}/>
                        <Amount>{quantity}</Amount>
                        <AddIcon onClick={()=>handleQuantity("inc")}/>
                      </AmountContainer>

                      <Button onClick={handleClick}>ADD TO CART</Button>


                  </AddContainer>



              </InfoContainer>
         </Wrapper>
         <Newsletter/>
         <Footer/>


    </Container>
  );
}

export default Product;
