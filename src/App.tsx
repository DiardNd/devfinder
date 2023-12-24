import { useState } from "react";

import { Container } from "./components/Container";
import { TheHeader } from "./components/TheHeader";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";
import { defaultUser } from "./mock";
import { GithubError, GithubUser, LocalGithubUser } from "./types";
import { isGithubUser } from "./utuls/typeguards";
import { extractLocalUser } from "./utuls/extract-local-user";

const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);
  // useEffect(() => {
  //   const userData = getUserByName("king");
  //   console.log("userData", userData());
  //   console.log("mounting");
  //   return () => {
  //     console.log("unmount");
  //     // userData === null;
  //   };
  // }, []);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const user = (await res.json()) as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <div>
      <Container>
        <TheHeader />
        <Search hasError={!user} onSubmit={fetchUser} />
        {user && <UserCard {...user} />}
      </Container>
    </div>
  );
}

export default App;
