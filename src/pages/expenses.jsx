import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const ExpensesPage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
      <Card title="Expenses Comparison"
          desc="This is the description for Expenses Comparison, and the card will span two columns."
          className="md:col-span-3 p-6 bg-white shadow-lg rounded-lg" />
        
      </div>
      {/* top content end*/}
      <div className="md:grid md:grid-cols-3 md:gap-6">
      <Card title="Expenses Breakdown" />
        <Card title="&nbsp;" 
         desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores perferendis velit incidunt fugiat exercitationem asperiores eveniet aliquid voluptas aperiam harum dolorem quis eaque, odio minus quo accusantium officiis qui veniam?"
        /> 
        <Card title="&nbsp;" />
        <Card />
        <Card />
        <Card desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores perferendis velit incidunt fugiat exercitationem asperiores eveniet aliquid voluptas aperiam harum dolorem quis eaque, odio minus quo accusantium officiis qui veniam?"/>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default ExpensesPage;