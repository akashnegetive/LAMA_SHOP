import { publicRequest , userRequest} from '../requestMethod';
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { getProductsStart,getProductsSuccess,getProductsFailure,
  deleteProductStart,deleteProductSuccess,deleteProductFailure,
  updateProductStart,updateProductSuccess,updateProductFailure,
  addProductStart,addProductSuccess,addProductFailure} from "./productRedux";




export const login = async(dispatch,user)=>{
  dispatch(loginStart());
  try{

     const res = await publicRequest.post("/auth/login",user);
     dispatch(loginSuccess(res.data));


  }catch(err){
    dispatch(loginFailure());
  }
};

export const getProducts = async(dispatch)=>{
  dispatch(getProductsStart());
  try{

     const res = await publicRequest.get("/products");
     dispatch(getProductsSuccess(res.data));


  }catch(err){
    dispatch(getProductsFailure());
  }
};

export const updateProduct = async(id,product,dispatch)=>{
  dispatch(updateProductStart());
  try{

     // const res = await userRequest.delete(`/products/${id}`);
     dispatch(updateProductSuccess({id,product}));


  }catch(err){
    dispatch(updateProductFailure());
  }
};

export const addProduct = async(product,dispatch)=>{
  dispatch(addProductStart());
  try{

    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));


  }catch(err){
    dispatch(addProductFailure());
  }
};

export const deleteProduct = async(id,dispatch)=>{
  dispatch(deleteProductStart());
  try{

     // const res = await userRequest.delete(`/products/${id}`);
     dispatch(deleteProductSuccess(id));


  }catch(err){
    dispatch(deleteProductFailure());
  }
};
