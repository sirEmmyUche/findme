import {Link, useParams} from 'react-router-dom';

function Home(){
    const { category } = useParams();
    const contentMap = {
        drive: {
            title: "Drive and Make Money",
            points: [
                { title: "Reach New Customers", description: "Random words" },
                { title: "Become Global", description: "Random words" },
                { title: "Get Updated", description: "Random words" }
            ],
            imageUrl: "/icons/whatsapp.svg"
        },
        electrical: {
            title: "Electrical Services",
            points: [
                { title: "Title 1", description: "Description 1" },
                { title: "Title 2", description: "Description 2" },
                { title: "Title 3", description: "Description 3" }
            ],
            imageUrl: "path/to/electrical/image.jpg"
        },
        plumbing: {
            title: "Plumbing Services",
            points: [
                { title: "Title 1", description: "Description 1" },
                { title: "Title 2", description: "Description 2" },
                { title: "Title 3", description: "Description 3" }
            ],
            imageUrl: "path/to/plumbing/image.jpg"
        },
        carpentry: {
            title: "Carpentry Services",
            points: [
                { title: "Title 1", description: "Description 1" },
                { title: "Title 2", description: "Description 2" },
                { title: "Title 3", description: "Description 3" }
            ],
            imageUrl: "path/to/carpentry/image.jpg"
        }
    };

    const categoryContent = contentMap[category] || {};

    return(
        <>
            <main>
                <section className='earn-with-us'>
                    <h1>Earn With us</h1>
                    <ul className='earn-with-us-ul'>
                        <li><Link to={'/drive'}>Drive</Link></li>
                        <li>Electrical</li>
                        <li>Plumbing</li>
                        <li>Carpentery</li> 
                    </ul>
                    <div className='earn-with-us-first-div'>
                        <div className='earn-with-us-first-div-img-box'>
                            <img src={categoryContent.imageUrl} alt={categoryContent.title}/>
                        </div>
                        <div className='earn-with-us-ol'>
                            <h1>{categoryContent.title}</h1>
                            <ol>
                                {categoryContent.points && categoryContent.points.map((point, index) => (
                                <li key={index}>
                                    <h4>{point.title}</h4>
                                    <p>{point.description}</p>
                                </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </section>
                <section>
                    <h1>Our Service</h1>
                    <div>
                        <div>
                            <h3>Rides</h3>
                            <p>Join our ride</p>
                            <div><img src='#' loading='lazy' /></div>
                        </div>
                        <div>
                            <h3>Delivery</h3>
                            <p>Send message anytime, anywhere</p>
                            <div><img src='#'loading='lazy' /></div>
                        </div>
                        <div>
                            <h3>Electrical assistant</h3>
                            <p>Contact the best electrician for your need</p>
                            <div><img/></div>
                        </div>
                        <div>
                            <h3>Rides</h3>
                            <p>Join our ride</p>
                            <div><img/></div>
                        </div>
                        <div>
                            <h3>Rides</h3>
                            <p>Join our ride</p>
                            <div><img/></div>
                        </div>
                        <div>
                            <h3>Rides</h3>
                            <p>Join our ride</p>
                            <div><img/></div>
                        </div>
                    </div>
                </section>
            </main>
        
        </>
    )
}

export default Home;



// import React from 'react';
// import { useParams } from 'react-router-dom';

// const EarnWithUs = () => {
//     const { category } = useParams();

//     // Define content for different categories
    

//     const categoryContent = contentMap[category] || {};

//     return (
//         <section className='earn-with-us'>
//             <h1>Earn With us</h1>
//             <ul className='earn-with-us-ul'>
//                 <li><Link to="/earn-with-us/drive">Drive</Link></li>
//                 <li><Link to="/earn-with-us/electrical">Electrical</Link></li>
//                 <li><Link to="/earn-with-us/plumbing">Plumbing</Link></li>
//                 <li><Link to="/earn-with-us/carpentry">Carpentry</Link></li>
//             </ul>
//             <div className='earn-with-us-first-div'>
//                 <div className='earn-with-us-first-div-img-box'>
//                     <img src={categoryContent.imageUrl} alt={categoryContent.title}/>
//                 </div>
//                 <div className='earn-with-us-ol'>
//                     <h1>{categoryContent.title}</h1>
                    // <ol>
                    //     {categoryContent.points && categoryContent.points.map((point, index) => (
                    //         <li key={index}>
                    //             <h4>{point.title}</h4>
                    //             <p>{point.description}</p>
                    //         </li>
                    //     ))}
                    // </ol>
//                 </div>
//             </div>
//         </section>
//     );
// };
