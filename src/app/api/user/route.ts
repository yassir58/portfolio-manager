import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { z } from "zod";
import { requestSchema } from "../../../../constant";




export async function POST (req:Request){

    const bcrypt = await import('bcrypt');
    try {

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const body = await req.json ();
        
        const {email, password} = requestSchema.parse (body) ;
        const emailAlreadyExist = await db.user.findUnique ({
            where:{email:email}
        })
        
        if (emailAlreadyExist)
            return NextResponse.json ({user:null, message:'this email is already registered'}, {status:409})
        const hashedPassword =  await bcrypt.hash (password, 10);
        const newUser =  await db.user.create({
                data: {
                  email: email,
                  password: hashedPassword,
                },
              });
        return NextResponse.json ({user:newUser, message:'User created succesfully'}, {status:201})
    }catch (err:unknown){
        return NextResponse.json ({user:null, message:err}, {status:500})
    }
}