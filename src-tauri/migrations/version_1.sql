-- sqlite3 database schema
-- https://www.sqlite.org/lang_createtable.html
-- https://www.sqlite.org/datatype3.html
-- https://www.sqlite.org/foreignkeys.html



-- ToDo Tasks
CREATE TABLE IF NOT EXISTS "TodoTasks" (
    "id"            INTEGER PRIMARY KEY AUTOINCREMENT,
    "title"         TEXT NOT NULL,
    "description"   TEXT,
    "created_date"  TEXT NOT NULL,
    "edited_date"   TEXT NOT NULL,
    "start_date"    TEXT,
    "finish_date"   TEXT,
    "closed_date"   TEXT
);




-- Daily Tasks
CREATE TABLE IF NOT EXISTS "DailyTasks" (
    "id"            INTEGER PRIMARY KEY AUTOINCREMENT,
    "title"         TEXT NOT NULL,
    "description"   TEXT,
    "created_date"  TEXT NOT NULL,
    "edited_date"   TEXT NOT NULL,
    "closed_date"   TEXT,
    "streak"        INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS "HistoryDailyTasks" (
    "completed_date"    INTEGER PRIMARY KEY AUTOINCREMENT,
    "daily_task_id"     INTEGER NOT NULL,
    
    FOREIGN KEY ("daily_task_id") REFERENCES "DailyTasks" ("id")
);
