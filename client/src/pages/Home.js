import React from 'react';
import { BasicButton } from '../components/BasicButton';
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div>Home</div>
    <BasicButton >
      <Link to='/'>Entrar</Link>
    </BasicButton>
    </>
  )
}
