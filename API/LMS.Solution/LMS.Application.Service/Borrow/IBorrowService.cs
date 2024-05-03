using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Application.Service.Borrow
{
    public interface IBorrowService
    {
        string BorrowSel(string json);
        string BorrowTsk(string json);
        string GetAllRealTimeBorrowCharge(string json);

    }
}
