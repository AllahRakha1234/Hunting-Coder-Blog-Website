
import * as fs from "fs"

export default function handler(req, res) {
    const slug = req.query.slug;
    fs.readFile(`blogsdata/${slug}.json`, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ message: "Blog Not Founded!" })
        }
        else {
            // res.status(200).json({ name: JSON.parse(data) }); // GENERATED ERROR INITIALLY
            res.status(200).send(JSON.parse(data));
        }
    });
}
