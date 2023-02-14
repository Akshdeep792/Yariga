import React from 'react'
import {useList} from '@pankod/refine-core'
import { Typography, Box, Stack } from '@pankod/refine-mui'
import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from 'components'
const Home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color='#111420'>
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart 
        title="property for sale"
        value={684}
        series={[75,25]}
        colors={['#475be8', '#e4eBef']}
        />
         <PieChart 
        title="property for rent"
        value={684}
        series={[60, 40]}
        colors={['#475ae8', '#e4b8ef']}
        />
         <PieChart 
        title="Total Customers"
        value={5684}
        series={[75,25]}
        colors={['#275be8', '#c4eBef']}
        />
         <PieChart 
        title="Properties for cities"
        value={555}
        series={[75,25]}
        colors={['#475be8', '#e4e8ef']}
        />

      </Box>
      <Stack mt="25px" width="100%" direction={{xs: 'column', lg: 'row'}} gap={4} >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  )
}

export default Home