import todolistIcon from "../../images/icon-todo.svg";
import calenderIcon from "../../images/icon-calendar.svg";
import remindersIcon from "../../images/icon-reminders.svg";
import planningIcon from "../../images/icon-planning.svg";

export const navLinks = [
  {
    menu: "Features",
    dropdownMenu: [
      {
        img: todolistIcon,
        menu: "Todo List",
        link: "#",
      },
      {
        img: calenderIcon,
        menu: "Calender",
        link: "#",
      },
      {
        img: remindersIcon,
        menu: "Reminders",
        link: "#",
      },
      {
        img: planningIcon,
        menu: "Planning",
        link: "#",
      },
    ],
  },
  {
    menu: "Company",
    dropdownMenu: [
      {
        menu: "History",
        link: "#",
      },
      {
        menu: "Our Team",
        link: "#",
      },
      {
        menu: "Blog",
        link: "#",
      },
    ],
  },
  {
    menu: "Careers",
    link: "#",
  },
  {
    menu: "About",
    link: "#",
  },
];
