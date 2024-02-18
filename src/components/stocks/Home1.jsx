import React from 'react'


const Logout = () => {
        localStorage.clear()
        setTimeout(() => {
                window.location.reload()
        }, 1500);
}

const Home1 = () => {
        return (
                <div className=' flex justify-center'>
                        <button className=' bg-red-500 rounded-lg shadow-lg px-1   ' onClick={Logout}>ออกจากระบบ</button>
                </div>
        )

}

export default Home1


