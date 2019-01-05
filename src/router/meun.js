// 该文件仅仅作为数据传递给Vuex
export default [
    {
        path: '/',
        // redirect: { path: '/page/home' }
        component: resolve => require(['@/components/welcome/welcome'], resolve),

    },
    {
        path: '/public',
        title: '共有',
        icon: '\ue63a',
        component: resolve => require(['@/components/public'], resolve),
        children: [
            {
                path: '/',
                component: resolve => require(['@/components/anli'], resolve),
            },
        ]
    },
]