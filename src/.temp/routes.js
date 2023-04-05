const c1 = () => import(/* webpackChunkName: "page--src-templates-project-post-vue" */ "D:\\WIP Shuvam Dospirare\\Github\\portfolio\\bshuva.github.io\\src\\templates\\ProjectPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-journal-post-vue" */ "D:\\WIP Shuvam Dospirare\\Github\\portfolio\\bshuva.github.io\\src\\templates\\JournalPost.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-photography-vue" */ "D:\\WIP Shuvam Dospirare\\Github\\portfolio\\bshuva.github.io\\src\\pages\\Photography.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-journal-vue" */ "D:\\WIP Shuvam Dospirare\\Github\\portfolio\\bshuva.github.io\\src\\pages\\Journal.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-illustration-vue" */ "D:\\WIP Shuvam Dospirare\\Github\\portfolio\\bshuva.github.io\\src\\pages\\Illustration.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "D:\\WIP Shuvam Dospirare\\Github\\portfolio\\bshuva.github.io\\src\\pages\\Contact.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\WIP Shuvam Dospirare\\Github\\portfolio\\bshuva.github.io\\node_modules\\gridsome\\app\\pages\\404.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\WIP Shuvam Dospirare\\Github\\portfolio\\bshuva.github.io\\src\\pages\\Index.vue")

export default [
  {
    path: "/projects/sambar/",
    component: c1
  },
  {
    path: "/projects/sketchel/",
    component: c1
  },
  {
    path: "/journal/l-iving-plastics/",
    component: c2
  },
  {
    path: "/projects/genrative-art/",
    component: c1
  },
  {
    path: "/projects/design-education/",
    component: c1
  },
  {
    path: "/projects/dessor/",
    component: c1
  },
  {
    path: "/projects/barber-cards/",
    component: c1
  },
  {
    path: "/journal/grounded-theory/",
    component: c2
  },
  {
    path: "/photography/",
    component: c3
  },
  {
    path: "/journal/",
    component: c4
  },
  {
    path: "/illustration/",
    component: c5
  },
  {
    path: "/contact/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
