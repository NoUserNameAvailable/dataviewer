package service;

import manager.ConnectionDB;
import model.output.ColumnVariable;
import model.output.QueryResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.*;

public final class FileQueryService {

    final Logger logger = LoggerFactory.getLogger(FileQueryService.class);

    private static volatile FileQueryService fileQueryServiceInstance = null;

    private HashMap<String, Connection> connections;

    private FileQueryService() {
        connections = new HashMap<>();
    }

    public static FileQueryService getInstance() {
        if (FileQueryService.fileQueryServiceInstance == null) {
            synchronized (FileQueryService.class) {
                if (FileQueryService.fileQueryServiceInstance == null) {
                    fileQueryServiceInstance = new FileQueryService();
                }
            }
        }
        return fileQueryServiceInstance;
    }

    public List<String> getVariables(String database, String table) {
        List<String> variables = new ArrayList<>();

        if (!connections.containsKey(database)) {
            connections.put(database, ConnectionDB.getConnection(database));
        }

        try {
            Statement statement = connections.get(database).createStatement();
            ResultSet resultSet = statement.executeQuery("PRAGMA table_info(" + table + ")");
            while (resultSet.next()) {
                if (resultSet.getString("type").contains("varchar")) {
                    variables.add(resultSet.getString("name"));
                }
            }
            statement.close();
            resultSet.close();
        } catch (SQLException e) {
            logger.error(e.getMessage());
        }
        return variables;
    }

    public List<String> getTables(String database) {
        List<String> tables = new ArrayList<>();

        if (!connections.containsKey(database)) {
            connections.put(database, ConnectionDB.getConnection(database));
        }
        try {
            Statement statement = connections.get(database).createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT name FROM sqlite_master WHERE type='table'");
            while (resultSet.next()) {
                tables.add(resultSet.getString("name"));
            }
            resultSet.close();
            statement.close();
        } catch (SQLException e) {
            logger.error(e.getMessage());
        }
        return tables;
    }

    public QueryResult queryColumn(String database, String table, String variable) {
        QueryResult queryResult = new QueryResult(database, variable, table);
        int rows = 0;

        if (!connections.containsKey(database)) {
            connections.put(database, ConnectionDB.getConnection(database));
        }

        try {

            Statement statement = connections.get(database).createStatement();

            ResultSet resultSet = statement.executeQuery( "SELECT \"" + variable + "\" as variable, ROUND(AVG(age), 1) as avg_age, count(1) as quantity  " +
                    "FROM " + table + " GROUP BY \""+variable+"\" ORDER BY quantity DESC LIMIT 100");

            while (resultSet.next()) {
                ColumnVariable columnVariable = new ColumnVariable(
                        resultSet.getString("variable"),
                        resultSet.getInt("quantity"),
                        resultSet.getFloat("avg_age"));
                queryResult.addColumnVariable(columnVariable);
                rows++;
            }
            resultSet.close();
            statement.close();


        } catch (SQLException e) {
            logger.error(e.getMessage());
        }


        try {
            if (rows == 100) {
                Statement statement = connections.get(database).createStatement();
                ResultSet resultSet = statement.executeQuery("select count(distinct \"" + variable + "\") as distinct_values from \"" + table + "\"");
                while (resultSet.next()) {
                    rows = resultSet.getInt("distinct_values");
                }
                resultSet.close();
                statement.close();
            }
            queryResult.setRows(rows);
        }catch (SQLException e) {
            logger.error(e.getMessage());
        }

        return queryResult;
    }

    public List<String> getDatabases() {
        File databesDir = new File("data");
        String[] files = databesDir.list();
        if(files == null){
            return new ArrayList<>();
        }
        return new ArrayList<>(Arrays.asList(files));
    }


}
