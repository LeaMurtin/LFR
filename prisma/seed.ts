import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();

async function seed(){
    await prisma.user.createMany({
        data: [
            {
                loginDiscord: "login3",
                displayName: "pseudo3",
                email: "user3@example.com"},
            
        ],
    });
}

seed().then(() => prisma.$disconnect());