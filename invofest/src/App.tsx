import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./page/Beranda";
import Competition from "./page/Competition";
import Seminar from "./page/Seminar";
import Workshop from "./page/Workshop";
import Talkshow from "./page/Talkshow";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Register from "./page/Register";
import Login from "./page/Login";
import Dashboard from "./page/dashboard/Dashboard";
import ProtectedRoute from "./route/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import CategoryIndex from "./page/dashboard/kategori/CategoryIndex";
import PembicaraIndex from "./page/dashboard/pembicara/PembicaraIndex";
import EventIndex from "./page/dashboard/event/EventIndex";
import CategoryCreate from "./page/dashboard/kategori/CategoryCreate";
import EventCreate from "./page/dashboard/event/EventCreate";
import PembicaraCreate from "./page/dashboard/pembicara/PembicaraCreate";
import EventEdit from "./page/dashboard/event/EventEdit";
import CategoryEdit from "./page/dashboard/kategori/CategoryEdit";
import PembicaraEdit from "./page/dashboard/pembicara/PembicaraEdit";
import Biodata from "./page/dashboard/biodata/Biodata";

 function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda/>} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/talkshow" element={<Talkshow />} />
        </Route>

        <Route element={<AuthLayout/>}>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register/>}/>
        </Route>
        
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/dashboard/category/create" element={<CategoryCreate/>} />
            <Route path="/dashboard/category" element={<CategoryIndex/>}/>
            <Route path="/dashboard/category/edit/:id" element={<CategoryEdit />}/>
            <Route path="/dashboard/event/create" element={<EventCreate />}/>
            <Route path="/dashboard/event" element={<EventIndex />}/>
            <Route path="/dashboard/event/edit/:id" element={<EventEdit />}/>
            <Route path="/dashboard/pembicara" element={<PembicaraIndex/>}/>
            <Route path="/dashboard/pembicara/create" element={<PembicaraCreate/>}/>
            <Route path="/dashboard/pembicara/edit/:id" element={<PembicaraEdit/>}/>
            <Route path="/dashboard/biodata" element={<Biodata/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
 }

 export default App;