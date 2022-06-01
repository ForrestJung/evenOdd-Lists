// Variables
let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

// Functions
const updateWord = (element) => {
    usersWord = element.value

    console.log(usersWord)
  }

const handleSubmit = () => {
    let newListItem = document.createElement('li')
    newListItem.innerText = usersWord

    if (usersWord.length % 2 === 0) {
        /*put word in even lists*/
        evenList.appendChild(newListItem)
    }  
    else {
        /*put word in odd list*/
        oddList.appendChild(newListItem)
    }

    usersWord = ""
    document.getElementById("even-odd-form").reset()
  }

//   function isEven(n) {
//     return n % 2 == 0;
//     }
//     function isOdd(n) {
//     return Math. abs(n % 2) == 1;
//     }
