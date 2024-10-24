import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

export const TopicList: React.FC = () => {
  const topics = [
    { title: 'What is the greenhouse effect?', author: 'Parth', comments: 2 },
    { title: 'How do black holes form?', author: 'Ritika', comments: 3 },
  ];

  return (
    <Grid container spacing={2}>
      {topics.map((topic, index) => (
        <Grid item xs={12} key={index}>
          <Paper
            elevation={3}
            style={{ padding: '100px', marginBottom: '100px' }}
          >
            <Typography variant="h6">{topic.title}</Typography>
            <Typography variant="body2">Posted by {topic.author}</Typography>
            <Typography variant="caption">{topic.comments} comments</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
