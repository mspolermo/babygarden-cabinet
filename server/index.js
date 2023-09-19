import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors()); 
app.use(bodyParser.json());

const dbFilePath = 'db.json';
const usersFilePath = 'db.json';

// Загрузка данных из файла
const loadData = () => {
  const rawData = fs.readFileSync(dbFilePath);
  return JSON.parse(rawData);
};

// Эндпойнт для получения DB
app.get('/all', (req, res) => {
  fs.readFile(dbFilePath, 'utf8', (err, data) => {
      if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
      } else {
          res.json(JSON.parse(data));
      }
  });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});