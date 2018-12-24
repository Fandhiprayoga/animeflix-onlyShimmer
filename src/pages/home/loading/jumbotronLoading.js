import React from "react"
//shimmer add
import ContentLoader from "react-content-loader"

const JumbotronLoading=(props)=>{

	return( <div> <ContentLoader 
						height={160}
						width={411}
						speed={4}s
						primaryColor="#0A0B0A"
						secondaryColor="#323332"
					>
			</ContentLoader> </div>
	)}

export default JumbotronLoading