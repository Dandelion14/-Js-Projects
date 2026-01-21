let gold = document.getElementById("gold_box");
let silver = document.getElementById("silver_box");

let gold_spot, silver_spot;

const API_KEY = "REPLACE_WITH_NEW_KEY";

async function gold_fun() {
  try {
    const response = await fetch("https://www.goldapi.io/api/XAU/INR", {
      headers: {
        "x-access-token": API_KEY,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) throw new Error(response.status);

    const data = await response.json();
    gold_spot = data.price;
    gold_spot_TO_MCX();

  } catch (err) {
    gold.innerText = "Gold price unavailable";
    console.error("Gold error:", err);
  }
}

async function silver_fun() {
  try {
    const response = await fetch("https://www.goldapi.io/api/XAG/INR", {
      headers: {
        "x-access-token": API_KEY,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) throw new Error(response.status);

    const data = await response.json();
    silver_spot = data.price;
    silver_spot_TO_MCX();

  } catch (err) {
    silver.innerText = "Silver price unavailable";
    console.error("Silver error:", err);
  }
}

function gold_spot_TO_MCX() {
  const gold_MCX = (gold_spot / 31.1035) * 10 * 1.10;
  gold.innerText = `Gold (10g): ₹${gold_MCX.toFixed(0)}`;
}

function silver_spot_TO_MCX() {
  const silver_MCX = silver_spot * 32.1507 * 1.10;
  silver.innerText = `Silver (1kg): ₹${silver_MCX.toFixed(0)}`;
}

gold_fun();
silver_fun();

setInterval(() => {
  gold_fun();
  silver_fun();
}, 30000);
