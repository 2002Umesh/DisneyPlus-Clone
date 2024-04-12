import "./App.css";
import Mains from "./components/Mains";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Tv from "./components/Tv";
import Sports from "./components/Sports";
import Category from "./components/Category";
import MovieDetail from "./components/MovieDetail";
import LoginForm from "./components/LoginForm";
import { Contact } from "./components/Contact";
import Subscribtion from "./components/Subscribtion";
import AdminLayout from "./components/layouts/Admin-Layout";
import AdminUsers from "./components/AdminUsers";
import AdminContacts from "./components/AdminContacts";
import AdminUpdate from "./components/AdminUpdate";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div>
      <Routes>
        <Route path="/" element={<Mains />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Loginform" element={<LoginForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Tv" element={<Tv />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Details" element={<MovieDetail />} />
        <Route path="/Paywall" element={<Subscribtion />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
        </Route>
      </Routes>
    </motion.div>
  );
}

export default App;
