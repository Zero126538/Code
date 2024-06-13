const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burtgel"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

app.get("/User1_1", (req, res) => {
    const sql = "SELECT * FROM b_t1_1";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User1_2", (req, res) => {
    const sql = "SELECT * FROM b_t1_2";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User1_3", (req, res) => {
    const sql = "SELECT * FROM b_t1_3";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User2_1", (req, res) => {
    const sql = "SELECT * FROM b_t2_1";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User2_2", (req, res) => {
    const sql = "SELECT * FROM b_t2_2";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User2_3", (req, res) => {
    const sql = "SELECT * FROM b_t2_3";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User2_4", (req, res) => {
    const sql = "SELECT * FROM b_t2_4";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User3_1", (req, res) => {
    const sql = "SELECT * FROM b_t3_1";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User3_2", (req, res) => {
    const sql = "SELECT * FROM b_t3_2";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User3_3", (req, res) => {
    const sql = "SELECT * FROM b_t3_3";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User3_4", (req, res) => {
    const sql = "SELECT * FROM b_t3_4";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User3_5", (req, res) => {
    const sql = "SELECT * FROM b_t3_5";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User3_6", (req, res) => {
    const sql = "SELECT * FROM b_t3_6";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User4_1", (req, res) => {
    const sql = "SELECT * FROM b_t4_1";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User4_2", (req, res) => {
    const sql = "SELECT * FROM b_t4_2";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User4_3", (req, res) => {
    const sql = "SELECT * FROM b_t4_3";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User4_4", (req, res) => {
    const sql = "SELECT * FROM b_t4_4";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User4_5", (req, res) => {
    const sql = "SELECT * FROM b_t4_5";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User5_1", (req, res) => {
    const sql = "SELECT * FROM b_t5_1";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User5_2", (req, res) => {
    const sql = "SELECT * FROM b_t5_2";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User5_3", (req, res) => {
    const sql = "SELECT * FROM b_t5_3";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User5_4", (req, res) => {
    const sql = "SELECT * FROM b_t5_4";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User5_5", (req, res) => {
    const sql = "SELECT * FROM b_t5_5";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User6_1", (req, res) => {
    const sql = "SELECT * FROM b_t6_1";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User6_2", (req, res) => {
    const sql = "SELECT * FROM b_t6_2";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User6_3", (req, res) => {
    const sql = "SELECT * FROM b_t6_3";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User6_4", (req, res) => {
    const sql = "SELECT * FROM b_t6_4";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User6_5", (req, res) => {
    const sql = "SELECT * FROM b_t6_5";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User6_6", (req, res) => {
    const sql = "SELECT * FROM b_t6_6";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User7_1", (req, res) => {
    const sql = "SELECT * FROM b_t7_1";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User7_2", (req, res) => {
    const sql = "SELECT * FROM b_t7_2";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User7_3", (req, res) => {
    const sql = "SELECT * FROM b_t7_3";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User7_4", (req, res) => {
    const sql = "SELECT * FROM b_t7_4";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User7_5", (req, res) => {
    const sql = "SELECT * FROM b_t7_5";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User7_6", (req, res) => {
    const sql = "SELECT * FROM b_t7_6";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User7_7", (req, res) => {
    const sql = "SELECT * FROM b_t7_7";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User7_8", (req, res) => {
    const sql = "SELECT * FROM b_t7_8";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User7_9", (req, res) => {
    const sql = "SELECT * FROM b_t7_9";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User8_1", (req, res) => {
    const sql = "SELECT * FROM b_t8_1";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User8_2", (req, res) => {
    const sql = "SELECT * FROM b_t8_2";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User8_3", (req, res) => {
    const sql = "SELECT * FROM b_t8_3";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User9_1", (req, res) => {
    const sql = "SELECT * FROM b_t9_1";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User9_2", (req, res) => {
    const sql = "SELECT * FROM b_t9_2";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User9_3", (req, res) => {
    const sql = "SELECT * FROM b_t9_3";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User9_4", (req, res) => {
    const sql = "SELECT * FROM b_t9_4";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User9_5", (req, res) => {
    const sql = "SELECT * FROM b_t9_5";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_1", (req, res) => {
    const sql = "SELECT * FROM c_t1_1";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_2", (req, res) => {
    const sql = "SELECT * FROM c_t1_2";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_3", (req, res) => {
    const sql = "SELECT * FROM c_t1_3";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_4", (req, res) => {
    const sql = "SELECT * FROM c_t1_4";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_5", (req, res) => {
    const sql = "SELECT * FROM c_t1_5";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_6", (req, res) => {
    const sql = "SELECT * FROM c_t1_6";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_7", (req, res) => {
    const sql = "SELECT * FROM c_t1_7";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_8", (req, res) => {
    const sql = "SELECT * FROM c_t1_8";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_9", (req, res) => {
    const sql = "SELECT * FROM c_t1_9";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_10", (req, res) => {
    const sql = "SELECT * FROM c_t1_10";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_11", (req, res) => {
    const sql = "SELECT * FROM c_t1_11";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_12", (req, res) => {
    const sql = "SELECT * FROM c_t1_12";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_13", (req, res) => {
    const sql = "SELECT * FROM c_t1_13";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_14", (req, res) => {
    const sql = "SELECT * FROM c_t1_14";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_15", (req, res) => {
    const sql = "SELECT * FROM c_t1_15";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_16", (req, res) => {
    const sql = "SELECT * FROM c_t1_16";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User10_17", (req, res) => {
    const sql = "SELECT * FROM c_t1_17";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User11_1", (req, res) => {
    const sql = "SELECT * FROM c_t2_1";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User11_2", (req, res) => {
    const sql = "SELECT * FROM c_t2_2";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User11_3", (req, res) => {
    const sql = "SELECT * FROM c_t2_3";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User11_4", (req, res) => {
    const sql = "SELECT * FROM c_t2_4";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User11_5", (req, res) => {
    const sql = "SELECT * FROM c_t2_5";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User11_6", (req, res) => {
    const sql = "SELECT * FROM c_t2_6";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User11_7", (req, res) => {
    const sql = "SELECT * FROM c_t2_7";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User11_8", (req, res) => {
    const sql = "SELECT * FROM c_t2_8";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.get("/User11_9", (req, res) => {
    const sql = "SELECT * FROM c_t2_9";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post('/User1_1', (req, res) => {
    const sql = "INSERT INTO b_t1_1 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});


app.post("/User1_2", (req, res) => {
    const sql = "INSERT INTO b_t1_2 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User1_3", (req, res) => {
    const sql = "INSERT INTO b_t1_3 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User2_1", (req, res) => {
    const sql = "INSERT INTO b_t2_1 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User2_2", (req, res) => {
    const sql = "INSERT INTO b_t2_2 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User2_3", (req, res) => {
    const sql = "INSERT INTO b_t2_3 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User2_4", (req, res) => {
    const sql = "INSERT INTO b_t2_4 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User3_1", (req, res) => {
    const sql = "INSERT INTO b_t3_1 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User3_2", (req, res) => {
    const sql = "INSERT INTO b_t3_2 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User3_3", (req, res) => {
    const sql = "INSERT INTO b_t3_3 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User3_4", (req, res) => {
    const sql = "INSERT INTO b_t3_4 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User3_5", (req, res) => {
    const sql = "INSERT INTO b_t3_5 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User3_6", (req, res) => {
    const sql = "INSERT INTO b_t3_6 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User4_1", (req, res) => {
    const sql = "INSERT INTO b_t4_1 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User4_2", (req, res) => {
    const sql = "INSERT INTO b_t4_2 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User4_3", (req, res) => {
    const sql = "INSERT INTO b_t4_3 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User4_4", (req, res) => {
    const sql = "INSERT INTO b_t4_4 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User4_5", (req, res) => {
    const sql = "INSERT INTO b_t4_5 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User5_1", (req, res) => {
    const sql = "INSERT INTO b_t5_1 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User5_2", (req, res) => {
    const sql = "INSERT INTO b_t5_2 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User5_3", (req, res) => {
    const sql = "INSERT INTO b_t5_3 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User5_4", (req, res) => {
    const sql = "INSERT INTO b_t5_4 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User5_5", (req, res) => {
    const sql = "INSERT INTO b_t5_5 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User6_1", (req, res) => {
    const sql = "INSERT INTO b_t6_1 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User6_2", (req, res) => {
    const sql = "INSERT INTO b_t6_2 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User6_3", (req, res) => {
    const sql = "INSERT INTO b_t6_3 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User6_4", (req, res) => {
    const sql = "INSERT INTO b_t6_4 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User6_6", (req, res) => {
    const sql = "INSERT INTO b_t6_6 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User7_1", (req, res) => {
    const sql = "INSERT INTO b_t7_1 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User7_2", (req, res) => {
    const sql = "INSERT INTO b_t7_2 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User7_3", (req, res) => {
    const sql = "INSERT INTO b_t7_3 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User7_4", (req, res) => {
    const sql = "INSERT INTO b_t7_4 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User7_5", (req, res) => {
    const sql = "INSERT INTO b_t7_5 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User7_6", (req, res) => {
    const sql = "INSERT INTO b_t7_6 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User7_7", (req, res) => {
    const sql = "INSERT INTO b_t7_7 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User7_8", (req, res) => {
    const sql = "INSERT INTO b_t7_8 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User7_9", (req, res) => {
    const sql = "INSERT INTO b_t7_9 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User8_1", (req, res) => {
    const sql = "INSERT INTO b_t8_1 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User8_2", (req, res) => {
    const sql = "INSERT INTO b_t8_2 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User8_3", (req, res) => {
    const sql = "INSERT INTO b_t8_3 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User9_1", (req, res) => {
    const sql = "INSERT INTO b_t9_1 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User9_2", (req, res) => {
    const sql = "INSERT INTO b_t9_2 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User9_3", (req, res) => {
    const sql = "INSERT INTO b_t9_3 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User9_4", (req, res) => {
    const sql = "INSERT INTO b_t9_4 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User9_5", (req, res) => {
    const sql = "INSERT INTO b_t9_5 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_1", (req, res) => {
    const sql = "INSERT INTO b_t10_1 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_2", (req, res) => {
    const sql = "INSERT INTO b_t10_2 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_3", (req, res) => {
    const sql = "INSERT INTO b_t10_1 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_1", (req, res) => {
    const sql = "INSERT INTO b_t10_1 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_2", (req, res) => {
    const sql = "INSERT INTO b_t10_2 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_3", (req, res) => {
    const sql = "INSERT INTO b_t10_3 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_4", (req, res) => {
    const sql = "INSERT INTO b_t10_4 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_5", (req, res) => {
    const sql = "INSERT INTO b_t10_5 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_6", (req, res) => {
    const sql = "INSERT INTO b_t10_6 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_7", (req, res) => {
    const sql = "INSERT INTO b_t10_7 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_8", (req, res) => {
    const sql = "INSERT INTO b_t10_8 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_9", (req, res) => {
    const sql = "INSERT INTO b_t10_9 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_10", (req, res) => {
    const sql = "INSERT INTO b_t10_10 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_11", (req, res) => {
    const sql = "INSERT INTO b_t10_11 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_12", (req, res) => {
    const sql = "INSERT INTO b_t10_12 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_13", (req, res) => {
    const sql = "INSERT INTO b_t10_3 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_14", (req, res) => {
    const sql = "INSERT INTO b_t10_14 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_15", (req, res) => {
    const sql = "INSERT INTO b_t10_15 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_16", (req, res) => {
    const sql = "INSERT INTO b_t10_16 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User10_17", (req, res) => {
    const sql = "INSERT INTO b_t10_17 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User11_1", (req, res) => {
    const sql = "INSERT INTO b_t11_1 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User11_2", (req, res) => {
    const sql = "INSERT INTO b_t11_2 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User11_3", (req, res) => {
    const sql = "INSERT INTO b_t11_3 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User11_4", (req, res) => {
    const sql = "INSERT INTO b_t11_4 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User11_5", (req, res) => {
    const sql = "INSERT INTO b_t11_5 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User11_6", (req, res) => {
    const sql = "INSERT INTO b_t11_6 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User11_7", (req, res) => {
    const sql = "INSERT INTO b_t11_7 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});

app.post("/User11_8", (req, res) => {
    const sql = "INSERT INTO b_t11_8 (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});


  

app.post("/User11_9", (req, res) => {
    const sql = "INSERT INTO user (`start_date`, `end_date`, `season`, `book_number`, `book_name`, `country`, `author1`, `author2`, `author3`, `book_limit`, `year`, `book_link`,`type`, `description`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.start_date,
        req.body.end_date,
        req.body.season,
        req.body.book_number,
        req.body.book_name,
        req.body.country,
        req.body.author1,
        req.body.author2,
        req.body.author3,
        req.body.book_limit,
        req.body.year,
        req.body.book_link,
        req.body.type,
        req.body.description,
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json("Error");
        }
        return res.json(data);
    });
});


app.listen(8002, () => {
    console.log("Server is listening on port 8002");
});
