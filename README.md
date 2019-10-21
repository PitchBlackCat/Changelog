# Project Update Guide

This project aims to help display a list of changes and upgrade notes between versions of an application.  
It was inspired by the [Angular Update Guide](https://update.angular.io/)

Demo:  https://changelog-demo.herokuapp.com/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.  
The app will automatically reload if you change any of the source files.

## Usage

Fork this repository and change `assets/instructions.json` to suit your project.

`assets/instructions.json` is structured as follows:
```
export interface VersionJson {
  name: string;
  versions: Instructions;
}

export interface Instructions {
  [version: string]: {
    instructions: Instruction[];
  };
}

export interface Instruction {
  type: string;
  title?: string;
  description: string;
}
```

## Examples

A valid `assets/changelog.json` looks like this:
```
{
  "name": "Project X",
  "versions": {
    "1.0": {
      "instructions": []
    },
    "1.1": {
      "instructions": [
        {
          "type": "info",
          "description": "Added new function `getDimensions(): {w: number, h: number}` to `SquareComponent`\n\nThis will allow you to do some pretty cool stuff!\n\nMake sure to check it out!"
        }
      ]
    },
    "2.0": {
      "instructions": [
        {
          "type": "light",
          "title": "Officer barbrady here!",
          "description": "Nothing to see here, move along.."
        }
      ]
    },
    "2.1": {
      "instructions": [
        {
          "type": "warning",
          "description": "We recommend you remove `rxjs-compat`"
        },
        {
          "type": "danger",
          "description": "Change `import 'hello'` into `import 'world'`!"
        }
      ]
    }
  }
}


```


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
