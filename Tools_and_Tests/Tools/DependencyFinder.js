/**DependencyFinder.js
 * Created by Robin Brossard
 * Version 1.0
 * Date Created: 5/26/17
 * Takes a target directory as a commandline argument.
 * Looks through the directory and all subdirectories for .js files
 * It looks through the .js files for libraries being used and tallies them up
 * It takes that tally and puts it in a file called DependencyList.JSON
 */

const _ = require('lodash');
const readline = require('readline');
const fs = require('fs');

/* traversedir
* Walks recursively through the target directory and all sub directories,
*   calling readfile on each file with the extention: ".js"
 */
function traversedir(dir) {
    console.log('reading directory: ' + dir);
    fs.readdir(dir, (err, files) => {
        console.log('files found: ' + files);
        if (!err && files.length > 0) {
            console.log('scanning for js files');
            let scripts = files.filter((file) => {
                return file.endsWith('.js');
            });
            console.log('scanning for subdirectories, excluding nod_modules');
            let subdirs = files.filter((file) => {
                return (fs.statSync(dir + '/' + file).isDirectory()) &&
                    (file != 'node_modules');
            });
            console.log('.js files found: ' + scripts);
            console.log('subdirs found: ' + subdirs);
            for (let i = 0; i < subdirs.length; i++) {
                //console.log('iloop ' + i);
                traversedir(dir + '/' + subdirs[i]);
            }
            for (let j = 0; j < scripts.length; j++) {
                //console.log('jloop ' + j);
                readfile(dir + '/' + scripts[j]);
            }
        } else {
            console.log('directory is either empty or not a directory ' + err);
        }
    });
}

/* readfile
* Reads from the file calling extractrequire on each line.
*/
function readfile(file) {
    let rl = readline.createInterface({
        input: fs.createReadStream(file)
    });
    rl.on('line', (line) => {
        //console.log(line);
        extractrequire(line)
    });
    rl.on('close', () => {
        return
    });
}

/* extractrequire
* Analyses a string to see if it is a line of code that imports a library
*   then passes the name of that library to the tally function.
*/
function extractrequire(string) {
    let parseArray = string.split(' ');
    //console.log(parseArray);
    if ((parseArray[0] == 'let' || parseArray[0] == 'const') && parseArray[2] == '=' && parseArray[3].startsWith("require(")) {
        let reqArray = parseArray[3].split('(');
        reqArray = reqArray.slice(1, reqArray.length);
        reqArray.forEach((req) => {
            let firstquote = req.search('"');
            if (firstquote == -1) firstquote = req.search("'");
            firstquote++;
            let secondquote = firstquote;
            while (req[secondquote] != "'" && req[secondquote] != '"' && secondquote < req.length) {
                secondquote++;
            }
            if (firstquote != secondquote && req.search('./') == -1) {
                req = req.slice(firstquote,secondquote);
                tally(req);
            }
        });
    }
}

/* tally
 * takes the name of a library passed to it and increments its value in
*   the list, if it was not in the list it adds it to the list and sets its
*   value to 1.
*/
function tally(string) {
    console.log('found a library: ' + string);
    let myJSON = fs.readFileSync(process.argv[2] + '/DependencyList.JSON', 'utf8')
    let myObject = JSON.parse(myJSON);
    try {
        if (myObject[string] != null) {
            myObject[string] = myObject[string] + 1;
        }
        else {
            throw ("notfound");
        }
    } catch (err) {
        myObject[string] = 1;
    }
    //console.log('writing back: ' + JSON.stringify(myObject, null, '\t'));
    fs.writeFileSync(process.argv[2] + '/DependencyList.JSON', JSON.stringify(myObject, null, '\t'));
}

if (process.argv.length != 3) {
    console.log("please provide a directory.");
} else {
    fs.writeFileSync(process.argv[2] + '/DependencyList.JSON', '{ }');
    //console.log("starting the recursive function");
    traversedir(process.argv[2]);
}