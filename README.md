
# Kigadu

## Installation

1. copy <code>.env.example</code> and rename it ro <code>.env</code>
2. run <code>docker-compose -p kigadu up --build -d</code>
3. run <code>docker exec -it kigadu-core</code>
4. than in the opened terminal run <code>php craft setup</code>
- leave database settings as suggested
- then create your profile
- ATTENTION: set url setting to <code>http://localhost:8081</code>

Then you can access web page - http://localhost:8081 <br>
Admin panel - http://localhost:8081/admin

## Fill the data

- login to admin dashboard
- go to <code>Entries</code> -> <code>Home</code> -> then you can choose tha tab and edit info