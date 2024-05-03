using LMS.Application.LLBL.DatabaseSpecific;
using LMS.Application.Model;
using LMS.Application.Service.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Application.Service.User
{
    public class UserService : IUserService
    {
        public string UserTsk(string Json)
        {
            using (var adapter = DataAccessHelper.GetAdapter())
            {
                string param = Json;

                ActionProcedures.SpUserTsk(ref Json, adapter);

                adapter.CloseConnection();
            }
            return Json;
        }

        public string GetUserSel(string Json)
        {
            var users = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpUserSelCallAsQuery(Json))?.FirstOrDefault().Json;
            return users;
        }

        public string UserTypeSel(string Json)
        {
            var users = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpUserTypeSelCallAsQuery(Json))?.FirstOrDefault().Json;
            return users;
        }

        public string GetUserDynamic(string Json)
        {
            var users = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpNewUserSelCallAsQuery(Json))?.FirstOrDefault().Json;
            return users;
        }
    }
}

