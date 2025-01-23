.PHONY: up down build run test clean

up:
	cd backend && docker compose up db -d && mvn spring-boot:run

db: 
	docker compose up db

down:
	docker compose down

test:
	mvn test

clean:
	mvn clean
	rm -rf target/
