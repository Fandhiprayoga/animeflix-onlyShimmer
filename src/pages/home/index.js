import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Jumbotorn from './components/jumbotron/';
import CategoryList from './components/category-list/';
import HorizontalList from '../../components/horizontal-list';
import Footer from '../../components/footer';
import { styles } from './styles';

//shimmer add
import ContentLoader from "react-content-loader"

import JumbotronLoading from "./loading/jumbotronLoading"
import PopularLoading from "./loading/popularLoading"
import NewLoading from "./loading/newLoading"
import CategoryListHome from "./loading/categoryListHome"

const Home = (props) => {
	const { classes, popular, trending } = props;
	return (
		<div>
			<div className={classes.jumbotron}>
				<JumbotronLoading/>
			</div>
			<div className={classes.categories}>
				<div className={classes.containerHomeContent}>
					<PopularLoading/>
					<NewLoading/>
					<div className={classes.categoryList}>
						<CategoryListHome/>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

const withStylesHome = withStyles(styles)(Home);

const mapStateToProps = (state) => ({
	popular: state.popularReducer,
	trending: state.trendingReducer
});

export default connect(mapStateToProps)(withStylesHome);
