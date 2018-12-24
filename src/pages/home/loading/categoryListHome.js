import React from "react"
//shimmer add
import ContentLoader from "react-content-loader"

const CategoryListHome=(props)=>{

	return( <div> <ContentLoader 
								height={400}
								width={850}
								speed={4}
								primaryColor="#0A0B0A"
								secondaryColor="#323332"
								style={{marginTop:20,}}
								
							>
								<rect x="25.6" y="5.13" rx="0" ry="0" width="162" height="28" /> 
								<rect x="26.6" y="55.13" rx="0" ry="0" width="162" height="22.12" /> 
								<rect x="25.6" y="95.13" rx="0" ry="0" width="162" height="22.12" /> 
								<rect x="25.6" y="135.13" rx="0" ry="0" width="162" height="22.12" /> 
								<rect x="25.6" y="175.13" rx="0" ry="0" width="162" height="22.12" /> 
								<rect x="25.6" y="255.13" rx="0" ry="0" width="162" height="22.12" />
								<rect x="25.6" y="295.13" rx="0" ry="0" width="162" height="22.12" /> 
								<rect x="25.6" y="215.13" rx="0" ry="0" width="162" height="22.12" /> 
								<rect x="25.6" y="335.13" rx="0" ry="0" width="162" height="22.12" />  
								<rect x="208.6" y="14.13" rx="0" ry="0" width="72.9" height="13.49" /> 

								<rect x="207.6" y="57.13" rx="0" ry="0" width="120" height="143" /> 
								<rect x="334.6" y="57.13" rx="0" ry="0" width="120" height="143" /> 
								<rect x="461.6" y="57.13" rx="0" ry="0" width="120" height="143" /> 
								<rect x="588.6" y="57.13" rx="0" ry="0" width="120" height="143" /> 
								<rect x="715.6" y="57.13" rx="0" ry="0" width="120" height="143" />

								<rect x="207.6" y="205.13" rx="0" ry="0" width="120" height="143" /> 
								<rect x="334.6" y="205.13" rx="0" ry="0" width="120" height="143" /> 
								<rect x="461.6" y="205.13" rx="0" ry="0" width="120" height="143" /> 
								<rect x="588.6" y="205.13" rx="0" ry="0" width="120" height="143" /> 
								<rect x="715.6" y="205.13" rx="0" ry="0" width="120" height="143" />


				</ContentLoader> </div>
	)}

export default CategoryListHome