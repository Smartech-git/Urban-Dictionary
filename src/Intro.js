import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import './Intro.css';

function Intro() {
    let navigate = useNavigate();

    useEffect(() =>{
        let ID = setTimeout(()=>{
            navigate('Home')
        }, 5000)

        return(()=> {
            clearTimeout(ID)
        })
    })

    return (
        <div className='Intro'>
           <div className='Intro-content'>
                <svg xmlns="http://www.w3.org/2000/svg" width="266" height="31" viewBox="0 0 266 31" fill="none">
                    <mask id="path-1-inside-1_356_2" fill="white">
                    <path d="M10.5855 25.184C8.79348 25.184 7.30948 24.8947 6.13348 24.316C4.95748 23.756 4.01481 22.9813 3.30548 21.992C2.61481 20.984 2.09214 19.8267 1.73748 18.52C1.40148 17.2133 1.17748 15.8133 1.06548 14.32C0.972144 12.8267 0.925476 11.3147 0.925476 9.78399C0.925476 8.04799 0.981477 6.35866 1.09348 4.71599C1.20548 3.05466 1.32681 1.66399 1.45748 0.543993L6.60948 0.851994C6.42281 2.21466 6.27348 3.43733 6.16148 4.51999C6.06814 5.58399 6.00281 6.59199 5.96548 7.54399C5.92814 8.49599 5.90948 9.47599 5.90948 10.484C5.90948 11.268 5.91881 12.1173 5.93748 13.032C5.97481 13.928 6.05881 14.824 6.18948 15.72C6.33881 16.5973 6.56281 17.4 6.86148 18.128C7.17881 18.8373 7.61748 19.416 8.17748 19.864C8.75614 20.2933 9.49348 20.508 10.3895 20.508C11.3601 20.508 12.1441 20.2933 12.7415 19.864C13.3575 19.416 13.8335 18.828 14.1695 18.1C14.5055 17.3533 14.7481 16.532 14.8975 15.636C15.0468 14.7213 15.1308 13.7973 15.1495 12.864C15.1868 11.912 15.2055 11.016 15.2055 10.176C15.2055 8.58933 15.1588 7.04933 15.0655 5.55599C14.9721 4.06266 14.8508 2.47599 14.7015 0.795993L19.8535 0.403994C20.0028 2.19599 20.1148 3.83866 20.1895 5.33199C20.2641 6.80666 20.3015 8.16933 20.3015 9.41999C20.3015 11.1187 20.2361 12.752 20.1055 14.32C19.9935 15.888 19.7508 17.3347 19.3775 18.66C19.0041 19.9667 18.4628 21.1147 17.7535 22.104C17.0441 23.0747 16.1015 23.8307 14.9255 24.372C13.7681 24.9133 12.3215 25.184 10.5855 25.184Z"/>
                    <path d="M23.441 25.184C23.5156 23.6347 23.5716 22.0853 23.609 20.536C23.6463 18.9867 23.665 17.456 23.665 15.944C23.6463 14.5627 23.6183 13.2 23.581 11.856C23.5623 10.4933 23.5156 9.17733 23.441 7.90799L28.145 7.76799C28.1636 8.45866 28.1916 9.16799 28.229 9.89599C28.8263 9.14933 29.517 8.55199 30.301 8.10399C31.1036 7.63733 32.0183 7.40399 33.045 7.40399C33.437 7.40399 33.941 7.45999 34.557 7.57199C35.173 7.68399 35.7983 7.89866 36.433 8.21599L35.901 12.948C35.4343 12.668 34.9303 12.472 34.389 12.36C33.8663 12.2293 33.4276 12.164 33.073 12.164C31.8783 12.164 30.861 12.7053 30.021 13.788C29.1996 14.852 28.6396 16.336 28.341 18.24C28.341 19.5467 28.3223 20.7973 28.285 21.992C28.2663 23.168 28.2196 24.232 28.145 25.184H23.441Z"/>
                    <path d="M37.8323 25.016C37.8323 23.4853 37.8603 21.8427 37.9163 20.088C37.9723 18.3333 38.047 16.5507 38.1403 14.74C38.2337 12.9293 38.327 11.156 38.4203 9.41999C38.5323 7.68399 38.6443 6.05066 38.7563 4.51999C38.8683 2.97066 38.9617 1.59866 39.0363 0.403994L43.7123 0.459992C43.6003 1.52399 43.4883 2.71866 43.3763 4.04399C43.283 5.36933 43.1897 6.77866 43.0963 8.27199C43.6377 8.04799 44.2163 7.87999 44.8323 7.76799C45.467 7.63733 46.1483 7.57199 46.8763 7.57199C47.8657 7.57199 48.8083 7.73999 49.7043 8.07599C50.619 8.39333 51.4403 8.88799 52.1683 9.55999C52.8963 10.232 53.4657 11.1 53.8763 12.164C54.3057 13.228 54.5203 14.5067 54.5203 16C54.5203 17.5867 54.2963 18.9587 53.8483 20.116C53.4003 21.2733 52.7937 22.2253 52.0283 22.972C51.263 23.7187 50.395 24.2693 49.4243 24.624C48.4723 24.9973 47.4923 25.184 46.4843 25.184C45.719 25.184 45.0003 25.0813 44.3283 24.876C43.675 24.6707 43.0683 24.4 42.5083 24.064C42.5083 24.3627 42.5083 24.6613 42.5083 24.96L37.8323 25.016ZM46.2323 12.276C44.8323 12.276 43.6937 12.6867 42.8163 13.508C42.7417 15.2253 42.6763 16.9053 42.6203 18.548C43.535 19.7613 44.8137 20.368 46.4563 20.368C46.9977 20.368 47.539 20.2467 48.0803 20.004C48.6403 19.7427 49.107 19.304 49.4803 18.688C49.8537 18.072 50.0403 17.2133 50.0403 16.112C50.0403 14.8613 49.7137 13.9093 49.0603 13.256C48.4257 12.6027 47.483 12.276 46.2323 12.276Z"/>
                    <path d="M63.4482 25.212C62.0482 25.212 60.7788 24.848 59.6402 24.12C58.5015 23.4107 57.5962 22.4493 56.9242 21.236C56.2708 20.004 55.9442 18.632 55.9442 17.12C55.9442 15.7013 56.2055 14.4227 56.7282 13.284C57.2508 12.1267 57.9602 11.1373 58.8562 10.316C59.7708 9.49466 60.8068 8.86933 61.9642 8.43999C63.1215 7.99199 64.3348 7.76799 65.6042 7.76799C66.6682 7.76799 67.7135 7.91733 68.7402 8.21599C68.8148 7.82399 68.8802 7.43199 68.9362 7.03999L73.7242 7.85199C73.5935 8.20666 73.4628 8.73866 73.3322 9.44799C73.2015 10.1573 73.0895 10.9507 72.9962 11.828C72.9215 12.7053 72.8562 13.5827 72.8002 14.46C72.7442 15.3373 72.7162 16.1307 72.7162 16.84C72.7162 17.4187 72.7535 17.988 72.8282 18.548C72.9215 19.0893 73.1082 19.5373 73.3882 19.892C73.6682 20.228 74.0975 20.396 74.6762 20.396H75.0682L74.3682 25.268C73.1362 25.268 72.1188 25.0533 71.3162 24.624C70.5135 24.2133 69.8695 23.6533 69.3842 22.944C68.5815 23.84 67.6668 24.4373 66.6402 24.736C65.6135 25.0533 64.5495 25.212 63.4482 25.212ZM60.5362 17.68C60.6295 18.576 60.9935 19.2947 61.6282 19.836C62.2815 20.3587 63.1028 20.62 64.0922 20.62C65.0442 20.62 65.8375 20.368 66.4722 19.864C67.1068 19.3413 67.6295 18.632 68.0402 17.736C68.0215 17.4373 68.0122 17.1293 68.0122 16.812C68.0122 16.1587 68.0308 15.4867 68.0682 14.796C68.1055 14.1053 68.1522 13.424 68.2082 12.752C67.4242 12.4533 66.6028 12.304 65.7442 12.304C64.7362 12.304 63.8308 12.5093 63.0282 12.92C62.2442 13.312 61.6282 13.8627 61.1802 14.572C60.7322 15.2813 60.5082 16.1027 60.5082 17.036C60.5082 17.148 60.5082 17.26 60.5082 17.372C60.5082 17.484 60.5175 17.5867 60.5362 17.68Z"/>
                    <path d="M77.0426 25.016C76.9866 23.3733 76.9399 21.852 76.9026 20.452C76.8839 19.052 76.8746 17.6707 76.8746 16.308C76.8746 14.9453 76.8839 13.5827 76.9026 12.22C76.9399 10.8387 76.9959 9.36399 77.0706 7.79599H81.8026C81.7279 8.63599 81.6626 9.48533 81.6066 10.344C82.2413 9.54133 82.9973 8.87866 83.8746 8.35599C84.7519 7.81466 85.7879 7.54399 86.9826 7.54399C88.1586 7.54399 89.1199 7.73999 89.8666 8.13199C90.6319 8.52399 91.2293 9.06533 91.6586 9.75599C92.1066 10.4467 92.4239 11.24 92.6106 12.136C92.8159 13.0133 92.9466 13.9653 93.0026 14.992C93.0586 16 93.0866 17.0173 93.0866 18.044C93.0866 19.164 93.0679 20.2373 93.0306 21.264C92.9933 22.2907 92.9559 23.1493 92.9186 23.84C92.8813 24.5307 92.8533 24.9413 92.8346 25.072H88.1306C88.1679 24.3067 88.2053 23.4947 88.2426 22.636C88.2799 21.7587 88.3173 20.9 88.3546 20.06C88.3919 19.2013 88.4106 18.4267 88.4106 17.736C88.4106 13.76 87.7666 11.772 86.4786 11.772C85.4146 11.772 84.4439 12.2387 83.5666 13.172C82.7079 14.0867 81.9893 15.244 81.4106 16.644C81.4106 16.8307 81.4106 17.0173 81.4106 17.204C81.4106 18.1 81.4106 19.0333 81.4106 20.004C81.4293 20.956 81.4479 21.8707 81.4666 22.748C81.5039 23.6067 81.5319 24.3533 81.5506 24.988L77.0426 25.016Z"/>
                    <path d="M106.729 25.212L102.025 24.792L103.061 5.55599C102.576 5.66799 102.128 5.79866 101.717 5.94799L100.877 1.18799C101.866 0.98266 103.089 0.767993 104.545 0.543993C106.001 0.319994 107.504 0.207994 109.053 0.207994C110.248 0.207994 111.461 0.33866 112.693 0.599994C113.925 0.842659 115.101 1.25333 116.221 1.83199C117.36 2.39199 118.368 3.14799 119.245 4.09999C120.141 5.05199 120.841 6.21866 121.345 7.59999C121.868 8.98133 122.129 10.6147 122.129 12.5C122.129 15.1507 121.7 17.4187 120.841 19.304C120.001 21.1707 118.769 22.5987 117.145 23.588C115.54 24.5773 113.598 25.072 111.321 25.072C109.809 25.072 108.316 24.792 106.841 24.232C106.804 24.6053 106.766 24.932 106.729 25.212ZM108.857 4.91199C108.596 4.91199 108.325 4.91199 108.045 4.91199C107.858 8.38399 107.69 11.3427 107.541 13.788C107.392 16.2147 107.261 18.24 107.149 19.864C107.709 20.0507 108.325 20.2187 108.997 20.368C109.688 20.4987 110.406 20.564 111.153 20.564C112.665 20.564 113.878 20.1813 114.793 19.416C115.726 18.6507 116.398 17.6427 116.809 16.392C117.22 15.1227 117.425 13.7507 117.425 12.276C117.425 11.1 117.248 10.1013 116.893 9.27999C116.538 8.45866 116.072 7.77733 115.493 7.23599C114.933 6.69466 114.317 6.27466 113.645 5.97599C112.973 5.65866 112.31 5.42533 111.657 5.27599C111.022 5.12666 110.453 5.03333 109.949 4.99599C109.445 4.93999 109.081 4.91199 108.857 4.91199Z"/>
                    <path d="M124.449 4.91199C124.449 4.74399 124.44 4.57599 124.421 4.40799C124.421 4.22133 124.421 4.01599 124.421 3.79199C124.421 3.19466 124.44 2.55999 124.477 1.88799C124.515 1.21599 124.552 0.64666 124.589 0.179993L129.573 0.263993C129.517 0.89866 129.452 1.61733 129.377 2.41999C129.321 3.22266 129.284 4.05333 129.265 4.91199H124.449ZM124.337 24.96C124.281 23.8027 124.244 22.5707 124.225 21.264C124.207 19.9387 124.197 18.6133 124.197 17.288C124.197 15.552 124.216 13.8627 124.253 12.22C124.291 10.5773 124.337 9.08399 124.393 7.73999L129.209 7.71199C129.135 8.57066 129.088 9.63466 129.069 10.904C129.051 12.1547 129.041 13.4707 129.041 14.852C129.041 16.2147 129.051 17.5587 129.069 18.884C129.088 20.2093 129.107 21.4133 129.125 22.496C129.163 23.56 129.191 24.3813 129.209 24.96H124.337Z"/>
                    <path d="M140.148 25.268C138.58 25.268 137.134 24.9413 135.808 24.288C134.483 23.6347 133.419 22.7013 132.616 21.488C131.814 20.256 131.412 18.7907 131.412 17.092C131.412 15.188 131.786 13.5173 132.532 12.08C133.279 10.6427 134.324 9.53199 135.668 8.74799C137.012 7.94533 138.58 7.54399 140.372 7.54399C142.09 7.54399 143.546 7.89866 144.74 8.60799C145.935 9.29866 146.999 10.4 147.932 11.912L144.04 14.6C143.518 13.76 142.986 13.1253 142.444 12.696C141.903 12.248 141.166 12.024 140.232 12.024C138.963 12.024 137.936 12.472 137.152 13.368C136.368 14.2453 135.976 15.4213 135.976 16.896C135.976 17.7547 136.182 18.4547 136.592 18.996C137.022 19.5373 137.544 19.9387 138.16 20.2C138.776 20.4613 139.355 20.592 139.896 20.592C140.456 20.592 140.998 20.5267 141.52 20.396C142.043 20.2467 142.538 19.9293 143.004 19.444C143.471 18.9587 143.891 18.2213 144.264 17.232L148.464 19.472C147.904 20.4987 147.279 21.4507 146.588 22.328C145.898 23.2053 145.039 23.9147 144.012 24.456C143.004 24.9973 141.716 25.268 140.148 25.268Z"/>
                    <path d="M158.719 25.212C157.599 25.212 156.712 24.9693 156.059 24.484C155.405 24.0173 154.929 23.364 154.631 22.524C154.332 21.684 154.136 20.7227 154.043 19.64C153.968 18.5573 153.931 17.4187 153.931 16.224C153.931 14.992 153.977 13.7133 154.071 12.388C152.82 12.556 151.616 12.7707 150.459 13.032L149.591 8.63599C151.14 8.22533 152.792 7.92666 154.547 7.73999C154.677 6.78799 154.817 5.78933 154.967 4.74399C155.116 3.67999 155.284 2.55999 155.471 1.38399L160.287 1.80399C160.063 2.77466 159.867 3.74533 159.699 4.71599C159.531 5.66799 159.381 6.59199 159.251 7.48799C160.296 7.48799 161.276 7.51599 162.191 7.57199C163.124 7.60933 163.983 7.68399 164.767 7.79599L164.207 12.192C163.553 12.1173 162.872 12.0707 162.163 12.052C161.472 12.0147 160.772 11.996 160.063 11.996C159.633 11.996 159.204 12.0053 158.775 12.024C158.663 13.3867 158.588 14.5533 158.551 15.524C158.532 16.4947 158.523 17.1853 158.523 17.596C158.523 18.6227 158.579 19.36 158.691 19.808C158.821 20.256 159.027 20.48 159.307 20.48C159.624 20.48 159.979 20.3773 160.371 20.172C160.763 19.948 161.145 19.6493 161.519 19.276C161.911 18.9027 162.237 18.5013 162.499 18.072L164.655 22.58C162.807 24.3347 160.828 25.212 158.719 25.212Z"/>
                    <path d="M166.668 4.91199C166.668 4.74399 166.659 4.57599 166.64 4.40799C166.64 4.22133 166.64 4.01599 166.64 3.79199C166.64 3.19466 166.659 2.55999 166.696 1.88799C166.734 1.21599 166.771 0.64666 166.808 0.179993L171.792 0.263993C171.736 0.89866 171.671 1.61733 171.596 2.41999C171.54 3.22266 171.503 4.05333 171.484 4.91199H166.668ZM166.556 24.96C166.5 23.8027 166.463 22.5707 166.444 21.264C166.426 19.9387 166.416 18.6133 166.416 17.288C166.416 15.552 166.435 13.8627 166.472 12.22C166.51 10.5773 166.556 9.08399 166.612 7.73999L171.428 7.71199C171.354 8.57066 171.307 9.63466 171.288 10.904C171.27 12.1547 171.26 13.4707 171.26 14.852C171.26 16.2147 171.27 17.5587 171.288 18.884C171.307 20.2093 171.326 21.4133 171.344 22.496C171.382 23.56 171.41 24.3813 171.428 24.96H166.556Z"/>
                    <path d="M182.451 25.296C180.958 25.296 179.651 25.0533 178.531 24.568C177.43 24.0827 176.515 23.42 175.787 22.58C175.059 21.7213 174.518 20.7413 174.163 19.64C173.808 18.5387 173.631 17.3813 173.631 16.168C173.631 14.936 173.846 13.7973 174.275 12.752C174.723 11.688 175.33 10.764 176.095 9.97999C176.879 9.19599 177.794 8.58933 178.839 8.15999C179.884 7.71199 181.023 7.48799 182.255 7.48799C183.543 7.48799 184.738 7.71199 185.839 8.15999C186.94 8.60799 187.902 9.23333 188.723 10.036C189.544 10.8387 190.179 11.7813 190.627 12.864C191.094 13.9467 191.327 15.1227 191.327 16.392C191.327 19.2107 190.552 21.404 189.003 22.972C187.454 24.5213 185.27 25.296 182.451 25.296ZM182.423 20.76C183.786 20.76 184.822 20.3773 185.531 19.612C186.259 18.8467 186.623 17.7453 186.623 16.308C186.623 15.02 186.231 13.984 185.447 13.2C184.663 12.416 183.636 12.024 182.367 12.024C181.602 12.024 180.902 12.2293 180.267 12.64C179.632 13.032 179.119 13.564 178.727 14.236C178.354 14.8893 178.167 15.6173 178.167 16.42C178.167 17.1293 178.307 17.82 178.587 18.492C178.886 19.164 179.352 19.7147 179.987 20.144C180.622 20.5547 181.434 20.76 182.423 20.76Z"/>
                    <path d="M193.746 25.016C193.69 23.3733 193.643 21.852 193.606 20.452C193.587 19.052 193.578 17.6707 193.578 16.308C193.578 14.9453 193.587 13.5827 193.606 12.22C193.643 10.8387 193.699 9.36399 193.774 7.79599H198.506C198.431 8.63599 198.366 9.48533 198.31 10.344C198.944 9.54133 199.7 8.87866 200.578 8.35599C201.455 7.81466 202.491 7.54399 203.686 7.54399C204.862 7.54399 205.823 7.73999 206.57 8.13199C207.335 8.52399 207.932 9.06533 208.362 9.75599C208.81 10.4467 209.127 11.24 209.314 12.136C209.519 13.0133 209.65 13.9653 209.706 14.992C209.762 16 209.79 17.0173 209.79 18.044C209.79 19.164 209.771 20.2373 209.734 21.264C209.696 22.2907 209.659 23.1493 209.622 23.84C209.584 24.5307 209.556 24.9413 209.538 25.072H204.834C204.871 24.3067 204.908 23.4947 204.946 22.636C204.983 21.7587 205.02 20.9 205.058 20.06C205.095 19.2013 205.114 18.4267 205.114 17.736C205.114 13.76 204.47 11.772 203.182 11.772C202.118 11.772 201.147 12.2387 200.27 13.172C199.411 14.0867 198.692 15.244 198.114 16.644C198.114 16.8307 198.114 17.0173 198.114 17.204C198.114 18.1 198.114 19.0333 198.114 20.004C198.132 20.956 198.151 21.8707 198.17 22.748C198.207 23.6067 198.235 24.3533 198.254 24.988L193.746 25.016Z"/>
                    <path d="M219.554 25.212C218.154 25.212 216.884 24.848 215.746 24.12C214.607 23.4107 213.702 22.4493 213.03 21.236C212.376 20.004 212.05 18.632 212.05 17.12C212.05 15.7013 212.311 14.4227 212.834 13.284C213.356 12.1267 214.066 11.1373 214.962 10.316C215.876 9.49466 216.912 8.86933 218.07 8.43999C219.227 7.99199 220.44 7.76799 221.71 7.76799C222.774 7.76799 223.819 7.91733 224.846 8.21599C224.92 7.82399 224.986 7.43199 225.042 7.03999L229.83 7.85199C229.699 8.20666 229.568 8.73866 229.438 9.44799C229.307 10.1573 229.195 10.9507 229.102 11.828C229.027 12.7053 228.962 13.5827 228.906 14.46C228.85 15.3373 228.822 16.1307 228.822 16.84C228.822 17.4187 228.859 17.988 228.934 18.548C229.027 19.0893 229.214 19.5373 229.494 19.892C229.774 20.228 230.203 20.396 230.782 20.396H231.174L230.474 25.268C229.242 25.268 228.224 25.0533 227.422 24.624C226.619 24.2133 225.975 23.6533 225.49 22.944C224.687 23.84 223.772 24.4373 222.746 24.736C221.719 25.0533 220.655 25.212 219.554 25.212ZM216.642 17.68C216.735 18.576 217.099 19.2947 217.734 19.836C218.387 20.3587 219.208 20.62 220.198 20.62C221.15 20.62 221.943 20.368 222.578 19.864C223.212 19.3413 223.735 18.632 224.146 17.736C224.127 17.4373 224.118 17.1293 224.118 16.812C224.118 16.1587 224.136 15.4867 224.174 14.796C224.211 14.1053 224.258 13.424 224.314 12.752C223.53 12.4533 222.708 12.304 221.85 12.304C220.842 12.304 219.936 12.5093 219.134 12.92C218.35 13.312 217.734 13.8627 217.286 14.572C216.838 15.2813 216.614 16.1027 216.614 17.036C216.614 17.148 216.614 17.26 216.614 17.372C216.614 17.484 216.623 17.5867 216.642 17.68Z"/>
                    <path d="M232.812 25.184C232.887 23.6347 232.943 22.0853 232.98 20.536C233.017 18.9867 233.036 17.456 233.036 15.944C233.017 14.5627 232.989 13.2 232.952 11.856C232.933 10.4933 232.887 9.17733 232.812 7.90799L237.516 7.76799C237.535 8.45866 237.563 9.16799 237.6 9.89599C238.197 9.14933 238.888 8.55199 239.672 8.10399C240.475 7.63733 241.389 7.40399 242.416 7.40399C242.808 7.40399 243.312 7.45999 243.928 7.57199C244.544 7.68399 245.169 7.89866 245.804 8.21599L245.272 12.948C244.805 12.668 244.301 12.472 243.76 12.36C243.237 12.2293 242.799 12.164 242.444 12.164C241.249 12.164 240.232 12.7053 239.392 13.788C238.571 14.852 238.011 16.336 237.712 18.24C237.712 19.5467 237.693 20.7973 237.656 21.992C237.637 23.168 237.591 24.232 237.516 25.184H232.812Z"/>
                    <path d="M251.431 30.588L247.231 28.348C248.277 27.1907 249.294 25.996 250.283 24.764C251.273 23.5507 252.215 22.3 253.111 21.012C252.234 19.836 251.357 18.576 250.479 17.232C249.602 15.8693 248.79 14.5347 248.043 13.228C247.297 11.9213 246.69 10.7547 246.223 9.72799L250.703 7.76799C251.039 8.66399 251.469 9.63466 251.991 10.68C252.533 11.7253 253.121 12.7893 253.755 13.872C254.409 14.9547 255.081 15.9907 255.771 16.98C257.787 13.7133 259.449 10.4933 260.755 7.31999L265.403 9.16799C264.563 10.7733 263.611 12.5 262.547 14.348C261.502 16.1773 260.373 18.044 259.159 19.948C257.965 21.8333 256.714 23.6813 255.407 25.492C254.101 27.3213 252.775 29.02 251.431 30.588Z"/>
                    </mask>
                    <path d="M10.5855 25.184C8.79348 25.184 7.30948 24.8947 6.13348 24.316C4.95748 23.756 4.01481 22.9813 3.30548 21.992C2.61481 20.984 2.09214 19.8267 1.73748 18.52C1.40148 17.2133 1.17748 15.8133 1.06548 14.32C0.972144 12.8267 0.925476 11.3147 0.925476 9.78399C0.925476 8.04799 0.981477 6.35866 1.09348 4.71599C1.20548 3.05466 1.32681 1.66399 1.45748 0.543993L6.60948 0.851994C6.42281 2.21466 6.27348 3.43733 6.16148 4.51999C6.06814 5.58399 6.00281 6.59199 5.96548 7.54399C5.92814 8.49599 5.90948 9.47599 5.90948 10.484C5.90948 11.268 5.91881 12.1173 5.93748 13.032C5.97481 13.928 6.05881 14.824 6.18948 15.72C6.33881 16.5973 6.56281 17.4 6.86148 18.128C7.17881 18.8373 7.61748 19.416 8.17748 19.864C8.75614 20.2933 9.49348 20.508 10.3895 20.508C11.3601 20.508 12.1441 20.2933 12.7415 19.864C13.3575 19.416 13.8335 18.828 14.1695 18.1C14.5055 17.3533 14.7481 16.532 14.8975 15.636C15.0468 14.7213 15.1308 13.7973 15.1495 12.864C15.1868 11.912 15.2055 11.016 15.2055 10.176C15.2055 8.58933 15.1588 7.04933 15.0655 5.55599C14.9721 4.06266 14.8508 2.47599 14.7015 0.795993L19.8535 0.403994C20.0028 2.19599 20.1148 3.83866 20.1895 5.33199C20.2641 6.80666 20.3015 8.16933 20.3015 9.41999C20.3015 11.1187 20.2361 12.752 20.1055 14.32C19.9935 15.888 19.7508 17.3347 19.3775 18.66C19.0041 19.9667 18.4628 21.1147 17.7535 22.104C17.0441 23.0747 16.1015 23.8307 14.9255 24.372C13.7681 24.9133 12.3215 25.184 10.5855 25.184Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                    <path d="M23.441 25.184C23.5156 23.6347 23.5716 22.0853 23.609 20.536C23.6463 18.9867 23.665 17.456 23.665 15.944C23.6463 14.5627 23.6183 13.2 23.581 11.856C23.5623 10.4933 23.5156 9.17733 23.441 7.90799L28.145 7.76799C28.1636 8.45866 28.1916 9.16799 28.229 9.89599C28.8263 9.14933 29.517 8.55199 30.301 8.10399C31.1036 7.63733 32.0183 7.40399 33.045 7.40399C33.437 7.40399 33.941 7.45999 34.557 7.57199C35.173 7.68399 35.7983 7.89866 36.433 8.21599L35.901 12.948C35.4343 12.668 34.9303 12.472 34.389 12.36C33.8663 12.2293 33.4276 12.164 33.073 12.164C31.8783 12.164 30.861 12.7053 30.021 13.788C29.1996 14.852 28.6396 16.336 28.341 18.24C28.341 19.5467 28.3223 20.7973 28.285 21.992C28.2663 23.168 28.2196 24.232 28.145 25.184H23.441Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                    <path d="M37.8323 25.016C37.8323 23.4853 37.8603 21.8427 37.9163 20.088C37.9723 18.3333 38.047 16.5507 38.1403 14.74C38.2337 12.9293 38.327 11.156 38.4203 9.41999C38.5323 7.68399 38.6443 6.05066 38.7563 4.51999C38.8683 2.97066 38.9617 1.59866 39.0363 0.403994L43.7123 0.459992C43.6003 1.52399 43.4883 2.71866 43.3763 4.04399C43.283 5.36933 43.1897 6.77866 43.0963 8.27199C43.6377 8.04799 44.2163 7.87999 44.8323 7.76799C45.467 7.63733 46.1483 7.57199 46.8763 7.57199C47.8657 7.57199 48.8083 7.73999 49.7043 8.07599C50.619 8.39333 51.4403 8.88799 52.1683 9.55999C52.8963 10.232 53.4657 11.1 53.8763 12.164C54.3057 13.228 54.5203 14.5067 54.5203 16C54.5203 17.5867 54.2963 18.9587 53.8483 20.116C53.4003 21.2733 52.7937 22.2253 52.0283 22.972C51.263 23.7187 50.395 24.2693 49.4243 24.624C48.4723 24.9973 47.4923 25.184 46.4843 25.184C45.719 25.184 45.0003 25.0813 44.3283 24.876C43.675 24.6707 43.0683 24.4 42.5083 24.064C42.5083 24.3627 42.5083 24.6613 42.5083 24.96L37.8323 25.016ZM46.2323 12.276C44.8323 12.276 43.6937 12.6867 42.8163 13.508C42.7417 15.2253 42.6763 16.9053 42.6203 18.548C43.535 19.7613 44.8137 20.368 46.4563 20.368C46.9977 20.368 47.539 20.2467 48.0803 20.004C48.6403 19.7427 49.107 19.304 49.4803 18.688C49.8537 18.072 50.0403 17.2133 50.0403 16.112C50.0403 14.8613 49.7137 13.9093 49.0603 13.256C48.4257 12.6027 47.483 12.276 46.2323 12.276Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                    <path d="M63.4482 25.212C62.0482 25.212 60.7788 24.848 59.6402 24.12C58.5015 23.4107 57.5962 22.4493 56.9242 21.236C56.2708 20.004 55.9442 18.632 55.9442 17.12C55.9442 15.7013 56.2055 14.4227 56.7282 13.284C57.2508 12.1267 57.9602 11.1373 58.8562 10.316C59.7708 9.49466 60.8068 8.86933 61.9642 8.43999C63.1215 7.99199 64.3348 7.76799 65.6042 7.76799C66.6682 7.76799 67.7135 7.91733 68.7402 8.21599C68.8148 7.82399 68.8802 7.43199 68.9362 7.03999L73.7242 7.85199C73.5935 8.20666 73.4628 8.73866 73.3322 9.44799C73.2015 10.1573 73.0895 10.9507 72.9962 11.828C72.9215 12.7053 72.8562 13.5827 72.8002 14.46C72.7442 15.3373 72.7162 16.1307 72.7162 16.84C72.7162 17.4187 72.7535 17.988 72.8282 18.548C72.9215 19.0893 73.1082 19.5373 73.3882 19.892C73.6682 20.228 74.0975 20.396 74.6762 20.396H75.0682L74.3682 25.268C73.1362 25.268 72.1188 25.0533 71.3162 24.624C70.5135 24.2133 69.8695 23.6533 69.3842 22.944C68.5815 23.84 67.6668 24.4373 66.6402 24.736C65.6135 25.0533 64.5495 25.212 63.4482 25.212ZM60.5362 17.68C60.6295 18.576 60.9935 19.2947 61.6282 19.836C62.2815 20.3587 63.1028 20.62 64.0922 20.62C65.0442 20.62 65.8375 20.368 66.4722 19.864C67.1068 19.3413 67.6295 18.632 68.0402 17.736C68.0215 17.4373 68.0122 17.1293 68.0122 16.812C68.0122 16.1587 68.0308 15.4867 68.0682 14.796C68.1055 14.1053 68.1522 13.424 68.2082 12.752C67.4242 12.4533 66.6028 12.304 65.7442 12.304C64.7362 12.304 63.8308 12.5093 63.0282 12.92C62.2442 13.312 61.6282 13.8627 61.1802 14.572C60.7322 15.2813 60.5082 16.1027 60.5082 17.036C60.5082 17.148 60.5082 17.26 60.5082 17.372C60.5082 17.484 60.5175 17.5867 60.5362 17.68Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                    <path d="M77.0426 25.016C76.9866 23.3733 76.9399 21.852 76.9026 20.452C76.8839 19.052 76.8746 17.6707 76.8746 16.308C76.8746 14.9453 76.8839 13.5827 76.9026 12.22C76.9399 10.8387 76.9959 9.36399 77.0706 7.79599H81.8026C81.7279 8.63599 81.6626 9.48533 81.6066 10.344C82.2413 9.54133 82.9973 8.87866 83.8746 8.35599C84.7519 7.81466 85.7879 7.54399 86.9826 7.54399C88.1586 7.54399 89.1199 7.73999 89.8666 8.13199C90.6319 8.52399 91.2293 9.06533 91.6586 9.75599C92.1066 10.4467 92.4239 11.24 92.6106 12.136C92.8159 13.0133 92.9466 13.9653 93.0026 14.992C93.0586 16 93.0866 17.0173 93.0866 18.044C93.0866 19.164 93.0679 20.2373 93.0306 21.264C92.9933 22.2907 92.9559 23.1493 92.9186 23.84C92.8813 24.5307 92.8533 24.9413 92.8346 25.072H88.1306C88.1679 24.3067 88.2053 23.4947 88.2426 22.636C88.2799 21.7587 88.3173 20.9 88.3546 20.06C88.3919 19.2013 88.4106 18.4267 88.4106 17.736C88.4106 13.76 87.7666 11.772 86.4786 11.772C85.4146 11.772 84.4439 12.2387 83.5666 13.172C82.7079 14.0867 81.9893 15.244 81.4106 16.644C81.4106 16.8307 81.4106 17.0173 81.4106 17.204C81.4106 18.1 81.4106 19.0333 81.4106 20.004C81.4293 20.956 81.4479 21.8707 81.4666 22.748C81.5039 23.6067 81.5319 24.3533 81.5506 24.988L77.0426 25.016Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                    <path d="M106.729 25.212L102.025 24.792L103.061 5.55599C102.576 5.66799 102.128 5.79866 101.717 5.94799L100.877 1.18799C101.866 0.98266 103.089 0.767993 104.545 0.543993C106.001 0.319994 107.504 0.207994 109.053 0.207994C110.248 0.207994 111.461 0.33866 112.693 0.599994C113.925 0.842659 115.101 1.25333 116.221 1.83199C117.36 2.39199 118.368 3.14799 119.245 4.09999C120.141 5.05199 120.841 6.21866 121.345 7.59999C121.868 8.98133 122.129 10.6147 122.129 12.5C122.129 15.1507 121.7 17.4187 120.841 19.304C120.001 21.1707 118.769 22.5987 117.145 23.588C115.54 24.5773 113.598 25.072 111.321 25.072C109.809 25.072 108.316 24.792 106.841 24.232C106.804 24.6053 106.766 24.932 106.729 25.212ZM108.857 4.91199C108.596 4.91199 108.325 4.91199 108.045 4.91199C107.858 8.38399 107.69 11.3427 107.541 13.788C107.392 16.2147 107.261 18.24 107.149 19.864C107.709 20.0507 108.325 20.2187 108.997 20.368C109.688 20.4987 110.406 20.564 111.153 20.564C112.665 20.564 113.878 20.1813 114.793 19.416C115.726 18.6507 116.398 17.6427 116.809 16.392C117.22 15.1227 117.425 13.7507 117.425 12.276C117.425 11.1 117.248 10.1013 116.893 9.27999C116.538 8.45866 116.072 7.77733 115.493 7.23599C114.933 6.69466 114.317 6.27466 113.645 5.97599C112.973 5.65866 112.31 5.42533 111.657 5.27599C111.022 5.12666 110.453 5.03333 109.949 4.99599C109.445 4.93999 109.081 4.91199 108.857 4.91199Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                    <path d="M124.449 4.91199C124.449 4.74399 124.44 4.57599 124.421 4.40799C124.421 4.22133 124.421 4.01599 124.421 3.79199C124.421 3.19466 124.44 2.55999 124.477 1.88799C124.515 1.21599 124.552 0.64666 124.589 0.179993L129.573 0.263993C129.517 0.89866 129.452 1.61733 129.377 2.41999C129.321 3.22266 129.284 4.05333 129.265 4.91199H124.449ZM124.337 24.96C124.281 23.8027 124.244 22.5707 124.225 21.264C124.207 19.9387 124.197 18.6133 124.197 17.288C124.197 15.552 124.216 13.8627 124.253 12.22C124.291 10.5773 124.337 9.08399 124.393 7.73999L129.209 7.71199C129.135 8.57066 129.088 9.63466 129.069 10.904C129.051 12.1547 129.041 13.4707 129.041 14.852C129.041 16.2147 129.051 17.5587 129.069 18.884C129.088 20.2093 129.107 21.4133 129.125 22.496C129.163 23.56 129.191 24.3813 129.209 24.96H124.337Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                    <path d="M140.148 25.268C138.58 25.268 137.134 24.9413 135.808 24.288C134.483 23.6347 133.419 22.7013 132.616 21.488C131.814 20.256 131.412 18.7907 131.412 17.092C131.412 15.188 131.786 13.5173 132.532 12.08C133.279 10.6427 134.324 9.53199 135.668 8.74799C137.012 7.94533 138.58 7.54399 140.372 7.54399C142.09 7.54399 143.546 7.89866 144.74 8.60799C145.935 9.29866 146.999 10.4 147.932 11.912L144.04 14.6C143.518 13.76 142.986 13.1253 142.444 12.696C141.903 12.248 141.166 12.024 140.232 12.024C138.963 12.024 137.936 12.472 137.152 13.368C136.368 14.2453 135.976 15.4213 135.976 16.896C135.976 17.7547 136.182 18.4547 136.592 18.996C137.022 19.5373 137.544 19.9387 138.16 20.2C138.776 20.4613 139.355 20.592 139.896 20.592C140.456 20.592 140.998 20.5267 141.52 20.396C142.043 20.2467 142.538 19.9293 143.004 19.444C143.471 18.9587 143.891 18.2213 144.264 17.232L148.464 19.472C147.904 20.4987 147.279 21.4507 146.588 22.328C145.898 23.2053 145.039 23.9147 144.012 24.456C143.004 24.9973 141.716 25.268 140.148 25.268Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                    <path d="M158.719 25.212C157.599 25.212 156.712 24.9693 156.059 24.484C155.405 24.0173 154.929 23.364 154.631 22.524C154.332 21.684 154.136 20.7227 154.043 19.64C153.968 18.5573 153.931 17.4187 153.931 16.224C153.931 14.992 153.977 13.7133 154.071 12.388C152.82 12.556 151.616 12.7707 150.459 13.032L149.591 8.63599C151.14 8.22533 152.792 7.92666 154.547 7.73999C154.677 6.78799 154.817 5.78933 154.967 4.74399C155.116 3.67999 155.284 2.55999 155.471 1.38399L160.287 1.80399C160.063 2.77466 159.867 3.74533 159.699 4.71599C159.531 5.66799 159.381 6.59199 159.251 7.48799C160.296 7.48799 161.276 7.51599 162.191 7.57199C163.124 7.60933 163.983 7.68399 164.767 7.79599L164.207 12.192C163.553 12.1173 162.872 12.0707 162.163 12.052C161.472 12.0147 160.772 11.996 160.063 11.996C159.633 11.996 159.204 12.0053 158.775 12.024C158.663 13.3867 158.588 14.5533 158.551 15.524C158.532 16.4947 158.523 17.1853 158.523 17.596C158.523 18.6227 158.579 19.36 158.691 19.808C158.821 20.256 159.027 20.48 159.307 20.48C159.624 20.48 159.979 20.3773 160.371 20.172C160.763 19.948 161.145 19.6493 161.519 19.276C161.911 18.9027 162.237 18.5013 162.499 18.072L164.655 22.58C162.807 24.3347 160.828 25.212 158.719 25.212Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                    <path d="M166.668 4.91199C166.668 4.74399 166.659 4.57599 166.64 4.40799C166.64 4.22133 166.64 4.01599 166.64 3.79199C166.64 3.19466 166.659 2.55999 166.696 1.88799C166.734 1.21599 166.771 0.64666 166.808 0.179993L171.792 0.263993C171.736 0.89866 171.671 1.61733 171.596 2.41999C171.54 3.22266 171.503 4.05333 171.484 4.91199H166.668ZM166.556 24.96C166.5 23.8027 166.463 22.5707 166.444 21.264C166.426 19.9387 166.416 18.6133 166.416 17.288C166.416 15.552 166.435 13.8627 166.472 12.22C166.51 10.5773 166.556 9.08399 166.612 7.73999L171.428 7.71199C171.354 8.57066 171.307 9.63466 171.288 10.904C171.27 12.1547 171.26 13.4707 171.26 14.852C171.26 16.2147 171.27 17.5587 171.288 18.884C171.307 20.2093 171.326 21.4133 171.344 22.496C171.382 23.56 171.41 24.3813 171.428 24.96H166.556Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                    <path d="M182.451 25.296C180.958 25.296 179.651 25.0533 178.531 24.568C177.43 24.0827 176.515 23.42 175.787 22.58C175.059 21.7213 174.518 20.7413 174.163 19.64C173.808 18.5387 173.631 17.3813 173.631 16.168C173.631 14.936 173.846 13.7973 174.275 12.752C174.723 11.688 175.33 10.764 176.095 9.97999C176.879 9.19599 177.794 8.58933 178.839 8.15999C179.884 7.71199 181.023 7.48799 182.255 7.48799C183.543 7.48799 184.738 7.71199 185.839 8.15999C186.94 8.60799 187.902 9.23333 188.723 10.036C189.544 10.8387 190.179 11.7813 190.627 12.864C191.094 13.9467 191.327 15.1227 191.327 16.392C191.327 19.2107 190.552 21.404 189.003 22.972C187.454 24.5213 185.27 25.296 182.451 25.296ZM182.423 20.76C183.786 20.76 184.822 20.3773 185.531 19.612C186.259 18.8467 186.623 17.7453 186.623 16.308C186.623 15.02 186.231 13.984 185.447 13.2C184.663 12.416 183.636 12.024 182.367 12.024C181.602 12.024 180.902 12.2293 180.267 12.64C179.632 13.032 179.119 13.564 178.727 14.236C178.354 14.8893 178.167 15.6173 178.167 16.42C178.167 17.1293 178.307 17.82 178.587 18.492C178.886 19.164 179.352 19.7147 179.987 20.144C180.622 20.5547 181.434 20.76 182.423 20.76Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                    <path d="M193.746 25.016C193.69 23.3733 193.643 21.852 193.606 20.452C193.587 19.052 193.578 17.6707 193.578 16.308C193.578 14.9453 193.587 13.5827 193.606 12.22C193.643 10.8387 193.699 9.36399 193.774 7.79599H198.506C198.431 8.63599 198.366 9.48533 198.31 10.344C198.944 9.54133 199.7 8.87866 200.578 8.35599C201.455 7.81466 202.491 7.54399 203.686 7.54399C204.862 7.54399 205.823 7.73999 206.57 8.13199C207.335 8.52399 207.932 9.06533 208.362 9.75599C208.81 10.4467 209.127 11.24 209.314 12.136C209.519 13.0133 209.65 13.9653 209.706 14.992C209.762 16 209.79 17.0173 209.79 18.044C209.79 19.164 209.771 20.2373 209.734 21.264C209.696 22.2907 209.659 23.1493 209.622 23.84C209.584 24.5307 209.556 24.9413 209.538 25.072H204.834C204.871 24.3067 204.908 23.4947 204.946 22.636C204.983 21.7587 205.02 20.9 205.058 20.06C205.095 19.2013 205.114 18.4267 205.114 17.736C205.114 13.76 204.47 11.772 203.182 11.772C202.118 11.772 201.147 12.2387 200.27 13.172C199.411 14.0867 198.692 15.244 198.114 16.644C198.114 16.8307 198.114 17.0173 198.114 17.204C198.114 18.1 198.114 19.0333 198.114 20.004C198.132 20.956 198.151 21.8707 198.17 22.748C198.207 23.6067 198.235 24.3533 198.254 24.988L193.746 25.016Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                    <path d="M219.554 25.212C218.154 25.212 216.884 24.848 215.746 24.12C214.607 23.4107 213.702 22.4493 213.03 21.236C212.376 20.004 212.05 18.632 212.05 17.12C212.05 15.7013 212.311 14.4227 212.834 13.284C213.356 12.1267 214.066 11.1373 214.962 10.316C215.876 9.49466 216.912 8.86933 218.07 8.43999C219.227 7.99199 220.44 7.76799 221.71 7.76799C222.774 7.76799 223.819 7.91733 224.846 8.21599C224.92 7.82399 224.986 7.43199 225.042 7.03999L229.83 7.85199C229.699 8.20666 229.568 8.73866 229.438 9.44799C229.307 10.1573 229.195 10.9507 229.102 11.828C229.027 12.7053 228.962 13.5827 228.906 14.46C228.85 15.3373 228.822 16.1307 228.822 16.84C228.822 17.4187 228.859 17.988 228.934 18.548C229.027 19.0893 229.214 19.5373 229.494 19.892C229.774 20.228 230.203 20.396 230.782 20.396H231.174L230.474 25.268C229.242 25.268 228.224 25.0533 227.422 24.624C226.619 24.2133 225.975 23.6533 225.49 22.944C224.687 23.84 223.772 24.4373 222.746 24.736C221.719 25.0533 220.655 25.212 219.554 25.212ZM216.642 17.68C216.735 18.576 217.099 19.2947 217.734 19.836C218.387 20.3587 219.208 20.62 220.198 20.62C221.15 20.62 221.943 20.368 222.578 19.864C223.212 19.3413 223.735 18.632 224.146 17.736C224.127 17.4373 224.118 17.1293 224.118 16.812C224.118 16.1587 224.136 15.4867 224.174 14.796C224.211 14.1053 224.258 13.424 224.314 12.752C223.53 12.4533 222.708 12.304 221.85 12.304C220.842 12.304 219.936 12.5093 219.134 12.92C218.35 13.312 217.734 13.8627 217.286 14.572C216.838 15.2813 216.614 16.1027 216.614 17.036C216.614 17.148 216.614 17.26 216.614 17.372C216.614 17.484 216.623 17.5867 216.642 17.68Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                    <path d="M232.812 25.184C232.887 23.6347 232.943 22.0853 232.98 20.536C233.017 18.9867 233.036 17.456 233.036 15.944C233.017 14.5627 232.989 13.2 232.952 11.856C232.933 10.4933 232.887 9.17733 232.812 7.90799L237.516 7.76799C237.535 8.45866 237.563 9.16799 237.6 9.89599C238.197 9.14933 238.888 8.55199 239.672 8.10399C240.475 7.63733 241.389 7.40399 242.416 7.40399C242.808 7.40399 243.312 7.45999 243.928 7.57199C244.544 7.68399 245.169 7.89866 245.804 8.21599L245.272 12.948C244.805 12.668 244.301 12.472 243.76 12.36C243.237 12.2293 242.799 12.164 242.444 12.164C241.249 12.164 240.232 12.7053 239.392 13.788C238.571 14.852 238.011 16.336 237.712 18.24C237.712 19.5467 237.693 20.7973 237.656 21.992C237.637 23.168 237.591 24.232 237.516 25.184H232.812Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                    <path d="M251.431 30.588L247.231 28.348C248.277 27.1907 249.294 25.996 250.283 24.764C251.273 23.5507 252.215 22.3 253.111 21.012C252.234 19.836 251.357 18.576 250.479 17.232C249.602 15.8693 248.79 14.5347 248.043 13.228C247.297 11.9213 246.69 10.7547 246.223 9.72799L250.703 7.76799C251.039 8.66399 251.469 9.63466 251.991 10.68C252.533 11.7253 253.121 12.7893 253.755 13.872C254.409 14.9547 255.081 15.9907 255.771 16.98C257.787 13.7133 259.449 10.4933 260.755 7.31999L265.403 9.16799C264.563 10.7733 263.611 12.5 262.547 14.348C261.502 16.1773 260.373 18.044 259.159 19.948C257.965 21.8333 256.714 23.6813 255.407 25.492C254.101 27.3213 252.775 29.02 251.431 30.588Z" stroke="#8B3DFF" stroke-width="10" mask="url(#path-1-inside-1_356_2)"/>
                </svg>
           </div>
        </div>
    );
}

export default Intro;