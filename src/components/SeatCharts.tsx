'use client';

import { SeatsioSeatingChart } from '@seatsio/seatsio-react';
import { useState } from 'react';

export default function SeatsChart() {
    const [tableSelection, setTableSelection] = useState({id: 0, category: '', price: ''})
    function updateTableSelection(table: any) {
        const tableData = {
            id: table.id,
            category: table.category.label,
            price: table.pricing.formattedPrice
        }
        console.log('tableData', tableData)
        setTableSelection(tableData)
        console.log('tableSelection', tableSelection)
    }

    return (
        <>
            
            <div className='w-full h-full'>
                <SeatsioSeatingChart
                    workspaceKey="dc1ac86b-f684-4b37-9556-e11db615d517"
                    event="5cfb2cd3-cdb0-4a7f-a446-19d277441331"
                    pricing={[
                        { 'category': 'Small Table', 'price': 250 },
                        { 'category': 'Regular Table', 'price': 500 },
                        { 'category': 'VIP Table', 'price': 1000 },
                    ]}
                    maxSelectedObjects={[
                        { 'category': 'Small Table', 'quantity': 2 },
                        { 'category': 'Regular Table', 'quantity': 2 },
                        { 'category': 'VIP Table', 'quantity': 2 },
                    ]}
                    priceFormatter={(price: string) => '$' + price}
                    onObjectSelected={(table: any) => {updateTableSelection(table)}}
                    onObjectDeselected={(table: any) => {console.log(table)}}
                    region="na"
                />
            </div>
        </>
    )
}