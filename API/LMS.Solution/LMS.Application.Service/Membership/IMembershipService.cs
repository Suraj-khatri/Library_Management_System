using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Application.Service.Membership
{
    public interface IMembershipService
    {
        string GetMembershipSel(string Json);

        //only those user who has membership
        string GetUserMembershipSel(string Json);
        string MembershipTsk(string Json);
        string AllMembershipDynamic(string Json);
        string GetMembershipTypeSel(string Json);
    }
}
