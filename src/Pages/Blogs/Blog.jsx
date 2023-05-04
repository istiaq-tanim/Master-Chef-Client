import React from 'react';
import ReactToPdf from 'react-to-pdf'


const Blog = () => {
    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        size:"A4"
    };
    
    

    return (
        <div ref={ref}>
            <h3 className='font-display text-center my-10 text-5xl font-bold text-indigo-500'>My Blog Page</h3>
            <div className='md:flex'>
                <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                    <div className="card-body items-center text-center bg-teal-400 rounded-lg">
                        <h2 className="card-title text-xl">Differences between uncontrolled and controlled components?</h2>
                        <p className='text-lg'>Controlled components in React are controlled by the parent component through props, while uncontrolled components manage their own state internally.
                        </p>
                    </div>
                </div>
                <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                    <div className="card-body items-center text-center bg-red-300 rounded-lg">
                        <h2 className="card-title text-xl">How to validate React props using PropTypes?</h2>
                        <p className='text-lg'>PropTypes is a built-in library in React that enables developers to validate the types of props passed to a component, as well as define additional requirements and constraints on those props. It provides various types such as string, number, bool, object, array, func, node, and element which developers can use to ensure that the props passed to a component are of the expected type.</p>
                    </div>
                </div>
                <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                    <div className="card-body items-center text-center bg-blue-200 rounded-lg">
                        <h2 className="card-title text-xl">Difference between nodejs and express js?
                        </h2>
                        <p className='text-lg'>Node.js is a platform for running JavaScript outside of web browsers.It provides a platform for building server-side applications using JavaScript, which was traditionally used only on the client-side.while Express.js is a framework for building web applications and APIs on top of Node.js, using its core features.</p>
                    </div>
                </div>

                <div className="my-5 card w-full lg:w-1/3 bg-base-100 p-2">
                    <div className="card-body items-center text-center bg-indigo-400 rounded-lg">
                        <h2 className="card-title text-xl">What is a custom hook, and why will you create a custom hook?</h2>
                        <p className='text-lg'>When you have component logic that needs to be reused across multiple components, you can extract that logic to a custom hook. This allows you to encapsulate that logic in a separate function and reuse it in different components, reducing duplication and making your code more modular and easier to maintain. Custom hooks are also a good way to separate concerns and keep your code organized.Custom Hooks start with "use". Example: useAuth.
                        </p>

                    </div>
                </div>
            </div>
            <div className='text-center mb-10'>
                <ReactToPdf targetRef={ref} options={options} x={0} y={0} scale={0.72} filename="div-blue.pdf">
                    {({ toPdf }) => (
                        <button onClick={toPdf} className="btn btn-error">Download</button>
                    )}
                </ReactToPdf>
                
                
            </div>
        </div>

    );

};

export default Blog;