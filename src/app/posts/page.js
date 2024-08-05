"use client";
import axios from "axios";
import Post from "../../components/Post";
import Fieldset from "@/components/Fieldset";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [postsFilter, setPostsFilter] = useState([]);
  let tags = [];

  useEffect(() => {
    axios.get("https://dummyjson.com/posts").then((res) => {
      setPosts(res.data.posts);
      setPostsFilter(res.data.posts);
    });
  }, []);

  console.log(posts);
  posts.forEach((post) => {
    tags = tags.concat(post.tags);
  });
  tags = new Set(tags); // remove duplicates by converting to set

  const handleTagChange = (e) => {
    if (e.target.value === "all") {
      setPostsFilter(posts);
    } else {
      setPostsFilter(posts.filter((p) => p.tags.includes(e.target.value)));
    }
  };

  return (
    <>
      <div className="fixed left-0 top-64 p-6 rounded-e-xl bg-slate-900 text-white">
        <div className="flex flex-col">
          <Fieldset tags={tags} onTagChange={handleTagChange} />
        </div>
      </div>
      <div className="container mx-auto mt-8">
        {postsFilter.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </>
  );
}

// {
//   posts: [
//     {
//       id: 1,
//       title: 'His mother had always taught him',
//       body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
//       userId: 9,
//       tags: [Array],
//       reactions: 2
//     },
//     {
//       id: 2,
//       title: 'He was an expert but not in a discipline',
//       body: 'He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.',
//       userId: 13,
//       tags: [Array],
//       reactions: 2
//     }
//   ],
//   total: 150,
//   skip: 0,
//   limit: 30
// }
