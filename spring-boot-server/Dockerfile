FROM openjdk:8-jdk

ADD target/kyc-csv-processor-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-Dspring.data.mongodb.uri=mongodb://mongo:27017/kyc", "-Djava.security.egd=file:/dev/./urandom", "-jar","/app.jar"]
