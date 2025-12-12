import pg from 'pg';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function initializeDatabase() {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date VARCHAR(100) NOT NULL,
        time VARCHAR(100),
        location VARCHAR(255),
        attendees VARCHAR(50),
        description TEXT,
        type VARCHAR(50) DEFAULT 'Workshop',
        status VARCHAR(20) DEFAULT 'upcoming',
        featured BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        tech TEXT[],
        stars INTEGER DEFAULT 0,
        forks INTEGER DEFAULT 0,
        featured BOOLEAN DEFAULT false,
        category VARCHAR(50) DEFAULT 'Web Dev',
        github_url VARCHAR(500),
        demo_url VARCHAR(500),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    const { rows } = await client.query('SELECT COUNT(*) FROM events');
    if (parseInt(rows[0].count) === 0) {
      await client.query(`
        INSERT INTO events (title, date, time, location, attendees, description, type, status, featured) VALUES
        ('SCPSC CODE JAM 2025', 'Jan 15-17, 2025', '48 Hours', 'SCPSC Campus', '100+', 'Our flagship coding competition. Build, innovate, and compete for exciting prizes.', 'Competition', 'upcoming', true),
        ('WEB DEV WORKSHOP: React Fundamentals', 'Jan 22, 2025', '10:00 AM - 4:00 PM', 'Tech Lab', '50', 'Learn React from scratch and build your first interactive web application.', 'Workshop', 'upcoming', false),
        ('AI/ML BOOTCAMP', 'Feb 01, 2025', 'Full Day', 'Online', '80+', 'Hands-on machine learning bootcamp covering Python, TensorFlow, and real-world projects.', 'Workshop', 'upcoming', false),
        ('GRAPHICS DESIGN MASTERCLASS', 'Feb 10, 2025', '2:00 PM - 6:00 PM', 'Design Studio', '40', 'Master Adobe Photoshop and Illustrator with industry-standard design techniques.', 'Workshop', 'upcoming', false),
        ('Video Editing Workshop', 'Dec 2024', NULL, NULL, '45', 'Learn professional video editing techniques.', 'Workshop', 'archive', false),
        ('Competitive Programming 101', 'Nov 2024', NULL, NULL, '60', 'Introduction to competitive programming.', 'Workshop', 'archive', false),
        ('Web Development Bootcamp', 'Oct 2024', NULL, NULL, '55', 'Full-stack web development bootcamp.', 'Workshop', 'archive', false),
        ('AI/ML Introduction', 'Sep 2024', NULL, NULL, '50', 'Getting started with AI and Machine Learning.', 'Workshop', 'archive', false)
      `);
    }

    const { rows: projectRows } = await client.query('SELECT COUNT(*) FROM projects');
    if (parseInt(projectRows[0].count) === 0) {
      await client.query(`
        INSERT INTO projects (title, description, tech, stars, forks, featured, category, github_url, demo_url) VALUES
        ('SCPSC Portal', 'Official college portal built by Cyber Hub members featuring student management, event registration, and resource sharing.', ARRAY['React', 'Node.js', 'MongoDB', 'TailwindCSS'], 45, 12, true, 'Web Dev', 'https://github.com/SCPSC-Cyber-Hub', 'https://scpsc.edu'),
        ('CodeArena', 'Competitive programming practice platform with problems curated by our CP team, featuring real-time contests.', ARRAY['Next.js', 'Python', 'PostgreSQL', 'Docker'], 38, 8, true, 'CP', 'https://github.com/SCPSC-Cyber-Hub/codearena', NULL),
        ('SmartAttendance', 'AI-powered attendance system using facial recognition for seamless classroom attendance tracking.', ARRAY['Python', 'TensorFlow', 'OpenCV', 'Flask'], 32, 10, false, 'AI/ML', 'https://github.com/SCPSC-Cyber-Hub/smartattendance', NULL),
        ('EventHub', 'Event management platform for SCPSC with ticketing, schedules, and live updates for all club events.', ARRAY['React', 'Firebase', 'TailwindCSS'], 28, 6, false, 'Web Dev', 'https://github.com/SCPSC-Cyber-Hub/eventhub', NULL),
        ('DesignKit', 'Open-source design assets and templates created by our Graphics team for the SCPSC community.', ARRAY['Figma', 'Illustrator', 'Photoshop'], 22, 15, false, 'Graphics', 'https://github.com/SCPSC-Cyber-Hub/designkit', NULL),
        ('VideoToolkit', 'Collection of video editing presets, LUTs, and templates for content creators at SCPSC.', ARRAY['Premiere Pro', 'After Effects', 'DaVinci'], 18, 9, false, 'Video', 'https://github.com/SCPSC-Cyber-Hub/videotoolkit', NULL)
      `);
    }
  } finally {
    client.release();
  }
}

export { pool };
