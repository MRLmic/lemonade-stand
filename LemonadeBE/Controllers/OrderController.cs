using Microsoft.AspNetCore.Mvc;

namespace LemonadeBE.Controllers;

[ApiController]
[Route("orders")]
public class OrderController : ControllerBase
{
    private readonly ILogger<OrderController> _logger;

    public OrderController(ILogger<OrderController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public ActionResult Get()
    {
        String response = "order controller";
        return Ok(response);
    }

}
