<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./pages/Home.svelte";
  import Vendedores from "./pages/Vendedores.svelte";
  import Clientes from "./pages/Clientes.svelte";
  import Facturacion from "./pages/Facturacion.svelte";
  import Productos from "./pages/Productos.svelte";

  export let url = '/'
</script>

<Router {url}>
  <nav class="pages">
    <Link to="/productos">Productos</Link>
    <Link to="/clientes">Clientes</Link>
    <Link to="/facturacion">Facturación</Link>
    <Link to="/vendedores">Vendedores</Link>
  </nav>
  <div class="appContainer">
    <Route path="/" component={Home} />
    <Route path="/productos" component={Productos} />
    <Route path="/clientes" component={Clientes} />
    <Route path="/facturacion" component={Facturacion} />
    <Route path="/vendedores" component={Vendedores} />
  </div>
</Router>

<style>
  
</style>
