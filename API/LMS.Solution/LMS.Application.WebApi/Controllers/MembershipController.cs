using LMS.Application.Model;
using LMS.Application.Service.Membership;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMS.Application.WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class MembershipController : ControllerBase
    {
        private readonly IMembershipService _membershipService;
        public MembershipController(IMembershipService membershipService)
        {
            _membershipService = membershipService;
        }
        [HttpGet]
        public IActionResult GetAllMembership(string json)
        {
            try
            {
                var allMembership = _membershipService.GetMembershipSel(json);
                return Ok(allMembership);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public IActionResult MembershipTsk([FromBody] MvJson json)
        {
            try
            {
                var membership = _membershipService.MembershipTsk(json.Json);
                return Ok(membership);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IActionResult GetAllMembershipDynamic(string json)
        {
            try
            {
                var allMembership = _membershipService.AllMembershipDynamic(json);
                return Ok(allMembership);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IActionResult GetMembershipType(string json)
        {
            try
            {
                var allMembership = _membershipService.GetMembershipTypeSel(json);
                return Ok(allMembership);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet]
        public IActionResult GetUserMembership(string json)
        {
            try
            {
                var allMembership = _membershipService.GetUserMembershipSel(json);
                return Ok(allMembership);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
