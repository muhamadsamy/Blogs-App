import axios from 'axios';
import Post from '../../components/Post';

export default async function PostsPage({ searchParams }) {
  const res = await axios.get('https://dummyjson.com/posts');
  const posts = res.data.posts.filter(
    p => !searchParams.category || p.tags.includes(searchParams.category),
  );

  return (
    <div className='container mx-auto mt-8'>
      <div className='max-w-xl mx-auto p-1 mb-1'>
        <p className='text-gray-600 text-sm '>{`Posts: ${posts.length}`}</p>
      </div>
      {posts.map(p => (
        <Post key={p.id} post={p} />
      ))}
    </div>
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
