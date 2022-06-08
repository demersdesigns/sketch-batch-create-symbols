import sketch from 'sketch'

const generateSelections = context => {
  const selection = context.selection,
    selections = Array.from(context.selection)

  return selections
}

const selectionCheck = selections => {
  if (selections.length === 0) {
    sketch.UI.message('Please choose a layer or artboard.')
    return false
  }
  return true
}

const inputCheck = input => {
  if (input.length === 0) {
    sketch.UI.message('Please enter some text.')
    return false
  }
  return true
}

const createSymbols = function (context) {
  const selections = generateSelections(context)
  if (selectionCheck(selections)) {
    selections.map(selection => {
      const symbols = [selection]
      let symbolName = selection.name()
      MSSymbolCreator.createSymbolFromLayers_withName_onSymbolsPage(
        symbols,
        symbolName,
        true
      )
    })
  }
}

const createSymbolsCustomName = async context => {
  const selections = generateSelections(context)
  if (selectionCheck(selections)) {
    const getCustomName = () => {
      return new Promise((resolve, reject) => {
        sketch.UI.getInputFromUser(
          'Enter a custom name:',
          {
            initialValue: ''
          },
          (err, val) => {
            if (err) reject(err)
            resolve(val)
          }
        )
      })
    }
    var userEntry = await getCustomName()
    if (inputCheck(userEntry)) {
      selections.map((selection, idx) => {
        idx++
        const symbols = [selection]
        console.log
        let symbolName = userEntry + '-' + idx
        var createSymbol = MSSymbolCreator.createSymbolFromLayers_withName_onSymbolsPage(
          symbols,
          symbolName,
          true
        )
      })
    }
  }
}

const createSymbolsCustomPrefix = async context => {
  const selections = generateSelections(context)
  if (selectionCheck(selections)) {
    const getCustomPrefix = () => {
      return new Promise((resolve, reject) => {
        sketch.UI.getInputFromUser(
          'Enter a prefix:',
          {
            initialValue: ''
          },
          (err, val) => {
            if (err) reject(err)
            resolve(val)
          }
        )
      })
    }
    var userEntry = await getCustomPrefix()
    if (inputCheck(userEntry)) {
      selections.map((selection, idx) => {
        idx++
        const symbols = [selection]
        console.log
        let symbolName = userEntry + '-' + selection.name()
        var createSymbol = MSSymbolCreator.createSymbolFromLayers_withName_onSymbolsPage(
          symbols,
          symbolName,
          true
        )
      })
    }
  }
}

const createSymbolsCustomFolder = async context => {
  const selections = generateSelections(context)
  if (selectionCheck(selections)) {
    const getCustomFolder = () => {
      return new Promise((resolve, reject) => {
        sketch.UI.getInputFromUser(
          'Enter a custom folder structure:',
          {
            initialValue: ''
          },
          (err, val) => {
            if (err) reject(err)
            resolve(val)
          }
        )
      })
    }
    var userEntry = await getCustomFolder()
    if (inputCheck(userEntry)) {
      selections.map((selection, idx) => {
        const slashCheck = /^(?!^\/[a-z]{2}\/$).*\/$/
        const symbols = [selection]

        if (slashCheck.exec(userEntry) !== null) {
          var folderName = userEntry
        } else {
          sketch.UI.message('Please be sure your entry ends with a slash (/).')
          return
        }

        selections.map((selection, idx) => {
          const symbols = [selection]
          let symbolName = folderName + selection.name()

          MSSymbolCreator.createSymbolFromLayers_withName_onSymbolsPage(
            symbols,
            symbolName,
            true
          )
        })
      })
    }
  }
}

export {
  createSymbols,
  createSymbolsCustomName,
  createSymbolsCustomPrefix,
  createSymbolsCustomFolder
}