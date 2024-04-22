import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import z from 'zod'

export const usersRouter = createTRPCRouter ({
    getUserById:publicProcedure.input (z.object({
        id: z.string ()
    })).query (async ({ctx, input})=>{
        const response = await ctx.db.user.findUnique({
            where:{id:input.id},
        })
        return response;
    }),
    getUserByUsername:publicProcedure.input (z.object({
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
    }),
    createProject:protectedProcedure.input (z.object({
        name:z.string (),
        description:z.string (),
        image:z.string (),
        userId:z.string (),
        repoUrl:z.string (),
        demoUrl:z.string (),
        
    })).mutation (async ({ctx, input})=>{

        await ctx.db.project.create({
            data:{
                name:input.name,
                description:input.description,
                image:input.image,
                userId:input.userId,
                repoUrl:input.repoUrl,
                demoUrl:input.demoUrl,
            }
        
        })
       
    }),
    getProjects:publicProcedure.input(z.object ({
        id:z.string ()
    })).query (async ({ctx, input})=>{
        const response = await ctx.db.project.findMany({
            where:{
                userId:input.id
            }
        })
        return response;
    }),
    upateProject:protectedProcedure.input (z.object({
        id:z.string (),
        name:z.string (),
        description:z.string (),
        image:z.string (),
        repoUrl:z.string (),
        demoUrl:z.string (),
    })).mutation (async ({ctx, input})=>{
        await ctx.db.project.update({
            where:{
                id:input.id
            },
            data:{
                name:input.name,
                description:input.description,
                image:input.image,
                repoUrl:input.repoUrl,
                demoUrl:input.demoUrl,
            }
        })
    }),
})