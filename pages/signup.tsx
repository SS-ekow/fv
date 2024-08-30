import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styled from 'styled-components';
import Link from 'next/link';


const SignUp =() =>{
    return (
        <>
            <Navbar/>
                <main>
                    <RegisterStyled>
                        <div className="form-container shadow-lg">
                            <h2>Create Account</h2>
                            <form action=''>
                                <div>
                                    <input type="text" placeholder='Email'/>
                                </div>
                                <div>

                                    <input type="password" placeholder='Password'/>
                                </div>
                                <div>

                                    <input type="password" placeholder='Confirm Password'/>
                                </div>
                                <div>

                                    <input type="checkbox"/> Accept terms & Conditions
                                </div>

                                <button>Create Account</button>
                            </form>

                            <p>Already have an account? <Link href='/signin'><span className="login">Log In</span></Link></p>
                        </div>

                    </RegisterStyled>                    
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

const RegisterStyled = styled.main`
    /*w-full h-full flex items-center justify-center p-16  */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;

    .form-container{
        /*w-1/2 h-fit p-8 border border-gray-300 flex flex-col rounded-md shadow-lg  */
        width: 650px;
        height: 540px;
        padding: 32px;
        border: 1px solid rgba(242, 242, 242, 1);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
    }

    .form{
        /*w-full h-full flex flex-col  */
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;



    }

    input[type="text"], input[type="password"]{
        /*border border-gray-300 rounded-md p-4 w-full   */
        border: 1px solid gray;
        border-radius: 6px;
        padding: 1rem;
        height: 49px;
        width: 100%;
        margin-bottom: 16px;
    }

    button{
        /* w-full py-8 px-4 bg-green-500 rounded-full text-white  */
        width: 100%;
        padding: 1rem 2rem;
        background: rgba(0, 179, 7, 1);
        border-radius: 42px;
        color: white;
        margin: 16px 0;
    }

    .login{
        font-weight: bold;
    }
 
`

export default SignUp;