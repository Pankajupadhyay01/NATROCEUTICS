import React from 'react'

const Journey = () => {
  return (
    <div className='text-black text-8xl pt-28'>
        {/* wrapper box */}
        <div className='border-t-2 border-t-green-900 flex p-12'>
            <div className='flex flex-col flex-1 gap-9'>
                <div className='font-normal text-[#1d4130] text-[52px]'>
                    <p>
                        <span className='ml-12'>Our</span> Journey began when those closest to us fell ill.
                    </p>
                </div>
                <div className='text-[18px] font-light text-[#194430]'>
                    <p className='text-[#194430]'>
                    We were told there was nothing more that could be done, that it was time to say goodbye. Except it wasn’t. There was a different path, an unexplored path that we knew we could navigate. So, we did. Now we’re inviting you to join us.
                    </p>
                </div>
                <div className='flex-1 text-[14px]'>
                    <button className='bg-[#1d4130] text-white p-[22px_52px] rounded-full'>More About Our Journey</button>
                </div>
            </div>
            <div className='flex justify-center items-center flex-1'>
                <div className='w-[90%] border-2 border-green-900 rounded-2xl p-2'>
                    <img src="https://uploads-ssl.webflow.com/63088dc6f3670c21541c6fe6/636917161303a5b581dd8cf6_Natroceutics_Home_Our_Journey_Stem-p-800.jpg" alt="plant"  className='bg-fixed'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Journey