import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import About from './About';


export default function Home() {
  return (
   <div>
  <Header/>
  <About/>
   </div>
  )
}
