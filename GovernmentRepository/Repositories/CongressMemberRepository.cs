using System.Collections.Generic;
using System.ComponentModel;
using GovDomain.Domain;

namespace GovRepository.Repositories
{
    public class CongressMemberRepository : ICongressMemberRepository
    {
        public CongressMember Get(long id)
        {
            switch (id)
            {
                case 1:
                    return new CongressMember()
                    {
                        Id = 1,
                        Chamber = "House",
                        District = "At Large",
                        Name = "Cynthia Lummis",
                        State = "Wyoming"
                    };

                case 2:
                    return new CongressMember()
                    {
                        Id = 2,
                        Chamber = "Senate",
                        District = "4",
                        Name = "Mike Pompeo",
                        State = "Kansas"
                    };

                default:
                    return null;
            }
        }

        public IEnumerable<CongressMember> GetAllCongressMembers()
        {
            return new List<CongressMember>
            {
                Get(1),
                Get(2)
            };
        }
    }
}
