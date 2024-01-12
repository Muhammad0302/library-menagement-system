'use client'

import { withApollo } from 'lib/apollo/withApollo'
import Homes from '@/components/Home'
import Link from 'next/link'
import useViewer from 'hooks/viewer/useViewer'

import { useEffect } from 'react'

const Home = () => {
  return (
    <>
      <div className='bg-[#222222] py-1 sm:py-12 h-screen'>
        <Homes />
      </div>
    </>
  )
}

export default withApollo()(Home)
