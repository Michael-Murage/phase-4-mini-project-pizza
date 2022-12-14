import React from 'react'
import useGetData from '../hooks/getData'
import Restaurant from './Restaurant'

function Restaurants() {
	const { data } = useGetData("/api/restaurants")
	
	return (
		<div className='container rests-cont'>
			{(Array.isArray(data) ? data : []).map(rest =>{
				return <div key={rest.id}><Restaurant rest={rest} /></div>
			})
				
			}
			
		</div>
	)
}

export default Restaurants