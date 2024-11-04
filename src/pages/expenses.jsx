import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const ExpensesPage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="mb-8">
      <h2 className="text-gray-500 text-lg mb-4">Expenses Comparison</h2>
        <Card
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus consequatur cumque hic voluptatem totam ab quibusdam facilis distinctio ratione, sequi vel porro eum."
        />
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