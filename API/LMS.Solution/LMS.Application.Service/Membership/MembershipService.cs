using LMS.Application.LLBL.DatabaseSpecific;
using LMS.Application.Model;
using LMS.Application.Service.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Application.Service.Membership
{
    public class MembershipService : IMembershipService
    {
        public string AllMembershipDynamic(string Json)
        {
            var membershship = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpNewMembershipSelCallAsQuery(Json))?.FirstOrDefault().Json;
            return membershship;
        }

        public string GetMembershipSel(string Json)
        {
            var membershship = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpMembershipSelCallAsQuery(Json))?.FirstOrDefault().Json;
            return membershship;
        }

        public string GetMembershipTypeSel(string Json)
        {
            var membershship = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpMembershipTypeSelCallAsQuery(Json))?.FirstOrDefault().Json;
            return membershship;
        }

        public string GetUserMembershipSel(string Json)
        {
            var membershship = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpUserMembershipSelCallAsQuery(Json))?.FirstOrDefault().Json;
            return membershship;
        }

        public string MembershipTsk(string Json)
        {
            using (var adapter = DataAccessHelper.GetAdapter())
            {
                string param = Json;

                ActionProcedures.SpMembershipTsk(ref Json, adapter);

                adapter.CloseConnection();
            }
            return Json;
        }
    }
}
