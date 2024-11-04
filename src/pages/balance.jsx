import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Balances" />
        <Card title="&nbsp;" />
        <Card title="&nbsp;" 
         desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores perferendis velit incidunt fugiat exercitationem asperiores eveniet aliquid voluptas aperiam harum dolorem quis eaque, odio minus quo accusantium officiis qui veniam?"
        /> 
      </div>
      {/* top content end*/}
      <div className="md:grid md:grid-cols-3 md:gap-6">

        <Card desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores perferendis velit incidunt fugiat exercitationem asperiores eveniet aliquid voluptas aperiam harum dolorem quis eaque, odio minus quo accusantium officiis qui veniam?"/>
        <Card />
        <Card />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default BalancePage;