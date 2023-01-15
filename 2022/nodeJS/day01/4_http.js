// const http = request;
const http = require('http');

// req: 사용자 요청에 대한 정보 (사용자가 나에게 주는 정보)
// res: 사용자에게 응답을 하기 위한 정보 (내가 사용자에게 주는 정보)
const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/html"});
    res.end(
        `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTTP 모듈 테스트</title>
    </head>
    <body>
        <h2>HTTP 모듈 테스트</h2>
        <p>처음으로 실행하는 node.js http 서버</p>
    </body>
    </html>`
    );
});

server.listen(3000, () => {
    console.log("3000번 포트로 서버 실행중");
});

// 이제 우리는 앞으로
/*
    try{
        사용자가 준 내용(req)을 DB에 저장하거나
        사용자가 준 내용을 바탕으로 DB에서 찾아와 사용자에게 res로 보내주는 문장
    } catch{
        error가 발생하면 사용자에게 보내줘야할 문장
        다양한 에러들에 맞춰 해당 에러에 맞는 문장을 보내줘야함
        ex 비밀번호 틀렸다, 없는 아이디다
    }
*/