import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import("./views/LoginPage.vue")
    },
    {
        path: "/registration",
        name: "Registration",
        component: () => import("./views/RegistrationPage.vue")
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("./views/HomePage.vue")
    },
    {
        path: "/cart",
        name: "Cart",
        component: () => import("./views/CartView.vue")
    },
    {
        path: '/item/:id',
        name: 'ItemDetail',
        component: () => import("./views/ItemDetail.vue")

      }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
