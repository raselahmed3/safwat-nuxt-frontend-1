
<template>


    <section>
        <div class="container-fluid pl-0 pr-0" ><img class="w-full" src="~/assets/img/hero.png" ></div>
    </section>

    <section class="text-end ">
        <div class="container" >
            <div class="flex flex-row-reverse items-end pt-0 mt-3" >
                <div class=" flex justify-end p-2" >
                    <span class="flex justify-end" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" icon-clr w-5 h-5">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>       </span>
                
                        <span class="flex justify-end" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" icon-clr w-5 h-5">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>       </span>
                
                            <span class="flex justify-end" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" icon-clr w-5 h-5">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>       </span>
                
                                <span class="flex justify-end" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" icon-clr w-5 h-5">
                                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>       </span>
                
                                    <span class="flex justify-end" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" icon-clr w-5 h-5">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>       </span>
                
                                        
                                    
                </div>
                <span class="flex text-center p-1 font-xs me-1"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">48,120</span></span></span>
            </div>
            <h2  class="text-3xl red-700  mb-3"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Safwat Al Jouf olive oil</span></span></h2>
            <h3  class="text-base mb-4"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Excellent virgin first squeeze</span></span></h3>
            <p ><span class="text-base vertical-align: inherit;"><span class="vertical-align: inherit;">Safwat Al-Jouf olive oil, like pure gold, we picked from our best crops, our farms in Al-Jouf, where 100% organic extra-virgin olive oil is produced by first cold pressing.</span></span></p><img src="~/assets/img/Rectangle.png" class="w-full mt-5 ">
        </div>
    </section>
    




    <section class="mt-4 text-end ">
        <div class="container" >
            <h3 class="text-base font-bold mb-4">Width</h3>
            <div  class=" mb-14 truncate">
               <carousel :settings="settings" :breakpoints="breakpoints">
                 <Slide v-for="product in products" :key="product.id" class="prbt" >
                   <div class="cprbt " >
                     <div class=" prdtgg   "  >
                       <div class=" mt-2  "  >
                         <div class=" prdimg1 w-20  "><img class="w-full" :src="product.image" ><span class=" absolute prdtbg "><span ><span >4 liters</span></span><br></span></div>
                         <div class=" prdimg2 w-20  " ><img class="w-full" :src="product.image" ><span class=" absolute prdtbg "><span ><span >4 liters</span></span><br></span></div>
                         <div class=" prdimg3 w-20 " ><img class="w-full" :src="product.image" ><span class=" absolute prdtbg "><span ><span >4 liters</span></span><br></span></div>
                       </div>
                       <div class="mt-28">
                         <h3 class="text-base mr-2">{{ product.name }}</h3>
                         <h4 class="text-xs mr-2">{{ product.description }}</h4>
                         <p class="text-gray-500 font-normal mr-1 mt-2 text-base line-through">SAR {{product.DiscountPrice}}</p>
                         <p class="text-base font-medium mr-1  text-red-700 cursor-auto ">SAR {{ product.price }}</p>

                       </div>

                     </div>
                   </div>
                   <div class="crtbtnn flex">

                     <button v-if="!this.adtProducts.find((el)=>el.id == product.id)" @click="addToCart(product)">
                       <div class="flex-1 ml-3 mt-5"><span class="befrcrt"><span class="dtbtn">.</span></span></div>

                     </button>
                     <div v-else class="abtnw" ><span class=" aftercrt"> <span class="atbtn">.</span></span></div>

                   </div>

                 </Slide>
                 <template #addons>
                   <navigation />
                   <pagination />
                 </template>
               </carousel>


              
            <section >
                <div class="d-flex justify-content-between align-items-center" >
                  <div class="flex justify-between  items-center" >
        
                <div  class="flex justify-between items-center" style="width: 250px;padding: 10px 25px;border-radius: 5px;color: rgb(0,0,0);border: 1px solid #F2F2F2 ;" >
                <svg @click="qntyIncrementAndDecrement('decrement')"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 cursor-pointer">
                  <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                </svg>
                <span id="quantity-text" style="font-size: 18px;"><span ><span >   
                  
                  {{ quantity }}
                  </span></span></span>
                  
                  <svg @click="qntyIncrementAndDecrement('increment')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 cursor-pointer">
                  <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                </svg>
                </div>
               
               
                           
                <h3 class="text-base font-bold "><span ><span >Quantity</span></span></h3>
                 </div>
             
              
        
                 </div>
              </section>


                <WhatsappForm/>

                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
            
        </div>
    </section>

    <PurchaseForm :products="adtProducts" :totalPrice="totalPrice" />

<review/>
</template>


<script>
 import axios from 'axios';
 import 'vue3-carousel/dist/carousel.css'
 import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
    data() {
        return {
            products: [],
            names: [],
            adtProducts: [],
            selectedProduct: [],
            totalPrice: { 'totalPrice': 0 },
            quantity: 1,


          settings: {
            itemsToShow: 3,
            snapAlign: 'center',
          },
          breakpoints: {
            // 700px and up
            700: {
              itemsToShow: 4,
              snapAlign: 'center',
            },

            1024: {
              itemsToShow: 6,
              snapAlign: 'start',
            },
          }
            
        }
    },
    mounted(){
        axios.get('http://sawfat-laravel.test/api/product')
        .then(response => {
        // console.log(response.data);
          this.products = response.data.products
       })  
    },
    methods: {
        addToCart(product) {
            this.adtProducts = [...this.adtProducts, { ...product, quantity: this.quantity }];
            this.totalPrice.totalPrice = this.adtProducts.reduce((prev, current) => Number(prev) + Number(current.price * current.quantity), 0)   
        },
        qntyIncrementAndDecrement(type) {

            if (type == 'increment') {
                this.quantity++
            } else if (type == 'decrement' && this.quantity > 1) {
                this.quantity--
            }
        },


        
    },
    
    
        
};

</script>
