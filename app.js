const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// middlewares
const session = require('express-session');
const cookieParser = require('cookie-parser');

const db = require('./models');

const port = process.env.PORT || 3005;

dotenv.config();
const app = express();
db.sequelize
    .sync(
        { force: process.env.DB_SYNC || true } // 시작할때마다 모두 지우고 새로 만들기
        // { force: process.env.NODE_ENV !== 'production' }
        // { force: process.env.NODE_DB_CLEANER }
    )
    .then(() => {
        if (process.env.DB_SYNC) {
            console.log('#'.repeat(70));
            console.log('DB 초기화 되었습니다.');
            console.log('#'.repeat(70));
        }
        console.log('DB 연결 성공');
    })
    .catch(console.error);

// Middlewares
app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

// app.use(
//     session({
//         saveUninitialized: false,
//         resave: false,
//         secret: process.env.COOKIE_SECRET, //undefined이면(.env에 값 없으면) 에러
//         cookie: {
//             httpOnly: true,
//             secure: false,
//             // domain: process.env.NODE_ENV === 'production' && '.nodebird.com',
//         },
//     })
// );

app.get('/test', (req, res, next) => {
    res.send('ok');
});

app.listen(port, () => {
    console.log('Server Start!');
});
