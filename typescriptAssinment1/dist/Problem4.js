"use strict";
{
    const calculateShapeArea = (input) => {
        if (input.shape === "circle") {
            return Math.PI * input.radius * input.radius;
        }
        else if (input.shape === "rectangle") {
            return input.height * input.width;
        }
    };
    const circle = { shape: 'circle', radius: 5 };
    const ractangle = { shape: 'rectangle', height: 4, width: 6 };
    // console.log(calculateShapeArea(circle))
}
