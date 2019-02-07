import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchRecipes} from "../actions/actions";
import {Link} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Row from "react-bootstrap/Row";


const mapDispatchToProps = dispatch => {
    return {
        fetchRecipes: (payload) => dispatch(fetchRecipes(payload))
    }
};

const mapStateToProps = state => {
    return {homeList: state.HomeListReducer};
};


const NothingContainer = styled.div`
  background: #ECF2F7;
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  color: #2ECC71;
  font-weight: bold;
  text-align: center;
  
  &>div{
  display: block;
  }    
`;

const Mosaic = styled.div`
width: 50vw;
height: 50vw;
background: url(${props => props.bg}) 50%;
`;

const PriceDiv = styled.div`
  position: relative;
  top: 5px;
  left: 40vw;
  z-index: 20;
  
  width: 35px;
  height: 35px;
  border-radius: 35px;
  border: 2px #2ECC71 solid;
  color: #2ECC71;
  background-color: #fff;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRow = styled(Row)`
  margin: 0;
`;

class homeList extends Component {
    constructor() {
        super();

        //this.clickAction = this.clickAction.bind(this);
    }

    componentDidMount() {
        if (this.props.homeList.length === 0)
            axios.get("/api/recipe").then(response => {
                this.props.fetchRecipes(response.data.data);
            }).catch(error => {
                console.log(error);
            })
            ;


    }


    render() {
        console.log(this.props.homeList);

        let recipes = this.props.homeList;
        console.log("isto são as receitas");
        console.log(recipes);
        return (
            <div>
                <NothingContainer>
                    {
                        (recipes != null) ? recipes.map((el, index) => (
                                <Link to={`/receita/${el.id}`} key={index}> <Mosaic
                                    bg={el.image}><PriceDiv>{el.est_price}€</PriceDiv></Mosaic></Link>
                            )
                            ) :
                            <StyledRow>
                                <div><img src="img/draw/chef.svg" style={{width: "80vw"}} alt=""/></div>
                                <br/>
                                <br/>
                                <div><h3>A cozinhar as suas receitas!</h3></div>
                            </StyledRow>
                    }
                </NothingContainer>
            </div>


        )
    }
}

/*
            }*/

const HomeList = connect(mapStateToProps, mapDispatchToProps)(homeList);

export default HomeList;