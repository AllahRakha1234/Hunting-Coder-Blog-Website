
import * as fs from "fs"


export default async function handler(req, res) {
    let allblogs = [];
    let myfile;
    let data = await fs.promises.readdir("blogsdata");
    data = data.slice(0, req.query.count);
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        myfile = await fs.promises.readFile('blogsdata/' + element, 'utf-8');
        allblogs.push(JSON.parse(myfile));
    }
    // data.forEach(async (item) => {
    //     myfile = await fs.promises.readFile('blogsdata/' + item, 'utf-8');
    //     allblogs.push(JSON.parse(myfile));
    //     console.log(myfile);
    // })
    res.status(200).json(allblogs);

}
