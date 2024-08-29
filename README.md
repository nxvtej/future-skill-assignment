  git clone https://github.com/nxvtej/future-skill-assignment.git

  cd future-skill-assignment

  cd backend
  npm install
(set up mongodb)
if docker available

  docker run -d -p 27017:27017 --name docker-db -v my_volume_database:/data/db mongo
create .env with
  DOCKER_MONGODB="mongodb://localhost:27017/myDatabase"

npm start
server will run at port 3001


cd ..

cd frontend
npm install
npm run dev

try hitting from postman
  localhost:3000/api/v1/cards/

with body
  {
    "id":"first",
    "title":"demo title",
    "description": "demo description"
  }


on frontend
will press submit request button
this sends request 
  axios.get("/")

