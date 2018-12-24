import React from "react"
//shimmer add
import ContentLoader from "react-content-loader"

const SearchLoading=(props)=>{

	return( <div> <ContentLoader 
							height={350}
							width={450}
							speed={4}
							primaryColor="#0A0B0A"
							secondaryColor="#323332"
						>
								<rect x="72.9" y="9.13" rx="0" ry="0" width="303.7" height="80.92" /> 
								<rect x="72.9" y="95.13" rx="0" ry="0" width="303.7" height="80.92" /> 
								<rect x="72.9" y="181.13" rx="0" ry="0" width="303.7" height="80.92" /> 
								<rect x="72.9" y="267.13" rx="0" ry="0" width="303.7" height="80.92" />
				</ContentLoader></div>
	)}

export default SearchLoading