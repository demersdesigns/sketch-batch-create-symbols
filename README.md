![alt="Sketch Batch Create Symbols"](https://raw.githubusercontent.com/demersdesigns/sketch-batch-create-symbols/gh-pages/logo.png)

[![Download from Sketchpacks.com](https://badges.sketchpacks.com/plugins/com.example.sketch.batch-create-symbols/version.svg)](https://api.sketchpacks.com/v1/plugins/com.example.sketch.batch-create-symbols/download) [![Compatible Sketch Version](https://badges.sketchpacks.com/plugins/com.example.sketch.batch-create-symbols/compatibility.svg)](https://sketchpacks.com/demersdesigns/sketch-batch-symbols)

# Overview

In Sketch, when you have a bunch of layers that need to be converted to symbols
you have to select them one by one and use the 'Convert to Symbol' function. Multiple
selections will be merged into one symbol.

This plug-in will create a symbol for every item that is currently selected.
This is really handy when you need to convert a bunch of layers to symbols.

# Usage

Select the shapes, layers, images, or groups that you want to convert into symbols. Then from the Plugins menu,
choose 'Batch Create Symbols' and pick one of the options.

**Use Layer Names** will create symbols and use the existing layer names.

**Use Custom Names** option will allow you to add your own name that the newly created symbols will use.

This works by taking the name you enter into the input and adding a number after it for each symbol to be created.

For example, if you have three layers, and you enter 'portfolio' as the custom name, each symbol will be named portfolio-1, portfolio-2, and portfolio-3.

**Use Custom Prefix** option will allow you to add a prefix to the exsiting layer names followed by a dash (-)

**Use Custom Folders** allows you to create symbols within a folder structure.

If you select a layer or multiple layers and choose Custom Folders, you can enter in a series of names separated by slashes to create a series of nested folders in the insert symbols menu.

For example, entering iOS/3x/assets/ would create iOS>3x>assets>symbol-names.

**Please note: you must have a trailing slash at the end of your folder structure for this to work properly.**

<img src="https://raw.githubusercontent.com/demersdesigns/sketch-batch-create-symbols/gh-pages/demo.gif" />

# Manual Installation

1. Download from [Github](https://github.com/demersdesigns/sketch-batch-create-symbols/archive/master.zip)
2. Unzip
3. Locate and double-click on the `BatchCreateSymbols.sketchplugin` file
4. When Sketch alerts you that the plugin has successfully been installed, you are ready to go!

[![Install Sketch Batch Create Symbols with Sketchpacks](http://sketchpacks-com.s3.amazonaws.com/assets/badges/sketchpacks-badge-install.png 'Install Sketch Batch Create Symbols with Sketchpacks')](https://sketchpacks.com/demersdesigns/sketch-batch-create-symbols/install)

# Changelog

v 2.0 - Updates to support Sketch 66. Adds custom prefix option. Thanks [clemens-schulz](clemens-schulz) & [michelve](https://github.com/michelve)!

v 1.1 - Add Use Custom Folders option. Thanks [PsyGik](https://github.com/PsyGik)!

v 1.0 - Initial release.

# License

Licensed under MIT.
