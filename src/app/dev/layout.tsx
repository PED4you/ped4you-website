import {PageProvider} from "@/components/Simulator/PageProvider"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageProvider>
      {children}
    </PageProvider>
  )
}

export default Layout