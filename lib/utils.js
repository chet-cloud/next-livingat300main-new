
import axios from 'axios';
import fs from 'fs';
import path from 'path';

async function download(url,name){
    if(!fs.existsSync( name )){
        await axios({
            method: "get",
            url: url,
            responseType: "stream"
        }).then(function (response) {
            response.data.pipe(fs.createWriteStream(name));
            return name
        });
    }
}

async function filesList(dir){
    const files = await fs.promises.readdir(dir);
    return files;
}

function filesListSync(dir){
    const files = fs.readdirSync(dir);
    return files;
}

function dirClean(dir){
    for (const file of fs.readdirSync(dir)) {
        const f = path.join(dir, file)
        if(fs.lstatSync(f).isDirectory()){
            dirClean(f)
        }else{
            fs.unlinkSync(f);
        } 
    }
}

function fileMoveSync(from,to){
    fs.cpSync(from,to,{force:true});
    fs.unlinkSync(from);
}

async function getJSON(file){
    let f = await fs.promises.readFile(file,{encoding:'utf8', flag:'r'})
    return JSON.parse(f.toString('utf8'))
}

function getJSONSync(file){
    let f = fs.readFileSync(file)
    return JSON.parse(f.toString('utf8'))
}

async function saveJSON(file, jsonObject){
    await fs.promises.writeFile(file, JSON.stringify(jsonObject))
}

async function saveStringToFile(str,file){
    await fs.promises.writeFile(file, str)
}

const replaceLast = function(str, find, replace) {
    var index = str.lastIndexOf(find);
    if (index >= 0) {
        return str.substring(0, index) + replace + str.substring(index + find.length);
    }
    return str.toString();
};


 export {
    download,
    filesList,
    filesListSync,
    getJSON,
    getJSONSync,
    fileMoveSync,
    saveJSON,
    saveStringToFile,
    dirClean
};
