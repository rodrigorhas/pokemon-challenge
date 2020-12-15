# build from the Ubuntu 18.04 image
FROM ubuntu:18.04

# create the mssql user
RUN useradd -u 10001 mssql

# installing SQL Server
RUN apt-get update && apt-get install -y wget software-properties-common apt-transport-https
RUN wget -qO- https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
RUN add-apt-repository "$(wget -qO- https://packages.microsoft.com/config/ubuntu/18.04/mssql-server-2019.list)"
RUN apt-get update && apt-get install -y mssql-server

# creating directories
RUN mkdir -p /var/opt/sqlserver /var/opt/sqlserver/data /var/opt/sqlserver/log /var/opt/sqlserver/backup

# set permissions on directories
RUN chown -R mssql:mssql /var/opt/sqlserver /var/opt/mssql

# switching to the mssql user
USER mssql

# starting SQL Server
CMD '/opt/mssql/bin/sqlservr'