import { NavBar } from "../ui/tubelight-navbar";
import { Home, Users, Briefcase, FolderKanban, UserCircle, DollarSign, Award } from "lucide-react";

const Navbar = () => {
    const navItems = [
        { name: "Home", url: "#home", icon: Home },
        { name: "About us", url: "#about", icon: Users },
        { name: "Services", url: "#services", icon: Briefcase },
        { name: "Work", url: "#work", icon: FolderKanban },
        { name: "Team", url: "#team", icon: UserCircle },
        { name: "Pricing", url: "#pricing", icon: DollarSign },
        { name: "Awards", url: "#awards", icon: Award },
    ];

    return <NavBar items={navItems} />;
};

export default Navbar
