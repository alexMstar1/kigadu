
# Kigadu

## Installation

1. switch to cms branch <code>git checkout cms</code>
2. copy <code>.env.example</code> and rename it ro <code>.env</code>
3. run <code>docker-compose -p kigadu up --build -d</code>
4. run <code>docker exec -it kigadu-core bash</code>
5. than in the opened terminal run <code>php craft setup</code>
- leave database settings as suggested
- then create your profile
- ATTENTION: set url setting to <code>http://localhost:8081</code>

Then you can access web page - http://localhost:8081 <br>
Admin panel - http://localhost:8081/admin

## Fill the data

- login to admin dashboard
- go to <code>Entries</code> -> <code>Home</code> -> then you can choose tha tab and edit info