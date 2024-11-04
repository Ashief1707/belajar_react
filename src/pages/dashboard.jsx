import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const DashboardPage = () => {
  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <Card title="Total Balance" />
        <Card 
            title="Goals"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae earum ex doloribus, tenetur optio iusto exercitationem reprehenderit distinctio minus nam delectus ab ea asperiores fugiat cupiditate? Blanditiis doloremque nam aliquam!" 
        />
        <Card title="Upcoming Bill" /> 
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-6">

        <div className="md:col-span-1">
          <Card 
            title="Recent Transaction"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae earum ex doloribus, tenetur optio iusto exercitationem reprehenderit distinctio minus nam delectus ab ea asperiores fugiat cupiditate? Blanditiis doloremque nam aliquam!"
         />
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
          <Card title="Statistics" />
          <Card title="Expenses Breakdown" />
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;