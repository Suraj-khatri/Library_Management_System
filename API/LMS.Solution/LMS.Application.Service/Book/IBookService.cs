using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Application.Service.Book
{
    public interface IBookService
    {
        string BookSel(string json);
        string BookTsk(string json);
        string AvailableBook(string json);
        string AllBooksDynamic(string json);
        string BookGenre(string json);
    }
}
