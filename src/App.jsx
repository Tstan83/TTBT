
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
     
      <section>
      <h1>Amazing scienthhists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>

    </main>
  );
}