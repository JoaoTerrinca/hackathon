const { getCollection, getMongoCollection, DATABASE_NAME, COLLECTION_ESTATE } = require('./db')
const { 
    TYPE,
    ROOM,
    ENERGY 
} = require('./services/services')

async function populateContent() {
    const collection = await getMongoCollection(DATABASE_NAME, COLLECTION_ESTATE)
    await collection.insertMany([
        {
            "image": [
                "https://entretenimento.plu7.com/wp-content/uploads/2022/03/Na-serie-de-TV-Halo-a-guerra-nao-e-um.jpg",
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.latercera.com%2Fmouse%2Flos-nuevos-posters-de-la-serie-de-halo-muestran-en-detalle-a-sus-personajes%2F&psig=AOvVaw2snVc075DxVZnc4PEMRKCF&ust=1654254306275000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIjLttjPjvgCFQAAAAAdAAAAABAU"
            ],
            "price": 2323,
            "location": "SDUHIJO",
            "size": 23240,
            "description": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
            "views": 0,
            "type": TYPE[0],
            "room": ROOM[1],
            "creationDate": "2016-07-15",
            "wc": 1,
            "energy": ENERGY[0]         
        },

         /*-------------- Vivendas---------*/

        {
            "image": [
                "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://media.istockphoto.com/photos/bathroom-in-new-luxury-home-with-two-sinks-and-dark-blue-cabinets-picture-id1067058352?k=20&m=1067058352&s=612x612&w=0&h=5GltTbqIX2Qz5JneWoHbllonIjItq-hLfsb4fMEkSB4=",
                "https://t4.ftcdn.net/jpg/02/83/65/77/360_F_283657781_QXCc4JLQtFh6F28XFAm1ZHwiRSnjhHKy.jpg"
               
            ],
            "price": 1000000,
            "location": "Rua São Jorge, n10, Sintra",
            "size": 465,
            "description": "Beautiful hause, with natural light, 4 rooms, 3 bathrooms, gardem, garage, big kichten",
            "views": 0,
            "type": TYPE[2],
            "room": ROOM[4],
            "creationDate": "2020-07-15",
            "wc": 3,
            "energy": ENERGY[2]         
        },

        {
            "image": [
                "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard-picture-id856794670?k=20&m=856794670&s=612x612&w=0&h=SXR5Z_QKT4gQY_gV53U33zk2kb9w2nw317odm2zBKt8=",
                "https://media.istockphoto.com/photos/empty-minimalist-room-with-gray-wall-on-background-picture-id1129813604?k=20&m=1129813604&s=612x612&w=0&h=FrADrPmofSeBG1T0o5YefRviG_5fq0oDPZosUq84Ax0=",
                "https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ],
            "price": 450000,
            "location": "Rua São Jorge, n10, Oeiras",
            "size": 265,
            "description": "Beautiful hause, with natural light, 3 rooms, 2 bathrooms, garden, garage, big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[2],
            "room": ROOM[3],
            "creationDate": "2020-07-15",
            "wc": 2,
            "energy": ENERGY[1]         
        },

        {
            "image": [
                "https://media.istockphoto.com/photos/large-house-with-steep-roof-and-side-entry-three-car-garage-picture-id1272163106?b=1&k=20&m=1272163106&s=170667a&w=0&h=pTjbBRKTcnhs-oIGpuSB4TyAE5768gp0BefDXxyUNTU=",
                "https://media.istockphoto.com/photos/cozy-modern-kitchen-white-room-interior-3drender-picture-id1136936441?k=20&m=1136936441&s=612x612&w=0&h=0zhcz_lGblvOcNKKvCnkPXFRJmnz27DFZ47KBfJlPd0=",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_QGTJFVivKVtJve51E6i1PCORTwv7wH0XKSRxQJLXdZ170Pn6U_8IvLx3tOOAwMVCiY&usqp=CAU"
            ],
            "price": 550000,
            "location": "Rua São Jorge, n10, Cascais",
            "size": 465,
            "description": "Beautiful hause, with natural light, 4 rooms, 2 bathrooms, garden, garage, big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[2],
            "room": ROOM[4],
            "creationDate": "2010-07-15",
            "wc": 2,
            "energy": ENERGY[3]         
        },

        {
            "image": [
                "https://assets-us-01.kc-usercontent.com/28e7bd12-5b30-009d-524e-785407f8bd6e/1b46406b-a5cf-48ee-902a-c682fbb5b532/18149%20Wild%20Blue%20Blvd%20estero%20FL-print-001-004-Front%20dusk-4200x2800-300dpi.jpg?w=400&h=240&fit=crop",
                "https://media.istockphoto.com/photos/green-tile-gives-beauty-and-unique-charm-to-this-basement-bathroom-picture-id1256021286?k=20&m=1256021286&s=612x612&w=0&h=tMrZl9v5OWA1UFby5ecmEvH9GwhL-ODkaWOXojTF3A4=",
                "https://t4.ftcdn.net/jpg/02/83/65/77/360_F_283657781_QXCc4JLQtFh6F28XFAm1ZHwiRSnjhHKy.jpg"
            ],
            "price": 850000,
            "location": "Rua São Jorge, n10, Cascais",
            "size": 865,
            "description": "Beautiful hause, with natural light, 5 rooms, 2 bathrooms, garden, garage, big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[2],
            "room": ROOM[5],
            "creationDate": "2020-07-15",
            "wc": 2,
            "energy": ENERGY[2]         
        },

        {
            "image": [
                "http://www.contemporist.com/wp-content/uploads/2015/02/modern-house-portugal-270215_01-800x533.jpg",
                "https://assets-news.housing.com/news/wp-content/uploads/2021/06/30171249/A-guide-to-choosing-bathroom-tiles-for-flooring-and-walls-FB-1200x700-compressed-686x400.jpg",
                "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1158997386?k=20&m=1158997386&s=612x612&w=0&h=FHTs2-uD10oNJnMkiVG-XJTUf4hqr8PGgO2jEZZhWwQ="

            ],
            "price": 650000,
            "location": "Rua São Jorge, n10, Sintra",
            "size": 565,
            "description": "Beautiful hause, with natural light, 3 rooms, 2 bathrooms, garden, garage, big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[2],
            "room": ROOM[3],
            "creationDate": "2020-07-15",
            "wc": 2,
            "energy": ENERGY[2]         
        },

        {
            "image": [
                "https://amazingarchitecture.com/storage/586/PAULO-MERLINI-architects-Rio-House-Portugal.jpg",
                "https://media.istockphoto.com/photos/luxury-modern-renovated-apartment-with-closets-walkins-very-well-picture-id1276846269?k=20&m=1276846269&s=612x612&w=0&h=o9MqffLiq1avMAqjq6nd45E_2sbcppXW_GQqh7ssM9E=",
                "https://t3.ftcdn.net/jpg/03/09/15/38/360_F_309153899_e6oWpcNBV44DEx52vikvw9a5XNlw7pVb.jpg"

            ],
            "price": 750000,
            "location": "Rua São Jorge, n10, Sintra",
            "size": 365,
            "description": "Beautiful hause, with natural light, 3 rooms, 2 bathrooms, garden, garage, big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[2],
            "room": ROOM[3],
            "creationDate": "2020-07-15",
            "wc": 2,
            "energy": ENERGY[4]         
        },

        {
            "image": [
                "https://static01.nyt.com/images/2018/06/10/realestate/10IHH-PORTUGAL-slide-TW4G/10IHH-PORTUGAL-slide-TW4G-superJumbo.jpg",
                "https://media.baamboozle.com/uploads/images/80230/1601933762_100138",
               "https://metcabinet.com/wp-content/uploads/2021/06/Stock-Cabinets-Boston-3.jpg"

            ],
            "price": 550000,
            "location": "Rua São Jorge, n10, Alentejo",
            "size": 465,
            "description": "Beautiful hause, with natural light, 3 rooms, 2 bathrooms, garden, garage, big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[2],
            "room": ROOM[3],
            "creationDate": "2000-07-15",
            "wc": 2,
            "energy": ENERGY[4]         
        },

        {
            "image": [
                "https://housesofportugal.com/wp-content/uploads/2020/03/Houses_Of_Portugal_Casa_Oliveira-69.jpg",
                "https://t3.ftcdn.net/jpg/03/41/61/96/360_F_341619664_cHrQA462N65rA89OGNY4ihwSyqxVBRTe.jpg",
                "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&w=1000&q=80"

            ],
            "price": 550000,
            "location": "Rua São Jorge, n90, Alentejo",
            "size": 365,
            "description": "Beautiful hause, with natural light, 3 rooms, 2 bathrooms, garden, garage, big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[2],
            "room": ROOM[3],
            "creationDate": "2000-07-15",
            "wc": 2,
            "energy": ENERGY[4]         
        },

        {
            "image": [
                "https://fitsmallbusiness.com/wp-content/uploads/2021/11/StockImage_House_with_Exterior_Lighting_and_Accents.jpg",
                "https://media.istockphoto.com/photos/contemporary-country-home-cabin-bathroom-design-with-vanity-and-linen-picture-id1317170725?b=1&k=20&m=1317170725&s=612x612&w=0&h=LT1C_9gGkqAOcTgI0gqn25gm1NyowZdaxMHdgcehpcY=",
                "https://www.norfolkkitchenandbath.com/wp-content/uploads/2020/04/4999-Stock-Ech-w-Lam-1000x700-1.jpg"
                
            ],
            "price": 150000,
            "location": "Rua São Jorge, n90, Viseu",
            "size": 265,
            "description": "Beautiful hause, with natural light, 3 rooms, 2 bathrooms, garden, garage, big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[2],
            "room": ROOM[3],
            "creationDate": "2000-07-15",
            "wc": 2,
            "energy": ENERGY[4]         
        },

        {
            "image": [
                "https://img00.rhimg.com/h.22794451.795.500.0.ffffff.288ae7aa.jpg",
                "https://www.cliqstudios.com/media/cms-pages/cliqstudios-dayton-mendota-white-carbon-4124445-102-1920x1080.jpg",
                "https://us.123rf.com/450wm/rilueda/rilueda2008/rilueda200800143/154302024-interior-of-a-hotel-bathroom-interior-with-shower-cabin.jpg?ver=6"
                
                
            ],
            "price": 250000,
            "location": "Rua São Jorge, n90, Loures",
            "size": 165,
            "description": "Beautiful hause, with natural light, 3 rooms, 2 bathrooms, garden, garage, big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[2],
            "room": ROOM[3],
            "creationDate": "2000-07-15",
            "wc": 2,
            "energy": ENERGY[4]         
        },


        /*-------------- Apartamentos---------*/

        {
            "image": [
                "https://media.istockphoto.com/photos/modern-apartments-picture-id931243836?k=20&m=931243836&s=612x612&w=0&h=TkIkYHMVI_tCmmpSmUMp7nH8gfS-JhoipbnzQe9syJM=",
                "https://static8.depositphotos.com/1100172/962/i/600/depositphotos_9621466-stock-photo-modern-bedroom.jpg",
                "https://images.pond5.com/stylish-interior-modern-bathroom-toilet-photo-164628224_iconl_nowm.jpeg"
                
                
            ],
            "price": 190000,
            "location": "Rua São Jorge, n90, Loures",
            "size": 100,
            "description": "Beautiful apartment, with 2 rooms, 1 bathroom,  big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[0],
            "room": ROOM[2],
            "creationDate": "2000-07-15",
            "wc": 1,
            "energy": ENERGY[3]         
        },

        {
            "image": [
                "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517?k=20&m=1184204517&s=612x612&w=0&h=EgsvQW1HYCldGu2kKf0tzkuoL1h5coYuQDHHQhfb1MA=",
                "https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://cdn.create.vista.com/api/media/small/7870339/stock-photo-modern-bathroom-sink"
                
                
            ],
            "price": 290000,
            "location": "Rua São Jorge, n90, Loures",
            "size": 200,
            "description": "Beautiful apartment, with 3 rooms, 2 bathrooms,  big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[0],
            "room": ROOM[3],
            "creationDate": "2001-07-15",
            "wc": 2,
            "energy": ENERGY[3]         
        },


        {
            "image": [
                "https://media.istockphoto.com/photos/bedroom-in-new-luxury-home-picture-id1194686012?k=20&m=1194686012&s=612x612&w=0&h=4INg253lLq3EyPRPk1eUthKogpAW4vvHdm-c574frao=",
                "https://media.istockphoto.com/photos/detail-in-modern-residential-apartment-flat-building-exterior-picture-id1185256981?k=20&m=1185256981&s=612x612&w=0&h=yFtKiva1758Z0kbKoRkSGJ7-9wdn1yrkPEDFXQbOmGg=",
                "https://media.istockphoto.com/photos/modern-bathroom-interior-picture-id1330857810?b=1&k=20&m=1330857810&s=170667a&w=0&h=PKV9Qw8BRGqIAsJsbz3UQAmzKkmHBbMZ158wMwfN0sg="
                
                
            ],
            "price": 350000,
            "location": "Rua São Jorge, n90, Restelo",
            "size": 200,
            "description": "Beautiful apartment, with 1 rooms, 1 bathroom,  big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[0],
            "room": ROOM[1],
            "creationDate": "2020-07-15",
            "wc": 1,
            "energy": ENERGY[3]         
        },

        {
            "image": [
                "https://thespaces.com/wp-content/uploads/2017/01/Lisbon-apartments-for-rent-Baixa-House-1.jpg",
                "https://media.istockphoto.com/photos/typical-exterior-of-old-houses-in-lisbon-picture-id539984294?k=20&m=539984294&s=612x612&w=0&h=RJUjgqsk6jJk51B6e59s_uLRNhPVRNrGqXPEjmbCnNU=",
                "https://t3.ftcdn.net/jpg/03/27/61/72/360_F_327617256_gPIvnB2Z6aEnABxf3ceOY4PLVAnFkTTH.jpg"
                
                
            ],
            "price": 550000,
            "location": "Rua São Jorge, n90, Lisboa",
            "size": 270,
            "description": "Beautiful apartment, with 2 rooms, 1 bathroom,  big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[0],
            "room": ROOM[2],
            "creationDate": "2000-07-15",
            "wc": 1,
            "energy": ENERGY[3]         
        },



        {
            "image": [
                "https://media.istockphoto.com/photos/modern-apartment-buildings-on-a-sunny-day-with-a-blue-sky-picture-id1177797403?k=20&m=1177797403&s=612x612&w=0&h=bfprQyZxMluJaAfl2NyzIndyJDOoNGgSh8eOegCsAB4=",
                "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1152343454?k=20&m=1152343454&s=612x612&w=0&h=CMw9nEv8OYL1f3O7UKDFozYKnwoaezm5sMY8vK7BRw8=",
                "https://media.istockphoto.com/photos/modern-bathroom-interior-stock-photo-picture-id1340869268?b=1&k=20&m=1340869268&s=170667a&w=0&h=CDkthOJCwmb5Stc1ApUVjeMsIgUjUPwxKwMNq9jzEBk="
                
                
            ],
            "price": 790000,
            "location": "Rua São Jorge, n90, Lisboa",
            "size": 100,
            "description": "Beautiful apartment, with 3 rooms, 2 bathrooms, kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[0],
            "room": ROOM[3],
            "creationDate": "2005-07-15",
            "wc": 2,
            "energy": ENERGY[3]         
        },



        {
            "image": [
                "https://imagescdn.amarantelva.com/thumb/http://images.amarantelva.com.s3-website-eu-west-1.amazonaws.com/property/71989301/71989301_1.jpg",
                "https://media.istockphoto.com/photos/bohemian-living-room-interior-3d-render-picture-id1182454657?k=20&m=1182454657&s=612x612&w=0&h=1xEsm7BqeicA8jYk9KlerUtGsAgzzo530l5Ak1HJdnc=",
                "https://q-xx.bstatic.com/xdata/images/hotel/840x460/206581445.jpg?k=7f879f71d127eea16a6ec2f3ed3e9e9d9be58b602c1c0f5cf187e9ca88c1f397&o="
                
                
            ],
            "price": 490000,
            "location": "Rua São Jorge, n90, Lisboa",
            "size": 100,
            "description": "Beautiful apartment, with 2 rooms, 1 bathroom, balcony, picturesque neighborhood",
            "views": 0,
            "type": TYPE[0],
            "room": ROOM[2],
            "creationDate": "2000-07-15",
            "wc": 1,
            "energy": ENERGY[4]         
        },



        {
            "image": [

                "https://www.portugalhomes.com/assets/content/properties/466/photos/5.jpg",
                "https://static4.depositphotos.com/1006348/384/i/450/depositphotos_3846245-stock-photo-sunset-china-real-estate-empty.jpg",
                "https://www.huntwood.com/wp-content/uploads/2020/08/1PaintedColonialWhite.jpg"
                
                
            ],
            "price": 390000,
            "location": "Rua São Jorge, n90, Almada",
            "size": 100,
            "description": "Beautiful apartment, with 3 rooms, 2 bathrooms,  big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[0],
            "room": ROOM[3],
            "creationDate": "2001-06-25",
            "wc": 2,
            "energy": ENERGY[4]         
        },



        {
            "image": [
           
                "https://media.istockphoto.com/photos/typical-architecture-and-colorful-buildings-of-lisbon-historic-center-picture-id1158506053?k=20&m=1158506053&s=612x612&w=0&h=m6X1YG1aICI5cIdSqmuLrRzoZPyONRX_kbSey9ZPNRQ=",
                "https://thespaces.com/wp-content/uploads/2017/01/Lisbon-apartments-for-rent-Baixa-House.jpg",
                "https://media-cdn.tripadvisor.com/media/photo-s/16/8d/97/91/lamego-apartment.jpg"

                
            ],
            "price": 400000,
            "location": "Rua São Jorge, n90, Lisboa",
            "size": 100,
            "description": "Beautiful apartment, with 1 rooms, 1 bathroom,  big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[0],
            "room": ROOM[1],
            "creationDate": "1970-07-15",
            "wc": 1,
            "energy": ENERGY[5]         
        },



        {
            "image": [
           
                
                
            ],
            "price": 190000,
            "location": "Rua São Jorge, n90, Olivais",
            "size": 100,
            "description": "Beautiful apartment, with 2 rooms, 1 bathroom,  big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[0],
            "room": ROOM[2],
            "creationDate": "2000-07-15",
            "wc": 1,
            "energy": ENERGY[4]         
        },



        {
            "image": [
           
                
                
            ],
            "price": 190000,
            "location": "Rua São Jorge, n90, Loures",
            "size": 100,
            "description": "Beautiful apartment, with 2 rooms, 1 bathroom,  big kitchen, lovely neighborhood",
            "views": 0,
            "type": TYPE[0],
            "room": ROOM[2],
            "creationDate": "2000-07-15",
            "wc": 1,
            "energy": ENERGY[5]         
        },
        










        
    ])
}

populateContent()
    .then(() => console.log("Estate has been populated"))
    .catch((err) => console.log(err))

// populateSeasons()
//     .then(() => console.log("Season has been populated"))
//     .catch((err) => console.log(err))

// populateEpisodes()
//     .then(() => console.log("Episode has been populated"))
//     .catch((err) => console.log(err))