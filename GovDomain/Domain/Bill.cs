namespace GovDomain.Domain
{
    public class Bill
    {
        /// <summary>
        /// H.R.83
        /// </summary>
        public string BillNumber { get; set; }

        public CongressMember Cosponsor { get; set; }
        public long Id { get; set; }
        public CongressMember Sponsor { get; set; }
        public string Title { get; set; }

    }
}