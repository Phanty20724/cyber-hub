import type { Express } from "express";
import { createServer, type Server } from "http";
import { pool, initializeDatabase } from "./db";

const ADMIN_PASSWORD = "admin4ch";

function requireAdmin(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${ADMIN_PASSWORD}`) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

export async function registerRoutes(app: Express): Promise<Server> {
  await initializeDatabase();

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  app.post("/api/admin/login", (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
      res.json({ success: true, token: ADMIN_PASSWORD });
    } else {
      res.status(401).json({ success: false, message: "Invalid password" });
    }
  });

  app.get("/api/events", async (_req, res) => {
    try {
      const { rows } = await pool.query("SELECT * FROM events ORDER BY id DESC");
      res.json(rows);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.get("/api/events/:id", async (req, res) => {
    try {
      const { rows } = await pool.query("SELECT * FROM events WHERE id = $1", [req.params.id]);
      if (rows.length === 0) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch event" });
    }
  });

  app.post("/api/events", requireAdmin, async (req, res) => {
    try {
      const { title, date, time, location, attendees, description, type, status, featured } = req.body;
      const { rows } = await pool.query(
        `INSERT INTO events (title, date, time, location, attendees, description, type, status, featured) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [title, date, time, location, attendees, description, type || 'Workshop', status || 'upcoming', featured || false]
      );
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ message: "Failed to create event" });
    }
  });

  app.put("/api/events/:id", requireAdmin, async (req, res) => {
    try {
      const { title, date, time, location, attendees, description, type, status, featured } = req.body;
      const { rows } = await pool.query(
        `UPDATE events SET title = $1, date = $2, time = $3, location = $4, attendees = $5, 
         description = $6, type = $7, status = $8, featured = $9 WHERE id = $10 RETURNING *`,
        [title, date, time, location, attendees, description, type, status, featured, req.params.id]
      );
      if (rows.length === 0) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ message: "Failed to update event" });
    }
  });

  app.delete("/api/events/:id", requireAdmin, async (req, res) => {
    try {
      const { rowCount } = await pool.query("DELETE FROM events WHERE id = $1", [req.params.id]);
      if (rowCount === 0) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.json({ message: "Event deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete event" });
    }
  });

  app.get("/api/projects", async (_req, res) => {
    try {
      const { rows } = await pool.query("SELECT * FROM projects ORDER BY id DESC");
      res.json(rows);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const { rows } = await pool.query("SELECT * FROM projects WHERE id = $1", [req.params.id]);
      if (rows.length === 0) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });

  app.post("/api/projects", requireAdmin, async (req, res) => {
    try {
      const { title, description, tech, stars, forks, featured, category, github_url, demo_url } = req.body;
      const techArray = Array.isArray(tech) ? tech : (tech ? tech.split(',').map((t: string) => t.trim()) : []);
      const { rows } = await pool.query(
        `INSERT INTO projects (title, description, tech, stars, forks, featured, category, github_url, demo_url) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [title, description, techArray, stars || 0, forks || 0, featured || false, category || 'Web Dev', github_url, demo_url]
      );
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ message: "Failed to create project" });
    }
  });

  app.put("/api/projects/:id", requireAdmin, async (req, res) => {
    try {
      const { title, description, tech, stars, forks, featured, category, github_url, demo_url } = req.body;
      const techArray = Array.isArray(tech) ? tech : (tech ? tech.split(',').map((t: string) => t.trim()) : []);
      const { rows } = await pool.query(
        `UPDATE projects SET title = $1, description = $2, tech = $3, stars = $4, forks = $5, 
         featured = $6, category = $7, github_url = $8, demo_url = $9 WHERE id = $10 RETURNING *`,
        [title, description, techArray, stars, forks, featured, category, github_url, demo_url, req.params.id]
      );
      if (rows.length === 0) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ message: "Failed to update project" });
    }
  });

  app.delete("/api/projects/:id", requireAdmin, async (req, res) => {
    try {
      const { rowCount } = await pool.query("DELETE FROM projects WHERE id = $1", [req.params.id]);
      if (rowCount === 0) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json({ message: "Project deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete project" });
    }
  });

  // Applications routes
  app.post("/api/applications", async (req, res) => {
    try {
      const { name, email, track, experience, motivation } = req.body;
      const { rows } = await pool.query(
        `INSERT INTO applications (name, email, track, experience, motivation) 
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [name, email, track, experience, motivation]
      );
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ message: "Failed to submit application" });
    }
  });

  app.get("/api/applications", requireAdmin, async (_req, res) => {
    try {
      const { rows } = await pool.query("SELECT * FROM applications ORDER BY created_at DESC");
      res.json(rows);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch applications" });
    }
  });

  app.put("/api/applications/:id", requireAdmin, async (req, res) => {
    try {
      const { status } = req.body;
      const { rows } = await pool.query(
        `UPDATE applications SET status = $1 WHERE id = $2 RETURNING *`,
        [status, req.params.id]
      );
      if (rows.length === 0) {
        return res.status(404).json({ message: "Application not found" });
      }
      res.json(rows[0]);
    } catch (error) {
      res.status(500).json({ message: "Failed to update application" });
    }
  });

  app.delete("/api/applications/:id", requireAdmin, async (req, res) => {
    try {
      const { rowCount } = await pool.query("DELETE FROM applications WHERE id = $1", [req.params.id]);
      if (rowCount === 0) {
        return res.status(404).json({ message: "Application not found" });
      }
      res.json({ message: "Application deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete application" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
