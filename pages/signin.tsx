import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styled from 'styled-components';
import Link from 'next/link';


const SignIn =() =>{
    return (
        <>
            <Navbar/>
                <main >
                    <div className='w-full h-full flex items-center justify-center p-8'>
                    
                    
                        <div className="form-container w-1/2 h-fit p-8 border border-gray-300 flex flex-col rounded-md shadow-lg">
                            <h2>Sign In</h2>
                            <form action='' className='w-full h-full flex flex-col '>
                                <div>
                                    <input type="text" placeholder='Email' className='border border-gray-300 p-4 w-full mb-4 rounded-md '/>
                                </div>
                                <div>

                                    <input type="password" placeholder='Password' className='border border-gray-300 p-4 w-full mb-4 rounded-md'/>
                                </div>
                                <div className="remember flex justify-between">
                                    <div>
                                        <input type="checkbox" className='mr-1'/>Remember me
                                    </div>
                                    <Link href="#">Forgot password?</Link>

                                </div>


                                <button className='w-full px-8 py-4 bg-green-500 rounded-full text-white my-4  font-semibold  '>Login</button>
                            </form>

                            <p> Don&apos;t have an account? <Link href='/signup'><span className="login">Register</span></Link></p>
                        </div>

                    </div>
                </main>
            <Footer/>
        </>
        // <Layout>
        //     <div>
        //         sign up page
        //     </div>
        // </Layout>
    )
}



export default SignIn;