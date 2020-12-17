## Development
Start the MSSQL database container
```shell
$ docker-compose up -d mssql
```

Create the local schema with
```shell
$ docker run --network=pokemon_net -it mcr.microsoft.com/mssql-tools /opt/mssql-tools/bin/sqlcmd -S pokemon-mssql -U sa -P 'P0k3m0nch4ll3ng3' -Q 'CREATE SCHEMA POKEMON'
```

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

# execute sqlz db:create
$ docker-compose exec app npm run sqlz -- db:create 
```

## Production
For production environment you can build docker image and then run it
```shell
# build container
$ docker build -t pokemon -f Dockerfile .
# run container
$ docker run -p 3000:3000 pokemon
```