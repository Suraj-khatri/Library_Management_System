using LMS.Application.LLBL.DatabaseSpecific;
using LMS.Application.Model;
using LMS.Application.Service.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Application.Service.CustomerMembership
{
    public class CustomerMembershipService : ICustomerMembershipService
    {
        public string CustomerMembershipTsk(string Json)
        {
            using (var adapter = DataAccessHelper.GetAdapter())
            {
                string param = Json;

                ActionProcedures.SpCustomerMembershipTsk(ref Json,adapter);

                adapter.CloseConnection();
            }
            return Json;
        }

        public string CustomerUpgradeToMembershipTsk(string Json)
        {
            using (var adapter = DataAccessHelper.GetAdapter())
            {
                string param = Json;

                ActionProcedures.SpCustomerUpgradeToMembershipTsk(ref Json, adapter);

                adapter.CloseConnection();
            }
            return Json;
        }

        public string GetCustomerMembershipSel(string Json)
        {
            var customerMember = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpCustomerMembershipSelCallAsQuery(Json))?.FirstOrDefault().Json;
            return customerMember;
        }

        public string GetDynamicCustomerMembershipSel(string Json)
        {
            var customerMember = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpNewCustomerMembershipSelCallAsQuery(Json))?.FirstOrDefault().Json;
            return customerMember;
        }
        public string CustomerDetailSel(string Json)
        {
            var customerMember = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpNewCustomerDetailSelCallAsQuery(Json))?.FirstOrDefault().Json;
            return customerMember;
        }
    }
}
