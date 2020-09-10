import React from "react";
import "./Board.css";
import Square from "./Square";
import linearSearch from "../../algorithms/linearSearch";
import binarySearch from "../../algorithms/binarySearch";
import jumpSearch from "../../algorithms/JumpSearch";
import exponentialSearch from "../../algorithms/ExponentialSearch";

// testAlgorithm(exponentialSearch)

class Board extends React.Component{

    state = {
        arr: [],
        speed: 100,
        target: 10,
        animations: []
    }

    componentDidMount(){
        this.generateNewArray();
    }; 

    generateNewArray = () => {
        this.setState({arr: []})
        setTimeout(() => {
            this.setState({ arr: sortedArr(generateRandomArray()), animations: [], target: generateRandomNumber() });
        }, 10);
        
    }
    
    linearSearch = () => {
        const [found, foundAt] = linearSearch(this.state.arr, this.state.target, this.state.animations)

        this.state.animations.forEach((anim , index)=> {
            const currentDiv = document.getElementById(anim)
            setTimeout(() => {
                currentDiv.style.backgroundColor = "turquoise";
                setTimeout(() => {
                    if(found && foundAt === index){
                        currentDiv.style.backgroundColor = "red";
                    } else {
                        currentDiv.style.backgroundColor = ""
                    }
                }, 70);
            }, this.state.speed * index);
        })
    }
    binarySearch = () => {
        binarySearch(this.state.arr, this.state.target, document.getElementById('left-pointer'))

    };

    jumpSearch = async () => {
        const {arr, target } = this.state;
        await jumpSearch(arr, target)
        
    };

    exponentialSearch = async () => {
        const {arr, target } = this.state;
        await exponentialSearch(arr, target)
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
                <div className="array">
                    {this.state.arr.map((value, index) => (
                        <Square value={value} key={index} id={index}/>
                    ))}
                </div>
                <div className="pointer" id={"left-pointer"}>
                </div>
                <div className="array">
                    {this.state.arr.map((value, index) => (
                        <div className="box index" key={`${value} - ${index}`}>{index}</div>
                    ))}
                </div>
            </div>
            
        )
    }

}

async function testAlgorithm (searchAlgorithm) {
    for(let i =0; i < 20; i++){
        const target = generateRandomNumber()
        const arr = generateRandomArray();
        const javascriptResult = arr.indexOf(target)
        const algoResult = await searchAlgorithm(arr, target)
        console.log(javascriptResult === algoResult)
    }
}

function generateRandomArray() {
    const arr = []
    for(let i =0; i < 20; i++){
        arr.push(Math.floor(Math.random() * 30))
    }
    return arr
}

// naively sort the array
function sortedArr (arr) {
    const sortedArray = arr.slice().sort((a,b) => a-b)
    return sortedArray
}

function generateRandomNumber () {
    return Math.floor(Math.random() * 30)
}

export default Board;