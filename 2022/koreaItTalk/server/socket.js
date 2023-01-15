const SocketIO = require("socket.io");

module.exports = (server) => {
    // 소켓서버 생성
    // 마찬가지로 라이브러리이기 때문에 사용법에 대해서 숙달할 필요는 없지만
    // 채팅이나 웹소켓을 이용한 통신에서 자주 사용하는 라이브러리 이므로 사용법 정도는 숙지할 필요 있습니다.
    const io = SocketIO(server, {
        path:"/socket.io",
        cors: {
            origin: true,
            credentials:true
        }
    })

    // 명령어들을 정의
    // 소켓이 연결되었냐 --> 임의의 명령어 "connection" ---> 결과 값을 socket으로 받아라
    io.on("connection", (socket) => {
        //명령어
        socket.on("joinRoom", (roomId, username) => {
            console.log(`${username}님 접속`);
            //룸 입장
            socket.join(roomId)

            // 누가 입장했는지 알 수 있는 명령어
            // emit - 메세지 전송
            socket.broadcast.to(socket).emit("user-connected",{
                username: username,
                roomId: roomId,
                socketId: socket.id // 1:1 대화를 위해 보내는 소켓에 입장한 사용자의 고유 id
            });
        })
    })
}