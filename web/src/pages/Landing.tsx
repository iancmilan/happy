import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from "framer-motion";

import '../styles/pages/landing.css';

// import logoImg from '../images/logo.svg';

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <div className="img-container">
                    <motion.svg className="happy" width="240" height="74" viewBox="0 0 240 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path initial={{ y: 10 * 1.2 }} animate={{ y: 0 }} transition={{ease: "easeInOut", duration: 0.4 }} fill-rule="evenodd" clip-rule="evenodd" d="M105.488 22.7864C103.168 22.7864 100.414 23.2783 97.4059 26.7662V17.0051C97.4059 14.5392 95.4046 12.5333 92.9443 12.5333C90.484 12.5333 88.4827 14.5392 88.4827 17.0051V48.8375C88.4827 51.3033 90.484 53.3092 92.9443 53.3092C95.4046 53.3092 97.4059 51.3033 97.4059 48.8375V36.4827C97.4059 32.9309 99.0886 30.9697 102.154 30.9697C105.156 30.9697 106.737 32.8734 106.737 36.4827V48.8375C106.737 51.3033 108.738 53.3092 111.199 53.3092C113.659 53.3092 115.66 51.3033 115.66 48.8375V33.8891C115.654 26.9387 111.855 22.7864 105.488 22.7864ZM131.111 23.0037C127.478 23.0037 124.597 23.4764 121.773 24.5369C120.307 25.0863 119.326 26.5044 119.326 28.0632C119.326 30.1457 120.977 31.7747 123.086 31.7747C123.52 31.7747 123.883 31.7108 124.38 31.5447C126.095 31.0081 127.905 30.7526 129.925 30.7526C134.718 30.7526 135.738 33.4037 135.751 35.646C134.087 35.103 131.99 34.6047 129.065 34.6047C121.442 34.6047 117.069 38.099 117.069 44.1998V44.3084C117.069 49.8214 121.2 53.5266 127.344 53.5266C130.805 53.5266 133.578 52.4725 135.789 50.3133C136.165 51.8912 137.676 53.3157 139.996 53.3157C142.437 53.3157 144.349 51.4248 144.349 49.0101V35.8312C144.349 31.6853 143.266 28.4912 141.118 26.3447C138.9 24.128 135.534 23.0037 131.111 23.0037ZM129.817 47.1192C127.287 47.1192 125.719 45.9182 125.719 43.9826V43.874C125.719 41.5678 127.644 40.2519 131.003 40.2519C132.723 40.2519 134.438 40.5904 135.859 41.2037V42.4238C135.859 45.1836 133.374 47.1192 129.817 47.1192ZM156.306 26.8433C158.613 24.1155 161.456 22.7867 164.974 22.7867C171.686 22.7867 178.474 28.0442 178.474 38.0993V38.2079C178.474 42.8393 177.053 46.7617 174.369 49.5597C171.915 52.1214 168.582 53.5268 164.974 53.5268C161.501 53.5268 158.741 52.3386 156.351 49.8089V57.4747C156.351 59.9405 154.349 61.9464 151.889 61.9464C149.429 61.9464 147.427 59.9405 147.427 57.4747V27.4757C147.427 25.0098 149.429 23.0039 151.889 23.0039C154.139 23.0039 156 24.6777 156.306 26.8433ZM169.557 38.0993C169.557 33.7617 166.683 30.4845 162.871 30.4845C159.034 30.4845 156.242 33.685 156.242 38.0993V38.2079C156.242 42.6221 159.028 45.8226 162.871 45.8226C166.746 45.8226 169.557 42.6221 169.557 38.2079V38.0993ZM198.08 22.7867C194.561 22.7867 191.719 24.1155 189.411 26.8433C189.105 24.6777 187.244 23.0039 184.994 23.0039C182.534 23.0039 180.533 25.0098 180.533 27.4757V57.4747C180.533 59.9405 182.534 61.9464 184.994 61.9464C187.455 61.9464 189.456 59.9405 189.456 57.4747V49.8089C191.846 52.3386 194.606 53.5268 198.08 53.5268C201.687 53.5268 205.021 52.1214 207.475 49.5597C210.158 46.7617 211.579 42.8393 211.579 38.2079V38.0993C211.579 28.0442 204.791 22.7867 198.08 22.7867ZM195.976 30.4845C199.788 30.4845 202.662 33.7617 202.662 38.0993V38.2079C202.662 42.6221 199.852 45.8226 195.976 45.8226C192.133 45.8226 189.348 42.6221 189.348 38.2079V38.0993C189.348 33.685 192.139 30.4845 195.976 30.4845ZM231.485 26.3768C232.313 24.1664 233.792 23.0038 235.761 23.0038C238.139 23.0038 240.006 24.8244 240 27.137C240 27.8077 239.783 28.7787 239.592 29.2259L229.528 53.45C226.998 59.589 224.359 61.7674 219.445 61.7674C217.711 61.7674 216.379 61.5374 214.849 60.9881C213.797 60.6048 212.026 59.6082 212.026 57.2446C212.026 54.9193 213.855 53.533 215.62 53.533C216.321 53.533 216.742 53.6544 217.08 53.7694C217.775 53.9866 218.157 54.076 218.686 54.076C220.025 54.076 220.586 53.8588 221.261 52.562L221.465 52.0765L211.675 29.3409C211.452 28.7787 211.216 27.9099 211.216 27.303C211.216 24.85 213.109 22.9974 215.62 22.9974C217.692 22.9974 219.094 24.0834 219.897 26.3193L225.793 42.2067L231.485 26.3768Z" fill="white"/>
                        <motion.path initial={{ y: -10 * 1.2 }} animate={{ y: 0 }} transition={{ease: "easeInOut", duration: 0.4 }} d="M63.9739 18.7786V44.9078C63.9739 55.2784 55.5339 63.6863 45.1237 63.6863H43.217L33.4805 73.3795C33.0992 73.7594 32.5717 74 31.987 74C31.4467 74 30.9574 73.8037 30.5824 73.4745L30.4172 73.3099L30.4108 73.3036L20.7569 63.6863H18.8439C8.44003 63.6863 0 55.2784 0 44.9078V18.7786C0 8.40794 8.44003 0 18.8503 0H45.1237C55.5339 0 63.9739 8.40794 63.9739 18.7786Z" fill="#FFD666"/>
                        <motion.path initial={{ y: -10 * 1.2 }} animate={{ y: 0 }} transition={{ease: "easeInOut", duration: 0.4 }} whileHover={{ scale: 1.1 }} className="face" d="M14.895 36.197C13.0392 36.197 11.9814 38.3036 13.0582 39.8248C17.2449 45.7501 24.1677 49.6133 31.99 49.6133C39.8123 49.6133 46.7289 45.7437 50.9155 39.8248C51.9923 38.3036 50.9345 36.197 49.0787 36.197H14.895Z M25.764 27.2298H14.5658V21.6036C14.5658 18.4977 17.074 15.9774 20.1649 15.9774C23.2558 15.9774 25.764 18.4977 25.764 21.6036V27.2298Z M49.4148 27.2298H38.2166V21.6036C38.2166 18.4977 40.7248 15.9774 43.8157 15.9774C46.9066 15.9774 49.4148 18.4977 49.4148 21.6036V27.2298Z" fill="white"/>
                        {/* <motion.path className="face" d="M25.764 27.2298H14.5658V21.6036C14.5658 18.4977 17.074 15.9774 20.1649 15.9774C23.2558 15.9774 25.764 18.4977 25.764 21.6036V27.2298Z" fill="white"/> */}
                        {/* <motion.path className="face" d="M49.4148 27.2298H38.2166V21.6036C38.2166 18.4977 40.7248 15.9774 43.8157 15.9774C46.9066 15.9774 49.4148 18.4977 49.4148 21.6036V27.2298Z" fill="white"/> */}
                    </motion.svg>
                </div>

                {/* <img src={logoImg} alt="Happy" /> */}

                <main>
                <motion.h1 initial={{ y: 26 * 1.2 }} animate={{ y: 0 }} transition={{ ease: "easeOut", duration: 0.7 }}>Leve felicidade</motion.h1>
                <motion.h1 initial={{ y: -26 * 1.2 }} animate={{ y: 0 }} transition={{ease: "easeOut", duration: 0.7 }}>para o mundo</motion.h1>
                <motion.p initial={{ y: 26 * 1.2 }} animate={{ y: 0 }} transition={{ease: "easeOut", duration: 0.7 }}>Visite orfanatos e mude o dia de muitas crianças.</motion.p>
                </main>

                <div className="location">
                <strong>Chapecó</strong>
                <span>Santa Catarina</span>
                </div>
                
                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>
            </div>
        </div>
    );
}

export default Landing;