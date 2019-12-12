export function clickImages() {
    const sectionContent = document.getElementById("content");
    sectionContent.addEventListener("click", e => {
        console.log("target", e.target)
        switch (e.target.tagName) {
            case "IMG":
            alert("All of the yarn is available in our shop!")
        }
    })
 }

