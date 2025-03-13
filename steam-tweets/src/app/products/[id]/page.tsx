export default async function FirstProduct({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <>
      <h1>Product: {id}</h1>;<button>back to home</button>
    </>
  );
}
