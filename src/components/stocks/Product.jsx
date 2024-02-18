import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {

    const [name, setName] = useState("")
    const [qty, setQty] = useState(0)
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")

    const[data, setData] =  useState([])

    const addProduct = async () => {
        try {
            const url = "https://workshop-react-api.vercel.app/product"
            const user_id = localStorage.getItem('user_id')
            const res = await axios.post(url, { name, qty, price, image, user_id })
            fetchData()
        } catch (error) {
            console.log(error);
        }
    }
    const fetchData = async () => {
        try {
            const user_id = localStorage.getItem('user_id')
            const url = `https://workshop-react-api.vercel.app/product?user_id=${user_id}`
            const res = await axios.get(url)
            console.log(res.data);
            setData(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    const deletePro = async(id)=>{
        try {
            const url = `https://workshop-react-api.vercel.app/product/${id}`
            const res = await axios.delete(url)
            fetchData()
            
        } catch (error) {
            console.log(error);
            
        }
    } 
    useEffect(() => { fetchData() }, [])

    return (
        <div className=' m-2'>
            name : {name} <br />
            qty : {qty} <br />
            price : {price} <br />
            


            <div  className="relative overflow-x-auto  bg-white rounded-lg shadow-lg m-10 p-5">
                <input className=' border border-gray-400 py-2 m-3 px-2 rounded-lg shadow-md' placeholder='ชื่อสินค้า' type='text' name='name'
                    onChange={(e) => setName(e.target.value)} />
                <input className=' border border-gray-400 py-2 m-3 px-2 rounded-lg shadow-md' placeholder='จำนวน' type='number' name='qty'
                    onChange={(e) => setQty(e.target.value)} />
                <input className=' border border-gray-400 py-2 m-3 px-2 rounded-lg shadow-md' placeholder='ราคา' type='number' name='price'
                    onChange={(e) => setPrice(e.target.value)} />
                <input className=' border border-gray-400 py-2 m-3 px-2 rounded-lg shadow-md' placeholder='รูปภาพ' type='text' name='image'
                    onChange={(e) => setImage(e.target.value)} />
                <button className=' bg-green-500 text-black py-2 px-2 rounded-lg shadow-md'
                    onClick={addProduct}>บันทึก</button>
            </div>



            <div className="relative overflow-x-auto  bg-white rounded-lg shadow-lg m-10 p-5">
                <div className="  py-2 m-3 px-2">
                    <table className="  w-full  text-left rtl:text-right  text-gray-500 dark:text-gray-400 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-2xl text-white">
                                    รูปภาพ
                                </th>
                                <th scope="col" className="px-6 py-3 text-2xl text-white">
                                    ชื่อสินค้า
                                </th>
                                <th scope="col" className="px-6 py-3 text-2xl text-white">
                                    จำนวน
                                </th>
                                <th scope="col" className="px-6 py-3 text-2xl text-white">
                                    ราคา
                                </th>
                                <th scope="col" className="px-6 py-3 text-2xl text-white">
                                    ลบ/แก้ไข
                                </th>
                            </tr>
                        </thead>
                        <tbody>


                             
                        {data.map((item, index) =>(
                            
                                <tr className="bg-white border-b " key = {index}>
                                    <td  >
                                        < img className='w-20' src={item.image} alt="" />
                                    </td>
                                    <td className="px-6 py-4 text-black ">{item.name}</td>
                                    <td className="px-6 py-4 text-black ">{item.qty}</td>
                                    <td className="px-6 py-4 text-black ">{item.price}</td>
                                    <td className="px-6 py-4 text-black">
                                        <button   onClick={() => deletePro(item.id)} className=' bg-red-500 text-white m-2 rounded-lg shadow-lg px-2 py-1 '>ลบ</button>
                                       
                                        <button className=' bg-yellow-500 text-white m-2 rounded-lg shadow-lg px-2 py-1'>แก้ไข</button>
                                    </td>
                                </tr>
                            
                            )
                        )
                    }



                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    )
}

export default Product