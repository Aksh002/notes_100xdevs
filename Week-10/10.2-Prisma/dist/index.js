"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// use `prisma` in your application to read and write data in your DB
// Just like importing mongoose lib 
// This prisma alr consists of prisma.user and prisma.todos
//                                                          INSERT
function insertUser(email, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName
            },
            // select:{
            //     id:true,
            //     password:true
            // }                        // This will make sure only id and password is returned to res variable
        });
        console.log(res);
    });
}
function updateUser(email_1, _a) {
    return __awaiter(this, arguments, void 0, function* (email, { firstName, lastName }) {
        const res = yield prisma.user.update({
            where: {
                email: email
            },
            data: {
                firstName,
                lastName
            } // Explore the " ctrl + Click-on-user.update" file and figure out such params for the fxn calss, or just google
        });
        console.log(res);
    });
}
// updateUser("akshit@gmail.com",{
//     firstName:"ak",
//     lastName:"gg"
// })
//                                                                  GET
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findMany({
            where: {
                email: email
            },
            select: {
                email: true,
                firstName: true,
                lastName: true
            }
        });
        console.log(res);
    });
}
// getUser("akshit@gmail.com")
//                                                                      Get After relation
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todos.findMany({
            where: {
                userId: userId
            }
        });
        console.log(res);
    });
}
getTodos(1);
