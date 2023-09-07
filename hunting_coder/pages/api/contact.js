
import * as fs from "fs"

export default async function handler(req, res) {
    if (req.method === "POST") {
        let { name, phone, email, desc } = req.body;
        let userData = {
            name: name,
            phone: phone,
            email: email,
            description: desc
        }
        let fileNo = await fs.promises.readdir("contact_data");
        // HERE PROMISES IS OPTIONAL BUT ABOVE HAS TO BE WRITTEN
        fs.promises.writeFile(`contact_data/${fileNo.length + 1}.json`, JSON.stringify(userData), () => {
            console.log("Data written successfully!");
        })
        // res.status(200).send("Concern Has Been Sent ✅✅✅");
        res.status(200).json({ message: "Concern Has Been Sent ✅✅✅" });
    } else {
        res.status(500).send("Could Not Sent The Concern ❌❌❌");
    }
}
