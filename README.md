### Development
To start developing you can simply run `docker-compose` command pointing to `app` service.
This will start webpack server with hot-reload enabled.
The app will be exposed by default as `APP_PORT=3000`. You should be able to access it at http://localhost:3000 or even with http://pokemons (using docker net layer)
```shell
$ docker-compose up app
```

### Sequelize CLI (sequelize-cli)
The double dashes `--` is a must pass sqlz options through `npm run`
```shell
# example
$ docker-compose exec app npm run sqlz -- <sequelize options>

# you should see help info below
$ docker-compose exec app npm run sqlz -- --help 
```

### Migrations
```shell
$ docker-compose exec app npm run sqlz -- db:migrate --debug 
```