const basicTypes = [
    {type: "Blank", desc: "Always generates null values"},
    {type: "Boolean", desc: "Either true or false"},
    {type: "Color", desc: "Generate color name"},
    {type: "Datetime", desc: "A date string"},
    {type: "Encrypted Text", desc: "Simulates encrypted text"},
    {type: "Hex Color", desc: "6 digits hex color code"},
    {type: "Integer", desc: "A whole number"},
    {type: "MongoDB ObjectID", desc: "Unique identifier for Mongo objects"},
    {type: "Number", desc: "A real number"},
    {type: "Password", desc: "Non-hashed password"},
    {type: "Time", desc: "Generate time stamp"}
]

export default basicTypes.sort();