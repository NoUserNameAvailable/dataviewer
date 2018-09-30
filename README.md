# Description
Dataviewer is a small projet to show average ages and count people with same properties wihtout refresh the browser page.
The datasource is sqlite files.

The project is developped with :
* Java 
* Spark Java (<http://sparkjava.com/>), web micro-framework
* Angular 6
* Material design

IDEs used : Intellij and Webstorm


# Prerequisites
* Java 8 or higher
* Maven

# Run the project
1. ``mvn clean install`` in root repo (dataviewer)
2. Go to ``cd backend/target``
3. `` java -jar backend-1.0-SNAPSHOT-jar-with-dependencies.jar``
4. Add db files by creating a "data" folder in the repertory where the jar is executed  
Example 
~~~~
.
├──data
├  ├──us-census.db
├  ├── <add other db files here>
├──backend-1.0-SNAPSHOT-jar-with-dependencies.jar
~~~~ 
Open <http://localhost:4567>

# Database structure
The databases need to have a column named age which contains integers.
When a new db file is added you need to refresh the web page (no need to restart server or recompil).