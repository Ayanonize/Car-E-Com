import React from 'react'
import SingelCard from './SingelCard'
import { useState } from 'react'

export default function Cards() {
    const [Data, setData] = useState([
        { brand: "AUDI", model: "A301", price: "1203", img: 'https://media.zigcdn.com/media/model/2022/Feb/audi-q7-1_360x240.jpg' },
        { brand: "LAMBORGHINI", model: "Vision GT", price: "9256", img: 'https://www.renderhub.com/squir/lamborghini-v12-vision-gran-turismo/lamborghini-v12-vision-gran-turismo-01.jpg' },
        { brand: "ROLLSROYCE", model: "Phantom", price: "5690", img: 'https://www.mansory.com/sites/default/files/styles/1920x800_fullwidth_car_slider/public/migrated/cars/Cars/rolls-royce/phantom8/mansory_rolls_royce_phantom_8_01.jpg?itok=-I3ZIXAt' }, { brand: "AUDI", model: "A301", price: "1203", img: 'https://media.zigcdn.com/media/model/2022/Feb/audi-q7-1_360x240.jpg' },
        { brand: "LAMBORGHINI", model: "Vision GT", price: "9256", img: 'https://www.renderhub.com/squir/lamborghini-v12-vision-gran-turismo/lamborghini-v12-vision-gran-turismo-01.jpg' },
        { brand: "ROLLSROYCE", model: "Phantom", price: "5690", img: 'https://www.mansory.com/sites/default/files/styles/1920x800_fullwidth_car_slider/public/migrated/cars/Cars/rolls-royce/phantom8/mansory_rolls_royce_phantom_8_01.jpg?itok=-I3ZIXAt' }, { brand: "AUDI", model: "A301", price: "1203", img: 'https://media.zigcdn.com/media/model/2022/Feb/audi-q7-1_360x240.jpg' },
        { brand: "LAMBORGHINI", model: "Vision GT", price: "9256", img: 'https://www.renderhub.com/squir/lamborghini-v12-vision-gran-turismo/lamborghini-v12-vision-gran-turismo-01.jpg' },
        { brand: "ROLLSROYCE", model: "Phantom", price: "5690", img: 'https://www.mansory.com/sites/default/files/styles/1920x800_fullwidth_car_slider/public/migrated/cars/Cars/rolls-royce/phantom8/mansory_rolls_royce_phantom_8_01.jpg?itok=-I3ZIXAt' }, { brand: "AUDI", model: "A301", price: "1203", img: 'https://media.zigcdn.com/media/model/2022/Feb/audi-q7-1_360x240.jpg' },
        { brand: "LAMBORGHINI", model: "Vision GT", price: "9256", img: 'https://www.renderhub.com/squir/lamborghini-v12-vision-gran-turismo/lamborghini-v12-vision-gran-turismo-01.jpg' },
        { brand: "ROLLSROYCE", model: "Phantom", price: "5690", img: 'https://www.mansory.com/sites/default/files/styles/1920x800_fullwidth_car_slider/public/migrated/cars/Cars/rolls-royce/phantom8/mansory_rolls_royce_phantom_8_01.jpg?itok=-I3ZIXAt' },
    ])
    return (
        <>
            <section class="text-gray-400 bg-ayanonize body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">



                        {Data.map((e) => {

                            return <SingelCard data={e} />


                        })}






                    </div>
                </div >
            </section >

        </>
    )
}
