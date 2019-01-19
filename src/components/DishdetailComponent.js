import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

	function RenderDish({dish}) {
		if(dish!=null){
			return (
				<div className="container">
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
