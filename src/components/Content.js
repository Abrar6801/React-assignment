import { Fragment, useState } from 'react';
import DataTranformed from './DataTransformed';
import Input from './Input';
const Content=()=>{
    const [myCSV,setCSV]=useState();
    const [InventoryData,setInventoryData]=useState([]);
    return(<Fragment>
        <Input
        setCSV={setCSV}
        myCSV={myCSV}
        setInventoryData={setInventoryData}/>
        <br/>
        {InventoryData.length > 0 && <DataTranformed rawData={InventoryData}></DataTranformed>}
        </Fragment>
    );
}
export default Content;