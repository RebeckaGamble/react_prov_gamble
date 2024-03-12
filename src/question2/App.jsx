// 2. API-Anrop och Rendering (3p)
//TODO: Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
//! Visa endast titlarna för de första 5 inläggen.
//TODO: Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.

import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data.slice(0, 5));
    }
    getPosts();
  }, []);

  return (
    <div className="w-full h-auto bg-slate-50 px-2 py-10">
      <h2 className="font-semibold pb-4 text-lg">Question 2.</h2>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <button
                onClick={() => console.log(post.id)}
                className="border-none bg-slate-50 hover:blue"
              >
                {/**  <a href="" >
              </a>*/}
                <p>{post.title}</p>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
