import React from "react";
import "./Main.css";
import Header from "./Header";
import Bar from "./Bar";
import Pointer from "../pointer/Pointer";
import linearSearch from "../../algorithms/linearSearch";
import binarySearch from "../../algorithms/binarySearch";
import jumpSearch from "../../algorithms/JumpSearch";
import exponentialSearch from "../../algorithms/exponentialSearch";


class Board extends React.Component {

    state = {
        arr: [],
        speed: 100,
        target: generateRandomNumber(),
        range: 20,
        barWidth: 50,
        leftPointer: -75,
        rightPointer: -50,
        midPointer: -25,
        isRunning: false,
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
        this.setState({ target: value })
    }
    handleChange = async (event) => {
        const range = event.target.value
        const barWidth = Math.floor(1000 / range)
        await this.setState({ range: range, barWidth: barWidth })
        this.generateNewArray()
    }
    generateNewArray = async () => {
        const { range } = this.state
        this.setState({ arr: [] })
        await this.setState({
            arr: sortedArr(generateRandomArray(range)),
            leftPointer: -75,
            rightPointer: -25,
            midPointer: -50,
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
        const { arr, target } = this.state;
        await linearSearch(arr, target, this.setPointers)
        this.resetPointers()
        this.setState({ isRunning: false })
    }
    binarySearch = async () => {
        this.setState({ isRunning: true })
        const { arr, target } = this.state
        await binarySearch(arr, target, null, null, this.setPointers)
        this.resetPointers()
        this.setState({ isRunning: false })
    };

    jumpSearch = async () => {
        this.setState({ isRunning: true })
        const { arr, target } = this.state;
        await jumpSearch(arr, target, this.setPointers)
        this.resetPointers()
        this.setState({ isRunning: false })

    };

    exponentialSearch = async () => {
        this.setState({ isRunning: true })
        const { arr, target } = this.state;
        await exponentialSearch(arr, target, this.setPointers)
        this.resetPointers()
        this.setState({ isRunning: false })
    }

    render() {
        const { range, target, barWidth } = this.state
        return (
            <div style={{ position: "relative", marginTop: 60, marginLeft: 150 }}>
                <Header
                    range={range}
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
                    {this.state.arr.map((value, index) => (
                        <div
                            className="box index"
                            key={`${value} - ${index}`}
                            style={{ width: barWidth }}
                        >
                            {index}
                        </div>
                    ))}
                </div>
                <div
                    className="row"
                    style={{ width: (barWidth + 1) * range, position: "relative", backgroundColor: "green" }}
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

function generateRandomArray(range) {
    const arr = []
    for (let i = 0; i < range; i++) {
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