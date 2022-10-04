import axios from "axios";
import "remixicon/fonts/remixicon.css";
import "./scss/styles.scss";

const trendCards = document.querySelector(".trend-card");

const api = axios.create({
  baseURL: "https://api.coincap.io/v2/assets",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    language: "es",
  },
});

const fetchCoin = async () => {
  const { data } = await api({ params: { limit: 5 } });

  const coins = data.data;

  coins.forEach((crypto) => {
    const cryptoCard = document.createElement("div");
    cryptoCard.className = "crypto-card";

    const cryptoData = document.createElement("div");
    cryptoData.className = "crypto-data";

    const cryptoValue = document.createElement("div");
    cryptoValue.className = "crypto-value";

    const cryptoImg = document.createElement("img");
    cryptoImg.setAttribute(
      "src",
      `https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`
    );

    cryptoImg.setAttribute("alt", `${crypto.name}}`);
    cryptoImg.setAttribute("width", "50px");
    cryptoImg.setAttribute("height", "50px");

    const cryptoDataP = document.createElement("p");
    cryptoDataP.textContent = crypto.symbol;

    const cryptoDataSpan = document.createElement("span");
    cryptoDataSpan.textContent = crypto.name;

    cryptoData.append(cryptoImg);
    cryptoData.append(cryptoDataP);
    cryptoData.append(cryptoDataSpan);

    const values = document.createElement("div");
    values.className = "values";

    const valuesH4 = document.createElement("h4");
    valuesH4.textContent = crypto.priceUsd;

    const valueP = document.createElement("p");
    valueP.textContent = crypto.changePercent24Hr;

    values.append(valuesH4);
    values.append(valueP);

    const imgChart = document.createElement("img");
    imgChart.setAttribute("src", "./assets/chart.svg");
    imgChart.setAttribute("alt", "Chart");

    cryptoValue.append(values);
    cryptoValue.append(imgChart);

    cryptoCard.append(cryptoData);
    cryptoCard.append(cryptoValue);

    trendCards.append(cryptoCard);
  });
};

fetchCoin();
