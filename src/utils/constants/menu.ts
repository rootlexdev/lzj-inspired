import { NavLinkProps } from "../interfaces";

export const MenuLinks: NavLinkProps[] = [
    {
        text: "Product",
        hasDropdown: true,
        url: "/product",
    },
    {
        hasDropdown: true,
        text: "Solutions",
        url: "/solutions",
    },
    {
        hasDropdown: false,
        text: "Customers",
        url: "/customers",
    },
    {
        hasDropdown: true,
        text: "Resources",
        url: "/resources",
    },
];
