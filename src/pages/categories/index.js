import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Main from './components/main/';
import NewReleases from '../../components/horizontal-list';
import Category from './components/category';
import { styles } from './styles';
import ContentLoader from "react-content-loader"
import PopularLoading from "../home/loading/popularLoading"
import NewLoading from "../home/loading/newLoading"
import CategoriesLoading from "./loading/categoriesLoading"
class Categories extends React.Component {
	state = {
		category: 'Action'
	};

	getCategory = (val) => {
		this.setState({
			category: val
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<CategoriesLoading/>
				<PopularLoading/>
				<NewLoading/>
			</div>
		);
	}
}

const withStylesCategories = withStyles(styles)(Categories);

const mapStateToProps = (state) => ({
	popular: state.popularReducer,
	trending: state.trendingReducer,
	categories: state.categoryReducer
});
export default connect(mapStateToProps)(withStylesCategories);
