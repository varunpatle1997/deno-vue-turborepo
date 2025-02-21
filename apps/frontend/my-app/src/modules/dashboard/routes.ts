const dashboardRoutes = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('./components/UserDashboard.vue'),
    },
  ];

  export default dashboardRoutes;