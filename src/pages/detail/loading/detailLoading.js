import React from "react"
//shimmer add
import ContentLoader from "react-content-loader"

const DetailLoading=(props)=>{

	return( <div> <ContentLoader 
								height={200}
								width={450}
								speed={6}
								primaryColor="#0A0B0A"
								secondaryColor="#323332"
								
								style={{marginTop:10}}
							>
								<rect x="22.9" y="21.13" rx="0" ry="0" width="144.7" height="12.42" /> 
								<rect x="22.9" y="39.13" rx="0" ry="0" width="118" height="9.46" /> 
								<rect x="215.6" y="21.13" rx="0" ry="0" width="214" height="141" /> 
								<rect x="21.9" y="53.13" rx="0" ry="0" width="118" />
					</ContentLoader> </div>
	)}

export default DetailLoading