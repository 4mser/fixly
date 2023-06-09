

import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules

import Head from 'next/head'
import { useQuery } from 'urql'
import { PRODUCT_QUERY } from '../lib/query'
import SwiperCategories from '../components/SwiperCategories'
import 'swiper/swiper.min.css';
import ProductsHome from "../components/ProductsHome";
import styled from "styled-components";
import ImageBanner from "../components/ImageBanner";

export default function Home({tema}) {

  // Fetch products from Scrapi
  const [results] = useQuery({query: PRODUCT_QUERY});
  const {data, fetching, error} = results;

  //Check for the data coming in
  if(fetching) return <p>Cargando...</p>;
  if(error) return <p>Oh no...{error.message}</p>;


  console.log(data);



  return (
    <>
      <Head>
        <title>Fixly</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <ImageBanner tema={tema}></ImageBanner>
        
        <SwiperCategories tema={tema}></SwiperCategories>
        <br></br>
        <br></br>


        <Test tema={tema}>Recomendados</Test>
        <ProductsHome tema={tema}></ProductsHome>

        <br></br>
        <Test tema={tema}>Más Vendidos</Test>
        <ProductsHome tema={tema}></ProductsHome>
        
        
        
        
      </main>
    </>
  )
}

const Test = styled.div`
  padding: 0 1rem;
  font-weight: 500;
  font-size: 1rem;
  color: ${(props) => props.tema === 'dark' ? 'var(--secondary_color)' : 'var(--primary_color)'};
`

