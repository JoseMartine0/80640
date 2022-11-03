package mx.uv;

import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        get("/hello", (req, res) -> "Hello World");
    }

    post( "/", (req, res)-> {
        System.out.println(req.queryParams(queryParams:"email") + " " +req.queryParams(queryParams))
        System.out.println(req.body));
        
    }
}
