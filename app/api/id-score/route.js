import { UserList, UserScore } from "@/app/models/UserScore";
import { connectMongoDb } from "@/app/server";
import { NextResponse } from "next/server";


export async function GET(req){
    connectMongoDb()
    try {
        
        const url = new URL(req.url)
        const id = url.searchParams.get(id)

        const getOne = await UserList.findById({scores:id})
        console.log(getOne)
        if(!getOne){
            return NextResponse.json({message:'Kunde inte hitta id'},{status:404})
        }

        return NextResponse.json({message:'Lyckades hitta id',id},{status:200})


    } catch (error) {
        
    }
}