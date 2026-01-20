  let gold = document.getElementById("gold_box")
        let silver = document.getElementById("silver_box")
        let gold_spot, silver_spot, gold_MCX, silver_MCX;


        async function gold_fun() {
            let response = await fetch("https://www.goldapi.io/api/XAU/INR", {
                headers: {
                    "x-access-token": "goldapi-cii9n1imkgexpc9-io"

                }
            })
            let data = await response.json();
            gold_spot = data.price
            gold_spot_TO_MCX()

        }
        async function silver_fun() {
            let response = await  fetch("YOUR_SILVER_API_URL", {
             headers: {
            "x-access-token": "YOUR_API_KEY"

                }
            })
            let data = await response.json();
            silver_spot = data.price
            silver_spot_TO_MCX()
        }

        function gold_spot_TO_MCX() {

            gold_MCX = (gold_spot / 31.1035) * 10 * 1.10;
            gold.innerText = `Gold (10g): ₹${gold_MCX.toFixed(0)}`;
        }

        function silver_spot_TO_MCX() {
            //it show the price according to KG
            silver_MCX = silver_spot * 32.1507 * 1.10
            silver.innerText = `Silver (1kg): ₹${silver_MCX.toFixed(0)}`
        }


        gold_fun()
        silver_fun()
        setInterval(()=>{
            gold_fun()
        silver_fun()
        },30000)