require("express-async-errors")

const database = require("./database");
const AppError = require("./utils/appError")

const express = require("express");
const route = require("./routes");

const app = express();
const PORT = 3333;

database();

app.use(express.json());
app.use(route);
app.use((error, request, response, next) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            statusCode: "Error",
            message: error.message
        })
    }
    return response.status(500).json({
        statusCode: "Error",
        message: "Internal Server Error"
    });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));