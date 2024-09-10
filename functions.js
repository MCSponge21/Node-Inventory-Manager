const test = require("./db");

var idCount = 12;

function addComponent(identifier, comp){
    comp.id = idCount;
    idCount++;
    for(var i = 0; i < test.length; i++){
        if(test[i].component == identifier){
            test[i].components.push(comp);
        };
    };
    console.log(comp);
};

function editComponent(identifier, object){
    const oldObject = getObject(identifier);
    object.id = oldObject.id;
    for(var i =0; i < test.length; i++){
        for(var j = 0; j < test[i].components.length; j++){
            if(test[i].components[j].id == identifier){
                test[i].components[j] = object;
            }
        }
    }
    console.log(object);
}

function editCategory(name, desc, identifier){
    for(var i = 0; i < test.length; i++){
        if(test[i].component == identifier){
            test[i].component = name;
            test[i].description = desc;
            console.log(test[i]);
        }
    }
}

function createCategory(name, desc){
    test.push({
        "component": name,
        "description": desc,
        "components": []
    })
};

function getObject(identifier){
    for(var i =0; i < test.length; i++){
        for(var j = 0; j < test[i].components.length; j++){
            if(test[i].components[j].id == identifier){
                console.log(test[i].components[j]);
                return test[i].components[j];
            }
        }
    }
};

function deleteItem(identifier){
    for(var i =0; i < test.length; i++){
        for(var j = 0; j < test[i].components.length; j++){
            if(test[i].components[j].id == identifier){
                test[i].components.splice(j, 1);
            }
        }
    }
};

function deleteCategory(componentname){
    for(var i =0; i < test.length; i++){
        if(test[i].component == componentname){
            test.splice(i, 1);
        }
    }
}

function getObjectWithName(componentname){
    for(var i =0; i < test.length; i++){
        if(test[i].component == componentname){
            return test[i];
        }
    }
}

function getComponentName(identifier){
    for(var i =0; i < test.length; i++){
        for(var j = 0; j < test[i].components.length; j++){
            if(test[i].components[j].id == identifier){
                console.log(test[i].component);
                return test[i].component;
            }
        }
    }
}

module.exports = {getComponentName, getObjectWithName, deleteCategory, deleteItem, getObject, createCategory, editCategory, addComponent, editComponent, idCount};