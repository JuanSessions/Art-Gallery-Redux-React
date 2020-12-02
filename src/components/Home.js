import React from 'react'
import postervideo from "../images/oil.mp4"
import '../style/app.scss'

export default function Home() {

    //     const banner = document.querySelector(".banner");
    //     window.addEventListener("scroll", function(){
    //        const value = 800 - window.scrollY;
    //    banner.style.clipPath = "circle("+ value +"px at center center)"
    //     }) 

    return (
       <div className="home">

             <section className="banner">
                 <video src={postervideo} autoPlay muted loop></video>
                 
             </section>
             <div className="container">
                 <h2>Bla bla </h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Assumenda dolore repellat obcaecati quae ullam veritatis, 
                     tempora fugiat enim explicabo a id repudiandae molestiae non inventore, 
                     molestias autem iusto atque. Asperiores blanditiis excepturi nam, quidem voluptatibus iure magnam hic,
                      corporis ab praesentium laudantium pariatur quaerat repellat sapiente recusandae culpa ullam voluptatum.

                 </p>
                  <p>                                                                                                                                                                                                                                                                                                                                                                                                                                       
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Assumenda dolore repellat obcaecati quae ullam veritatis, 
                     tempora fugiat enim explicabo a id repudiandae molestiae non inventore, 
                     molestias autem iusto atque. Asperiores blanditiis excepturi nam, quidem voluptatibus iure magnam hic,
                      corporis ab praesentium laudantium pariatur quaerat repellat sapiente recusandae culpa ullam voluptatum.

                 </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Assumenda dolore repellat obcaecati quae ullam veritatis, 
                     tempora fugiat enim explicabo a id repudiandae molestiae non inventore, 
                     molestias autem iusto atque. Asperiores blanditiis excepturi nam, quidem voluptatibus iure magnam hic,
                      corporis ab praesentium laudantium pariatur quaerat repellat sapiente recusandae culpa ullam voluptatum.

                 </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Assumenda dolore repellat obcaecati quae ullam veritatis, 
                     tempora fugiat enim explicabo a id repudiandae molestiae non inventore, 
                     molestias autem iusto atque. Asperiores blanditiis excepturi nam, quidem voluptatibus iure magnam hic,
                      corporis ab praesentium laudantium pariatur quaerat repellat sapiente recusandae culpa ullam voluptatum.

                 </p>


                    </div>  
                       </div>

    )
}
