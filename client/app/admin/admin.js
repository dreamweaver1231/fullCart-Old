'use strict';

angular.module('fullCartApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin'
      })
      .state('addProduct', {
        url: '/admin/addProduct',
        templateUrl: 'components/cartAdminAddProduct/cartAdminAddProduct.html',
        controller: 'CartAdminAddProductController',
        controllerAs: 'vm'
      })
      .state('addCategory', {
        url: '/admin/addCategory',
        templateUrl: 'components/cartAdminAddCategory/cartAdminAddCategory.html',
        controller: 'CartAdminAddCategoryController',
        controllerAs: 'vm'
      })
      .state('addBrand', {
        url: '/admin/addBrand',
        templateUrl: 'components/cartAdminAddBrand/cartAdminAddBrand.html',
        controller: 'cartAdminAddBrandController',
        controllerAs: 'vm'
      });
  });
