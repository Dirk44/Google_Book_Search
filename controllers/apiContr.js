const axios = require("axios").default;
const mongoose = require("mongoose");
const { Books } = require("../models");

module.exports = {
    apiGet: async function(req, res) {
        try {
            const books = await Books.find({});
            if(books) {
                res.status(200).json(books);
            } else {
                res.status(404).json({ message: "Did not find any books." });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    apiPost: async function(req, res) {
        try {
            const book = req.body;
            const saveBook = await Books.create(book);
            if(saveBook) {
                res.status(200).json(saveBook);
            } else {
                res.status(404).json({ message: "Did not save book." });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    apiDelete: async function(req, res) {
        try {
            const book = req.params.id;
            const deletedBook = await Books.deleteOne({ _id: book });
            if(deletedBook) {
                res.status(200).json(deletedBook);
            } else {
                res.status(404).json({ message: "Did not delete book." });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
}