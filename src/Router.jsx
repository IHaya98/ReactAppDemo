import React from 'react';
import {Switch,Route} from 'react-router'
import {SignUp,SignIn,ProductList,Reset,ProductEdit,ProductDetail, CartList, OrderConfirm, OrderHistory} from './templates'
import Auth from './Auth';

const Router = () => {
    return(
        <Switch>
            <Route exact path={"/signup"} component={SignUp}></Route>
            <Route exact path={"/signin"} component={SignIn}></Route>
            <Route exact path={"/signin/reset"} component={Reset}></Route>
            <Auth>
                <Route exact path={"(/)?"} component={ProductList}></Route>
                <Route exact path={"/product/:id"} component={ProductDetail}></Route>
                <Route path={"/product/edit(/:id)?"} component={ProductEdit}></Route>

                <Route exact path={"/cart"} component={CartList}></Route>
                <Route exact path={"/order/confirm"} component={OrderConfirm}></Route>
                <Route exact path={"/order/history"} component={OrderHistory}></Route>
            </Auth>
        </Switch>
    )
}

export default Router