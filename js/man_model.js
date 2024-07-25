const manufactures = []
manufactures.push({
    name: 'DJI',

    models: [{
        name: 'DJI Agras MG-1',
    }, {
        name: 'DJI Agras T10'
    }, {
        name: 'DJI Air 2S'
    }]
}, {
    name: 'SenseFly',

    models: [{
        name: 'SenseFly Albris',
    }, {
        name: 'SenseFly Ebee Classic'
    }, {
        name: 'SenseFly Ebee Plus'
    }, {
        name: 'SenseFly Ebee Plus RTK'
    }, {
        name: 'SenseFly Ebee SQ'
    }, {
        name: 'SenseFly Ebee X'
    }]
})

const node = {
    manufacture: document.getElementById('def_manufacture'),
    model: document.getElementById('def_model'),
}

let selected = {
    manufacture: undefined,
    model: undefined,
}

manufactures.forEach(item => appendOptionNode(node.manufacture, item.name));

node.manufacture.addEventListener('change', event => {
    clearSelectOptions('model');
    selected.manufacture = manufactures.find(item => (item.name === event.target.value));
    if (selected.manufacture) {
        selected.manufacture.models.forEach(item => appendOptionNode(node.model, item.name));
    }
});

node.model.addEventListener('change', event => {
    if (selected.manufacture) {
        selected.model = selected.manufacture.models.find(item => (item.name === event.target.value));
    }
});

function clearSelectOptions(parentId) {
    const parentNode = node[parentId];

    while (parentNode.childElementCount > 1) {
        parentNode.removeChild(parentNode.lastChild);
    }

    selected[parentId] = undefined;
}

function appendOptionNode(parent, value, text) {
    const optionNode = document.createElement('option');
    optionNode.setAttribute('value', value);
    optionNode.innerText = value;
    parent.appendChild(optionNode);
}