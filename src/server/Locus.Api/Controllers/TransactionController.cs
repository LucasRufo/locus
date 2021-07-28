using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Locus.Api.Controllers
{
    public class TransactionController : BaseController
    {
        public async Task<IActionResult> Get()
        {
            return Ok();
        }
    }
}
