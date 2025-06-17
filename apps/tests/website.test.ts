import { describe, test, expect, it } from "bun:test";
import axios from "axios"

let BASE_URL= "http://localhost:3000"
describe("Website gets created", () => {
    
    it("Website not created if url not present", ()=>{
        // try {
        //     await axios.post(`${BASE_URL}/website`,{
        //         url: "https://google.com"
        //     });
        //     expect(false,"Website created but it should'nt");
        // }
            
        //  catch (error) {
            
        // }
})

    it("Website is created if url is present", async ()=>{
        const response = await axios.post(`${BASE_URL}/website`,{
            url: "https://google.com"
        });
        expect(response.data.id).not.toBeNull();
    })

    });
