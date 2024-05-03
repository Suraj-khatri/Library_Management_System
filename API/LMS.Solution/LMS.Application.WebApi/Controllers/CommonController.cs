using LMS.Application.Service.Common;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMS.Application.WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CommonController : ControllerBase
    {
        private readonly ICommonService _commonService;
        public CommonController(ICommonService commonService)
        {
            _commonService = commonService;
        }
        [HttpGet]
        public IActionResult GetNavigation(string json)
        {
            try
            {
                var navigation = _commonService.NavigationSel(json);
                return Ok(navigation);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IActionResult UserLogin(string json)
        {
            try
            {
                var login = _commonService.UserLogin(json);
                return Ok(login);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IActionResult GetDashboard(string json)
        {
            try
            {
                var dashboard = _commonService.Dashboard(json);
                return Ok(dashboard);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
