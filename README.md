
# Kigadu

## Installation

1. clone repo <code>git clone https://github.com/hellsontime/crispy-telegram.git </code>
2. go to new directory <code>cd crispy-telegram/</code>
3. switch to cms branch <code>git checkout cms</code>
5. copy <code>.env.example</code> and rename it ro <code>.env</code>
6. run <code>docker-compose -p kigadu up --build -d</code>
7. run <code>docker exec -it kigadu-core bash</code>
8. than in the opened terminal run <code>php craft setup</code>
- leave database settings as suggested
- then create your profile

Then you can access web page - http://localhost:8081 <br>
Admin panel - http://localhost:8081/admin

## Fill the data

- login to admin dashboard
- go to <code>Entries</code> -> <code>Home</code> -> then you can choose tha tab and edit info
