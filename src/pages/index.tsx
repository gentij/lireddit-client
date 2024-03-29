import { withUrqlClient } from "next-urql";
import { Navbar } from "../components/Navbar";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <>
      <Navbar />
      {!data
        ? null
        : data.posts.map((post) => <div key={post.id}>{post.title}</div>)}
      <div>haha</div>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
