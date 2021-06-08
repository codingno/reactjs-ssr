import React, { useEffect } from 'react'
import { FixedSizeGrid as Grid } from 'react-window'
import Autosizer from 'react-virtualized-auto-sizer'
import { ReactWindowScroller } from 'react-window-scroller'
import { useSelector, useDispatch } from 'react-redux'
import { getCatalogue } from '../../store/actions/get/catalogue'
import CatalogueCard from './CatalogueCard'
import CatalogueCardWindowed from './CatalogueCardWindowed'

export default function Catalogue() {
    const dispatch = useDispatch()
    const catalogues = useSelector(state => state.catalogue)

    useEffect(() => {
        if(!catalogues.load) 
            dispatch(getCatalogue())
    }, [catalogues])
    return (
        <div className="catalogue-container">
            {
                catalogues.data.length > 0 && 
                JSON.parse(catalogues.data).data.map((catalogue, index) => <CatalogueCard key={`${catalogue.product_id} + ${index}`} product={catalogue} />)
            }
            {
                // catalogues.data.length == 0 && 
            // <Autosizer>
                // {({ height, width }) => {
            //     <ReactWindowScroller isGrid >
            //         {({ ref, outerRef, style, onScroll }) => {
            //         const data = JSON.parse(catalogues.data).data
            //         let columnCount = 2, columnWidth = 155, rowHeight = 250
            //         if(window.innerWidth <= 640) {
            //             columnWidth =  window.innerWidth / 2 
            //             rowHeight = 255
            //         }
            //         return (
            //             <Grid 
            //                 ref={ref}
            //                 outerRef={outerRef}
            //                 style={style}
            //                 onScroll={onScroll}
            //                 columnCount={columnCount}
            //                 columnWidth={columnWidth}  
            //                 // height={height} 
            //                 // width={width} 
            //                 height={window.innerHeight}
            //                 width={window.innerWidth}
            //                 itemCount={data.length} 
            //                 rowCount={data.length/2}
            //                 rowHeight={rowHeight}
            //                 itemSize={100} >
            //                 {CatalogueCardWindowed}
            //             </Grid>
            //         )
            //     }}
            // {/* </Autosizer> */}
            //     </ReactWindowScroller>
            ''
            }
        </div>
    )
}

