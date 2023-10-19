import React from "react";
import { NavLink } from 'react-router-dom';

import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function TestProfile() {

  return (
    <div className="flex flex-col min-h-screen border-none screen rounded-lg bg-white px-4 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4 ">

        <div className="flex flex-col w-full h-full py-16">
            <div className="container mx-auto px-4">
              <div className="relative h-20 rounded-b flex justify-center">
                <div className="absolute -bottom-6">
                  {/* Sua foto aqui: */}
                    <img
                      src="https://www.instagram.com/p/CxTX5jnPWIv/?img_index=1"
                      className="object-cover border-4 border-white w-40 h-40 rounded-full"
                      alt="cover"
                    />
                </div>
              </div>
              <div className="text-center mt-12">
                {/* Seu nome aqui: */}
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Breno Soares
                </h3>

                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <MapOutlinedIcon style={{color: '#FDAE17'}}/>                                           
                  {/* Sua cidade aqui: */}
                  <span className="align-items-center" style={{marginLeft: '5px'}}>
                    Rio Grande, RS
                  </span>
                </div>

                <div className="mb-2 text-blueGray-600 mt-10">
                  <AccountBalanceOutlinedIcon style={{color: '#FDAE17'}}/>                       
                  {/* A universidade aqui: */}
                  <span className="align-items-center" style={{marginLeft: '5px'}}>
                     Universidade Federal do Rio Grande
                  </span>
                </div>

                <div className="mb-2 text-blueGray-600 mt-5">
                  <SchoolOutlinedIcon style={{color: '#FDAE17'}}/>                        
                  {/* O curso aqui: */}
                  <span className="align-items-center" style={{marginLeft: '5px'}}>
                    Engenharia de Computação
                  </span>
                </div>
              </div>

              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">                           
                    {/* Biografia aqui: */}
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    Oi, pessoal, eu sou o Breno Soares, tenho 21 anos e sou obcecado por gatos! Quando não estou correndo atrás deles, estou ganhando várias partidas no rank mestre de League of Legends. 
                    Também sou um torcedor fervoroso do Santos Futebol Clube, que é, obviamente, o melhor time do mundo.
                    </p>
                    <br/>
                    {/* Link para seu GitHub aqui: */}
                    <a href="https://github.com/romulodm/git-minicurso-saicc" className="font-normal text-yellow-500">
                      <GitHubIcon/>
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