using LMS.Application.Model;
using LMS.Application.Service.Book;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMS.Application.WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;
        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }
        [HttpGet]
        public IActionResult GetAllBooks(string json)
        {
            try
            {
                var res = _bookService.BookSel(json);
                return Ok(res);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public IActionResult BookTsk([FromBody] MvJson json)
        {
            try
            {
                var res = _bookService.BookTsk(json.Json);
                return Ok(res);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IActionResult GetAvailableBooks(string json)
        {
            try
            {
                var res = _bookService.AvailableBook(json);
                return Ok(res);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IActionResult GetDynamicAvailableBooks(string json)
        {
            try
            {
                var res = _bookService.AllBooksDynamic(json);
                return Ok(res);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IActionResult GetBookGenre(string json)
        {
            try
            {
                var res = _bookService.BookGenre(json);
                return Ok(res);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
