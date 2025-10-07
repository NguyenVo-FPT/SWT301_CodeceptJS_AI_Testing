# Date Time Checker

Mô tả ngắn
- Project này cung cấp một ứng dụng kiểm tra ngày tháng (Date Time Checker).  
- Gồm frontend React (giao diện), backend (Java Spring Boot) và một server Node.js đơn giản để chạy nhanh (cung cấp API và/hoặc serve frontend).  
- Có thư mục Demo chứa cấu hình và test tự động bằng CodeceptJS + Playwright.

Những thành phần chính (key files & symbols)
- Frontend React: [`App`](frontend/src/App.js) — [frontend/src/App.js](frontend/src/App.js)  
- Frontend tĩnh / standalone: [standalone.html](standalone.html) — có UI đơn giản để test thủ công  
- Node.js quick server: [server.js](server.js) — server HTTP dùng cho demo/local (port 3000)  
- Java Spring Boot backend controller: [`DateController`](backend/src/main/java/com/example/datetimechecker/controller/DateController.java) — [backend/src/main/java/com/example/datetimechecker/controller/DateController.java](backend/src/main/java/com/example/datetimechecker/controller/DateController.java)  
- Java service kiểm tra logic: [`DateValidationService`](backend/src/main/java/com/example/datetimechecker/service/DateValidationService.java) — [backend/src/main/java/com/example/datetimechecker/service/DateValidationService.java](backend/src/main/java/com/example/datetimechecker/service/DateValidationService.java)  
- Demo test config: [Demo/codecept.conf.js](Demo/codecept.conf.js) và test mẫu [Demo/datetime_test.js](Demo/datetime_test.js)

Frameworks / thư viện sử dụng
- Frontend: React (+ axios) — [frontend/package.json](frontend/package.json)  
- Backend Java: Spring Boot — [backend/pom.xml](backend/pom.xml)  
- Quick Node server (không dùng Express) — [server.js](server.js)  
- AI testing: CodeceptJS + Playwright — [Demo/package.json](Demo/package.json), [Demo/codecept.conf.js](Demo/codecept.conf.js)  
- Một số tiện ích: canvas-confetti (frontend standalone), axios (frontend React)

Chạy project khi clone về
1. Clone repo
   - git clone <repository-url>
   - cd vào thư mục project

2. Chạy Node quick server (port 3000)
   - Mục đích: nhanh để xem frontend tĩnh hoặc standalone demo.
   - Lệnh:
     - npm start
   - Mở trình duyệt: http://localhost:3000/  
   - File chính serve: [frontend/index.html](frontend/index.html) hoặc [standalone.html](standalone.html)

3. (Tùy chọn) Chạy Java Spring Boot backend (API thật)
   - Yêu cầu: Java & Maven
   - Di chuyển vào thư mục backend:
     - cd backend
     - mvn spring-boot:run
   - Backend chạy mặc định trên port 8080 (cấu hình: [backend/src/main/resources/application.properties](backend/src/main/resources/application.properties))  
   - API endpoint chính: POST /api/date/validate và GET /api/date/today (xem [`DateController`](backend/src/main/java/com/example/datetimechecker/controller/DateController.java))

4. Chạy frontend React (dev server)
   - cd frontend
   - npm install
   - npm start
   - Frontend dev server sẽ proxy API tới `http://localhost:8080` theo cấu hình [frontend/package.json](frontend/package.json) (`"proxy": "http://localhost:8080"`)

5. Chạy test tự động (CodeceptJS + Playwright)
   - cd Demo
   - npm install
   - npx playwright install
   - Chạy server (node server.js) hoặc backend+frontend tùy cấu hình trước khi chạy test
   - npx codeceptjs run --steps
   - Cấu hình test: [Demo/codecept.conf.js](Demo/codecept.conf.js) và test mẫu [Demo/datetime_test.js](Demo/datetime_test.js)
   - Để tích hợp AI kiểm tra, cần có API key OpenAI (xem biến môi trường trong [Demo/codecept.conf.js](Demo/codecept.conf.js))

Gợi ý khi dùng
- Nếu chỉ muốn demo nhanh: chạy `npm start` rồi mở http://localhost:3000 hoặc mở [standalone.html](standalone.html) trực tiếp.  
- Nếu muốn API đầy đủ, chạy Spring Boot (maven) và React dev server để có môi trường gần thực tế.  
- Test E2E yêu cầu Playwright browser binaries (chạy `npx playwright install`).

Liên hệ nhanh với code
- File serve & API demo: [server.js](server.js)  
- Frontend React entry: [frontend/src/index.js](frontend/src/index.js) và component chính [`App`](frontend/src/App.js) — [frontend/src/App.js](frontend/src/App.js)  
- Backend Java: main app [DateTimeCheckerApplication](backend/src/main/java/com/example/datetimechecker/DateTimeCheckerApplication.java) — [backend/src/main/java/com/example/datetimechecker/DateTimeCheckerApplication.java](backend/src/main/java/com/example/datetimechecker/DateTimeCheckerApplication.java)
