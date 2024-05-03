using LMS.Application.Model;
using LMS.Application.Service.CustomerMembership;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMS.Application.WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CustomerMembershipController : ControllerBase
    {
        private readonly ICustomerMembershipService _customerMembershipService;
        public CustomerMembershipController(ICustomerMembershipService customerMembershipService)
        {
            _customerMembershipService = customerMembershipService;
        }

        [HttpGet]
        public IActionResult GetAllCustomerMembership(string json)
        {
            try
            {
                var res = _customerMembershipService.GetCustomerMembershipSel(json);
                return Ok(res);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public IActionResult CustomerMembershipTsk([FromBody] MvJson json)
        {
            try
            {
                var res = _customerMembershipService.CustomerMembershipTsk(json.Json);
                return Ok(res);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IActionResult GetAllDynamicCustomerMembership(string json)
        {
            try
            {
                var res = _customerMembershipService.GetDynamicCustomerMembershipSel(json);
                return Ok(res);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult CustomerUpgradeToMembershipTsk([FromBody] MvJson json)
        {
            try
            {
                var res = _customerMembershipService.CustomerUpgradeToMembershipTsk(json.Json);
                return Ok(res);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IActionResult CustomerDetailSel(string json)
        {
            try
            {
                var res = _customerMembershipService.CustomerDetailSel(json);
                return Ok(res);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
