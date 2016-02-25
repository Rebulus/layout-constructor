# Layout constructor

Drag and drop interface to create a page layout

## Getting started

Just run commands in commandline tool and open `index.html` in a browser.

```
npm install && npm run build
```

## Run tests

```
npm install && npm test
```

## Data structure

```json
{
    "items": {
        "0": {
            "id": 0,
            "type": "container",
            "content": [1, 2, 3]
        },
        "1": {
            "id": 1,
            "parentId": 0,
            "type": "container",
            "content": [4]
        },
        "2": {
            "id": 2,
            "parentId": 0,
            "type": "leaf"
        },
        "3": {
            "id": 3,
            "parentId": 0,
            "type": "container",
            "content": []
        },
        "4": {
            "id": 4,
            "parentId": 1,
            "type": "leaf"
        }
    }
}
```
