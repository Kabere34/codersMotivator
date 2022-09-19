import React,{useState} from 'react';
// import { useDispatch } from 'react-redux';
// import { HashLink as Link } from 'react-router-hash-link';
// import {login} from '../actions/auth'
// import './loginPage.css'
// import {useNavigate} from "react-router-dom"


const initialState = {
    category : ''

}

function Category(){

    const [category, setCategory] = useState(initialState)


    return(
        <div class="back">
            <div class="div-center">
                <div class="content">

                    <hr />
                    <form onSubmit={""} type="post">
                        <div class="form-group">
                            <label for="category">Add Category</label>
                            <input class="form-control" type="text" name="category" onChange={(e)=>setCategory({ [e.target.name]:e.target.value})} required/>
                        </div>

                        <button type="submit" class="btn category-btn">Add</button>


                    </form>
                </div>
            </div>
        </div>

    );
 };
export default Category;

