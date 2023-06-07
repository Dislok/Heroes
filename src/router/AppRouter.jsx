import {  Route, Routes } from "react-router-dom"
import { HeroesRoutes} from "../Heroes"
import { LoginPage } from "../auth"
import { PriveteRoute } from "./PriveteRoute"
import { PublicRoute } from "./PublicRoute"





export const AppRouter = () => {
  return (
    <>
   
    <Routes>

    <Route path="/login" element={
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>}/>
        
        {/* <Route path="/login" element={<LoginPage/>}/> */}
        <Route path="/*" element={
          <PriveteRoute>
            <HeroesRoutes/>
          </PriveteRoute>}/>
        
        {/* <Route path="/*" element={<HeroesRoutes/>}/> */}
        
    </Routes>
    </>
  )
}
