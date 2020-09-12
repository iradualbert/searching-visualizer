import React from "react";
import "./Board.css";
import Square from "./Square";
import Pointer from "../pointer/Pointer";
import linearSearch from "../../algorithms/linearSearch";
import binarySearch from "../../algorithms/binarySearch";
import jumpSearch from "../../algorithms/JumpSearch";
import exponentialSearch from "../../algorithms/exponentialSearch";

// testAlgorithm(exponentialSearch)

class Board extends React.Component{

    state = {
        arr: [],
        speed: 100,
        target: 10,
        leftPointer: -75,
        rightPointer: -50,
        midPointer: -25,
        running: false,
    }


    setPointers = ({left, right, mid}) => {
        if(left){
            this.setState({leftPointer:  left})
        }
        if (right){
            this.setState({rightPointer: right})
        }
        if(mid){
            this.setState({midPointer: mid})
        }
    };
    componentDidMount(){
        this.generateNewArray();
    }; 

    generateNewArray = () => {
        this.setState({arr: []})
        setTimeout(() => {
            this.setState({ arr: sortedArr(generateRandomArray()), 
                target: generateRandomNumber(),
                leftPointer: -75,
                rightPointer: -50,
                midPointer: -25,
             });
        }, 10);
        
    }
    
    linearSearch = () => {
        const { arr, target } = this.state;
        linearSearch(arr, target, this.setPointers)
    }
    binarySearch = async () => {
        const { arr, target} = this.state
        await binarySearch(arr, target, null, null, this.setPointers)
        this.setPointers({
            left: -75,
            mid: -50,
            right: -25
        })

    };

    jumpSearch = async () => {
        const {arr, target } = this.state;
        await jumpSearch(arr, target, this.setPointers)
        
    };

    exponentialSearch = async () => {
        const {arr, target } = this.state;
        await exponentialSearch(arr, target, this.setPointers)
    }

    render(){
        return(
            <div style={{ position: "relative"}}>
                
               <div className="buttons">
                    <button onClick={this.generateNewArray}>Generate Array</button>
                    <button onClick={this.linearSearch}>Search {this.state.target}</button>
                    <button onClick={this.binarySearch}>Binary Search {this.state.target}</button>
                    <button onClick={this.jumpSearch}>Jump  Search {this.state.target}</button>
                    <button onClick={this.exponentialSearch}>Exponential Search {this.state.target}</button>

               </div>
                <div className="row">
                    {this.state.arr.map((value, index) => (
                        <Square value={value} key={index} id={index}/>
                    ))}
                </div>
                <div className="row" >
                    {this.state.arr.map((value, index) => (
                        <div className="box index" key={`${value} - ${index}`}>{index}</div>
                    ))}
                </div>
                <div className="row" style={{width: "100%", position: "relative", backgroundColor: "green"}}>
                   <Pointer left={this.state.leftPointer} pointerType="left-pointer"/>
                   <Pointer left={this.state.rightPointer}  pointerType="right-pointer"/>
                   <Pointer left={this.state.midPointer}  pointerType="mid-pointer"/>
                </div>
            </div>
            
        )
    }

}

function generateRandomArray() {
    const arr = []
    for(let i =0; i < 50; i++){
        arr.push(generateRandomNumber())
    }
    return arr
}

// naively sort the array
function sortedArr (arr) {
    const sortedArray = arr.slice().sort((a,b) => a-b)
    return sortedArray
}

function generateRandomNumber () {
    return Math.floor(Math.random() * 40)
}

export default Board;