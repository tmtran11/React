import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

	function RenderDish({dish}) {
		if(dish!=null){
			return (
				<div className="container">
					<div className="row">
						<Breadcrumb>
							<BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
							<BreadcrumbItem active>{dish.name}</BreadcrumbItem>
						</Breadcrumb>
						<div className="col-12">
							<h3>{dish.name}</h3>
							<hr />
						</div>
					</div>
	        <div className="row">
						<div key={dish.id} className="col-12 col-md-5 m-1">
							<Card>
								<CardImg width="100%" src={dish.image} alt={dish.name} />
								<CardBody>
									<CardTitle>{ dish.name }</CardTitle>
									<CardText>{ dish.description }</CardText>
								</CardBody>
							</Card>
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}

	const DishDetail = (props) => {
		return(
			<RenderDish dish={props.dish}/>
		);
	}


export default DishDetail
