  import requests from './request';
  import mockRequests from './mockAjax';
  export const reqCategoryList = ()=>requests({url:'/api/product/getBaseCategoryList',method:'get'});
  export const reqGetbannerList = ()=>mockRequests.get('/banner');
  export const reqFloorList = ()=>mockRequests.get('/floor'); 
  export const reqGetSearchInfo =(params)=>requests({url:"/api/list",method:"post",data:params})
  export const reqGoodsInfo = (skuId)=>requests({url:`/api/item/${skuId}`,method:'get'});
  export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/api/cart/addToCart/${skuId}/${skuNum}`,method:'post'});
  export const reqCartList = () =>requests({url:'/api/cart/cartList',method:'get'})
  export const reqDeleteCartById = (skuId) =>requests({url:`/api/cart/deleteCart/${skuId}`,method:'delete'})
  export const reqUpdateCheckedById = (skuId,isChecked)=>requests({url:`/api/cart/checkCart/${skuId}/${isChecked}`,method:'get'});
  export const reqGetCode = (phone)=>requests({url:`/api/user/passport/sendCode/${phone}`,method:'get'})
  export const reqUserRegister = (data)=>requests({url:'/api/user/passport/register',data,method:'post'})
  export const reqUserLogin = (data)=>requests({url:'/api/user/passport/login',data,method:'post'})
  export const reqUserInfo = ()=>requests({url:'/api/user/passport/auth/getUserInfo',method:'get'});
  export const reqLogout = ()=>requests({url:'/api/user/passport/logout',method:'get'})
  export const reqAddressInfo = () =>requests({url:'/api/user/userAddress/auth/findUserAddressList',method:'get'});
  export const reqOrderInfo = () =>requests({url:'/api/order/auth/trade',method:'get'});
  export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/api/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})
  export const reqPayInfo = (orderId)=>requests({url:`/api/payment/weixin/createNative/${orderId}`,method:'get'})
  export const reqPayStatus = (orderId)=>requests({url:`/api/payment/weixin/queryPayStatus/${orderId}`,method:'get'})
  export const reqMyOrderList = (page,limit)=>requests({url:`/api/order/auth/${page}/${limit}`,method:'get'})