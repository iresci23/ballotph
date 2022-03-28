# ballotph
Sample Ballot Generator 2022

## Install
Note: Run the commands in a terminal.

1. Clone the repo: 
`git clone git@github.com:iresci23/ballotph.git`
2. Once cloned, go to the project's root folder and execture via terminal:
`composer install`
`npm install`
3. Create a database in your local (you can name it "ballotph" or whatever you want)
4. Create a new file name it as `.env`, and copy the contents from `.env.example` 
5. Replace the environment db in `.env` file with your db credentials, example:
```
DB_DATABASE=ballotph #this is your db name set in step #3
DB_USERNAME=root #this is your local db user
DB_PASSWORD=secret #this is your local db password
```
6. Run `php artisan migrate` 
7. Run `php artisan storage:link` 
8. Run `php artisan serve` then visit `http://127.0.0.1:8000/` 

Done!

Tip:
To clear application cache, run `php artisan optimize:clear` 