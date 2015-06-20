using System.Collections.Generic;
using GovDomain.Domain;

namespace GovRepository.Repositories
{
    public class BillRepository : IBillRepository
    {
        private ICongressMemberRepository _congressMemberRepository;

        public BillRepository(ICongressMemberRepository congressMemberRepository)
        {
            this._congressMemberRepository = congressMemberRepository;
        }

        public Bill Get(long id)
        {
            switch (id)
            {
                case 1:
                    return new Bill()
                    {
                        BillNumber = "H.R.845",
                        Cosponsor = _congressMemberRepository.Get(1),
                        Sponsor = _congressMemberRepository.Get(2),
                        Title = "National Forest System Trails Stewardship Act"
                    };

                case 2:
                    return new Bill()
                    {
                        BillNumber = "H.R.1599",
                        Cosponsor = _congressMemberRepository.Get(2),
                        Sponsor = _congressMemberRepository.Get(1),
                        Title = "Safe and Accurate Food Labeling Act of 2015"
                    };

                default:
                    return null;
            }
        }

        public IEnumerable<Bill> GetAllBills()
        {
            return new List<Bill>
            {
                Get(1),
                Get(2)
            };
        }
    }
}
