import React from 'react';

function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Art of Self Awareness in Modern Leadership",
      excerpt: "Why the most successful leaders fail to see their own blind spots, and how self-awareness has become the ultimate competitive advantage in the 21st century.",
      date: "June 15, 2026",
      category: "Personal Growth",
      readTime: "5 min read",
      author: "David Oyeleye"
    },
    {
      id: 2,
      title: "Finding Peace in the Middle of Life's Storms",
      excerpt: "Standing firm when rain pounds and chaos reigns. Explore the practical steps to develop an unshakable mindset and stay completely unbothered.",
      date: "May 28, 2026",
      category: "Mindset",
      readTime: "7 min read",
      author: "David Oyeleye"
    },
    {
      id: 3,
      title: "Monetizing Your Unique Giftings",
      excerpt: "You can be fired from your job, but you can't be fired from your gift. Discover how to identify, refine, and deploy your inner diamond for financial freedom.",
      date: "April 10, 2026",
      category: "Business & Career",
      readTime: "6 min read",
      author: "David Oyeleye"
    }
  ];

  return (
    <div className="blog-page section-padding">
      <div className="container">
        <div className="text-center">
          <h1 className="blog-main-title">David Oyeleye's Blog</h1>
          <div className="divider"></div>
          <p className="blog-subtitle">Mind shifting ideas to elevate your thinking and unlock your full potential.</p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-dot"></span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <div className="blog-author-info">
                    <span className="blog-author">By {post.author}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <button className="blog-read-more-btn" onClick={() => alert("This blog post will be available soon!")}>
                    Read Post &rarr;
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .blog-page {
          background-color: var(--color-bg-light);
          min-height: 70vh;
        }
        .blog-main-title {
          font-size: 3rem;
          color: var(--color-primary);
        }
        .blog-subtitle {
          max-width: 600px;
          margin: 0 auto 4rem;
          opacity: 0.85;
          font-size: 1.1rem;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .blog-card {
          background-color: var(--color-white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--color-bg-gray);
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
        }
        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-secondary);
        }
        .blog-card-content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .blog-meta {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
          text-transform: uppercase;
        }
        .blog-category {
          color: var(--color-secondary);
        }
        .blog-dot {
          width: 4px;
          height: 4px;
          background-color: var(--color-bg-gray);
          border-radius: 50%;
        }
        .blog-read-time {
          color: var(--color-text-dark);
          opacity: 0.6;
        }
        .blog-title {
          font-size: 1.4rem;
          color: var(--color-primary);
          margin-bottom: 1rem;
          line-height: 1.35;
        }
        .blog-excerpt {
          font-size: 0.95rem;
          opacity: 0.8;
          margin-bottom: 2rem;
          line-height: 1.6;
          flex: 1;
        }
        .blog-footer {
          border-top: 1px solid var(--color-bg-gray);
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .blog-author-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          opacity: 0.7;
        }
        .blog-read-more-btn {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--color-primary);
          text-align: left;
          font-size: 0.95rem;
          transition: var(--transition-smooth);
        }
        .blog-read-more-btn:hover {
          color: var(--color-secondary);
          transform: translateX(4px);
        }
        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .blog-card-content {
            padding: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Blog;
