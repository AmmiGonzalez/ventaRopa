<script>
  let cliente = {
    NIT: "",
    Nombre: "",
    FechaNacimiento: "",
    Telefono: "",
    Correo: ""
  };
  async function registroCliente(){
    const response = await fetch('http://localhost:5000/clientes/nuevoCliente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    });

    if (response.ok) {
      const createdClient = await response.json();
      console.log('Cliente registrado:', createdClient);
      // Aquí puedes agregar tu lógica para manejar la respuesta exitosa
    } else {
      const errorData = await response.json();
      console.error('Error al registrar el cliente:', errorData);
      // Aquí puedes agregar tu lógica para manejar el error
    }
  }
</script>

<div class="clientesContainer">
 <h1>Clientes</h1>

  <form on:submit|preventDefault={registroCliente}>
    <label for="address" class="formbold-form-label">
      NIT:
    </label>
    <input
        bind:value={cliente.NIT}
        type="text"
        name="NIT"
        id="NIT"
        class="formbold-form-input"
        required
    />
    <br>
    
    
    <label for="address" class="formbold-form-label">
      Nombre:
    </label>
    <input
      bind:value={cliente.Nombre}
      type="text"
      name="Nombre"
      id="Nombre"
      class="formbold-form-input"
      required
    />
    <br>
    
    
    <label for="address" class="formbold-form-label">
      Fecha Nacimiento:
    </label>
    <input
      bind:value={cliente.FechaNacimiento}
      type="date"
      name="FechaNacimiento"
      id="FechaNacimiento"
      class="formbold-form-input"
      required
    />
    <br>
    
    
    <label for="address" class="formbold-form-label">
      Telefono:
    </label>
    <input
      bind:value={cliente.Telefono}
      type="text"
      name="Telefono"
      id="Telefono"
      class="formbold-form-input"
      required
    />
    <br>
    
    <label for="address" class="formbold-form-label">
      Correo:
    </label>
    <input
      bind:value={cliente.Correo}
      type="text"
      name="Correo"
      id="Correo"
      class="formbold-form-input"
      required
    />
    <br>
    <button class="formbold-btn">Registrar </button>
  </form>
</div>

<style>

</style>