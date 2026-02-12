import { ref, onMounted, computed } from "vue";
export default function useCripto() {
  const criptoMonedas = ref([]);
  const monedas = ref([
    { codigo: "USD", texto: "Dolar de Estados Unidos" },
    { codigo: "MXN", texto: "Peso Mexicano" },
    { codigo: "EUR", texto: "Euro" },
    { codigo: "GBP", texto: "Libra Esterlina" },
    { codigo: "COP", texto: "Peso Colombiano" },
  ]);

  const cotizacion = ref({});
  const cargando = ref(false);

  onMounted(() => {
    const url =
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then(({ Data }) => {
        criptoMonedas.value = Data;
      });
  });

  const obtenerCotizacion = async (cotizar) => {
    cargando.value = true;
    cotizacion.value = {};
    const { moneda, criptoMoneda } = cotizar;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;

    const respuesta = await fetch(url);
    const data = await respuesta.json();
    cotizacion.value = data.DISPLAY[criptoMoneda][moneda];
    cargando.value = false;
  };

  const mostrarResultado = computed(() => {
    return Object.values(cotizacion.value).length > 0;
  });

  return {
    monedas,
    criptoMonedas,
    cargando,
    cotizacion,
    obtenerCotizacion,
    mostrarResultado,
  };
}
