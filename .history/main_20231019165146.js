// C is for Cookies
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let y = 0; y > cookies.length; x++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

// Conjunction Function
const conjunction = function (firstWord, secondWord) {
  const conjoinedWord = `${firstWord} ${secondWord}`
}

conjunction("Master", "Card")
console.log(conjoinedWord)

// Mod Squad
{
  const modSquad = {
      "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
      "series": {
          "start": "1968",
          "end": "1973"
      }
  }

  const HTMLRepresentation = `<h1>The Mod Squad</h1>`

  modSquad.members.forEach(member => {
      const HTMLRepresentation += `<div>${member}</div>`
  })
}

console.log(HTMLRepresentation)

Simon Says
// 
