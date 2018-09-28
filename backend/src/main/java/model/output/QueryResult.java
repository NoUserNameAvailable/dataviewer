package model.output;

import java.util.ArrayList;
import java.util.List;

public class QueryResult {

    private String variable;
    private String database;
    private String table;
    private int rows;
    private List<ColumnVariable> columns;

    public QueryResult(String variable, String database, String table) {
        this.variable = variable;
        this.database = database;
        this.table = table;
        columns = new ArrayList<>();
    }

    public QueryResult(String variable, String database, List<ColumnVariable> columns) {
        this.variable = variable;
        this.database = database;
        this.columns = columns;
    }

    public void addColumnVariable(ColumnVariable columnVariable){
        columns.add(columnVariable);
    }

    public String getVariable() {
        return variable;
    }

    public QueryResult setVariable(String variable) {
        this.variable = variable;
        return this;
    }

    public String getDatabase() {
        return database;
    }

    public QueryResult setDatabase(String database) {
        this.database = database;
        return this;
    }

    public List<ColumnVariable> getColumns() {
        return columns;
    }

    public QueryResult setColumns(List<ColumnVariable> columns) {
        this.columns = columns;
        return this;
    }

    public int getRows() {
        return rows;
    }

    public QueryResult setRows(int rows) {
        this.rows = rows;
        return this;
    }

    public String getTable() {
        return table;
    }

    public QueryResult setTable(String table) {
        this.table = table;
        return this;
    }
}
