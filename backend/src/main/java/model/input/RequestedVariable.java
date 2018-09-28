package model.input;

public class RequestedVariable {

    private String database;
    private String table;
    private String variable;

    public String getDatabase() {
        return database;
    }

    public RequestedVariable setDatabase(String database) {
        this.database = database;
        return this;
    }

    public String getTable() {
        return table;
    }

    public RequestedVariable setTable(String table) {
        this.table = table;
        return this;
    }

    public String getVariable() {
        return variable;
    }

    public RequestedVariable setVariable(String variable) {
        this.variable = variable;
        return this;
    }
}
