import { createTRPCRouter, protectedProcedure } from "../trpc";
import z from 'zod'

export const usersRouter = createTRPCRouter ({
    getUserById:protectedProcedure.input (z.object({
        id: z.string ()
    })).query (async ({ctx, input})=>{
        const response = await ctx.db.user.findUnique({
            where:{id:input.id},
        })
        return response;
    }),
    getUserByUsername:protectedProcedure.input (z.object({
        username:z.string ()
    })).query (async ({ctx, input})=>{
        const response = await ctx.db.user.findUnique({
            where:{username:input.username}
        })
        return response;
    }),
    updateProfile:protectedProcedure.input (z.object({
        id:z.string (),
        image:z.string (),
        username:z.string ()
    })).mutation (async ({ctx, input})=>{
        await ctx.db.user.update({
            where:{
                id: input.id
            },
            data:{
                image:input.image,
                username:input.username
            }
        })
    }),
    updateProfileSettings:protectedProcedure.input (z.object({
        id:z.string (),
        username:z.string (),
        name:z.string (),
        jobTitle:z.string (),
        bio:z.string (),
        image:z.string (),
    })).mutation (async ({ctx, input})=>{
        await ctx.db.user.update({
            where:{
                id: input.id
            },
            data:{
                name:input.name,
                username:input.username,    
                jobTitle:input.jobTitle,
                bio:input.bio,
                image:input.image,
            }
        })
    })
})