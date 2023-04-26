import {FC, ReactNode} from "react"

export const InfoContentText: FC<{children: ReactNode}> = ({children}) => {
  return     <p className="mt-8 mb-4 font-light">
    {children}
  </p>
}