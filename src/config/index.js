import dotenv from 'dotenv';
import express from 'express';
import { BookReservations } from '../service/firebaseDB.js';
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "welcome my urban limos backend." });
});

app.post("/upload-reservations", async (req, res) => {
  try {
    const reservations = req.body;
    if (reservations && typeof reservations === "object") {
      const result = await BookReservations(reservations, res);
      return res.status(201).json({ message: "data uploaded to firebase", result });
    } else {
      return res.status(400).json({ message: "Invalid body — send JSON object" });
    }
  } catch (err) {
    console.error('handler error', err);
    return res.status(500).json({ message: "Server error", error: String(err) });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

/* Graceful handlers for debugging and clean shutdown */
process.on('uncaughtException', (err) => {
  console.error('uncaughtException', err);
  process.exit(1);
});
process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection', err);
});
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down');
  process.exit(0);
});
