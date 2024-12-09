
import { UserList, UserScore } from "@/app/models/UserScore"
import { connectMongoDb } from "@/app/server"
import { NextResponse } from "next/server"


export async function GET(){
   await connectMongoDb()
    try {
     const responseData = await UserList.find()

     if(!responseData){
        return NextResponse.json({message:'Finns ingen data'},{status:404})
     }


     return NextResponse.json({message:'Lyckades hämta data',responseData},{status:200})

    } catch (error) {
        return NextResponse.json({ error: "Serverfel" }, { status: 500 });
    }
}

export async function POST(req){
  await connectMongoDb()
    try {
        
        const { checkbox1, checkbox2, input3, input4, input5, input6, input7, input8, input9, input10, input11, result, name } = await req.json();

        console.log(checkbox1, checkbox2, input3, input4, input5, input6, input7, input8, input9, input10, input11, result, name)

        if (
            checkbox1 === undefined || checkbox2 === undefined ||
            input3 === undefined || input4 === undefined || input5 === undefined ||
            input6 === undefined || input7 === undefined || input8 === undefined ||
            input9 === undefined || input10 === undefined || input11 === undefined ||
            result === undefined || name === undefined
        ) {
            return NextResponse.json({ message: 'Fyll i korrekt fält' }, { status: 400 });
        }

        const newScore = await UserScore.create({checkbox1,checkbox2,input3,input4,input5,input6,
            input7,input8,input9,input10,input11,result,name})    

        let userList = await UserList.findOne()

        if (!userList) {
            userList = new UserList({
              scores: []
            });
          }

            userList.scores.push(newScore);
            await userList.save();    
            console.log(userList.scores)


            return NextResponse.json({message:'Lyckades ladda upp',newScore},{status:201})

    } catch (error) {
        return NextResponse.json({ error: "Serverfel" }, { status: 500 });
    }
}

export async function DELETE(req){
   await connectMongoDb()
    try {
        const {id} = await req.json()
        console.log(id)
        if(!id){
            return NextResponse.json({message:'Behöver ett id'},{status:400})
        }

        const findAndDelete = await UserScore.findByIdAndDelete({_id:id})

        if(!findAndDelete){
            return NextResponse.json({message:`Hittade inte något med den ${id}`},{status:404})
        }

        const listId = '6756e230f87ddd7f4defd80d'
        await UserList.findByIdAndUpdate(listId,{$pull:{scores:{_id:id}}})

        return NextResponse.json({message:'Objektet bort taget'},{status:200})

    } catch (error) {
        return NextResponse.json({ error: "Serverfel" }, { status: 500 }); 
    }
}