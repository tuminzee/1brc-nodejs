## Gererating the input file

I'm not very familiar with Java, although I did write some Java code in high school and college. I also recall working with basic Spring Boot projects, but I'm not well-versed in Apache Maven or the toolings around the ecosystem

I admit that I didn't read the instructions for generating the input file carefully. I simply installed Java without considering the specific version or other details.

After encountering difficulties with different Java versions, I tried OpenJDK and Oracle Java 21, but neither worked as expected.

Eventually, I installed SDKMAN to manage Java versions. Studying the ./mvnw script, I realized my JAVA_HOME environment variable was missing. Using SDKMAN's env command, I generated environment variables for my current Java version `(java=21.0.4-tem in my case)`. This resolved the missing JAVA_HOME issue.

Build the project with maven using `./mvnw clean verify`

With everything set up, I ran the script `./create_measurements.sh 1000000000` to generate the input file

