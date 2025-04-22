const Post = require('../models/postModel');

exports.getAll = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const post = await Post.getPostById(req.params.id);
    post ? res.json(post) : res.status(404).json({ error: 'Post non trouvé' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.create = async (req, res) => {
  try {
    const [newPost] = await Post.createPost(req.body);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.update = async (req, res) => {
  try {
    const [updatedPost] = await Post.updatePost(req.params.id, req.body);
    updatedPost ? res.json(updatedPost) : res.status(404).json({ error: 'Post non trouvé' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Post.deletePost(req.params.id);
    deleted ? res.status(204).end() : res.status(404).json({ error: 'Post non trouvé' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
};
