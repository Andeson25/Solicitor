let seedData = [{
    "label": "Business",
    "value": 30,
}, {
    "label": "Litigation",
    "value": 25,
}, {
    "label": "Inventory",
    "value": 5,
}, {
    "label": "Entertainment",
    "value": 5,
}, {
    "label": "Trademark Application",
    "value": 5,
}, {
    "label": "Wills & Probate",
    "value": 5,
}];

let width = 200,
    height = 200,
    radius = Math.min(width, height) / 2;


let colour = [
    '#fb7514',
    '#0075b3',
    '#00aca8',
    '#ffb70d',
    '#ab0046',
    '#00ab55'
];

let arc = d3.arc()
    .innerRadius(radius - radius/2)
    .outerRadius(radius);

let pie = d3.pie()
    .value(function (d) {
        return d["value"];
    })
    .sort(null);

let svg = d3.select("#donut-chart")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");


let g = svg.selectAll(".arc")
    .data(pie(seedData))
    .enter().append("g")
    .attr("class", "arc");

g.append("path")
    .attr("d", arc).attr("fill", (d,i)=>{
        return colour[i]
});



