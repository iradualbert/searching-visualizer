import React from "react";
import "./Main.css";
import Header from "./Header";
import Bar from "./Bar";
import Pointer from "../pointer/Pointer";
import linearSearch from "../../algorithms/linearSearch";
import binarySearch from "../../algorithms/binarySearch";
import jumpSearch from "../../algorithms/JumpSearch";
import exponentialSearch from "../../algorithms/exponentialSearch";
import Status from "./Status";


class Board extends React.Component {

    state = {
        arr: [],
        speed: 100,
        target: generateRandomNumber(),
        size: 20,
        barWidth: 50,
        leftPointer: -75,
        rightPointer: -50,
        midPointer: -25,
        isRunning: false,
        results: [],
    }


    setPointers = ({ left, right, mid }) => {
        if (left) {
            this.setState({ leftPointer: left })
        }
        if (right) {
            this.setState({ rightPointer: right })
        }
        if (mid) {
            this.setState({ midPointer: mid })
        }
    };
    componentDidMount() {
        this.generateNewArray();
    };
    setTarget = (value) => {
        if(value){
            this.setState({ target: parseInt(value) })
        }
        else (this.setState({target: ""}))
    }
    handleChange = async (event) => {
        const size = event.target.value
        const barWidth = Math.floor(1000 / size)
        await this.setState({ size: size, barWidth: barWidth })
        this.generateNewArray()
    }
    generateNewArray = async () => {
        const { size } = this.state
        this.setState({ arr: [] })
        await this.setState({
            arr: sortedArr(generateRandomArray(size)),
            leftPointer: -75,
            rightPointer: -25,
            midPointer: -50,
            results: []
        });
        for(let i =0; i < this.state.arr.length; i++){
            document.getElementById(i).className = "box box-value";
        }
    }

    resetPointers = () => {
        this.setPointers({
            left: -75,
            mid: -50,
            right: -25
        })
    }

    linearSearch = async () => {
        this.setState({ isRunning: true })
        const { arr, target, results } = this.state;
        const index = await linearSearch(arr, target, this.setPointers);
        results.push([target, index])
        this.resetPointers()
        this.setState({ isRunning: false, results: results})
    }
    binarySearch = async () => {
        this.setState({ isRunning: true });
        const { arr, target, results } = this.state;
        const index = await binarySearch(arr, target, null, null, this.setPointers)
        results.push([target, index]);
        this.resetPointers()
        this.setState({ isRunning: false, results: results })
    };
    jumpSearch = async () => {
        this.setState({ isRunning: true })
        const { arr, target, results } = this.state;
        const index = await jumpSearch(arr, target, this.setPointers)
        results.push([target, index])
        this.resetPointers()
        this.setState({ isRunning: false, results: results})
    };

    exponentialSearch = async () => {
        this.setState({ isRunning: true })
        const { arr, target, results} = this.state;
        const index = await exponentialSearch(arr, target, this.setPointers)
        results.push([target, index])
        this.resetPointers()
        this.setState({ isRunning: false, results: results })
    }

    render() {
        const { 
            arr, 
            size,
            target, 
            barWidth, 
            isRunning, 
            results
        } = this.state;
        return (
            <div style={{ position: "relative", marginTop: 60, marginLeft: 150 }}>
                <Header
                    size={size}
                    target={target}
                    handleChange={this.handleChange}
                    binarySearch={this.binarySearch}
                    exponentialSearch={this.exponentialSearch}
                    linearSearch={this.linearSearch}
                    generateNewArray={this.generateNewArray}
                    jumpSearch={this.jumpSearch}
                    setTarget={this.setTarget}
                    isRunning={this.state.isRunning}
                />
                <Status 
                   isRunning={isRunning} 
                   results={results}
                   target={target}
                />
                <div className="row">
                    {this.state.arr.map((value, index) => (
                        <Bar
                            value={value}
                            key={index}
                            barWidth={barWidth}
                            id={index}
                        />
                    ))}
                </div>
                <div className="row" >
                    {arr.map((value, index) => (
                        <div
                            className="box index"
                            key={`${value} - ${index}`}
                            style={{ width: barWidth, fontSize: Math.min(barWidth / 2, 15) }}
                        >
                            {index}
                        </div>
                    ))}
                </div>
                <div
                    className="row"
                    style={{ width: (barWidth + 1) * size, position: "relative", backgroundColor: "green" }}
                >
                    {this.state.isRunning &&
                        <React.Fragment>
                            <Pointer
                                left={this.state.leftPointer}
                                pointerType="left-pointer"
                            />
                            <Pointer
                                left={this.state.rightPointer}
                                pointerType="right-pointer"
                            />
                            <Pointer
                                left={this.state.midPointer}
                                pointerType="mid-pointer"
                            /></React.Fragment>
                        }
                </div>
            </div>

        )
    }

}

function generateRandomArray(size) {
    const arr = []
    for (let i = 0; i < size; i++) {
        arr.push(generateRandomNumber())
    }
    return arr
}

// naively sort the array
function sortedArr(arr) {
    const sortedArray = arr.slice().sort((a, b) => a - b)
    return sortedArray
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 100)
}

export default Board;