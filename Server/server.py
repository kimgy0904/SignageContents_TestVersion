import asyncio  # 웹 소켓 모듈을 선언한다.
import json
import pickle
import websockets  # 클라이언트 접속이 되면 호출된다.

async def accept(websocket, path):
    print('accepted', websocket.origin)
    # rosl = rosLoader(websocket)
    while True:
        # await rosl.getbagfile()
        data = await websocket.recv()  # 클라이언트로부터 메시지를 대기한다.
        print('msg called')
        # await asyncio.sleep(0.5)
        # data_string = json.dumps([100,101,102])
        # print(data_string)
        # await websocket.send(data)  # 클라인언트로 echo를 붙여서 재 전송한다.


async def main():
    async with websockets.serve(accept, "localhost", 5000):
        await asyncio.Future()

asyncio.run(main())