/*Images*/
var Images = ["https://st.depositphotos.com/1724125/2693/v/950/depositphotos_26930203-stock-illustration-cartoon-dad.jpg",
    "https://lh3.googleusercontent.com/proxy/l9Y2Y_LY23DTt_PcG267g3zUiWhmGKrPgmAJZcppRaEOM0wUTlcSe8Q0FI2DS6XgDl2gtzomY47bQNvpPS-5pbky8_Vjy5NR3WKoGprMrmXqvVTr-c0bkpW2AsPTRfSyL_7ifPblja3Sque1D-eNsEsJDB_o",
    "https://thumbs.dreamstime.com/z/indian-old-woman-elderly-fruit-dish-bright-yellow-orange-colored-national-traditional-sari-dress-green-trim-hands-121444884.jpg",
    "https://lh3.googleusercontent.com/proxy/--1zwMrdgCxVHiJA8Z-MnBSPy5aukWtxN0fAptojdYlzRj9kAIPXBlYYvx2u5YHkoUvJ59uUOQAy2WjXGZyuEmqKALkhJTvQADWuYUc",
];
/*Names*/
var Names = ["Kiran Gopinath", "Reshmi PM", "Girija Mukundan", "Mukundan PA"];
/*Functions*/
var i = 0;
var x = 0;

function Next() {
    document.getElementById("Member_Name").innerHTML = Names[i];
    i++;
    if (i == 9) {
        document.getElementById("Member_Name").hidden = true;
    }
    document.getElementById("Image").src = Images[x];
    x++;
    if (x == 9) {
        x = 0;
    }
}