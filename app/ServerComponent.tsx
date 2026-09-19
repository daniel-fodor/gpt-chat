export default async function ServerComponent() {
  const req = await fetch("https://reqres.in/api/users/2");
  const { data } = await req.json();

  return (
    <div className="my-5">
      <h1 className="font-bold text-2xl">Server Component</h1>
      <div>
        {`${data.first_name} ${data.last_name}`}
      </div>
    </div>
  );
}