import styles from "../ui/dashboard/dashboard.module.css"
import john from "@/public/john.png";
import jane from "@/public/jane.png"
import nadeem from "@/public/nadeem.png"
import Card from "../ui/dashboard/card/card";
const cardData = [
  { image:jane ,name: "Jane Smith", job: "Sales manager - France", tasks:{done:1,whole:6},money:3490,asc:true },
  { image:john ,name: "Nadeem Isac", job: "Sales manager - France", tasks:{done:2,whole:6},money:490,asc:false },
  { image:nadeem ,name: "John K.", job: "Sales manager - France", tasks:{done:3,whole:8},money:780,asc:true }
  
]
export default function Dashboard() {
    return (
        <>
        <div className={styles.cards}>
        {cardData.map((card,index)=>
          <Card  key={index} image={card.image} name={card.name} job={card.job} tasks={card.tasks} money={card.money} asc={card.asc}/>
        )}
        </div>
        <div className={styles.boxs}>
  
        </div>
      </>
    );
  }