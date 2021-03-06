import * as React from 'react';
import IProduct from '../../../core/types/IProduct';

import './GeneralProductInfo.scss';
import BasicProductInfo from './BasicProductInfo';
import ProductCardDemo from './ProductCardDemo';

export interface IGeneralProductInfoProps {
}

export default function GeneralProductInfo(props: IGeneralProductInfoProps) {
    return (
        <div className='general-product-info'>
            <div>
                <ProductCardDemo />
            </div>
            <div>
                <BasicProductInfo/>
            </div>
        </div>
    );
}
