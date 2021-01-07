import React from 'react';
import { Layout, CartContents, SEO } from 'components';

export default function CartPage(){
    return <Layout> 
        < SEO description ="Fiori di lusso mens wear from Italy cart page" title = "cart page" />
        <CartContents/>  </Layout>;
}