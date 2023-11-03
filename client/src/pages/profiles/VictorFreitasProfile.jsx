import React from "react";
import { NavLink } from 'react-router-dom';

import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function VictorFreitasProfile() {

  return (
    <div className="flex flex-col min-h-screen border-none screen rounded-lg bg-white px-4 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 ">

        <div className="flex flex-col w-full h-full py-16">
          <div className="container mx-auto px-4">
            <div className="relative h-20 rounded-b flex justify-center">
              <div className="absolute -bottom-6">
                {/* Sua foto aqui: */}
                <img
                  src="https://lh3.googleusercontent.com/pw/ADCreHdlx92fbVhhm1cwynQ2YU1g42rMRw6Zs0ObBSXQSeFdHnGfeJu9GCXyuu__lLSfe3ORRa2Fj_zE2FK3k_tAzm1xJnQZDe3D1pVh4irAyRUrjc2-Ia8RFLBKuJ3cwIG7e1Fbl-vR14Hwbmb1Ns_BEq-sS3gn58KPdD_CwhvozJ8qJQXXY9F9fxxnl5LqEj0uYWDAiXwrBVU8HTwrCkW_lElGhizIpYppRu68vUUcGWTxTJpDZa0PlFJVD3gIMqC76dNclGSvv7qcVZUvTpmq2CUWsXtCWVZA56vlpGC7ur-iUGo9OpDi1bI2TujVks4bj_97oQP5cX-e0ZlYoxPr2GZHBxjjGSkA0Z6u6kpJ6ewWWjNQNuqbECkWBlEBDx-ptaaZim0ixlZsDD_2iJAZPXiaeutmsYJLPAst-2ZqD2evrb16441NReyCXGowRIEcxwe9qRS9i5AVt4QV1UoyJrR5QGRaZ6qpPDrT3jMAbBdfheIZg_DzvqjfTqQurmL_NSJgZWRDbgEIffgeyKaAPggC3Jk7IZzK0yk8Fk3KjVOcIQNKSbwEROJx2av_MSWD45YdzWARKuEDHzCyh1RvFjz3SLc_4YPotJo8YlivbYqUqv4LTvbQrEq5_DptR_Ch9p-Qe2hDFvhfrUqGM2egY56Watx6bsfIqSkEXREWQ4a2zbB81CUn8VDJ5WWiuDCM_QJqobmRKYA9SyXfa4z1Jel3-JEYUSbBo-Ba0VePBFWQP0yUj03FN3a-Aq9Cv_X7lgobcDojRMJckmvLW16RyoPRUViGmCJBo343bprmQwHjbvBkS3sb_R97s7iYZsEJEm3hsWjJ9fK3hou3RrFHrKMMXkwD0tb106u_ajdb5j0ySzhVe15F8lEWYhek8h0YuOcYVKbx8NflcEwzh9NwX6gsmcHCZTlZDwwaczx2-QLNQHJ5TXK_VhvYZy8=w354-h470-s-no"
                  className="object-cover border-4 border-white w-40 h-40 rounded-full"
                  alt="cover"
                />
              </div>
            </div>
            <div className="text-center mt-12">
              {/* Seu nome aqui: */}
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                Victor Freitas
              </h3>

              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <MapOutlinedIcon style={{ color: '#FDAE17' }} />
                {/* Sua cidade aqui: */}
                <span className="align-items-center" style={{ marginLeft: '5px' }}>
                  Rio Grande, RS
                </span>
              </div>

              <div className="mb-2 text-blueGray-600 mt-10">
                <AccountBalanceOutlinedIcon style={{ color: '#FDAE17' }} />
                {/* A universidade aqui: */}
                <span className="align-items-center" style={{ marginLeft: '5px' }}>
                  Universidade Federal do Rio Grande
                </span>
              </div>

              <div className="mb-2 text-blueGray-600 mt-5">
                <SchoolOutlinedIcon style={{ color: '#FDAE17' }} />
                {/* O curso aqui: */}
                <span className="align-items-center" style={{ marginLeft: '5px' }}>
                  Engenharia de Computação
                </span>
              </div>
            </div>

            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  {/* Biografia aqui: */}
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    Olá, meu nome é Victor Freitas, tenho 23 anos e sou estudante de Engenharia de Computação desde 2019.
                    Gosto de rock, piadas ruins, resolver problemas e, dentro da computação, da área de otimização.
                  </p>
                  <br />
                  {/* Link para seu GitHub aqui: */}
                  <a
                    href="https://github.com/victoraury"
                    className="font-normal text-yellow-500"
                    target="_blank"
                  >

                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <NavLink to="/">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  <p>Home</p>
                </div>
              </NavLink>
              <div className="text-sm text-blueGray-500 mt-3 font-semibold py-1">
                <a href="https://www.saicc.com.br/" className="text-blueGray-500 hover:text-blueGray-800" target="_blank">SAICC - 2023</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};