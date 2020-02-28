<template>
 <!-- Navigation -->
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
   <router-link to="/" class="navbar-brand">
          <img src="../../img/Logo.png" alt="Logo">
        </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
         <router-link class="nav-link" to="/">Home
                <span class="sr-only">(current)</span>
        </router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/alerts">Alerts</router-link>
        </li>
        <li class="nav-item">
        <router-link class="nav-link" to="/news">News</router-link>
        </li>
        <li class="nav-item">
       <router-link class="nav-link" to="/signup">Sign Up</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Log In</router-link>
       </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
       </li>
      </ul>
	  <form class="form-inline my-2 my-lg-0">
	  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
	 <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
	</form>
    </div>
  </div>
</nav>
</template>
