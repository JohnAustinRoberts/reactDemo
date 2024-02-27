import './App.css'
import ListItem from "./components/ListItem";

function App() {
  const data = [
    {
      title: "Have Breakfast",
      description: "2 eggs on toast",
      time: "7am"
    },
    {
      title: "Cardio",
      description: "Jog 5km",
      time: "8am"
    },
    {
      title: "Start Work!",
      description: "Log onto machine and open all relevant software",
      time: "9am"
    },
    {
      title:"Mow the lawn!",
      description: "Cut the grass during your lunch break!",
      time: "2pm"
    }
  ];

  return (
   <div className="App">
    <ol>
      <li>
        <h2>Have Breakfast</h2>
        <p>Description: 2 eggs on toast</p>
        <p>Time: 7am</p>
      </li>
    </ol>
    <ol>
      <li>
      <h2>{data[0].title}</h2>
      <p>{data[0].description}</p>
      <p>{data[0].time}</p>
      </li>
      <li>
      <h2>{data[1].title}</h2>
      <p>{data[1].description}</p>
      <p>{data[1].time}</p>
      </li>
      <li>
      <h2>{data[2].title}</h2>
      <p>{data[2].description}</p>
      <p>{data[2].time}</p>
      </li>
    </ol>
    <ol>
      {data.map((itemObj, index) => (
        <ListItem key={index} title={itemObj.title} description={itemObj.description} time={itemObj.time} />
      ))}
    </ol>



   </div>
  )
}

export default App
