import React from 'react'
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux'
import { LazyLoadImage as Image } from 'react-lazy-load-image-component';
import './Catalogue.scss'

export default function CatalogueCard({ columnIndex, rowIndex, style }) {
const catalogues = useSelector(state => state.catalogue)
const data = JSON.parse(catalogues.data)
let index 
if(window.innerWidth < 640)
    index = 2 * rowIndex + columnIndex  
const product = data[index]
console.log(index, rowIndex, columnIndex);
if(!product)
    return ""
return (
    <div style={style} >
    <div className="card-product-only" ng-click="vm.goToProduct(product.product_id,product.product_url)" role="button"
        tabIndex="0">
        <div className="card-product-img-box">
            <div className="box-events">
                {
                    product.hasDeliveryPromo && 
                    <div className="sm-label sm-red-label" ng-if="product.hasDeliveryPromo">
                        <span className="sm-text-label sm-white-text-label">GRATIS ONGKIR</span>
                    </div>
                }
                {
                    product.is_special_treatment &&
                    <div className="sm-label sm-green-label" ng-if="product.is_special_treatment">
                        <span className="sm-text-label sm-white-text-label">KHUSUS</span>
                    </div>
                }

            </div>
            <div className="card-product-imgbox-img">
                <Image className="card-image-product" alt={product.product_name} title={product.product_name}
                    src={product.image} />
            </div>
        </div>
        <div className="box-card-product-contents">
            <div className="card-product-content-title">
                <span className="card-product-title">{product.product_name}</span>
            </div>

            <div className="card-product-pricebox">

                {
                    product.discount_badges > 0 &&
                    <div className="discount-badge" ng-if="product.discount_badges > 0">
                        <div className="discount-badge-backdrop"></div>
                        <span className="discount-badge-text">TURUN</span>
                        <span className="discount-badge-percentage">20%</span>
                    </div>
                }


                <div ng-if="(!vm.authentication.user || vm.authentication.user.roles=='Buyer')"
                    className="NEW-PRICEBOX ng-scope">
                    <div>
                        <div className="NPRICE">
                            {
                                product.normal_price > product.pack_price &&
                                <span ng-if="product.normal_price > product.pack_price"
                                    className="REDLINEONLY ng-binding ng-scope">
                                        <NumberFormat value={product.normal_price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                                </span>
                            }
                        </div>
                        <span className="PPRICE ng-binding SIZE-PRICE-M"
                            ng-class="{'SIZE-PRICE-M': (product.item_price != product.pack_price &amp;&amp; product.normal_price > product.pack_price), 'SIZE-PRICE-L': (product.pack_price > product.normal_price &amp;&amp; product.item_price == product.pack_price)}">
                            <NumberFormat value={product.pack_price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                        </span>
                        <span className="IPRICE ng-binding ng-scope"
                            ng-if="product.product_packs[0].pack_size &amp;&amp; product.product_packs[0].pack_size != 1">(                            <NumberFormat value={product.item_price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                        <span className="ng-binding">/kg)</span></span>
                    </div>
                </div>

            </div>

            <div className="CASHBACK-STARMEMBER">
                {
                    product.cashback > 0 &&
                    <div className="CASHBACK-LABEL" ng-if="product.cashback > 0">
                        Cashback {product.cashback}%
                    </div>
                }
                {
                    product.disc_star_member > 0 &&
                    <div className="CASHBACK-LABEL DISC-STAR-MEMBER" ng-if="product.disc_star_member > 0">
                        <span>
                        Disc <img src="https://dtq2i388ejbah.cloudfront.net/images/icons/starmemberheadermenuicon.png" /> Member {product.disc_star_member}%
                        </span>
                    </div>
                }
            </div>

        </div>

        <a ng-if="!vm.authentication.user || vm.authentication.user.roles=='Buyer'" className="BUY-BUTTON ng-scope"
            ui-sref="home.select-product({product:product.product_id,slug:product.product_url})"
            href="/products/28/wortel-500g">
            Beli
        </a>

    </div>
    </div>
)
}