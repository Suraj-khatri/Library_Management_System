using LMS.Application.LLBL.DatabaseSpecific;
using LMS.Application.Model;
using LMS.Application.Service.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMS.Application.Service.Book
{
    public class BookService : IBookService
    {
        public string AllBooksDynamic(string json)
        {
            var books = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpNewBookSelCallAsQuery(json))?.FirstOrDefault().Json;
            return books;
        }

        public string AvailableBook(string json)
        {
            var books = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpAvailableBookSelCallAsQuery(json))?.FirstOrDefault().Json;
            return books;
        }

        public string BookGenre(string json)
        {
            var books = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpBookGenreSelCallAsQuery(json))?.FirstOrDefault().Json;
            return books;
        }

        public string BookSel(string json)
        {
            var books = DataAccessHelper.FetchDerivedModel<MvJson>(RetrievalProcedures.GetSpBookSelCallAsQuery(json))?.FirstOrDefault().Json;
            return books;
        }

        public string BookTsk(string json)
        {
            using (var adapter = DataAccessHelper.GetAdapter())
            {
                string param = json;

                ActionProcedures.SpBookTsk(ref json, adapter);

                adapter.CloseConnection();
            }
            return json;
        }
    }
}
