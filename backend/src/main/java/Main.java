import controller.FileQueryController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static spark.Spark.before;
import static spark.Spark.staticFiles;

public class Main {

    static final Logger logger = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) {

        staticFiles.location("/resources");

        before((request, response) -> {
            logger.info(request.pathInfo() + " - " +request.body().replaceAll("[\r\n]+", ""));
        });

        FileQueryController.routes();
    }

}
