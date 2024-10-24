import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { Dashboard } from '../pages';

import { CreateTopics } from '../shared/components/forum-hook/topic-create';

import { TopicList } from '../shared/components/forum-hook/topic-forum';

export const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="topicsList" element={<TopicList />} />
      <Route path="create-topic" element={<CreateTopics />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
