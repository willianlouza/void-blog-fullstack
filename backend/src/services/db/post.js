const prisma = require("../../config/prisma");

async function createPost(id, title, photo, content) {
    try {
        const post = await prisma.post.create({
            data: {
                title,
                photo,
                content,
                author: {
                    connect: {
                        id: id
                    }
                }
            },
        })
        return post;
    } catch (err) {
        console.log(err)
    }
}
async function getPostById(id) {
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: +id
            },
            include: {
                author: true
            }
        })
        return post;

    } catch (err) {
        console.log(err)
    }
}
async function getPostByAuthor(id) {
    try {
        const post = await prisma.post.findUnique({
            where: {
                authorId: id
            },
            include: {
                author: true
            }
        })
        return post;

    } catch (err) {
        console.log(err)
    }
}
async function editPost(id, title, photo, content) {
    try {
        const post = await prisma.post.update({
            where: {
                id: +id
            },
            data: {
                title,
                photo,
                content
            }
        })
        return post;
    } catch (err) {
        console.log(err)
    }
}
async function deletePost(id) {
    try {
        const post = await prisma.post.delete({
            where: {
                id: +id
            }
        })
        return post;
    } catch (err) {
        console.log(err);
    }
}
async function getOwnPosts(userId) {
    try {
        const posts = await prisma.post.findMany({
            where: {
                authorId: {
                    equals: userId
                }
            },
            include: {
                author: true
            },
        })
        return posts;
    } catch (err) {
        console.log(err);
    }
}
async function getAllPosts() {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: true
            }
        })
        return posts;
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    createPost,
    getPostById,
    getPostByAuthor,
    editPost,
    deletePost,
    getOwnPosts,
    getAllPosts
}