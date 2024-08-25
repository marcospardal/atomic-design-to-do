import { ReactNode } from "react";
import { Header } from '@organisms/index'

interface DefaultPageProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title: string;
  headerOptions?: ReactNode;
}

export default function DefaultPage({ children, title, headerOptions, ...containerProps }: DefaultPageProps) {
  return (
    <div {...containerProps}>
      <Header 
        title={title}
        headerOptions={headerOptions}
      />
      {children}
    </div>
  )
}