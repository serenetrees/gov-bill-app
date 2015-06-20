using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GovDomain.Domain;

namespace GovRepository.Repositories
{
    public interface ICongressMemberRepository
    {
        CongressMember Get(long id);
        IEnumerable<CongressMember> GetAllCongressMembers();
    }
}
