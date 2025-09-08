# AUM-ERP Backend

This is the backend service for the ERP system built with **NestJS**, **PostgreSQL**, **Sequelize**, and **Docker**.

---

##  Getting Started

### 1. Install Docker
Make sure you have **Docker** and **Docker Compose** installed.

- [Install Docker](https://docs.docker.com/get-docker/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)



### 2. Start Database & Adminer
Run the following command from the backend root directory:

```bash
docker-compose up postgres adminer
```
This will start:

- **PostgreSQL** database server  
- **Adminer** (web-based DB client) on [http://localhost:8080](http://localhost:8080)

### 3. Adminer Login Credentials

When logging into **Adminer**, use the following values:

- **System:** PostgreSQL  
- **Server:** postgres  
- **Port:** 5432  
- **Username:** postgres  
- **Password:** postgres  
- **Database:** erp

### 4. Running the App

- **Build the app**  
  ```bash
  yarn build
- **Format the code**  
  ```bash
  yarn format
- **Start normally**  
  ```bash
  yarn start
- **Start in development mode (watch mode)**  
  ```bash
  yarn start:dev
- **Start with debugging enabled**  
  ```bash
  yarn start:debug
- **Start in production (compiled build)**  
  ```bash
  yarn start:prod

### 5. Database Sync

- **Safe sync (no destructive changes)**  
  ```bash
  yarn db:sync
- **Force sync (drops and recreates all tables)**  
  ```bash
  yarn db:sync:force
- **Alter sync (updates schema without dropping tables)**  
  ```bash
  yarn db:sync:alter

### 6. Insert Dummy Data (Seeding)

- **Insert dummy users**  
  ```bash
  yarn seed:users
- **Insert dummy sales data**  
  ```bash
  yarn seed:sales



