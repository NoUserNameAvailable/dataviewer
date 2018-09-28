package manager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionDB {

    public ConnectionDB() {
    }

    static final Logger logger = LoggerFactory.getLogger(ConnectionDB.class);

    public static Connection getConnection(String filename){
        Connection connection = null;
        try {
            Class.forName("org.sqlite.JDBC");
            connection = DriverManager.getConnection("jdbc:sqlite:data/"+filename);
        } catch (ClassNotFoundException | SQLException e) {
            logger.error(e.getMessage());
        }
        return connection;
    }

}
