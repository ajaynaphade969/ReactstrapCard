import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import { render } from '@testing-library/react';
import { dateFormat } from 'dateformat';

class DishDetail extends Component {

    constructor(props){
        super();
        console.log(props);

    }

      renderDish(dish){
        if(dish != null){
            return (
            <div className="row">
              <div  className="col-12 col-md-5 m-1">
                    
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle >Parnavee {dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                                
                    </CardBody>

                </Card>
            </div>
            <div  className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {this.renderComments(dish.comments)}
            </div>
            </div>        
            );
        }
        else{
            return(
            <div></div>
            );
        }

      }

      renderComments(comments){
          console.log("In renderComments")

        if(comments != null){
            let allDishComments = null;

            allDishComments= comments.map((cmnt) => {

               let date = new Date(cmnt.date);

              
                return (
                    <div key={cmnt.id} className="row">
                           <p>{cmnt.comment}<br/>
                           -- {cmnt.author}&nbsp;{date.toDateString()}</p>
                    </div>
                    )    
                }

            );

          return  allDishComments;
        }
        else{
            return(
            <div></div>
            );
        }

      }

    
      render(){
           return(
                <div >
                    {this.renderDish(this.props.selDish)}
                  </div>     
                );
            }
        
}
        
export default DishDetail;
