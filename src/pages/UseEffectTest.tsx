import React, { useEffect, useRef, useState } from 'react';


function Paginate() {
  const [posts, setPosts] = useState<any[]>([]); // Store fetched posts
  const [page, setPage] = useState(1);           // Keep track of the current page
  const observerRef = useRef<IntersectionObserver | null>(null); // Store the IntersectionObserver
  const lastPostRef = useRef<HTMLDivElement | null>(null); // Store ref for the last post

  // Fetch posts based on the page number
  const fetchPosts = async (pageNum: number) => {
    const url = `http://localhost:4000/getposts?page=${pageNum}`;
    try {
      const result = await fetch(url);
      const data = await result.json();

      if (pageNum === 1) {
        setPosts(data.data);  // Reset for the first page
      } else {
        setPosts((prevPosts) => [...prevPosts, ...data.data]);  // Append for subsequent pages
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Initial fetch on component mount (fetch the first page)
  useEffect(() => {
    fetchPosts(1);  // Fetch the first page when the component mounts
  }, []);

  // Fetch more posts when the page state changes
  useEffect(() => {
    if (page > 1) {
      fetchPosts(page);
    }
  }, [page]);

  // Set up IntersectionObserver to detect when the last post is visible
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect(); // Clean up old observer

    // Create a new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log('Bottom ref: Last post is visible');
          setPage((prevPage) => prevPage + 1); // Load the next page when the last post is visible
        }
      },
      { threshold: 1.0 } // Fire the observer when the entire element is visible
    );

    if (lastPostRef.current) {
      observerRef.current.observe(lastPostRef.current); // Observe the last post element
    }

    return () => observerRef.current?.disconnect(); // Clean up observer on component unmount
  }, [posts]);

  return (
    <div>
      {posts.map((post, index) => (
        <div
          key={post.id}
          style={{ fontSize: '2rem' }}
          ref={index === posts.length - 1 ? lastPostRef : null} // Attach ref to the last post
        >
          {post.id} - {post.title}
        </div>
      ))}
    </div>
  );
}

export default Paginate;

