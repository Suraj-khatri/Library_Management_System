using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Application.Service.Common
{
    public interface ICommonService
    {
        string NavigationSel(string json);
        string UserLogin(string json);
        string Dashboard(string json);
    }
}
