package model.input;

public class RequestedTable {

    private String database;
    private String table;

    public String getDatabase() {
        return database;
    }

    public RequestedTable setDatabase(String database) {
        this.database = database;
        return this;
    }

    public String getTable() {
        return table;
    }

    public RequestedTable setTable(String table) {
        this.table = table;
        return this;
    }
}
