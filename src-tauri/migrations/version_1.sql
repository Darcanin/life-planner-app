-- sqlite3 database schema
CREATE TABLE IF NOT EXISTS "DailyTasks" (
    "id"            INTEGER PRIMARY KEY AUTOINCREMENT,
    "title"         TEXT NOT NULL,
    "description"   TEXT,
    "created_date"  TEXT NOT NULL,
    "edited_date"   TEXT NOT NULL,
    "closed_date"   TEXT,
    "streak"        INTEGER NOT NULL,
    "repeat_delay"  INTEGER
);

CREATE TABLE IF NOT EXISTS "HistoryDailyTasks" (
    "completed_date"    INTEGER PRIMARY KEY AUTOINCREMENT,
    "daily_task_id"     INTEGER NOT NULL,
    
    FOREIGN KEY ("daily_task_id") REFERENCES "DailyTasks" ("id")
);
