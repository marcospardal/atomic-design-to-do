import Label from "../../components/UI/atoms/Label";
import TaskCard from "../../components/UI/molecules/TaskCard";
import Task from "@/types/Task.types";
import './styles.css';

type DisplayType = 'grid' | 'list';

export interface ListingProps {
  title: string;
  data: Task[];
  id: string;
  display?: DisplayType;
}

export default function Listing({ data, title, id, display = 'grid' }: ListingProps) {
  return (
    <>
      <Label label={title} />
      <section id={id} className={`container ${display}`}>
        {data.map(todo => <TaskCard {...todo} />)}
      </section>
    </>
  )
}