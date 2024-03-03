import java.io.IOException;
import java.io.PrintWriter;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class BPOServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String chat = request.getParameter("chat");
        response.setContentType("application/json");
        
        PrintWriter out = response.getWriter();
        
        // Create a JSON object based on the chat parameter
        String jsonResponse = "{ \"response\": \" invalid query \" }";
        switch (chat) {
            case "/q:1":
                jsonResponse = "{ \"response\": \"We offer fine quality and customized products for your needs.\" }";
                break;
            case "/q:2":
                jsonResponse = "{ \"response\": \"To create an account, click on the \\\"Sign Up\\\" button on the top right corner of the website.\" }";
                break;
            case "/q:3":
                jsonResponse = "{ \"response\": \"You can track your order by logging into your account and navigating to the order history section.\" }";
                break;
            case "/q:4":
                jsonResponse = "{ \"response\": \"We offer standard and expedited shipping options. Shipping costs and delivery times vary depending on your location and selected shipping method.\" }";
                break;
            case "/q:5":
                jsonResponse = "{ \"response\": \"To initiate a return, please visit our Returns & Refunds page for instructions.\" }";
                break;
            case "/q:6":
                jsonResponse = "{ \"response\": \"Please describe the issue you're facing, and we'll do our best to assist you. Alternatively, you can reach out to our technical support team at [support@xpertSolutions.com] or [9897969594].\" }";
                break;
            case "/q:7":
                jsonResponse = "{ \"response\": \"You can reach us via email at [company@protonmail.ch], or by phone at [9548615935].\" }";
                break;
            default:
                jsonResponse = "{ \"error\": \"Invalid query.\" }";
        }
        
        out.println(jsonResponse);
    }
}

