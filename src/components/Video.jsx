import React from 'react';

const Video = () => {
    return (
        <div className='mt-[30px] w-full border-t-2 border-t-green-900 '>
            <div className='pb-10 flex w-[90%] m-auto h-[100%] '>
                <video width="100%" height="100%" src="/assets/video.mp4" type="video/mp4" autoPlay muted loop />

            </div>

            <div className='flex justify-between w-[90%] m-auto pb-11 text-[18px] font-thin'>
                <div>NATROCEUTICS</div>
                <div>©2023</div>
            </div>
        </div>

    );
}

export default Video;
