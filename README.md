# LivingLab-CMS-IDLE

## 패키지 종속성

- Python 3.10
  - 필요할 수 있는 패키지 목록 (진행 중 막히면 설치)
    - django
    - djangorestframework
    - django-cors-headers
    - psycopg2-binary
    - django-tinymce
    - pymysql
    - pillow
    - tzdata

# Install Websocket based IDLE page server dependencies
RUN pip install schedule
RUN pip install websockets
RUN pip install tabulate
- Node 16.17.0

## 빌드 및 실행

Client/client_react/ 경로 터미널에서 아래 명령어 순차 실행

```bash
npm install
npm start
```

환경 구성 간 문제 발생 시 박준홍 연구원에게 질문하면 됩니다.
