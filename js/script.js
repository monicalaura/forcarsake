//Toggle navigation

$(document).ready(function () {

    //toggler btn
     $('.navbar-toggler').click(function() {
   
       $('.navbar-toggler').toggleClass('change');
      
         
     });
    });



//CreateCars module

const CreateCars = (() =>{
 //car data
 const cars =[];

 //CAR class
 class Car {
     constructor(producer, country, img, special, model, price, type, trans, gas){
         this.producer = producer;
         this.country = country;
         this.img = img;
         this.special = special;
         this.model = model;
         this.price = price;
         this.type = type;
         this.trans = trans;
         this.gas = gas;

     }

     }
     //car creation function
     function makeCar(producer, country, img='img/featured.jpg', special= true, model='last model', price='11,000', type='audi', trans='automatic', gas='52'){
         const car = new Car(producer, country, img, special, model, price, type, trans, gas);
         cars.push(car);
 }
     function produceCars(){
         makeCar('audi', 'european');
         makeCar('Aston-Martin',  'european',  'img/european/aston-martin.jpg',true, undefined, '12,000');
         makeCar('Fiat-spider', 'european', 'img/european/fiat-124-spider-4185536_1280.jpg',false, 'other model', '10,000');
         makeCar('Jaguar', 'european', 'img/european/jaguar.jpg',false, undefined, '14,000');
         makeCar('Mercedes', 'european', 'img/european/mercedes (2).jpg',true, undefined, '13,000');
         makeCar('Opel', 'european', 'img/european/opel.jpg',false);
         makeCar('Cadillac', 'american', 'img/american/cadillac.jpg',false, 'older model', '9,000');
         makeCar('Chevrolet', 'american', 'img/american/chevrolet.jpg',true, 'other model', '12,000');
         makeCar('GMC', 'american', 'img/american/gmc-2229520_1280.jpg',false, undefined, '15,000');
         makeCar('Honda-Glias', 'japanese', 'img/japonese/honda-glias.jpg',true, undefined, '16,000');
         makeCar('Mitshubishi-Colt', 'japanese', 'img/japonese/mitsubishi-colt2247441_1280.jpg',false, 'other model', '16,000');
         makeCar('Nissan-Altima', 'japanese', 'img/japonese/Nissan Altima.jpg',false, undefined, '12,000');
     }  
         produceCars();
        

         //special cars
         const featuredCars = cars.filter(car => car.special === true);
        

         return{
             cars,
             featuredCars
         }
})();

//display featured cars

const DisplayFeaturedCars = ((CreateCars)=>{

    const featuredCars = CreateCars.featuredCars;
    

    const info = document.querySelector('.featured-info');

    //document loaded event
    document.addEventListener('DOMContentLoaded', () => {

        info.innerHTML = '';

        let data = '';

        featuredCars.forEach(item => {
            
         data += `<!--item-->
            <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
               <span data-img="${item.img}" class="featured-icon mr-2">
                   <i class="fas fa-car"></i>
               </span>
               <h5 class="font-weight-bold mx-1">${item.producer}</h5>
               <h5 class="mx-2">${item.model}</h5>
            </div>
             <!--END item-->`
             

        });

        info.innerHTML = data; 
        //document.querySelector('.featured-info').innerHTML = data;   
        console.log(data);
    })

    //change image
    info.addEventListener('click', (event) => {

        if(event.target.parentElement.classList.contains('featured-icon')) {
          
            const img = event.target.parentElement.dataset.img;
            console.log(img);
            document.querySelector('.featured-image').src = img;
        }
    })

})(CreateCars);

//display all cars

const DisplayAllCars = ((CreateCars) => {

    const cars = CreateCars.cars;

    //car container
    const catalogue = document.querySelector('.catalogue-container');
    document.addEventListener('DOMContentLoaded', () =>{
        
        catalogue.innerHTML = '';

        let output ='';
        cars.forEach((car)=>{
            output+=` <!--car item 1-->
            <div class="col-11 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
                <div class="card car-card">
                    <img src="${car.img}" class="card-img-top car-img" alt="${car.producer}">
                    
                    <!--card body-->
                    <div class="card-body">
                        <div class="car-info d-flex justify-content-between">
                          <!--first flex child-->
                            <div class="car-text text-uppercase">
                                <h6 class="font-weight-bold">${car.producer}</h6>
                                <h6>${car.model}</h6>
                            </div> 
                          <!--second flex child-->
                          <h5 class="car-value align-self-center py-2 px-3"><span class="car-price">€ ${car.price}</span></h5>
                        </div>
                    </div>
                     <!--END card body-->

                      <!--card footer-->
                      <div class="card-footer text-capitalize d-flex justify-content-between">
                          <p><span><i class="fas fa-car"></i></span>${car.producer}</p>
                          <p><span><i class="fas fa-cogs"></i></span>${car.trans}</p>
                          <p><span><i class="fas fa-gas-pump"></i></span>${car.gas}</p>
                      </div>
                       <!--END card footer-->
                </div>
            </div>
            <!--END car item-->`
        })

        catalogue.innerHTML = output;
    })
})(CreateCars);

//filter cars countries
const FilterCars = (() => {
const filterBtns = document.querySelectorAll('.filter-btn'); 


filterBtns.forEach((btn) => {
    btn.addEventListener('click', (event)=> {
        const val = event.target.dataset.filter;
        const singleCar = document.querySelectorAll('.single-car');
        
        singleCar.forEach((car) => {
            if(val==='all'){
                car.style.display = 'block';

            }
            else{
                (!car.classList.contains(val))? car.style.display = 'none' 
                :car.style.display ="block";
            }

            
        })
    })
})

})();






