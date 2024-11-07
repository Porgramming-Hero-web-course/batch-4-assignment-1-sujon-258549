{

    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Circle = {
        shape: 'circle';
        radius: number
    }
    type Rectangle = {
        shape: 'rectangle';
        height: number;
        width: number
    }

    type UnionRectangleAndCircle = Circle | Rectangle

    const calculateShapeArea = (input: UnionRectangleAndCircle) => {
        if (input.shape === "circle") {
            return Math.PI * input.radius * input.radius
        }
        else if (input.shape === "rectangle") {
            return input.height * input.width
        }

    }

    const circle: Circle = { shape: 'circle', radius: 5 }
    const ractangle: Rectangle = { shape: 'rectangle', height: 4, width: 6 }

    // console.log(calculateShapeArea(circle))



}