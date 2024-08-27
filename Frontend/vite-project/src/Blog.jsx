import React from 'react';
import { useNavigate } from 'react-router-dom';
import blogContent from './Blogdata';
import { Typography, Card, CardContent, Grid, CardMedia } from '@mui/material';

const Blog = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    // Navigate to the specific blog detail page
    navigate(`/blog/${id}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Add Blog heading */}
      <Typography 
        variant="h3" 
        component="h2" 
        gutterBottom 
        style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}
      >
        Blog
      </Typography>

      <Grid container spacing={3}>
        {blogContent.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card onClick={() => handleCardClick(blog.id)} style={{ cursor: 'pointer' }}>
              <CardMedia
                component="img"
                image={blog.image}
                alt={blog.title}
                style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                  {blog.shortDescription}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Blog;








