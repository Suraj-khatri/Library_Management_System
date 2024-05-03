using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Application.Service.CustomerMembership
{
    public interface ICustomerMembershipService
    {
        string GetCustomerMembershipSel(string Json);
        string GetDynamicCustomerMembershipSel(string Json);
        string CustomerMembershipTsk(string Json);
        string CustomerUpgradeToMembershipTsk(string Json);
        string CustomerDetailSel(string Json);
    }
}
