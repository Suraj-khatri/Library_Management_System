using LMS.Application.Model;
using LMS.Application.Service.Borrow;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMS.Application.WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BorrowController : ControllerBase
    {
        private readonly IBorrowService _borrowService;
        public BorrowController(IBorrowService borrowService)
        {
            _borrowService = borrowService;
        }
        [HttpGet]
        public IActionResult GetAllBorrows(string json)
        {
            try
            {
                var borrow = _borrowService.BorrowSel(json);
                return Ok(borrow);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public IActionResult BorrowTsk([FromBody] MvJson json)
        {
            try
            {
                var borrow = _borrowService.BorrowTsk(json.Json);
                return Ok(borrow);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IActionResult GetAllRealTimeBorrowCharge(string json)
        {
            try
            {
                var borrow = _borrowService.GetAllRealTimeBorrowCharge(json);
                return Ok(borrow);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
