import Gap from "../components/common/Gap";
import Heading from "../components/common/Heading";
import CampaignGrid from "../module/campaign/CampaignGrid";
import CampaignHead from "../module/campaign/CampaignHead";
import CampaignItem from "../module/campaign/CampaignItem";

const DashboardPage = () => {
  return (
    <div className="flex flex-col flex-1">
      <Heading number={String(4)}>Your Campaign</Heading>
      <CampaignHead></CampaignHead>
      <Gap></Gap>
      <Heading>Popular Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <CampaignItem key={index} />
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading>Recent Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <CampaignItem key={index} />
          ))}
      </CampaignGrid>
    </div>
  );
};

export default DashboardPage;
