import nookies from 'nookies'
import Router from 'next/router';

export async function getServerSideProps(ctx){
    const cookies = nookies.get(ctx)
    if(!cookies.token){
        return {
            redirect: {
                destination: '/login' 
            }
        }
    }
    return {
        props: {}
    }
}

export default function Dashboard(){
    function logout() {
        nookies.destroy(null, 'token')
        Router.replace('/login')
    }

    return (
        <div className="h-screen w-screen flex justify-center items-center text-4xl flex-col">
            <h1>Berhasil Login</h1>
            <button onClick={logout} className='bg-red-500 rounded mt-4 py-2 px-3 text-white'>Logout</button>
        </div>
    )
}