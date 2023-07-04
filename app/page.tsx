'use client'
import Image from 'next/image'
import React ,{useState,useEffect, use} from 'react'
import { collection, addDoc, onSnapshot,getDoc,query,doc,deleteDoc } from "firebase/firestore"; 
import {db} from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Home() {
  const [items, setItems] = useState([
    // {name:'Tea',price:'10'},
    // {name:'Coffee',price:'20'},
    // {name:'cold Drink',price:'30'}
  ])
  // Adding To The Database
  const addItem = async (e:any) =>{
    e.preventDefault();
    // Only for state
    if(newItem.name!=='' && !isNaN(newItem.price) && newItem.price!==''){
      // setItems([...items,newItem]);
      await addDoc(collection(db, "expenses"), {
        name: newItem.name.trim(),
        price: newItem.price
      });
      setNewItem({ name: '', price: '' });
    }
    else{
      toast.error("Please enter a valid price for the item.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000, // Automatically close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setNewItem({ name: '', price: '' });
    }
  }
  // Reading From The Datab ase
  useEffect(()=>{
    const q=query(collection(db, "expenses"));
    const unsubscribe = onSnapshot(q,(querySnapshot)=>{
      let itemsArray:any = [];
      querySnapshot.forEach((doc)=>{
        itemsArray.push({...doc.data(),id:doc.id})
      })
      setItems(itemsArray)
      // Read Total From itemsArray
      const countTotalFunction = () =>{
        const totalPrice = itemsArray.reduce((sum:any,newItem:any)=>sum+parseFloat(newItem.price),0)
        setTotal(totalPrice)
      }
      countTotalFunction()
      return () => unsubscribe()
    })
  },[])
  // Deleting From The Database
  const deleteItem = async(id)=>{
    await deleteDoc(doc(db,'expenses',id))
  }
  const [newItem,setNewItem]=useState({name:'',price:''})
  const [total,setTotal]=useState(0)
  return (
    <main className="bg-black dark:bg-black font-sans flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className=' text-black-600 text-4xl p-4 text-center'>FinTrack - Your Finance Tracker</h1>
        <div className='bg-cyan-400	 p-4 rounded-lg'>
          <form className="grid grid-cols-6 items-center text-black">
            <input value={newItem.name} onChange={(e)=>setNewItem({...newItem, name: e.target.value})} className="col-span-3 p-3 border rounded-lg" type="text" placeholder='Enter Item'/>
            <input value={newItem .price} onChange={(e)=>setNewItem({...newItem, price: e.target.value})}className="col-span-2 p-3 border mx-3 rounded-lg" type="text" placeholder='Enter ₹'/>
            <button onClick={addItem} className="text-black bg-stone-100 hover:bg-stone-950	 hover:text-white p-3 text-sm rounded-lg" type="submit">Debit</button>
          </form>
          <ul>
            {items.map((item,id)=>(
              <li key={id} className="text-black p-1 w-full my-2 bg-cyan-200 flex justify-between rounded-lg">
                <div className="p-4 w-full flex justify-between">
                  <span className="capitalize">
                    {item.name}
                  </span>
                  <span className="">
                    ₹{item.price}
                  </span>
                </div>
                <button onClick ={()=>deleteItem(item.id)} className="ml-8 border-l-2 p-2 text-black border-slate-200 bg-stone-100 hover:bg-stone-950 hover:text-white w-16">X</button>
              </li>
            ))}
          </ul>
          {items.length<0?(''):(
            <div className="p-4 w-full w-full my-2 bg-cyan-950 flex justify-between rounded-lg flex justify-between">
              <span>Total
              </span>
              <span>₹{total}
              </span>
            </div>
          )}
        </div>
        
      </div>
      <ToastContainer />
  <footer className="text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <span>✨ Made by Parth Johri</span>
        </div>
        <div className="flex space-x-2 justify-between">
        <span> </span>
          <a href="https://www.linkedin.com/in/parthjohri07/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/ParthJohri" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
    </main>
    
  )
}
