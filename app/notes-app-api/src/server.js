import express from 'express';
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/notes", async (req, res) => {
    const notes = await prisma.note.findMany();
    res.json(notes);
});

app.post("/notes", async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    try {
        const note = await prisma.note.create({
            data: {title, content},
        });
        res.json(note);
    } catch (e) {
        res.status(500).json({ error: "An error occurred while creating the note" });
    }
});

app.put("/notes/:id", async (req, res) => {
    const {title, content} = req.body;
    const id = parseInt(req.params.id);

    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    try {
        const updatedNote = await prisma.note.update({
            where: { id },
            data: { title, content },
        });
        res.json(updatedNote);
    } catch (e) {
        res.status(500).json({ error: "An error occurred while updating the note" });
    }
});

app.delete("/notes/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    try {
        await prisma.note.delete({
            where: { id },
        });

        res.status(204).send();
    } catch (e) {
        res.status(500).json({ error: "An error occurred while deleting the note" });
    }
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});