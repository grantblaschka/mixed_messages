const obliqueStrats = fs.readFileSync('oblique_strats.txt', 'utf8',);

const obliqueMashUp = () => {
    
    let searchReg = /\*/gi
    const branchPointsReg = new RegExp("\\*| and | or | at | an | your| a | into | are | in | of | if ", 'gi')
    const outPutArray = []

    for (i = 0; i <= 2; i++) {
        let startingPoints = []

        while ( (result = searchReg.exec(obliqueStrats)) ) {
        startingPoints.push(result.index + 1);
        }
        let rndmIndex = Math.floor(Math.random() * (startingPoints.length - 1))
        let newSlice = obliqueStrats.slice(startingPoints[rndmIndex]) // Slices the file at a random starting point, pulled from starting points array
        let branchIndex = newSlice.search(branchPointsReg) //finds the next matching branch point and stores it as a variable
        let branchElement = newSlice.match(branchPointsReg)[0]
        let appendElement = ' '
        if (branchElement === '*') {
            branchElement = "\\*"
            appendElement = '. '
        }
        outPutArray.push(newSlice.slice(0, branchIndex) + appendElement)
        searchReg = new RegExp(branchElement, 'gi')
        startingPoints = []
    }

    return outPutArray.join('')
}


console.log(obliqueMashUp())


