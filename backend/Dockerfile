FROM maven:3.9.9-eclipse-temurin-21-alpine AS maven

WORKDIR /app

COPY ./pom.xml ./

RUN mvn dependency:go-offline -B

COPY ./src ./src

RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY --from=maven /app/target/*.jar ./app.jar

EXPOSE 8081

CMD ["java", "-jar", "app.jar"]

