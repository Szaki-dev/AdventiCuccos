let items = ["🎁", "🎄", "🦌", "☃️"];

let table = document.getElementById("adventTable");
let nextCellToOpen = 1;
let szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
for (let i = 0; i < 24; i++) {
    let randomSzam = Math.floor(Math.random() * szamok.length);
    let temp = szamok[randomSzam];
    szamok.splice(randomSzam, 1);
    if (i % 6 === 0) {
        var row = table.insertRow();
    }
    let cell = row.insertCell();
    cell.className = "center-content";
    cell.textContent = temp;
    cell.addEventListener("click", function() {
        if (temp === nextCellToOpen) {
            let randomIndex = Math.floor(Math.random() * items.length);
            let p = document.createElement("p");
            p.innerText = items[randomIndex];
            this.textContent = '';
            this.appendChild(p);
            nextCellToOpen++;
        }
    });
}