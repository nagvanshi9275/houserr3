import React from 'react';
import { useParams } from 'react-router-dom';
import blogContent from './Blogdata';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogContent.find(blog => blog.id.toString() === id);

  if (!blog) {
    return <Typography variant="h6">Blog post not found!</Typography>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Ensure "Blog" text is visible at the top */}
      <Typography 
        variant="h3" 
        component="h2" 
        gutterBottom 
        style={{  marginBottom: '20px', color: '#333' }}
      >
        Blog
      </Typography>

      <Card style={{ width: '100%', height: '100%' }}>
        <CardMedia
          component="img"
          image={blog.image}
          alt={blog.title}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h4" component="div">
            {blog.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" style={{ marginTop: '10px' }}>
            {blog.fullDescription}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogDetail;
