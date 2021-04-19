FROM openjdk:8-jdk

# RUN ./mvnw --version

# WORKDIR /spring

# COPY . .

ADD target/kyc-csv-processor-0.0.1-SNAPSHOT.jar app.jar

# COPY ${JAR_FILE} ./app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-Dspring.data.mongodb.uri=mongodb://mongo:27017/kyc", "-Djava.security.egd=file:/dev/./urandom", "-jar","/app.jar"]
