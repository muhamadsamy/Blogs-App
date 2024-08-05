// Post.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LimitedParagraph from './LimitedParagraph';
import { postsImages } from '../constants/images';

const defaultImage = 'https://media.sproutsocial.com/uploads/2022/05/How-to-post-on-instagram-from-pc.svg';

const getPostImageUrl = (postId) => {
  return postsImages[(Number(postId) - 1) % postsImages.length];
};

const Post = ({ post }) => {
  const imageUrl = getPostImageUrl(post.id);

  return (
    <div className='max-w-xl mx-auto bg-white shadow-md rounded-md p-6 mb-4'>
      <h2 className='text-xl font-bold mb-2'>{post.title}</h2>
      <div className='mb-4'>
        <Image
          src={imageUrl || defaultImage}
          width={530}
          height={300}
          alt={post.title}
          className='w-full rounded-md'
        />
      </div>
      <LimitedParagraph text={post.body} />
      <div className='flex items-center justify-between'>
        <div className='flex'>
          {post.tags && post.tags.map((tag, index) => (
            <span
              key={index}
              className='text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2'>
              {tag}
            </span>
          ))}
        </div>
        <div className='flex items-center'>
          <Image
            src={'/heart-filled.svg'}
            alt='heart'
            width={20}
            height={20}
            color='black'
            className='mr-1'
          />
          <span className='text-gray-600'>{post.reactions}</span>
        </div>
      </div>

      <div className='text-center mt-8'>
        <Link
          href={`/post/${post.id}`}
          className='inline-block bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Post;

