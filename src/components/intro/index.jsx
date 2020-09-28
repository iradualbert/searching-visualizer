import React, { useState } from "react";
import { Modal, Button} from "react-bootstrap";

export default function () {
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false)
    return (
        <Modal show={open} onHide={handleClose} animation={false} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Meet Searching Algorithms!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>
                This app covers 4 most popular <b>searching algorithms</b>  namely <b>Linear Search, Jump Search, Binary Search and Exponential Search</b>.
            </p>           
            <p>
                Apart from <b>Linear search</b> which is a <b>sequential algorithm</b>, all other algorithms use <b>divide-and-conquer</b> technique to search for the value.
                They are also much more efficient than Linear search.
            </p>
            <p>
              The elements of the array are represented by <b>rectangular bars</b> where the height of the bar represents its value in the array.
            </p>
            <p>
                You can generate a random array by simply clicking on <b>Generate Sorted Array</b> button.
                By default,  a sorted array and a target value are randomly generated. The size of the array is initially set to 50. You can resize the length of the array within the range of 10 - 200. 
            </p>
            <p>
                You can search for a value in the array using one algorithm at time. 
                When an algorithm is running, all user actions are disabled.
            </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    See Algorithms In Action
                </Button>
            </Modal.Footer>
        </Modal>
    )
}