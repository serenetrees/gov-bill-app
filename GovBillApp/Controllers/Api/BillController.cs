using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GovDomain.Domain;
using GovRepository.Repositories;

namespace FreshAngularTemplate.Controllers.Api
{
    public class BillController : ApiController
    {
        private readonly IBillRepository _billRepository;

        public BillController()
        {
            // This example uses poor-man's dependency injection, but you might want to use a framework for this.
            this._billRepository = new BillRepository(new CongressMemberRepository());
        }

        // GET: api/Bill
        public IEnumerable<Bill> Get()
        {
            return _billRepository.GetAllBills();
        }

        // GET: api/Bill/5
        public Bill Get(int id)
        {
            return _billRepository.Get(id);
        }

        // POST: api/Bill
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Bill/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Bill/5
        public void Delete(int id)
        {
        }
    }
}
