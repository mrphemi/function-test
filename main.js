import Alpine from "alpinejs";

import { products } from "./data.js";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";

import "./style.css";

Alpine.data("products", products);

Alpine.start();
