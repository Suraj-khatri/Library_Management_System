using LMS.Application.LLBL.DatabaseSpecific;
using LMS.Application.Model;
using LMS.Application.Service.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Application.Service.Common
{
    public class CommonService : ICommonService
    {
        public string Dashboard(string json)
        {
            var dashboard = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpDashboardSelCallAsQuery(json))?.FirstOrDefault().Json;
            return dashboard;
        }

        public string NavigationSel(string json)
        {
            var navigation = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpNavigationSelCallAsQuery(json))?.FirstOrDefault().Json;
            return navigation;
        }

        public string UserLogin(string json)
        {
            var userLogin = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpUserLoginCallAsQuery(json))?.FirstOrDefault().Json;
            return userLogin;
        }
    }
}
