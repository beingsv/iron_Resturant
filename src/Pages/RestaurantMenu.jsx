import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

    const [title, setTitle] = useState([]);
    const [carousels, setCarousels] = useState([]);

    const [menu, setMenu] = useState([]);

    const { restaurantId } = useParams();


    const fetchMenu = async (lat, lon) => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log("Restaurantjson", json);

        const titleData = json?.data?.cards[0]?.card?.card?.info;
        console.log("titleData", titleData);

        const carouselsData = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        console.log("carouselsData", carouselsData);

        const menuData = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        console.log("menuData", menuData);


        setTitle(titleData);
        setCarousels(carouselsData);
        setMenu(menuData);
    }

    useEffect(() => {
        fetchMenu(30.7333148, 76.7794179);
    }, [])

    console.log("carousels", carousels);

    return (
        <div className='w-[50%] m-auto pt-8'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-1'>
                    <p className='text-xl font-bold'>{title?.name}</p>
                    <p className='text-xs'>{title?.cuisines?.join(", ")}</p>
                    <p className='text-xs'>{title?.areaName}</p>
                </div>
                <div className='flex flex-col justify-center border p-2 rounded-md'>
                    <p className='text-sm font-bold text-center text-[#7e57c2]'>{title?.avgRatingString}</p>
                    <p className='text-xs'>{title?.totalRatingsString}</p>
                </div>
            </div>

            <div className='flex gap-4 pt-4 text-sm font-bold'>
                <p>{title?.sla?.slaString.toLowerCase()}</p>
                <p>{title?.costForTwoMessage}</p>
            </div>


            <div className='pt-10'   >
                <p className='text-xl font-bold'>{carousels.title}</p>
                {/* <div className='flex gap-4'>
                    {
                        carousels.carousel.length > 0 && carousels.carousel.map((item) => {
                            return (
                                <div key={item?.bannerId} className='w-[200px]'>
                                    <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item?.dish?.info?.imageId} alt='banner' />
                                </div>
                            )
                        })
                    }
                </div> */}
            </div>

        </div>
    )
}

export default RestaurantMenu