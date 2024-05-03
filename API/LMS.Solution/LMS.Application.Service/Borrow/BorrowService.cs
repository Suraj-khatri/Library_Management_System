using LMS.Application.LLBL.DatabaseSpecific;
using LMS.Application.Model;
using LMS.Application.Service.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Application.Service.Borrow
{
    public class BorrowService : IBorrowService
    {
        public string BorrowSel(string json)
        {
            var allBorrow = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpBorrowSelCallAsQuery(json))?.FirstOrDefault().Json;
            return allBorrow;
        }

        public string BorrowTsk(string json)
        {
           using(var adapter = DataAccessHelper.GetAdapter())
            {
                string param = json;

                ActionProcedures.SpCheckPerformBorrowCopyTsk(ref json, adapter);

                adapter.CloseConnection();
            }
            return json;
        }
        public string GetAllRealTimeBorrowCharge(string json)
        {
            var charges = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpRealTimeBorrowChargeSelCallAsQuery(json))?.FirstOrDefault().Json;
            return charges;
        }
    }
}
