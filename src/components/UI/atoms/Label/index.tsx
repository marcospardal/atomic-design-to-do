import './styles.css';

export interface LabelProps {
  label: string;
  className?: string;
}

export default function Label({ label, className }: LabelProps) {
  return (
    <label className={className}>{label}</label>
  )
}