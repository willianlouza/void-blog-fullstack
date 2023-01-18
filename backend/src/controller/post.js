
const { createPost, getPostById, editPost, deletePost, getOwnPosts, getAllPosts } = require('../services/db/post')

async function CreateNewPost(req, res) {
    const id = req.uid;
    const { title, photo, content } = req.body
    try {
        const post = await createPost(id, title, photo, content)
        return res.status(201).json({ post })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
async function GetPostById(req, res) {
    const { id } = req.params
    try {
        const post = await getPostById(id);
        return res.status(200).json({ ['post']: transformedPostData(post) })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
async function EditPost(req, res) {
    const id = req.params.id;
    const { title, photo, content } = req.body
    try {
        const post = await editPost(id, title, photo, content)
        return res.status(201).json({ post })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
async function DeletePost(req, res) {
    const { id } = req.params;
    try {
        const post = await deletePost(id)
        return res.status(200).json({ post })

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
async function GetOwnPosts(req, res) {
    const id = req.uid;
    try {
        const posts = await getOwnPosts(id);
        return res.status(200).json({ posts })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
async function GetAllPosts(req, res) {
    try {
        const posts = await getAllPosts();
        return res.status(200).json({ posts })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

}

function transformedPostData(post) {
    return {
        id: post.id,
        title: post.title,
        photo: post.photo,
        content: post.content,
        author: {
            id: post.author.id,
            fullName: post.author.fullName,
            photo: post.author.photo

        }
    }
}

module.exports = {
    CreateNewPost,
    GetPostById,
    EditPost,
    DeletePost,
    GetOwnPosts,
    GetAllPosts
}