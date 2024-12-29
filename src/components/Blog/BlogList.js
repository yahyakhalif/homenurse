import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogSection = styled.section`
  padding: 100px 0;
  background: #f9f9f9;
`;

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
`;

const BlogCard = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  background: #fff;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
`;

const BlogTitle = styled.h3`
  color: #333;
  margin-bottom: 1rem;
`;

const BlogExcerpt = styled.p`
  color: #666;
  line-height: 1.6;
`;

const BlogDate = styled.span`
  color: #999;
  font-size: 0.9rem;
`;

const ReadMoreLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  color: #01bf71;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BlogList = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Home Healthcare",
      excerpt: "Learn about the benefits of home healthcare and how it can improve quality of life...",
      date: "15/12/2024",
      slug: "understanding-home-healthcare"
    },
    {
      id: 2,
      title: "Tips for Caregivers",
      excerpt: "Essential tips and best practices for providing excellent home care...",
      date: "20/11/2024",
      slug: "tips-for-caregivers"
    },
    {
      id: 3,
      title: "Healthcare Technology at Home",
      excerpt: "Exploring modern technologies that are revolutionizing home healthcare...",
      date: "25/08/2024",
      slug: "healthcare-technology"
    }
  ];

  return (
    <BlogSection id="blog">
      <BlogContainer>
        <SectionTitle>Latest Articles</SectionTitle>
        {blogPosts.map(post => (
          <BlogCard key={post.id}>
            <BlogDate>{post.date}</BlogDate>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogExcerpt>{post.excerpt}</BlogExcerpt>
            <ReadMoreLink to={`/blog/${post.slug}`}>Read more →</ReadMoreLink>
          </BlogCard>
        ))}
      </BlogContainer>
    </BlogSection>
  );
};

export default BlogList; 