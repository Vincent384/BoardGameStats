import { UserList, UserScore } from "@/app/models/UserScore";
import { connectMongoDb } from "@/app/server";
import { NextResponse } from "next/server";


export async function GET(req){
    connectMongoDb()
    try {
        
        const url = new URL(req.url)
        const getId = url.searchParams.get('id')
        console.log(getId)

        const responseData = await UserScore.findById(getId)
        if(!responseData){
            return NextResponse.json({message:'Kunde inte hitta id'},{status:404})
        }

        return NextResponse.json({message:'Lyckades hitta id',responseData},{status:200})


    } catch (error) {
        
    }
}