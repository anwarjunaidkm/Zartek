import React, { useEffect, useState } from 'react';
import {BiFoodTag} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/slice/counterSlice';
import { dataApi } from '../store/slice/dataSlice';

function Banner() {
const dispatch = useDispatch()

const [selectedCategory, setSelectedCategory] = useState('');
const [categoryDishes, setCategoryDishes] = useState([]);

 const {dataList} = useSelector((state)=>state.data)
 const tableMenu = dataList?.map(data=>data.table_menu_list)
//  const menu_category =tableMenu[0].map(data=>data.menu_category)
 const dishes = tableMenu[0]?.flatMap((category) => category.category_dishes);

 

    
 console.log("TableMenu===",tableMenu);
 console.log("categoryDishes",categoryDishes);
 console.log("dishers",dishes);
 const defaultValue = tableMenu[0]





const handleClick = (category) => {
   
    
    const selectedCategories = tableMenu[0].find((item) => item.menu_category === category);
    setSelectedCategory(category)
    const filteredDishes = selectedCategories?.category_dishes ?? [];
    

    let arr = []
    filteredDishes.map((item)=>{
      let tempItem = {...item}
      tempItem["count"]=0
     
      arr.push(tempItem)

    })
    setCategoryDishes(arr);

  };


  const incrementCount = (dish_id) => {
    let arr = []
    categoryDishes.filter((item)=>{
      if(item.dish_id===dish_id){
        if("count" in item){
          item["count"]+=1
          dispatch(increment(item.dish_id))
        }
      }
      arr.push(item)
    })
    setCategoryDishes(arr)
  };


  const decrementCount = (dish_id) => {
    let arr = []
    categoryDishes.filter((item)=>{
      if(item.dish_id===dish_id){
        if("count" in item){

         if(item["count"] > 0)
          item["count"]-=1
          dispatch(decrement(item.dish_id))

        }
      }
      arr.push(item)
    })
    setCategoryDishes(arr)
  };

  

  
  useEffect(() => {
    // Set the default selected category to the first menu category
    console.table("defaultValue ////");
    // console.log(defaultValue);
    if (defaultValue != undefined) {
      setSelectedCategory(tableMenu[0][0].menu_category);
      handleClick(tableMenu[0][0].menu_category)     
    }
  }, [defaultValue]);








  useEffect( ()=>{
    dispatch(dataApi())

  },[])

  return (
    <>
    <div className="w-full px-4 bg-[#ffffff]">
      <div className="overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: "none" }}>
        <ul className="flex flex-nowrap justify-start text-black space-x-4 p-2">
            {tableMenu[0]?.map((item)=>{
                    return(

                        <li
                        className={`whitespace-nowrap cursor-pointer px-14  ${
                          selectedCategory === item.menu_category
                            ? "text-[#E76A65] border-b-2 border-[#E76A65]"
                            : ""
                        }`}
                        onClick={() => handleClick(item.menu_category)}
                      >
                        {item.menu_category}
                      </li>

                    )
                })
            }

         
          
        </ul>
        <hr className="border-1 border-gray-400" />
      </div>

      
      {
           categoryDishes?.map((item)=>{

            const hasAddons = item.addonCat && item.addonCat.length > 0;
            return (



         <div>

       
        <div className="flex justify-between items-center p-2 ">
          {/* //left */}
          

          <div>
            <div className='flex  items-center '>
            < BiFoodTag  color={hasAddons ? "green":"red"} />
            
            <h1 className="font-bold mx-2 ">{item?.dish_name}</h1>

            </div>
            
            <p className="text-[12px] mx-6">
              SAR <span>{item?.dish_price}</span>
            </p>
            <p className="text-[10px] text-gray-500 mx-6">
              {item?.dish_description}
            </p>
           
            <div className='bg-green-700 w-20 flex justify-center items-center  rounded-full text-white px-5 my-2 mx-6	 '>
              {/* <div className='cursor-pointer px-1' onClick={()=>dispatch(decrement(item.dish_id))}  >-</div> */}
              <div className='cursor-pointer px-1' onClick={()=>decrementCount(item.dish_id)}  >-</div>
              
              <span className='px-3 text-[12px]'>{item?.count}</span>
              {/* <div className='cursor-pointer px-1' onClick={()=>dispatch(increment(item.dish_id))}  >+</div> */}
              <div className='cursor-pointer px-1' onClick={()=>incrementCount(item.dish_id)}  >+</div>
            </div>

           {hasAddons && (
                <p className="text-red-600 text-[13px] mx-6">
                  Customizations Available
                </p>
              )}
          </div>
          {/* //right */}
          <div className="flex justify-center items-center ">
            <h1 className="px-5 text-[12px]">{item?.dish_calories} &nbsp; calories </h1>
            <div className='w-[100px] h-[100px] bg-slate-400'>
            <img className='object-cover w-full h-full rounded' src={item?.dish_image} alt="sample" />


            </div>
          </div>
         
        </div>
        <hr className="border-1 border-gray-400" />
      </div>
                
                
                
                
                
                
                



                  
                
            )
           })
        }
       

      
      

      
    </div>
    </>
  );
}

export default Banner;