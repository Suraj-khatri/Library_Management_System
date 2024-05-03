using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Application.Service.User
{
    public interface IUserService
    {
        string GetUserSel(string Json);
        string UserTsk(string Json);
        string UserTypeSel(string Json);
        string GetUserDynamic(string Json);
    }
}
