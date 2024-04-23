import axios from "axios";
import { NextResponse } from "next/server";
import { PublicationsProps } from "@/components/Publications";

const { XMLParser, XMLBuilder, XMLValidator} = require("fast-xml-parser");
const cheerio = require('cheerio');

export async function GET() {
    try {
        const response = await axios.get('https://medium.com/feed/@nawfel_bc');
        const XMLdata = await response.data;

        const parser = new XMLParser();
        const jObj = parser.parse(XMLdata);
        
        const publications = jObj.rss.channel.item
        
        const updatedPublications = await Promise.all(publications.map(async (publication:PublicationsProps) => {
            const pub_url = publication.link;
            const response = await axios.get(pub_url);
            const htmlString = await response.data;
            const $ = cheerio.load(htmlString);
            const thumbnail = $('meta[property="og:image"]').attr('content');
            const description = $('meta[property="og:description"]').attr('content');
            
            return {
                ...publication,
                thumbnail: thumbnail,
                description: description,
            };
        }));
        
        return NextResponse.json(updatedPublications);
    } catch (error) {
        console.log("[PUBLICATIONS_ERROR]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}