"use strict";angular.module("caribbeanBitchWebApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).run(["$rootScope",function(a){(new WOW).init(),(new WOW).sync(),a.$on("$routeChangeStart",function(a,b){(new WOW).sync()})}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/inicio.html",controller:"InicioCtrl",controllerAs:"inicio"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("caribbeanBitchWebApp").controller("InicioCtrl",["$scope","$rootScope",function(a,b){b.PAGE="inicio",$(".parallax").parallax()}]),angular.module("caribbeanBitchWebApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/inicio.html",'<main> <div class="separadorTop"></div> <div class="parallax-container" style="height:500px"> <div class="parallax"> <img src="images/inicio2.aba892a1.jpg"> </div> </div> <div class="container" style="padding:40px 0"> <div class="row"> <div class="col s12 m6 l4 wow fadeIn" data-wow-duration="1s" data-wow-delay="1s"> <div class="card hoverable"> <div class="card-image waves-effect waves-block waves-light"> <img class="activator" src="images/moda1.84442d29.jpg"> </div> <div class="card-content"> <span class="card-title activator grey-text text-darken-4">Tenis estilo uno<i class="material-icons right">more_vert</i></span> <p><a href="#">Ver Detalles</a></p> <div class="divider"></div> <div class="section"> <div class="col s6"> <strong>$340</strong> </div> <div class="col s6"> <a class="btn-floating waves-effect waves-light bg-principal btn-flat" style="position:absolute;right:25px;bottom:6px"><i class="material-icons">add_shopping_cart</i></a> </div> </div> </div> <div class="card-reveal"> <span class="card-title grey-text text-darken-4">Tenis estilo uno<i class="material-icons right">close</i></span> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sequi dolores ea quis, quae tempore obcaecati at ut iusto sunt unde. Minus ad molestiae, porro similique expedita debitis mollitia atque..</p> </div> </div> </div> <div class="col s12 m6 l4 wow fadeIn" data-wow-duration="1s" data-wow-delay="1s"> <div class="card hoverable"> <div class="card-image waves-effect waves-block waves-light"> <img class="activator" src="images/moda2.cec0982e.jpg"> </div> <div class="card-content"> <span class="card-title activator grey-text text-darken-4">Tenis estilo dos<i class="material-icons right">more_vert</i></span> <p><a href="#">Ver Detalles</a></p> <div class="divider"></div> <div class="section"> <div class="col s6"> <strong>$400</strong> </div> <div class="col s6"> <a class="btn-floating waves-effect waves-light bg-principal btn-flat" style="position:absolute;right:25px;bottom:6px"><i class="material-icons">add_shopping_cart</i></a> </div> </div> </div> <div class="card-reveal"> <span class="card-title grey-text text-darken-4">Tenis estilo dos<i class="material-icons right">close</i></span> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sequi dolores ea quis, quae tempore obcaecati at ut iusto sunt unde. Minus ad molestiae, porro similique expedita debitis mollitia atque..</p> </div> </div> </div> <div class="col s12 m6 l4 wow fadeIn" data-wow-duration="1s" data-wow-delay="1s"> <div class="card hoverable"> <div class="card-image waves-effect waves-block waves-light"> <img class="activator" src="images/moda3.62c14a42.jpg"> </div> <div class="card-content"> <span class="card-title activator grey-text text-darken-4">Tenis estilo tres<i class="material-icons right">more_vert</i></span> <p><a href="#">Ver Detalles</a></p> <div class="divider"></div> <div class="section"> <div class="col s6"> <strong>$280</strong> </div> <div class="col s6"> <a class="btn-floating waves-effect waves-light bg-principal btn-flat" style="position:absolute;right:25px;bottom:6px"><i class="material-icons">add_shopping_cart</i></a> </div> </div> </div> <div class="card-reveal"> <span class="card-title grey-text text-darken-4">Tenis estilo tres<i class="material-icons right">close</i></span> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sequi dolores ea quis, quae tempore obcaecati at ut iusto sunt unde. Minus ad molestiae, porro similique expedita debitis mollitia atque..</p> </div> </div> </div> </div> </div> </main>')}]);