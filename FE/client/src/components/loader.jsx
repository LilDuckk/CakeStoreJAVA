import React, { useEffect } from 'react'

const Loader = () => {
    useEffect(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            setTimeout(() => {
                loader.style.transition = 'opacity 1s, display 0s 1s';
                loader.style.opacity = 0;
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 1000); // Đảm bảo đồng bộ với thời gian chuyển đổi độ mờ
            }, 0);
        }
    }, []);
    return (
        <div>
            {/* // < !--START PAGE LOADER-- > */}
            <div id="loader">
                <div class="loader center-block">
                    <div class="inner one"></div>
                    <div class="inner two"></div>
                    <div class="inner three"></div>
                </div>
            </div>
            {/* // <!--END PAGE LOADER-- > */}

            {/* // < !--START MODEL WINDOW LOADER-- > */}
            <div id="model-loader" class="center-block">
                <div class="loader center-block">
                    <div class="inner one"></div>
                    <div class="inner two"></div>
                    <div class="inner three"></div>
                </div>
            </div>
            {/* // <!--END MODEL WINDOW LOADER-- > */}
        </div>
    )
}

export default Loader;