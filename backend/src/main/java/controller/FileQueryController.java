package controller;

import com.google.gson.Gson;
import model.input.RequestedDatabase;
import model.input.RequestedTable;
import model.input.RequestedVariable;
import service.FileQueryService;

import static spark.Spark.get;
import static spark.Spark.post;

public class FileQueryController {

    private FileQueryController(){
    }

    public static void routes() {

        get("/databases", (request, response) -> {
            FileQueryService fileQueryService = FileQueryService.getInstance();
            Gson gson = new Gson();
            return gson.toJson(fileQueryService.getDatabases());
        });

        post("/tables", (request, response) -> {
            FileQueryService fileQueryService = FileQueryService.getInstance();
            Gson gson = new Gson();
            RequestedDatabase requestedTable = gson.fromJson(request.body(), RequestedDatabase.class);
            return gson.toJson(fileQueryService.getTables(requestedTable.getDatabase()));
        });

        post("/variables", (request, response) -> {
            FileQueryService fileQueryService = FileQueryService.getInstance();
            Gson gson = new Gson();
            RequestedTable requestedTable = gson.fromJson(request.body(), RequestedTable.class);
            return gson.toJson(fileQueryService.getVariables(requestedTable.getDatabase(), requestedTable.getTable()));
        });

        post("query", (request,response)->{
            FileQueryService fileQueryService = FileQueryService.getInstance();
            Gson gson = new Gson();
            RequestedVariable requestedVariable = gson.fromJson(request.body(), RequestedVariable.class);
            return gson.toJson(fileQueryService.queryColumn(requestedVariable.getDatabase(), requestedVariable.getTable(), requestedVariable.getVariable()));
        });

    }
}
