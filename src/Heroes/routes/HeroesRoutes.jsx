import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage ,HeroPage,MarvelPage, SearchPage} from "../pages"


export const HeroesRoutes = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Routes>
        <Route path="/dc" element={<DcPage/>}/>
        <Route path="/Marvel" element={<MarvelPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/hero" element={<HeroPage/>}/>
        
        <Route path="/*" element={<Navigate to="/dc"/>}/>
    </Routes>
    </div>
    </>
  )
}