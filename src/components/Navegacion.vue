<template>
<div>

    <!-- Barra de navegación con título al home y links al router -->
    <b-navbar toggleable="lg" type="dark" variant="info">
        <!-- Logo -->
        <b-navbar-brand href="#">
        <router-link 
            :to="{path: '/'}" 
            class="navbar_home"
            >Classic Models</router-link> 
        </b-navbar-brand>
        
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        

        <b-collapse id="nav-collapse" is-nav>
        <!-- Lo demás a la derecha -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item right href="#">
            <router-link 
                :to="{name: 'Productos'}"
                class="navbar_white"
            >Productos</router-link>
            </b-nav-item>
            <b-nav-item right href="#">
            <router-link 
                :to="{name: 'Inventario'}"
                class="navbar_white"
            >Inventario</router-link>
            </b-nav-item>
            <b-nav-item right href="#">
            <router-link 
                :to="{name: 'Despachos'}"
                class="navbar_white"
            >Despachos</router-link>
            </b-nav-item>
            <b-nav-item right href="#">
            <router-link 
                :to="{name: 'Ordenes'}"
                class="navbar_white"
            >Órdenes</router-link>
            </b-nav-item>
                    
            

        </b-navbar-nav>
        </b-collapse>
    </b-navbar>

<b-breadcrumb>
            <b-breadcrumb-item href="#home">
            <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
            
            </b-breadcrumb-item>
            <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
            <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
            <b-breadcrumb-item active>Baz</b-breadcrumb-item>
        </b-breadcrumb>
</div>
</template>

<script>
export default {
    name: 'Navegacion',
}
</script>

<style lang="scss" scoped>
$info: #38006b;  //.nav {background-color: #38006b}

.navbar_home {
    text-decoration: none;
    color: #FFFFFF;
    font-size: 1.5rem;
    text-transform: uppercase;
    &:hover {
    font-weight: bold;
    color: #ffffff;
    }
}
.navbar_white {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-size: 1rem;
    text-align: right;
    &:hover {
    text-decoration: none;
    font-weight: bold;
    color: #FFFFFF;
    }
}

@import "../../node_modules/bootstrap/scss/bootstrap.scss";
</style>