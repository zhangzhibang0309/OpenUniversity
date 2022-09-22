import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/course",
      name: "course",
      component: () => import("../views/Course.vue"),
    },
    {
      path: "/learningmode",
      name: "learningmode",
      component: () => import("../views/LearningMode.vue"),
    },
    {
      path: "/edusystem",
      name: "edusystem",
      component: () => import("../views/EduSystem.vue"),
    },
    {
      path: "/level",
      name: "level",
      component: () => import("../views/Level.vue"),
    },
    {
      path: "/sourceclass",
      name: "sourceclass",
      component: () => import("../views/SourceClass.vue"),
    },
    {
      path: "/major",
      name: "major",
      component: () => import("../views/Major.vue"),
    },
	{
	  path: "/login",
	  name: "login",
	  component: () => import("../views/Login.vue"),
	},
  {
	  path: "/loginmain",
	  name: "loginmain",
	  component: () => import("../views/LoginMain.vue"),
	},
  {
	  path: "/",
	  name: "welcome",
	  component: () => import("../views/Welcome.vue"),
	}
	
  ],
});

export default router;
