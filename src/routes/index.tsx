import { component$, useSignal } from "@builder.io/qwik";
export default component$(() => {
  const count = useSignal(0);
  return (<main style={{textAlign:"center", marginTop:"50px", fontFamily:"sans-serif"}}><h1>Qwik + Tuti Project</h1><button onClick$={() => count.value++} style={{fontSize:"1.5rem", padding:"10px 20px", cursor:"pointer"}}>Contador: {count.value}</button><p>Si el botón suma, la resumabilidad en /tuti/ es exitosa.</p></main>);
});