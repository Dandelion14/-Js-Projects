 let input = document.getElementById("inp");
        let btn = document.getElementById("btn");
        let list = document.createElement("ul");

        btn.addEventListener("click", () => {
            let value = input.value.trim();

            if (value === "") {
                alert("Write something first");
                return;
            }

            let li = document.createElement("li");
            let del = document.createElement("button")
            let edit = document.createElement("button")
            edit.innerText = "edit"
            del.innerText = "delete"
            li.innerText = value;
            list.appendChild(li);
            li.append(" ", del, " ", edit)
            del.addEventListener("click", () => {
                li.remove()
            })
            edit.addEventListener("click", () => {
                let newvalue = prompt(value, "you can change it")
                li.innerText = newvalue
                li.append(" ", del, " ", edit)

            })

            input.value = "";
        });

        document.body.appendChild(list);